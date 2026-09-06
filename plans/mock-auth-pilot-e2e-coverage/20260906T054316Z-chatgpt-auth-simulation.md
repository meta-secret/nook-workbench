---
title: Add faithful ChatGPT and OpenAI login authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-06T05:43:16Z
agent: codex
gizmo_id: chatgpt-auth-simulation
---

# Task plan

## Interpreted request

Model the currently observed ChatGPT entry page and its OpenAI authentication
redirect closely enough to protect Nook's login detection and filling behavior,
then deliver the bounded change through one reviewed and validated pull request.

## Requirements

- Reproduce the stable ChatGPT-to-OpenAI identifier-first route and the visible
  OpenAI form's email control, Continue submit, and autocomplete semantics.
- Preserve the separate hidden form ownership used by Google, Apple, and
  Microsoft alternatives, plus the non-submit phone control, while proving
  those controls do not become authentication inputs or accidental submitters.
- Use deterministic fake credentials and no real account, secret, or completed
  external authentication request.
- Add behavior-focused DOM simulation and pure flow coverage where domain-like
  transitions exist, plus exactly one focused mocked extension Playwright case
  for the browser integration boundary.
- Complete repository pre-push, exact-head hosted validation, review, readiness,
  squash merge, and Workbench closeout.

## Constraints and exclusions

- Do not call OpenAI password, MFA, or account-creation endpoints or store real
  credentials.
- Do not copy volatile generated IDs, classes, tokens, timestamps, or
  proprietary assets from the live page.
- Do not change Rust or WASM production behavior unless the new tests expose a
  genuine domain defect that cannot be addressed in the test harness.
- Keep this provider-specific addition narrow; do not expand other fixtures or
  create a generic compatibility layer.
- Do not run local Rust, WASM, product, or browser builds; use focused fast tests
  locally and repository-hosted validation for those boundaries.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: chatgpt-auth-simulation
- Estimated authored changed lines: 700
- Owning modules, packages, or layers: Mock-auth ChatGPT and OpenAI page and flow, web authentication DOM simulation, extension mocked browser coverage, and Pilot demo evidence
- Ownership units:
1. Capability: Faithful ChatGPT and OpenAI authentication simulation and browser evidence; Gizmo ID: chatgpt-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: The exact identifier-first form is detected and filled while hidden and alternative controls remain untouched, focused flow and DOM tests pass, one mocked extension case reaches deterministic success, Pilot evidence is registered when required, and hosted exact-head validation passes
- Public or cross-module interfaces: Mock-auth route `/auth/login` redirects to provider route `/log-in-or-create-account`; no production interface change planned
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 700
- Current PR slice and acceptance evidence: Deliver the faithful ChatGPT and OpenAI mock and detection evidence; Acceptance evidence: focused unit tests, mocked extension Playwright, Pilot evidence when required, hosted exact-head validation, review, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: chatgpt-auth-simulation; Gizmo name: ChatGPT and OpenAI authentication simulation; Predecessor Gizmo ID: None; Deliver the faithful ChatGPT and OpenAI mock and detection evidence; Estimated authored changed lines: 700; Acceptance evidence: focused unit tests, mocked extension Playwright, Pilot evidence when required, hosted exact-head validation, review, and readiness

## Initial plan

1. Capture and reduce the live signed-out ChatGPT and redirected OpenAI
   structures to stable semantic controls without volatile values or assets.
2. Implement the provider-specific identifier-first mock and deterministic fake
   transition without contacting an external authentication endpoint.
3. Add focused DOM simulations and one mocked extension browser test proving
   detection, precise filling, exact submission, and alternative preservation.
4. Run allowed local checks, inspect the whole diff and authored size, then
   deliver exact-head hosted validation, review, merge, and lifecycle records.

## Completion evidence

- Tests prove only the email field receives the fake username, the exact
  Continue control advances the local mock, and hidden social and phone
  alternatives remain outside the fill and submission contract.
- The focused browser test reaches the local deterministic next-step evidence
  through the real extension flow.
- Repository pre-push and the full hosted PR matrix pass at the submitted head.
- The pull request is squash-merged and linked from an immutable worklog.

## Safety review

- This plan contains no raw prompt or transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
