---
title: Tesla email authentication simulation
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-07T17:16:00Z
agent: codex
gizmo_id: tesla-auth-simulation
---

# Task plan

## Interpreted request

Deliver a faithful simulation of Tesla's signed-out email-first authentication page through one isolated Nook pull request, using Firefox only for read-only observation and fake credentials only in deterministic local-provider tests. Complete review, exact-head hosted validation, squash merge, remote verification, and Workbench closeout.

## Requirements

- Model the stable `auth.tesla.com` signed-out surface reached from the Account link on `https://www.tesla.com/`.
- Reproduce the observed `Sign In` heading, one Email field with `name="identity"` and `autocomplete="email webauthn"`, disabled-until-input `Next` submit, Trouble Signing In link, Create Account button, language control, and footer links.
- Preserve the observed form's omitted `method` and omitted `action`; do not synthesize authored destination evidence.
- Define only the smallest portable Core-owned authentication evidence or policy needed to recognize the observed email-plus-WebAuthn identifier step without admitting generic email GET forms.
- Keep provider, recovery, signup, destructive, cross-origin, inert, ambiguous, unowned, passwordless-ceremony, and unsafe destination cases fail closed.
- Carry any required typed fact through WASM without placing authentication policy in TypeScript or Svelte.
- Add behavior-focused Core tests plus targeted fixture, flow, exact-origin DOM, catalog, presentation, and simulation tests.
- Add exactly one fully intercepted Chromium extension scenario whose `auth.tesla.com/**` requests are all fulfilled locally and whose fake email activates only Next.
- Ensure the shared scenario registry continues to trigger the focused authentication extension job.
- Keep every authored source file at or below 1,000 lines and the pull request below 2,000 authored additions.

## Constraints and exclusions

- Never enter or submit any credential on Tesla, hCaptcha, or another live provider.
- Do not persist or reproduce OAuth query values, client identifiers, scopes, hCaptcha identifiers, anti-abuse payloads, generated assets, telemetry, cookies, tokens, or localized tracking state.
- Do not add a Tesla hostname exception or move authentication authority into Web code.
- Do not model the password or challenge step because it was not observed without submitting an identifier.
- Do not change storage, cryptography, vault behavior, dependencies, unrelated provider fixtures, or CI architecture.
- Generated WASM JavaScript remains hosted output and is not checked in.
- Avoid local Rust/WASM/product builds; use focused static checks and repository-hosted validation.
- One PR remains the simplest complete design; stacked PRs are prohibited.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: tesla-auth-simulation
- Estimated authored changed lines: 1150
- Owning modules, packages, or layers: companion Core field evidence and authentication-advance policy; typed WASM behavior tests; Web Tesla fixture, flow, DOM simulation, catalog, UI demo, and intercepted extension scenario.
- Ownership units:
1. Capability: Portable Tesla identifier-step authority; Gizmo ID: tesla-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: email plus WebAuthn evidence is admitted only within the exact safe owned single-submit default-GET structure, while generic email and every hostile variant remain rejected.
2. Capability: Exact Tesla DOM and browser simulation; Gizmo ID: tesla-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Firefox-observed stable attributes are reproduced, Next is enabled only by fake local input and is the only activated control, and every Tesla request is intercepted.
3. Capability: Trust-boundary review; Gizmo ID: tesla-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no broad generic-email authority, credential disclosure, hCaptcha interaction, volatile-state dependency, live-provider request, hostname policy, or weakening of fail-closed vetoes.
- Public or cross-module interfaces: Core may refine the existing typed username-evidence contract only when necessary to represent the stable `email webauthn` signal; WASM remains a thin typed bridge.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1150
- Current PR slice and acceptance evidence: Deliver the faithful Tesla simulation and narrow portable authority in one reviewable PR; Acceptance evidence: Core/WASM and Web tests, focused authentication extension E2E, Security PASS, validation, readiness, squash merge, and closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: tesla-auth-simulation; Gizmo name: Tesla email-first authentication simulation; Predecessor Gizmo ID: None; Deliver the faithful Tesla simulation and narrow portable authority in one reviewable PR; Estimated authored changed lines: 1150; Acceptance evidence: Core/WASM and Web tests, focused authentication extension E2E, Security PASS, validation, readiness, squash merge, and closeout.

## Initial plan

1. Development core determines and implements the smallest portable typed distinction for the Firefox-observed `email webauthn` field under omitted-action GET, with behavior-focused hostile regressions.
2. Web development reproduces the exact owned Tesla form and adds fixture, flow, DOM, catalog, presentation, UI-demo, and fully intercepted Chromium coverage.
3. Security reviews the combined exact-head authority, credential, hCaptcha, and network boundaries.
4. Gizmo reconciles current `main`, runs pre-push hygiene, and authorizes PR Steward to create and validate the PR.
5. Route any hosted finding to its functional owner, then collect readiness, squash merge, remotely verify, and publish Workbench worklog/statistics.

## Completion evidence

- Core tests prove the portable positive and generic-email, unsafe-destination, ambiguity, unowned, provider, recovery, signup, destructive, and inert negatives.
- Web tests reproduce the stable Firefox-observed Tesla structure and prove only the fake email and Next path are actuated.
- The Chromium scenario intercepts every Tesla auth request and uses fake credentials only.
- Required hosted validation, focused authentication extension E2E, deployment, review disposition, and `task pr:ready` pass on one exact current head.
- Squash merge, remote branch deletion, feature-path blob equivalence, Workbench worklog, and agent statistics are verified.

## Safety review

This plan contains no credentials, private account data, live tokens, cookies, OAuth values, hCaptcha values, generated identifiers, raw logs, or unnecessary provider payloads.
