---
title: Type encrypted search catalog persistence
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-search-catalog-write
created_at: 2026-09-05T23:19:16Z
updated_at: 2026-09-05T23:19:16Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/vault-projection-operations.md
---

# Type encrypted search catalog persistence

## Outcome

Search-catalog bucket writes are fully encrypted and bound to their destination and captured pending mask before the prepared state can persist them.

## Scope

One Rust file with a ceiling of 240 authored additions. Move restore/load behavior to its existing owner, introduce a private prepared write state, activate module ownership enforcement, and add bounded restore, selection, and persistence behavior tests.

## Acceptance criteria

- [ ] Restore/load actions belong to `SearchCatalogRestore` and preserve rebuild classification and logging.
- [ ] Preparation encrypts every selected bucket and captures destination, mask, and writes before persistence.
- [ ] Consuming persistence clears only the captured mask after successful save; failure leaves it pending.
- [ ] Selection/order, empty deletion, plaintext zeroization, reconciliation, dirty flags, public API, storage schema, and errors remain unchanged.
- [ ] The module denies homeless functions without blanket suppression.
- [ ] Hosted Rust/WASM/Dylint checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

The state secures the local prepare/effect boundary and does not establish authorization or cross-tab freshness. Existing cache-error handling remains unchanged and is not extended. No public API, WASM ABI, storage schema, dependency, logging policy, fallback, or recovery change.

## Progress

2026-09-05T23:19:16Z: Focused issue created from current-main inventory; implementation has not started.
