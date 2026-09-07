---
title: Own vault metadata projection and event-graph access actions
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-meta-projection-actions
created_at: 2026-09-07T17:30:00Z
updated_at: 2026-09-07T17:30:00Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/vault-format-actions.md
---

# Own vault metadata projection and event-graph access actions

## Context

The core event-log adapter still exposes homeless functions that replay authorization metadata, inspect active device access, collect active authorization recipients, and rebuild a Sentinel member projection. These actions carry the graph, the projected metadata state, and the exact device identity evidence they validate, so callers can currently detach an action from its state owner.

## Outcome

`VaultMetaProjection` owns metadata replay and consuming state replacement. `VaultMetaEventGraph` owns graph-backed active-device and active-recipient queries with named identity evidence, while `SentinelMemberRoster` owns reconstruction of encrypted member rows. Existing event ordering, revocation semantics, checkpoint replacement, key matching, roster ordering, errors, and public WASM behavior remain unchanged.

## Scope

Fresh-main base `5a7ff77e32d0dacb03f50fb29633ec85da3de5e7`:

- `nook-app/nook-platform/nook-core/src/auth/multi_device.rs`
- a focused `nook-app/nook-platform/nook-core/src/auth/multi_device/` child for the migrated projection actions if needed to keep source files below 1,000 lines
- direct core, WASM, storage, and workflow callers of the six migrated operations.

Migrate `apply_vault_meta_operation`, `materialize_vault_meta_from_graph`, `event_graph_has_active_device_access`, `event_graph_active_device_envelopes`, `event_graph_active_auth_ids`, and `sentinel_member_records_from_public_roster`. Defer recipient encryption, identity-genesis operation construction, and reusable auth2 primitives. Hard ceiling: 1,500 authored additions and user target below 2,000.

## Acceptance criteria

- [ ] Metadata replay is owned by a data-carrying projection owner and failed replay leaves the live state unchanged.
- [ ] Graph access checks retain exact device-id/public-key/signing-key binding, approval/revocation ordering, checkpoint replacement, missing-event errors, and active-envelope semantics.
- [ ] Active authorization IDs retain validation, sorting, and deduplication behavior.
- [ ] Sentinel member reconstruction retains auth-id derivation, label handling, roster ordering, and encrypted record output.
- [ ] Direct core, WASM, storage, and workflow callers use typed owners; old free exports are removed for this scope.
- [ ] Existing behavior tests remain and focused owner construction, nonmutation, and consuming-action tests are colocated with the migrated implementation.
- [ ] Ownership denial and invalid-suppression prohibition cover only the completed projection child; no blanket suppression is added.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No event schema, storage, cryptographic, authorization, browser ABI, or error-contract changes. Do not add generic session infrastructure or compatibility free-function wrappers. No local Rust/WASM/product builds or tests.

## Progress

Fresh-main inventory after PR #1529 found six related core adapter operations and their bounded direct callers. The slice is intentionally limited to event-graph metadata projection and access evidence; recipient encryption and identity-genesis construction remain separate actions.
