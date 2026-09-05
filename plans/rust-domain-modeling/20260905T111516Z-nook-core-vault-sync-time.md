---
title: Type Nook Core vault-sync timestamp
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T11:15:16Z
agent: codex
gizmo_id: nook-core-vault-sync-time
---

# Nook Core vault-sync timestamp

## Interpreted request

Continue the one-crate Dylint rollout without expanding PR size by delivering Nook Core's smallest dependency-safe prerequisite before full crate activation.

## Requirements

- Introduce a dedicated `VaultSyncUnixMilliseconds` domain type.
- Replace `VaultLastSync::Synced.at_unix_milliseconds` with that domain type.
- Adapt only the direct Nook WASM projection while preserving its validated JavaScript `f64` boundary.
- Record the completed prerequisite in the canonical Development Core Cortex guidance.
- Development Core owns implementation and focused checks; Gizmo Prime owns publication, hosted validation, readiness, and squash merge.

## Constraints and exclusions

- Do not activate the Nook Core Dylint in this PR.
- Do not migrate any of the other 84 genuine domain surfaces or add any of the nine eventual boundary suppressions.
- No lint implementation, UI fixtures, manifest, lockfile, generated TypeScript, CI, standalone Dylint documentation, or unrelated crate activation.
- Hard limit: 60 authored additions, excluding lockfiles; do not increase. Target 35 to 45 additions. Keep every authored file below 1,000 lines.
- No local product compilation, Rust tests, Clippy, WASM builds, or Docker builds. Use focused formatting and structural checks locally; rely on hosted validation for product gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: nook-core-vault-sync-time
- Estimated authored changed lines: 45
- Owning modules, packages, or layers: Nook Core vault-sync state, Nook Core public exports, the direct Nook WASM sync-state projection, and canonical Development Core guidance.
- Ownership units:
1. Capability: Typed Nook Core vault-sync timestamp; Gizmo ID: nook-core-vault-sync-time; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: the field uses a transparent timestamp domain, the direct Nook WASM projection preserves its f64 JavaScript boundary, residual inventory drops by one, and exact-head hosted validation passes.
- Public or cross-module interfaces: `VaultLastSync::Synced.at_unix_milliseconds` becomes an explicit domain value; the JavaScript boundary remains an `f64` projection.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 45
- Current PR slice and acceptance evidence: Type the vault-sync timestamp and adapt its direct projection; Acceptance evidence: transparent scalar serialization, focused conversion coverage, unchanged JavaScript f64 boundary, fixed budget, and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: nook-core-vault-sync-time; Gizmo name: Nook Core vault-sync timestamp; Predecessor Gizmo ID: None; Type the vault-sync timestamp and adapt its direct projection; Estimated authored changed lines: 45; Acceptance evidence: transparent scalar serialization, focused conversion coverage, unchanged JavaScript f64 boundary, fixed budget, and exact-head hosted readiness.

## Initial plan

1. Add the transparent vault-sync timestamp domain and focused conversion/serialization coverage.
2. Replace the single Nook Core field and adapt the one direct Nook WASM consumer.
3. Verify formatting, wire shape, residual inventory, file sizes, scope, and the fixed 60-addition budget.
4. Publish, run exact-head hosted validation, repair only in-scope defects, establish readiness, and squash merge.

## Completion evidence

- The Nook Core vault-sync timestamp no longer exposes a raw numeric primitive.
- Serialization remains scalar-compatible and the Nook WASM projection remains an `f64` JavaScript boundary.
- The residual inventory is reduced by exactly one genuine field.
- Hosted validation passes on the exact merge head.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
