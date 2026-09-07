---
title: Add Booking.com email-first authentication simulation
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-07T10:47:17Z
agent: codex
gizmo_id: booking-auth-simulation
---

# Task plan

## Interpreted request

Observe Booking.com's signed-out authentication page in Firefox and deliver one faithful, deterministic authentication simulation PR through review, exact-head hosted validation, squash merge, remote verification, and Workbench closeout.

## Requirements

- Reproduce the stable `https://account.booking.com/sign-in` email-first surface observed in Firefox: `Sign in or create an account`, one Email address field, and Continue with email.
- Keep Google, Apple, Facebook, Recover your account, disclosures, help, and language controls separate from the owned email continuation and prove they remain untouched.
- Replace only the stale `booking` research mapping with a captured Booking fixture; leave `booking-affiliate` unchanged because its distinct route was not observed.
- Reuse existing portable Core/WASM email-first policy unless implementation evidence proves a genuinely new generic contract is required.
- Cover the Booking fixture, pure flow, exact-origin DOM behavior, catalog expectation, UI-demo contract, and exactly one fully intercepted Chromium provider scenario.
- Use fake credentials only and intercept every `https://account.booking.com/**` request in the browser scenario.
- Keep every authored source file at or below 1,000 lines and the PR below 2,000 authored additions.
- Complete Security review, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not enter or submit credentials to Booking.com or any social provider.
- Do not persist cookies, tokens, OAuth state, generated identifiers, tracking data, localized affiliate parameters, artwork, or personalized content.
- Do not invent a password step, HTML form boundary, method, action, input name, input type, or autocomplete value that Firefox did not expose. Encode absent or unobservable attributes conservatively and test the resulting fail-closed behavior where applicable.
- Do not add Booking hostname exceptions or authentication business policy to TypeScript/Svelte.
- Do not change the separate `booking-affiliate` fixture.
- Generated WASM JavaScript remains a hosted artifact and is not checked into the repository.
- Do not run local product compilation, Rust/WASM tests, Web builds, or browser suites; focused lightweight checks and hosted validation provide execution evidence.
- One PR is the simplest complete design; stacked PRs are prohibited.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: booking-auth-simulation
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Web mock-auth fixture catalog, Booking page and typed flow, DOM simulations, UI demo, and extension provider scenario.
- Ownership units:
1. Capability: Booking.com fixture and deterministic authentication simulation; Gizmo ID: booking-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-origin fixture and flow tests plus one fully intercepted Chromium scenario that fills only email and activates only Continue with email.
2. Capability: Trust-boundary review; Gizmo ID: booking-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no credential disclosure, provider actuation, volatile-state dependency, live-provider request, hostname policy, or weakened fail-closed veto.
- Public or cross-module interfaces: None expected; existing typed authentication observation and continuation contracts are reused unchanged.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Deliver the faithful Booking.com email-first simulation and targeted Web/browser coverage; Acceptance evidence: Web simulation tests, one intercepted browser scenario, Security PASS, exact-head validation, readiness, merge, and Workbench closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: booking-auth-simulation; Gizmo name: Booking.com authentication simulation; Predecessor Gizmo ID: None; Deliver the faithful Booking.com email-first simulation and targeted Web/browser coverage; Estimated authored changed lines: 650; Acceptance evidence: Web simulation tests, one intercepted browser scenario, Security PASS, exact-head validation, readiness, merge, and Workbench closeout.

## Initial plan

1. Preserve the read-only Firefox observation and exclude volatile provider state.
2. Add the smallest Web-owned Booking fixture, typed flow, exact-origin page simulation, catalog expectation, UI demo, and intercepted provider scenario.
3. Run focused lightweight checks, review the exact implementation with Security, and publish the coherent branch.
4. Run repository-owned hosted validation and review, repair any exact finding through its functional owner, collect readiness evidence, squash merge, remotely verify, and publish the Workbench worklog and statistics.

## Completion evidence

- Booking.com is detected as an email-first authentication page without inventing a password step.
- Tests prove only the email field changes and only Continue with email activates; provider, recovery, disclosure, help, and language controls remain untouched.
- Every Booking request in the single Chromium provider scenario is intercepted and uses fake credentials only.
- Existing Core/WASM authority remains unchanged unless a separately reviewed generic dependency is proven necessary.
- All applicable exact-head checks, deployment policy, review dispositions, and `task pr:ready` pass.
- The PR remains below 2,000 authored additions and every authored source file remains at or below 1,000 lines.
- Squash merge, remote path equivalence, Workbench worklog, and agent statistics are verified.

## Safety review

This plan contains no credentials, private account data, live tokens, cookies, generated identifiers, raw logs, local paths, or unnecessary provider payloads.
