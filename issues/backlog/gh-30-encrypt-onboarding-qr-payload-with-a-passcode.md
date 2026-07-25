---
title: "Encrypt onboarding QR payload with a passcode"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-24T23:53:22Z
updated_at: 2026-06-25T02:48:51Z
source_issues: ["https://github.com/meta-secret/nook/issues/30"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Encrypt onboarding QR payload with a passcode

## Imported context

This record was imported from [Nook GitHub issue #30](https://github.com/meta-secret/nook/issues/30)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Improve QR-based device onboarding by encrypting the enrollment payload with a short user-provided passcode/PIN. Today the QR/link carries a base64url-encoded JSON payload, which means anyone who captures the QR can decode the embedded vault password and, for GitHub providers, provider credentials such as the PAT and repo.

## Current behavior

The onboarding QR encodes a deep link like:

`<app-url>/#enroll=<base64url-json>`

The decoded payload includes:

- `v`
- `provider`
  - local provider type, or
  - GitHub provider type + PAT + repo
- `password`
- `entry_id`
- `issued_at`

This is encoded, not encrypted.

## Desired behavior

When generating an onboarding QR:

1. The issuing user chooses or is shown a simple passcode/PIN.
2. The sensitive enrollment payload is encrypted before it is placed in the QR/link.
3. The QR/link only contains a versioned encrypted envelope and non-sensitive metadata needed to decrypt it.
4. When a new device scans the QR, the UI prompts for the passcode/PIN.
5. Only after the passcode decrypts the QR payload should the app restore provider credentials and call the enrollment flow.

## Suggested design notes

- Use browser-native Web Crypto where practical.
- Derive an encryption key from the passcode with a KDF suitable for low-entropy PINs, with a random salt and authenticated encryption.
- Store enough metadata in the QR envelope for versioning and future migration, for example algorithm, KDF params, salt, nonce, ciphertext.
- Keep the existing enrollment payload schema inside the encrypted plaintext where possible.
- Do not log or persist the decrypted QR payload beyond what is already required for provider setup.
- Consider whether the passcode should be user-entered on the issuing device, auto-generated and displayed, or both.

## Acceptance criteria

- QR/link no longer exposes the vault password or GitHub PAT when base64url-decoded.
- Scanning an encrypted QR prompts for the passcode before enrollment proceeds.
- Wrong passcodes fail without partially applying provider credentials.
- Existing tests cover payload encryption/decryption, wrong-passcode failure, and the end-to-end scan/paste flow.
- Legacy unencrypted enrollment codes are either migrated with a clear compatibility path or rejected with a clear message.

## Related code

- `nook-web/src/lib/enrollment-code.ts`
- `nook-web/src/lib/vault.svelte.ts`
- `nook-web/src/lib/components/OnboardDevice.svelte`
- `nook-web/src/lib/components/VaultPasswordCard.svelte`

## Historical comments

No comments.
