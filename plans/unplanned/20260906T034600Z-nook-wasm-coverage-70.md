---
title: Nook WASM coverage 70 percent iterative slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T03:46:00Z
agent: codex
gizmo_id: rust-crate-coverage-90
---

# Task plan

## Interpreted request

Continue the serial crate-coverage mission in comfortable 5-to-10 percentage-point increments. The merged Main baseline independently measures `nook-wasm` at 64.01 percent and enforces a 64 percent floor; this slice targets 70 percent without weakening any other package floor.

## Requirements

- Add behavior-focused tests for deterministic uncovered `nook-wasm` adapters and projections.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the new floor.
- Keep the coverage policy executable and preserve independent package accounting.

## Constraints and exclusions

- Use the final hosted coverage report from pull request 1423 to select deterministic uncovered `nook-wasm` adapters and projections.
- Add behavior-focused tests only; do not add exclusions, ignore annotations, aggregate masking, or assertion-free filler.
- Raise only the `nook-wasm` executable floor after exact hosted proof reaches the target. If the bounded slice cannot reach 70 percent, record the measured evidence and set only the highest evidence-backed floor.
- Keep authored additions below 2,000 lines and preserve the existing WASM/browser harness and package inventory.
- Use static local gates only; hosted CI is the authority for Rust/WASM coverage. Do not run local Rust, WASM, or product Docker builds.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 900
- Owning modules: `nook-wasm` low-coverage typed adapters and public projections
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 64 to 70 percent after hosted coverage confirms at least 70 percent.

## Initial plan

1. Inspect the exact hosted per-file coverage report from pull request 1423 and select a bounded group of deterministic uncovered paths.
2. Add behavior tests, then run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
3. Push and run exact-head hosted validation; inspect the package line report before changing the floor.
4. Resolve review/readiness, squash-merge, and update the mission ledger with exact coverage evidence.

## Completion evidence

- Exact hosted head passes the repository policy, native/WASM tests, coverage report, web verification, Hive, and readiness checks.
- `nook-wasm` independently measures at least 70 percent line coverage with a matching floor, or a documented evidence-backed lower floor if this bounded slice proves the target is not reachable without exceeding the budget.
- Pull request is merged only after Main freshness and exact-head readiness are rechecked.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
