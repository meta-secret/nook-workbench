---
title: Activate Event Log raw numeric public API enforcement
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T06:13:08Z
agent: codex
gizmo_id: event-log-domain-api-activation
---

# Event Log domain API lint activation

## Interpreted request

Onboard `nook-event-log`, the smallest dependency-safe remaining crate, to the Development Core-owned Dylint rule in one bounded PR. Preserve concrete canonical-serialization and database byte boundaries with narrow expectations while replacing six genuine numeric domain escapes with existing typed domains.

## Requirements

- Enable `invalid_raw_numeric_api_suppression` and `raw_numeric_public_api` at the `nook-event-log` crate root using the established convention.
- Add reason-bearing item expectations only to the 24 inventoried canonical-serialization, signing, and database byte boundaries.
- Replace Sentinel payload scalar fields with existing `SentinelThreshold`, `SentinelParticipantCount`, and `SentinelShareIndex` domain types while preserving transparent numeric serialization.
- Return the existing replication-owned causal-graph event count from `EventGraph::len`, exposing a local `EventCount` name if useful.
- Carry `VaultEventSchemaVersion` in unsupported-version errors, add canonical display/conversion support, and remove the unnecessary primitive getter.
- Adapt only direct Event Log, Core, and WASM consumers required by those typed interfaces and update the canonical activation registry.
- Development Core owns implementation and focused checks; Gizmo Prime owns publication, hosted validation, feedback disposition, readiness, and squash merge.

## Constraints and exclusions

- No Dylint implementation or UI snapshot changes, new byte-wrapper type, new numeric domain type, manifest changes, unrelated refactors, CI changes, or activation of another crate.
- No field, type, module, or crate-wide suppressions; every legitimate byte-boundary expectation must be attached to the narrowest linted item and explain the boundary.
- Preserve storage, canonical JSON, signing, YAML, and remote-event wire encodings.
- Target at most 260 authored additions and reassess before exceeding that estimate. Keep every authored file below 1,000 lines and the PR below the absolute 2,000-addition limit; lockfiles and generated output are excluded from counting.
- No local product compilation, Rust tests, Clippy, WASM builds, or Docker builds. Use formatting and structural checks locally; rely on hosted validation for product gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: event-log-domain-api-activation
- Estimated authored changed lines: 260
- Owning modules, packages, or layers: `nook-event-log` public domain and storage boundaries plus direct typed consumers in Core and WASM.
- Ownership units:
1. Capability: Event Log raw numeric public API enforcement; Gizmo ID: event-log-domain-api-activation; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted all-target Dylint accepts only the enumerated narrow byte boundaries, genuine numeric domain escapes use existing typed domains, wire behavior remains stable, and all hosted gates pass.
- Public or cross-module interfaces: Sentinel event payload fields use existing Auth2 domains, EventGraph length uses the existing replication count domain, and unsupported schema errors carry VaultEventSchemaVersion.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 260
- Current PR slice and acceptance evidence: Activate `nook-event-log` and adapt only its direct typed consumers; Acceptance evidence: Hosted Dylint and full repository gates pass at the exact PR head with existing wire fixtures preserved.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: event-log-domain-api-activation; Gizmo name: Event Log domain API activation; Predecessor Gizmo ID: None; Activate `nook-event-log` and adapt only its direct typed consumers; Estimated authored changed lines: 260; Acceptance evidence: Hosted Dylint and full repository gates pass at the exact PR head with existing wire fixtures preserved.

## Initial plan

1. Publish this bounded plan and delegate the implementation to Development Core.
2. Add crate enforcement, annotate only the inventoried byte boundaries, replace the six primitive domain escapes, and adapt direct consumers.
3. Audit the full diff, serialization stability, suppression granularity, formatting, file sizes, and authored-line budget before publishing.
4. Run hosted validation, repair only in-scope defects, establish exact-head readiness, publish Workbench evidence, and squash merge.

## Completion evidence

- `nook-event-log` denies raw numeric public domain APIs and forbids invalid broad suppression.
- All 24 legitimate canonical-serialization, signing, and database boundaries use narrow reason-bearing expectations.
- Sentinel payload values, event counts, and schema-version errors expose existing typed domains rather than primitives.
- Existing serialized fixtures and direct consumers preserve behavior.
- The canonical typed-newtypes activation registry includes `nook-event-log`.
- Hosted all-target Dylint and full PR validation pass on the exact merge head.

## Safety review

- No raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details are included.
