---
title: Complete LinkedIn consumer authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-06T22:15:31Z
agent: codex
gizmo_id: linkedin-auth-simulation
---

# Task plan

## Interpreted request

Complete a faithful LinkedIn consumer authentication simulation for the signed-out `www.linkedin.com/login/` page. Replace the stale conventional-form fixture with the observed form-less, button-driven combined credential surface and deliver the bounded test-focused slice through one reviewed, validated, and merged pull request.

## Requirements

- Reproduce the live combined surface: visible Email or phone and Password fields, `autocomplete="username"` and `autocomplete="current-password"`, semantic Sign in button with `type="button"`, Show password, checked Keep me signed in, Forgot password, Sign in with Apple, Join now, legal links, and responsive duplicate markup where only one credential surface is visible.
- Model the observed absence of an HTML form, submit method, form action, stable input names, and stable input IDs. Do not invent legacy `session_key` or `session_password` ownership evidence.
- Preserve current production detection and actuation policy when faithful emitted facts already classify safely; change portable Rust/WASM behavior only if a failing exact simulation proves it unavoidable.
- Add behavior-focused Rust and WASM regression tests for the exact combined observation and its highest-risk hostile variants.
- Add a Bun-safe pure flow, exact-origin DOM simulation, fixture/catalog coverage, and exactly one fully intercepted Chromium extension test.
- Keep the authentication-sensitive entry spec below the 1,000-line limit by extracting cohesive provider scenarios or helpers without weakening the existing suite or changing its hosted entrypoint.
- Assert that only the visible username and password change, the hidden responsive duplicate remains untouched, the visible Sign in control activates, and Apple, recovery, signup, legal, visibility-toggle, and remember-me alternatives are not activated.
- Complete independent Security review, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not submit to LinkedIn authentication, Apple authentication, password recovery, signup, tracking, or account endpoints and do not use or persist real credentials.
- Do not copy volatile generated IDs, component keys, tracking identifiers, cookies, rehydration payloads, anti-abuse values, styling hashes, or proprietary assets into the fixture.
- Do not treat page text, hostname alone, hidden responsive duplicates, recovery links, alternative-provider controls, or remembered-session state as sufficient authentication authority.
- Do not special-case LinkedIn Learning, Recruiter, Sales Navigator, arbitrary LinkedIn subdomains, or content pages without separate observed evidence.
- Do not weaken origin, destination, semantic-control, ownership, provider, recovery, destructive, password-disclosure, visibility, or live-revalidation vetoes.
- TypeScript observes DOM facts and performs browser actions; portable classification and actuation policy remain in Rust/WASM.
- Do not run local product compilation, Rust/WASM tests, web builds, or browser suites; use focused lightweight checks and hosted exact-head validation.

- Navigation: HTTPS `www.linkedin.com/login/` rendered the signed-out consumer page.
- Credential controls: one accessible visible email input labeled Email or phone with `type=email` and `autocomplete=username`; one accessible visible password input labeled Password with `type=password` and `autocomplete=current-password`.
- Activation: a visible semantic Sign in control implemented as `button type=button`; Enter-key handling and the button dispatch an internal server request rather than submitting an HTML form.
- Alternatives: Sign in with Apple, Forgot password, Join now, Show password, checked Keep me signed in, and legal/help/language controls.
- Responsive duplication: the server-rendered document contains two generated credential trees with volatile IDs, while browser accessibility exposes one visible credential surface.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: linkedin-auth-simulation
- Estimated authored changed lines: 700
- Owning modules, packages, or layers: existing Core and WASM authentication regression tests; LinkedIn fixture, page, pure flow, DOM simulation, catalog mapping, cohesive authentication E2E scenario extraction, and one focused Chromium extension scenario.
- Ownership units:
1. Capability: Portable regression coverage; Gizmo ID: linkedin-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: the exact form-less combined LinkedIn observation passes while hostile hidden-surface, cross-origin, unsafe-control, provider, recovery, signup, destructive, and ambiguous-root variants fail.
2. Capability: Faithful browser simulation; Gizmo ID: linkedin-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: the visible username and password fill, the visible Sign in control activates, the hidden duplicate and all alternatives remain untouched, every LinkedIn request is intercepted, and the authentication-sensitive entry spec remains within the source limit.
3. Capability: Trust-boundary review; Gizmo ID: linkedin-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no credential disclosure, hidden-responsive ambiguity, authority broadening, live-provider dependency, or bypass of existing vetoes.
- Public or cross-module interfaces: existing Rust authentication observation/classification and typed WASM boolean boundaries; no new public API expected.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 700
- Current PR slice and acceptance evidence: Faithfully reproduce the observed form-less LinkedIn combined login and prove existing portable policy safely identifies and actuates only the visible credential surface; Acceptance evidence: exact Core/WASM positive and hostile regression tests, pure flow, DOM simulation, mapping checks, one fully intercepted Chromium scenario, Security PASS, hosted exact-head validation, readiness, and squash merge.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: linkedin-auth-simulation; Gizmo name: LinkedIn consumer authentication simulation; Predecessor Gizmo ID: None; Faithfully reproduce the observed form-less LinkedIn combined login and prove existing portable policy safely identifies and actuates only the visible credential surface; Estimated authored changed lines: 700; Acceptance evidence: exact Core/WASM positive and hostile regression tests, pure flow, DOM simulation, mapping checks, one fully intercepted Chromium scenario, Security PASS, hosted exact-head validation, readiness, and squash merge.

## Initial plan

1. Development Core adds narrow regression tests and changes no production behavior unless the faithful form-less observation demonstrates a portable gap.
2. Web Development replaces the stale LinkedIn simulation, extracts cohesive E2E scenario code to preserve source limits, and adds pure, DOM, catalog, and fully intercepted Chromium coverage.
3. Security reviews the complete exact-head diff; findings return to their owning team.
4. Gizmo runs pre-push hygiene, pushes the coherent branch, and authorizes PR Steward to create and validate the PR.
5. Complete hosted exact-head Core/WASM/Web/Chromium proof, readiness, squash merge, remote verification, statistics, and worklog publication.

## Completion evidence

- Existing production classification and actuation behavior is proven against the faithful form-less LinkedIn observation, or the smallest necessary portable correction is behavior-tested.
- The hidden responsive duplicate and non-login alternatives remain unmodified and unactivated.
- Catalog, pure flow, DOM, Rust, WASM, and fully intercepted Chromium tests pass on the exact submitted head.
- Every authored source file remains at or below 1,000 lines and total authored additions remain below 2,000.
- Security review, repository policy, hosted PR validation, deployment, readiness, squash merge, remote verification, statistics, and worklog publication complete successfully.

## Safety review

This plan contains no raw prompt or transcript, credentials, account data, live tokens, private identifiers, raw logs, local paths, internal infrastructure addresses, or unnecessary provider payload details.
