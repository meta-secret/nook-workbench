---
title: Add faithful GitHub login authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-06T04:29:36Z
agent: codex
gizmo_id: github-auth-simulation
---

# Task plan

## Interpreted request

Model the currently observed GitHub sign-in surface closely enough to protect
Nook's login detection and filling behavior, then deliver the bounded change
through one reviewed and validated pull request.

## Requirements

- Reproduce the primary GitHub session form's action, username and password
  controls, input-based submit control, and relevant autocomplete semantics.
- Preserve representative hidden WebAuthn metadata and a hidden honeypot while
  proving they do not become authentication inputs.
- Represent forgot-password, account-creation, passkey, Google, and Apple
  alternatives outside the primary password submission contract.
- Use deterministic fake credentials and no real account, secret, or external
  authentication request.
- Add behavior-focused DOM simulation and pure flow coverage, plus exactly one
  focused mocked extension Playwright case for the browser integration boundary.
- Complete repository pre-push, exact-head hosted validation, review, readiness,
  squash merge, and Workbench closeout.

## Constraints and exclusions

- Do not call GitHub authentication endpoints or store real credentials.
- Do not copy volatile tokens, timestamps, anti-CSRF values, or proprietary
  assets from the live page.
- Do not change Rust or WASM production behavior unless the new tests expose a
  genuine domain defect that cannot be addressed in the test harness.
- Keep this provider-specific addition narrow; do not expand other fixtures or
  create a generic compatibility layer.
- Do not run local Rust, WASM, product, or browser builds; use focused fast tests
  locally and repository-hosted validation for those boundaries.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: github-auth-simulation
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Mock-auth GitHub page and flow, web authentication DOM simulation, extension mocked browser coverage, and Pilot demo evidence
- Ownership units:
1. Capability: Faithful GitHub authentication simulation and browser evidence; Gizmo ID: github-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: The exact primary form is detected and filled while hidden and alternative controls remain untouched, focused flow and DOM tests pass, one mocked extension case reaches deterministic success, Pilot evidence is registered when required, and hosted exact-head validation passes
- Public or cross-module interfaces: Mock-auth route `/github`; no production interface change planned
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Deliver the faithful GitHub mock and detection evidence; Acceptance evidence: focused unit tests, mocked extension Playwright, Pilot evidence when required, hosted exact-head validation, review, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: github-auth-simulation; Gizmo name: GitHub authentication simulation; Predecessor Gizmo ID: None; Deliver the faithful GitHub mock and detection evidence; Estimated authored changed lines: 650; Acceptance evidence: focused unit tests, mocked extension Playwright, Pilot evidence when required, hosted exact-head validation, review, and readiness

## Initial plan

1. Capture and reduce the live signed-out GitHub structure to stable semantic
   controls without volatile values or external assets.
2. Implement the provider-specific mock and deterministic fake success flow.
3. Add focused DOM simulations and one mocked extension browser test proving
   detection, precise filling, submission, and decoy preservation.
4. Run allowed local checks, inspect the whole diff and authored size, then
   deliver exact-head hosted validation, review, merge, and lifecycle records.

## Completion evidence

- Tests prove only the username and password fields receive fake credentials,
  the exact input submit control is used, and hidden/passkey/OAuth/signup
  controls remain outside the fill contract.
- The focused browser test reaches the local deterministic success page through
  the real extension flow.
- Repository pre-push and the full hosted PR matrix pass at the submitted head.
- The pull request is squash-merged and linked from an immutable worklog.

## Safety review

- This plan contains no raw prompt or transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
