---
title: Raise nook-wasm coverage floor to 60 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-05T23:32:44Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260905T214700Z-nook-wasm-coverage-57.md
---

# Task plan

## Interpreted request

Continue the serial 90-percent coverage mission after pull request 1404 with the larger increment requested by the user. Raise the merged `nook-wasm` floor from 56 to 60 percent using behavior-focused tests selected from the hosted per-file report.

## Requirements

- Add real behavior tests for uncovered or low-coverage `nook-wasm` projection and public-adapter paths.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms at least 60 percent.
- Keep coverage policy executable and preserve independent package accounting.

## Constraints and exclusions

- No local Rust, WASM, or product Docker builds; use static local gates and hosted execution.
- Keep this PR below 2,000 authored additions and limit production changes to the executable floor metadata and narrowly required test placement.
- Do not add coverage exclusions, ignores, fallback behavior, or unrelated product changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 450
- Owning modules: `nook-wasm` public adapters and low-coverage typed projections
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 56 to 60 percent after hosted coverage confirms at least 60 percent. The latest merged Main proof measured 56.85 percent.

## Initial plan

1. Branch from the exact merged Main head and add behavior tests for a bounded group of low-coverage public/projection modules, prioritizing deterministic input/output and rejection paths.
2. Run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
3. Push and run exact-head hosted validation; inspect the package line report before changing the floor.
4. Resolve review/readiness, squash-merge, and update the mission ledger with exact coverage evidence.

## Completion evidence

- Hosted `nook-wasm` coverage is at least 60 percent on the exact PR head.
- The package floor and executable policy expectation are both 60 percent.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
