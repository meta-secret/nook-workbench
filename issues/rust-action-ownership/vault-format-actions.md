---
title: Own vault format read and write actions
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-vault-format-actions
created_at: 2026-09-07T16:06:28Z
updated_at: 2026-09-07T16:06:28Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/vault-sync-actions.md
---

# Own vault format read and write actions

## Context

Vault YAML detection, metadata reads, record deserialization, and projection serialization are still exposed as homeless core functions. Callers pass raw content, records, format, unlock metadata, names, versions, and architecture independently, so the format boundary does not retain the state it validates or emits.

## Outcome

`VaultFormatDocument` owns detection, schema checks, metadata reads, deserialization, and name replacement for borrowed stored content. `VaultRecordSet` owns format-specific serialization and carries records through unlock, name, version, and architecture options. YAML section conversion is owned by the YAML record and document types. Existing public wire values, schema checks, section ordering, normalization, and error precedence remain unchanged.

## Scope

Fresh-main base `84c29bc076ca7583b374e4ab20babfc35bb8d17c`:

- `nook-app/nook-platform/nook-core/src/vault/vault_format.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_format/model.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_format/vault_yaml.rs`
- direct core, sync, WASM, and workflow callers of the format APIs.

Activate ownership enforcement for the migrated format boundary. Hard ceiling: 1,500 authored additions.

## Acceptance criteria

- [ ] `VaultFormatDocument` owns format detection, schema/version/name/store/unlock/architecture/password reads, deserialization, and name replacement; old free core exports are removed.
- [ ] `VaultRecordSet` owns serialization and carries unlock, store, name, version, and architecture inputs through consuming or associated actions.
- [ ] YAML section conversion and partitioning use meaningful record/document owners; no blanket suppression is added.
- [ ] Empty content, YAML detection, schema-version rejection, auth/member/join/sentinel section ordering, local-wrapper exclusion, id normalization, unlock normalization, and error mapping remain unchanged.
- [ ] All direct core, WASM, sync, storage, and workflow callers use typed format actions; browser ABI and persisted YAML remain unchanged.
- [ ] Existing format and workflow tests remain, with focused owner/action tests where behavior moves.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No schema, serialization, cryptography, storage, browser ABI, or authorization changes. No local product builds or tests; use scoped formatting, diff, size, and Loom hygiene gates plus hosted validation.

## Progress

Read-only inventory at fresh `origin/main` `84c29bc076ca7583b374e4ab20babfc35bb8d17c` found the complete format boundary and its direct consumers. The slice is intentionally limited to format ownership and caller migration.
