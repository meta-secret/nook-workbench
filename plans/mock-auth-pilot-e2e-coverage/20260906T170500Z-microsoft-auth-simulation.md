---
title: Add faithful Microsoft consumer login authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-06T17:05:00Z
agent: codex
gizmo_id: microsoft-auth-simulation
---

# Task plan

## Interpreted request

Model the currently observed signed-out Microsoft consumer identifier step closely enough to protect Nook's login detection and credential filling behavior, preserve the distinct enterprise form already covered, and deliver the bounded change through one reviewed, validated, and merged pull request.

## Requirements

- Reproduce the stable consumer structure at `https://login.live.com/` rather than replacing it with the older enterprise `loginfmt/i0116` shape.
- Preserve the active empty-identity POST form with omitted action, visible `type=email` field `id=usernameEntry`, absent field name and placeholder, `autocomplete="username webauthn"`, and visible `Email or phone number` label.
- Preserve the semantic Next submit button and keep close, username recovery, account creation, help, terms, privacy, and private-browsing guidance outside the selected credential action.
- Add behavior-focused pure flow and DOM simulation coverage plus one focused mocked extension Playwright case.
- Use deterministic fake credentials and no real Microsoft account, secret, or completed external authentication request.
- Keep the existing Microsoft enterprise structure available for `login.microsoftonline.com` consumers.
- Complete pre-push hygiene, exact-head hosted validation, review, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not contact Microsoft password, MFA, OAuth completion, account creation, or recovery endpoints and do not persist real credentials.
- Do not copy volatile generated classes, OAuth parameters, flow tokens, canaries, timestamps, or proprietary assets from the live page.
- Do not weaken semantic-control, provider, origin, password-disclosure, or live-revalidation policy.
- Do not change Rust or WASM production behavior unless faithful tests expose a genuine portable-domain defect.
- Keep the provider addition narrow and avoid a compatibility or fallback layer.
- Do not run local Rust, WASM, product, or browser builds; use focused fast checks locally and repository-hosted validation for those boundaries.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: microsoft-auth-simulation
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Microsoft consumer mock page and flow, web authentication DOM simulation, extension mocked browser coverage, fixture routing, and Pilot demo evidence
- Ownership units:
1. Capability: Faithful Microsoft consumer authentication simulation and browser evidence; Gizmo ID: microsoft-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: The consumer identifier form is detected and filled while recovery, signup, close, help, and enterprise-provider structures remain distinct and untouched; focused flow and DOM tests pass; one mocked extension case reaches deterministic local evidence; Pilot evidence is registered when required; and hosted exact-head validation passes
- Public or cross-module interfaces: Mock-auth Microsoft consumer route and fixture identity; no production interface change planned
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Deliver the faithful Microsoft consumer mock and detection evidence; Acceptance evidence: focused unit tests, mocked extension Playwright, preserved enterprise fixture coverage, Pilot evidence when required, hosted exact-head validation, review, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: microsoft-auth-simulation; Gizmo name: Microsoft consumer authentication simulation; Predecessor Gizmo ID: None; Deliver the faithful Microsoft consumer mock and detection evidence; Estimated authored changed lines: 650; Acceptance evidence: focused unit tests, mocked extension Playwright, preserved enterprise fixture coverage, Pilot evidence when required, hosted exact-head validation, review, and readiness

## Initial plan

1. Reduce the live signed-out Microsoft consumer structure to stable semantic controls and visibility relationships without volatile page data.
2. Implement a provider-specific local consumer mock while keeping the enterprise template separately addressable.
3. Add focused flow and DOM simulations plus one mocked extension browser test proving identifier filling and alternative-control preservation.
4. Run allowed local checks, inspect the whole diff and authored size, then deliver exact-head hosted validation, review, merge, and lifecycle records.

## Completion evidence

- Tests prove only the visible Microsoft consumer identifier receives the fake username and recovery, signup, close, help, and enterprise-only fields remain untouched.
- The focused browser test reaches deterministic local evidence through the real extension flow without relying on a live Microsoft account or network response.
- Repository pre-push and the hosted PR matrix pass at the submitted head.
- The pull request is squash-merged and linked from an immutable worklog.

## Safety review

- This plan contains no raw prompt or transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
