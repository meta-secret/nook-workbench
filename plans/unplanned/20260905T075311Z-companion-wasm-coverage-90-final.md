---
title: Close the companion WASM coverage gap to 90 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-05T07:53:11Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260905T055936Z-companion-wasm-coverage-90.md
---

# Task plan

## Interpreted request

Continue the serial coverage mission after pull request 1369 raised `nook-companion-wasm` to an 88 percent floor. Cover the measured 18-line remainder and enforce the final 90 percent target.

## Requirements

- Add behavior tests for uncovered authentication-workflow match variants.
- Add rejection-path tests for authentication observation binding and authenticator-code response decoding.
- Keep tests inline with their focused implementation modules.
- Raise only the independent `nook-companion-wasm` floor to 90 after exact hosted proof.

## Constraints and exclusions

- No local Rust, WASM, or product Docker builds; use static local gates and hosted execution.
- Keep this pull request below 2,000 authored additions and cap planned implementation at 150 additions.
- Limit implementation to the three companion authentication modules, coverage policy, and its executable expectation.
- Do not change production behavior, add coverage ignores, add exclusions, or weaken another package floor.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 150
- Owning modules, packages, or layers: companion WASM authentication adapters and coverage policy
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR slice and acceptance evidence: Raise companion WASM from 88 to 90 percent; Acceptance evidence: focused hosted tests cover at least 18 additional lines and independent package coverage reaches 90 percent

## Initial plan

1. Cover all three authentication-workflow match-kind variants and currently unexecuted classification paths.
2. Cover semantic rejection mapping in observation binding and authenticator response decoding.
3. Measure under the existing 88 percent floor.
4. Raise the floor and policy expectation to 90 only after exact hosted evidence confirms it.
5. Revalidate the exact floor head, verify readiness, squash-merge, and close Workbench records.

## Completion evidence

- `nook-companion-wasm` independently measures at least 90 percent and its enforced floor is 90 percent.
- The focused behavior tests pass in the hosted WASM harness.
- Exact-head validation, review resolution, readiness, merge, and Workbench records are complete.

## Safety review

- This record contains no transcript, secret, private data, local path, username, environment value, or unnecessary infrastructure detail.
