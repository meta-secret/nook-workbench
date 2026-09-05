---
title: Local identity recovery completion ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/recovery-completion.md
started_at: 2026-09-05T20:34:00Z
agent: codex
gizmo_id: rust-action-ownership-recovery-completion
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership with the simplest consuming completion boundary for local identity recovery cleanup.

## Requirements

- Move pending cleanup load, presence, write, and completion functions onto existing `LocalIdentityRecovery`.
- Make completion consume the recovery target and adapt all production callers and tests.
- Preserve transaction boundaries, provider-cleanup-before-completion order, exact persisted-target equality, mismatch errors, absent-marker success, and transaction completion errors.
- Preserve reload behavior, schema, scoped deletion, and surviving-identity behavior.
- Activate module-wide ownership deny and invalid-suppression forbid in the cleanup child module.
- Add bounded marker mismatch, exact match, and absent-marker completion coverage.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery/cleanup.rs`, `nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery.rs`, `nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs`, `nook-app/nook-platform/nook-wasm/src/storage/identity_record/staged_genesis.rs`, `nook-app/nook-platform/nook-wasm/src/manager/device_protection.rs`, `nook-app/nook-platform/nook-wasm/src/manager/local_identity.rs`, and `nook-app/nook-platform/nook-wasm/src/storage/indexed_db/device_identity.rs`.
- Keep authored additions at or below 300 and every file below 1,000 lines; parent modules must remain unchanged in size or smaller.
- The recovery record remains cloneable/deserializable; no unforgeable-authorization or global-single-use claim, new state, journal, schema, recovery behavior, fallback, ABI, dependency, or logging change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-recovery-completion
- Estimated authored changed lines: 300
- Owning modules, packages, or layers: nook-app/nook-platform/nook-wasm local identity recovery cleanup boundary
- Ownership units:
1. Capability: Local identity recovery completion ownership; Gizmo ID: rust-action-ownership-recovery-completion; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery/cleanup.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record/staged_genesis.rs,nook-app/nook-platform/nook-wasm/src/manager/device_protection.rs,nook-app/nook-platform/nook-wasm/src/manager/local_identity.rs,nook-app/nook-platform/nook-wasm/src/storage/indexed_db/device_identity.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery/cleanup.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery.rs,nook-app/nook-platform/nook-wasm/src/storage/indexed_db/device_identity.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-wasm/src/storage/schema; Expertise consumer interfaces: LocalIdentityRecovery pending and consuming completion methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted behavior, transaction safety, and Dylint checks pass
- Public or cross-module interfaces: No public API change; the crate-internal recovery record owns its persistence and completion actions
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Local identity recovery completion ownership; Acceptance evidence: Hosted behavior, Dylint, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-recovery-completion; Gizmo name: Local identity recovery completion ownership; Predecessor Gizmo ID: None; Local identity recovery completion ownership; Estimated authored changed lines: 300; Acceptance evidence: Hosted behavior, Dylint, and source SECURITY

## Initial plan

1. Start from current main after PR 1398.
2. Implement the seven-file recovery completion ownership migration and bounded marker-safety tests.
3. Format, push, and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Exact recovery marker and cleanup ordering behavior, module-wide ownership enforcement, hosted Rust/WASM/Dylint gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
