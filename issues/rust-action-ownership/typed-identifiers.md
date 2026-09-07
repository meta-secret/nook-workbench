---
title: Type persisted vault identifiers and validation actions
status: ready
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-typed-identifiers
created_at: 2026-09-07T21:40:00Z
updated_at: 2026-09-07T21:40:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/multi-device-key-actions.md
---

# Type persisted vault identifiers and validation actions

## Context

The multi-device security layer now owns key and record actions, but `ids.rs` still exposes detached generation, formatting, normalization, and shape predicates for compact tokens, app/device ids, store ids, secret ids, and auth-key ids. Callers can perform identifier policy without the type that carries the prefix, reserved-id rule, digest shape, or generation invariant.

## Outcome

Persisted identifier actions become associated methods on `CompactToken`, `AppId`, `StoreId`, `SecretId`, and `AuthKeyId`. The auth2/core/event-log/WASM callers use those owners directly, and the old free exports disappear. Wire strings, legacy aliases, prefixes, validation order, reserved-id rejection, and generated values remain unchanged.

## Scope

One cohesive identifier boundary:

- `nook-app/nook-platform/nook-auth2/src/ids.rs` and its exports
- `nook-app/nook-platform/nook-core/src/vault/vault_ids.rs` and identifier consumers
- `nook-app/nook-platform/nook-event-log/src/signing.rs`
- direct auth2, core, WASM, composition-test, and identifier test callers

Move compact-token, app/device-id, auth-key-id, store-id, and secret-id generation/formatting/normalization/predicate operations onto their existing domain types. Enable full ownership denial for the identifier module and reject invalid suppressions. Keep external WASM boundary methods as adapters over the typed core methods. Target 800–1,400 authored additions with a hard ceiling of 1,800.

## Acceptance criteria

- [ ] Compact-token, app/device-id, auth-key-id, store-id, and secret-id policy is exposed through associated methods on the corresponding domain types.
- [ ] Prefixes, trimming, reserved-device/auth-key rejection, digest shape, random-byte encoding, validation errors, aliases, and serialization remain unchanged.
- [ ] No compatibility free functions remain for migrated identifier actions in auth2/core; direct callers use the type owners.
- [ ] WASM/public API adapters retain their external names while delegating to typed core methods.
- [ ] Auth2 identifier tests and focused core/event-log/WASM behavior coverage preserve the current contract.
- [ ] The identifier module denies homeless functions and forbids invalid ownership-lint suppressions without blanket exceptions.
- [ ] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No schema, ABI, cryptographic algorithm, authorization, persistence, fallback, recovery, or retry changes. Preserve `DeviceId` as the migration type alias and all serialized identifier strings. No local Rust/WASM/product builds or tests.

## Progress

Selected from the refreshed main after PR #1543: identifier generation and validation remain one of the largest security-domain clusters of homeless actions, with direct callers across auth2, core, event-log, and WASM.
