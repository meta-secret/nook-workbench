---
title: Type Nook Core TOTP remaining seconds
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T18:23:41Z
agent: codex
gizmo_id: nook-core-totp-remaining-seconds
---

# Nook Core TOTP remaining seconds

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace `TotpCode.seconds_remaining` with a dedicated `TotpRemainingSeconds` domain.
- Preserve existing TOTP calculation and period validation.
- Preserve the existing JavaScript numeric `u32` getter through an explicit boundary projection.
- Reexport the domain, add focused conversion coverage, and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not add serialization or validation to the wrapper, change JavaScript shape, or migrate another numeric surface.
- No Core activation, suppressions, lint changes, manifests, lockfiles, generated output, CI, standalone documentation, or unrelated work.
- Hard limit: 25 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-totp-remaining-seconds
- Estimated authored changed lines: 25
- Owning modules, packages, or layers: Nook Core authenticator domain and facade, exact WASM projection, and Development Core guidance.
- Ownership units:
1. Capability: Typed TOTP remaining seconds; Gizmo ID: nook-core-totp-remaining-seconds; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Core returns the dedicated domain, the JavaScript getter remains numeric u32, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `TotpCode.seconds_remaining` uses a reexported domain while the WASM getter remains numeric.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 25
- Current PR slice and acceptance evidence: Type TOTP remaining seconds and the exact WASM projection; Acceptance evidence: focused conversion assertion, unchanged calculation and getter, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-totp-remaining-seconds; Gizmo name: Nook Core TOTP remaining seconds; Predecessor Gizmo ID: None; Type TOTP remaining seconds and the exact WASM projection; Estimated authored changed lines: 25; Acceptance evidence: focused conversion assertion, unchanged calculation and getter, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the infallible domain and type the Core result field.
2. Reexport it, adapt the exact WASM projection, and extend the existing Core test.
3. Verify calculation, JavaScript surface, residual inventory, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- Generated TOTP codes no longer expose raw remaining seconds through Nook Core.
- Existing calculation and JavaScript numeric shape remain unchanged.
- Residual inventory becomes 84 declarations: 75 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
