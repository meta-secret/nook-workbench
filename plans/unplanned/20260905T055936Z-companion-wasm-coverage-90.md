---
title: Raise companion WASM coverage to 90 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-05T05:59:36Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260905T050836Z-companion-wasm-coverage-60.md
---

# Task plan

## Interpreted request

Continue the serial coverage mission after companion WASM reached a 75 percent floor. Cover the remaining decoder and public-wrapper behavior needed for `nook-companion-wasm` to reach the final 90 percent target.

## Requirements

- Add grouped behavior tests for all 16 response-decoding exports, including accepted typed variants and semantic rejection mapping.
- Add grouped behavior tests for the currently uncovered public wrappers in `lib.rs`, including persistence, outcomes, pairing, OAuth, and vault-host policy.
- Measure the test-only change under the existing 75 percent floor first, then raise the independent floor to 90 only after exact hosted evidence confirms it.
- Preserve production behavior, package inventory, exclusions, and every unrelated package floor.

## Constraints and exclusions

- No local Rust, WASM, or product Docker builds; use static local gates and hosted execution.
- Keep this one pull request below 2,000 authored additions and cap the planned implementation at 900 additions.
- Limit the primary implementation to `nook-companion-wasm/src/response_decoding.rs`, `nook-companion-wasm/src/lib.rs`, and an optional test-only `serde_json` dev dependency.
- Permit at most 120 additional authored lines in `credential_fill.rs` only if first hosted coverage lands narrowly below 90 percent.
- Do not add production reachability hooks, filler assertions, coverage ignores, or new exclusions.
- Begin no `nook-wasm` or Hive implementation until this slice merges.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 900
- Owning modules, packages, or layers: companion WASM response decoders, public wrapper tests, and coverage policy
- Ownership units:
1. Capability: Cover response-decoding boundaries; Gizmo ID: rust-crate-coverage-90; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Grouped WASM tests cover every response decoder with accepted and rejected typed fixtures
2. Capability: Cover companion public wrappers; Gizmo ID: rust-crate-coverage-90; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Behavior tests cover persistence, outcome, pairing, OAuth, and vault-host projections and errors
3. Capability: Enforce companion WASM at 90 percent; Gizmo ID: rust-crate-coverage-90; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact hosted companion WASM line coverage is at least 90 percent before the floor changes from 75 to 90
4. Capability: Deliver the companion WASM 90 percent slice; Gizmo ID: rust-crate-coverage-90; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head validation, review resolution, readiness, squash merge, and Workbench closeout succeed
- Public or cross-module interfaces: Response-decoding WASM exports, companion public wrapper exports, and the independent `nook-companion-wasm` line floor
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Raise `nook-companion-wasm` from 75 to 90 percent; Acceptance evidence: hosted WASM behavior tests cover the planned boundaries and independent package coverage reaches at least 90 percent
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-90; Gizmo name: Companion WASM 90 percent; Predecessor Gizmo ID: None; Add response-decoder and public-wrapper behavior suites, measure, then enforce 90 percent; Estimated authored changed lines: 900; Acceptance evidence: independent hosted coverage reaches at least 90 percent and exact-head delivery succeeds

## Initial plan

1. Add six grouped WASM-only response-decoder tests using typed JSON fixtures and explicit success/rejection assertions.
2. Add seven public-wrapper behavior clusters for persistence, outcomes, pairing, OAuth, and vault-host policy.
3. Keep the floor at 75 percent for the first hosted measurement and inspect exact per-file results.
4. If coverage is at least 90 percent, raise the independent floor and executable policy expectation to 90; otherwise add only the bounded credential-fill contingency justified by line evidence.
5. Revalidate the exact floor head, address in-scope findings, verify readiness, squash-merge, and close Workbench records.

## Completion evidence

- `nook-companion-wasm` independently measures at least 90 percent and its enforced floor is 90 percent.
- Every response decoder and the planned public wrappers have behavior-focused success and rejection assertions.
- Every unrelated crate floor and exclusion is preserved.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
