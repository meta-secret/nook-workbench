---
title: "Keep Nook Pilot compact and action-first"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-24T15:04:00Z
updated_at: 2026-08-25T08:42:00Z
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

- Included: extension presentation policy, toolbar popup, default unlock routing, localized copy, product specification, UI demos, extension tests, browser contracts, pairing/import surface refresh, and account-picker cancellation.
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
- [x] Hosted Playwright and PR validation pass on the updated exact head.

## Progress

- 2026-08-25: PR #1097 reached exact head `d5fc39645e9cb45a578d589141e8d647dea82b52` on current main `d41d457222844812fe9fca0fd6081a694fbd1767`. The extension package passes 241 tests, lint, TypeScript, host formatting, and mandatory pre-push hygiene. Exact-head PR run [32825626788](https://github.com/meta-secret/nook/actions/runs/32825626788) passed all 17 jobs, including full extension and both full web E2E shards. Codex found no major issues and active unresolved review threads are zero.
- 2026-08-25: Focused run [32825675111](https://github.com/meta-secret/nook/actions/runs/32825675111) completed the allowlisted `extension:e2e` task successfully, then its diagnostics wrapper repeated the runner-only `EACCES` failure while scanning Chromium profile artifacts. The exact-head PR extension job passed, so this is not a product-test failure.

## Findings and decisions

- Extension-origin passkey and PIN protection remains in the trusted toolbar popup.
- Default unlock uses the toolbar popup API. Pairing and bounded account pickers retain their explicit trusted surfaces.
- The host-page DOM receives no vault status, account label, or secret value.
- Pairing completion invalidates cached match metadata again and refreshes mounted authentication surfaces.
- Authentication-context mutation cancels both login and authenticator pickers. Stable-workflow rescans remount action DOM so disabled or stale controls cannot survive.
- Empty 2FA state copy points users to the toolbar menu; Pilot does not add a page-level vault control.
- The browser-extension product specification owns this surface boundary.

## References

- [Action-first superseding plan](../../plans/nook-pilot-authentication-control-plane/2026-08-25T01-29-45Z-action-first-pilot-and-toolbar-vault-entry.md)
- [Nook PR #1097](https://github.com/meta-secret/nook/pull/1097)