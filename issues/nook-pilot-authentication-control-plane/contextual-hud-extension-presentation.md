---
title: "Keep Nook Pilot compact and action-first"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-24T15:04:00Z
updated_at: 2026-08-25T02:05:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1097"]
depends_on: ["issues/nook-pilot-authentication-control-plane/contextual-hud-dom-observation.md"]
---

# Keep Nook Pilot compact and action-first

## Context

The extension consumes Rust-classified DOM observations and owns the user-visible Pilot presentation. The original presentation added ambiguous host-page controls and a persistent companion-ready window. This slice removes those distractions.

Parent feature: [Nook Pilot authentication control plane](README.md).

## Outcome

Pilot stays absent without a safe authentication action. Login flows stay compact until Nook confirms a saved match. Expanded Pilot shows one explicit authentication action. Vault navigation belongs to the extension toolbar menu.

## Scope

- Included: extension presentation policy, toolbar popup, default unlock routing, localized copy, product specification, UI demos, extension tests, and browser contracts.
- Excluded: Rust workflow classification, shared DOM scoping, vault cryptography, and website passkey policy.

## Acceptance criteria

- [x] Pilot does not mount when Rust allows no safe authentication action.
- [x] Login Pilot stays compact until the extension confirms at least one saved match.
- [x] Expanded Pilot shows one action-specific primary control.
- [x] The host-page surface contains no Open vault, Take over, or vault-status control.
- [x] The toolbar popup contains Open Simple Vault.
- [x] The toolbar popup has no Ready or Stay ready destination.
- [x] Default page unlock requests do not create a detached companion window.
- [x] English and Russian catalogs remain in parity.
- [x] Focused extension unit, lint, TypeScript, Svelte, and pre-push checks pass.
- [ ] Hosted Playwright and PR validation pass on the updated exact head.

## Progress

- 2026-08-25: PR #1097 reached exact head `7f3cbdf39e18eabd1c7937d63e85372ae12b8565`. The correction removes 742 lines while adding 234. The extension package passes 221 tests, lint, TypeScript, and Svelte with zero diagnostics. Cortex audit and mandatory pre-push hygiene pass. Hosted validation remains deferred while the build path is unstable.

## Findings and decisions

- Extension-origin passkey and PIN protection remains in the trusted toolbar popup.
- Default unlock uses the toolbar popup API. Pairing and bounded account pickers retain their explicit trusted surfaces.
- The host-page DOM receives no vault status, account label, or secret value.
- The browser-extension product specification now owns this surface boundary.

## References

- [Action-first superseding plan](../../plans/nook-pilot-authentication-control-plane/2026-08-25T01-29-45Z-action-first-pilot-and-toolbar-vault-entry.md)
- [Nook PR #1097](https://github.com/meta-secret/nook/pull/1097)
