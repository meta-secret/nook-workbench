---
title: Type protected device-identity wrapping and decryption
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-protected-identity-wrapping
created_at: 2026-09-06T07:37:58Z
updated_at: 2026-09-06T07:37:58Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/device-protection-registration.md
---

# Type protected device-identity wrapping and decryption

## Context

PR #1432 moved device-protection registration, completion, unlock, recovery, and record actions onto owners while leaving `protected_identity.rs` outside ownership enforcement. That module still owns PIN and passkey wrapping, parsing, serialization, key derivation, AAD construction, field decoding, and age-secret encoding as homeless operations.

## Outcome

Protected device-identity records use focused owners and one private consuming decryption state. The complete device-protection subtree can then enforce the no-homeless-function policy without suppressions while preserving existing storage and browser behavior.

## Scope

- One cohesive twenty-seven-file auth/core/WASM boundary, with approximately 1,250–1,600 authored additions and a 1,700-addition hard ceiling.
- Move the 18 production free operations and two test helpers from `protected_identity.rs` onto `WrappedDeviceIdentity`, `PinWrappedDeviceIdentity`, `PasskeyWrappedLocalDeviceIdentity`, encoded-field/AAD owners, and a private `PreparedIdentityDecryption` state.
- Adapt direct auth/core/WASM storage consumers and fixtures only; preserve the exact existing public DTOs, exported signatures, schemas, and persistence order.
- Enable ownership denial and invalid-suppression prohibition across the now-complete device-protection subtree after the excluded helper boundary is removed.
- Exclude cryptographic redesign, new KDF limits, browser-authentication claims, replay guarantees, schema/storage migrations, fallback, recovery changes, TypeScript, and unrelated helpers.

## Acceptance criteria

- [ ] PIN trimming and minimum byte length, variant/PIN/version/parameter/field/KDF/decrypt error ordering remain unchanged.
- [ ] AES-GCM, PBKDF2/HKDF constants, random-byte order, AAD field order and length encoding, error distinctions, and zeroization remain unchanged.
- [ ] Versioned untagged serialization remains unchanged and parsing does not gain implicit validation.
- [ ] Existing passkey metadata binding and age-secret known-answer bytes remain unchanged.
- [ ] `PreparedIdentityDecryption` privately retains the exact derived zeroizing key, nonce, ciphertext, and AAD and consumes itself through decrypt; it makes no authenticated-plaintext, browser-authorization, replay, or persistence claim.
- [ ] All storage transactions, cleanup, browser ABI, and existing parse-error handling remain unchanged.
- [ ] Existing nine protected-record tests and PR #1432 tests remain; focused parameter/error-precedence, PIN whitespace, passkey AAD tampering, and private/consuming-state controls are added.
- [ ] Complete device-protection modules deny homeless functions and reject invalid suppression with no blanket exemption.
- [ ] Remote Loom, hosted PR checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

DEV-CORE inventory at Nook main `8980f2fa6ec04ca943453c3d61782672c2be9fdd` found 18 production free operations, two test helpers, and nine protected-record tests in the deferred module. Live PRs #1433, #1431, #1430, and #1210 have no changed-file overlap.

## Findings and decisions

The prepared state binds local decryption inputs only. It must not imply that Rust verified a browser passkey ceremony, authenticated PRF output, replay resistance, or durable persistence.

## References

- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection/protected_identity.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection/registration.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection/unlock.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection/protected_identity/pin.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/device_key_protection/protected_identity/cipher.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/local_identity_keyring.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/mod.rs`
- `nook-app/nook-platform/nook-auth2/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/auth/device_key_protection.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/device_access.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_format/vault_yaml.rs`
- `nook-app/nook-platform/nook-wasm/src/device_access.rs`
- `nook-app/nook-platform/nook-wasm/src/identity_record.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/device_protection.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log_browser_tests.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/device_access.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/device_access/migration.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/device_access/profile_store.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/keyring.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/keyring/legacy.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/keyring/signing.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/indexed_db.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/indexed_db/device_identity.rs`
