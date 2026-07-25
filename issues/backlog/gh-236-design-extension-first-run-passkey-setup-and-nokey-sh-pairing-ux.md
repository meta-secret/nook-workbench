---
title: "Design extension first-run passkey setup and nokey.sh pairing UX"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T01:41:31Z
updated_at: 2026-07-08T04:28:53Z
source_issues: ["https://github.com/meta-secret/nook/issues/236"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Design extension first-run passkey setup and nokey.sh pairing UX

## Imported context

This record was imported from [Nook GitHub issue #236](https://github.com/meta-secret/nook/issues/236)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #235.

## Problem

The browser extension pairing architecture needs a concrete first-run UX and trust ceremony. The user should understand that `nook-web-extension` is creating a separate passkey-protected extension device, then pairing that device through `https://nokey.sh/extension-connect` after unlocking `nokey.sh`.

The extension should not silently reuse the web app's existing private device key, even when both run in the same browser. A separate extension device identity gives Nook an explicit approval/revocation boundary, a distinct device label, separate extension storage, and a smaller blast radius if extension storage or permissions are compromised.

## Scope

- Design the extension first-run states before any vault is paired.
- Define the passkey/device-protection setup UX for the extension's own device identity.
- Define the `https://nokey.sh/extension-connect` handoff UX from extension to web app.
- Define the `nokey.sh` consent screen for adding the extension as a vault device.
- Make consent scopes explicit, including vault access, password filling, and sync provider credentials.
- Decide and document that the extension creates its own device identity instead of reusing the `nokey.sh` device private key.
- Define ready, locked, unpaired, pairing-failed, and revoked states in the extension popup.
- Define user-visible device labels such as browser/profile/platform so the user can recognize the extension device later.
- Include security copy that makes clear `nokey.sh` remains the full settings surface while the extension is a permissioned vault/filling companion.

## Proposed UX States

1. **Not set up**
   - Show `Connect Nook` / `Set up extension`.
   - Explain that this creates a passkey-protected extension device on this browser.

2. **Protect this extension**
   - Generate the extension device identity.
   - Ask the user to create/authorize passkey protection for the extension device key.
   - Store only the wrapped extension device identity in extension-owned storage.

3. **Pair with nokey.sh**
   - Offer `Open nokey.sh`.
   - Open exactly `https://nokey.sh/extension-connect` with a pairing request/nonce and requested scopes.
   - `nokey.sh` requires normal unlock before approval.

4. **Approve extension device**
   - `nokey.sh` shows a consent screen: add this extension/browser profile as a device for selected vaults.
   - Consent distinguishes vault access, password filling, and sync-provider credential access.

5. **Ready**
   - Extension shows paired vault list, selected vault, lock state, current-page fill actions, and sync status.

## Acceptance Criteria

- The UX makes it clear that the extension has its own device identity and passkey-protected storage.
- The UX does not imply that extension access is just a temporary `nokey.sh` page session.
- `https://nokey.sh/extension-connect` is the canonical pairing entry point.
- A user cannot pair the extension without unlocking `nokey.sh` and approving explicit scopes.
- The extension stores no decrypted vault data or sync provider credentials before passkey/device authorization.
- The extension can explain what happens if `nokey.sh` is closed after pairing: durable paired access remains because the extension is now an authorized device.
- The design includes failure/retry states for denied permission, closed tab, invalid pairing request, revoked extension device, and passkey failure.
- The design calls out how users can later revoke or rotate the extension device grant.

## Notes

- This issue is about UX/UI and product-security semantics, not the full implementation.
- Implementation should avoid scraping `nokey.sh` IndexedDB.
- Related code paths: `nook-app/nook-web/nook-web-extension/src/popup/PopupApp.svelte`, `nook-app/nook-web/nook-web-extension/src/background/service-worker.ts`, `nook-app/nook-web/nook-web-extension/src/manifest.ts`, `nook-app/nook-web/nook-web-app`, `nook-app/nook-auth2`, `nook-app/nook-wasm`.


## Historical comments

No comments.
