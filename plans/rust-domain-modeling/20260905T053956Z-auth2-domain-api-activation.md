---
title: Activate Auth2 raw numeric public API enforcement
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T05:39:56Z
agent: codex
gizmo_id: auth2-domain-api-activation
---

# Auth2 domain API lint activation

## Interpreted request

Onboard `nook-auth2` to the Development Core-owned Dylint rule in one bounded PR. Preserve legitimate WebAuthn, serialization, cryptographic, and test-double byte boundaries with narrow item-level expectations, while removing the sole genuine raw numeric domain API.

## Requirements

- Enable `invalid_raw_numeric_api_suppression` and `raw_numeric_public_api` at the `nook-auth2` crate root using the established convention.
- Add reason-bearing item or field expectations only to the 42 existing WebAuthn, serialization, cryptographic, and test-double boundary surfaces identified by the inventory.
- Replace the public `TryFrom<usize>` participant-count conversion with a crate-private fallible length constructor and adapt its sole caller.
- Mark `nook-auth2` activated in the canonical Development Core typed-newtypes guidance.
- Development Core owns implementation and focused checks; Gizmo Prime owns publication, hosted validation, feedback disposition, readiness, and squash merge.

## Constraints and exclusions

- No Dylint implementation or UI snapshot changes, new domain types, manifest changes, downstream crate migration, CI changes, or unrelated refactors.
- No crate-wide or module-wide suppressions; every legitimate boundary expectation must be attached to the narrowest existing item or field and explain the boundary.
- Target about 310 authored additions and reassess before exceeding that estimate. Keep every authored file below 1,000 lines and the PR below the absolute 2,000-addition limit; lockfiles and generated output are excluded from counting.
- No local product compilation, Rust tests, Clippy, WASM builds, or Docker builds. Use formatting and structural checks locally; rely on hosted validation for product gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: auth2-domain-api-activation
- Estimated authored changed lines: 310
- Owning modules, packages, or layers: `nook-auth2` public API boundaries and Development Core typed-newtypes activation registry.
- Ownership units:
1. Capability: Auth2 raw numeric public API enforcement; Gizmo ID: auth2-domain-api-activation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted all-target Dylint accepts only the enumerated narrow boundaries, the participant-count domain API no longer exposes `usize`, and all hosted gates pass.
- Public or cross-module interfaces: Existing WebAuthn and serialization byte boundaries remain unchanged; `SentinelParticipantCount` no longer exposes a public `TryFrom<usize>` conversion.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 310
- Current PR slice and acceptance evidence: Activate `nook-auth2` with narrow existing-boundary expectations and one crate-private domain conversion; Acceptance evidence: Hosted Dylint and full repository gates pass at the exact PR head.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: auth2-domain-api-activation; Gizmo name: Auth2 domain API activation; Predecessor Gizmo ID: None; Activate `nook-auth2` with narrow existing-boundary expectations and one crate-private domain conversion; Estimated authored changed lines: 310; Acceptance evidence: Hosted Dylint and full repository gates pass at the exact PR head.

## Initial plan

1. Update from Main, publish this bounded plan, and delegate the implementation to Development Core.
2. Add crate enforcement, annotate only the inventoried legitimate boundaries, and replace the public participant-count conversion.
3. Audit the full diff, suppression granularity, formatting, file sizes, and authored-line budget before publishing.
4. Run hosted validation, repair only in-scope defects, establish exact-head readiness, publish Workbench evidence, and squash merge.

## Completion evidence

- `nook-auth2` denies raw numeric public domain APIs and forbids invalid broad suppression.
- All 42 legitimate WebAuthn, serialization, cryptographic, and test-double boundaries use narrow reason-bearing expectations.
- The sole genuine `usize` domain conversion is crate-private and its caller remains fallible.
- The canonical typed-newtypes activation registry includes `nook-auth2`.
- Hosted all-target Dylint and full PR validation pass on the exact merge head.

## Safety review

- No raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details are included.
