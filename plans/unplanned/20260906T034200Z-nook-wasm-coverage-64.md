---
title: Raise nook-wasm coverage floor to 64 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T02:24:56Z
agent: codex
gizmo_id: rust-crate-coverage-90
---

# Task plan

## Interpreted request

Continue the serial crate-coverage mission in comfortable 5-to-10 percentage-point increments. The prior merged floor was 60 percent; this slice selected deterministic uncovered `nook-wasm` adapters and targeted the next bounded increase.

## Requirements

- Add behavior-focused tests for deterministic uncovered `nook-wasm` adapters and projections.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the new floor.
- Keep the coverage policy executable and preserve independent package accounting.

## Constraints and exclusions

- Behavior-focused tests only; no exclusions, ignore annotations, aggregate masking, or assertion-free filler.
- Authored additions remained below 2,000 lines.
- Static local gates only; hosted CI remained authoritative for Rust/WASM coverage.
- Do not run local Rust, WASM, or product Docker builds.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 900
- Owning modules: `nook-wasm` typed adapters and public projections
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 60 to 64 percent after hosted coverage confirms at least 64 percent.

## Initial plan

1. Add behavior tests for a bounded group of low-coverage public and typed adapter modules.
2. Run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
3. Push and run exact-head hosted validation; inspect the package line report before changing the floor.
4. Resolve review/readiness, squash-merge, and update the mission ledger with exact coverage evidence.

## Completion evidence

- Hosted `nook-wasm` coverage measured 64.01 percent on exact head `b66a60730bc86ca47844af762d44c1c46e6c189b`.
- The package floor and executable policy expectation are both 64 percent.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
