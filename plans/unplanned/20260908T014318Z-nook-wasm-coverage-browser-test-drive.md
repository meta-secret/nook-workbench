---
title: Nook WASM coverage browser-test drive
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-08T01:43:18Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260908T002610Z-nook-wasm-indexed-db-lifecycle.md
---

## Interpreted request

Continue the user-authorized serial coverage mission from merged Main after
pull request 1551. Produce a materially larger `nook-wasm` coverage increment
in one pull request by executing deterministic existing tests in the
browser-instrumented WASM phase and adding focused missing cases where that
execution exposes uncovered branches.

## Requirements

- Preserve independent `nook-wasm` and `nook-companion-wasm` accounting.
- Prioritize deterministic manager, passkey, provider-adapter, and event
  projection paths that can execute without remote services.
- Raise only the `nook-wasm` floor after exact hosted coverage proves the
  measured result clears the new floor.
- Deliver one pull request with exact-head hosted validation, readiness,
  squash merge, and Workbench closeout.

## Constraints and exclusions

- Product changes are tests and the executable `nook-wasm` floor only; no
  production behavior, public contract, or coverage exclusion changes.
- Convert only deterministic tests that are valid in the browser WASM runner;
  preserve native test execution where the test macro supports both targets.
- Do not exercise or fake remote iCloud, Drive, or GitHub services; retain
  fail-closed guards for those boundaries.
- Use static local gates only. Local Rust/WASM builds, product Docker, and full
  repository validation remain prohibited; hosted checks are authoritative.
- Keep authored additions below the 2,000-line pull-request limit and every
  touched source file under the repository's 1,000-line policy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 900
- Owning modules: `nook-wasm` manager, passkey observation/browser helpers,
  deterministic storage/provider adapters, and colocated tests.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Browser-phase execution of the
  selected deterministic tests plus focused missing cases; static gates, exact
  hosted validation, independent coverage, readiness, squash merge, and
  Workbench closeout.

## Initial plan

1. Start from merged Main `72e20c7d07e2b1995b3ef55f5842374706ba877b` at the
   executable `nook-wasm` floor of 81.2 percent.
2. Convert suitable deterministic host-only tests in low-coverage modules to
   `wasm_bindgen_test`, and add behavior-focused browser tests for uncovered
   branches without changing production behavior.
3. Run formatting, diff, and pre-push static gates without product builds.
4. Push the branch, obtain exact-head hosted validation, and extract the
   independent WASM line-coverage result before changing its floor.
5. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record completion evidence.

## Completion evidence

- The selected deterministic tests execute in the WASM coverage phase.
- Exact hosted coverage, test count, readiness, merged head, and the next-floor
  decision are recorded in the issue and a linked completion worklog.

## Safety review

- Tests use synthetic local records and generated keys only; no credentials or
  raw logs are stored in Workbench.
- No production implementation or API contract changes are planned.
- No coverage exclusions, assertion-free filler, aggregate masking, or remote
  service stubs are allowed.
