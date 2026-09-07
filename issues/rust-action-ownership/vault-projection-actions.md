---
title: Own vault projection actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-projection-actions
created_at: 2026-09-07T12:33:15Z
updated_at: 2026-09-07T12:50:25Z
source_issues: []
related_prs: [1520]
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

- [x] Projection rebuilding is an owned action on `VaultProjection` with identical graph traversal, schema/store validation, event ordering, and errors.
- [x] Current epoch checkpoint selection is an owned action on `EventGraph` with identical epoch and checkpoint semantics.
- [x] Replay permutation invariant validation and conflict detection are owned by projection state without authored free helpers.
- [x] Direct core/WASM callers and existing tests use owned methods; public behavior and wire schemas remain unchanged.
- [x] The projection module activates both ownership lints without blanket suppression.
- [x] No event ordering, recovery, epoch history, unresolved schema, conflict, or authorization behavior changes.
- [x] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve canonical event ordering, schema/store identity checks, epoch checkpoint selection, conflict details, unresolved-schema behavior, and error ordering.

## Progress

Inventory after PR #1518 found the projection module's four production free operations and bounded direct callers across core, WASM, and event-log tests. No overlapping open PR owned these files. The first hosted Dylint run caught a duplicate import and one remaining `project_vault` caller; both were fixed in the amended exact head before revalidation.

## Completion

PR #1520 merged successfully as `6f8a0156567ac3d1c594f2d43b69bfae0829b4e8`.

- Final head: `334682ab6a4dbf4f5134dcc2229d755e9f8d0529`
- Final base: `651d61e7f2b04a5b63360028497ce33c4a15295b`
- Hosted PR run: `34122945892`
- Repository policy: `34122920450`
- Remote Loom: `34123865095`
- Preview: `https://pr-1520.nokey-sh.pages.dev`
- Exact-head SECURITY review passed with no P1/P2/P3 findings.
- `task pr:ready PR=1520` returned `ready: true` immediately before merge.
- No local product builds or tests were run.
