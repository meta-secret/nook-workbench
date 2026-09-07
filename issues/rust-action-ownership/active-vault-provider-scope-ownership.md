---
title: Type active-vault provider scope and grant replacement ownership
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-active-vault-provider-scope
created_at: 2026-09-07T05:07:09Z
updated_at: 2026-09-07T05:07:09Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/sentinel-onboarding-ownership.md
---

# Type active-vault provider scope and grant replacement ownership

## Context

Active-vault provider scope filtering, provider selection, locked-state projection, and grant replacement still expose homeless operations across core and WASM adapters. These actions carry persisted vault scope and provider identity semantics that belong to typed provider-row and snapshot owners.

## Outcome

A borrowed provider-row view owns provider labels and locked-row projection. A scoped provider view owns active-store observation plus active, sync, and local selection. `AuthProvidersSnapshotData` owns replacement of its grant set from an incoming snapshot while preserving ordered retention and rebound semantics. The fixture helper is owned by its focused test fixture.

## Scope

Exact seven-file closure on fresh main `82a9e7dc5b1241852505666a4863cf05e17c1cab`:

- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/scope.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/save.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/mod.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/provider_operations.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers/publication.rs`
- `nook-app/nook-platform/nook-wasm/src/vault_api.rs`

Move six production operations and the focused `github_provider` fixture onto bounded owners. Estimated 650–950 additions and 250–400 removals; hard ceiling 1,200 additions; no new files.

## Acceptance criteria

- [ ] Active-store input is trimmed; active-row selection compares persisted store strings exactly; missing or blank scope returns all rows.
- [ ] Sync selection excludes only Local; LocalFolder remains included; local selection returns the first Local row.
- [ ] Label lookup preserves first-match ordering and raw-ID fallback.
- [ ] Locked projection filters Local type and clones retained rows verbatim without scrubbing or proof.
- [ ] Grant replacement trims incoming and existing scopes, discards existing unscoped/target-vault rows, retains other-vault rows in order, and appends every incoming rebound to the incoming scope.
- [ ] Missing or blank incoming scope returns the incoming snapshot unchanged; IDs, timestamps, duplicates, credential bytes, `.ok()`, WASM signatures, and snapshot metadata remain unchanged.
- [ ] Publication remains the existing transaction/admission flow with load/seal/save order and partial effects preserved.
- [ ] Retain all 36 scoped tests and unchanged public API integration; add blank/whitespace, exact-vs-trimmed, LocalFolder, ordered replacement, duplicate retention, absent-scope, and input-nonmutation matrices.
- [ ] Ownership denial covers the completed scoped core subtree; no unrelated public API blanket activation.
- [ ] Scoped gates, hosted validation, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No new files, schemas, storage migrations, ABI changes, product behavior changes, compatibility fallbacks, or local product builds/tests. Preserve publication order, partial effects, errors, metadata, credential bytes, and all existing public signatures.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `82a9e7dc5b1241852505666a4863cf05e17c1cab` found six homeless production operations and one fixture helper in an exact seven-file closure with no live PR overlap. The scope stays below the repository’s 1,000-line authored-file guardrails.

## Completion

Pending implementation and delivery.
