---
title: Nook WASM shared Drive storage coverage slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-07T16:26:50Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260907T154456Z-nook-wasm-coverage-password-unlock.md
---

## Interpreted request

Continue the user-authorized serial coverage mission from merged Main after
pull request 1528. Add a bounded set of behavior-focused tests for the
deterministic Google Drive shared-folder storage boundary, then raise the
executable `nook-wasm` floor only when exact hosted coverage proves a safe
increment.

## Requirements

- Exercise shared-folder input validation, OAuth-token rejection, response
  projection, and fail-closed folder/email guards without network calls.
- Preserve independent `nook-wasm` and `nook-companion-wasm` accounting.
- Deliver one pull request with exact-head hosted validation, readiness,
  squash merge, and Workbench closeout evidence.

## Constraints and exclusions

- Product changes are behavior-focused tests plus the executable `nook-wasm`
  floor only if hosted proof supports the change.
- Do not change production behavior, public contracts, coverage exclusions, or
  aggregate accounting.
- Use local deterministic fixtures only; do not access remote providers or
  persist secrets in the ledger.
- Use local deterministic static gates only; local Rust, WASM, product Docker,
  and full repository validation remain prohibited.
- Keep authored additions below the 2,000-line pull-request limit and keep
  touched source files under the repository's 1,000-line policy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 120
- Owning module: `nook-wasm` `storage/drive_shared.rs` Google Drive
  shared-folder boundary and colocated tests.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Cover deterministic shared Drive
  guards, static gates, exact hosted validation, independent coverage,
  readiness, squash merge, and Workbench closeout.

## Initial plan

1. Start from merged Main `f2d96a19ce2a4a6dd52fe1651d64f0d6fcfb9d59` at the
   executable `nook-wasm` floor of 79.5 percent.
2. Inspect the shared-folder adapter and add focused tests for deterministic
   validation and response-shaping branches without changing production code.
3. Run formatting, diff, and pre-push static gates without product builds.
4. Push the branch, obtain exact-head hosted validation, and inspect the
   independent coverage result before changing its floor.
5. Rebase if Main advances, rerun exact-head validation, then resolve
   readiness, squash-merge, and record completion evidence.

## Completion evidence

- Tests cover shared Drive input and response behavior through the owning
  storage module with local deterministic fixtures.
- Exact hosted coverage, readiness, merged head, and the next-floor decision
  are recorded in the issue and a linked completion worklog.

## Safety review

- Tests use local deterministic records only; no credentials or raw logs are
  stored in Workbench.
- No production implementation or API contract changes are planned.
- No coverage exclusions, assertion-free filler, or aggregate masking are
  allowed.
