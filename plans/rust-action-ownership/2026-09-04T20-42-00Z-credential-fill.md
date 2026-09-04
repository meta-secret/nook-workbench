---
title: Credential-fill ownership adoption
feature: rust-action-ownership
issue: issues/rust-action-ownership/credential-fill.md
started_at: 2026-09-04T20:42:00Z
agent: codex
gizmo_id: rust-action-ownership-credential-fill
---

# Task plan

## Interpreted request

Continue the authorized project-wide architecture migration through cohesive reviewed deliveries. This delivery establishes complete function ownership in the companion credential-fill domain and activates compiler enforcement there.

## Requirements

- Move planning onto Plan and field classification onto Classification.
- Put test builders on focused fixture types and update both companion WASM consumers.
- Activate ownership and invalid-suppression lints for the entire core module tree.
- Preserve classification, field ordering, rejection precedence, fake-credential behavior, serialization, and public browser exports.

## Constraints and exclusions

- Pure deterministic operations do not receive artificial lifecycle states.
- Preserve all existing tests and runtime checks; no compatibility wrapper or fallback.
- Avoid files owned by active authentication work in PR 1335.
- Only the three named source files change. No local product compilation or tests.
- This individual PR is one independently verifiable step in the explicitly authorized project-wide program.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-credential-fill
- Estimated authored changed lines: 400
- Owning modules, packages, or layers: nook-app/nook-platform/nook-companion-core/src/credential_fill.rs, nook-app/nook-platform/nook-companion-core/src/credential_fill/field/classification.rs, nook-app/nook-platform/nook-companion-wasm/src/credential_fill.rs
- Ownership units:
1. Capability: Credential-fill domain ownership; Gizmo ID: rust-action-ownership-credential-fill; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted Rust behavior tests and Dylint plus preserved WASM exports
- Public or cross-module interfaces: Core free functions become Plan and Classification associated constructors; WASM function names and serialized contracts remain unchanged
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 400
- Current PR slice and acceptance evidence: Credential-fill ownership and compiler enforcement; Acceptance evidence: Hosted Rust and Dylint validation with exact-head review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-credential-fill; Gizmo name: Credential-fill ownership adoption; Predecessor Gizmo ID: None; Credential-fill ownership and compiler enforcement; Estimated authored changed lines: 400; Acceptance evidence: Hosted Rust and Dylint validation with exact-head review

## Initial plan

1. Move domain operations and test helpers to existing meaningful types.
2. Update consumers and activate module-wide compiler enforcement.
3. Obtain hosted validation and review, resolve findings, and squash merge.
4. Record completion and continue the remaining domain inventory.

## Completion evidence

- The complete migrated core module passes ownership enforcement.
- Existing behavior and serialization cases pass through hosted Rust checks.
- Public WASM exports retain their signatures and exact-head review passes.
- Readiness succeeds, remote squash merge is verified, and Workbench is updated.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
