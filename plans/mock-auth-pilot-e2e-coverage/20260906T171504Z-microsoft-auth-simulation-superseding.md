---
title: Complete Microsoft consumer login authentication coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-06T17:15:04Z
agent: codex
gizmo_id: microsoft-auth-simulation
---

# Task plan

## Interpreted request

Complete a faithful Microsoft consumer authentication simulation after the live structure exposed a portable classification gap: an identifier-only, semantic POST login on the safely authenticated `login.live.com` root has no form or path identity. Preserve the distinct enterprise form and deliver the bounded Rust/WASM plus Web change through one reviewed, validated, and merged pull request.

## Requirements

- Preserve the live consumer POST form, omitted action, `usernameEntry` field without name, `autocomplete="username webauthn"`, semantic Next, and separate recovery/signup/help controls.
- Keep the existing enterprise `loginfmt/i0116` template separately addressable for `login.microsoftonline.com` consumers.
- Add one portable Rust-owned rule for a same-origin Microsoft authentication authority when the form/path identity is absent, with behavior-focused Rust and WASM boundary tests.
- Require exactly one strong or explicit username, one owned semantic POST submit, no actionable password/new-password/OTP fields, no unsafe route or conflicting form/control identity, and no cross-origin destination.
- Add pure flow, DOM simulation, hostile negative, and one focused Chromium extension test with deterministic fake credentials.
- Complete independent Security review, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not contact Microsoft password, MFA, OAuth completion, account creation, or recovery endpoints and do not persist real credentials.
- Do not special-case arbitrary `microsoft.com` content pages or generic root forms; authority must be limited to the existing canonical Microsoft authentication-host set and same-origin submission.
- Do not copy volatile classes, OAuth parameters, flow tokens, canaries, timestamps, or proprietary assets.
- Do not weaken provider, recovery, destructive, password-disclosure, origin, semantic-control, ownership, or live-revalidation vetoes.
- TypeScript collects DOM facts and performs browser actions only; portable policy remains in Rust/WASM.
- Do not run local Rust, WASM, product, or browser builds; use focused checks locally and hosted validation for those boundaries.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: microsoft-auth-simulation
- Estimated authored changed lines: 1000
- Owning modules, packages, or layers: Companion Core authentication-control policy, companion WASM typed boundary, Microsoft consumer mock flow/page, DOM simulation, extension Chromium coverage, fixture routing, and Pilot demo evidence
- Ownership units:
1. Capability: Bounded Microsoft authentication-authority classification; Gizmo ID: microsoft-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Rust and WASM tests admit only the exact same-origin Microsoft authentication authority with strong identifier and owned semantic POST evidence while hostile host, route, form, control, field, method, and origin cases remain rejected
2. Capability: Faithful Microsoft consumer simulation and browser evidence; Gizmo ID: microsoft-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Pure flow, DOM simulation, and one Chromium extension test fill only `usernameEntry`, activate only semantic Next, preserve enterprise coverage, and leave recovery, signup, close, help, and unrelated forms untouched
3. Capability: Independent authentication-boundary acceptance; Gizmo ID: microsoft-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security confirms the authority rule cannot admit arbitrary Microsoft content, cross-origin submission, conflicting identities, secret-bearing forms, provider alternatives, recovery, or destructive controls
- Public or cross-module interfaces: Companion Core and WASM authentication-control observation policy for canonical Microsoft authentication authorities; mock-auth Microsoft consumer route and fixture identity
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1000
- Current PR slice and acceptance evidence: Deliver the bounded Microsoft authority rule and faithful consumer mock; Acceptance evidence: Rust/WASM hostile matrix, pure and DOM simulations, mocked Chromium extension test, preserved enterprise fixture, Security PASS, Pilot evidence when required, exact-head hosted validation, readiness, and merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: microsoft-auth-simulation; Gizmo name: Microsoft consumer authentication simulation; Predecessor Gizmo ID: None; Deliver the bounded Microsoft authority rule and faithful consumer mock; Estimated authored changed lines: 1000; Acceptance evidence: Rust/WASM hostile matrix, pure and DOM simulations, mocked Chromium extension test, preserved enterprise fixture, Security PASS, Pilot evidence when required, exact-head hosted validation, readiness, and merge

## Initial plan

1. Add a narrowly typed Core/WASM authority rule for the exact live consumer structure and prove all negative boundaries.
2. Resume the faithful consumer mock and simulation without synthesizing an authentication path or form identity.
3. Add one Chromium test and any Loom-required demo while keeping enterprise coverage distinct.
4. Run independent Security review, pre-push checks, hosted exact-head validation, readiness, merge, and lifecycle closeout.

## Completion evidence

- Core and WASM tests prove the authority-only admission and its hostile rejection matrix.
- Web simulation and Chromium coverage prove the real consumer identifier flow without touching alternatives or secrets.
- The enterprise template remains independently mapped and covered.
- Repository pre-push and hosted PR matrix pass at the submitted head, followed by readiness and squash merge.

## Safety review

- This plan contains no raw prompt or transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
