---
title: Rust search catalog action ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-search-catalog
created_at: 2026-09-08T04:00:00Z
updated_at: 2026-09-08T05:51:40Z
source_issues: []
related_prs: [1558]
depends_on: [rust-action-ownership-foundation]
---

# Rust search catalog action ownership

## Context

The search catalog still keeps bucket selection, payload hashing, and integrity-tag construction as free production functions. These actions belong to the catalog and its entry domain types so the ownership policy can describe the action graph directly.

## Outcome

Search catalog production behavior is expressed through associated functions on its domain types and the module opts into `unowned_function` enforcement. Test-only helpers remain permitted by the policy.

## Scope

- Move search catalog bucket, digest, bucket-mask, and integrity-tag actions onto existing domain types.
- Activate the domain ownership lint for the search catalog module.
- Preserve encrypted bucket behavior, integrity validation, reconciliation, and query tests.

## Acceptance criteria

- [x] No production free functions remain in `vault_search_catalog.rs`.
- [x] Existing search catalog behavior and tests remain intact.
- [x] Dylint accepts the module with ordinary test helpers allowed under `cfg(test)`.
- [x] Hosted validation, exact-head readiness, remote Loom verification, merge, and Workbench closeout pass.

## Progress

- 2026-09-08: Claimed for the next cohesive action-ownership migration slice.
- 2026-09-08: PR #1558 moved bucket selection, payload digesting, integrity-tag construction, bucket-mask tracking, and entry construction behind owned typed APIs; the `cfg(test)` exception intentionally leaves ordinary test fixtures free.
- 2026-09-08: PR #1558 merged as `3fee80506d443035c30e584e7523d0962de324c4` after hosted validation run `34191223866`, exact-head deployment, readiness, and remote `loom:verify` run `34192032093` passed.

## Findings and decisions

- Keep the implementation simple: use associated functions on `SecretSearchCatalog` and `SecretSearchCatalogEntry`; do not introduce a new wrapper type.
- Keep the change bounded to one PR under the 2,000 authored-addition limit.
- Domain-specific private newtypes are used where the action graph needs stronger boundaries: `SecretSearchCatalogPayloadDigest`, `SecretSearchCatalogIntegrityTag`, and `SecretSearchCatalogBucketMask`.
- The ownership lint's `cfg(test)` exception is intentional: test-only free fixtures remain allowed while production free functions stay denied.
