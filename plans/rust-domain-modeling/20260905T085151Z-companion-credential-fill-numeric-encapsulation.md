---
title: Encapsulate Companion credential-fill numeric domains
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T08:51:51Z
agent: codex
gizmo_id: companion-credential-fill-numeric-encapsulation
---

# Companion credential-fill numeric encapsulation

## Interpreted request

Keep the Companion Core migration within its existing size limit by delivering the smallest dependency-safe prerequisite first, then activate the lint in a later fresh PR.

## Requirements

- Make the raw `u32` storage of existing `credential_fill::field::Index` and `Count` private.
- Add canonical conversions back to `u32` so core and WASM consumers do not reach through newtype storage.
- Preserve the existing object-shaped serde contracts for both types.
- Adapt only the direct Companion Core and Companion WASM consumers required by encapsulation.
- Retain focused serialization and conversion coverage.
- Development Core owns implementation and focused checks; Gizmo Prime owns publication, hosted validation, feedback disposition, readiness, and squash merge.

## Constraints and exclusions

- Do not activate the Companion Core Dylint or mark the crate activated in Cortex.
- Do not add the nine remaining domain types or migrate unrelated counts, steps, indices, priorities, picker deadlines, pairing events, or their consumers.
- No lint implementation, UI fixtures, manifest, lockfile, generated TypeScript, CI, documentation, file split, or other crate activation.
- Target at most 40 authored additions. Keep every authored file below 1,000 lines and the PR below the absolute 2,000-addition limit; lockfiles and generated output are excluded from counting.
- No local product compilation, Rust tests, Clippy, WASM builds, or Docker builds. Use formatting and structural checks locally; rely on hosted validation for product gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-credential-fill-numeric-encapsulation
- Estimated authored changed lines: 40
- Owning modules, packages, or layers: Companion Core credential-fill field domains and the direct Companion WASM wrapper.
- Ownership units:
1. Capability: Encapsulated credential-fill numeric domains; Gizmo ID: companion-credential-fill-numeric-encapsulation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Index and Count retain object-shaped serde, expose canonical conversions instead of public primitive fields, direct consumers compile in hosted validation, and all hosted gates pass.
- Public or cross-module interfaces: `credential_fill::field::Index` and `Count` stop exposing public primitive storage and provide canonical conversion back to `u32`; JavaScript-facing wrapper behavior remains unchanged.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 40
- Current PR slice and acceptance evidence: Encapsulate only existing credential-fill Index and Count storage and adapt their direct consumers; Acceptance evidence: serde shapes and round-trip conversions remain covered, followed by exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-credential-fill-numeric-encapsulation; Gizmo name: Companion credential-fill numeric encapsulation; Predecessor Gizmo ID: None; Encapsulate only existing credential-fill Index and Count storage and adapt their direct consumers; Estimated authored changed lines: 40; Acceptance evidence: serde shapes and round-trip conversions remain covered, followed by exact-head hosted readiness.

## Initial plan

1. Encapsulate Index and Count primitive storage and add canonical reverse conversions.
2. Adapt only direct Core and Companion WASM storage consumers.
3. Verify formatting, serialization expectations, file sizes, scope, and authored-line budget.
4. Publish the prerequisite, run hosted validation, repair only in-scope defects, establish exact-head readiness, and squash merge.

## Completion evidence

- Neither existing credential-fill domain exposes a public primitive field.
- JSON remains `{"value":...}` and conversions preserve the numeric value.
- JavaScript-facing credential-fill wrappers retain their existing value contract.
- Hosted full PR validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
