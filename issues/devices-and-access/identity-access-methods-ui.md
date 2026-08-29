---
title: Ship independent identity and access-method management
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-13T03:58:00Z
updated_at: 2026-08-29T00:24:29Z
source_issues: []
related_prs:
  - 1061
  - 1063
  - 1072
  - 1186
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
- 2026-08-22: PR 1072 made the flat key inventory and relationship graph
  mutually exclusive List and Graph representations of the selected identity.
  List is the default; inventory inspection opens Graph at the matching node,
  and identities without local graph evidence remain in List. Exact head
  `7da2a038102e66edea848e7edc59431a8a76c258` passed the full browser suite,
  complete validation, clean Codex review, and readiness before squash-merging
  as `0d462693dc981a0ec874b06f9abec31b97217af6`.
- 2026-08-29: PR 1186 made vault opening explain the linked identities before
  authentication through a Rust-owned, typed WASM projection; device-key unlock
  now fails closed unless the current browser has an actual vault grant, while
  backup-password recovery remains a direct vault path. It also removed Access
  from vault navigation, retained standalone Devices & access, and stabilized
  authenticated routing, focus, invitation gating, lock reachability, and
  mobile auxiliary controls. Exact head
  `92ffdbb05adf14acf0b356afa6fd0fb0a7f71198` passed clean review, all required
  checks, exact-head preview deployment, and readiness before squash-merging as
  `6109a9fdbcfa0845cb22a742a9f2c65ae6d4ac6a`. The two broader independent
  identity-creation and device-linking criteria remain open.
