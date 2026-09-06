---
title: Nook WASM coverage 75 percent follow-up slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T07:55:00Z
agent: codex
gizmo_id: rust-crate-coverage-90
---

# Task plan

## Interpreted request

Continue the serial crate-coverage mission in a bounded 5-to-10 percentage-point increment. Merged Main now measures `nook-wasm` at 70.32 percent while the executable floor remains 69.5 percent; this slice will enforce the evidence-backed 70 percent floor and target 75 percent.

## Requirements

- Add behavior-focused tests for deterministic uncovered `nook-wasm` paths selected from the latest hosted report.
- Raise only the `nook-wasm` floor to 70 percent in the same PR, then raise it further only if the final hosted report supports it.
- Keep independent package accounting and the existing WASM/browser harness.

## Constraints and exclusions

- Use the exact hosted per-file report from pull request 1431 to select deterministic paths.
- Add behavior-focused tests only; no exclusions, ignore annotations, aggregate masking, or assertion-free filler.
- Keep authored additions below 2,000 lines and use static local gates only; hosted CI is authoritative for Rust/WASM coverage.
- Do not run local Rust, WASM, or product Docker builds.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 1,000
- Owning modules: `nook-wasm` deterministic manager, storage, and projection adapters
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Enforce 70 percent and target 75 percent after exact hosted proof.

## Initial plan

1. Inspect the exact hosted per-file report from pull request 1431 and select a bounded deterministic group.
2. Add behavior tests and the 70 percent executable floor, then run formatter, metadata, policy, diff, and pre-push static gates.
3. Push and run exact-head hosted validation; inspect the independent package line report before changing the floor again.
4. Resolve readiness, squash-merge, and update the mission ledger with exact evidence.

## Completion evidence

- Exact hosted head passes repository policy, native/WASM tests, coverage, web verification, and readiness.
- `nook-wasm` independently measures at least 70 percent with a matching executable floor, with any further increase justified by the final report.
- Pull request is merged only after Main freshness and exact-head readiness are rechecked.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
