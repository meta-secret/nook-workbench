---
title: "Pair browser extension as passkey-protected device with sync providers"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T01:32:34Z
updated_at: 2026-07-21T04:16:24Z
source_issues: ["https://github.com/meta-secret/nook/issues/235"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Pair browser extension as passkey-protected device with sync providers

## Imported context

This record was imported from [Nook GitHub issue #235](https://github.com/meta-secret/nook/issues/235)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #234.

## Problem

The browser extension needs full vault access, not just a short-lived helper session borrowed from `nokey.sh`. The proper model is for `nook-web-extension` to become its own authorized Nook device: it generates its own device identity, protects that identity with passkey/device protection, receives explicit user approval through `https://nokey.sh/extension-connect`, and keeps its own encrypted vault and sync-provider state in extension-owned storage.

The extension must also keep sync provider information. Since provider credentials are sealed before persistence and the extension-owned IndexedDB/device key is protected behind passkey authentication, the extension can safely persist sync provider credentials after they are explicitly granted by `nokey.sh`.

## Scope

- Add a `https://nokey.sh/extension-connect` pairing flow for browser extensions.
- Have `nook-web-extension` generate its own device identity/keypair instead of borrowing the web app session.
- Protect the extension device private key with the same passkey/device-protection model used by Nook web.
- During pairing, have the extension send its public device identity and requested scopes to `nokey.sh`.
- After the user unlocks `nokey.sh`, show explicit consent to add the extension as an authorized device for the selected vault.
- Add an auth envelope for the extension device so it can decrypt the vault after passkey authorization.
- Transfer or initialize the extension's encrypted vault copy in extension-owned storage.
- Transfer sync provider rows/credentials only through explicit consent, re-sealed for the extension device before storing them in extension-owned IndexedDB.
- Keep sync-provider credentials out of content scripts and page DOM state; only the extension background/popup/WASM session should touch decrypted provider credentials.

## Acceptance Criteria

- Closing `nokey.sh` after successful pairing does not revoke the extension's access to its authorized vault; the extension can unlock independently with its own passkey-protected device identity.
- The extension can list paired vaults from extension-owned encrypted storage.
- The extension can decrypt the paired vault only after successful passkey/device authorization.
- The extension can persist granted sync provider information in extension-owned IndexedDB, with secret fields sealed at rest for the extension device.
- The extension can sync the paired vault using the granted sync providers without requiring `nokey.sh` to remain open.
- Pairing consent clearly distinguishes vault access from sync-provider credential access.
- Revocation/rotation behavior is designed or explicitly captured before shipping the durable grant model.
- Tests cover the pairing handshake, extension device-key persistence, sealed provider credential storage, and post-`nokey.sh` independent unlock/sync behavior.

## Notes

- This should not be implemented by scraping `nokey.sh` IndexedDB from a content script.
- `nokey.sh` remains the full settings and management surface; the extension becomes a permissioned companion device for vault access and filling.
- Relevant code paths: `nook-app/nook-web/nook-web-extension`, `nook-app/nook-web/nook-web-app/src/lib/auth-providers.ts`, `nook-app/nook-wasm/src/storage/auth_providers.rs`, `nook-app/nook-wasm/src/storage/indexed_db.rs`, `nook-app/nook-auth2`.


## Sub-Issues

- [ ] #236: Design extension first-run passkey setup and nokey.sh pairing UX
- [ ] #244: Finish extension-owned vault import and independent unlock/sync


## Historical comments

### cypherkitty — 2026-07-15T01:04:35Z

PR #391 implements the website-driven start of this flow: Simple Vault asks the installed extension to open its one-time extension-origin passkey protection window, then the protected device request returns to Simple Vault for Rust/WASM approval.

Ordinary pairing now requests vault access and password filling only. Sync-provider credential access remains a separate explicit scope; provider rows are sealed only when that scope is present. #244 still owns importing the encrypted vault projection, independent extension unlock, durable sealed-provider storage, sync, and revocation/rotation completion.


### cypherkitty — 2026-07-21T04:16:23Z

Closing as completed / superseded against the current architecture.

Delivered via later slices (#391, #244, and related extension work):
- extension-owned passkey/PIN device identity
- Simple Vault `/extension-connect` consent and grant
- encrypted event-log projection with independent unlock for fill

Obsolete relative to the current model:
- extension popup / storage as a multi-vault browser (“list paired vaults”)
- `nokey.sh` as the pairing host (Simple Vault owns approval)

Any remaining independent background provider-sync work should be tracked in a focused follow-up if still needed; it is not owned by this issue’s outdated acceptance criteria.

Parent #234 is being closed together with this cleanup.
