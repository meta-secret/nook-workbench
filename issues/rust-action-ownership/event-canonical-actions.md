---
title: Own canonical event actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-event-canonical-actions
created_at: 2026-09-07T12:56:45Z
updated_at: 2026-09-07T14:01:30Z
source_issues: []
related_prs: [1521]
dependencies:
  - issues/rust-action-ownership/vault-projection-actions.md
---

# Own canonical event actions

## Context

The signed event protocol still exposes homeless free operations for canonical JSON encoding, event-id hashing, Ed25519 signature formatting/signing/verification, and arbitrary-byte SHA-256 digests. These operations carry canonical event bytes, signature state, and digest values without being owned by their domain types.

## Outcome

Canonical JSON encoding is owned by `CanonicalEventBodyBytes`, event-id hashing by `EventId`, signature parsing/signing/verification by `Ed25519Signature`, and arbitrary-byte hashing by `Sha256Hex`. Existing canonical bytes, digest encodings, signature errors, event validation, and public WASM behavior remain unchanged.

## Scope

Delivery was based on fresh main `575b2d4a9e35a36a4944b03ee77ea5d656011aa8` and merged as `9c5be29233baf10b532094b3b405bae77acb60f0`:

- `nook-auth2/src/wire/metadata.rs`
- `nook-event-log/src/canonical.rs`, `event.rs`, `event_bytes.rs`, `lib.rs`, `signing.rs`
- Core event-session exports/callers and direct WASM digest callers.

The migration was one cohesive protocol slice below the 2,000 authored-line limit; final authored additions were 227.

## Acceptance criteria

- [x] Canonical JSON sorting and serialization are owned by `CanonicalEventBodyBytes` without production free helpers.
- [x] Event-id hashing is an owned action on `EventId` and arbitrary-byte hashing on `Sha256Hex`.
- [x] Signature parsing, formatting, signing, and verification are owned by `Ed25519Signature`.
- [x] Core/WASM callers use typed actions; canonical bytes, digest strings, signature errors, event validation, and public behavior remain unchanged.
- [x] The canonical module activates both ownership lints without blanket suppression.
- [x] No cryptographic algorithm, serialization, event schema, or error-ordering behavior changes.
- [x] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve canonical JSON key ordering, parent ordering, SHA-256 encodings, Ed25519 wire signatures, actor validation, and error ordering.

## Progress

Inventory after PR #1520 found the event protocol's canonical and signing free operations and bounded direct callers across event-log, core, and WASM. No overlapping open PR owned these files. The migration landed in PR #1521 with 227 authored additions. Scoped formatting, whitespace, and `task loom:pre-push` checks passed. Exact-head SECURITY review passed with no P1/P2/P3 findings. Hosted validation run `34129244854`, repository policy run `34129210656`, and remote `loom:verify` run `34130415435` passed.

## Completion

PR #1521 was squash-merged at `9c5be29233baf10b532094b3b405bae77acb60f0` on 2026-09-07. `origin/main` was verified at the merge commit.
