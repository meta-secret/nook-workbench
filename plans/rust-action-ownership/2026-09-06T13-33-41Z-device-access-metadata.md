---
title: Type identity-scoped device-access metadata updates
authority: rust-action-ownership
issue: issues/rust-action-ownership/device-access-metadata.md
created_at: 2026-09-06T13:33:41Z
status: immutable
---

# Plan

1. Keep the exact seven-file closure and inspect device-access profile operations, profile-store destination and legacy resolution, migration helpers, guarded IndexedDB update timing, direct manager/device-access consumers, browser contracts, and ownership-lint boundaries.
2. Reuse `DeviceAccessProfileKey` as a private resolved destination owner; add named passkey, label, and verified-access requests whose consuming operations retain destination, app, fingerprint, and legacy observations without widening the public ABI.
3. Move load, migration, and guarded update admission onto bounded owners while keeping mutation admission inside the existing IndexedDB callback; never prepare a stale profile outside that transaction.
4. Preserve non-secret descriptive metadata, device-key unlock independence, corrupt/future defaults, interactive future-version errors, best-effort byte preservation, explicit app targeting, companion compatibility, single-entry legacy eligibility, fingerprint and verified-vault ownership checks, and exact errors.
5. Retain normalization and timestamp order, stale-credential refusal, ignored best-effort results, guard recheck, current-profile read, conditional legacy adoption, update/write/delete/completion order, partial effects, writable/future distinction, and all existing schema and migration behavior.
6. Retain all 17 storage entries and add focused destination/consumption, rejected-mutation preservation, and current/recoverable/future admission controls inline; activate ownership denial and invalid-suppression prohibition across the completed storage subtree only.
7. Keep all seven final files below 1,000 lines, run scoped formatting/static checks and test-retention/symbol/ABI checks, and delegate implementation for exact-head security review.
8. Deliver one PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
