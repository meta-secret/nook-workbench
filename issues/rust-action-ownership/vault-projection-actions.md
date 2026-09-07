---
title: Own vault projection actions
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-projection-actions
created_at: 2026-09-07T12:33:15Z
updated_at: 2026-09-07T12:33:15Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/event-builder-actions.md
---

# Own vault projection actions

## Context

The event-log projection module still exposes homeless free operations for rebuilding a vault projection, selecting the current epoch checkpoint, validating replay permutation invariants, and detecting projection conflicts. These operations carry event-graph, store identity, schema, epoch, and conflict state without an owned action state.

## Outcome

Vault projection rebuild, checkpoint selection, replay invariant validation, and conflict detection are owned by `VaultProjection` or `EventGraph`. Existing event ordering, schema/store validation, epoch history, conflict reporting, unresolved-schema handling, and public core/WASM behavior remain unchanged.

## Scope

Delivery is based on main `651d61e7f2b04a5b63360028497ce33c4a15295b`:

- `nook-app/nook-platform/nook-event-log/src/projection.rs`
- `nook-app/nook-platform/nook-event-log/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- Direct core/WASM callers and projection tests that imported the removed operations.

The migration is one cohesive slice below the 2,000 authored-line limit; current authored additions are 384.

## Acceptance criteria

- [ ] Projection rebuilding is an owned action on `VaultProjection` with identical graph traversal, schema/store validation, event ordering, and errors.
- [ ] Current epoch checkpoint selection is an owned action on `EventGraph` with identical epoch and checkpoint semantics.
- [ ] Replay permutation invariant validation and conflict detection are owned by projection state without authored free helpers.
- [ ] Direct core/WASM callers and existing tests use owned methods; public behavior and wire schemas remain unchanged.
- [ ] The projection module activates both ownership lints without blanket suppression.
- [ ] No event ordering, recovery, epoch history, unresolved schema, conflict, or authorization behavior changes.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve canonical event ordering, schema/store identity checks, epoch checkpoint selection, conflict details, unresolved-schema behavior, and error ordering.

## Progress

Inventory after PR #1518 found the projection module's four production free operations and bounded direct callers across core, WASM, and event-log tests. No overlapping open PR owns these files.
