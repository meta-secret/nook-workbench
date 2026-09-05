---
title: Sentinel signature operation ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-signature.md
started_at: 2026-09-05T19:00:54Z
agent: codex
gizmo_id: rust-action-ownership-sentinel-signature
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership by moving shared Sentinel signature operations onto the signing public-key domain type.

## Requirements

- Move shared key derivation and signature verification from free functions onto `DeviceSigningPublicKey` with auth-internal visibility.
- Adapt Sentinel genesis, unlock, and response callers without changing their protocol-specific error variants.
- Preserve Ed25519 bytes, lowercase hex encoding, exact decoding lengths, and verification of the original bytes.
- Activate module-wide ownership deny and invalid-suppression forbid.
- Add focused valid, tampered, wrong-key, malformed input, and error-mapping coverage.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-auth2/src/auth/sentinel_signing.rs`, `nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis.rs`, `nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock.rs`, and `nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock/response.rs`.
- Keep authored additions at or below 220 and every file below 1,000 lines.
- These reusable cryptographic operations do not carry lifecycle state; no artificial typestate, protocol, schema, authorization, persistence, recovery, fallback, ABI, dependency, or logging change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-sentinel-signature
- Estimated authored changed lines: 220
- Owning modules, packages, or layers: nook-app/nook-platform/nook-auth2/src/auth Sentinel signing boundary
- Ownership units:
1. Capability: Sentinel signature operation ownership; Gizmo ID: rust-action-ownership-sentinel-signature; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-auth2/src/auth/sentinel_signing.rs,nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis.rs,nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock.rs,nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock/response.rs; Expertise allowed test paths: nook-app/nook-platform/nook-auth2/src/auth/sentinel_signing.rs; Expertise forbidden paths: nook-app/nook-platform/nook-auth2/src/wire,nook-app/nook-platform/nook-core; Expertise consumer interfaces: DeviceSigningPublicKey auth-internal methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted cryptographic behavior and Dylint checks pass
- Public or cross-module interfaces: No public API change; auth-internal DeviceSigningPublicKey methods replace auth-internal free functions
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 220
- Current PR slice and acceptance evidence: Sentinel signature operation ownership; Acceptance evidence: Hosted behavior, Dylint, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-sentinel-signature; Gizmo name: Sentinel signature operation ownership; Predecessor Gizmo ID: None; Sentinel signature operation ownership; Estimated authored changed lines: 220; Acceptance evidence: Hosted behavior, Dylint, and source SECURITY

## Initial plan

1. Start from current main after PR 1385.
2. Implement the four-file ownership migration and bounded behavior tests.
3. Format, push, and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Exact signature behavior and protocol errors, module-wide ownership enforcement, hosted Rust/WASM/Dylint gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
