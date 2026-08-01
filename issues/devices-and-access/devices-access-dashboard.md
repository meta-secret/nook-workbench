---
title: "Build the Devices & access dashboard"
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-08-01T04:18:33Z
updated_at: 2026-08-01T20:18:53Z
source_issues: []
related_prs: [901]
depends_on: []
---

# Build the Devices & access dashboard

## Context

People currently have to infer the relationship among WebAuthn passkeys,
PIN/passphrase fallback, the browser's age device identity, per-vault device
authorization, and backup passwords. Even experienced operators can select a
credential blindly because the app does not show the metadata and provenance it
already knows. This issue belongs to the
[Devices and access clarity](README.md) feature.

## Outcome

Simple and Sentinel each expose a permanent **Devices & access** page before a
vault exists, while vaults are locked, and during an unlocked session. It
answers what protects this browser, which device key is active, and which local
vaults accept that key, while placing enrolled devices and backup passwords
under their owning vault.

## Scope

- Add typed Rust-owned dashboard state and migration-safe browser persistence
  for non-secret passkey/PIN metadata, provenance, and last successful use.
- Capture supported WebAuthn ceremony evidence without inferring a password
  manager or exact failure cause.
- Allow a user-supplied passkey-provider label with an explicit user-supplied
  provenance marker.
- Expose cached per-vault access relationships while locked and refresh them
  from authoritative state when unlocked.
- Add an always-available Svelte Operate surface using the established Nook
  component, token, accessibility, responsive, and translation systems.
- Integrate existing enrolled-device and backup-password data under per-vault
  access details rather than duplicating their domain behavior.
- Add Rust behavior tests, focused web tests, and Playwright demo/e2e evidence
  for empty, locked, passkey, PIN/passphrase, and unlocked states.
- Update architecture/product documentation and concise public README material
  where the primary access flow changes.
- Preserve per-origin Simple/Sentinel isolation and extension boundaries.
- Exclude passkeys stored as third-party website secrets from this dashboard.
- Exclude enumeration of credentials held by external passkey providers because
  WebAuthn does not provide that capability.

## Acceptance criteria

- [x] The dashboard is reachable with no vault, a locked vault, or an unlocked vault.
- [x] Passkey and PIN/passphrase protection are both represented truthfully.
- [x] The page clearly distinguishes protection method, device identity, vault authorization, enrolled devices, and backup passwords.
- [x] Technical IDs and public fingerprints are available through progressive disclosure; private keys and sensitive material never cross into the DOM or logs.
- [x] Passkey metadata includes every supported non-secret browser/Nook fact and labels its provenance; unknown provider data remains unknown.
- [x] Locked relationships are marked last-known or unknown and mutations require the appropriate authorization.
- [x] Existing records migrate without losing unlock capability.
- [x] Rust tests own portable domain and persistence behavior; targeted web tests own presentation state; Playwright covers the complete user journey and UI demo contract.
- [x] English and Russian translations remain in parity.
- [x] Exact-head GitHub Actions validation passes and the implementation PR is squash-merged.

## Progress

- 2026-08-01: Direct implementation started after the access model and page scope were confirmed.
- 2026-08-01: PR #901 passed exact-head validation and was squash-merged as `9fbdae27a5719c85ffcdd245dc431e36307c3757`.

## Findings and decisions

- A browser-reported authenticator attachment, transport, or backup flag is evidence; a passkey-provider name is user-supplied unless independently verifiable.
- The first implementation keeps one current protected device identity per application origin, matching the existing persistence and application-isolation model.
- Backup passwords are vault access methods, not device-key protection methods.

## References

- `nook-app/nook-auth2/src/auth/device_key_protection`
- `nook-app/nook-wasm/src/manager/device_protection.rs`
- `nook-app/nook-wasm/src/storage/indexed_db.rs`
- `nook-app/nook-web/nook-web-shared/src/vault-app`
- `.cortex/product-specs/decentralized-auth.md`
- `.cortex/design-docs/vault-session-and-lock.md`
