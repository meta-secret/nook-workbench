---
title: Own vault format read and write actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-format-actions
created_at: 2026-09-07T16:06:28Z
updated_at: 2026-09-07T17:25:28Z
source_issues: []
related_prs: [1529]
dependencies:
  - issues/rust-action-ownership/vault-sync-actions.md
---

# Own vault format read and write actions

## Context

Vault YAML detection, metadata reads, record deserialization, and projection serialization are still exposed as homeless core functions. Callers pass raw content, records, format, unlock metadata, names, versions, and architecture independently, so the format boundary does not retain the state it validates or emits.

## Outcome

`VaultFormatDocument` owns detection, schema checks, metadata reads, deserialization, and name replacement for borrowed stored content. `VaultRecordSet` owns format-specific serialization and carries records through unlock, name, version, and architecture options. YAML section conversion is owned by the YAML record and document types. Existing public wire values, schema checks, section ordering, normalization, and error precedence remain unchanged.

## Scope

Fresh-main base `33d6c41bb76638540783683651c4ae8ce5c2d430`:

- `nook-app/nook-platform/nook-core/src/vault/vault_format.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_format/model.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_format/vault_yaml.rs`
- direct core, sync, WASM, and workflow callers of the format APIs.

Activate ownership enforcement for the migrated format boundary. Hard ceiling: 1,500 authored additions.

## Acceptance criteria

- [x] `VaultFormatDocument` owns format detection, schema/version/name/store/unlock/architecture/password reads, deserialization, and name replacement; old free core exports are removed.
- [x] `VaultRecordSet` owns serialization and carries unlock, store, name, version, and architecture inputs through consuming or associated actions.
- [x] YAML section conversion and partitioning use meaningful record/document owners; no blanket suppression is added.
- [x] Empty content, YAML detection, schema-version rejection, auth/member/join/sentinel section ordering, local-wrapper exclusion, id normalization, unlock normalization, and error mapping remain unchanged.
- [x] All direct core, WASM, sync, storage, and workflow callers use typed format actions; browser ABI and persisted YAML remain unchanged.
- [x] Existing format and workflow tests remain, with focused owner/action tests where behavior moves.
- [x] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No schema, serialization, cryptography, storage, browser ABI, or authorization changes. No local product builds or tests; use scoped formatting, diff, size, and Loom hygiene gates plus hosted validation.

## Progress

Inventory found the complete format boundary and its direct consumers. PR #1529 migrated the boundary to `VaultFormatDocument` and `VaultRecordSet`, moved tests into the owning module, migrated WASM callers, and removed the old free exports. Exact-head `0d91d78f8a6726472d8ac41668833a91ec8500b1` passed hosted policy/product validation and remote Loom, then squash-merged as `5a7ff77e32d0dacb03f50fb29633ec85da3de5e7` onto `origin/main`.
