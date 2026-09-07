---
title: Own sync projection and vault decision actions
status: ready
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sync-projection-decisions
created_at: 2026-09-07T23:34:00Z
updated_at: 2026-09-07T23:34:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/provider-validation.md
---

# Own sync projection and vault decision actions

## Context

The sync boundary still exposes provider metadata updates, legacy auth-provider serialization, local-vault replaceability classification, and provider-vault adoption decisions as free functions. Callers pass snapshots, event graphs, store identities, and identity observations separately, so the decision graph is detached from the state that carries its invariants.

## Outcome

Existing sync and projection types own these actions: `StorageProviderData` owns provider metadata updates, `AuthProvidersSnapshotData` owns rollback-safe legacy projection, `EventGraph` owns current-vault replaceability classification, and `CurrentVaultReplaceability` owns conservative provider-vault decision projection. Direct core and WASM callers use the owning methods while preserving public adapters and wire behavior.

## Scope

One cohesive sync projection and decision boundary:

- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/sync_metadata.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/legacy_storage.rs`
- `nook-app/nook-platform/nook-core/src/sync/vault_sync_conflict.rs`
- direct core sync, vault, sentinel, WASM identity, conflict, and storage callers and focused tests

Move provider sync metadata, legacy snapshot serialization, local-vault replaceability, and provider-vault decision actions onto existing state owners. Activate ownership denial and invalid-suppression prohibition in the completed modules without blanket exceptions. Keep WASM exports as thin adapters.

## Acceptance criteria

- [ ] Provider sync metadata preserves version fallback, revision fallback, content hashing, store-scope trimming, provider ordering, and untouched rows.
- [ ] Legacy auth-provider projection preserves the rollback-safe string-or-absent wire shape, aliases, credential redaction, and snapshot round-trip behavior.
- [ ] Replaceability classification preserves pending/quarantined/schema/conflict handling, accepted genesis checks, empty-vault adoption, and preservation-required outcomes.
- [ ] Provider-vault decisions preserve identity eligibility, conservative adoption, reason precedence, ordering, and public projection fields.
- [ ] Core, WASM, sentinel, storage, integration, and focused tests use owning methods; migrated free exports disappear while public adapter names remain explicit.
- [ ] Completed sync modules deny homeless functions and forbid invalid ownership-lint suppressions.
- [ ] Remote Loom, hosted checks, exact-head deployment/security, readiness, squash merge, and Workbench completion pass.

## Constraints

No provider I/O, authentication or authorization change, persistence or schema migration, cryptographic change, WASM/TypeScript signature change, fallback/recovery/retry behavior, or generic phase framework. Preserve serialized provider rows, decision enums, error ordering, identity projection fields, and mutation-free classification. No local Rust/WASM/product builds or tests.

## Progress

Selected from `origin/main` after PR #1547: provider validation ownership is merged, while the adjacent sync projection and vault decision actions remain detached from their existing snapshot, graph, and decision owners.
