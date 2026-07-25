---
title: "Extract vault key-access security into a reusable nook-auth crate"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T23:28:04Z
updated_at: 2026-07-07T04:24:31Z
source_issues: ["https://github.com/meta-secret/nook/issues/203"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Extract vault key-access security into a reusable nook-auth crate

## Imported context

This record was imported from [Nook GitHub issue #203](https://github.com/meta-secret/nook/issues/203)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Nook's vault access/security model should be isolated from replication and sync-provider plumbing. Today the primitives for device identity, passkey PRF wrapping, password envelopes, member authorization, vault key envelopes, and key-epoch rotation live inside `nook-core` next to vault formats, event projection, and sync provider configuration. That makes browser passkey unlock, provider credentials, and vault replication feel more coupled than they are.

Extract a reusable Rust security/key-access layer, working name `nook-auth`, that owns every supported way to unlock or authorize access to vault keys (`secrets_key` and `members_key`). `nook-core` should consume that crate for vault/session/event behavior, while browser, extension, CLI, server, mobile, HSM, YubiKey, ESP32, and future recovery flows provide platform-specific adapters around it.

## Why

- Authentication and vault authorization are separate from synchronization providers. GitHub, Google Drive, iCloud, local folder, and future providers are encrypted replication targets; they should not define how the vault keys are unlocked.
- Browser WebAuthn PRF is only one unlock mechanism. It works well where the PRF extension is available, but mobile browsers and WebViews may need password-backed, server-assisted, or two-sided authentication paths because PRF is not universally available.
- The vault should have a single abstraction for key access: decrypt/unwrap the data encryption material, then let the rest of the app operate on the vault. Today that material is represented as `secrets_key` for user secret values and `members_key` for member roster metadata.
- Future mechanisms such as Shamir secret sharing, multiple private-key quorum recovery, hardware security modules, YubiKey, secure elements, or ESP32-backed devices all belong in the same security/key-access layer. None of those mechanisms should depend on or know about provider replication.
- A reusable crate lets the same model work in the browser, web extension, CLI, and server-side contexts without reimplementing crypto or policy per surface.

## Current Code And Concepts

- `nook-app/nook-core/src/auth/` currently owns device-key protection, enrollment, multi-device auth records, and password envelopes.
- `nook-app/nook-core/src/crypto/` owns vault encryption, event signing/canonicalization, and key-epoch re-encryption.
- `nook-app/nook-core/src/sync/` owns sync-provider validation/configuration, provider credential sealing, and vault reconciliation.
- `nook-app/nook-core/src/vault/` owns vault formats, event log/projection/session state, ids, imports, and wire types.
- `nook-app/nook-wasm/src/manager/device_protection.rs` orchestrates browser passkey PRF setup/unlock, while `nook-app/nook-web/src/lib/passkey-device-protection.ts` stays a thin WebAuthn ceremony adapter.
- `.cortex/design-docs/vault-session-and-lock.md` already distinguishes vaults, sync providers, wrapped device identity, and unlocked sessions.
- `.cortex/product-specs/decentralized-auth.md` and `.cortex/product-specs/password-envelope.md` define the current key hierarchy: `auth:` rows, `password_entries`, `secrets_key`, `members_key`, device identities, and backup-password unlock.

## Proposed Direction

Create a workspace crate such as `nook-app/nook-auth` that becomes the home for vault security/key-access primitives. The name is open, but the boundary should be explicit: this crate is about authentication, authorization to vault keys, credential envelopes, key recovery, and key rotation; it is not about sync providers.

The extracted layer should own or expose:

- device identity types and wrapping/unwrapping primitives
- passkey PRF input/result handling after the platform ceremony completes
- password envelope creation, verification, and key resolution
- vault key material types (`secrets_key`, `members_key`, and future key families)
- per-device auth envelopes and member authorization helpers
- key-epoch rotation/rewrap primitives that remove or rotate credentials
- extension points for server-assisted auth, hardware-backed auth, and Shamir/quorum recovery
- threat-model documentation for which unlock paths are local-only, server-assisted, hardware-backed, or distributed

`nook-core` should continue to own vault data semantics: event graph, projection, stored YAML/import formats, secret records, sync reconciliation, and provider-agnostic vault workflows. It should call into `nook-auth` whenever it needs key material, auth records, member authorization, or credential rewrap behavior.

`nook-wasm`, `nook-web`, and `nook-web-extension` should remain adapters:

- TypeScript performs browser/WebAuthn ceremonies and passes raw results into Rust.
- WASM handles browser storage and session orchestration.
- Server/mobile/CLI adapters can call the same Rust security APIs without depending on WebAuthn PRF.
- Sync provider credentials remain in `nook_auth` / provider config code and stay separate from vault unlock credentials.

## Non-Goals

- Do not move sync providers, provider OAuth/PAT storage, provider reconciliation, or event replication into `nook-auth`.
- Do not make GitHub/Drive/iCloud credentials part of vault authentication. They authorize access to encrypted replicas only.
- Do not reimplement crypto in TypeScript for web or extension surfaces.
- Do not require WebAuthn PRF for all platforms. PRF is one adapter path, not the architecture.
- Do not introduce Shamir/HSM/server auth as a large bundled feature during the first extraction unless it is needed to prove the abstraction.

## Acceptance Criteria

- A new `nook-auth`-style Rust crate exists in the workspace and is documented as the vault security/key-access boundary.
- The crate compiles on native and `wasm32-unknown-unknown` and does not depend on browser APIs, sync provider APIs, or `nook-wasm`.
- `nook-core` depends on the extracted crate for auth/key-access primitives instead of owning those primitives directly.
- Sync-provider concepts remain outside the extracted crate: `StorageProviderData`, `AuthProvidersSnapshotData`, provider validation, provider credential persistence, provider reconciliation, and `nook_auth` storage do not move into the security crate.
- Existing browser passkey PRF behavior is preserved: TypeScript remains ceremony-only, Rust owns HKDF/AES wrapping, IndexedDB stores only the wrapped identity, and unsupported PRF paths fail closed unless an explicit alternate unlock mechanism is configured.
- Password entries continue to wrap the same vault keys as device auth rows; unlock via password, device key, or future auth mechanisms resolves to the same typed vault key material.
- The API shape leaves room for server-assisted mobile auth, hardware-backed auth, and Shamir/quorum recovery without coupling those mechanisms to provider replication.
- Rust tests cover the extracted key-access behavior at the new crate boundary; existing `nook-core` and WASM-facing tests keep passing.
- `.cortex/ARCHITECTURE.md` and the relevant product/design specs are updated to describe the new crate and the separation between vault authentication/authorization and sync providers.

## References

- `.cortex/ARCHITECTURE.md`
- `.cortex/design-docs/vault-session-and-lock.md`
- `.cortex/product-specs/decentralized-auth.md`
- `.cortex/product-specs/password-envelope.md`
- `nook-app/nook-core/src/auth/`
- `nook-app/nook-core/src/crypto/`
- `nook-app/nook-core/src/sync/`
- `nook-app/nook-wasm/src/manager/device_protection.rs`
- `nook-app/nook-web/src/lib/passkey-device-protection.ts`


## Historical comments

No comments.
