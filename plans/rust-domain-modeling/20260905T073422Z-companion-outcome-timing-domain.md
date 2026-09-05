---
title: Type Companion authentication outcome timing
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T07:34:22Z
agent: codex
gizmo_id: companion-outcome-timing-domain
---

# Companion authentication outcome timing domain

## Interpreted request

Reduce the oversized Companion Core activation before publication. Deliver only the cohesive authentication-outcome timing prerequisite now, then complete lint activation in a later fresh PR without increasing this PR's size.

## Requirements

- Add transparent `AuthenticationOutcomeElapsedMilliseconds` and `AuthenticationOutcomeTimeoutMilliseconds` domain types with scalar serde and TypeScript number representation.
- Type the outcome evidence fields, default timeout, and classifier inputs while preserving the exact 8,000 ms default and existing sufficient, conflicting, and timeout behavior.
- Convert primitive JavaScript elapsed and timeout inputs only at the two established WASM FFI edges.
- Re-export the two timing domains through Companion Core and Core.
- Retain focused scalar round-trip and existing behavior coverage.
- Development Core owns implementation and focused checks; Gizmo Prime owns publication, hosted validation, feedback disposition, readiness, and squash merge.

## Constraints and exclusions

- Do not activate the Dylint in this PR or mark Companion Core activated in Cortex.
- Defer all field counts, passkey counts, priorities, workflow steps/index, credential-fill encapsulation, pairing counts, saved-login counts, picker deadline expectations, and their consumers.
- No Dylint/UI, macros, generated TypeScript, manifest, CI, file split, unrelated refactor, or other crate activation.
- Target at most 120 authored additions. Keep every authored file below 1,000 lines and the PR below the absolute 2,000-addition limit; lockfiles and generated output are excluded from counting.
- No local product compilation, Rust tests, Clippy, WASM builds, or Docker builds. Use formatting and structural checks locally; rely on hosted validation for product gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-outcome-timing-domain
- Estimated authored changed lines: 120
- Owning modules, packages, or layers: Companion authentication outcome timing contracts and the two direct WASM ingress edges.
- Ownership units:
1. Capability: Typed Companion authentication outcome timing; Gizmo ID: companion-outcome-timing-domain; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Elapsed and timeout values use distinct transparent domains, existing classifier behavior and wire numbers remain unchanged, and all hosted gates pass.
- Public or cross-module interfaces: Authentication outcome evidence and classification inputs expose distinct elapsed and timeout millisecond domains; existing WASM edges accept primitive JavaScript numbers and convert them immediately.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 120
- Current PR slice and acceptance evidence: Type only Companion authentication outcome timing and its direct ingress consumers; Acceptance evidence: Scalar round trips and existing classifier cases pass with the exact default timeout preserved, followed by exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-outcome-timing-domain; Gizmo name: Companion outcome timing domain; Predecessor Gizmo ID: None; Type only Companion authentication outcome timing and its direct ingress consumers; Estimated authored changed lines: 120; Acceptance evidence: Scalar round trips and existing classifier cases pass with the exact default timeout preserved, followed by exact-head hosted readiness.

## Initial plan

1. Prune the uncommitted activation work to the six-file outcome-timing prerequisite.
2. Verify the two newtypes, exact direct consumers, existing behavior fixtures, formatting, file sizes, and authored-line budget.
3. Publish the coherent prerequisite, run hosted validation, and repair only in-scope defects.
4. Establish exact-head readiness, publish Workbench evidence, and squash merge before returning to the remaining Companion Core activation.

## Completion evidence

- The diff contains only the two outcome timing domains, their outcome contract, two WASM ingress conversions, and Core re-exports.
- The default timeout remains 8,000 ms and scalar JSON remains numeric.
- Existing sufficient, conflicting, and timeout classifications remain covered.
- Companion Core remains unactivated until its remaining numeric domains are migrated.
- Hosted full PR validation passes on the exact merge head.

## Safety review

- No raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details are included.
