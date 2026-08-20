---
title: Ship independent identity and access-method management
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-13T03:58:00Z
updated_at: 2026-08-20T16:56:12Z
source_issues: []
related_prs:
  - 1061
  - 1063
depends_on:
  - issues/devices-and-access/identity-directory.md
  - issues/devices-and-access/identity-app-key-enrollment.md
---

# Ship independent identity and access-method management

## Context

The production Access page centers one implicit identity inside a vault shell.
People cannot create, switch, or manage identities independently. Passkey facts
are available only through the graph detail flow.

## Outcome

Devices & access becomes an independent identity-management surface in Nook's
existing design language. The selected identity has a graph tab and a flat
Access methods tab. Provider names and browser evidence show their provenance.

## Scope

- Add an identity list with create, select, empty, loading, and error states.
- Add explicit current-app and other-installation linking actions.
- Keep the existing relationship graph for the selected identity.
- Add a flat access-method list for the selected identity.
- Show user-confirmed provider names separately from browser-reported facts.
- Never infer Proton Pass, Apple Passwords, or another manager from WebAuthn.
- Preserve locked-state usefulness, translations, accessibility, and routing.
- Add focused Playwright e2e and UI-demo coverage at phone and desktop widths.

## Acceptance criteria

- [ ] Identities can be created and selected without opening a vault.
- [ ] App-key membership and device-linking actions are explicit.
- [x] The graph and flat Access methods tabs represent the same selected identity.
- [x] Provider labels state whether they were named by the user or reported by the browser.
- [x] Unknown provider data remains unknown.
- [x] Existing no-vault, locked, and unlocked states remain coherent.
- [x] English and Russian catalogs remain in parity.
- [x] Exact-head validation and the UI demo contract pass before squash merge.

## Progress

- 2026-08-20: PR 1061 added hosted Playwright regression evidence for the
  already-delivered wide Access canvas, deduplicated top browse control,
  passkey-only List projection, and retained app-key Graph inspection. The
  broader independent identity-management outcome remains ready.
- 2026-08-20: PR 1063 implements the approved persistent identity rail and flat
  selected-identity key inventory. It projects real directory members, scopes
  vault evidence to the selected identity, preserves companion and locked-state
  provenance, and bootstraps the initial Personal identity after protection.
  Additional identity creation remains disabled until a new identity can own
  an independent protected local app key.
- 2026-08-20: PR 1063 squash-merged as `1e1818592a860032e3c58db49a08affa8e482b2a`.
  Exact head `700a17c4775d158c98c314a67c17a87eb6fa696e` passed focused and complete
  hosted validation, the UI demo contract, clean Codex review, and readiness.
