---
title: Type identity epoch reconciliation and marker cleanup
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-identity-epoch-reconciliation
created_at: 2026-09-06T08:47:44Z
updated_at: 2026-09-06T09:19:28Z
source_issues: []
related_prs:
  - 1438
depends_on:
  - issues/rust-action-ownership/protected-identity-wrapping.md
---

# Type identity epoch reconciliation and marker cleanup

## Context

The identity-record reconciliation module still exposes journal progression, identity persistence, and marker cleanup as free operations and separate public fields. Its current execution order is correct, but the types do not encode that persistence must succeed before exact-marker cleanup.

## Outcome

Identity epoch reconciliation becomes a typed action graph. Journal progression, epoch commitment, resolution persistence, and exact-marker cleanup are owned by focused states and store capabilities while preserving storage order, serialized markers, browser behavior, and existing error semantics.

## Scope

Exact six-file WASM scope:

- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/reconciliation.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/reconciliation/progress.rs` (new)
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/reconciliation/resolution.rs` (new)
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs`

Move the 13 production free functions and three fixture helpers from reconciliation onto `IdentityReconciliationStore`, serialized progress/transition owners, and private resolved/persisted states. Keep the parent below its existing 1,000-line file limit. Estimated 1,150–1,600 additions, 650–850 deletions; hard ceiling 1,800 additions.

## Acceptance criteria

- [x] Existing v1/v2 key recognition and v2 marker schema remain byte-for-byte compatible.
- [x] Identical-intent acceptance, conflicting-intent rejection, stage-specific errors, and idempotent epoch/checkpoint updates remain unchanged.
- [x] Store-ID, epoch, committed-event membership, and checkpoint ancestry checks remain unchanged.
- [x] Prepared/epoch-committed resume blocking and existing Observe/Rotate behavior remain unchanged.
- [x] Directory persistence must succeed before exact-marker cleanup can be called; cleanup preserves successor markers and uses separate transactions.
- [x] Read/decode errors, partial effects, drop behavior, and future-marker handling remain unchanged; no rollback or exactly-once claim is introduced.
- [x] Manager projection, key installation, outbox, cache, identity-update ordering, and browser ABI remain unchanged.
- [x] Existing four browser tests remain; focused progress/error matrices, persistence-before-cleanup failure/drop evidence, and capability privacy/consumption controls are added.
- [x] Complete reconciliation children deny homeless functions and reject invalid suppression; unrelated parent helpers remain outside scope.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No schema migration, new journal, recovery path, fallback, deletion-on-drop, or exactly-once claim. Persisted DTOs remain separate from capabilities. Preserve `PendingIdentityRotation` as a reported resume observation.

## Progress

DEV-CORE moved all 13 production reconciliation operations and three fixture helpers onto the exact six-file ownership boundary. `IdentityReconciliationStore` owns vault-scoped marker persistence and compare-before-delete cleanup; serialized progress owns transition validation; private consuming continuations enforce epoch/checkpoint progression and persistence-before-cleanup. The final PR delta is 1,090 authored additions and 580 deletions, within the user-requested 2,000-line limit.

Remote Loom run `34023549521` passed. Hosted PR run `34023558250` passed Native Rust, WASM build, WASM Node, web, Dylint, Rust ecosystem, dependency, coverage, and preview verification. Exact-head SECURITY review passed with no P1/P2 findings. `task pr:ready PR=1438` returned ready with zero unresolved threads and successful exact-head deployment. PR #1438 squash-merged as `1be4c7446f79eedbcb5ebf28c20215cfcfb3a827`.


Read-only DEV-CORE inventory at origin/main `eae2900403c7f20fe33be1194a3f9e3e940bbbcd` identified the six-file closure and no overlap with live PRs #1436, #1430, or #1210.
