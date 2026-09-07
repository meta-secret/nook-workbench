---
title: Own vault synchronization actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-sync-actions
created_at: 2026-09-07T14:58:00Z
updated_at: 2026-09-07T16:01:16Z
source_issues: []
related_prs:
  - 1527
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

- [x] `VaultSyncComparison` owns revision parsing and local/remote comparison; old free comparison exports are removed.
- [x] `YamlSyncSession` owns legacy YAML reconciliation and preserves unchanged/new/access/reloaded outcomes and mutation order.
- [x] `VaultSyncPair` uses the typed comparison action and all direct callers use owned actions.
- [x] Store-id mismatch, common-hash divergence, version ordering, empty content, event-log rehydration, and reload metadata behavior remain unchanged.
- [x] Ownership enforcement covers the new sync owners without blanket suppression.
- [x] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Progress

- PR #1527 was opened from fresh main, then rebased onto `164cf8ab611dd75b4ab6b9b17f091387c288571f` when main advanced.
- The amended exact head was `1044e9cbb7f4e56fefc204f918b41c118c7a4549`; authored scope was 8 files and 277 additions.

## Completion

- Exact-head SECURITY passed with no actionable P1/P2/P3 findings.
- Hosted PR run `34139877335`, repository policy run `34139833625`, and remote Loom run `34141030569` passed; readiness returned true with preview `https://pr-1527.nokey-sh.pages.dev`.
- Squash merge completed as `84c29bc076ca7583b374e4ab20babfc35bb8d17c`, and `origin/main` was verified at that commit.
