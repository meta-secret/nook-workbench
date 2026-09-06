---
title: Type identity-scoped device-access metadata updates
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-device-access-metadata
created_at: 2026-09-06T13:33:41Z
updated_at: 2026-09-06T13:33:41Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/provider-credential-publication.md
---

# Type identity-scoped device-access metadata updates

## Context

Device-access profile persistence still exposes free operations across the storage parent, profile-store child, migration helper, and direct WASM consumers. Existing destination resolution, legacy eligibility, guarded IndexedDB updates, stale-credential refusal, identity checks, and future-schema behavior are correct, but the valid action graph is not represented by consuming owners.

## Outcome

Device-access metadata becomes a typed action graph. `DeviceAccessProfileKey` privately owns resolved destination and legacy observations; named passkey, label, and verified-access requests produce bound destinations and consuming load/migration/update states. Mutation admission remains inside the existing guarded IndexedDB callback so no stale prepared profile escapes the transaction.

## Scope

Exact seven-file platform scope with no new files:

- `nook-app/nook-platform/nook-wasm/src/storage/device_access.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/device_access/profile_store.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/device_access/migration.rs`
- `nook-app/nook-platform/nook-wasm/src/device_access.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/device_protection.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/verified_access.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/local_identity.rs`

Move 19 production free operations, four test-only persistence operations, and four fixture helpers onto bounded owners while keeping additions between 1,250 and 1,650 and below a hard ceiling of 1,850. Keep direct consumer adaptations narrow and every final file below 1,000 lines.

## Acceptance criteria

- [ ] Descriptive metadata remains non-secret and cannot block device-key unlock.
- [ ] Corrupt/future read defaults, interactive future-version errors, best-effort byte preservation, and exact errors remain unchanged.
- [ ] Explicit app targeting, companion compatibility destination, single-entry legacy eligibility, fingerprint checks, and verified-vault ownership checks remain unchanged.
- [ ] Label/name normalization precedes destination lookup; timestamp capture order, stale-credential refusal, ignored best-effort results, and existing caller behavior remain unchanged.
- [ ] Guarded IndexedDB updates retain guard recheck, current-profile read, conditional legacy adoption, update/write/delete/completion order, and partial effects; no stale prepared profile or cross-database atomicity claim is added.
- [ ] Existing writable/future-version distinction and consuming mutation admission remain intact; no fallback, migration, recovery, or freshness exception is added.
- [ ] All 17 existing storage entries remain; focused destination/consumption, rejected-mutation preservation, and current/recoverable/future admission controls are added inline.
- [ ] Ownership denial and invalid-suppression prohibition cover the completed device-access storage subtree; unrelated modules remain outside blanket activation.
- [ ] No public ABI, schema, persistence, cryptographic, or unlock-boundary change.
- [ ] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No generic persistence framework, fallback, rollback/recovery exception, cleanup, stale snapshot preparation, cross-database transaction claim, schema migration, cryptographic change, or unlock dependency. Preserve existing best-effort and ignored-result semantics. Keep the large consumer files narrowly adapted.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `8f2cc68785bc13f2415fddf0df74550c067bb3c4` identified the seven-file closure with zero changed-file overlap with live PRs #1450, #1447, and #1210. The boundary contains 19 production free operations, four test-only persistence operations, and four fixture helpers; estimated 1,250–1,650 additions and 800–1,050 deletions with a hard ceiling of 1,850 additions.
