---
title: Own vault synchronization actions
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-sync-actions
created_at: 2026-09-07T14:58:00Z
updated_at: 2026-09-07T14:58:00Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/secret-session-actions.md
---

# Own vault synchronization actions

## Context

Vault synchronization still exposes comparison, revision parsing, and legacy YAML reconciliation as free functions. Callers pass local and remote blobs, causal hashes, identity, mutable metadata, and mode flags separately, so the sync action graph has no owner carrying the state needed for a safe transition.

## Outcome

`VaultSyncComparison` owns revision inspection and local/remote decision making. `YamlSyncSession` owns legacy YAML reconciliation and consumes its session inputs into a typed `YamlSyncOutcome`. Existing `VaultSyncPair` preparation, conflict behavior, store identity checks, and reload ordering remain unchanged.

## Scope

Fresh-main base `89edb04103a26974f4f19cc17be6fa3bc14eb02e`:

- `nook-core/src/sync/vault_sync.rs`
- `nook-core/src/sync/vault_sync_session.rs`
- `nook-core/src/sync/vault_sync_store.rs`
- `nook-core/src/lib.rs`
- direct tests and sync callers.

This is one cohesive synchronization action graph with a hard ceiling of 1,500 authored additions and no local product builds or tests.

## Acceptance criteria

- [ ] `VaultSyncComparison` owns revision parsing and local/remote comparison; old free comparison exports are removed.
- [ ] `YamlSyncSession` owns legacy YAML reconciliation and preserves unchanged/new/access/reloaded outcomes and mutation order.
- [ ] `VaultSyncPair` uses the typed comparison action and all direct callers use owned actions.
- [ ] Store-id mismatch, common-hash divergence, version ordering, empty content, event-log rehydration, and reload metadata behavior remain unchanged.
- [ ] Ownership enforcement covers the new sync owners without blanket suppression.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.
