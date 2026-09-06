---
title: Type website passkey authenticator ceremonies
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-passkey-authenticator
created_at: 2026-09-06T05:02:27Z
updated_at: 2026-09-06T05:48:10Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1428
depends_on:
  - issues/rust-action-ownership/event-db-transaction.md
---

# Type website passkey authenticator ceremonies

## Context

The Rust action-ownership migration continues through the core software authenticator, where free functions separate ceremony admission, credential selection, key validation, encoding, generation, and signing from the data and phases they govern.

## Outcome

Registration and assertion use private checked states that carry the exact admitted request and selected credential evidence into consuming cryptographic actions, with encoding and key behavior owned by focused domain types.

## Scope

- One cohesive nine-file core/adapter boundary with a 1,700 authored-addition ceiling.
- Split registration, assertion, and encoding responsibilities into focused production children with colocated tests.
- Move the 14 production free helpers and two fixture helpers onto meaningful request, credential, key, encoding, and ceremony-state owners.
- Add the simplest private checked registration and assertion states needed to bind validation and selection to consuming generation/signing.
- Adapt direct Rust and WASM consumers while preserving exported WASM signatures and stored credential schemas.
- Exclude global counter uniqueness, user-presence or user-verification claims, durable persistence changes, fallback, and recovery.

## Acceptance criteria

- [x] Origin, public-suffix, localhost, canonical base64, and length validation preserve exact ordering and errors.
- [x] Registration exclusion and assertion allow-list, ambiguity, highest-counter selection, exhaustion, and key-validation behavior remain unchanged.
- [x] Checked states retain the admitted request and selected credential borrows and consume themselves during generation or signing.
- [x] ES256, COSE, client-data, authenticator-data, flags, attestation, signature, and stored credential formats remain unchanged.
- [x] Key material comparison, zeroization, and existing credential cloning remain unchanged.
- [x] WASM ceremony-active checks, encrypted persistence, duplicate cleanup, and response-after-append order remain unchanged.
- [x] Complete authenticator modules deny homeless functions and reject invalid suppression.
- [x] Colocated tests cover admission order, malformed fields and keys, preparation/drop immutability, selection binding, signatures, counters, and private/consuming states.
- [x] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

PR #1428 merged the complete nine-file passkey authenticator boundary as `85a21b0c4eea13e1ec0a9450a6fe31e92e8cbb77` after Remote Loom, hosted validation, exact-head SECURITY, and readiness passed.

## Findings and decisions

Checked registration and assertion encode admission before cryptographic action without claiming global counter uniqueness, real user presence, user verification, or new persistence guarantees.

## References

- `nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator.rs`
- `nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator/registration.rs`
- `nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator/assertion.rs`
- `nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator/encoding.rs`
- `nook-app/nook-platform/nook-core/src/secrets/secret_types.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/secrets/secret_fingerprint.rs`
- `nook-app/nook-platform/nook-core/tests/vault_workflow.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/passkeys.rs`
