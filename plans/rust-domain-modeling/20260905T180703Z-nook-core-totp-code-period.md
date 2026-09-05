---
title: Type Nook Core TOTP code periods
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T18:07:03Z
agent: codex
gizmo_id: nook-core-totp-code-period
---

# Nook Core TOTP code period

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace `TotpCode.period` with the existing validated `TotpPeriod` domain.
- Return the already-typed authenticator period from code generation.
- Preserve the existing JavaScript numeric `u32` getter through an explicit boundary projection.
- Add focused typed-period coverage and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not change serialized secret shapes, JavaScript API shape, TOTP arithmetic, validation bounds, or another numeric surface.
- No Core activation, suppressions, lint changes, manifests, lockfiles, generated output, CI, standalone documentation, or unrelated work.
- Hard limit: 8 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-totp-code-period
- Estimated authored changed lines: 8
- Owning modules, packages, or layers: Nook Core authenticator domain, exact WASM projection, and Development Core guidance.
- Ownership units:
1. Capability: Typed TOTP code period; Gizmo ID: nook-core-totp-code-period; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Core returns `TotpPeriod`, the JavaScript getter remains numeric u32, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `TotpCode.period` uses an existing domain while the WASM `period()` projection remains numeric.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 8
- Current PR slice and acceptance evidence: Type the TOTP code period and exact WASM projection; Acceptance evidence: typed Core assertion, unchanged JavaScript getter, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-totp-code-period; Gizmo name: Nook Core TOTP code period; Predecessor Gizmo ID: None; Type the TOTP code period and exact WASM projection; Estimated authored changed lines: 8; Acceptance evidence: typed Core assertion, unchanged JavaScript getter, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Type the Core result field and return the existing typed period.
2. Project through the established WASM numeric boundary and extend the exact Core test.
3. Verify the JavaScript surface, residual inventory, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- Generated TOTP codes no longer expose a raw period through Nook Core.
- Existing TOTP validation and JavaScript numeric shape remain unchanged.
- Residual inventory becomes 85 declarations: 76 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
