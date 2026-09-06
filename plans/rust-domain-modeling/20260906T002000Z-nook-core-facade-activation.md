---
title: Activate the Nook Core typed facade
feature: rust-domain-modeling
issue: null
started_at: 2026-09-06T00:20:00Z
agent: codex
gizmo_id: nook-core-facade-activation
---

# Nook Core typed facade activation

## Interpreted request

Continue the crate-by-crate Dylint migration with a substantial dependency-safe cohort, using the fixed ceiling of 1,500 authored additions excluding lockfiles.

## Requirements

- Eliminate the 51 inherited raw-numeric contracts that blocked Nook Core activation after PR 1410.
- Introduce truthful WebAuthn credential, user-handle, PRF input, and PRF output byte domains.
- Introduce distinct canonical event-body and event-storage byte domains for Event Log APIs.
- Type TOTP decoding and remove inherited raw encryption/hash helpers from public wildcard reexports.
- Preserve persisted representations, cryptographic inputs, redaction/zeroization, JavaScript projections, and exact Core/WASM consumers.
- Activate Nook Core with both Development Core-owned Dylint attributes.

## Constraints and exclusions

- No lint weakening, blanket or use-item suppression, new suppression categories, generated output, manifests, lockfiles, standalone docs, CI changes, or unrelated work.
- Hard limit: 1,500 authored additions excluding lockfiles; do not increase. Keep every authored file below 1,000 lines.
- Do not activate another crate in this PR.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-facade-activation
- Estimated authored changed lines: 900
- Owning modules, packages, or layers: Auth2 WebAuthn domains, Event Log byte domains, Nook Core facade, exact WASM adapters, tests, and Development Core guidance.
- Ownership units:
1. Capability: Typed Nook Core inherited facade; Gizmo ID: nook-core-facade-activation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: all 51 inherited diagnostics are eliminated, Nook Core is lint-activated, wire and cryptographic behavior remain stable, authored additions remain below 1,500, and exact-head hosted validation passes.
- Public or cross-module interfaces: Auth2 exposes WebAuthn byte domains, Event Log exposes canonical/storage byte domains, and Core republishes only typed contracts or owns narrow boundary adapters.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Complete and activate the Nook Core inherited facade; Acceptance evidence: zero inherited facade diagnostics, unchanged boundary representations, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-facade-activation; Gizmo name: Nook Core typed facade activation; Predecessor Gizmo ID: None; Complete and activate the Nook Core inherited facade; Estimated authored changed lines: 900; Acceptance evidence: zero inherited facade diagnostics, unchanged boundary representations, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Replace inherited WebAuthn byte vectors with semantic private-storage domains and adapt exact Auth2/Core/WASM consumers.
2. Replace inherited Event Log byte vectors with distinct canonical and storage domains, retaining narrow Core-owned boundary adapters where necessary.
3. Type TOTP parsing, remove raw wildcard reexports, activate Nook Core, and verify residual inventory, suppressions, redaction, conversions, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- All 51 inherited raw-numeric facade diagnostics are eliminated and Nook Core is lint-activated.
- WebAuthn secret material remains redacted and zeroized; persisted, cryptographic, and JavaScript representations remain stable.
- Authored additions remain at or below 1,500 and every touched file remains below 1,000 lines.
- Hosted Dylint and product validation pass on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
