---
title: Identity epoch projection ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/identity-epoch.md
started_at: 2026-09-05T10:37:30Z
agent: codex
gizmo_id: rust-action-ownership-identity-epoch
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership by moving identity epoch projection helpers onto their meaningful domain types.

## Requirements

- Move `epoch_label` onto existing `IdentityVaultDekEpoch` without changing diagnostics.
- Move the test-only event identifier constructor onto `IdentityVaultEventId`.
- Preserve `IdentityVaultDek::next_epoch`, its signature, and every epoch admission rule.
- Activate `unowned_function` deny and `invalid_unowned_function_suppression` forbid over the complete child module.
- Add focused accepted/rejected observation and stale-error formatting evidence while retaining descendant-chain and reconciliation coverage.

## Constraints and exclusions

- Exact one-file scope: `nook-app/nook-platform/nook-auth2/src/auth/identity_epoch.rs`.
- Keep the file below 1,000 lines and authored additions at or below 180.
- These pure operations receive no artificial typestate or public action API.
- No schema, cryptography, ancestry authority, recovery, WASM, TypeScript, dependency, fallback, or logging change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-identity-epoch
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: nook-app/nook-platform/nook-auth2/src/auth/identity_epoch.rs
- Ownership units:
1. Capability: Identity epoch projection ownership; Gizmo ID: rust-action-ownership-identity-epoch; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact epoch behavior and diagnostics, hosted tests, Dylint and source SECURITY
- Public or cross-module interfaces: No new public interface; private helpers become methods on existing identity epoch types
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Identity epoch projection ownership; Acceptance evidence: Hosted behavior, Dylint and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-identity-epoch; Gizmo name: Identity epoch projection ownership; Predecessor Gizmo ID: None; Identity epoch projection ownership; Estimated authored changed lines: 180; Acceptance evidence: Hosted behavior, Dylint and source SECURITY

## Initial plan

1. Start from current main after identity-held DEK grant ownership.
2. Implement the one-file ownership change and bounded tests.
3. Format, push and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge and publish Workbench completion.

## Completion evidence

Exact epoch behavior and diagnostics, module-wide ownership enforcement, hosted Rust/WASM/Dylint gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
