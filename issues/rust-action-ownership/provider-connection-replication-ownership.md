---
title: Type provider connection arguments and replication selection ownership
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-connection-replication
created_at: 2026-09-07T03:20:19Z
updated_at: 2026-09-07T03:20:19Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/provider-config-oauth-ownership.md
---

# Type provider connection arguments and replication selection ownership

## Context

Provider connection arguments, replication capability checks, and compatible-provider selection still expose nine homeless production operations across core and direct WASM adapters. Draft, staged, vault, and persisted provider paths pass raw argument sets without a type carrying their precedence, credential, and replication semantics.

## Outcome

Existing `StorageProviderData` owns persisted connection arguments and replication checks. Borrowed `ProviderSelectionRequest`, `DraftStorageConnection`, `StagedRemoteConnection`, and `VaultStorageConnection` own selection and projection with named inputs. Optional text normalization and focused fixtures move onto meaningful owners while preserving configuration-only semantics.

## Scope

Exact eight-file closure:

- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/storage_args.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/enrollment.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/mod.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/provider_state.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/provider_operations.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/provider_architecture.rs`

Move nine production operations and three fixture helpers (`github_provider`, `local_folder_provider`, `oauth_provider`) onto bounded owners. Estimated 850–1,150 additions, hard ceiling 1,500; preserve all existing file ceilings and public WASM signatures.

## Acceptance criteria

- [ ] Local-vault precedence, authenticated persisted-row selection, unauthenticated draft behavior, raw GitHub draft bytes, trimmed persisted/staged values, missing staged credentials yielding `None`, and shared Drive filename precedence remain exact.
- [ ] Exact tab-delimited remote references, shared-target error order, iCloud target parsing, preferred-compatible then first-compatible ordering, and runtime replication checks remain exact.
- [ ] Existing public WASM signatures, credential copying, schemas, storage behavior, and adapter ordering remain unchanged.
- [ ] Retain all 8 focused storage-args tests, 3 enrollment tests, 2 facade tests, and 5 affected WASM tests; add bounded raw/trimmed/default, malformed-target, selection-order, staged-missing-credential, and input-nonmutation matrices.
- [ ] Ownership denial covers completed `storage_args.rs`; unrelated enrollment, facade, and WASM operations remain outside blanket activation.
- [ ] Hosted PR checks, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No authorization or persistence typestates, provider I/O, storage transactions, cryptographic, schema, TSify/WASM signature, durable-publication, fallback, recovery, or generic phase-framework changes. These owners project configuration and replication capability only.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `8fb5efb877273dfd64331b76bc902039605f4fda` found nine homeless production operations and three fixture helpers in an exact eight-file closure with no live PR overlap. Estimated scope is 850–1,150 additions with a hard ceiling of 1,500.
