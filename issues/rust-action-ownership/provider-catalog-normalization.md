---
title: Type provider catalog normalization and local-row ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-catalog-normalization
created_at: 2026-09-07T06:25:25Z
updated_at: 2026-09-07T07:14:04Z
source_issues: []
related_prs:
  - 1498
depends_on:
  - issues/rust-action-ownership/active-provider-credential-projection-ownership.md
---

# Type provider catalog normalization and local-row ownership

## Context

The provider catalog still exposes free normalization, duplicate-selection, display, and local-row operations across core and WASM adapters. These transformations and observations belong to the catalog data, requests, snapshots, and row owners while preserving the existing permissive migration and publication contracts.

## Outcome

Provider catalog normalization, duplicate selection, semantic field handling, display defaults, and local-row insertion are owned by bounded domain/request types. Existing raw-input cloning, malformed-row filtering, active-scope parsing, duplicate identity, local-row precedence, browser ABI, schema, publication ordering, and rollback behavior remain unchanged.

## Scope

Exact eleven-file closure on fresh main `52196e5278bce64b469adbed1d484f3f04c31058`:

- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/catalog.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/mod.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/legacy_storage.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/save.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_sentinel_onboarding/admission.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api.rs`
- `nook-app/nook-platform/nook-wasm/src/vault_api.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers/publication.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers/rollback_projection.rs`

Move twelve production operations and five fixture helpers onto meaningful owners. Estimated 750–1,100 additions and 400–600 removals; strict ceiling 1,400 additions; no new files.

## Acceptance criteria

- [x] Existing permissive normalization, raw-input cloning, invalid-row filtering, active-scope parsing, and normalized-raw-JSON `changed` comparison remain unchanged.
- [x] State-tagged objects, string bytes, whitespace rules, default variants, malformed-input treatment, and migration behavior remain unchanged.
- [x] GitHub PAT participates in duplicate identity; missing PAT rejection, iCloud shared-target substitution, first-match/exclusion behavior, and cloned result remain unchanged.
- [x] Local-row insertion preserves explicit-store precedence, unscoped-local matching, prepending order, unchanged active scope, and return behavior.
- [x] Labels, suffixes, PAT masking, browser ABI, schema, credential opening order, publication transactions, rollback comparisons, and Sentinel admission order remain unchanged.
- [x] Retain all 65 scoped tests, including all five catalog tests; add focused malformed/state-tagged normalization, unchanged-input, duplicate-order/exclusion, local-row-scope, and display/default matrices. Leave target-key algorithms and five tests in `sync/validation/provider_configuration.rs` untouched.
- [x] Ownership denial and invalid-suppression prohibition cover only the completed `catalog.rs` subtree.
- [x] Scoped gates, hosted validation, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No new files, storage or schema changes, authorization or crypto changes, browser lifecycle changes, public ABI changes, compatibility fallbacks, or local product builds/tests. Preserve permissive normalization and all malformed-input behavior.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `52196e5278bce64b469adbed1d484f3f04c31058` found twelve homeless production operations and five fixture helpers in an exact eleven-file consumer closure with no live PR overlap. The scope stays below the authored-file guardrails.

## Completion

Implemented and merged in PR #1498.

- Final head: `e902ba4d79496bd88d3c5c2ac4b8782d1b6aeb4d`
- Base: `caaef127dad2d2c390378fd5e007f36dd33850e5`
- Merge commit: `5d64ff95d1491a707dbe7c157932f1ad906c5066`
- Hosted PR run: `34093325424` passed; exact deployment: `https://pr-1498.nokey-sh.pages.dev`
- Remote Loom verification: `34094116612` passed.
- Exact-head SECURITY: PASS; no P1/P2 findings.
- `task pr:ready PR=1498`: `ready: true`.
- Scoped formatting/static/retention/size checks and `task loom:pre-push` passed; no local product builds/tests run.

