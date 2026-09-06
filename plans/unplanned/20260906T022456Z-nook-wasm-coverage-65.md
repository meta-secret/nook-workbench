---
title: Raise nook-wasm coverage floor to 65 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T02:24:56Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260905T233244Z-nook-wasm-coverage-60.md
---

# Task plan

## Interpreted request

Continue the serial 90-percent coverage mission after merged pull request 1417. The user approved 5–10 percentage-point increments, so the next bounded target is a 65 percent `nook-wasm` floor.

## Requirements

- Add behavior-focused WASM tests for deterministic public adapters and typed projections that remain uncovered.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms at least 65 percent.
- Keep coverage policy executable and preserve independent package accounting.

## Constraints and exclusions

- No local Rust, WASM, or product Docker builds; use static local gates and hosted execution.
- Keep this PR below 2,000 authored additions and limit production changes to executable floor metadata and narrowly required test placement.
- Do not add coverage exclusions, ignores, fallback behavior, or unrelated product changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 900
- Owning modules: `nook-wasm` public adapters and typed projection wrappers
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 60 to 65 percent after hosted coverage confirms at least 65 percent. The latest merged Main proof measured 62.07 percent combined WASM line coverage.

## Initial plan

1. Branch from the exact merged Main head and add browser-harness tests for currently native-only deterministic wrappers plus selected rejection and state-projection paths.
2. Run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
3. Push and run exact-head hosted validation; inspect the package line report before changing the floor.
4. Resolve review/readiness, squash-merge, and update the mission ledger with exact coverage evidence.

## Completion evidence

- Hosted `nook-wasm` coverage is at least 65 percent on the exact PR head.
- The package floor and executable policy expectation are both 65 percent.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
