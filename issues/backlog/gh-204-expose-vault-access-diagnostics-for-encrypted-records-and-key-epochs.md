---
title: "Expose vault access diagnostics for encrypted records and key epochs"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T23:30:10Z
updated_at: 2026-07-07T06:52:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/204"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Expose vault access diagnostics for encrypted records and key epochs

## Imported context

This record was imported from [Nook GitHub issue #204](https://github.com/meta-secret/nook/issues/204)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #203.

## Problem

Nook stores an encrypted vault projection and an append-only event log, but the app does not expose enough metadata to explain which encrypted records are decryptable by which vault key material, device identities, or key epochs. From the user's point of view the vault can feel blind: a device may have a local `device_identity_wrapped`, the vault may contain `auth:` envelopes, and records may contain age ciphertext, but the UI cannot clearly answer whether this device can unlock the relevant `secrets_key`, whether a record belongs to the current key epoch, or why a particular encrypted record is inaccessible.

This shows up first for secrets because each secret value is independently encrypted with `secrets_key`, but the same diagnostic model should work for private event payloads and security-sensitive epoch changes such as password rotation, password removal, and device revocation.

## Current Behavior

- The local projection has `secrets:` records where each `data` value is age ciphertext.
- `auth:` rows wrap `secrets_key` and `members_key` per enrolled device.
- `resolve_secrets_key` / `resolve_dek` can resolve the current device's key material when the matching auth envelope is present and decryptable.
- Event bodies carry `key_epoch`, and epoch rotation code can re-encrypt user secrets under fresh `secrets_key` / `members_key` material.
- The app has access checks such as `assess_connect_access`, but those checks are coarse: ready, needs enrollment, or join pending. They do not produce a record/epoch-level access map that the UI can present or that sync/import/debug flows can rely on.

## Scope

Build a Rust-owned vault access diagnostics layer that can analyze stored projection records and/or event-log projection state and return UI-safe metadata such as:

- current device access status for vault key material: ready, missing auth row, join pending, envelope decrypt failed, stale/unknown device identity, or unsupported epoch
- the auth key ids/device ids that have key envelopes for a given vault key epoch, without exposing plaintext keys or private device material
- per-secret or per-event-payload decryptability status for the current session/key epoch
- whether encrypted records appear to be protected by the current epoch, an older epoch, or an unknown/missing epoch
- actionable user-facing explanations for common states: device needs enrollment, local passkey/device identity was regenerated, record belongs to an old key epoch, key rotation/rewrap is needed, or encrypted data is corrupt

The implementation should live in Rust (`nook-core` now, or the future `nook-auth` boundary from #203 if that extraction lands first). TypeScript/Svelte should consume a typed diagnostic result and stay thin.

## Non-Goals

- Do not decrypt or expose secret plaintext as part of diagnostics.
- Do not expose raw `secrets_key`, `members_key`, private device identity, passkey PRF output, or password material.
- Do not make sync-provider credentials part of vault access. Providers only replicate encrypted data.
- Do not require the first implementation to solve every historical epoch migration case; it should make unsupported/unknown states explicit instead of silent.

## Acceptance Criteria

- Rust exposes a typed access/decryptability report for a vault projection and the current device/session identity.
- The report distinguishes at least: enrolled and decryptable, auth row missing, join pending, local device identity mismatch/regenerated, envelope decrypt failure, unsupported/unknown key epoch, and corrupt ciphertext.
- Secret records can be annotated with a status explaining whether the current session should be able to decrypt them and why not when it cannot.
- Event-log/private-payload diagnostics account for `VaultEventBody.key_epoch` and projected epoch history where available.
- Diagnostics include only safe metadata: ids, statuses, epoch ids, and explanations, never plaintext secrets or key material.
- The UI can surface these diagnostics in vault/settings/debug flows so users are not left guessing why a device or record cannot decrypt.
- Rust tests cover device enrollment/auth-row matching, wrong-device identity, missing auth envelope, successful secret decryptability, corrupt ciphertext, and at least one epoch-related status.
- `.cortex` docs are updated to describe the access diagnostics model and its relationship to `auth:`, `secrets_key`, `members_key`, device identities, and key epochs.

## References

- Aggregate: #203
- `.cortex/product-specs/password-manager.md`
- `.cortex/product-specs/password-envelope.md`
- `nook-app/nook-core/src/auth/multi_device.rs`
- `nook-app/nook-core/src/vault/vault_event.rs`
- `nook-app/nook-core/src/vault/vault_epoch.rs`
- `nook-app/nook-core/src/crypto/vault_epoch_crypto.rs`
- `nook-app/nook-wasm/src/manager/device_protection.rs`


## Historical comments

No comments.
