---
title: Stripe email-password authentication simulation plan
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-08T00:25:48Z
agent: codex
gizmo_id: stripe-auth-simulation
---

# Task plan

## Interpreted request

Deliver the next isolated Nook pull request as a faithful deterministic simulation of Stripe Dashboard's current signed-out login page, based on read-only Firefox inspection. Prefer behavior-focused Core and Web simulation tests; add one fake/intercepted browser scenario only for the extension transport and activation boundary that unit tests cannot prove. Complete exact-head hosted validation, security review, merge verification, and durable Workbench closeout.

## Requirements

- Preserve the observed `https://dashboard.stripe.com/login` structure: one form with omitted method, action, role, id, and name; an email input named/id `email` with `type=email`, `autocomplete="username email"`, and `aria-label="email input"`; a password input named `password`, id `old-password`, `autocomplete="current-password"`, and `aria-label="password input"`; a remember-device checkbox; and one form-owned `type=button` control labeled `Sign in`.
- Model Google, Passkey, and SSO as alternative anchor controls inside the form, never as the owned password-submit activation.
- Determine from current Core contracts whether the stable email/current-password evidence already classifies correctly. Add or narrow Core policy only where behavior tests prove a real gap; do not create redundant provider-specific field evidence.
- Admit automatic activation only for the exact same-origin Stripe login route, one owned semantic `Sign in` control, the exact email/current-password pairing, and an otherwise unambiguous login surface.
- Reject registration, reset, destructive, provider, passkey, SSO, cross-origin, route-drift, duplicate-field, new-password, OTP, ambiguous-control, unowned-control, disabled-final-state, and weak/generic variants.
- Carry any changed contract through the existing typed Rust/WASM boundary without exposing fake credentials or moving policy into TypeScript.
- Add a dedicated Stripe fixture/template and focused catalog, DOM, flow, safety, generated-WASM transport, and intercepted browser coverage in proportion to the actual gap.

## Constraints and exclusions

- Do not enter or submit data to Stripe, activate Google, Passkey, SSO, hCaptcha, Human Security, or any other provider/anti-abuse system.
- Do not record volatile class names, React-generated ids, captcha identifiers, cookies, tokens, query values, browsing state, secrets, or private information.
- Do not model post-submit account behavior or any page state that was not observed.
- Do not broaden generic authentication detection, add Web-owned business policy, or add compatibility, recovery, resilience, or fallback behavior.
- Do not run local product compilation, Rust/WASM suites, full browser suites, or full repository validation; use focused permitted checks and authoritative hosted product validation.
- Keep one unstacked PR based on current `origin/main`, preserve unrelated files, warn before 1,500 authored additions, and stop before 2,000.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: stripe-auth-simulation
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: Companion Core authentication classification and advance-control policy only if behavior proves a gap; typed companion WASM projection only if the Core contract changes; web-extension mock-auth fixtures and renderer; Web simulation/unit/Playwright tests; pull-request delivery; Workbench evidence.
- Ownership units:
1. Capability: Stripe classification and fail-closed admission audit; Gizmo ID: stripe-auth-simulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Core behavior tests prove the existing or minimally changed typed contract recognizes the exact email/current-password form and rejects hostile variants.
2. Capability: Exact Stripe fixture and browser-facing simulation coverage; Gizmo ID: stripe-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused fixture, catalog, DOM, flow, generated-WASM transport, safety, and one fully intercepted browser scenario prove only the owned Sign in action is activated.
3. Capability: Authentication trust-boundary review; Gizmo ID: stripe-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security confirms narrow same-origin admission, fake-data isolation, exact control ownership, alternative-route exclusion, and zero external authentication traffic on the final head.
4. Capability: Shared-branch sequencing and complete delivery; Gizmo ID: stripe-auth-simulation; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head hosted checks and readiness pass, the PR is squash-merged and remotely verified, and immutable Workbench records are published.
- Public or cross-module interfaces: Reuse existing typed authentication field evidence unless Core behavior proves the observed Stripe structure requires a new portable distinction; any change must remain Core-owned and typed through WASM.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Complete Stripe's exact email-password simulation with the minimum domain change required; Acceptance evidence: Core behavior tests, focused Web tests, fully intercepted browser coverage, Security acceptance, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout all succeed.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: stripe-auth-simulation; Gizmo name: Stripe email-password authentication simulation; Predecessor Gizmo ID: None; Complete Stripe's exact email-password simulation with the minimum domain change required; Estimated authored changed lines: 1200; Acceptance evidence: Core behavior tests, focused Web tests, fully intercepted browser coverage, Security acceptance, exact-head hosted validation, readiness, squash merge, remote verification, and Workbench closeout all succeed.

## Initial plan

1. Delegate the Core audit first: replay the exact observed form through current classification and advance-control contracts, add behavior tests, and implement only the smallest Core/WASM correction if those tests expose a gap.
2. After the Core contract is known, delegate the dedicated Stripe fixture, catalog/DOM/flow coverage, and one fake/intercepted extension scenario to Web development.
3. Run focused permitted checks and pre-push hygiene, obtain Security acceptance on the exact complete head, and create the pull request with immutable plan provenance.
4. Run complete hosted validation and review, resolve any exact-head findings, pass readiness, squash-merge, remotely verify, and publish Workbench worklog/statistics.

## Completion evidence

- Core behavior tests prove the observed email and current-password fields are classified and assigned correctly and that the owned semantic Sign in control is admitted only under exact safe conditions.
- Web tests prove the faithful DOM produces the typed evidence, fills only email/password, preserves the remember-device checkbox, activates Sign in exactly once, and never activates or contacts provider, passkey, SSO, or anti-abuse systems.
- Security accepts the final exact head; every repository-owned hosted check, applicable deployment, review, and readiness gate succeeds.
- The PR is squash-merged, its remote branch is absent, merged feature blobs match the authorized head, and pinned plan, worklog, and schema-v4 statistics records are visible on Workbench `main`.

## Safety review

This plan contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, volatile anti-abuse identifiers, or unnecessary infrastructure details. It records only stable public structure, bounded ownership, and verification requirements.
