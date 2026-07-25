---
title: "Implement the Rust software WebAuthn authenticator"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-16T20:30:45Z
updated_at: 2026-07-16T23:50:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/446"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:passkey-manager"]
legacy_state_reason: "COMPLETED"
---

# Implement the Rust software WebAuthn authenticator

## Imported context

This record was imported from [Nook GitHub issue #446](https://github.com/meta-secret/nook/issues/446)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #441 in milestone **Feature: Passkey manager**. Depends on #442.

## Goal

Implement the software WebAuthn authenticator in Rust so Nook can create ES256 discoverable credentials and answer assertions without exposing private key material to TypeScript.

## Requirements

- Typed Rust request/response models for registration and assertion.
- Validate RP id against the effective request origin, challenge sizes, user handles, algorithms, resident-key requirements, allow/exclude credential lists, and user-verification policy.
- Generate credential ids and P-256 keys with a CSPRNG.
- Produce standards-conformant `clientDataJSON`, authenticator data, attestation object, COSE public key, DER ECDSA signature, flags, and counters.
- Enforce RP-scoped discoverable and allowed-credential lookup.
- Reject unknown, excluded, ambiguous, cross-RP, replay-invalid, and malformed requests deterministically.
- Return a replacement credential source with an incremented counter only after successful signing.

## Acceptance criteria

- Registration and assertion responses verify with independent WebAuthn parsing/signature checks.
- No attestation identifying Nook is emitted; use `none` attestation.
- Private keys remain inside Rust-owned values and are zeroized.
- Behavior-focused Rust tests cover success, cancellation-ready validation errors, algorithm negotiation, origin/RP mismatch, exclusions, allowed credentials, discoverable lookup, flags, and counters.



## Historical comments

No comments.
