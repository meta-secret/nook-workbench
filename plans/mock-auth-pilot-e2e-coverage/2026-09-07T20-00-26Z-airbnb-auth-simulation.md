---
title: Add Airbnb authentication simulation coverage
feature: mock-auth-pilot-e2e-coverage
issue: null
started_at: 2026-09-07T20:00:26Z
agent: codex
gizmo_id: airbnb-auth-simulation
---

# Task plan

## Interpreted request

Add a deterministic Airbnb authentication fixture grounded in the current signed-out Firefox experience, replacing the generic catalog approximation with the observed mixed phone-or-email first step. Prove Nook recognizes the surface through focused simulation tests and one fully intercepted browser scenario, then complete exact-head review, validation, merge, remote verification, and Workbench closeout.

## Requirements

- Represent the observed `/login` form: one text input labeled for phone number or email, `inputmode="email"`, `autocomplete="tel-national"`, a form-owned `Continue` submitter, and separate Google and Apple alternatives.
- Keep provider-specific behavior in the Web development test harness while consuming existing typed Rust/WASM classification and browser-observation interfaces unchanged unless tests expose a genuine portable policy gap.
- Add behavior-focused unit coverage for fixture structure, identity recognition, primary-control ownership, and exclusion of alternate authentication routes.
- Add one Playwright scenario whose Airbnb traffic is fully intercepted, uses only deterministic fake data, activates only the intended primary control, and proves that no provider or anti-abuse request escapes the test.
- Preserve the catalog family mapping for Airbnb and Airbnb Host while routing both to the captured structure where appropriate.
- Complete repository-owned exact-head review and validation, readiness, squash merge, remote branch deletion, merge verification, and immutable Workbench records.

## Constraints and exclusions

- Do not submit data to Airbnb, invoke Google or Apple authentication, exercise anti-abuse systems, or record volatile identifiers, generated classes, query values, or private browsing state.
- Do not model an unobserved downstream account-specific password, verification, or registration step.
- Do not add compatibility or recovery fallbacks, expose simulated credentials through production APIs, or move portable classification policy into TypeScript.
- Do not run local product compilation, Rust/WASM suites, full browser suites, or full repository validation; use focused permitted checks and hosted product validation.
- Preserve unrelated files and use one unstacked pull request based on current `origin/main`.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: airbnb-auth-simulation
- Estimated authored changed lines: 950
- Owning modules, packages, or layers: Nook web-extension mock-auth fixtures, fixture renderer and scenario registry, focused Web tests, intercepted extension Playwright coverage, pull-request delivery and Workbench evidence.
- Ownership units:
1. Capability: Captured Airbnb mixed-identity authentication simulation and focused coverage; Gizmo ID: airbnb-auth-simulation; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused fixture and browser-observation tests prove the exact stable field/control structure is recognized while alternate routes remain inert.
2. Capability: Authentication trust-boundary review; Gizmo ID: airbnb-auth-simulation; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security confirms fake-data isolation, fail-closed alternate-route handling, form ownership, and zero live provider or anti-abuse traffic.
3. Capability: Shared-branch sequencing and complete delivery; Gizmo ID: airbnb-auth-simulation; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: The exact pull-request head passes repository validation and readiness, is squash-merged, remotely verified, and linked to immutable Workbench records.
- Public or cross-module interfaces: None.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 950
- Current PR slice and acceptance evidence: Replace the generic Airbnb shell with a captured mixed phone-or-email authentication simulation and prove safe detection through focused unit and fully intercepted browser coverage; Acceptance evidence: Focused Web tests, exact-head hosted validation, Security acceptance, readiness, squash merge, remote verification, and Workbench closeout all succeed.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: airbnb-auth-simulation; Gizmo name: Airbnb authentication simulation; Predecessor Gizmo ID: None; Replace the generic Airbnb shell with a captured mixed phone-or-email authentication simulation and prove safe detection through focused unit and fully intercepted browser coverage; Estimated authored changed lines: 950; Acceptance evidence: Focused Web tests, exact-head hosted validation, Security acceptance, readiness, squash merge, remote verification, and Workbench closeout all succeed.

## Initial plan

1. Preserve a stable read-only description of the current Firefox-observed Airbnb `/login` surface and compare it with the existing generic fixture and classifier contracts.
2. Delegate the bounded Web implementation and focused tests, accepting only the smallest structure-driven change within the declared paths and budget.
3. Obtain an independent Security review, route any findings to the owning team, reconcile against current `origin/main`, and publish the coherent exact head.
4. Complete hosted validation, review resolution, readiness, squash merge, remote verification, and Workbench worklog/statistics publication.

## Completion evidence

- The Airbnb and Airbnb Host catalog entries resolve to the captured structure, and focused unit tests assert every stable form attribute and alternate-route boundary.
- One fully intercepted Playwright scenario proves the extension detects the mixed-identity entry page, uses deterministic fake data, activates only `Continue`, and records zero external authentication or anti-abuse traffic.
- Security accepts the exact head; repository-owned exact-head checks, deployment requirements, review state, and `task pr:ready` succeed.
- The pull request is squash-merged, its remote branch is absent, the merged feature blobs match the authorized head, and immutable plan, worklog, and schema-v4 statistics records are visible on Workbench `main`.

## Safety review

This plan contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details. It records only stable public page structure, bounded repository scope, and verification requirements.
