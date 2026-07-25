---
title: "Encrypt browser-stored device private keys behind passkey authorization"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-03T06:25:03Z
updated_at: 2026-07-03T21:41:19Z
source_issues: ["https://github.com/meta-secret/nook/issues/167"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Encrypt browser-stored device private keys behind passkey authorization

## Imported context

This record was imported from [Nook GitHub issue #167](https://github.com/meta-secret/nook/issues/167)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Problem

Nook currently persists the X25519 device identity secret as plaintext in IndexedDB (`nook_db.device_identity_secret`). The vault records are encrypted, but anyone who obtains both the browser database and the encrypted vault can use this private key to unwrap the device's vault keys. Locking the vault clears the in-memory session but leaves this private key immediately usable.

We need encryption at rest for browser-persisted device private keys, gated by local passkey authorization.

## Important WebAuthn constraint

Do **not** store an encryption password/key in `PublicKeyCredentialUserEntity.id` (`user.id`). It is an opaque user-account identifier supplied by the relying party during registration, with a maximum length of 64 **bytes** (not 64 bits). It is not secret: it can be returned to the relying party as `response.userHandle`, and the WebAuthn specification notes that authenticators may reveal user handles without user verification.

A normal WebAuthn assertion proves possession/user verification by signing a challenge; it does not expose the passkey private key or automatically yield general-purpose encryption key material.

The WebAuthn **PRF extension** is designed for this use case: after an assertion with user verification, it can return a stable 32-byte credential-bound PRF output suitable for deriving a symmetric key.

References:

- [WebAuthn Level 3: `user.id` / user handle](https://www.w3.org/TR/webauthn-3/#dom-publickeycredentialuserentity-id)
- [WebAuthn Level 3: user-handle privacy](https://www.w3.org/TR/webauthn-3/#sctn-user-handle-privacy)
- [WebAuthn Level 3: PRF extension](https://www.w3.org/TR/webauthn-3/#prf-extension)

## Proposed flow

### Protect a device key

1. Show an auth form: **Protect this device with a passkey**.
2. Generate a random, non-secret user handle and register a WebAuthn credential with user verification required.
3. Request the `prf` extension and verify that the selected credential supports it.
4. Generate and persist a random PRF input/salt. Evaluate the credential PRF, then derive a domain-separated key-encryption key (for example, PRF output -> HKDF with a Nook/version context).
5. Encrypt `device_identity_secret` with an authenticated cipher such as AES-256-GCM.
6. Persist only the credential ID, non-secret user handle, PRF input/salt, KDF/cipher version, nonce, and ciphertext. Never persist or log the PRF output or derived key.

### Unlock

1. Load the wrapped device-key record.
2. Call `navigator.credentials.get()` with a fresh random challenge, the registered credential ID, `userVerification: "required"`, and the stored PRF input.
3. Derive the same key-encryption key from the PRF result and decrypt the device private key.
4. Keep the plaintext private key only in the unlocked in-memory session.
5. On Lock, session expiry, vault switch, or teardown, clear the plaintext key along with the rest of the unlocked session.

## Compatibility and recovery

- Research and document actual PRF support across Nook's supported browsers/authenticators before implementation.
- If PRF is unavailable, do not silently fall back to plaintext storage. Provide an explicit secure fallback (for example, password-derived wrapping) or explain that passkey protection is unavailable.
- Do not assume a passkey is device-bound or always stored in a secure enclave; platform passkeys may sync. This feature gates access through the authenticator but must not claim stronger hardware properties than WebAuthn guarantees.
- Preserve existing multi-device enrollment and backup-password recovery semantics. Losing the passkey must have a clear recovery/re-enrollment path.

## Migration

Existing plaintext `device_identity_secret` records need a safe, resumable migration:

1. Ask the user to create/authorize a passkey.
2. Write and verify the encrypted replacement.
3. Delete the plaintext record only after the encrypted write succeeds.
4. Handle interruption without losing the device identity or leaving an ambiguous half-migrated state.

## Threat model

This should protect against offline theft/copying of IndexedDB or the browser profile and require user verification before a persisted device key becomes usable. It does not protect against malicious same-origin code/XSS while the vault is unlocked, a compromised browser/OS, or plaintext already resident in process memory.

Also audit nearby browser-persisted sensitive values instead of assuming everything else is encrypted; provider tokens are a separate concern and may require their own issue/design.

## Acceptance criteria

- [ ] Architecture/threat-model note documents the passkey, PRF, wrapping, recovery, and browser-support decisions.
- [ ] `user.id` is used only as a random identifier and never as secret key material.
- [ ] Passkey registration and unlock require user verification.
- [ ] `device_identity_secret` is stored only as versioned authenticated ciphertext after enrollment/migration.
- [ ] PRF output, derived wrapping keys, and plaintext device keys are never persisted or logged.
- [ ] Lock/session teardown removes the plaintext device key from application state.
- [ ] Unsupported authenticators/browsers and passkey cancellation have explicit, recoverable UI states with no plaintext fallback.
- [ ] Existing plaintext identities migrate without key loss and without being deleted before the encrypted record is verified.
- [ ] Unit tests cover key derivation, encrypt/decrypt, wrong credential/key, tampering, migration, and version handling.
- [ ] Browser-level tests cover registration, unlock, lock/re-unlock, cancellation, unsupported PRF, and recovery/fallback behavior where the test authenticator permits it.
- [ ] Browser storage inspection confirms no plaintext private key remains after successful migration.


## Recommended Rust/WASM boundary

Keep the browser-specific WebAuthn ceremony in a thin TypeScript adapter, and perform the cryptographic and key-lifecycle work in Rust/WASM:

```text
TypeScript                         Rust/WASM
----------                         ---------
navigator.credentials.create() ->  derive key, encrypt device identity, persist
navigator.credentials.get()    ->  derive key, decrypt, retain in WASM session
```

Suggested WASM-facing operations:

```rust
#[wasm_bindgen]
pub async fn finish_passkey_setup(
    credential_id: Vec<u8>,
    prf_input: Vec<u8>,
    prf_output: Vec<u8>,
) -> Result<(), JsValue>;

#[wasm_bindgen]
pub async fn finish_passkey_unlock(
    prf_output: Vec<u8>,
) -> Result<(), JsValue>;
```

Responsibilities by package:

- **`nook-web`:** Build `navigator.credentials.create()` / `get()` options, handle cancellation and browser compatibility, extract the PRF result, call WASM, and wipe the JavaScript `Uint8Array` immediately afterward.
- **`nook-core`:** Versioned wrapping format, HKDF-SHA256 derivation, AES-256-GCM encrypt/decrypt, validation, and comprehensive unit tests.
- **`nook-wasm`:** IndexedDB persistence and migration, retain the decrypted device identity only in the unlocked WASM session, and clear it during lock/session teardown.

Example JavaScript-side lifetime control:

```ts
const bytes = new Uint8Array(prfOutput);
try {
  await vault.finishPasskeyUnlock(bytes);
} finally {
  bytes.fill(0);
}
```

Passing a typed array into WASM normally copies the PRF output into WASM linear memory. Use `zeroize` / `Zeroizing` for Rust-side PRF material, derived keys, and temporary plaintext. The existing `device_identity_secret: String` should be replaced or wrapped with a zeroizing secret type so Lock can clear the backing bytes, not merely drop a normal string.

Rust/WASM could invoke WebAuthn through `web-sys`, but that does not create a stronger security boundary: JavaScript and WASM share the same origin and browser process. Keeping WebAuthn in TypeScript makes browser dictionaries, extension support, cancellation, and error handling simpler, while keeping all testable cryptographic behavior in Rust.

## Data-flow clarification

TypeScript should **not** derive or pass an AES key to WASM. The preferred boundary is:

```text
WebAuthn/passkey authorization
  -> TypeScript receives the 32-byte PRF output
  -> TypeScript passes the PRF output to WASM
  -> Rust derives the AES-256-GCM wrapping key with HKDF-SHA256
  -> Rust decrypts the persisted X25519/age device identity secret
  -> Rust uses that device identity to unwrap the vault secrets_key and members_key envelopes
  -> plaintext device identity and vault keys remain only in the unlocked WASM session
```

This keeps key derivation and cryptographic policy in `nook-core`, avoids exporting an extractable WebCrypto `CryptoKey` from JavaScript, and gives Rust unit tests ownership of the complete wrapping format. TypeScript must wipe its PRF `Uint8Array` immediately after the WASM call; Rust must zeroize the copied PRF output, derived AES key, decrypted device identity, and unwrapped vault keys when they are no longer needed or when the vault locks.

In shorthand: **TS supplies PRF bytes; WASM derives the AES key and decrypts the age/X25519 device key.**

## Historical comments

No comments.
