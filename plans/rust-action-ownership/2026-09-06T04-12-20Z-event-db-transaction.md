---
title: Transaction-bound event admission and persistence ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/event-db-transaction.md
started_at: 2026-09-06T04:12:20Z
agent: codex
gizmo_id: rust-action-ownership-event-db-transaction
---

# Task plan

## Interpreted request

Continue the project-wide Rust migration with a substantial IndexedDB event-persistence boundary that keeps admission and mutation attached to one type-directed transaction lifecycle.

## Requirements

- Move security-epoch key construction, contextual reads and writes, deletion, persisted-ID contraction, graph loading, admission, transaction acquisition, and persistence onto meaningful owners.
- Introduce a borrowed vault persistence owner carrying the store ID.
- Replace positional persistence groups with named single-event, epoch-pair, and remote-union requests.
- Add private non-Clone prepared append and union states that retain the exact Rexie transaction and store handles used for admission and consume themselves during commit.
- Return successful heads only after existing transaction completion.
- Preserve admission classifications, frontier/linkage validation, conflict handling, permissive graph loading, remote contraction, sorting, derived heads, error order, caller cleanup, and publication sequencing.
- Add bounded browser behavior and compile controls for the migrated boundary.

## Constraints and exclusions

- Exact scope: `storage/event_db/security_epoch.rs`, new `storage/event_db/security_epoch/tests.rs`, `storage/event_db.rs`, `manager/event_log.rs`, `manager/event_log/security_epoch.rs`, and `manager/event_log/provider_sync.rs` under `nook-app/nook-platform/nook-wasm/src`.
- Target 1,100–1,500 authored additions; hard ceiling 1,750 and every final file below 1,000 lines.
- The state must retain its admitted transaction; callers cannot substitute a transaction during commit.
- Local append still receives the event and serialized bytes separately; do not claim or add bytes-to-event verification.
- Preserve existing IndexedDB transaction failure/drop behavior; do not add rollback or atomicity claims.
- No public ABI, event or storage schema, dependency, logging, fallback, recovery, TypeScript, or unrelated policy change.
- No file overlap with live PRs #1425, #1421, or #1210.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-event-db-transaction
- Estimated authored changed lines: 1400
- Owning modules, packages, or layers: nook-wasm IndexedDB event admission and persistence
- Ownership units:
1. Capability: Vault-scoped event persistence and transaction-bound admission; Gizmo ID: rust-action-ownership-event-db-transaction; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/storage/event_db/security_epoch.rs,nook-app/nook-platform/nook-wasm/src/storage/event_db.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/storage/event_db/security_epoch/tests.rs; Expertise forbidden paths: nook-app/nook-platform/nook-wasm/src/storage/indexed_db.rs; Expertise consumer interfaces: Existing internal event persistence entrypoints preserve results and error ordering; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted IndexedDB behavior, WASM, and Dylint checks pass
2. Capability: Security epoch pair and remote-union persistence requests; Gizmo ID: rust-action-ownership-event-db-transaction; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/storage/event_db/security_epoch.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log/security_epoch.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/storage/event_db/security_epoch/tests.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: Existing manager cleanup and publication sequencing remains stable; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted pair/union persistence and compile controls pass
- Public or cross-module interfaces: Existing public WASM ABI and event/storage schemas remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1400
- Current PR slice and acceptance evidence: Complete event-db security-epoch ownership, transaction-retaining prepared states, request owners, focused browser fixtures, and direct consumer adaptation; Acceptance evidence: Remote Loom, hosted IndexedDB/WASM/Dylint behavior, exact-head source SECURITY, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-event-db-transaction; Gizmo name: Transaction-bound event admission and persistence ownership; Predecessor Gizmo ID: None; Vault owner, transaction preparation, append/pair/union commit states, focused fixtures, and consumers; Estimated authored changed lines: 1400; Acceptance evidence: Remote Loom, hosted IndexedDB/WASM/Dylint behavior, exact-head source SECURITY, and readiness

## Initial plan

1. Implement the vault owner, named requests, transaction-retaining prepared states, and six-file consumer boundary within the hard budget.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings within scope, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced admission-to-commit transaction binding, preserved event admission and persistence behavior, complete child-module ownership enforcement, hosted behavior and Dylint gates, remote Loom, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
