---
title: Vault projection operation ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/vault-projection-operations.md
started_at: 2026-09-05T22:49:49Z
agent: codex
gizmo_id: rust-action-ownership-vault-projection
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership by moving vault operation mutation onto the existing projection aggregate that owns the state.

## Requirements

- Move operation application onto `VaultProjection` with restricted visibility for its sole production caller.
- Move secret insertion and password upsert to private projection methods.
- Update child tests and local fixtures to use meaningful owners.
- Preserve topological application order, store/schema checks, secret lifecycle/history/conflict state, password lifecycle, checkpoint distinctions, membership no-ops, and errors.
- Enable full child-module ownership lints and add checkpoint-preservation behavior coverage.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-event-log/src/projection/operation_application.rs` and `nook-app/nook-platform/nook-event-log/src/projection.rs`.
- Keep authored additions at or below 260, child below 550 lines, and parent non-growing.
- Projection is reusable mutable state; no artificial one-use typestate.
- No public API, wire format, signature, membership, authorization, schema, dependency, logging, fallback, or recovery change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-vault-projection
- Estimated authored changed lines: 260
- Owning modules, packages, or layers: nook-event-log vault projection
- Ownership units:
1. Capability: Vault projection operation ownership; Gizmo ID: rust-action-ownership-vault-projection; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-event-log/src/projection/operation_application.rs,nook-app/nook-platform/nook-event-log/src/projection.rs; Expertise allowed test paths: nook-app/nook-platform/nook-event-log/src/projection/operation_application.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2,nook-app/nook-platform/nook-wasm; Expertise consumer interfaces: restricted VaultProjection operation application method; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted Rust behavior and Dylint checks pass
- Public or cross-module interfaces: None; restricted child-to-parent aggregate method only
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 260
- Current PR slice and acceptance evidence: Vault projection operation ownership; Acceptance evidence: Hosted Rust behavior, Dylint, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-vault-projection; Gizmo name: Vault projection operation ownership; Predecessor Gizmo ID: None; Vault projection operation ownership; Estimated authored changed lines: 260; Acceptance evidence: Hosted Rust behavior, Dylint, and source SECURITY

## Initial plan

1. Move projection mutations and fixtures to their owners and add checkpoint-preservation coverage.
2. Format, push, and obtain hosted validation and exact-head source SECURITY.
3. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Aggregate-owned mutation API, unchanged projection semantics, child ownership lint enforcement, hosted Rust/Dylint checks, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
