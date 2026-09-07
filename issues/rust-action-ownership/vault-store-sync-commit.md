---
title: Type vault synchronization preparation and commit ownership
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-store-sync-commit
created_at: 2026-09-07T07:42:47Z
updated_at: 2026-09-07T07:42:47Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/vault-access-diagnostic-evaluation.md
---

# Type vault synchronization preparation and commit ownership

## Context

In-memory vault synchronization still exposes comparison, conflict resolution, fan-out, guarded writes, and revision advancement as free functions. These operations form one action graph and should be owned by store-pair preparation, explicit conflict owners, and revision state so a selected synchronization action cannot be detached from the stores it was evaluated against.

## Outcome

A borrowed store-pair owner prepares a private non-Clone synchronization state and consumes it to commit the selected action. Fan-out owns sequential provider application, `MemoryVaultStore` owns explicit conflict replacement, and revision state owns advancement. Named request types replace multi-parameter guarded-write and versioned-store construction interfaces without changing persistence or provider guarantees.

## Scope

Exact three-file closure on fresh main `69e431f159c717e6d78e0151e75157932f3af88f`:

- `nook-app/nook-platform/nook-core/src/sync/vault_sync_store.rs`
- `nook-app/nook-platform/nook-core/tests/vault_sync_workflow.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`

Move seven production operations: `reconcile_vault_stores`, `reconcile_vault_stores_with_common`, `fan_out_sync`, `resolve_conflict_keep_local`, `resolve_conflict_keep_remote`, `apply_vault_sync_action`, and `next_revision`; own the integration fixture `sample_yaml`. Estimated 550–850 additions and 200–350 removals; strict ceiling 1,100 additions; no new files.

## Acceptance criteria

- [ ] Comparison errors precede mutation; Conflict and Unchanged preserve both stores.
- [ ] AdoptRemote copies blob and revision; PushLocal copies blob and advances only remote revision.
- [ ] Fan-out sorts provider IDs lexically, applies sequentially, and retains earlier effects if a later provider fails.
- [ ] Trimmed equal content precedes revision mismatch and preserves original bytes/revision.
- [ ] Different content with stale revision returns `RemoteChangedDuringWrite` without mutation.
- [ ] Explicit conflict choices retain their current unconditional behavior.
- [ ] Existing revision parsing, malformed-revision behavior, and saturating increment remain exact.
- [ ] Preparation drop changes neither store; commit cannot substitute a different action or store.
- [ ] Five unit and nine integration tests remain; focused preparation/drop, comparison-error, guarded-write precedence, revision-boundary, later-provider-failure, and privacy/borrow/consumption controls are added.
- [ ] Ownership enforcement and invalid-suppression prohibition cover only the completed store module; unrelated code remains unchanged.
- [ ] Scoped gates, hosted validation, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No storage schema, cryptography, browser ABI, provider I/O, retries, recovery changes, or local product builds/tests. Keep the reference implementation in memory and do not imply stronger real provider transaction guarantees.

## Progress

Fresh-main DEV-CORE inventory at `69e431f159c717e6d78e0151e75157932f3af88f` found a closed three-file action graph with no live PR overlap. Exact symbol inspection found no production WASM consumer of these store APIs.

## Completion

Pending implementation and delivery.
