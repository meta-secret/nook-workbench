---
title: "Observe and actuate scoped authentication controls in shared web code"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-24T15:04:00Z
updated_at: 2026-08-25T00:55:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1096"]
depends_on: ["issues/nook-pilot-authentication-control-plane/contextual-hud-rust-wasm-policy.md"]
---

# Observe and actuate scoped authentication controls in shared web code

## Context

The shared browser layer must convert live DOM structure into the bounded Rust
observations from the first slice. It also owns safe, local activation after the
Rust decision, without leaking page semantics into extension presentation code.

Parent feature: [Nook Pilot authentication control plane](README.md).

## Outcome

Shared web utilities detect rendered authentication fields and controls,
preserve form and explicit local-container ownership, reject inert or unrelated
page controls, and submit only the accepted local ceremony control.

## Scope

- Included: password-field and form DOM observation, rendered actionability,
  local scope identity, control selection and submission, generated-test setup,
  focused browser unit tests, and the owning Playwright demo evidence.
- Excluded: Rust semantic policy, extension saved-login lookup, Pilot rendering,
  and extension Playwright journeys.

## Acceptance criteria

- [ ] DOM observations match the typed Rust/WASM interface from the first slice.
- [ ] Hidden, clipped, covered, disabled, recovery, localized, form-less, and
  scoped-submit cases have focused browser regressions.
- [ ] Page actuation cannot escape the accepted form or local container.
- [ ] Generic unowned controls cannot become authentication actions from nearby field evidence.
- [ ] Shared web formatting, type, lint, and focused unit checks pass.
- [ ] The updated Nook Pilot UI demo proves the changed authentication-control
  boundary through the rendered browser contract.

## Progress

- 2026-08-25: Draft PR #1096 is reduced to this slice at exact head
  `33873f1871eb70f4c17f9e7b84c06650613585d2`. Its localized-control regressions preserve the Rust-selected control for
  scoped browser actuation, normalize root submissions to the owning form, and
  reject generic fallback controls. The five owning DOM suites pass 103 of 103 tests against freshly rebuilt companion WASM, including reset-password, OTP resend, scoped localized-control, and unowned-control regressions. The owning demo and Chrome stub carry the required Rust approval field. The extension observation-scheduling test moves to PR #1097 with its implementation.

## Findings and decisions

- DOM geometry and ownership are browser facts; semantic authentication policy
  remains in Rust.
- Generic page-wide grouping stays unowned, while explicit authentication
  containers may provide a local activation boundary.

## References

- [Superseding delivery plan](../../plans/nook-pilot-authentication-control-plane/2026-08-24T14-59-55Z-contextual-hud-multi-pr-sequence.md)
- [Nook PR #1096](https://github.com/meta-secret/nook/pull/1096)
