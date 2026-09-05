---
title: Local keyring signing derivation ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/local-keyring-signing.md
started_at: 2026-09-05T21:34:19Z
agent: codex
gizmo_id: rust-action-ownership-local-keyring-signing
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership with the smallest safe keyring slice while reserving typestate for real action lifecycles.

## Requirements

- Move private signing-public-key derivation onto `DeviceSigningPublicKey`.
- Adapt the three local keyring callers without changing their public signatures.
- Replace the free test helper with a data-carrying fixture.
- Preserve exact parsing and error order, output bytes, app-key checks, encryption, reopen verification, and mutation order.
- Add invalid-seed and failed-protection nonmutation coverage.
- Activate module-wide ownership deny and invalid-suppression forbid.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-auth2/src/auth/local_identity_keyring.rs`.
- Keep authored additions at or below 180 and the file below 500 lines.
- No new typestate, public API, serialization, schema, dependency, logging, compatibility, or fallback behavior.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-local-keyring-signing
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: nook-auth2 local identity keyring
- Ownership units:
1. Capability: Local keyring signing derivation ownership; Gizmo ID: rust-action-ownership-local-keyring-signing; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-auth2/src/auth/local_identity_keyring.rs; Expertise allowed test paths: nook-app/nook-platform/nook-auth2/src/auth/local_identity_keyring.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-wasm; Expertise consumer interfaces: LocalIdentityKeyringEntry protection and public-key methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted behavior and Dylint checks pass
- Public or cross-module interfaces: None; existing entry method signatures remain unchanged
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Local keyring signing derivation ownership; Acceptance evidence: Hosted behavior, Dylint, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-local-keyring-signing; Gizmo name: Local keyring signing derivation ownership; Predecessor Gizmo ID: None; Local keyring signing derivation ownership; Estimated authored changed lines: 180; Acceptance evidence: Hosted behavior, Dylint, and source SECURITY

## Initial plan

1. Implement the one-file ownership migration and focused failure tests.
2. Format, push, and obtain hosted validation and source SECURITY.
3. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Exact derivation and nonmutation behavior, module-wide ownership enforcement, hosted Rust/Dylint gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
