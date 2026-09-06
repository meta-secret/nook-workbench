---
title: Type website passkey authenticator ceremonies
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-passkey-authenticator
created_at: 2026-09-06T05:02:27Z
updated_at: 2026-09-06T05:02:27Z
source_issues: []
related_prs: []
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

- [ ] Origin, public-suffix, localhost, canonical base64, and length validation preserve exact ordering and errors.
- [ ] Registration exclusion and assertion allow-list, ambiguity, highest-counter selection, exhaustion, and key-validation behavior remain unchanged.
- [ ] Checked states retain the admitted request and selected credential borrows and consume themselves during generation or signing.
- [ ] ES256, COSE, client-data, authenticator-data, flags, attestation, signature, and stored credential formats remain unchanged.
- [ ] Key material comparison, zeroization, and existing credential cloning remain unchanged.
- [ ] WASM ceremony-active checks, encrypted persistence, duplicate cleanup, and response-after-append order remain unchanged.
- [ ] Complete authenticator modules deny homeless functions and reject invalid suppression.
- [ ] Colocated tests cover admission order, malformed fields and keys, preparation/drop immutability, selection binding, signatures, counters, and private/consuming states.
- [ ] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

The nine-file boundary is inventoried from Nook main at `97d0156faad403d19c1cb6a21417df14b4c910f2` with zero file overlap against live PRs #1427, #1425, and #1210.

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
