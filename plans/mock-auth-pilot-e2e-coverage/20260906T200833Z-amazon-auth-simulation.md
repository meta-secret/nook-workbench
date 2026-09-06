---
title: Complete Amazon consumer authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-06T20:08:33Z
agent: codex
gizmo_id: amazon-auth-simulation
---

# Task plan

## Interpreted request

Complete a faithful Amazon consumer authentication simulation for the live `www.amazon.com/ap/signin` identifier step. Replace the stale generic fixture with the observed form, prove that the hidden password autofill hint is excluded, and deliver the bounded test-focused slice through one reviewed, validated, and merged pull request.

## Requirements

- Reproduce the live `ap_login_form` / `signIn` POST to `/ax/claim`, visible `ap_email_login` email field, `autocomplete="webauthn"`, semantic Continue control, hidden `auth-credential-autofill-hint`, hidden metadata, and two unrelated `ue_backdetect` forms.
- Preserve the current production detection contract when the faithful emitted facts already classify safely; add no Amazon-specific exception unless a failing simulation proves it unavoidable.
- Add behavior-focused Rust and WASM regression tests for the exact generic observation and its highest-risk hostile variants.
- Add a Bun-safe pure flow, exact-origin DOM simulation, fixture/catalog coverage, and exactly one fully intercepted Chromium extension test.
- Assert that only the username changes, the hidden password and metadata remain untouched, the owned Continue submits, and empty forms and account/help/legal alternatives are not activated.
- Complete independent Security review, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not contact Amazon authentication, password, passkey, MFA, account-creation, recovery, or purchase endpoints and do not use or persist real credentials.
- Do not add a generic zero-geometry rule: the live password hint is already explicitly excluded by computed `display:none` and `visibility:hidden`.
- Do not make the OpenID navigation query an authority signal or copy volatile values, anti-CSRF tokens, flow identifiers, styling classes, or proprietary assets into the fixture.
- Do not special-case AWS, Amazon Pharmacy, arbitrary Amazon subdomains, or content pages.
- Do not weaken origin, destination, semantic-control, ownership, provider, recovery, destructive, password-disclosure, or live-revalidation vetoes.
- TypeScript observes DOM facts and performs browser actions; portable classification and actuation policy remain in Rust/WASM.
- Do not run local product compilation, Rust/WASM tests, web builds, or browser suites; use focused lightweight checks and hosted exact-head validation.

- Navigation: HTTPS `www.amazon.com/ap/signin` with an OpenID query reached from the Amazon home-page sign-in link.
- Primary form: `id=ap_login_form`, `name=signIn`, `method=post`, action path `/ax/claim`.
- Username: `id=ap_email_login`, `name=email`, `type=email`, `autocomplete=webauthn`, ARIA label `Enter mobile number or email`, rendered 294 by 32 pixels.
- Password hint: `id=auth-credential-autofill-hint`, `name=password`, `type=password`, class includes `aok-hidden`, computed `display:none`, `visibility:hidden`, zero geometry, and no client rectangles.
- Submission: one visible submit with accessible name Continue, owned by the primary form.
- Decoys: two empty `name=ue_backdetect` forms and account/help/legal links outside the primary submission.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: amazon-auth-simulation
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: existing Core and WASM authentication regression tests; Amazon fixture, page, pure flow, DOM simulation, catalog mapping, and one focused Chromium extension spec.
- Ownership units:
1. Capability: Portable regression coverage; Gizmo ID: amazon-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact Amazon observation passes while hostile ownership, method, destination, control, field-count, provider, recovery, passkey, and destructive variants fail.
2. Capability: Faithful browser simulation; Gizmo ID: amazon-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: hidden password and metadata remain unchanged, only email fills, exact Continue submits, decoy forms and alternatives remain untouched, and no live Amazon traffic occurs.
3. Capability: Trust-boundary review; Gizmo ID: amazon-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no credential disclosure, authority broadening, live-provider dependency, or bypass of existing vetoes.
- Public or cross-module interfaces: existing Rust authentication observation/classification and WASM boolean boundaries; no new public API expected.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Faithfully reproduce the observed Amazon identifier step and prove existing production behavior excludes the hidden password hint; Acceptance evidence: exact Core/WASM positive and hostile regression tests, pure flow, DOM simulation, mapping checks, one fully intercepted Chromium test, Security PASS, hosted exact-head validation, readiness, and squash merge.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: amazon-auth-simulation; Gizmo name: Amazon consumer authentication simulation; Predecessor Gizmo ID: None; Faithfully reproduce the observed Amazon identifier step and prove existing production behavior excludes the hidden password hint; Estimated authored changed lines: 650; Acceptance evidence: exact Core/WASM positive and hostile regression tests, pure flow, DOM simulation, mapping checks, one fully intercepted Chromium test, Security PASS, hosted exact-head validation, readiness, and squash merge.

## Initial plan

1. Development Core adds narrow regression tests without production behavior changes unless the faithful observation fails.
2. Web Development replaces the stale Amazon simulation and adds pure, DOM, mapping, and intercepted Chromium coverage.
3. Security reviews the complete exact-head diff; findings return to their owning team.
4. Gizmo runs pre-push hygiene, pushes the coherent branch, and PR Steward creates and validates the PR.
5. Complete hosted exact-head Core/WASM/Web/Chromium proof, readiness, squash merge, remote verification, statistics, and worklog publication.

## Completion evidence

- Existing production classification and actuation behavior is proven against the faithful Amazon observation without an Amazon-specific exception.
- The hidden password hint is excluded and remains unmodified in DOM and Chromium execution.
- Catalog, pure flow, DOM, Rust, WASM, and fully intercepted Chromium tests pass on the exact submitted head.
- Security review, repository policy, hosted PR validation, deployment, readiness, squash merge, remote verification, statistics, and worklog publication complete successfully.

## Safety review

This plan contains no raw prompt or transcript, credentials, account data, live tokens, private identifiers, raw logs, or local paths.
