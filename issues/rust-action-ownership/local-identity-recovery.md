---
title: Type local identity reset admission and publication
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-local-identity-recovery
created_at: 2026-09-06T09:43:12Z
updated_at: 2026-09-06T09:43:12Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/authenticated-identity-handoff.md
---

# Type local identity reset admission and publication

## Context

Local identity reset and device recovery still expose directory/keyring planning, reset selection, key deletion, marker policy, and transactional publication as free operations. The existing behavior includes deliberate best-effort migration and permissive reads, but the valid preparation and commit sequence is not represented by consuming states.

## Outcome

Local identity recovery becomes a typed action graph. A request owns the initiating identity, borrowed planning owners compute the exact scoped/full reset disposition, and a private prepared state binds admitted deletion selection and transaction persistence before returning the existing recovery report.

## Scope

Exact four-file WASM scope:

- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery/planning.rs` (new)
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/indexed_db/device_identity.rs`

Move 12 production free functions onto `LocalIdentityRecoveryRequest`, borrowed planning owners, and private non-Clone `PreparedLocalIdentityRecovery`. Keep `recovery/cleanup.rs` unchanged and each new child below 900 lines; hard ceiling 1,750 additions.

## Acceptance criteria

- [ ] Pending cleanup is returned before reconsidering the initiating app identity; scoped targeting follows that identity and preserves surviving selection.
- [ ] Missing/corrupt directory behavior, strict corrupt-keyring rejection, target-change errors, retired-ID handling, simple-genesis checks, and Sentinel pending-marker rejection remain unchanged.
- [ ] Existing best-effort migration and permissive reads remain explicit; no new recovery/fallback behavior is added.
- [ ] Exact write/delete order, v1/v2 reconciliation-key recognition, encrypted-vault preservation, and post-transaction provider cleanup remain unchanged.
- [ ] Preparation may retain existing migration writes; no effect-free, rollback, deletion-on-drop, freshness, or exactly-once claim is introduced.
- [ ] Existing 11 browser tests remain; bounded preparation/drop, deletion-selection, and privacy/consumption coverage is added.
- [ ] Complete recovery subtree denies homeless functions and rejects invalid suppression; unrelated identity-record parent remains outside scope.
- [ ] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No schema migration, new journal, fallback, rollback/recovery exception, or provider behavior change. Preserve the existing `LocalIdentityRecovery` report and `recovery/cleanup.rs` completion ownership.

## Progress

Read-only DEV-CORE inventory at origin/main `80f5e4596d144a3915728a23b1e795520715365b` identified the four-file closure with no overlap with live PRs #1439, #1430, or #1210.
