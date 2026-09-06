---
title: Nook WASM coverage 75 percent next slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T09:00:14Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T075500Z-nook-wasm-coverage-75-followup.md
---

# Task plan

## Interpreted request

Continue the serial crate-coverage mission in the user-authorized 5-to-10 percentage-point increments. Merged Main now independently measures `nook-wasm` at 70.87 percent with a 70 percent floor; this bounded slice targets 75 percent.

## Requirements

- Add behavior-focused tests for deterministic uncovered `nook-wasm` manager and vault API paths.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the highest safe floor for this slice.
- Preserve independent package accounting and the existing WASM/browser harness.

## Constraints and exclusions

- Use the final hosted per-file report from pull request 1436 to select deterministic paths.
- Prioritize `manager/connect.rs`, `manager/device_protection.rs`, `manager/sentinel.rs`, and `vault_api.rs`; defer logger, drive, sync-I/O, and other infrastructure-heavy zero-coverage files until their testability is established.
- Add behavior-focused tests only; no exclusions, ignore annotations, aggregate masking, or assertion-free filler.
- Keep authored additions below 2,000 lines and use static local gates only; hosted CI is authoritative for Rust/WASM coverage.
- Do not run local Rust, WASM, or product Docker builds.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 1,000
- Owning modules: `nook-wasm` manager lifecycle, device protection, sentinel, and vault API adapters
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 70 toward 75 percent after hosted coverage confirms the safe floor.

## Initial plan

1. Branch from merged Main `ebc68859ccb69a255e2f0d6254fe9c7e71383377` and inspect the selected modules' existing harnesses.
2. Add behavior-focused native/browser tests for deterministic success, rejection, lifecycle, and projection paths.
3. Run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
4. Push and run exact-head hosted validation; inspect the independent package line report before changing the floor.
5. Resolve readiness, squash-merge, and update the mission ledger with exact evidence.

## Completion evidence

- Hosted `nook-wasm` coverage is at least 75 percent on the exact PR head, or the highest evidence-backed floor is recorded if this bounded slice cannot reach 75 percent within budget.
- The package floor and executable policy expectation match the final hosted proof.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
