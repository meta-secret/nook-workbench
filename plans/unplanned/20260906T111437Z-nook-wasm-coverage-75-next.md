---
title: Nook WASM coverage 75 percent next slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T11:14:37Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T095423Z-nook-wasm-coverage-75-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission after pull request 1442
merged with exact hosted evidence of 72.50 percent `nook-wasm` line coverage
and a matching 72.5 percent floor. This slice targets the next defensible
75 percent floor within a bounded, behavior-focused pull request.

## Requirements

- Add tests for deterministic, high-value uncovered `nook-wasm` paths selected
  from the current hosted per-file report.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the
  highest safe floor for this slice.
- Preserve independent package accounting and the existing WASM/browser harness.

## Constraints and exclusions

- Start from merged Main `ab84eea871fa2e40b22c14adaeecfabae18fa24e` and inspect
  current source/report evidence before choosing tests.
- Prefer deterministic manager, storage-state, projection, and adapter paths;
  defer infrastructure-heavy provider I/O and logger paths until testability is
  established.
- Add behavior-focused tests only: no exclusions, aggregate masking,
  assertion-free filler, or production behavior changes.
- Keep authored additions below 2,000 lines and use static local gates only;
  hosted CI is authoritative for Rust/WASM coverage.
- Do not run local Rust, WASM, or product Docker builds.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 1,000
- Owning modules: `nook-wasm` manager, storage-state, projection, and adapter tests
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 72.50 toward
  75 percent after hosted coverage confirms the safe floor.

## Initial plan

1. Branch from merged Main and inspect the latest coverage report and source
   boundaries for the lowest deterministic files.
2. Add behavior-focused native/browser tests for success, rejection, lifecycle,
   and projection branches while preserving the source-size limit.
3. Run formatter, metadata, policy, diff, and pre-push static gates without
   local product builds.
4. Push and run exact-head hosted validation; inspect independent package line
   coverage before changing the floor.
5. Resolve readiness, squash-merge, and update the issue with exact evidence.

## Completion evidence

- Hosted `nook-wasm` coverage reaches 75 percent, or the highest
  evidence-backed floor is recorded if this bounded slice cannot reach 75
  percent within budget.
- The package floor and executable policy expectation match hosted proof.
- Exact-head validation, review resolution, readiness, merge, and Workbench
  records are complete.

## Completed slice

Pull request #1445 added behavior-focused manager and storage-adapter tests and
raised the executable `nook-wasm` floor from 72.5 to 73.0 percent. Exact hosted
run `34031529707` measured 25,391 of 34,774 lines, or 73.02 percent, with
`nook-companion-wasm` remaining at 91.05 percent. Readiness returned
`ready: true` with `behindBy: 0`, zero unresolved review threads, and a
successful exact-head Pages deployment. The pull request squash-merged as
`c7cfd0a5ee787c211734b416879c7cc2f0cf0db9` after rebasing onto Main
`49b2bf9a590b968f50f3f29bf00fa15080e8c967`.

The next slice continues from merged Main at the evidence-backed 73.0 percent
floor and targets the next 5-to-10-point increment with focused tests in the
remaining low-coverage `nook-wasm` modules.

## Safety review

- This record contains no transcript, secret, private data, local path,
  username, environment value, or unnecessary infrastructure detail.
