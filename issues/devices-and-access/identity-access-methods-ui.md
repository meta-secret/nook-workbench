---
title: Ship independent identity and access-method management
status: ready
priority: p1
automation: manual
owner: codex
created_at: 2026-08-13T03:58:00Z
updated_at: 2026-08-13T03:58:00Z
source_issues: []
related_prs: []
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
- [ ] The graph and flat Access methods tabs represent the same selected identity.
- [ ] Provider labels state whether they were named by the user or reported by the browser.
- [ ] Unknown provider data remains unknown.
- [ ] Existing no-vault, locked, and unlocked states remain coherent.
- [ ] English and Russian catalogs remain in parity.
- [ ] Exact-head validation and the UI demo contract pass before squash merge.
