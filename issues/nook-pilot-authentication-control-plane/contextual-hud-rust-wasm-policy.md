---
title: "Define contextual Pilot authentication actionability in Rust and WASM"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-24T15:04:00Z
updated_at: 2026-08-24T15:04:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1087"]
depends_on: []
---

# Define contextual Pilot authentication actionability in Rust and WASM

## Context

The contextual HUD implementation grew beyond one reviewable pull request while
moving authentication actionability policy out of TypeScript. This first slice
owns the stable Rust/WASM policy interface consumed by later browser layers.

Parent feature: [Nook Pilot authentication control plane](README.md).

## Outcome

Rust classifies bounded authentication page observations and advance controls,
including scoped ownership, visibility, login and password-update evidence,
recovery exclusions, OTP progression, and destructive actions. WASM exposes the
typed decisions without adding web policy.

## Scope

- Included: companion-core authentication observations, classification,
  validation, candidate selection, page-field policy, WASM adapters, boundary
  registrations, Rust tests, and the directly owning architecture guidance.
- Excluded: DOM collection, page control activation, Pilot presentation,
  saved-login availability, and browser E2E.

## Acceptance criteria

- [ ] Authentication actionability and workflow policy is Rust-owned and
  behavior-tested.
- [ ] WASM adapters expose concrete typed observations and decisions.
- [ ] Localized, destructive, recovery, OTP, password-only, and password-update
  cases have focused Rust regressions.
- [ ] Companion-core and both changed WASM boundary checks pass.

## Progress

- 2026-08-24: Complete implementation preserved at
  `f75f7b8bb90a77bce72de86de5a131d3f7a1c58d`; PR #1087 will be reduced to this
  slice only after successor PRs and the preservation inventory are durable.

## Findings and decisions

- Authentication actionability is a security and product policy boundary, not
  a TypeScript label allowlist.
- The stable consumer interface is the typed page-observation and
  advance-control decision surface exported through companion WASM.

## References

- [Superseding delivery plan](../../plans/nook-pilot-authentication-control-plane/2026-08-24T14-59-55Z-contextual-hud-multi-pr-sequence.md)
- [Nook PR #1087](https://github.com/meta-secret/nook/pull/1087)

