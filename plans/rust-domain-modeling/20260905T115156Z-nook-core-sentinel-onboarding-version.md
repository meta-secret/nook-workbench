---
title: Type Nook Core Sentinel onboarding versions
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T11:51:56Z
agent: codex
gizmo_id: nook-core-sentinel-onboarding-version
---

# Nook Core Sentinel onboarding version

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as one tightly bounded change.

## Requirements

- Introduce private-storage `SentinelOnboardingVersion` with `CURRENT = 1`.
- Preserve scalar serialization and strictly reject every unsupported or overflowing decoded value.
- Replace the package version field, remove redundant accept-time raw comparison, and retain full package round-trip behavior.
- Reexport the domain and record the prerequisite in Development Core guidance.

## Constraints and exclusions

- Do not activate Nook Core, change opaque WASM/web package handling, or migrate another numeric surface.
- No suppressions, lint work, manifests, lockfiles, generated output, CI, standalone documentation, or unrelated changes.
- Hard limit: 50 authored additions excluding lockfiles; do not increase. Keep every authored file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused structural checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-sentinel-onboarding-version
- Estimated authored changed lines: 50
- Owning modules, packages, or layers: Nook Core Sentinel onboarding contract, stable Core exports, and Development Core guidance.
- Ownership units:
1. Capability: Typed Sentinel onboarding version; Gizmo ID: nook-core-sentinel-onboarding-version; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: only version one decodes, scalar and package round trips pass, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `SentinelOnboardingPackage.version` becomes a validated domain value; encoded package strings remain unchanged.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 50
- Current PR slice and acceptance evidence: Type the Sentinel onboarding package version; Acceptance evidence: strict scalar decoding, package round-trip coverage, unchanged opaque consumers, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-sentinel-onboarding-version; Gizmo name: Nook Core Sentinel onboarding version; Predecessor Gizmo ID: None; Type the Sentinel onboarding package version; Estimated authored changed lines: 50; Acceptance evidence: strict scalar decoding, package round-trip coverage, unchanged opaque consumers, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the version domain with strict decoding and scalar coverage.
2. Type package construction/acceptance and update the stable export.
3. Verify formatting, rejection behavior, residual inventory, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- The onboarding package no longer exposes raw `u32`.
- Only version one can deserialize and encoded package consumers remain opaque.
- Residual inventory becomes 90 declarations: 81 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
