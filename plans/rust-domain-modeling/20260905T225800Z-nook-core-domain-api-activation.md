---
title: Activate Nook Core numeric domain APIs
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T22:58:00Z
agent: codex
gizmo_id: nook-core-domain-api-activation
---

# Nook Core numeric domain API activation

## Interpreted request

Expand PR 1410 from a completed micro-slice into a dependency-safe Nook Core migration cohort, using a hard ceiling of 1,500 authored additions so the crate can be activated in one reviewable change.

## Requirements

- Replace all remaining genuine raw numeric primitives in Nook Core public domain APIs with semantically named domain types.
- Cover BIP39, secret imports and presentation, authenticator time, vault policy and paging, catalog buckets, runtime timing, Sentinel policy, and persisted version domains.
- Preserve scalar serialization, database values, JavaScript projections, overflow and saturation behavior, and exact Core/WASM consumers.
- Retain only legitimate serialization, database, cryptographic, and FFI boundaries through item- or field-scoped reason-bearing expectations.
- Activate Nook Core with the Development Core-owned raw numeric API and suppression-validation lints.

## Constraints and exclusions

- No blanket suppressions, new suppression categories, wire-shape changes, validation changes, generated output, manifests, lockfiles, standalone documentation, CI changes, or unrelated work.
- Hard limit: 1,500 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- Do not activate another crate in this PR.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-domain-api-activation
- Estimated authored changed lines: 1500
- Owning modules, packages, or layers: Nook Core public domains and facade, exact WASM adapters, Core behavior tests, and Development Core guidance.
- Ownership units:
1. Capability: Complete Nook Core numeric domain APIs; Gizmo ID: nook-core-domain-api-activation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: all genuine Core numeric surfaces use domain types, nine approved boundaries remain narrowly expected, Nook Core is lint-activated, JavaScript and persisted representations remain stable, authored additions remain below 1,500, and exact-head hosted validation passes.
- Public or cross-module interfaces: Nook Core APIs expose dedicated count, paging, timing, bucket, policy, and version domains; WASM retains its JavaScript-compatible boundary projections.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1500
- Current PR slice and acceptance evidence: Complete and activate Nook Core; Acceptance evidence: zero genuine lint-visible raw numeric APIs, exactly nine legitimate narrow boundaries, unchanged wire and JavaScript shapes, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-domain-api-activation; Gizmo name: Nook Core numeric domain API activation; Predecessor Gizmo ID: None; Complete and activate Nook Core; Estimated authored changed lines: 1500; Acceptance evidence: zero genuine lint-visible raw numeric APIs, exactly nine legitimate narrow boundaries, unchanged wire and JavaScript shapes, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Introduce semantically distinct, private-storage numeric domains for every remaining genuine Core surface.
2. Adapt exact Core implementations, behavior fixtures, and WASM boundary consumers while preserving representations and behavior.
3. Audit the nine legitimate boundaries, activate Nook Core, and verify residual inventory, suppression scope, conversions, wire shapes, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- All 69 genuine Core surfaces in this cohort are domain typed and Nook Core is lint-activated.
- Exactly nine legitimate serialization, cryptographic, database, or WebAuthn boundaries remain, each narrowly expected.
- Authored additions remain at or below 1,500 and every touched file remains below 1,000 lines.
- Hosted Dylint and product validation pass on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
