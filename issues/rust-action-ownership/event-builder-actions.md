---
title: Own signed event-builder actions
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-event-builder-actions
created_at: 2026-09-07T12:05:03Z
updated_at: 2026-09-07T12:05:03Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/vault-epoch-crypto-ownership.md
---

# Own signed event-builder actions

## Context

The event-log builder still exposes homeless free operations for signed event construction, encrypted-secret payload construction, and causal parent normalization. These operations carry signer identity, actor authorization, storage bytes, and encrypted secret material without an owned action state.

## Outcome

The event builder will expose consuming methods on `AppendEventInput`, `EncryptedSecretPayload`, and `ObservedHeads`. Existing canonical event bytes, actor/signing-key checks, parent ordering, encrypted payload fields, and public WASM behavior remain unchanged.

## Scope

Fresh-main closure after PR #1517:

- `nook-app/nook-platform/nook-event-log/src/builder.rs`
- `nook-app/nook-platform/nook-event-log/src/event.rs`
- `nook-app/nook-platform/nook-event-log/src/lib.rs`
- Direct core/WASM callers and event-log tests that import the three builder operations.

Remove `build_signed_event`, `encrypted_secret_from_armored`, and `parents_from_heads` as free operations. Hard ceiling: 1,200 authored additions and user target below 2,000.

## Acceptance criteria

- [ ] Signed event construction is an owned consuming action with the existing actor/signing-key validation and serialization order.
- [ ] Encrypted secret payload creation is owned by its payload type with identical wire fields and ciphertext handling.
- [ ] Causal parent normalization is owned by the observed-head state; duplicate removal and ordering remain deterministic.
- [ ] Direct core/WASM callers and tests use owned methods; no public WASM signature changes.
- [ ] The builder module activates both ownership lints without blanket suppression or authored free helpers.
- [ ] No event schema, signature, authorization, storage, or recovery behavior changes.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve canonical event IDs, actor validation, signing bytes, parent ordering, secret fingerprints, encrypted payload schemas, and error ordering.

## Progress

Inventory after PR #1517 found the event builder's three production free operations and bounded direct callers across core, WASM, and event-log tests. No overlapping open PR currently owns these files.

## Completion

Pending implementation and delivery.
