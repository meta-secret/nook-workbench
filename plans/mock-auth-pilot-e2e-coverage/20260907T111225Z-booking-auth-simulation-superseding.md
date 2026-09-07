---
title: Complete Booking.com authentication coverage at measured scope
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-07T11:12:25Z
agent: codex
gizmo_id: booking-auth-simulation
---

# Superseding task plan

This immutable plan supersedes the initial Booking.com plan after the completed Web implementation measured 895 authored additions rather than the original 650-line estimate. The earlier plan remains historical evidence. The implementation design and one-PR delivery shape are unchanged.

## Interpreted request

Observe Booking.com's signed-out authentication page in Firefox and deliver one faithful, deterministic authentication simulation PR through review, exact-head hosted validation, squash merge, remote verification, and Workbench closeout.

## Requirements

- Reproduce the stable `https://account.booking.com/sign-in` email-first surface observed in Firefox: `Sign in or create an account`, one Email address field, and Continue with email.
- Keep Google, Apple, Facebook, Recover your account, disclosures, help, and language controls separate from the owned email continuation and prove they remain untouched.
- Replace only the stale `booking` research mapping with a captured Booking fixture; leave `booking-affiliate` unchanged.
- Reuse existing portable Core/WASM email-first policy without adding provider-specific production behavior.
- Cover the Booking fixture, typed pure flow, exact-origin DOM behavior, total catalog expectation, UI demo, fixture matrix, and exactly one fully intercepted Chromium provider scenario.
- Use fake credentials only and intercept every `https://account.booking.com/**` request in the browser scenario.
- Keep every authored source file at or below 1,000 lines and the PR below 2,000 authored additions.
- Complete Security review, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not enter or submit credentials to Booking.com or any social provider.
- Do not persist cookies, tokens, OAuth state, generated identifiers, tracking data, localized affiliate parameters, artwork, or personalized content.
- Keep the fixture form-less and omit unobserved method, action, input name, input type, autocomplete, and password facts.
- Do not add Booking hostname exceptions or authentication business policy to TypeScript/Svelte.
- Do not change `booking-affiliate`, Core/WASM/Rust, workflows, dependencies, or unrelated providers.
- Do not run local product compilation, Rust/WASM tests, Web builds, or browser suites; focused lightweight checks and hosted validation provide execution evidence.
- One PR is the simplest complete design; stacked PRs are prohibited.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: booking-auth-simulation
- Estimated authored changed lines: 950
- Owning modules, packages, or layers: Web mock-auth fixture catalog, Booking page and typed flow, DOM simulation, fixture matrix, UI demo, and extension provider scenario.
- Ownership units:
1. Capability: Booking.com fixture and deterministic authentication simulation; Gizmo ID: booking-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-origin fixture and flow tests plus one fully intercepted Chromium scenario that fills only email and activates only Continue with email.
2. Capability: Trust-boundary review; Gizmo ID: booking-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no credential disclosure, provider actuation, volatile-state dependency, live-provider request, hostname policy, or weakened fail-closed veto.
- Public or cross-module interfaces: None; existing typed authentication observation and continuation contracts are reused unchanged.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 950
- Current PR slice and acceptance evidence: Deliver the faithful Booking.com email-first simulation and targeted Web/browser coverage; Acceptance evidence: Web simulation tests, one intercepted browser scenario, Security PASS, exact-head validation, readiness, merge, and Workbench closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: booking-auth-simulation; Gizmo name: Booking.com authentication simulation; Predecessor Gizmo ID: None; Deliver the faithful Booking.com email-first simulation and targeted Web/browser coverage; Estimated authored changed lines: 950; Acceptance evidence: Web simulation tests, one intercepted browser scenario, Security PASS, exact-head validation, readiness, merge, and Workbench closeout.

## Initial plan

1. Preserve the committed 12-file, 895-addition Web implementation and its focused checks.
2. Reconcile the non-overlapping current `origin/main` commits without altering Booking behavior.
3. Obtain exact-head Security review and pre-push hygiene, then publish the coherent branch.
4. Run repository-owned hosted validation and review, repair any exact finding through its functional owner, collect readiness evidence, squash merge, remotely verify, and publish Workbench worklog/statistics.

## Completion evidence

- Booking.com is detected as an email-first authentication page without an invented password step or unobserved form semantics.
- Tests prove only the email field changes and only Continue with email activates; provider, recovery, disclosure, help, and language controls remain untouched.
- Every Booking request in the single Chromium provider scenario is intercepted and uses fake credentials only.
- Existing Core/WASM authority remains unchanged.
- All applicable exact-head checks, deployment policy, review dispositions, and `task pr:ready` pass.
- The final PR remains below 2,000 authored additions and every authored source file remains at or below 1,000 lines.
- Squash merge, remote path equivalence, Workbench worklog, and agent statistics are verified.

## Safety review

This plan contains no credentials, private account data, live tokens, cookies, generated identifiers, raw logs, local paths, or unnecessary provider payloads.
