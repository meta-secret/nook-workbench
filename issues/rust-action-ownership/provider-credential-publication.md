---
title: Type provider credential sealing and identity-scoped snapshot publication
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-credential-publication
created_at: 2026-09-06T12:28:33Z
updated_at: 2026-09-06T12:28:33Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/enrollment-issuance-links.md
---

# Type provider credential sealing and identity-scoped snapshot publication

## Context

Provider credential sealing/opening and auth-provider snapshot persistence still expose free operations across core, WASM storage, vault APIs, rollback projection, and Sentinel acceptance. Existing sequential sealing, clone-before-open atomicity, marker and empty-field handling, identity isolation, conflict refusal, write ordering, and partial effects are correct, but the valid action graph is not represented by consuming owners.

## Outcome

Provider credential handling becomes a typed action graph. Credential and snapshot owners retain encoding observations and recipient evidence; normal-save and presealed-import requests produce a private non-Clone prepared provider snapshot write consumed by the existing scoped persistence operation. A borrowed snapshot-store owner replaces the shared writer while preserving database timing and legacy-write decisions.

## Scope

Exact seven-file platform scope:

- `nook-app/nook-platform/nook-core/src/sync/sync_provider_credentials.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers/publication.rs` (new)
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers/rollback_projection.rs`
- `nook-app/nook-platform/nook-wasm/src/vault_api.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/sentinel.rs`

Move 12 production free operations into credential/snapshot/publication owners while keeping additions between 1,200 and 1,650 and below a hard ceiling of 1,850.

## Acceptance criteria

- [ ] Sequential sealing, clone-before-open replacement, empty credentials, marker-bearing fields, malformed armor rejection, and exact recipient/public-key behavior remain unchanged.
- [ ] Normal-save sealing remains before keyring-policy lookup and database access; keyring observation and separate `nook_auth` transaction timing remain unchanged.
- [ ] Identity-scoped and legacy reads, conflict refusal, exact errors, write ordering, partial effects, and future-drop behavior remain unchanged; no cross-database atomicity claim is added.
- [ ] Presealed import checks incoming fields before database work, conditionally reads eligible legacy data, checks existing fields, and replaces only incoming active-vault grants while preserving unrelated grants and explicit recipient app ID.
- [ ] Private-key-free presealed import, rollback projection schema, and all provider sealing/opening cryptographic behavior remain unchanged.
- [ ] Eight core tests and 18 browser storage tests remain; publication tests move with the new child and bounded preparation/drop, malformed-marker, and failure-preservation controls are added.
- [ ] Ownership enforcement covers the complete core credential module and new publication child only; unrelated parent storage and rollback helpers remain outside blanket activation.
- [ ] No public ABI, schema, persistence, recipient, or cryptographic parameter changes.
- [ ] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No generic persistence framework, fallback, rollback/recovery exception, cleanup, cross-database transaction claim, schema migration, recipient-authentication inference from marker presence, or provider read/delete behavior change. Keep `vault_api.rs` and `manager/sentinel.rs` adaptations narrow.

## Progress

Read-only DEV-CORE inventory at refreshed origin/main `ea7820a4245733b26b9d49836eadc288f316e6d1` identified the seven-file closure with zero changed-file overlap with live PRs #1448, #1447, and #1210. Estimated 1,200–1,650 additions and 650–950 deletions with a hard ceiling of 1,850 additions.
