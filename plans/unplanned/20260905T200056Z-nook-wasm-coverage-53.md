---
title: Raise nook-wasm coverage floor to 53 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-05T20:00:56Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260905T075311Z-companion-wasm-coverage-90-final.md
---

# Task plan

## Interpreted request

Continue the serial coverage mission after pull request 1374. Raise the next remaining below-90 package, `nook-wasm`, in a bounded slice supported by fresh hosted coverage evidence.

## Requirements

- Add behavior-focused tests for deterministic BIP39, provider-label, OAuth state/value, and vault-architecture projections.
- Raise only the `nook-wasm` floor after exact hosted evidence confirms the new floor.
- Keep the coverage policy executable and preserve independent package accounting.

## Constraints and exclusions

- No local Rust, WASM, or product Docker builds; use static local gates and hosted execution.
- Keep this PR well below 2,000 authored additions and cap the implementation to focused wrapper tests plus the executable floor expectation.
- Do not add coverage exclusions, ignores, fallback behavior, or unrelated production changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 180
- Owning modules: `nook-wasm` deterministic public wrappers and coverage policy
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise `nook-wasm` from 51 to 53 percent after hosted coverage confirms at least 53 percent.

## Initial plan

1. Add inline tests for pure BIP39 projections, provider labels, OAuth state/value accessors, and vault-architecture/revision/scope wrappers.
2. Run formatter, metadata, policy, diff, and pre-push static gates without local product builds.
3. Push and run one exact-head hosted validation; inspect the line report and raise the floor only after measured proof.
4. Resolve review/readiness, squash-merge, and update the mission ledger with the exact result.

## Completion evidence

- Hosted `nook-wasm` coverage is at least 53 percent on the exact PR head.
- The package floor and executable policy expectation are both 53 percent.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
