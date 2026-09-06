---
title: Nook WASM coverage 75 percent iterative slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T06:56:01Z
agent: codex
gizmo_id: rust-crate-coverage-90
---

# Task plan

## Interpreted request

Continue the serial crate-coverage mission in comfortable 5-to-10 percentage-point increments. Merged Main now independently measures `nook-wasm` at 69.66 percent with a 69.5 percent floor; this slice targets the next bounded increase toward 75 percent.

## Requirements

- Add behavior-focused tests for deterministic uncovered `nook-wasm` manager and storage adapters.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the highest safe floor for this slice.
- Keep the coverage policy executable and preserve independent package accounting.

## Constraints and exclusions

- Use the final hosted per-file report from pull request 1425 to select low-coverage deterministic paths.
- Add behavior-focused tests only; do not add exclusions, ignore annotations, aggregate masking, or assertion-free filler.
- If the bounded slice does not reach 75 percent, record the exact report and set only the highest evidence-backed floor.
- Keep authored additions below 2,000 lines and preserve the existing WASM/browser harness and package inventory.
- Use static local gates only; hosted CI is authoritative for Rust/WASM coverage. Do not run local Rust, WASM, or product Docker builds.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 1,000
- Owning modules: `nook-wasm` manager/session and deterministic storage adapters
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 69.5 toward 75 percent after hosted coverage confirms the safe floor.

## Initial plan

1. Inspect the exact hosted per-file coverage report from pull request 1425 and select a bounded set of deterministic manager and storage paths.
2. Add behavior-focused WASM tests, then run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
3. Push and run exact-head hosted validation; inspect the package line report before changing the floor.
4. Resolve review/readiness, squash-merge, and update the mission ledger with exact coverage evidence.

## Completion evidence

- Exact hosted head passes repository policy, native/WASM tests, coverage report, web verification, Hive, and readiness.
- `nook-wasm` independently measures a safe next floor toward 75 percent, or a documented evidence-backed lower floor if this bounded slice cannot reach the target within budget.
- Pull request is merged only after Main freshness and exact-head readiness are rechecked.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
