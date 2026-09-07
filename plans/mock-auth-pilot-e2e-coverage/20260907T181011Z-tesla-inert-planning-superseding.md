---
title: Tesla inert email authentication planning superseding plan
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-07T18:10:11Z
agent: codex
gizmo_id: tesla-auth-simulation
supersedes: 20260907T172137Z-tesla-auth-simulation.md
---

# Task plan

## Interpreted request

Deliver a faithful simulation of Tesla's signed-out email-first authentication page through one isolated Nook pull request, using Firefox only for read-only observation and fake credentials only in deterministic local-provider tests. Complete review, exact-head hosted validation, squash merge, remote verification, and Workbench closeout.

This plan supersedes the initial 1,150-line estimate after exact DOM reproduction established that Tesla's sole Next submit is initially disabled. That stable state requires a distinct Core-owned planning rule: Nook may recognize the page before fake input while direct actuation remains forbidden until a refreshed observation proves the control actionable.

## Requirements

- Model the stable `auth.tesla.com` signed-out surface reached from the Account link on `https://www.tesla.com/`.
- Reproduce the observed `Sign In` heading, one Email field with `name="identity"` and `autocomplete="email webauthn"`, disabled-until-input `Next` submit, Trouble Signing In link, Create Account button, language control, and footer links.
- Preserve the observed form's omitted `method` and omitted `action`; do not synthesize authored destination evidence.
- Define only the smallest portable Core-owned authentication evidence or policy needed to recognize the observed email-plus-WebAuthn identifier step without admitting generic email GET forms.
- Permit planning from the exact inert Tesla-shaped identifier step only through existing destination, ownership, form, label, count, and hostile-context policy; keep direct activation false until input produces a new actionable observation.
- Keep provider, recovery, signup, destructive, cross-origin, ambiguous, unowned, passwordless-ceremony, and unsafe destination cases fail closed.
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
- Do not weaken direct actuation safety for inert controls; the initial observation is planning evidence only and a refreshed actionable observation remains mandatory before activation.
- Do not change storage, cryptography, vault behavior, dependencies, unrelated provider fixtures, or CI architecture.
- Generated WASM JavaScript remains hosted output and is not checked in.
- Avoid local Rust/WASM/product builds; use focused static checks and repository-hosted validation.
- One PR remains the simplest complete design; stacked PRs are prohibited.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: tesla-auth-simulation
- Estimated authored changed lines: 1600
- Owning modules, packages, or layers: companion Core field evidence, authentication-page planning, and final authentication-advance policy; typed WASM behavior tests; Web Tesla fixture, flow, DOM simulation, catalog, UI demo, and intercepted extension scenario.
- Ownership units:
1. Capability: Portable Tesla identifier-step authority; Gizmo ID: tesla-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: email plus WebAuthn evidence is admitted only within the exact safe owned single-submit default-GET structure, while generic email and every hostile variant remain rejected.
2. Capability: Exact inert-to-actionable Tesla planning boundary; Gizmo ID: tesla-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: the exact initial inert observation can classify the page through existing policy, direct activation remains false, and only a refreshed actionable observation can become safe.
3. Capability: Exact Tesla DOM and browser simulation; Gizmo ID: tesla-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Firefox-observed stable attributes are reproduced, Next is enabled only by fake local input and is the only activated control, and every Tesla request is intercepted.
4. Capability: Trust-boundary review; Gizmo ID: tesla-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no broad generic-email authority, credential disclosure, hCaptcha interaction, volatile-state dependency, live-provider request, hostname policy, inert-control activation, or weakening of fail-closed vetoes.
- Public or cross-module interfaces: Core refines the existing typed username-evidence contract with a portable `web-authn-email` variant; WASM remains a thin typed bridge.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1600
- Current PR slice and acceptance evidence: Deliver the faithful Tesla simulation and narrow portable authority in one reviewable PR; Acceptance evidence: Core/WASM and Web tests, focused authentication extension E2E, Security PASS, validation, readiness, squash merge, and closeout.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: tesla-auth-simulation; Gizmo name: Tesla email-first authentication simulation; Predecessor Gizmo ID: None; Deliver the faithful Tesla simulation and narrow portable authority in one reviewable PR; Estimated authored changed lines: 1600; Acceptance evidence: Core/WASM and Web tests, focused authentication extension E2E, Security PASS, validation, readiness, squash merge, and closeout.

## Initial plan

1. Development core completes the smallest portable typed distinction for the Firefox-observed `email webauthn` field under omitted-action GET and the exact inert planning exception, with behavior-focused hostile regressions.
2. Web development revalidates the exact initial-disabled-to-enabled transition against the Core contract and performs a simplification pass without removing distinct behavior or security coverage.
3. Security reviews the combined exact-head authority, planning-versus-actuation, credential, hCaptcha, network, and change-budget boundaries.
4. Gizmo adjudicates the 1,500-line review warning: retain one cohesive PR only if each authored section is necessary to cover the newly discovered cross-layer contract; the 2,000-line hard stop remains binding.
5. Gizmo reconciles current `main`, runs pre-push hygiene, and authorizes PR Steward to create and validate the PR.
6. Route any hosted finding to its functional owner, then collect readiness, squash merge, remotely verify, and publish Workbench worklog/statistics.

## Completion evidence

- Core tests prove initial inert planning, refreshed actionable safety, and generic-email, unsafe-destination, ambiguity, unowned, provider, recovery, signup, destructive, passwordless, and non-OAuth negatives.
- Web tests reproduce the stable Firefox-observed Tesla structure and prove only the fake email and refreshed Next path are actuated.
- The Chromium scenario intercepts every Tesla auth request and uses fake credentials only.
- A simplification review documents why the remaining cohesive authored additions cannot be reduced below 1,500 without losing distinct domain, boundary, fixture, or end-to-end evidence.
- Required hosted validation, focused authentication extension E2E, deployment, review disposition, and `task pr:ready` pass on one exact current head.
- Squash merge, remote branch deletion, feature-path blob equivalence, Workbench worklog, and agent statistics are verified.

## Safety review

This plan contains no credentials, private account data, live tokens, cookies, OAuth values, hCaptcha values, generated identifiers, raw logs, or unnecessary provider payloads.
