---
title: "Define browser extension vault list and password filling scope"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T01:09:55Z
updated_at: 2026-07-21T04:16:27Z
source_issues: ["https://github.com/meta-secret/nook/issues/234"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Define browser extension vault list and password filling scope

## Imported context

This record was imported from [Nook GitHub issue #234](https://github.com/meta-secret/nook/issues/234)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

The Nook browser extension (`nook-web-extension` / web-ext) should be treated as a distinct product surface from `nook-web` / `nokey.sh`. Keep the full settings and management experience on `nokey.sh` as it works today, while the extension focuses on the small browser-companion workflows users need in-page.

## Current Status

- `nook-web-extension` exists as a separate Manifest V3 package under `nook-app/nook-web/nook-web-extension`.
- The current extension can scan the active page for password/login fields, but it does not yet present vault selection or fill credentials.
- `nook-web` / `nokey.sh` remains the place for the full app/settings surface.

## Scope

- Show a list of available vaults in the extension popup.
- Let the user choose or confirm the active vault context for browser filling.
- Add password filling capabilities for detected login/password forms on the active page.
- Keep extension-only browser privileges, content scripts, and autofill behavior inside `nook-web-extension`, not `nook-web`.
- Keep broad account/vault/settings management on `nokey.sh` unless a browser-companion shortcut is explicitly needed.

## Acceptance Criteria

- The extension popup can display the user's available vaults from the authenticated/local vault state.
- The extension can detect fillable login forms and offer a credential fill action from the selected vault.
- Autofill/fill logic does not duplicate vault crypto, vault format, validation, password generation, or secret search policy in TypeScript; those stay in Rust/WASM/domain APIs where applicable.
- `nook-web` and `nook-web-extension` remain separate packages with separate responsibilities.
- Browser-extension behavior has targeted tests, including a page with username/password fields.

## References

- Code: `nook-app/nook-web/nook-web-extension`
- Code: `nook-app/nook-web/nook-web-shared/src/extension/password-forms.ts`
- Code: `nook-app/nook-web/nook-web-extension/src/content/autofill.ts`
- Code: `nook-app/nook-web/nook-web-extension/src/popup/PopupApp.svelte`


## Sub-Issues

- [ ] #235: Pair browser extension as passkey-protected device with sync providers

- [ ] #237: Design in-page Get access prompt for seamless extension login

- [ ] #240: Add English and Russian localization to browser extension


## Historical comments

### cypherkitty — 2026-07-14T03:35:58Z

The Simple/Sentinel application-isolation feature is now tracked by #360.

This establishes a hard scope constraint for this issue's future autofill work:
the Nook browser extension may list, pair with, persist, and fill from **Simple
vaults only**. Sentinel vaults are not extension-capable and must be rejected by
Rust/WASM even if a forged or mislabeled payload reaches the extension.

The focused implementation and regression coverage is tracked in #363. This
comment does not otherwise change #234's ownership or broader autofill scope.


### cypherkitty — 2026-07-15T01:04:33Z

PR #391 updates the product direction from a popup-owned vault list to a website-owned vault:

- the toolbar opens `simple.nokey.sh` (or its extension approval route when unpaired);
- the extension no longer contains a vault-management popup;
- the website owns vault creation, import, unlock, browsing, and consent;
- the extension owns the in-page authentication widget and browser integration.

The active specification is `.cortex/product-specs/browser-extension.md`. #237 continues the contextual matched-account/fill experience, while #235/#244 continue the separately revocable extension-device and encrypted local projection.


### cypherkitty — 2026-07-16T20:31:04Z

Passkey management is now tracked separately under #441 and milestone **Feature: Passkey manager**. This preserves #234 as the broader Simple-only password/browser companion scope. The passkey feature depends on #244 for an independently unlocked encrypted extension projection; it does not expand the extension into a vault-management UI.

### cypherkitty — 2026-07-17T06:27:51Z

Related feature pack: # (milestone: Feature: Auth-agent universal login gate). Auth-agent / universal gate work is tracked there; #234 remains the broader extension vault-list + filling aggregate.

### cypherkitty — 2026-07-17T06:28:32Z

Correction/follow-up: auth-agent feature pack is #461 under milestone [Feature: Auth-agent universal login gate](https://github.com/meta-secret/nook/milestone/8). Sub-issues: #462, #463, #464, #465.

### cypherkitty — 2026-07-21T04:16:26Z

Closing as completed against the current product direction (`.cortex/product-specs/browser-extension.md`).

Original popup vault-list scope was superseded by PR #391: Simple Vault owns vault management/consent; the extension owns device setup, in-page auth, and fill.

Core #234 outcomes now in code:
- form detection + Continue with Nook credential fill from the unlocked Simple projection
- crypto/match/reveal kept in Rust/WASM
- `nook-web` / `nook-web-extension` remain separate
- targeted extension tests including username/password pages

Sub-issue cleanup:
- #240 already closed (localization)
- #237 closed as shipped (in-page fill gate)
- #235 closed as shipped/superseded (device pairing + projection; obsolete multi-vault AC dropped)

Broader Nook Pilot automation continues under #461. This aggregate is no longer the active tracker.
