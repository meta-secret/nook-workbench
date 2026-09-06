---
title: Type transaction-bound event persistence
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-event-db-transaction
created_at: 2026-09-06T04:12:20Z
updated_at: 2026-09-06T04:57:16Z
source_issues: []
related_prs:
  - 1426
depends_on:
  - issues/rust-action-ownership/local-folder-transport.md
---

# Type transaction-bound event persistence

## Context

The Rust action-ownership migration continues through IndexedDB security-epoch persistence, where free functions currently separate frontier admission, transaction acquisition, graph mutation, row contraction, and commit completion from the state they operate on.

## Outcome

Event persistence uses a vault-scoped owner, named operation requests, and private prepared states that retain the exact overlapping read-write transaction admitted by validation until consuming commit completes.

## Scope

- One cohesive six-file `nook-wasm` boundary with a 1,750 authored-addition ceiling.
- Move security-epoch key, read, write, deletion, graph-loading, admission, transaction, and persistence helpers onto meaningful data-carrying owners.
- Replace positional persistence arguments with named single-event, epoch-pair, and remote-union requests.
- Add the simplest private prepared append and union states needed to bind admission and persistence to one transaction.
- Adapt direct manager consumers without changing public ABI or event schema.
- Exclude bytes-to-event verification, new rollback or atomicity claims, fallback, recovery, schema, dependency, and logging changes.

## Acceptance criteria

- [x] Applied and Duplicate admissions remain accepted; Pending and Quarantined remain rejected.
- [x] Single-event frontier and trigger/checkpoint parent and key-epoch linkage checks preserve behavior and exact errors.
- [x] Security-conflict detection and permissive persisted-graph loading remain unchanged.
- [x] Remote union preserves excluded-row deletion, sorted index output, derived heads, and conversion/error order.
- [x] Prepared states retain the exact admitted transaction and consume themselves during commit.
- [x] Successful heads return only after transaction completion; dropped preparation leaves storage unchanged under existing IndexedDB behavior.
- [x] Caller cleanup and publication sequencing, public ABI, and schemas remain unchanged.
- [x] The complete child and focused test module deny homeless functions and reject invalid suppression.
- [x] Focused browser fixtures cover successful commits, duplicates, stale frontiers, malformed linkage, unresolved parents, unauthorized events, remote contraction, and dropped preparation.
- [x] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

The six-file boundary merged in Nook PR #1426 as `97d0156faad403d19c1cb6a21417df14b4c910f2`. The final exact head passed Remote Loom, hosted Rust/WASM/web/Dylint validation, exact-head source SECURITY, and readiness.

## Findings and decisions

The prepared states bind frontier validation and persistence to the same transaction without claiming a new serialized-bytes verification guarantee or stronger transaction rollback behavior.

## References

- `nook-app/nook-platform/nook-wasm/src/storage/event_db/security_epoch.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/event_db/security_epoch/transaction.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/event_db.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs`
