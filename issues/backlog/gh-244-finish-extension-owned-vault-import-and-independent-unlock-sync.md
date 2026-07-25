---
title: "Finish extension-owned vault import and independent unlock/sync"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T03:21:38Z
updated_at: 2026-07-16T23:50:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/244"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Finish extension-owned vault import and independent unlock/sync

## Imported context

This record was imported from [Nook GitHub issue #244](https://github.com/meta-secret/nook/issues/244)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Remaining implementation slice for #235.

## Problem

The first-run extension pairing PR now creates/protects the extension device identity, routes the nokey.sh consent flow, adds the extension auth envelope, and hands off provider rows re-sealed for the extension device. The durable grant model still needs the extension to become self-sufficient after nokey.sh is closed.

## Scope

- Import or initialize the paired vault copy into extension-owned encrypted storage after consent.
- Persist granted sync provider rows in extension-owned IndexedDB, keeping secret fields sealed for the extension device at rest.
- Add extension unlock using the extension's passkey-protected device identity and auth envelope.
- List paired vaults from extension-owned encrypted storage instead of setup metadata alone.
- Sync the paired vault from the extension using granted providers without requiring nokey.sh to remain open.
- Keep decrypted provider credentials inside extension background/popup/WASM session boundaries, never content scripts or page DOM state.
- Define revocation/rotation behavior before treating the durable grant model as shipped.

## Acceptance Criteria

- After successful pairing, closing nokey.sh still leaves the extension able to unlock the paired vault with passkey/device authorization.
- The extension can decrypt the paired vault only after passkey/device authorization.
- Granted sync provider credentials are stored in extension-owned IndexedDB sealed for the extension device.
- The extension can sync the paired vault with granted providers independently of nokey.sh.
- Unit and e2e tests cover independent unlock, sealed provider storage, and sync after nokey.sh is closed.


## Historical comments

### cypherkitty — 2026-07-15T01:04:37Z

PR #391 establishes the website-owned vault/consent surface and removes the extension vault popup. It intentionally does not treat pairing metadata as an independently usable vault.

This issue remains the durable runtime boundary: encrypted vault projection import, passkey-gated independent unlock, sealed provider persistence in extension-owned IndexedDB, background sync, and revocation/rotation. The new default pairing grant excludes sync-provider credentials unless the explicit sync scope is requested.

