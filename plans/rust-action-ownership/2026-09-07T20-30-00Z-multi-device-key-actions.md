---
title: Type multi-device vault key and record actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/multi-device-key-actions.md
started_at: 2026-09-07T20:30:00Z
agent: codex
gizmo_id: rust-action-ownership-multi-device-key-actions
---

# Task plan

## Interpreted request

Continue the project-wide Rust action-ownership migration with a substantial multi-device security slice. Keep key material, identity bindings, and metadata record views attached to their domain owners and preserve the existing wire and crypto behavior.

## Requirements

- Move generation, derivation, envelope, and record utilities onto meaningful existing or new bounded owners.
- Use consuming or borrowed states where key resolution and record replacement carry invariants.
- Migrate all direct auth2/core/test callers in the closure and activate focused ownership enforcement.
- Keep the complete change below the 1,800-addition ceiling and deliver one cohesive PR.
- Run formatting, diff, Loom, hosted validation, exact-head readiness, merge, and Workbench closeout.

## Constraints

Preserve all schemas, aliases, crypto parameters, error ordering, row ordering, and public boundary behavior. Do not add generic typestate frameworks, fallbacks, retries, persistence changes, or local product builds/tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-multi-device-key-actions
- Estimated authored changed lines: 900–1,400
- Hard ceiling: 1,800 authored additions
- Delivery shape: one cohesive PR.

## Initial plan

1. Inventory exact utility declarations and direct callers from refreshed main.
2. Add key/record owners with consuming transitions and move implementations without behavior changes.
3. Migrate auth2/core callers and focused tests; remove detached exports.
4. Enable ownership denial for completed action modules and reject invalid suppressions.
5. Run scoped formatting, diff, size, and Loom gates; push one PR.
6. Complete exact-head hosted validation, remote Loom, readiness, squash merge, and Workbench records.
