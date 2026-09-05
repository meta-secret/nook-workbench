---
title: Activate Companion Core raw numeric public API enforcement
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T07:05:08Z
agent: codex
gizmo_id: companion-core-domain-api-activation
---

# Companion Core domain API lint activation

## Interpreted request

Onboard `nook-companion-core`, the smallest dependency-safe remaining crate, to the Development Core-owned Dylint rule in one bounded PR. Replace 40 genuine numeric domain surfaces with explicit typed counts, workflow positions, and durations while retaining only four concrete picker serialization and FFI deadline fields as narrow expectations.

## Requirements

- Enable `invalid_raw_numeric_api_suppression` and `raw_numeric_public_api` at the `nook-companion-core` crate root using the established convention.
- Add one focused `domain_numbers` module with distinct transparent types for authentication field count, semantic submit-control count, passkey account count, saved-login account count, current workflow step, total workflow steps, workflow observation index, elapsed outcome milliseconds, outcome timeout milliseconds, extension sync-provider count, and extension event count.
- Keep `credential_fill::field::Index` and `Count`, make their storage private, and expose only canonical primitive conversions.
- Return the existing typed authentication-form observation priority internally and convert it only at existing WASM FFI edges.
- Use reason-bearing field expectations only for the two incoming picker deadline serialization fields and two outgoing picker deadline FFI fields.
- Preserve serde and TypeScript numeric wire shapes through transparent newtypes, existing range validation, pairing validation, workflow behavior, and finite picker-deadline decoding.
- Adapt only direct Companion WASM, Core, and Nook WASM consumers required by the typed interfaces and update the canonical activation registry.
- Add focused behavior tests for typed round trips and unchanged validation where existing coverage does not already prove the contract.
- Development Core owns implementation and focused checks; Gizmo Prime owns publication, hosted validation, feedback disposition, readiness, and squash merge.

## Constraints and exclusions

- No Dylint implementation or UI snapshot changes, macros, reuse of semantically mismatched Event Log or authenticator expiry types, generated TypeScript changes, manifest changes, CI changes, unrelated refactors, or activation of another crate.
- No type, module, or crate-wide suppressions; all four legitimate picker deadline expectations must be attached directly to their existing fields with concrete reasons.
- Keep numeric wrapper definitions out of the existing near-limit workflow files. Do not split files unless focused Rustfmt would otherwise exceed 1,000 lines.
- Target at most 700 authored additions and reassess before exceeding that estimate. Keep every authored file below 1,000 lines and the PR below the absolute 2,000-addition limit; lockfiles and generated output are excluded from counting.
- No local product compilation, Rust tests, Clippy, WASM builds, or Docker builds. Use formatting and structural checks locally; rely on hosted validation for product gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-core-domain-api-activation
- Estimated authored changed lines: 700
- Owning modules, packages, or layers: `nook-companion-core` public domain contracts and direct typed consumers in Companion WASM, Core, and Nook WASM.
- Ownership units:
1. Capability: Companion Core raw numeric public API enforcement; Gizmo ID: companion-core-domain-api-activation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted all-target Dylint retains only four narrow deadline boundaries, all genuine public numeric state uses typed domains with unchanged wire shapes and validation, and all hosted gates pass.
- Public or cross-module interfaces: Companion authentication observations, evidence, workflow snapshots, responses, pairing state, and credential-fill fields expose typed numeric domains; existing WASM edges convert those domains to and from primitive JavaScript numbers.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 700
- Current PR slice and acceptance evidence: Activate `nook-companion-core` and adapt only its direct typed consumers; Acceptance evidence: Hosted Dylint and full repository gates pass at the exact PR head with numeric wire fixtures and existing validation behavior preserved.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-core-domain-api-activation; Gizmo name: Companion Core domain API activation; Predecessor Gizmo ID: None; Activate `nook-companion-core` and adapt only its direct typed consumers; Estimated authored changed lines: 700; Acceptance evidence: Hosted Dylint and full repository gates pass at the exact PR head with numeric wire fixtures and existing validation behavior preserved.

## Initial plan

1. Publish this bounded plan and delegate the implementation to Development Core.
2. Add the focused domain-number module, type the inventoried public contracts, retain four narrow deadline expectations, and adapt direct consumers.
3. Add or update focused behavior fixtures, then audit wire stability, suppression granularity, formatting, file sizes, and authored-line budget before publishing.
4. Run hosted validation, repair only in-scope defects, establish exact-head readiness, publish Workbench evidence, and squash merge.

## Completion evidence

- `nook-companion-core` denies raw numeric public domain APIs and forbids invalid broad suppression.
- All 40 genuine public numeric surfaces use explicit typed domains, and credential-fill newtype storage is private.
- Exactly four legitimate picker deadline fields use narrow reason-bearing expectations.
- Existing numeric serde and TypeScript shapes, range rejection, pairing validation, priority projection, and finite deadline decoding remain unchanged.
- All direct consumer adaptations are confined to the inventoried Companion WASM, Core, and Nook WASM edges.
- The canonical typed-newtypes activation registry includes `nook-companion-core`.
- Hosted all-target Dylint and full PR validation pass on the exact merge head.

## Safety review

- No raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details are included.
