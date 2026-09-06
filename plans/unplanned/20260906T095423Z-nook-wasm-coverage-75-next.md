---
title: Nook WASM coverage 75 percent follow-up slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T09:54:23Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T090014Z-nook-wasm-coverage-75-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission in bounded 5-to-10
percentage-point steps. Pull request 1439 merged with fresh hosted evidence of
71.73 percent `nook-wasm` line coverage and a 70 percent executable floor. This
slice continues toward the next defensible 75 percent floor.

## Requirements

- Add behavior-focused tests for deterministic uncovered `nook-wasm` paths
  selected from the post-merge hosted report.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the
  highest safe floor for this slice.
- Preserve independent package accounting and the existing WASM/browser
  harness.

## Constraints and exclusions

- Start from merged Main `0fbd5bc726efd26b7107da4caf7e2a6001479d59` and inspect
  the current per-file report before choosing tests.
- Prefer deterministic manager, storage-state, projection, and adapter paths
  with existing in-crate fixtures; defer logger, provider-I/O, sync-I/O, and
  infrastructure-heavy paths until their testability is established.
- Add behavior-focused tests only; no exclusions, ignore annotations,
  aggregate masking, or assertion-free filler.
- Keep authored additions below 2,000 lines and use static local gates only;
  hosted CI is authoritative for Rust/WASM coverage.
- Do not run local Rust, WASM, or product Docker builds.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 1,000
- Owning modules: `nook-wasm` manager, storage-state, projection, and adapter
  tests
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 71.73 toward
  75 percent after hosted coverage confirms the safe floor.

## Initial plan

1. Branch from merged Main `0fbd5bc726efd26b7107da4caf7e2a6001479d59` and use
   the current hosted report to select high-value deterministic paths.
2. Add behavior-focused native/browser tests for success, rejection, lifecycle,
   and projection branches while preserving the source-size limit.
3. Run formatter, metadata, policy, diff, and pre-push static gates without
   local product builds.
4. Push and run exact-head hosted validation; inspect the independent package
   line report before changing the floor.
5. Resolve readiness, squash-merge, and update this issue with exact evidence.

## Completion evidence

- Hosted `nook-wasm` coverage reaches 75 percent, or the highest
  evidence-backed floor is recorded if this bounded slice cannot reach 75
  percent within budget.
- The package floor and executable policy expectation match the final hosted
  proof.
- Exact-head validation, review resolution, readiness, merge, and Workbench
  records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path,
  username, environment value, or unnecessary infrastructure detail.
