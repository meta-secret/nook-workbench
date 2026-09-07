---
title: Complete Booking.com authentication through safe default-GET authority
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-07T11:38:01Z
agent: codex
gizmo_id: booking-auth-simulation
---

# Superseding task plan

This immutable plan supersedes the measured-scope Booking.com plan after hosted DOM execution and exact Firefox Inspector evidence proved a generic portable dependency: Booking's owned identifier form omits both method and action, so the browser resolves a same-page GET while Core currently admits identifier-only GET only with an explicitly authored destination. Earlier plans remain historical evidence.

## Interpreted request

Deliver a faithful Booking.com signed-out authentication simulation that detects and safely advances the exact Firefox-observed email-first form, including the smallest portable Core policy needed for its default browser submission semantics, through review, exact-head validation, squash merge, remote verification, and Workbench closeout.

## Requirements

- Model `https://account.booking.com/sign-in` as one owned form containing `input type=email name=username autocomplete="username webauthn"` and `button type=submit` labeled Continue with email.
- Preserve the observed omitted form method, omitted form action, and absent submitter `formaction`; do not synthesize authored destination data.
- Define a narrow Core-owned rule for an owned identifier-only semantic submit whose omitted method/action resolve to the exact observed same-origin current-page GET.
- Keep authored unsafe/cross-origin destinations, multiple semantic submits, unowned controls, provider/recovery/destructive routes, and other ambiguity fail closed.
- Keep Google, Apple, Facebook, Recover your account, disclosures, help, and language controls non-actionable and prove they remain untouched even though the links share the form container.
- Carry the existing typed authored-versus-omitted destination-source fact through WASM unchanged; add portable Core/WASM behavior tests without adding provider hostname policy.
- Cover fixture, typed flow, exact-origin DOM, catalog, fixture matrix, UI demo, and exactly one fully intercepted Chromium Booking scenario using fake credentials only.
- Keep every authored source file at or below 1,000 lines and the PR below 2,000 authored additions.
- Complete Security review, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Never enter or submit credentials to Booking.com or any social provider; intercept every `https://account.booking.com/**` request in the browser test.
- Do not persist cookies, tokens, OAuth state, generated identifiers, tracking data, localized affiliate parameters, artwork, or personalized content.
- Do not add Booking hostname exceptions or authentication business policy to TypeScript/Svelte.
- Do not change `booking-affiliate`, workflows, dependencies, storage, cryptography, vault behavior, or unrelated provider fixtures.
- The portable exception must be structural and exact; it must not treat every omitted destination, every GET, or every identifier-only page as safe.
- Generated WASM JavaScript remains a hosted artifact and is not checked into the repository.
- Do not run local product compilation, Rust/WASM tests, Web builds, or browser suites; focused lightweight checks and hosted validation provide execution evidence.
- One PR remains the simplest complete design; stacked PRs are prohibited.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: booking-auth-simulation
- Estimated authored changed lines: 1100
- Owning modules, packages, or layers: companion Core authentication-advance policy and inline tests; typed WASM behavior tests; Web Booking fixture, page, flow, DOM simulation, fixture matrix, UI demo, and extension provider scenario.
- Ownership units:
1. Capability: Portable default-GET authentication authority; Gizmo ID: booking-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: owned identifier-only omitted-action default GET is admitted only for exact same-origin current-page resolution, while unsafe, ambiguous, unowned, provider, recovery, destructive, and cross-origin cases remain rejected in Core and typed-WASM tests.
2. Capability: Exact Booking.com DOM and browser simulation; Gizmo ID: booking-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Firefox-observed form attributes are reproduced; only email changes and Continue with email activates; alternatives remain untouched; every Booking request is intercepted.
3. Capability: Trust-boundary review; Gizmo ID: booking-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no broad omitted-destination authority, credential disclosure, provider actuation, volatile-state dependency, live-provider request, hostname policy, or bypass of fail-closed vetoes.
- Public or cross-module interfaces: No new public type; existing `PageControlSubmissionDestinationSource` authored/omitted evidence is reused. Core policy gains a narrow structural decision for exact same-page browser-default GET resolution, transported through the existing typed WASM boundary.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1100
- Current PR slice and acceptance evidence: Deliver faithful Booking.com authentication simulation plus narrow portable default-GET authority; Acceptance evidence: Core/WASM policy tests, Web simulation tests, one intercepted browser scenario, Security PASS, exact-head validation, readiness, merge, and Workbench closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: booking-auth-simulation; Gizmo name: Booking.com authentication and default-GET authority; Predecessor Gizmo ID: None; Deliver faithful Booking.com authentication simulation plus narrow portable default-GET authority; Estimated authored changed lines: 1100; Acceptance evidence: Core/WASM policy tests, Web simulation tests, one intercepted browser scenario, Security PASS, exact-head validation, readiness, merge, and Workbench closeout.

## Initial plan

1. Add the smallest Core-owned structural rule and inline regressions for the exact browser-default GET case; extend typed-WASM coverage without changing its public evidence types.
2. Align the Booking fixture and Web tests to the exact Firefox-observed owned form, method/action omission, and same-form provider/recovery links.
3. Reconcile current `main`, obtain combined exact-head Security review, run pre-push hygiene, and publish the repaired branch.
4. Refresh PR metadata and repeat complete hosted validation/review; route any exact finding to its owner.
5. Collect readiness evidence, squash merge, remotely verify, and publish Workbench worklog/statistics.

## Completion evidence

- Core and typed-WASM tests prove the narrow owned identifier-only default-GET rule and every relevant fail-closed boundary.
- Web tests reproduce the exact Firefox Inspector structure and prove only email/Continue with email are actuated.
- The single Chromium scenario intercepts all Booking traffic and uses fake credentials only.
- All applicable exact-head checks, deployment policy, review dispositions, and `task pr:ready` pass.
- The final PR remains below 2,000 authored additions and every authored source file remains at or below 1,000 lines.
- Squash merge, remote path equivalence, Workbench worklog, and agent statistics are verified.

## Safety review

This plan contains no credentials, private account data, live tokens, cookies, generated identifiers, raw logs, local paths, or unnecessary provider payloads.
