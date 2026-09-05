---
title: Type Nook Core passkey signature counts
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T18:40:00Z
agent: codex
gizmo_id: nook-core-passkey-signature-count
---

# Nook Core passkey signature counts

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace `PasskeySecret.signature_count` with a dedicated `PasskeySignatureCount` domain.
- Preserve numeric serialization, counter ordering, checked increment overflow, and zeroization.
- Preserve primitive projections only where authenticator bytes and fingerprints require them.
- Reexport the domain, adapt exact fixtures, strengthen focused coverage, and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not change the serialized shape, WASM API, counter semantics, or migrate another numeric surface.
- No Core activation, suppressions, lint changes, manifests, lockfiles, generated output, CI, standalone documentation, or unrelated work.
- Hard limit: 55 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-passkey-signature-count
- Estimated authored changed lines: 55
- Owning modules, packages, or layers: Nook Core passkey domain, authenticator and fingerprint consumers, fixtures, facade, and Development Core guidance.
- Ownership units:
1. Capability: Typed passkey signature counts; Gizmo ID: nook-core-passkey-signature-count; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Passkey secrets expose the dedicated domain, numeric serialization and exact projections remain stable, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `PasskeySecret.signature_count` uses a reexported domain while serialized and authenticator representations remain numeric u32.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 55
- Current PR slice and acceptance evidence: Type passkey signature counts and exact consumers; Acceptance evidence: scalar YAML, checked increment and overflow, highest-counter selection, zeroization, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-passkey-signature-count; Gizmo name: Nook Core passkey signature counts; Predecessor Gizmo ID: None; Type passkey signature counts and exact consumers; Estimated authored changed lines: 55; Acceptance evidence: scalar YAML, checked increment and overflow, highest-counter selection, zeroization, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the transparent domain and type the persisted passkey field.
2. Reexport it and adapt authenticator, fingerprint, and fixture consumers with explicit projections.
3. Verify numeric serialization, counter semantics, residual inventory, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- Persisted passkey state no longer exposes a raw signature count through Nook Core.
- Numeric serialization, checked overflow, highest-counter ordering, and authenticator projections remain unchanged.
- Residual inventory becomes 83 declarations: 74 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
