---
title: Add faithful X login authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-06T11:55:04Z
agent: codex
gizmo_id: x-auth-simulation
---

# Task plan

## Interpreted request

Model the currently observed signed-out X identifier step closely enough to
protect Nook's login detection and credential filling behavior, then deliver
the bounded change through one reviewed, validated, and merged pull request.

## Requirements

- Reproduce the stable X redirect from `/i/flow/login` to
  `/i/jf/onboarding/web?mode=login` and the active identifier form.
- Preserve the observed `username_or_email` control with
  `autocomplete="username webauthn"`, the hidden same-form password control,
  and the non-submit phone, Google, and Apple alternatives.
- Represent the script-controlled Continue surface without falsely converting
  it into a semantic submit control; prove that Nook fills only the visible
  identifier and does not touch the hidden password or alternatives.
- Add behavior-focused DOM simulation and pure flow coverage, plus one focused
  mocked extension Playwright case for the browser integration boundary.
- Use deterministic fake credentials and no real account, secret, or completed
  external authentication request.
- Complete pre-push hygiene, exact-head hosted validation, review, readiness,
  squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not contact X password, MFA, OAuth, account-creation, or recovery
  endpoints and do not persist real credentials.
- Do not copy volatile generated classes, iframe identifiers, tokens,
  timestamps, or proprietary assets from the live page.
- Do not broaden login automation to arbitrary clickable containers or weaken
  the existing fail-closed advance-control policy.
- Do not change Rust or WASM production behavior unless the new tests expose a
  genuine portable-domain defect.
- Keep the provider addition narrow and avoid a new compatibility or fallback
  layer.
- Do not run local Rust, WASM, product, or browser builds; use focused fast
  checks locally and repository-hosted validation for those boundaries.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: x-auth-simulation
- Estimated authored changed lines: 600
- Owning modules, packages, or layers: Mock-auth X page and flow, web authentication DOM simulation, extension mocked browser coverage, and Pilot demo evidence
- Ownership units:
1. Capability: Faithful X authentication simulation and browser evidence; Gizmo ID: x-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: The active X identifier form is detected and filled while its hidden password and alternative controls remain untouched, focused flow and DOM tests pass, one mocked extension case reaches deterministic local evidence without inventing a submit control, Pilot evidence is registered when required, and hosted exact-head validation passes
- Public or cross-module interfaces: Mock-auth route `/i/flow/login` redirects to `/i/jf/onboarding/web?mode=login`; no production interface change planned
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 600
- Current PR slice and acceptance evidence: Deliver the faithful X mock and detection evidence; Acceptance evidence: focused unit tests, mocked extension Playwright, Pilot evidence when required, hosted exact-head validation, review, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: x-auth-simulation; Gizmo name: X authentication simulation; Predecessor Gizmo ID: None; Deliver the faithful X mock and detection evidence; Estimated authored changed lines: 600; Acceptance evidence: focused unit tests, mocked extension Playwright, Pilot evidence when required, hosted exact-head validation, review, and readiness

## Initial plan

1. Reduce the live signed-out X structure to stable semantic controls and
   visibility relationships without volatile page data.
2. Implement the provider-specific local mock and deterministic fake flow
   without contacting an external authentication endpoint.
3. Add focused flow and DOM simulations plus one mocked extension browser test
   proving visible-identifier filling and hidden-control preservation.
4. Run allowed local checks, inspect the whole diff and authored size, then
   deliver exact-head hosted validation, review, merge, and lifecycle records.

## Completion evidence

- Tests prove only the visible X identifier receives the fake username and the
  hidden password, social alternatives, and phone control remain untouched.
- The focused browser test reaches deterministic local evidence through the
  real extension flow without relying on a live X account or network response.
- Repository pre-push and the hosted PR matrix pass at the submitted head.
- The pull request is squash-merged and linked from an immutable worklog.

## Safety review

- This plan contains no raw prompt or transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
