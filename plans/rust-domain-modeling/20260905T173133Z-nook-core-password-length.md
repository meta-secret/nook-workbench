---
title: Type Nook Core password lengths
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T17:31:33Z
agent: codex
gizmo_id: nook-core-password-length
---

# Nook Core password length

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace `PasswordGenerationOptions.length` with existing `PasswordCharacterCount`.
- Preserve numeric serde and generated TypeScript input.
- Keep existing 8 through 128 validation and charset behavior unchanged.
- Adapt only colocated and one integration fixture and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not change Nook WASM, web, auth2, public exports, validation semantics, or another numeric surface.
- No Core activation, suppressions, lint changes, manifests, lockfiles, generated output, CI, standalone documentation, or unrelated work.
- Hard limit: 30 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-password-length
- Estimated authored changed lines: 30
- Owning modules, packages, or layers: Nook Core password generation, one Core integration fixture, and Development Core guidance.
- Ownership units:
1. Capability: Typed password generation length; Gizmo ID: nook-core-password-length; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: the DTO uses the existing domain, numeric wire form and range tests pass, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `PasswordGenerationOptions.length` accepts an existing domain while its JavaScript field remains numeric.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 30
- Current PR slice and acceptance evidence: Type password generation length and exact fixtures; Acceptance evidence: exact numeric JSON, retained validation behavior, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-password-length; Gizmo name: Nook Core password length; Predecessor Gizmo ID: None; Type password generation length and exact fixtures; Estimated authored changed lines: 30; Acceptance evidence: exact numeric JSON, retained validation behavior, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Type the DTO field and preserve numeric Tsify representation.
2. Adapt exact fixtures and add numeric JSON round-trip coverage.
3. Verify validation ownership, residual inventory, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- Password generation no longer exposes raw length through Nook Core.
- Numeric DTO shape and validation errors remain unchanged.
- Residual inventory becomes 87 declarations: 78 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
