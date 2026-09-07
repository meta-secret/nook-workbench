---
title: Booking.com email authentication simulation completion
feature: mock-auth-pilot-e2e-coverage
issue: null
plan: plans/mock-auth-pilot-e2e-coverage/20260907T113801Z-booking-auth-omitted-action-superseding.md
nook_pr: https://github.com/meta-secret/nook/pull/1515
status: completed
started_at: 2026-09-07T10:41:00Z
finished_at: 2026-09-07T17:06:28Z
agent: codex
---

# Work summary

## Outcome

PR #1515 added a faithful simulation of Booking.com's signed-out email-first authentication page, a narrow Core-owned rule for its browser-default same-page GET submission, deterministic DOM and policy coverage, and fully intercepted Chromium extension coverage. It also repaired CI routing so changes to the shared provider-scenario registry require the focused authentication extension suite. The pull request was squash-merged as `33d6c41bb76638540783683651c4ae8ce5c2d430`; remote verification confirmed authorized source head `c194f022ee62e80eab25dc06d462d516afcc7dee`, merge ancestry on `main`, remote branch deletion, and byte-identical content for all 18 delivered paths.

## Progress

- Observed `https://account.booking.com/sign-in` read-only in Firefox and reproduced the stable structure: one form with omitted method and action, `input type="email" name="username" autocomplete="username webauthn"`, Continue with email, and Google, Apple, Facebook, and recovery alternatives.
- Excluded volatile tokens, generated IDs and classes, telemetry, anti-abuse state, assets, cookies, and credentials. No live provider request or credential submission was performed.
- Added a narrow Core rule for an owned identifier-only form whose omitted action and method resolve to the exact same-origin current-page GET. It requires explicit username evidence, zero password/new-password/OTP fields, and exactly one actionable semantic submit.
- Preserved fail-closed behavior for generic email evidence, authored unsafe or cross-origin destinations, provider/recovery/signup/destructive controls, ambiguity, inert controls, and unowned fields.
- Added Core policy, typed-WASM behavior, fixture/catalog, pure-flow, exact-origin DOM, presentation, mock-transition, UI-demo, and fully intercepted extension coverage using fake credentials only.
- Added the shared provider-scenario module to the existing authentication-sensitive CI detector and pinned the route in the manifest contract, ensuring provider additions cannot silently skip focused extension execution.

## Implementation problems

- The first accessibility-only fixture omitted the real form ownership. Firefox Inspector established that Booking's email and primary submit share a form whose method and action are both omitted.
- Hosted execution exposed the portable default-GET authority gap. Core now requires explicit username evidence and exact same-origin resolution, while Claude's generic-email GET remains rejected.
- Moving the narrow policy helper into its owned module initially missed two sibling imports; hosted Rust compilation caught and the import-only repair corrected it.
- Two negative DOM fixtures accidentally modeled valid local auth scopes, then coupled safety to an arbitrary wrapper identity. Hosted Vitest drove them to stable structural assertions: separate ownership, unowned form scope, no detailed advance, no fill, and no submission.
- Ordinary PR validation skipped browser work because the shared scenario module was absent from the focused authentication detector. The detector and its repository contract were corrected in this PR.
- Two full-extension runs passed Booking and both browser shards but failed on the same unrelated passkey-session authenticated-shell timeout. The same signature reproduced on `main`, proving it was not introduced by Booking.
- Rapid unrelated `main` movement required repeated conflict-free reconciliations; every reconciliation preserved all feature-path blobs byte-for-byte.

## Decisions

- Provider identity and labels remain evidence, never authority. Core owns authentication classification and actuation; WASM transports typed facts; Web observes structure and hosts fake simulations.
- Omitted action is not generally safe. The new rule is limited to an owned, identifier-only, explicitly username-marked form with exactly one local semantic submit resolving to the current same-origin GET.
- Social and recovery links may share Booking's form container but remain non-submit alternatives and are never activated.
- One fully intercepted provider scenario is sufficient after portable Core/WASM and deterministic DOM coverage; further fixtures should represent genuinely different executable structures.
- Final scope was 18 files, 1,279 additions and 30 deletions, below the 1,500-line review warning. The 1,100-line plan estimate remained within twenty percent despite the discovered CI-routing contract.

## Validation

- Independent Security review passed final exact head `c194f022ee62e80eab25dc06d462d516afcc7dee` against base `1476eefabb846509f0aae0305f1cbcaa8b093026` with no findings.
- Final standard validation [run 34144998201](https://github.com/meta-secret/nook/actions/runs/34144998201) and policy [run 34144875632](https://github.com/meta-secret/nook/actions/runs/34144875632) succeeded. Native Rust, WASM build and Node tests, Web verification, ecosystem checks, coverage, preview, and deployment all passed.
- The required focused authentication extension job `101817030145` executed 17 tests and passed all 17 in 1m55s, including the Booking provider scenario.
- Web verification passed 85 files and 763 tests; Booking's DOM suite passed 13 tests and the mock-flow matrix passed 376 tests across 52 files.
- FULL_E2E runs `34140322261` and `34142163780` both passed the Booking Chromium scenario and both browser shards. Their only failure was the passkey-session timeout independently reproduced by main run `34141189945`.
- Preview deployment `6313126587` succeeded at `https://pr-1515.nokey-sh.pages.dev/`. `task pr:ready PR=1515` returned `ready: true` with no reasons.
- PR #1515 merged at 2026-09-07T17:06:28Z. All 18 delivered path blobs match between source head and squash commit.

## Remaining work

None for this mission. Future provider fixtures should be added only for genuinely different authentication-page structures; shared scenario-module changes now automatically receive focused extension validation.
