---
title: Type storage-provider validation and identity actions
status: ready
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-validation
created_at: 2026-09-07T22:22:00Z
updated_at: 2026-09-07T22:22:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/provider-config-oauth-ownership.md
---

# Type storage-provider validation and identity actions

## Context

The provider configuration boundary now has validated value types, but its storage-mode selection, labels, credential presence checks, remote-reference keys, Drive reference formatting, GitHub token masking, and connect validation still expose homeless functions. Callers can apply provider policy without invoking the type that carries the provider or validated value invariant.

## Outcome

Storage-provider validation and identity policy becomes associated behavior on `StorageMode`, `StorageProviderType`, `DriveBackupName`, `GoogleDriveFolderId`, `GithubPat`, `GithubRepoName`, `OauthAccessToken`, `DriveEventParent`, and `SyncProviderTarget`. Core and WASM callers use those owners directly, and the old free exports disappear while boundary adapter names remain explicit.

## Scope

One cohesive provider-validation boundary:

- `nook-app/nook-platform/nook-core/src/sync/validation.rs`
- `nook-app/nook-platform/nook-core/src/sync/validation/provider_configuration.rs`
- `nook-app/nook-platform/nook-core/src/sync/validation/provider_configuration/github.rs`
- direct core sync-store and WASM provider callers and tests

Move provider-mode selection, validation, normalization, labeling, credential presence, stable target keys, cache references, Drive/GitHub reference formatting, PAT masking, and connect admission onto existing provider/value types. Activate ownership denial for the completed validation modules and reject invalid suppressions. Keep public WASM functions as thin adapters over typed core behavior.

## Acceptance criteria

- [ ] Storage mode/provider selection, labels, credential presence, stable target keys, and cache references preserve every current branch and string.
- [ ] Drive/GitHub/OAuth value parsing, trimming, defaults, invalid-character rejection, masking, and error ordering remain unchanged.
- [ ] Connect validation remains a boundary adapter with identical mode-specific credential behavior.
- [ ] Direct core sync-store, WASM, composition, and focused validation tests use owning methods; migrated free exports disappear.
- [ ] Provider validation modules deny homeless functions and forbid invalid ownership-lint suppressions without blanket exceptions.
- [ ] Remote Loom, hosted checks, exact-head deployment/security, readiness, squash merge, and Workbench completion pass.

## Constraints

No provider I/O, authentication or authorization change, persistence or schema change, cryptographic change, WASM/TypeScript signature change, fallback/recovery/retry behavior, or generic phase framework. Preserve all serialized provider strings, aliases, defaults, and public adapter names. No local Rust/WASM/product builds or tests.

## Progress

Selected from refreshed `main` after PR #1545: provider validation remains a large security-boundary cluster of homeless actions, with direct consumers across core sync storage and WASM provider adapters.
