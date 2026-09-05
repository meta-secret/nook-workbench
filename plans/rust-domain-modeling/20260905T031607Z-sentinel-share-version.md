---
title: Reject invalid Sentinel share metadata during domain ingestion
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T03:16:07Z
agent: codex
gizmo_id: auth2-sentinel-share-version
---

# Sentinel share version and metadata ingestion

## Interpreted request

Complete the remaining Sentinel numeric-version prerequisite for auth2 API lint adoption. Invalid reserved share metadata must fail ingestion instead of being mistaken for a secret or an empty vault.

## Requirements

- Use a validated private-storage SentinelShareVersion with supported numeric encodings 1 and 2.
- Make metadata classification and state construction fallible with typed errors; no invalid share can enter the secret collection.
- Propagate errors through every direct consumer, including raw checkpoint replay, enrollment, password unlock, Simple unlock, and Sentinel ceremony paths.
- Stage validated replacement data before mutating live state or writing persistent data.
- Preserve successful wire encoding, legacy/current reconstruction, and valid event replay.
- Development core owns implementation and tests; Gizmo Prime owns publication, hosted validation, review disposition, and squash merge.

## Constraints and exclusions

- No invalid-record recovery bucket, fallback, alternate parser, new format, unrelated domain conversion, or CI change.
- Do not activate other crates in this prerequisite PR.
- Estimate 500 authored additions and reassess before exceeding that target. Keep each source file below 1,000 lines and the PR below the absolute 2,000-addition limit; lockfiles and generated output are separate.
- Preserve the existing Sentinel completion guard introduced by PR 1355.
- No local product compilation, testing, or full validation.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: auth2-sentinel-share-version
- Estimated authored changed lines: 500
- Owning modules, packages, or layers: auth2 Sentinel share and metadata domain; direct event-log payloads, Core ingestion/replay, and WASM session consumers.
- Ownership units:
1. Capability: Validated share versions and fallible atomic metadata ingestion; Gizmo ID: auth2-sentinel-share-version; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Rejected malformed shares never become secrets or mutate live state, supported numeric formats and flows remain valid, hosted Rust and WASM checks pass.
- Public or cross-module interfaces: SentinelShareEnvelope.version, OpenedSentinelShare.version, SentinelShareIssuedPayload.version, VaultMetaRecord.classify, VaultMetaState construction and application, directly affected ingestion methods.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 500
- Current PR slice and acceptance evidence: Sentinel version and direct fallible metadata ingestion; Acceptance evidence: Supported numeric round trips, malformed reserved record rejection, atomic replay and session tests, exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: auth2-sentinel-share-version; Gizmo name: Sentinel share ingestion; Predecessor Gizmo ID: None; Sentinel version and direct fallible metadata ingestion; Estimated authored changed lines: 500; Acceptance evidence: Supported numeric round trips, malformed reserved record rejection, atomic replay and session tests, exact-head hosted readiness.

## Initial plan

1. Branch after the password-envelope prerequisite merges and assign the bounded consumer set to Development core.
2. Implement strict version parsing and direct typed error propagation without recovery state.
3. Add inline domain and boundary tests and audit mutation ordering and file size.
4. Push the coherent commit, run hosted gates, repair accepted defects within scope, and squash merge after readiness.

## Completion evidence

- Unsupported values, malformed share JSON, and invalid reserved-key identifiers fail classification.
- Failed state construction/application and raw checkpoint replay cannot publish partial metadata.
- Access/readiness does not label malformed metadata as an empty vault.
- Password, Simple, Sentinel preparation/finalization, and genesis persistence paths preserve state or reset according to their existing guard on failure.
- Supported creation, enrollment, reconstruction, and event wire tests remain green.

## Safety review

- No raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details are included.
