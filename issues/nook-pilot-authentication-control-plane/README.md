---
title: "Feature: Nook Pilot authentication control plane"
status: in_progress
created_at: 2026-07-25T23:56:27Z
updated_at: 2026-08-24T15:04:00Z
---

# Feature: Nook Pilot authentication control plane

## Migration status

Imported from the historical GitHub Issues collection in
[`meta-secret/nook`](https://github.com/meta-secret/nook/issues). These records are
reference context until an agent explicitly refines and claims them under the
Workbench issue contract.

## Issues

- [ ] [Contextual HUD Rust/WASM policy](contextual-hud-rust-wasm-policy.md)
- [ ] [Contextual HUD shared DOM observation](contextual-hud-dom-observation.md)
- [ ] [Contextual HUD extension presentation](contextual-hud-extension-presentation.md)

- [x] [#239: Add 2FA/TOTP secrets and login-time code autofill](gh-239-add-2fa-totp-secrets-and-login-time-code-autofill.md)
- [x] [#461: Epic: Nook Pilot authentication control plane](gh-461-epic-nook-pilot-authentication-control-plane.md)
- [x] [#462: Align extension primary controls with nook-web visual tokens](gh-462-align-extension-primary-controls-with-nook-web-visual-tokens.md)
- [x] [#463: Toolbar popup: choose Open vault vs stay as companion](gh-463-toolbar-popup-choose-open-vault-vs-stay-as-companion.md)
- [x] [#464: Universal in-page auth gate for login pages](gh-464-universal-in-page-auth-gate-for-login-pages.md)
- [x] [#465: Auth-agent automatic passkey create and sign-in](gh-465-auth-agent-automatic-passkey-create-and-sign-in.md)
- [x] [#506: Implement Rust-owned Nook Pilot workflow model and live HUD](gh-506-implement-rust-owned-nook-pilot-workflow-model-and-live-hud.md)
- [x] [#507: Add signup and password-change flight plans to Nook Pilot](gh-507-add-signup-and-password-change-flight-plans-to-nook-pilot.md)
- [x] [#508: Guide 2FA enrollment and recovery-code capture with Nook Pilot](gh-508-guide-2fa-enrollment-and-recovery-code-capture-with-nook-pilot.md)
- [x] [#509: Build Nook Pilot workflow evidence and site-compatibility harness](gh-509-build-nook-pilot-workflow-evidence-and-site-compatibility-harness.md)
- [x] [#534: Mock auth fixture service for extension Pilot e2e](gh-534-mock-auth-fixture-service-for-extension-pilot-e2e.md)
- [x] [#535: Extract mock auth HTTP service with plain login and login→2FA](gh-535-extract-mock-auth-http-service-with-plain-login-and-login-2fa.md)
- [x] [#536: PIN-initialized Pilot e2e against mock auth (plain + 2FA)](gh-536-pin-initialized-pilot-e2e-against-mock-auth-plain-2fa.md)

## Contextual HUD delivery sequence

The complete contextual HUD implementation is preserved at Nook commit
`f75f7b8bb90a77bce72de86de5a131d3f7a1c58d`. Delivery proceeds in this order:

1. [PR #1087](https://github.com/meta-secret/nook/pull/1087) owns Rust/WASM
   authentication actionability policy and typed interfaces.
2. [PR #1096](https://github.com/meta-secret/nook/pull/1096) owns shared browser
   DOM observation, scoping, and actuation.
3. [PR #1097](https://github.com/meta-secret/nook/pull/1097) owns extension Pilot
   visibility, saved-login compact presentation, and rendered browser coverage.

The stable cross-module interface is the typed authentication page observation
and advance-control decision exported by companion WASM. Shared web code supplies
bounded DOM facts to that interface. Extension presentation consumes only the
resulting workflow observation and saved-login availability.

## Feature acceptance criteria

- Pilot is absent without an actionable authentication ceremony.
- Eligible login pages with zero saved matches start compact.
- Matched, locked, unavailable, signup, passkey, and password-change states
  remain expanded and actionable.
- Rust domain tests, WASM boundary tests, browser unit tests, extension checks,
  UI-demo validation, and focused Playwright journeys pass in their owning
  slices.

## Preservation inventory

### PR #1087: Rust/WASM policy and interfaces

- `.agents/skills/rust-coding/SKILL.md`
- `.cortex/AGENTS.md`
- `.cortex/dynamic-skills/index.md`
- `.cortex/dynamic-skills/rust-coding.md`
- `.cortex/dynamic-skills/rust-typescript-code-separation.md`
- `agentic-ai/loom/src/module-experts/catalog.ts`
- Every changed file under `nook-app/nook-platform/`.

### PR #1096: shared DOM observation and actuation

- `nook-app/nook-web/nook-web-shared/src/extension/password-form-fields.ts`
- `nook-app/nook-web/nook-web-shared/src/extension/password-forms.ts`
- `nook-app/nook-web/nook-web-app/tests/unit/setup-wasm.ts`
- `nook-app/nook-web/nook-web-app/tests/unit/lib/authentication-observation.test.ts`
- `nook-app/nook-web/nook-web-app/tests/unit/lib/passkey-controls.test.ts`
- `nook-app/nook-web/nook-web-app/tests/unit/lib/password-form-actionability.test.ts`
- `nook-app/nook-web/nook-web-app/tests/unit/lib/password-form-identity-context.test.ts`
- `nook-app/nook-web/nook-web-app/tests/unit/lib/password-form-submission.test.ts`
- `nook-app/nook-web/nook-web-app/tests/unit/lib/password-forms.test.ts`

### PR #1097: extension presentation and rendered behavior

- `.cortex/product-specs/browser-extension.md`
- `nook-app/nook-web/nook-web-app/e2e/demos/nook-pilot.demo.spec.ts`
- `nook-app/nook-web/nook-web-app/e2e/demos/static-chrome-stub.ts`
- `nook-app/nook-web/nook-web-app/tests/unit/lib/widget-position.test.ts`
- Every changed file under `nook-app/nook-web/nook-web-extension/`.

The three inventories cover every file changed by the preserved full-work
commit relative to its original Main baseline.
