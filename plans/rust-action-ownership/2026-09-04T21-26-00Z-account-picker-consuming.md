---
title: Consuming account-picker authorization transitions
feature: rust-action-ownership
issue: issues/rust-action-ownership/account-picker.md
started_at: 2026-09-04T21:26:00Z
agent: codex
gizmo_id: rust-action-ownership-account-picker
---

# Task plan

## Interpreted request

Continue the authorized architecture program by expressing account-picker cleanup phases through distinct data-carrying types. Consume Rust and WASM mutation receivers and return their successor state and typed result; preserve the centralized extension orchestration contract. This supersedes the earlier facade-preservation design after review identified reusable state and anonymous evidence.

## Requirements

- ActiveAuthorization owns the epoch and starting cleanup; CleaningAuthorization owns the cleanup epoch, overlapping attempt count, and explicit full-cleanup requirement.
- Use exhaustive typed outcomes, including stale-epoch and invalid-phase rejection, and return the original state on rejection.
- Consume phase and lifecycle mutation receivers; no obsolete capability survives a transition.
- Carry named cleanup evidence through the Rust/WASM boundary.
- Replace the sole live WASM handle synchronously in the extension adapter; publish initialization once and reacquire after every await.
- Preserve every runtime epoch, overlap, release, zero-count, and final-cleanup behavior.
- Add behavior tests and actual-source compile-fail examples with a passing control.
- Execute companion-core doctests through the existing hosted native path and focused test task.
- Enable function ownership enforcement for the migrated core module.

## Constraints and exclusions

- The Rust and WASM mutation APIs intentionally change to consuming transitions; migrate every repository consumer in this PR.
- Existing exported TypeScript orchestration functions, storage order, and observable browser behavior remain unchanged.
- No generic state framework, borrow-handle machinery, placeholder state, dependency, authority cloning, or recovery behavior.
- Preserve persisted cleanup markers and asynchronous host freshness checks.
- The SRE change adds only companion-core doctest commands; existing coverage policy and other active PR work remain untouched.
- No local Rust compilation or product tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-account-picker
- Estimated authored changed lines: 1100
- Owning modules, packages, or layers: nook-app/nook-platform/nook-companion-core/src/account_picker_authorization.rs, nook-app/nook-platform/nook-companion-core/src/account_picker_authorization/state.rs, nook-app/nook-platform/nook-companion-core/src/lib.rs, nook-app/nook-platform/nook-companion-wasm/src/account_picker_authorization.rs, nook-app/nook-platform/docker/rust/product.Dockerfile, nook-app/nook-platform/Taskfile.yml, nook-app/nook-web/nook-web-extension/src/background/service-worker/account-picker-authorization.ts, nook-app/nook-web/nook-web-extension/scripts/account-picker-lock.test.ts, nook-app/nook-web/nook-web-app/e2e/demos/extension-popup.demo.spec.ts
- Ownership units:
1. Capability: Account-picker phase model and tests; Gizmo ID: rust-action-ownership-account-picker; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Preserved runtime behavior and actual-source passing and compile-fail probes
2. Capability: Hosted phase-contract validation; Gizmo ID: rust-action-ownership-account-picker; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Existing native build and focused Rust test command execute companion-core doctests and fail on errors
3. Capability: Synchronous extension handle transfer; Gizmo ID: rust-action-ownership-account-picker; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Real WASM tests cover concurrent initialization and overlaps across storage awaits; popup demo remains fail-closed
- Public or cross-module interfaces: Consuming Rust and WASM lifecycle mutations return AccountPickerAuthorizationTransition with typed CleanupTransitionOutcome; CleanupEvidence replaces boolean evidence; existing TypeScript orchestration contracts remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1100
- Current PR slice and acceptance evidence: Consuming account-picker transitions and integrated contract tests; Acceptance evidence: Hosted Rust behavior and doctest checks plus Dylint and security review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-account-picker; Gizmo name: Account-picker phase ownership; Predecessor Gizmo ID: None; Consuming account-picker transitions and integrated contract tests; Estimated authored changed lines: 1100; Acceptance evidence: Hosted Rust behavior and doctest checks plus Dylint and security review

## Initial plan

1. Repair core and WASM APIs with consuming states, named evidence, typed rejection, and use-after-move tests.
2. Preserve hosted doctest wiring and migrate the centralized web adapter with concurrency tests and the applicable popup demo.
3. Obtain hosted validation and security review, resolve findings, and squash merge.
4. Publish completion evidence and continue remaining project scopes.

## Completion evidence

- Active and cleaning states carry only their valid phase data and operations.
- Valid successor chains compile; invalid phase operations, private construction, and reuse after consuming transitions fail for the intended reason.
- Concurrent initialization cannot reinstall consumed handles; completion and release use the current state after storage awaits.
- Behavior tests preserve stale-epoch, overlap, release, and zero-count handling.
- Hosted checks and exact-head review pass; readiness, squash merge, and Workbench completion are verified.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
