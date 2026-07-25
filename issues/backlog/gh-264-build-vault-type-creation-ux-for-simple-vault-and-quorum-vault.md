---
title: "Build vault-type creation UX for Simple Vault and Quorum Vault"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T00:53:13Z
updated_at: 2026-07-21T04:29:26Z
source_issues: ["https://github.com/meta-secret/nook/issues/264"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Build vault-type creation UX for Simple Vault and Quorum Vault

## Imported context

This record was imported from [Nook GitHub issue #264](https://github.com/meta-secret/nook/issues/264)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #259. Depends on #273, #262, and #263.

## Problem

Users need to choose the right vault access policy at vault creation time. This should not be presented as one generic recovery feature.

Working modes:

- **Simple Vault**: best for password manager usage; each enrolled device can unlock alone.
- **Quorum Vault**: best for crypto vault / shared custody; multiple devices are required to unlock.
- **Social Recovery Vault**: owner unlocks normally; trusted recovery helpers can restore access if the owner device is lost.

The UX must make the tradeoff visible before key material is created. If #262 decides Simple-to-Quorum migration is not safe, the UI must not offer it as a casual toggle.


## Terminology

UI copy should not market or explain "SLIP-0039" to users. It should describe the product policy: Simple Vault, Quorum Vault, Social Recovery, threshold unlock, trusted helpers, and recovery trustees. SLIP-0039 remains an implementation detail.

## Scope

Build the Svelte UX around the policy-aware WASM APIs:

Vault creation / setup:

- Add a creation-time choice between Simple Vault and Quorum Vault, plus Social Recovery if #262 includes it in MVP.
- Use the working name **Quorum Vault** for the crypto/high-security mode unless product naming changes.
- Explain the practical difference: convenience vs threshold unlock.
- Avoid implying the mode can be changed later unless #262 explicitly supports migration.

Quorum Vault flow:

- Show threshold unlock progress and helper/device participation states.
- Make session clearing semantics explicit: refresh/logout/tab close clears the current unlock ceremony.
- Support QR and paste/manual transfer for environments without camera scanning.

Social Recovery flow:

- Distinguish owner devices from recovery trustees.
- Explain that trustees cannot open the vault by themselves.
- Render helper request/response flows only where applicable.

General UX:

- Use localized strings from `nook-core/locales/*.json`.
- Avoid calling SLIP-0039 shares BIP-39 seed phrases.
- Avoid implying the sync provider or Nook server transports request/response shares.
- Reuse existing QR components and bottom-nav/settings patterns where they fit.

## Out Of Scope

- Core SLIP-0039 implementation.
- WASM crypto/session logic.
- Deciding whether Nook needs an identity/account service (#273).
- Native P2P/Iroh transport.
- Provider-mediated recovery requests.

## Acceptance Criteria

- The UI presents vault policy choice at creation/setup time.
- The UI clearly distinguishes Simple Vault from Quorum Vault.
- Quorum Vault copy says multiple devices are required to unlock.
- Simple Vault copy says each enrolled device can unlock alone.
- Social Recovery copy, if included, says trustees help recover access but do not normally unlock the vault.
- Refreshing or logging out clears session QR, helper response QR, and collected shares.
- All visible copy is localized through the shared translation system.
- Playwright coverage exercises the selected policy happy path at smoke level.
- App logs attached to e2e results do not include share plaintext, SLIP-0039 mnemonics, `secrets_key`, or `members_key`.

## Related

- Parent: #259
- Policy blocker: #273
- Lifecycle/policy: #262
- WASM APIs: #263
- `nook-app/nook-web/nook-web-app/src/lib/components/OnboardDevice.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/VaultBottomNav.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/LoginGate.svelte`
- `nook-app/nook-core/locales/en.json`



## Historical comments

### cypherkitty — 2026-07-21T04:29:24Z

Closing as completed under current Simple/Sentinel UX.

Creation/import path choice is Simple create, Sentinel create, or Sentinel join (see vault-architecture-modes + Get started / presence-first work). Isolated apps: `simple.nokey.sh` and `sentinel.nokey.sh` (#360).

Obsolete: in-app chooser labeled “Quorum Vault” / “Social Recovery Vault”.
