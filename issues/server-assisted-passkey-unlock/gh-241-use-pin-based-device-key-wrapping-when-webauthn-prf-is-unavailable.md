---
title: "Use PIN-based device-key wrapping when WebAuthn PRF is unavailable"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T02:43:01Z
updated_at: 2026-07-21T04:18:05Z
source_issues: ["https://github.com/meta-secret/nook/issues/241"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Use PIN-based device-key wrapping when WebAuthn PRF is unavailable

## Imported context

This record was imported from [Nook GitHub issue #241](https://github.com/meta-secret/nook/issues/241)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #197. This is an alternative local fallback to the server-assisted Assisted Mode track in #200.

## Problem

When the platform authenticator does not expose WebAuthn PRF, Nook currently fails closed during device-key protection. That means a browser, OS, authenticator, or mobile passkey provider without PRF cannot protect this browser's device identity and continue into the normal local vault flow.

Instead of requiring server-assisted unlock as the first fallback, offer a local PIN-based wrapping mode for PRF-missing platforms. The PIN should protect the browser-persisted device identity in IndexedDB so Nook never returns to plaintext browser key storage.

## Current Code Anchors

- PRF setup and unlock bridge: `nook-app/nook-web/nook-web-app/src/lib/passkey-device-protection.ts`
- WASM orchestration: `nook-app/nook-wasm/src/manager/device_protection.rs`
- Core wrapping exports: `nook-app/nook-core/src/auth/device_key_protection.rs`
- Current unsupported-PRF e2e: `nook-app/nook-web/nook-web-app/e2e/device-key-protection.spec.ts`
- Stored wrapped identity key: IndexedDB `nook_db.vault.device_identity_wrapped`

## Scope

- Detect missing PRF from WebAuthn extension results, not user-agent guesses.
- When PRF is unavailable, offer a PIN setup/unlock path instead of stopping at the PRF error.
- Add a versioned wrapped-device-identity record variant for PIN-derived wrapping that is distinguishable from passkey-PRF wrapping.
- Keep KDF selection, wrapping, unwrapping, record parsing, validation, and zeroization in Rust/WASM/core; TypeScript should only collect/confirm the PIN and drive UI state.
- Use a slow, salted password/PIN KDF with parameters documented in the record/version and `.cortex` docs.
- Make the security copy honest: PIN fallback protects against plaintext browser storage but a weak PIN has offline guessing risk if an attacker copies IndexedDB.
- Preserve PRF-backed passkey Local Mode for platforms that support it.
- Keep recovery/reset behavior safe when the user forgets the PIN.

## Out Of Scope

- Implementing `nook-server` or server-assisted unlock.
- Removing or weakening passkey-PRF Local Mode.
- Storing the PIN, derived wrapping key, plaintext device identity, or PRF output in IndexedDB, localStorage, logs, or app telemetry.
- Claiming PIN fallback has the same security properties as WebAuthn PRF or hardware-backed platform passkeys.

## Acceptance Criteria

- A PRF-capable platform still uses the existing passkey-PRF wrapping path.
- A PRF-missing platform can create a local vault by setting a PIN and can unlock on return with that PIN.
- Existing unsupported-PRF e2e coverage is changed from fail-closed-only to assert the PIN fallback path.
- Browser storage inspection confirms `device_identity_wrapped` exists and never contains an `AGE-SECRET-KEY-` plaintext identity.
- Wrong PIN, cancellation, reload, lock/re-unlock, forgotten-PIN recovery/reset, and corrupted wrapped-record paths fail safely and leave setup recoverable.
- Rust unit tests cover PIN KDF derivation, wrap/unwrap, wrong PIN, tampering, version parsing, and zeroization-sensitive boundaries where practical.
- `.cortex` documents the PRF mode vs PIN fallback threat model, including offline guessing risk and recovery behavior.

## Notes

- This follows the product direction: if PRF is not available at the platform, use a PIN instead of PRF to protect keys in the browser.
- This may reduce or replace the need for #200 as the default PRF-missing path; keep #200 available only if later product/security review still wants server-assisted unlock.


## Historical comments

No comments.
