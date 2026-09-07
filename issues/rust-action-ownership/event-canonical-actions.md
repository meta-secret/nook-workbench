---
title: Own canonical event actions
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-event-canonical-actions
created_at: 2026-09-07T12:56:45Z
updated_at: 2026-09-07T12:56:45Z
source_issues: []
related_prs: []
dependencies:
  - issues/rust-action-ownership/vault-projection-actions.md
---

# Own canonical event actions

## Context

The signed event protocol still exposes homeless free operations for canonical JSON encoding, event-id hashing, Ed25519 signature formatting/signing/verification, and arbitrary-byte SHA-256 digests. These operations carry canonical event bytes, signature state, and digest values without being owned by their domain types.

## Outcome

Canonical JSON encoding is owned by `CanonicalEventBodyBytes`, event-id hashing by `EventId`, signature parsing/signing/verification by `Ed25519Signature`, and arbitrary-byte hashing by `Sha256Hex`. Existing canonical bytes, digest encodings, signature errors, event validation, and public WASM behavior remain unchanged.

## Scope

Delivery is based on main `6f8a0156567ac3d1c594f2d43b69bfae0829b4e8`:

- `nook-auth2/src/wire/metadata.rs`
- `nook-event-log/src/canonical.rs`, `event.rs`, `event_bytes.rs`, `lib.rs`, `signing.rs`
- Core event-session exports/callers and direct WASM digest callers.

The migration is one cohesive protocol slice below the 2,000 authored-line limit; current authored additions are 125.

## Acceptance criteria

- [ ] Canonical JSON sorting and serialization are owned by `CanonicalEventBodyBytes` without production free helpers.
- [ ] Event-id hashing is an owned action on `EventId` and arbitrary-byte hashing on `Sha256Hex`.
- [ ] Signature parsing, formatting, signing, and verification are owned by `Ed25519Signature`.
- [ ] Core/WASM callers use typed actions; canonical bytes, digest strings, signature errors, event validation, and public behavior remain unchanged.
- [ ] The canonical module activates both ownership lints without blanket suppression.
- [ ] No cryptographic algorithm, serialization, event schema, or error-ordering behavior changes.
- [ ] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve canonical JSON key ordering, parent ordering, SHA-256 encodings, Ed25519 wire signatures, actor validation, and error ordering.

## Progress

Inventory after PR #1520 found the event protocol's canonical and signing free operations and bounded direct callers across event-log, core, and WASM. No overlapping open PR owns these files.
