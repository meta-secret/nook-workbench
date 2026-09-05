---
title: Raise nook-wasm coverage floor to 56 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-05T21:47:00Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260905T204800Z-nook-wasm-coverage-55.md
---

# Task plan

## Interpreted request

Continue the serial 90-percent coverage mission after pull request 1401. Raise the next small below-90 slice for `nook-wasm` from the merged Main baseline, using additional behavior-focused policy-wrapper tests and a matching executable floor update.

## Requirements

- Add behavior-focused tests for the remaining pure `NookVaultClientPolicy` projections and runtime-config valid-value paths.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the new floor.
- Keep the coverage policy executable and preserve independent package accounting.

## Constraints and exclusions

- No local Rust, WASM, or product Docker builds; use static local gates and hosted execution.
- Keep this PR well below 2,000 authored additions and limit production changes to the executable floor metadata and tests.
- Do not add coverage exclusions, ignores, fallback behavior, or unrelated product changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 240
- Owning modules: `nook-wasm` runtime adapter and coverage policy
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 55 to 56 percent after hosted coverage confirms at least 56 percent. The latest merged Main proof measured 55.56 percent.

## Initial plan

1. Branch from the exact merged Main head and add tests for policy decisions, status projections, and valid runtime configuration values.
2. Run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
3. Push and run one exact-head hosted validation; inspect the package line report before changing the floor.
4. Resolve review/readiness, squash-merge, and update the mission ledger with exact coverage evidence.

## Completion evidence

- Hosted `nook-wasm` coverage is at least 56 percent on the exact PR head.
- The package floor and executable policy expectation are both 56 percent.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
