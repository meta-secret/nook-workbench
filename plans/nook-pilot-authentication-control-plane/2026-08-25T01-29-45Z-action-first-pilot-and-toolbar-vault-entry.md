---
title: Action-first Pilot and toolbar-owned vault entry
feature: nook-pilot-authentication-control-plane
issue: issues/nook-pilot-authentication-control-plane/contextual-hud-extension-presentation.md
started_at: 2026-08-25T01:29:45Z
agent: codex
supersedes: plans/nook-pilot-authentication-control-plane/2026-08-24T14-59-55Z-contextual-hud-multi-pr-sequence.md
---

# Task plan

## Interpreted request

Remove distracting and ambiguous Nook Pilot surfaces. Keep the website surface focused on the exact authentication action. Move vault navigation to the extension toolbar. Remove the persistent companion-ready window from page-initiated unlock flows.

## Requirements

- Keep Pilot absent when no actionable authentication workflow exists.
- Keep zero-match login workflows collapsed.
- Render one explicit website action when Pilot is expanded.
- Remove Open vault and Take over from the website surface.
- Keep Open Simple Vault in the toolbar popup.
- Do not open a persistent companion-ready window from a website action.
- Keep extension-origin passkey and PIN protection authoritative.
- Keep login metadata and secrets out of the host-page DOM.

## Provider and consumer contract

- Consumer: the in-page Pilot requests one Rust-approved authentication action.
- Provider: the extension background and offscreen runtime authorize vault access and perform bounded selection or fill work.
- Toolbar: the trusted popup owns unlock, pairing, and Open Simple Vault.
- Locked page action: it reports that toolbar unlock is required. It does not create a detached extension window.
- Compatibility: extension-origin WebAuthn remains in the toolbar popup. Website passkey ceremonies keep their existing browser-native or extension-controlled consent boundary.

## Implementation sequence

1. Update the browser-extension product specification with the new surface ownership.
2. Simplify the in-page widget to one action plus collapse and dismiss controls.
3. Replace generic Continue copy with action-specific localized copy.
4. Simplify the unlocked toolbar popup to vault status and management actions.
5. Remove detached companion-window launches from locked login, OTP, save, and paired-vault unlock paths.
6. Update focused unit, popup, and Playwright contracts.
7. Run host pre-push hygiene, push the exact head, then resume hosted validation when the build path is stable.

## Acceptance evidence

- No-auth pages render no Pilot.
- Zero-match login pages render only the collapsed affordance.
- Matched login pages expose one clearly named primary authentication action.
- The in-page surface contains neither Open vault nor Take over.
- Locked page actions do not call `chrome.windows.create` for the companion home.
- The toolbar popup contains Open Simple Vault.
- Successful toolbar unlock does not land on a Ready or Stay ready page.
- English and Russian shared catalogs remain in parity.

## Change budget

- Estimated authored changed lines: 700.
- Owning slice: PR #1097 extension presentation and its product contract.
- Excluded: Rust workflow classification, shared DOM scoping, vault cryptography, and website passkey policy.

## Safety review

This plan contains no secrets, private vault data, raw chat transcript, local paths, or infrastructure credentials.
