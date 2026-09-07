---
title: Own signed event-builder actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-event-builder-actions
created_at: 2026-09-07T12:05:03Z
updated_at: 2026-09-07T12:24:32Z
source_issues: []
related_prs: [1518]
dependencies:
  - issues/rust-action-ownership/vault-epoch-crypto-ownership.md
---

# Own signed event-builder actions

## Context

The event-log builder exposed homeless free operations for signed event construction, encrypted-secret payload construction, and causal parent normalization. These operations carried signer identity, actor authorization, storage bytes, and encrypted secret material without an owned action state.

## Outcome

The event builder now exposes consuming methods on `AppendEventInput`, `EncryptedSecretPayload`, and `ObservedHeads`. Existing canonical event bytes, actor/signing-key checks, parent ordering, encrypted payload fields, and public WASM behavior remain unchanged.

## Scope

Final delivery was based on main `cf86b07f9e857c23f6d8bf64b8a77085fe453611` and merged as PR #1518 (`c4960a16bbee248d67d4024958db0d73e678ff5b`):

- `nook-app/nook-platform/nook-event-log/src/builder.rs`
- `nook-app/nook-platform/nook-event-log/src/event.rs`
- `nook-app/nook-platform/nook-event-log/src/lib.rs`
- Direct core/WASM callers and event-log tests that imported the three builder operations.

Removed `build_signed_event`, `encrypted_secret_from_armored`, and `parents_from_heads` as free operations. Final authored additions: 117.

## Acceptance criteria

- [x] Signed event construction is an owned consuming action with the existing actor/signing-key validation and serialization order.
- [x] Encrypted secret payload creation is owned by its payload type with identical wire fields and ciphertext handling.
- [x] Causal parent normalization is owned by the observed-head state; duplicate removal and ordering remain deterministic.
- [x] Direct core/WASM callers and tests use owned methods; no public WASM signature changes.
- [x] The builder module activates both ownership lints without blanket suppression or authored free helpers.
- [x] No event schema, signature, authorization, storage, or recovery behavior changes.
- [x] Scoped checks, hosted validation, exact-head SECURITY, readiness, remote Loom, squash merge, and Workbench closeout pass.

## Constraints

No local Rust/WASM/product builds or tests. Preserve canonical event IDs, actor validation, signing bytes, parent ordering, secret fingerprints, encrypted payload schemas, and error ordering.

## Progress

Inventory after PR #1517 found the event builder's three production free operations and bounded direct callers across core, WASM, and event-log tests. No overlapping open PR owned these files. Hosted Dylint passed with the builder ownership lints active.

## Completion

PR #1518 merged successfully as `c4960a16bbee248d67d4024958db0d73e678ff5b`.

- Final head: `45d13c3110693c8d4e24baa9f0bfbb82c8a35ff3`
- Final base: `cf86b07f9e857c23f6d8bf64b8a77085fe453611`
- Hosted PR run: `34120383464`
- Repository policy: `34120363840`
- Remote Loom: `34121513191`
- Preview: `https://pr-1518.nokey-sh.pages.dev`
- Security exact-head review passed with no P1/P2/P3 findings.
- `task pr:ready PR=1518` returned `ready: true` immediately before merge.
- No local product builds or tests were run.
