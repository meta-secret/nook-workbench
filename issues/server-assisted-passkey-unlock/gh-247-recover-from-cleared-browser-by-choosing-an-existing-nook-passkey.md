---
title: "Recover from cleared browser by choosing an existing Nook passkey"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T06:00:30Z
updated_at: 2026-07-21T04:18:07Z
source_issues: ["https://github.com/meta-secret/nook/issues/247"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Recover from cleared browser by choosing an existing Nook passkey

## Imported context

This record was imported from [Nook GitHub issue #247](https://github.com/meta-secret/nook/issues/247)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #197.

## Problem

If a user clears browser data for `nokey.sh`, the OS/passkey provider can still contain one or more discoverable Nook passkeys, but Nook loses the local IndexedDB record that contains the saved credential id, PRF input, and wrapped device identity. The next setup path therefore creates another passkey, which can leave the passkey chooser full of indistinguishable `nokey.sh / Nook device` entries.

The desired behavior is: when an existing Nook passkey is available, let the user choose it and recover safely instead of creating another passkey; when Nook truly cannot recover from that passkey alone, explain why and route to vault password/onboarding/re-enrollment rather than silently piling up duplicate passkeys.

## Scope

- Add a recovery/setup branch before passkey creation that can call WebAuthn in discoverable-credential mode so the browser/passkey provider lets the user choose an existing `nokey.sh` passkey.
- Define where Nook stores the recoverable metadata needed to make that useful after local browser data is wiped. At minimum, the design must account for credential id, PRF input, user handle/account binding, and an encrypted device-identity or re-enrollment envelope.
- Use `excludeCredentials` during passkey creation whenever Nook has known credential ids for this account/device, so passkey providers can reject duplicate registration on the same authenticator.
- Keep the crypto boundary intact: TypeScript performs only the required `navigator.credentials.create/get` ceremony; Rust/WASM owns option construction, metadata validation, wrapping/unwrapping, zeroization, and durable record parsing.
- Make UI copy distinguish site scoping from uniqueness: passkeys are already scoped to `nokey.sh`, but Nook cannot promise a global one-passkey-per-site invariant across all passkey providers without knowing previous credential ids.
- If this depends on Assisted Mode/server metadata, link the dependency explicitly to #197/#200 instead of smuggling server trust into Local Mode.

## Acceptance Criteria

- After browser storage is cleared, Nook offers an "use existing passkey" path when a recoverable account/device record exists.
- Selecting an existing passkey either restores the same protected device identity or produces a clear, safe recovery message explaining which alternate path is required.
- Creating a new passkey includes `excludeCredentials` for known existing credentials and has tests that assert the option shape.
- Tests cover discoverable-passkey selection, duplicate-prevention options, cancellation, unsupported PRF, and the no-recoverable-metadata path.
- `.cortex/product-specs/decentralized-auth.md` documents the local-only limitation and the chosen recovery model.

## Notes

- Current code creates discoverable passkeys with `residentKey: "required"` and required user verification in `nook-app/nook-wasm/src/passkey_browser.rs`.
- Current unlock requires the credential id stored in local IndexedDB: `NookPasskeyUnlockOptions` builds request options with `allowCredentials` for that one credential.
- WebAuthn site scoping already prevents a `nokey.sh` passkey from being used by a different RP id; this issue is about duplicate `nokey.sh` credentials and recovery after local state loss.
- Relevant code: `nook-app/nook-web/nook-web-app/src/lib/passkey-device-protection.ts`, `nook-app/nook-wasm/src/passkey_browser.rs`, `nook-app/nook-wasm/src/manager/device_protection.rs`, `nook-app/nook-core/src/auth/device_key_protection.rs`.


## Historical comments

### cypherkitty — 2026-07-08T06:07:09Z

Design refinement from follow-up discussion:

Use the passkey's WebAuthn `user.id` / returned assertion `userHandle` as Nook's durable recovery handle. That gives Nook a small RP-controlled value that can survive browser IndexedDB deletion because it is stored with the discoverable credential by the passkey provider. During a discoverable `navigator.credentials.get` recovery flow, Nook can read `credential.rawId` and `response.userHandle` after the user chooses a `nokey.sh` passkey.

Important boundary: this handle can identify/lookup recovery metadata, but it must not be treated as secret storage. WebAuthn does not let Nook store arbitrary encrypted device-key state inside the passkey, and the current wrapped device identity also includes `prfInput`, `hkdfSalt`, `nonce`, and `ciphertext`. So the implementation should either:

- derive/reconstruct non-secret fields such as the PRF input from a versioned domain-separated recovery handle, and
- store the wrapped device-identity recovery envelope somewhere that survives local browser data deletion, such as Assisted Mode/server metadata, sync-provider metadata, or another explicit recovery record.

This means "store the hash/id in passkey info" is a good part of the design, but it is only the lookup/reconstruction key, not the complete recovery payload.


### cypherkitty — 2026-07-08T06:16:34Z

Implementation direction update:

We are going to implement the stronger Local Mode model: deterministic passkey-derived device identity.

The important detail is that a discoverable `navigator.credentials.get` chooser request cannot use a PRF input derived from `userHandle`, because the browser only returns `userHandle` after the user selects a credential. The implementation should therefore use a versioned, domain-separated fixed 32-byte PRF salt for Nook Local Mode, then derive the device identity from:

- the WebAuthn PRF output for that fixed salt, and
- the returned passkey `userHandle` as HKDF salt / account binding.

Expected shape:

```text
prf_input = SHA256("nook/passkey-device-prf-input/v1")
prf_output = WebAuthnPRF(passkey, prf_input)
age_identity_secret = HKDF-SHA256(
  salt = userHandle,
  ikm = prf_output,
  info = "nook/passkey-derived-age-x25519/v1"
)
```

That means the passkey plus its stored `user.id`/`userHandle` becomes the recoverable device root for PRF-capable Local Mode. Nook may still persist a local `device_identity_wrapped` record for lock state, status, and compatibility, but new deterministic identities must be recoverable through the passkey chooser after IndexedDB is cleared.

Existing random wrapped identities should keep unlocking through the legacy stored `device_identity_wrapped` path so current users are not broken.

