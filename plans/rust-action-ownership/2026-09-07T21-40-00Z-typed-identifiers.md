---
title: Type persisted vault identifiers and validation actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/typed-identifiers.md
started_at: 2026-09-07T21:40:00Z
agent: codex
gizmo_id: rust-action-ownership-typed-identifiers
---

# Task plan

## Interpreted request

Continue the project-wide Rust action-ownership migration with a substantial identifier boundary. Keep persisted identifier policy attached to the types that carry prefixes, validation, reserved-value rules, digest shape, and generation behavior while preserving every string and error contract.

## Requirements

- Move identifier generation, formatting, normalization, and predicates onto existing domain types.
- Migrate auth2, core, event-log, WASM, composition, and test callers in the same closure.
- Enforce homeless-function denial in the identifier module and keep the public WASM surface as an explicit adapter.
- Keep the complete change below the 1,800-addition ceiling and deliver one cohesive PR.
- Run formatting, diff, Loom, hosted validation, exact-head readiness, merge, and Workbench closeout.

## Constraints

Preserve serialized values, aliases, prefixes, validation order, reserved-id behavior, random generation, errors, and public boundary names. Do not add generic wrappers, migration fallbacks, schema changes, or local product builds/tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-typed-identifiers
- Estimated authored changed lines: 900–1,400
- Hard ceiling: 1,800 authored additions
- Delivery shape: one cohesive PR.

## Initial plan

1. Inventory identifier declarations and all direct callers from refreshed main.
2. Add associated identifier actions and focused owner tests in auth2.
3. Remove detached auth2/core exports and migrate all direct consumers.
4. Keep WASM boundary functions as thin adapters over typed methods.
5. Enable ownership denial and run formatting, diff, size, and Loom gates.
6. Push one cohesive PR, complete exact-head hosted validation, merge, and publish Workbench closeout.
