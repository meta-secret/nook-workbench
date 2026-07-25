---
title: "Expose passkey create and assertion APIs through nook-wasm"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-16T20:30:45Z
updated_at: 2026-07-16T23:50:08Z
source_issues: ["https://github.com/meta-secret/nook/issues/444"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:passkey-manager"]
legacy_state_reason: "COMPLETED"
---

# Expose passkey create and assertion APIs through nook-wasm

## Imported context

This record was imported from [Nook GitHub issue #444](https://github.com/meta-secret/nook/issues/444)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #441 in milestone **Feature: Passkey manager**. Depends on #442 and #446.

## Goal

Expose typed passkey registration and assertion operations through `nook-wasm` while preserving the unlocked-vault and application-capability boundaries.

## Requirements

- Accept typed ceremony fields rather than arbitrary `JsValue` reflection.
- Registration atomically creates and encrypts the Rust credential source before returning the public response.
- Assertion decrypts only matching candidates, signs in Rust, atomically persists the incremented counter, and zeroizes candidate records.
- Require Simple Vault, an unlocked approved extension session, and an active extension grant.
- Return browser-safe base64url response fields only; never expose private keys, decrypted credential sources, or vault-wide search.
- Errors use stable, non-sensitive codes suitable for DOMException mapping.

## Acceptance criteria

- wasm-bindgen tests cover typed registration/assertion round-trips, locked/wrong-app denial, RP filtering, persistence, and counter updates.
- Generated TypeScript declarations contain no secret-bearing getters.
- Interrupted or failed ceremonies do not create a record or advance a counter.



## Historical comments

No comments.
