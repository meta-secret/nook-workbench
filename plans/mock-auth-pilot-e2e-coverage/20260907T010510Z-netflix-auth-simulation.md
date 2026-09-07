---
title: Complete Netflix consumer authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-07T01:05:10Z
agent: codex
gizmo_id: netflix-auth-simulation
---

# Task plan

## Interpreted request

Complete a faithful Netflix consumer authentication simulation for the current signed-out `www.netflix.com/login` experience. Replace the generic email/password approximation with the observed combined credential form and deliver the bounded test-focused slice through one reviewed, validated, and merged pull request.

## Requirements

- Reproduce the observed visible surface: `Enter your info to sign in`, `Or get started with a new account.`, Email or mobile number, Password, semantic Continue, Get Help, reCAPTCHA disclosure text, and footer/help/language controls.
- Model one visible POST form with no authored action, `userLoginId` text input using `autocomplete="email"`, `password` password input using `autocomplete="password"`, a submit-type Continue button, and a button-type Get Help control.
- Do not copy the volatile `serverState` query, generated element IDs, styling hashes, rehydration payloads, tracking data, locale-specific telephone data, or anti-abuse values into the fixture.
- Preserve current production detection and actuation policy when the faithful emitted facts already classify safely; change portable Rust/WASM behavior only if a failing exact simulation proves a generic correction unavoidable.
- Add behavior-focused Rust and typed-WASM regression tests for the exact combined observation and its highest-risk hostile variants.
- Add a Bun-safe pure flow, exact-origin DOM simulation, fixture/catalog coverage, and exactly one fully intercepted Chromium extension test.
- Assert that only the visible username and password change, Continue activates, and Get Help, footer links, language selection, and disclosure content remain untouched.
- Keep every authored source file at or below 1,000 lines and the complete pull request below 2,000 authored additions.
- Complete independent Security review, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not submit to Netflix authentication, help, account creation, tracking, reCAPTCHA, telephone, or external footer endpoints and do not use or persist real credentials.
- Do not preserve or simulate the volatile `serverState` query; the stable contract is the HTTPS host and `/login` path.
- Do not treat hostname alone, disclosure text, account-creation copy, help controls, or footer content as authentication authority.
- Do not special-case Netflix content, profile, signup, recovery, or account pages without separate observed evidence.
- Do not weaken origin, destination, semantic-control, ownership, provider, recovery, destructive, password-disclosure, or live-revalidation vetoes.
- TypeScript observes DOM facts and performs browser actions; portable classification and actuation policy remain in Rust/WASM.
- Do not run local product compilation, Rust/WASM tests, web builds, or browser suites; use focused lightweight checks and hosted exact-head validation.

- Navigation: HTTPS `www.netflix.com/login` redirected to the same path with a volatile `serverState` query and rendered the signed-out consumer page.
- Credential controls: one visible text input labeled Email or mobile number with `name="userLoginId"` and `autocomplete="email"`; one visible password input labeled Password with `name="password"` and `autocomplete="password"`.
- Form and activation: one POST form with no authored action; a semantic Continue control implemented as `button type="submit"`; a separate Get Help control implemented as `button type="button"`.
- Alternatives and surrounding content: new-account copy, reCAPTCHA disclosure, telephone/help/legal/shop/privacy links, cookie/privacy controls, and language selection.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: netflix-auth-simulation
- Estimated authored changed lines: 800
- Owning modules, packages, or layers: existing Core and WASM authentication policy regressions; Netflix fixture, page, pure flow, DOM simulation, catalog mapping, one focused Chromium extension scenario, and one UI demo.
- Ownership units:
1. Capability: Portable regression coverage; Gizmo ID: netflix-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: the exact owned POST combined-credential observation passes while cross-origin, GET/dialog, inert, unowned, recovery, provider, destructive, ambiguous-control, and unsafe-destination variants fail.
2. Capability: Faithful browser simulation; Gizmo ID: netflix-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: the visible username and password fill, Continue activates, auxiliary controls remain untouched, every Netflix request is intercepted, and all source files remain within the limit.
3. Capability: Trust-boundary review; Gizmo ID: netflix-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no credential disclosure, authority broadening, volatile-state dependency, live-provider request, or bypass of existing vetoes.
- Public or cross-module interfaces: existing Rust authentication observation/classification and typed WASM boolean boundaries; no new public API expected.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 800
- Current PR slice and acceptance evidence: Faithfully reproduce the observed Netflix combined login and prove existing portable policy safely identifies and actuates only the credential form; Acceptance evidence: exact Core/WASM positive and hostile regressions, pure flow, DOM simulation, mapping checks, one fully intercepted Chromium scenario, Security PASS, hosted exact-head validation, readiness, and squash merge.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: netflix-auth-simulation; Gizmo name: Netflix consumer authentication simulation; Predecessor Gizmo ID: None; Faithfully reproduce the observed Netflix combined login and prove existing portable policy safely identifies and actuates only the credential form; Estimated authored changed lines: 800; Acceptance evidence: exact Core/WASM positive and hostile regressions, pure flow, DOM simulation, mapping checks, one fully intercepted Chromium scenario, Security PASS, hosted exact-head validation, readiness, and squash merge.

## Initial plan

1. Development Core adds exact portable policy regressions and changes no production behavior unless the faithful Netflix observation demonstrates a generic gap.
2. Web Development replaces the generic Netflix simulation and adds pure, DOM, catalog, demo, and fully intercepted Chromium coverage while preserving source limits.
3. Security reviews the complete exact-head diff; findings return to their owning team.
4. Gizmo runs pre-push hygiene, pushes the coherent branch, and authorizes PR Steward to create and validate the PR.
5. Complete hosted exact-head Core/WASM/Web/Chromium proof, readiness, squash merge, remote verification, statistics, and worklog publication.

## Completion evidence

- Existing production classification and actuation behavior is proven against the faithful Netflix observation, or the smallest necessary portable correction is behavior-tested.
- Auxiliary controls and surrounding disclosure/footer content remain unmodified and unactivated.
- Catalog, pure flow, DOM, Rust, WASM, and fully intercepted Chromium tests pass on the exact submitted head.
- Every authored source file remains at or below 1,000 lines and total authored additions remain below 2,000.
- Security review, repository policy, hosted PR validation, deployment, readiness, squash merge, remote verification, statistics, and worklog publication complete successfully.

## Safety review

This plan contains no raw prompt or transcript, credentials, account data, live tokens, volatile query values, generated identifiers, raw logs, local paths, or unnecessary provider payload details.
