---
title: Activate Companion Core raw numeric public API enforcement
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T09:22:44Z
agent: codex
gizmo_id: companion-core-domain-api-activation
---

# Companion Core domain API lint activation

## Interpreted request

Onboard `nook-companion-core` to the Development Core-owned Dylint rule now that two small prerequisites have reduced the remaining activation below the unchanged size limit.

## Requirements

- Enable `invalid_raw_numeric_api_suppression` and `raw_numeric_public_api` at the `nook-companion-core` crate root using the established convention.
- Add distinct transparent domains for the nine remaining concepts: authentication field count, semantic-submit count, passkey account count, saved-login account count, current workflow step, total workflow steps, workflow observation index, extension sync-provider count, and extension event count.
- Return the existing typed authentication-form observation priority internally and convert it only at existing WASM FFI edges.
- Use reason-bearing field expectations only for the two incoming picker deadline serialization fields and two outgoing picker deadline FFI fields.
- Preserve numeric serde and TypeScript wire shapes, existing range validation, pairing validation, workflow behavior, and finite picker-deadline decoding.
- Adapt only direct Companion WASM, Core, and Nook WASM consumers required by typed interfaces and update the canonical Cortex activation registry.
- Retain focused behavior coverage for typed round trips and unchanged validation.
- Development Core owns implementation and focused checks; Gizmo Prime owns publication, hosted validation, feedback disposition, readiness, and squash merge.

## Constraints and exclusions

- No Dylint implementation or UI snapshots, macros, semantically mismatched reused domains, generated TypeScript, manifests, lockfiles, CI, unrelated refactors, or another crate activation.
- No type, module, or crate-wide suppressions; exactly four legitimate picker deadline fields may carry narrow concrete expectations.
- Keep wrapper definitions out of near-limit workflow files. Relocate a cohesive enum only if required to keep every authored file below 1,000 lines.
- Target at most 690 authored additions and do not increase the budget. The absolute repository limit remains 2,000 authored additions; lockfiles and generated output are excluded from counting.
- No local product compilation, Rust tests, Clippy, WASM builds, or Docker builds. Use formatting and structural checks locally; rely on hosted validation for product gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-core-domain-api-activation
- Estimated authored changed lines: 690
- Owning modules, packages, or layers: `nook-companion-core` public domain contracts and direct typed consumers in Companion WASM, Core, and Nook WASM.
- Ownership units:
1. Capability: Companion Core raw numeric public API enforcement; Gizmo ID: companion-core-domain-api-activation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted all-target Dylint retains exactly four narrow deadline boundaries, all remaining genuine public numeric state uses typed domains with unchanged wire shapes and validation, and all hosted gates pass.
- Public or cross-module interfaces: Companion authentication observations, workflows, responses, pairing state, and event counts expose typed numeric domains; existing WASM edges convert those domains to and from primitive JavaScript numbers.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 690
- Current PR slice and acceptance evidence: Activate `nook-companion-core` and adapt only its direct typed consumers; Acceptance evidence: Hosted Dylint and full repository gates pass at the exact PR head with numeric wire fixtures and existing validation behavior preserved.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-core-domain-api-activation; Gizmo name: Companion Core domain API activation; Predecessor Gizmo ID: None; Activate `nook-companion-core` and adapt only its direct typed consumers; Estimated authored changed lines: 690; Acceptance evidence: Hosted Dylint and full repository gates pass at the exact PR head with numeric wire fixtures and existing validation behavior preserved.

## Initial plan

1. Add the nine remaining focused domains, activate the crate lints, and type the inventoried public contracts.
2. Retain exactly four narrow picker deadline expectations and adapt direct consumers.
3. Verify wire fixtures, suppression granularity, formatting, file sizes, scope, and authored-line budget before publication.
4. Run hosted validation, repair only in-scope defects, establish exact-head readiness, publish Workbench evidence, and squash merge.

## Completion evidence

- `nook-companion-core` denies raw numeric public domain APIs and forbids invalid broad suppression.
- All 36 remaining genuine public numeric surfaces use explicit typed domains.
- Exactly four legitimate picker deadline fields use narrow reason-bearing expectations.
- Existing numeric serde and TypeScript shapes, range rejection, pairing validation, priority projection, and finite deadline decoding remain unchanged.
- Direct consumer adaptations stay within inventoried Companion WASM, Core, and Nook WASM edges.
- The canonical typed-newtypes activation registry includes `nook-companion-core`.
- Hosted all-target Dylint and full PR validation pass on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
