---
title: Validate password envelope versions before state mutation
feature: rust-domain-modeling
issue: null
started_at: 2026-09-05T01:53:23Z
agent: codex
gizmo_id: auth2-password-envelope-version
---

# Password envelope version domain

## Interpreted request

Advance the incremental Rust API migration with a validated password-envelope version. Preserve supported encrypted records and reject invalid metadata before modifying a manager session.

## Requirements

- Introduce a private-storage domain type for the existing password envelope version, accepting supported numeric encodings 1 and 2.
- Preserve supported unlock, rewrap, serialization, and event projection behavior.
- Propagate malformed password metadata errors instead of suppressing them or publishing partially updated session state.
- Development core implements the bounded change; Gizmo Prime owns publication, hosted checks, review disposition, and squash merge.
- Complete the current count and epoch PR before beginning this implementation.

## Constraints and exclusions

- This PR does not activate another crate or modify Sentinel-share classification.
- No new storage format, recovery path, generalized parser, CI change, or unrelated refactor.
- Keep the change near 190 authored additions, excluding generated output and lockfiles. Reassess before material growth; never exceed 2,000 authored additions or 1,000 lines per source file.
- Use hosted product validation. Local work is limited to permitted formatting and delivery hygiene.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: auth2-password-envelope-version
- Estimated authored changed lines: 190
- Owning modules, packages, or layers: nook-auth2 password envelope and error APIs; direct nook-core, nook-event-log, and nook-wasm consumers.
- Ownership units:
1. Capability: Typed envelope version with atomic metadata parsing; Gizmo ID: auth2-password-envelope-version; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Supported scalar wire round trips, unsupported version rejection, unchanged session on malformed metadata, hosted Rust and WASM checks.
- Public or cross-module interfaces: PasswordEnvelope.version, PasswordError version payload, manager password metadata capture and hydration.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 190
- Current PR slice and acceptance evidence: Password version domain and directly required error propagation; Acceptance evidence: Inline Rust behavior tests and exact-head hosted readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: auth2-password-envelope-version; Gizmo name: Password envelope version domain; Predecessor Gizmo ID: None; Password version domain and directly required error propagation; Estimated authored changed lines: 190; Acceptance evidence: Inline Rust behavior tests and exact-head hosted readiness.

## Initial plan

1. Finish PR 1356 and branch from fresh Main.
2. Assign the scoped implementation and tests to Development core.
3. Review the full diff against the size and behavior boundary; publish the coherent commit.
4. Run hosted validation, address accepted findings, and squash merge after exact-head readiness.

## Completion evidence

- Versions 1 and 2 round-trip as numbers; unsupported values fail deserialization.
- Failed password metadata parsing leaves manager session state unchanged and cannot fall through to event hydration.
- Existing supported password operations and event projection tests pass.
- A single focused PR passes formatting, Dylint, Rust, WASM, web, policy, and readiness gates before squash merge.

## Safety review

- This record contains no raw prompt, transcript, secrets, credentials, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
