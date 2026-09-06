---
title: Type identity epoch reconciliation and marker cleanup
issue: issues/rust-action-ownership/identity-epoch-reconciliation.md
status: immutable
created_at: 2026-09-06T08:47:44Z
owner: cypherkitty
---

# Immutable plan

1. Move reconciliation marker loading, stage transitions, journal progression, guarded deletion, and journal updates onto an `IdentityReconciliationStore` and focused progress owners.
2. Introduce private consuming states for epoch commitment, resolved identity persistence, and exact-marker cleanup so persistence is required before cleanup.
3. Keep persisted DTOs separate from capabilities and preserve all marker bytes, validation order, transaction boundaries, and browser ABI.
4. Adapt only the three direct consumer files in the exact six-file scope.
5. Retain the four browser tests and add behavior-focused progress/error, persistence-before-cleanup, drop, privacy, and consumption tests.
6. Apply ownership denial and invalid-suppression prohibition to the complete reconciliation child subtree only; keep unrelated parent helpers outside the boundary.
7. Run scoped rustfmt, symbol/retention/scope/size checks only; Gizmo Prime will run pre-push hygiene, hosted Remote Loom, hosted PR validation, exact-head SECURITY, readiness, merge, and Workbench closeout.

## Security and compatibility invariants

- Preserve v1/v2 marker recognition and v2 serialization.
- Preserve store-ID, epoch, event-membership, checkpoint-ancestry, identical-intent, conflict, and stage-error behavior.
- Preserve directory-write then exact-marker-cleanup order, separate transactions, successor-marker preservation, partial effects, and no deletion on drop.
- Make no rollback, recovery, fallback, new journal, replay, exactly-once, or browser-authentication claim.

## Exact scope

- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/reconciliation.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/reconciliation/progress.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/reconciliation/resolution.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs`
