---
title: Type Nook Core passkey secret versions
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T17:51:27Z
agent: codex
gizmo_id: nook-core-passkey-secret-version
---

# Nook Core passkey secret version

## Interpreted request

Deliver the next smallest Nook Core domain prerequisite as a minimal change.

## Requirements

- Replace `PasskeySecret.version` and its public version constant with a dedicated `PasskeySecretVersion` domain.
- Preserve numeric JSON and YAML representation while accepting only the supported version 1 during deserialization.
- Reject unsupported and overflowing persisted versions at the existing secret parsing boundary.
- Adapt only exact Core consumers and record the prerequisite in Cortex.

## Constraints and exclusions

- Do not change Nook WASM, web, auth2, unrelated passkey behavior, or another numeric surface.
- No Core activation, suppressions, lint changes, manifests, lockfiles, generated output, CI, standalone documentation, or unrelated work.
- Hard limit: 50 authored additions excluding lockfiles; do not increase. Keep every file below 1,000 lines.
- No local product builds/tests, Clippy, WASM builds, or Docker; use focused checks and hosted validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-passkey-secret-version
- Estimated authored changed lines: 50
- Owning modules, packages, or layers: Nook Core passkey secret model, exact Core consumers, stable Core facade, and Development Core guidance.
- Ownership units:
1. Capability: Typed passkey secret version; Gizmo ID: nook-core-passkey-secret-version; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: persisted version 1 remains numeric, unsupported versions fail at deserialization, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `PasskeySecret.version` and `PASSKEY_SECRET_VERSION` use a dedicated reexported domain while serialized values remain numeric.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 50
- Current PR slice and acceptance evidence: Type the passkey secret version and exact consumers; Acceptance evidence: numeric wire roundtrip, strict unsupported-version rejection, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-passkey-secret-version; Gizmo name: Nook Core passkey secret version; Predecessor Gizmo ID: None; Type the passkey secret version and exact consumers; Estimated authored changed lines: 50; Acceptance evidence: numeric wire roundtrip, strict unsupported-version rejection, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the validated scalar and type the passkey version field and constant.
2. Reexport the domain, remove redundant integer validation, and adapt only exact consumers.
3. Add focused numeric roundtrip and unsupported-version coverage; verify residual inventory, scope, sizes, and budget.
4. Publish, validate on the exact head, establish readiness, and squash merge.

## Completion evidence

- Passkey secrets no longer expose a raw numeric version through Nook Core.
- Numeric wire shape remains unchanged and unsupported persisted versions cannot enter the domain.
- Residual inventory becomes 86 declarations: 77 genuine and nine legitimate boundaries.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
