---
title: Type protected device-identity wrapping and decryption
status: active
feature: rust-action-ownership
issue: issues/rust-action-ownership/protected-identity-wrapping.md
created_at: 2026-09-06T07:37:58Z
base_sha: 8980f2fa6ec04ca943453c3d61782672c2be9fdd
gizmo_id: rust-action-ownership-protected-identity-wrapping
---

# Type protected device-identity wrapping and decryption

## Delivery boundary

Implement the exact twenty-seven-file issue scope as one substantial PR. Keep authored additions at or below 1,700, keep new children below 650 lines, and keep near-limit consumers net-neutral or smaller. No source overlap is permitted with live PRs #1433, #1431, #1430, or #1210.

## Implementation

1. Split PIN and cipher responsibilities into focused children only where needed to keep ownership and files simple.
2. Move record construction, parsing, serialization, PIN/passkey parameter admission, AAD construction, field decoding, KDF preparation, and age-secret encoding onto the data that governs each action.
3. Add a private non-Clone `PreparedIdentityDecryption` state retaining the exact derived zeroizing key, nonce, ciphertext, and AAD; consume it through decryption.
4. Adapt direct auth/core/WASM storage consumers and existing fixtures without changing DTOs, ABI, schemas, transaction order, cleanup, or browser observations.
5. Enable homeless-function and invalid-suppression enforcement across the completed device-protection subtree after `protected_identity.rs` is migrated.

## Security invariants

- Preserve PIN whitespace trimming and minimum byte length, validation and error precedence, versioned untagged parsing/serialization, AES-GCM/PBKDF2/HKDF constants, random-byte order, AAD field order/length encoding, metadata binding, age-secret known-answer bytes, and zeroization.
- Keep local prepared states honest: they bind decryption inputs but do not claim authenticated plaintext, browser authorization, replay resistance, or durable persistence.
- Preserve all storage transactions, cleanup, parse errors, direct browser ABI, and passkey registration/unlock behavior from PR #1432.

## Evidence and limits

- Retain all nine protected-record tests and PR #1432 tests.
- Add parameter/error-precedence, PIN whitespace equivalence, passkey AAD tampering, private-state, construction, drop, and consuming-state controls.
- Run scoped formatting and static ownership checks locally; use Remote Loom and hosted validation for builds/tests.
- Require exact-head SECURITY and readiness before squash merge.

## Exclusions

No cryptographic redesign, KDF cap, new browser-authentication or replay claim, schema/storage migration, fallback/recovery change, TypeScript change, or unrelated ownership migration.
