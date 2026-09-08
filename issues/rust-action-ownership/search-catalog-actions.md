---
title: Rust search catalog action ownership
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-search-catalog
created_at: 2026-09-08T04:00:00Z
updated_at: 2026-09-08T04:00:00Z
source_issues: []
related_prs: []
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

- [ ] No production free functions remain in `vault_search_catalog.rs`.
- [ ] Existing search catalog behavior and tests remain intact.
- [ ] Dylint accepts the module with ordinary test helpers allowed under `cfg(test)`.
- [ ] Hosted validation, exact-head readiness, remote Loom verification, merge, and Workbench closeout pass.

## Progress

- 2026-09-08: Claimed for the next cohesive action-ownership migration slice.

## Findings and decisions

- Keep the implementation simple: use associated functions on `SecretSearchCatalog` and `SecretSearchCatalogEntry`; do not introduce a new wrapper type.
- Keep the change bounded to one PR under the 2,000 authored-addition limit.
