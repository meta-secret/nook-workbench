---
title: Identity-held DEK grant ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/identity-dek-grant.md
started_at: 2026-09-05T10:16:00Z
agent: codex
gizmo_id: rust-action-ownership-identity-dek-grant
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership by moving the remaining identity-held DEK grant predicate onto its meaningful domain owner.

## Requirements

- Move `identity_dek_grant::already_grants` onto existing `IdentityVaultDek` without changing predicate behavior.
- Preserve epoch equality, envelope-count equality, exactly-one authorized-member coverage, current-app decryption, and both key comparisons.
- Migrate the sole reconciliation caller and remove the obsolete module import.
- Activate `unowned_function` deny and `invalid_unowned_function_suppression` forbid over the complete child module.
- Add focused matching, duplicate/missing, epoch/key mismatch, and undecryptable-current-app behavior tests plus an external private-method compile-fail control.

## Constraints and exclusions

- Exact two-file product scope: `nook-auth2/src/auth/identity_dek_grant.rs` and `nook-auth2/src/auth/identity.rs`.
- Keep `identity.rs` below 1,000 lines and authored additions at or below 220.
- This pure predicate receives no artificial typestate or public action API.
- No schema, cryptography, membership, epoch, recovery, WASM, TypeScript, dependency, fallback, or logging change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-identity-dek-grant
- Estimated authored changed lines: 220
- Owning modules, packages, or layers: nook-app/nook-platform/nook-auth2/src/auth/identity_dek_grant.rs, nook-app/nook-platform/nook-auth2/src/auth/identity.rs
- Ownership units:
1. Capability: Identity-held DEK grant ownership; Gizmo ID: rust-action-ownership-identity-dek-grant; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact predicate ownership, unchanged reconciliation behavior, compile-fail privacy control, hosted tests, Dylint and source SECURITY
- Public or cross-module interfaces: No new public interface; the internal free predicate becomes a private IdentityVaultDek method
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 220
- Current PR slice and acceptance evidence: Identity-held DEK grant ownership; Acceptance evidence: Hosted behavior, compile-fail, Dylint and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-identity-dek-grant; Gizmo name: Identity-held DEK grant ownership; Predecessor Gizmo ID: None; Identity-held DEK grant ownership; Estimated authored changed lines: 220; Acceptance evidence: Hosted behavior, compile-fail, Dylint and source SECURITY

## Initial plan

1. Start from current main after enrollment admission ownership.
2. Implement the two-file predicate ownership change and bounded tests.
3. Format, push and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge and publish Workbench completion.

## Completion evidence

Exact comparison behavior, private method ownership, existing reconciliation coverage, hosted Rust/WASM/Dylint gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
