---
title: Account-picker authorization phase ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/account-picker.md
started_at: 2026-09-04T20:56:00Z
agent: codex
gizmo_id: rust-action-ownership-account-picker
---

# Task plan

## Interpreted request

Continue the authorized architecture program by expressing account-picker cleanup phases through distinct data-carrying types. Keep the existing runtime facade for browser callers while making phase-specific data and methods explicit internally.

## Requirements

- ActiveAuthorization owns the epoch and starting cleanup; CleaningAuthorization owns the cleanup epoch, overlapping attempt count, and explicit full-cleanup requirement.
- Use an exhaustive completion outcome and private controlled state construction.
- Preserve every runtime epoch, overlap, release, zero-count, and final-cleanup behavior.
- Add behavior tests and actual-source compile-fail examples with a passing control.
- Execute companion-core doctests through the existing hosted native path and focused test task.
- Enable function ownership enforcement for the migrated core module.

## Constraints and exclusions

- The public mutable lifecycle facade and all WASM and TypeScript interfaces remain unchanged.
- Describe internal mutable runtime transitions honestly; do not claim an externally consuming capability API.
- No generic state framework, borrow-handle machinery, placeholder state, dependency, authority cloning, or recovery behavior.
- Preserve persisted cleanup markers and asynchronous host freshness checks.
- The SRE change adds only companion-core doctest commands; existing coverage policy and other active PR work remain untouched.
- No local Rust compilation or product tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-account-picker
- Estimated authored changed lines: 450
- Owning modules, packages, or layers: nook-app/nook-platform/nook-companion-core/src/account_picker_authorization.rs, nook-app/nook-platform/nook-companion-core/src/account_picker_authorization/state.rs, nook-app/nook-platform/docker/rust/product.Dockerfile, nook-app/nook-platform/Taskfile.yml
- Ownership units:
1. Capability: Account-picker phase model and tests; Gizmo ID: rust-action-ownership-account-picker; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Preserved runtime behavior and actual-source passing and compile-fail probes
2. Capability: Hosted phase-contract validation; Gizmo ID: rust-action-ownership-account-picker; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Existing native build and focused Rust test command execute companion-core doctests and fail on errors
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 450
- Current PR slice and acceptance evidence: Account-picker phase ownership and hosted contract tests; Acceptance evidence: Hosted Rust behavior and doctest checks plus Dylint and security review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-account-picker; Gizmo name: Account-picker phase ownership; Predecessor Gizmo ID: None; Account-picker phase ownership and hosted contract tests; Estimated authored changed lines: 450; Acceptance evidence: Hosted Rust behavior and doctest checks plus Dylint and security review

## Initial plan

1. Implement private phase types, preserve the facade, and add focused behavior and compile-fail tests.
2. Add companion-core doctest execution to existing hosted and focused native commands.
3. Obtain hosted validation and security review, resolve findings, and squash merge.
4. Publish completion evidence and continue remaining project scopes.

## Completion evidence

- Active and cleaning states carry only their valid phase data and operations.
- Valid operations compile; invalid operations and construction fail for the intended reason.
- Behavior tests preserve stale-epoch, overlap, release, and zero-count handling.
- Hosted checks and exact-head review pass; readiness, squash merge, and Workbench completion are verified.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
