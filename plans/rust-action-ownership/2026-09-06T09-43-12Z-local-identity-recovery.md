---
title: Type local identity reset admission and publication
authority: rust-action-ownership
issue: issues/rust-action-ownership/local-identity-recovery.md
created_at: 2026-09-06T09:43:12Z
status: immutable
---

# Plan

1. Keep the exact four-file closure and inspect the current recovery transaction, device-identity caller, cleanup journal, schemas, tests, and ownership lint boundaries.
2. Move initiating-app ownership and consuming execution onto `LocalIdentityRecoveryRequest`; move directory/keyring evidence and scoped/full disposition calculations onto borrowed planning owners.
3. Add private non-Clone `PreparedLocalIdentityRecovery` retaining the admitted reset selection, marker policy, and transaction/store binding, then consume it for exact persistence/deletion and return the existing report after transaction completion.
4. Keep `recovery/cleanup.rs` unchanged, preserve all 11 browser tests, and add bounded preparation/drop, deletion-selection, privacy, and consumption cases colocated with their production responsibility.
5. Preserve pending-cleanup precedence, initiating-identity targeting, corruption/error ordering, migration writes, permissive reads, exact write/delete order, reconciliation-key recognition, encrypted-vault preservation, and provider cleanup. Do not add rollback, fallback, freshness, or exactly-once behavior.
6. Apply ownership denial and invalid-suppression prohibition across the completed recovery subtree only; run scoped rustfmt and diff checks, then delegate implementation for static review only.
7. Deliver one PR under 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
