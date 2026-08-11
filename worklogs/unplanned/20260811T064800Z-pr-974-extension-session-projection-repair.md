---
title: Close strict extension session projection gaps
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
plan: plans/unplanned/20260809-181000-extension-rust-web-api-rollout.md
nook_pr: 974
status: completed
started_at: 2026-08-11T04:22:12Z
finished_at: 2026-08-11T06:48:00Z
agent: codex
---

# Close strict extension session projection gaps

## Outcome

Merged PR 974 and closed the three remaining strict Rust/WASM boundary defects
found by post-merge review of the extension rollout.

## Progress

- Moved paired-vault handoff projection into companion Rust/WASM.
- Moved saved-login grant-identity projection into companion Rust/WASM.
- Made the nested login-account wire contract reject foreign fields in Rust.
- Kept TypeScript limited to browser lifecycle and typed WASM orchestration.
- Added behavior-focused Rust/WASM regression tests for every repaired boundary.

## Implementation problems

- Late review feedback arrived after the earlier rollout PRs had merged.
- The complete validation cycle was restarted whenever a new actionable review
  comment appeared, so no obsolete run was treated as merge evidence.
- The first post-merge Rust ecosystem attempt hit a transient registry EOF and
  passed on rerun without a source change.

## Decisions

- Domain projections belong in companion Rust/WASM, even when an equivalent
  TypeScript object selection would be shorter.
- Generic application values and transport-shaped reusable APIs remain
  prohibited. Boundary adapters narrow immediately into concrete domain types.
- Review feedback is polled while CI runs and preempts waiting for an obsolete
  exact-head result.

## Validation

- Exact-head PR run 31461538769 passed Native Rust, WASM, Rust ecosystem,
  coverage, web verification, UI demos, full web e2e, full extension e2e, and
  preview deployment for head `9a9c77e5f5bd64f299fb96cce0febf44f3a25dc1`.
- All PR 974 review conversations were resolved before merge.
- [Nook PR 974](https://github.com/meta-secret/nook/pull/974) squash-merged as
  `c39c5d3a44157d1661573476670473a88598d52f`.
- Main run 31462438440 passed Native Rust, WASM, web build, UI demos, full web
  e2e, full extension e2e, and development deployment.
- Rust ecosystem run 31462438649 passed after rerunning a transient registry
  failure.

## Remaining work

None.
