---
title: Legacy identity-member merge ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/legacy-member-merge.md
started_at: 2026-09-05T17:03:25Z
agent: codex
gizmo_id: rust-action-ownership-legacy-member-merge
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership by moving legacy member reconciliation onto the identity record that owns the collection.

## Requirements

- Move `merge_member` to private `IdentityRecord::merge_legacy_member` and adapt its sole caller.
- Preserve insertion, authentication/public-key equality, signing-key fill/conflict, and label precedence exactly.
- Preserve the consuming directory migration and all selection, ownership, and duplicate checks.
- Activate module-wide ownership deny and invalid-suppression forbid.
- Retain existing tests and add focused member insertion, metadata completion/preservation, and exact conflict evidence.

## Constraints and exclusions

- Exact one-file scope: `nook-app/nook-platform/nook-auth2/src/auth/identity_directory/legacy_migration.rs`.
- Keep authored additions at or below 180 and the file below 1,000 lines.
- No artificial typestate, recovery, transaction, schema, cryptography, authorization, WASM, dependency, fallback, or logging change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-legacy-member-merge
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: nook-app/nook-platform/nook-auth2/src/auth/identity_directory/legacy_migration.rs
- Ownership units:
1. Capability: Legacy identity-member merge ownership; Gizmo ID: rust-action-ownership-legacy-member-merge; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact merge behavior and errors, hosted tests, Dylint and source SECURITY
- Public or cross-module interfaces: No interface change; a private helper becomes a private IdentityRecord method
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Legacy identity-member merge ownership; Acceptance evidence: Hosted behavior, Dylint and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-legacy-member-merge; Gizmo name: Legacy identity-member merge ownership; Predecessor Gizmo ID: None; Legacy identity-member merge ownership; Estimated authored changed lines: 180; Acceptance evidence: Hosted behavior, Dylint and source SECURITY

## Initial plan

1. Start from current main after typed Nook Core prerequisite merges.
2. Implement the one-file member ownership change and bounded tests.
3. Format, push, and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Exact member merge behavior and diagnostics, module-wide ownership enforcement, hosted Rust/WASM/Dylint gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
