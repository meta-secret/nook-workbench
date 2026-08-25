---
title: "Hide or compact Nook Pilot from actionable workflow and saved-login state"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-24T15:04:00Z
updated_at: 2026-08-25T00:55:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1097"]
depends_on: ["issues/nook-pilot-authentication-control-plane/contextual-hud-dom-observation.md"]
---

# Hide or compact Nook Pilot from actionable workflow and saved-login state

## Context

The extension consumes the Rust-classified shared DOM observation and owns the
user-visible Pilot presentation. This final slice delivers the quiet browsing
behavior and compact zero-match state requested for the contextual HUD.

Parent feature: [Nook Pilot authentication control plane](README.md).

## Outcome

Pilot stays absent without an actionable authentication workflow. An eligible
login page starts as the compact Nook affordance when an unlocked vault has zero
saved matches, while matched, locked, unavailable, signup, passkey, and
password-change workflows remain useful and expanded.

## Scope

- Included: extension observation scheduling, typed message adapters,
  saved-login availability cache, background routing, observation scheduling, Pilot state and rendering,
  product specification, UI demo, extension unit tests, Playwright coverage,
  and final registration of the newly wired WASM consumers.
- Excluded: Rust actionability policy and shared DOM classification internals.

## Acceptance criteria

- [ ] Pilot does not mount on pages without an actionable authentication
  ceremony.
- [ ] Eligible zero-match login pages start compact without exposing login
  metadata to the host page.
- [ ] Saved-match and non-login workflow states retain their existing expanded behavior.
- [ ] Pilot actions execute only with Rust-owned `explicit-user-approval`.
- [ ] Extension unit, UI-demo, smoke, and focused Playwright scenarios pass.

## Progress

- 2026-08-25: Draft PR #1097 is reduced to this slice at exact head
  `6dda5c55eaf2dab9d7dd79e8cb2ce02fc02d13ff`. The final stack contains preserved full-work baseline
  `f75f7b8bb90a77bce72de86de5a131d3f7a1c58d` plus the PR #1087 and PR #1096 review fixes, with
  exact tree `d302b7c8c692a1ba3da6d010c056c3e517161a68`. The widget now refuses `takeover-required` and manual `take-over` actions. The focused approval and adapter suites pass 33 tests; the full extension check passes 221 tests with zero Svelte diagnostics. The extension-owned observation scheduling contract passes 5 tests.

## Findings and decisions

- The content script consumes only bounded availability state; vault lookup and
  secret material remain extension-owned.
- Automatic compact presentation yields to an explicit user presentation
  choice for the currently rendered workflow.

## References

- [Superseding delivery plan](../../plans/nook-pilot-authentication-control-plane/2026-08-24T14-59-55Z-contextual-hud-multi-pr-sequence.md)
- [Nook PR #1097](https://github.com/meta-secret/nook/pull/1097)

