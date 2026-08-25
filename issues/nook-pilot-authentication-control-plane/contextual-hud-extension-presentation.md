---
title: "Keep Nook Pilot compact and action-first"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-24T15:04:00Z
updated_at: 2026-08-25T17:47:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1097"]
depends_on: ["issues/nook-pilot-authentication-control-plane/contextual-hud-dom-observation.md"]
---

# Keep Nook Pilot compact and action-first

## Context

The extension consumes Rust-classified DOM observations and owns the user-visible Pilot presentation. The original presentation added ambiguous host-page controls and a persistent companion-ready window. This slice removes those distractions and adds the Rust-owned actions needed to complete observed enrollment workflows.

Parent feature: [Nook Pilot authentication control plane](README.md).

## Outcome

Pilot stays absent without a safe authentication action. Login flows stay compact until Nook confirms a saved match. Expanded Pilot shows one explicit authentication action. Vault navigation belongs to the extension toolbar menu. Enrollment state and mutations remain owned by Rust/WASM.

## Scope

- Included: extension presentation policy, toolbar popup, default unlock routing, Rust-owned Pilot enrollment actions, localized copy, product specification, UI demos, extension tests, browser contracts, pairing/import surface refresh, picker cancellation, and staged-enrollment cancellation at authorization boundaries.
- Excluded: shared DOM scoping, vault cryptography, and website passkey policy.

## Acceptance criteria

- [x] Pilot does not mount when Rust allows no safe authentication action.
- [x] Login Pilot stays compact until the extension confirms at least one saved match.
- [x] Expanded Pilot shows one action-specific primary control.
- [x] The host-page surface contains no Open vault, Take over, or vault-status control.
- [x] The toolbar popup contains Open Simple Vault.
- [x] The toolbar popup has no Ready or Stay ready destination.
- [x] The unlocked toolbar uses a compact identity and connection-status row instead of a hero, explanation, or decorative mark.
- [x] A connected vault has one dominant Open Simple Vault action and one subdued Pair another vault action.
- [x] An unconnected vault has one dominant Connect to Simple Vault action without a competing Open Simple Vault control.
- [x] Default page unlock requests do not create a detached companion window.
- [x] English and Russian catalogs remain in parity.
- [x] Focused extension unit, lint, TypeScript, Svelte, browser, and pre-push checks pass.
- [ ] Hosted Playwright and PR validation pass on the updated exact head.

## Progress

- 2026-08-25: User screenshot review found that the toolbar popup still lacked a clear visual purpose. The follow-up removes hero-scale copy and redundant controls. It keeps only compact connection context and the action that changes the current state.
- 2026-08-25: PR #1097 was split as slice 3 of 3, merged current main `6e54dfbadd2b8a41090ac96bbe946d7c994781c9`, and reached exact head `70efcdb7aab4cf510ae61b5da33993773ab2c130`. The extension package passes 246 tests, lint, TypeScript, Svelte, formatting, Cortex-session hygiene, architecture guards, and mandatory pre-push hygiene.
- 2026-08-25: Local Brave proves both the normal QR stage/confirm flow and cancellation of a staged enrollment across lock/unlock. The cancellation test waits beyond multiple evidence-watch cycles and verifies that neither the OTP field nor the vault authenticator is populated.
- 2026-08-25: All active review conversations are addressed and resolved. Exact-head focused extension execution, full PR validation, and Codex review are running. Previous-head BuildKit/ARC failures are classified as infrastructure evidence, not product-test failures.

## Findings and decisions

- Extension-origin passkey and PIN protection remains in the trusted toolbar popup.
- Default unlock uses the toolbar popup API. Pairing and bounded account pickers retain their explicit trusted surfaces.
- The host-page DOM receives no vault status, account label, or secret value.
- Rust/WASM classifies and owns direct `EnrollAuthenticator` and `SaveBackupCodes` actions, enrollment progress, manual checkpoints, and the persisted authenticator identity mutation.
- Mixed backup-code forms route through the Rust workflow policy rather than TypeScript business rules.
- Pairing completion invalidates cached match metadata again and refreshes mounted authentication surfaces.
- Authentication-context mutation invalidates action generations, cancels both login and authenticator pickers, and remounts action DOM so disabled or stale controls cannot survive.
- Session lock and expiry invalidate the enrollment generation, stop evidence watching, dismiss Rust-staged enrollment before session close, and prevent late stage responses from becoming active.
- Empty 2FA state copy points users to the toolbar menu; Pilot does not add a page-level vault control.
- The browser-extension product specification owns this surface boundary.

## References

- [Action-first superseding plan](../../plans/nook-pilot-authentication-control-plane/2026-08-25T01-29-45Z-action-first-pilot-and-toolbar-vault-entry.md)
- [Nook PR #1097](https://github.com/meta-secret/nook/pull/1097)

- 2026-08-25: Exact-head PR run [32879851335](https://github.com/meta-secret/nook/actions/runs/32879851335) passed native Rust verification and the WASM build. WASM Node, web, preview, and browser jobs could not execute because shared BuildKit/sccache became unhealthy. Focused extension run [32879825842](https://github.com/meta-secret/nook/actions/runs/32879825842), repository policy [32879721765](https://github.com/meta-secret/nook/actions/runs/32879721765), and web research [32879721806](https://github.com/meta-secret/nook/actions/runs/32879721806) reproduced the same pre-product failure on unchanged-head retries. Hive [32879721855](https://github.com/meta-secret/nook/actions/runs/32879721855) failed at the same infrastructure boundary. Readiness is blocked by these exact-head infrastructure checks, Pages deployment, pending Codex review, and intentional draft state; no product test failed on this head.
