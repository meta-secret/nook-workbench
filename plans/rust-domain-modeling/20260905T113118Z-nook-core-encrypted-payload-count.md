---
title: Type Nook Core encrypted-payload counts
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T11:31:18Z
agent: codex
gizmo_id: nook-core-encrypted-payload-count
---

# Nook Core encrypted-payload count

## Interpreted request

Continue Nook Core through its next smallest dependency-safe domain prerequisite without expanding pull-request scope.

## Requirements

- Introduce transparent `VaultEncryptedPayloadCount` with private storage and canonical `usize` conversions.
- Replace `VaultEventPayloadAccessDiagnostic.encrypted_payloads` and adapt only its constructor, test, and direct Nook WASM projection.
- Preserve numeric-scalar JSON and the existing reviewed JavaScript Number FFI getter.
- Reexport the domain through Nook Core and record the prerequisite in canonical Development Core guidance.

## Constraints and exclusions

- Do not activate Nook Core or migrate any other numeric surface.
- Do not add a Core suppression, lint implementation, UI fixture, manifest, lockfile, generated TypeScript, CI, standalone Dylint documentation, or unrelated change.
- Hard limit: 50 authored additions excluding lockfiles; do not increase. Target 32 to 40 additions. Keep every authored file below 1,000 lines.
- No local product compilation, Rust tests, Clippy, WASM builds, or Docker builds; rely on hosted product validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-encrypted-payload-count
- Estimated authored changed lines: 40
- Owning modules, packages, or layers: Nook Core vault-access diagnostics, stable Core exports, direct Nook WASM diagnostics projection, and Development Core guidance.
- Ownership units:
1. Capability: Typed encrypted-payload diagnostic count; Gizmo ID: nook-core-encrypted-payload-count; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: scalar serialization and conversions pass, the direct WASM projection preserves its reviewed boundary, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `VaultEventPayloadAccessDiagnostic.encrypted_payloads` becomes an explicit domain value while the JavaScript getter remains numeric.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 40
- Current PR slice and acceptance evidence: Type the encrypted-payload diagnostic count and adapt its direct projection; Acceptance evidence: scalar serialization, focused conversion coverage, unchanged JavaScript getter, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-encrypted-payload-count; Gizmo name: Nook Core encrypted-payload count; Predecessor Gizmo ID: None; Type the encrypted-payload diagnostic count and adapt its direct projection; Estimated authored changed lines: 40; Acceptance evidence: scalar serialization, focused conversion coverage, unchanged JavaScript getter, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the count domain and focused scalar round-trip coverage.
2. Type the diagnostic field and adapt its constructor, assertion, and one WASM projection.
3. Verify formatting, wire shape, residual inventory, scope, sizes, and the fixed budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- The diagnostic count no longer exposes `usize` through Nook Core.
- JSON remains a scalar and the reviewed JavaScript getter remains numeric.
- Residual inventory becomes 92 declarations: 83 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
