---
title: "Add a versioned encrypted passkey vault item type"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-16T20:30:45Z
updated_at: 2026-07-16T23:50:07Z
source_issues: ["https://github.com/meta-secret/nook/issues/442"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:passkey-manager"]
legacy_state_reason: "COMPLETED"
---

# Add a versioned encrypted passkey vault item type

## Imported context

This record was imported from [Nook GitHub issue #442](https://github.com/meta-secret/nook/issues/442)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #441 in milestone **Feature: Passkey manager**.

## Goal

Add a first-class, versioned `passkey` secret payload that is encrypted and synchronized through the existing per-record vault/event-log pipeline.

## Requirements

- Rust owns the credential-source schema and validation.
- Store RP id/name, credential id, user handle/name/display name, algorithm-specific private/public key material, signature counter, discoverability, and backup flags.
- Private key material uses redacted debug output and zeroization.
- List/search DTOs expose only RP/account metadata; private key, credential id, and user handle never cross list APIs.
- Generic item forms cannot fabricate passkeys.
- The change is additive and existing vault files remain readable.
- Validate actual PKCS#8/COSE key encodings and require the public key to match the private key.

## Acceptance criteria

- Valid passkeys round-trip through plaintext payload serialization and encrypted vault/event storage.
- Malformed, oversized, non-canonical, unsupported-version, and mismatched key payloads fail closed.
- Rust tests cover parsing, validation, redaction, zeroization, and encrypted persistence.
- Product/schema documentation lists the new type and migration behavior.



## Historical comments

No comments.
