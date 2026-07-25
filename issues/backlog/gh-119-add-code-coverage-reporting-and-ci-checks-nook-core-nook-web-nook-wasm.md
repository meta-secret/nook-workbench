---
title: "Add code coverage reporting and CI checks (nook-core, nook-web, nook-wasm)"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-29T21:00:06Z
updated_at: 2026-07-04T00:29:50Z
source_issues: ["https://github.com/meta-secret/nook/issues/119"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Add code coverage reporting and CI checks (nook-core, nook-web, nook-wasm)

## Imported context

This record was imported from [Nook GitHub issue #119](https://github.com/meta-secret/nook/issues/119)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

We run tests in CI (`cargo nextest run -p nook-core --profile ci`, `vitest run` in `nook-web`, Playwright e2e) but have **no code coverage measurement or gates**. We need coverage reporting with CI checks so we can see trends, spot untested areas, and know when it is time to add unit tests.

## Motivation

- **`nook-core`** holds crypto, vault format, sync, validation, and multi-device logic — the highest-value target for unit test coverage.
- **`nook-web`** has ~14 Vitest unit test files plus extensive Playwright e2e (~19 stub specs + nightly sync-live); unit coverage complements e2e, and **e2e coverage shows which UI/TS paths our user flows actually exercise**.
- **`nook-wasm`** is mostly glue/I/O today (no dedicated unit tests; comment in `.task/core.yml` notes wasm is covered via web e2e). Coverage here is nice-to-have and may be limited to testable logic or excluded paths.

Without coverage metrics we cannot answer: *Which modules are under-tested? Did this PR improve or regress coverage? Which Svelte/TS code is only hit by e2e vs unit tests?*

## Scope

### Required: `nook-core`

- Measure line/branch coverage when running existing nextest suite (`-p nook-core --profile ci`).
- Tooling options (pick one that works in our Docker CI toolchain):
  - [`cargo-llvm-cov`](https://github.com/taiki-e/cargo-llvm-cov) (preferred for nextest compatibility), or
  - `cargo-tarpaulin` (simpler but can be slower / less nextest-friendly).
- Wire into Taskfile (e.g. `task core:coverage` / extend `_rust:test:run`) and CI verify path.
- Upload coverage artifact and/or report to a service (Codecov, Coveralls, or GitHub Actions summary).
- **CI check**: enforce a minimum threshold (start with a baseline measured from `main`, then ratchet up) or fail on coverage regression vs base branch.

### Stretch: `nook-web` (Vitest unit tests)

- Vitest already lists `@vitest/coverage-v8` as an optional peer — add coverage config and `bun run test -- --coverage`.
- Scope to `src/lib/**` (exclude e2e, generated wasm bindings initially if needed).
- Same CI artifact + optional threshold/regression check.

### Stretch: Playwright e2e coverage

We already have substantial e2e coverage via Playwright (`e2e-pr` on every PR, full stub `e2e` on main, `sync-live` nightly). **Extract JS/TS coverage from those runs** rather than duplicating flows in unit tests.

**Approach (Chromium V8 via CDP):**

- Collect browser coverage per test with Playwright's V8 API (`page.coverage.startJSCoverage` / `stopJSCoverage`) or a fixture wrapper; merge in global teardown.
- Recommended stack for Vite + Playwright + Vitest merge: [`monocart-coverage-reports`](https://github.com/cenfun/monocart-coverage-reports) + [`monocart-reporter`](https://www.npmjs.com/package/monocart-reporter) (Playwright) and optionally [`vitest-monocart-coverage`](https://github.com/cenfun/vitest-monocart-coverage) so unit + e2e share one report format. See [merge-code-coverage-vitest](https://github.com/cenfun/merge-code-coverage-vitest) for a merged report example.

**Nook-specific constraints:**

| Topic | Detail |
|-------|--------|
| CI server | CI serves **production `dist`** via `vite preview` (`playwright.config.ts`), not dev — enable **source maps** in the Vite build (hidden maps OK) so V8 hits map back to `src/**`. |
| Projects | `e2e-pr` (~11 specs, PR CI) is the best first target; extend to full stub `e2e` on main once stable. Skip `sync-live` initially (nightly, real APIs). |
| Parallelism | Projects use `fullyParallel: true` — merge shard/worker coverage in teardown (monocart handles this). |
| WASM / Rust | E2e exercises `nook-wasm` in the browser, but **V8 coverage is JS/TS only** — Rust domain logic stays on `nook-core` coverage. Do not expect wasm bytecode in JS reports. |
| Filters | Use `entryFilter` / `sourceFilter` to include `src/**`, exclude `node_modules`, bundled wasm glue if noisy, and e2e helper files. |
| Svelte | Component `.svelte` files need source-map remapping; validate on a few known flows (e.g. login, add secret) before trusting percentages. |

**Deliverables:**

- [ ] Coverage-collecting Playwright fixture (or global hook) wired into `playwright.config.ts`.
- [ ] Optional `build:coverage` profile (Istanbul instrumentation via `vite-plugin-istanbul`) if raw V8 + source maps are insufficient for Svelte — try V8 + source maps first.
- [ ] HTML/LCOV artifact uploaded from CI e2e job; optional merge with Vitest unit coverage into one dashboard.
- [ ] Document which e2e project(s) contribute coverage and baseline expectations (e2e-pr will cover fewer lines than full e2e).

### Stretch: `nook-wasm`

- Evaluate feasibility for `wasm32-unknown-unknown` (coverage tooling is limited on wasm).
- Alternatives if native wasm coverage is impractical:
  - Cover only host-testable modules re-exported from wasm, or
  - Document exclusion with rationale and rely on e2e + nook-core coverage for domain logic.

## Acceptance criteria

- [ ] Coverage runs locally via Taskfile inside Docker (consistent with [quality workflow](https://github.com/meta-secret/nook/blob/main/.cortex/workflows/quality.md)).
- [ ] PR CI produces a readable coverage report (comment, check run, or uploaded artifact).
- [ ] **`nook-core` has an enforced minimum coverage threshold** (baseline on first merge, documented in `.cortex/workflows/quality.md`).
- [ ] Coverage diff visible on PRs (increase/decrease vs base).
- [ ] *(Stretch)* Playwright e2e produces JS/TS coverage artifacts mapped to `src/**`.
- [ ] *(Stretch)* Optional merged report: Vitest unit + Playwright e2e + nook-core (separate or combined dashboards).
- [ ] Docs updated: `.cortex/workflows/quality.md` and optionally `.cortex/workflows/ci-pipeline.md`.

## Implementation notes

**Current test surface (for baseline planning):**

| Package | Test runner | Notes |
|---------|-------------|-------|
| `nook-core` | `cargo nextest run -p nook-core --profile ci` | Unit tests in modules + `tests/*.rs` integration tests |
| `nook-web` unit | `vitest run` | 14 unit test files under `src/lib/` |
| `nook-web` e2e | Playwright (`e2e-pr`, `e2e`, `sync-live`) | CI preview server on `:5173`; PR runs `e2e-pr` only |
| `nook-wasm` | (none) | Clippy on wasm32; logic delegated to `nook-core` |

**Suggested rollout:**

1. Land reporting only (no fail) on `main` to establish baseline.
2. Add PR regression check (coverage must not drop vs base).
3. Set initial `nook-core` floor (e.g. 60–70% — tune after baseline).
4. Add Vitest unit coverage for `src/lib/**`.
5. Add Playwright e2e coverage starting with `e2e-pr` project.
6. Merge unit + e2e reports if both are stable; revisit `nook-wasm` / `sync-live` last.

**Out of scope (for this issue):**

- Mandating 100% line coverage on every PR (use thresholds + regression instead).
- Expecting Playwright coverage to measure Rust/wasm bytecode (use `nook-core` for domain logic).

## References

- Taskfile: `.task/core.yml` (`_rust:test:run`), `.task/web.yml` (`_web:test`, `_web:test:e2e:pr:parallel`)
- Playwright: `nook-web/playwright.config.ts` (projects, preview server in CI)
- CI: `.github/workflows/pr.yml`, `.github/workflows/main.yml`
- Architecture: `.cortex/ARCHITECTURE.md` (package boundaries)
- Playwright coverage: [monocart-coverage-reports — Playwright](https://github.com/cenfun/monocart-coverage-reports#collecting-v8-coverage-data-with-playwright)
- Merge unit + e2e: [merge-code-coverage-vitest](https://github.com/cenfun/merge-code-coverage-vitest)

## Historical comments

No comments.
