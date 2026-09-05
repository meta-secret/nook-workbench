---
title: Raise nook-wasm coverage floor to 55 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-05T20:48:00Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260905T200056Z-nook-wasm-coverage-53.md
---

# Task plan

## Interpreted request

Continue the serial coverage mission after pull request 1397. Raise the next remaining below-90 package, `nook-wasm`, in a small deterministic slice supported by the latest hosted Main evidence.

## Requirements

- Add behavior-focused tests for the runtime locale, run-mode, storage-argument, vault-policy, switch-decision, and Google Drive wrapper projections.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the new floor.
- Keep the coverage policy executable and preserve independent package accounting.

## Constraints and exclusions

- No local Rust, WASM, or product Docker builds; use static local gates and hosted execution.
- Keep this PR well below 2,000 authored additions and cap the implementation to focused wrapper tests plus the executable floor expectation.
- Do not add coverage exclusions, ignores, fallback behavior, or unrelated production changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 100
- Owning modules: `nook-wasm` runtime adapter and coverage policy
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 53 to 55 percent after hosted coverage confirms at least 55 percent. Fresh Main measured 54.81 percent on the package report.

## Initial plan

1. Add inline native behavior tests for deterministic runtime wrappers and successful value projections.
2. Run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
3. Push and run one exact-head hosted validation; inspect the line report and raise the floor only after measured proof.
4. Resolve review/readiness, squash-merge, and update the mission ledger with the exact result.

## Completion evidence

- Hosted `nook-wasm` coverage is at least 55 percent on the exact PR head.
- The package floor and executable policy expectation are both 55 percent.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
