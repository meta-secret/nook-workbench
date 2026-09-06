---
title: Website passkey authenticator ceremony ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/passkey-authenticator.md
started_at: 2026-09-06T05:02:27Z
agent: codex
gizmo_id: rust-action-ownership-passkey-authenticator
---

# Task plan

## Interpreted request

Continue the project-wide Rust migration with a substantial software-authenticator boundary that encodes registration admission and assertion credential selection before their cryptographic actions.

## Requirements

- Split registration, assertion, and encoding into focused production children with their relevant tests inline.
- Move origin validation, canonical decoding, credential selection, encoding, key validation, material comparison, registration, and assertion onto meaningful data owners.
- Add private non-Clone `CheckedPasskeyRegistration` and `CheckedPasskeyAssertion` states that retain borrowed admission evidence and consume themselves during generation or signing.
- Preserve the exact request, credential, next-counter, client-data, and key evidence selected by preparation.
- Adapt existing public Rust consumers to the owned API and direct WASM manager calls without changing WASM exports.
- Preserve validation order, exact errors, algorithms, encodings, flags, signatures, stored schemas, secret handling, ceremony guards, encrypted persistence, duplicate cleanup, and append/response sequencing.
- Add bounded colocated behavior and compile controls for the migrated boundary.

## Constraints and exclusions

- Exact scope: the nine files listed in `issues/rust-action-ownership/passkey-authenticator.md` under `nook-app/nook-platform`.
- Target 1,200–1,500 authored additions; hard ceiling 1,700 and every final file below 1,000 lines.
- Private checked states must not implement `Clone`, `Copy`, `Default`, or serialization.
- Preserve existing credential cloning and secret zeroization; do not introduce unnecessary secret copies.
- The states do not establish global counter uniqueness, user presence, user verification, or durable persistence.
- No public WASM ABI, stored credential schema, dependency, logging, fallback, recovery, TypeScript, or unrelated policy change.
- Public Rust free-function callers intentionally migrate to type-owned methods and state exports.
- No file overlap with live PRs #1427, #1425, or #1210.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-passkey-authenticator
- Estimated authored changed lines: 1400
- Owning modules, packages, or layers: nook-core passkey software authenticator and nook-wasm adapter
- Ownership units:
1. Capability: Registration admission and consuming credential generation; Gizmo ID: rust-action-ownership-passkey-authenticator; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator.rs,nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator/registration.rs,nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator/encoding.rs,nook-app/nook-platform/nook-core/src/lib.rs,nook-app/nook-platform/nook-core/src/secrets/secret_types.rs,nook-app/nook-platform/nook-core/src/secrets/secret_fingerprint.rs,nook-app/nook-platform/nook-core/tests/vault_workflow.rs; Expertise allowed test paths: colocated tests in the focused authenticator production modules and existing vault workflow integration test; Expertise forbidden paths: nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: Owned core registration API and unchanged WASM ceremony methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted core behavior, WASM adapter, compile controls, and Dylint checks pass
2. Capability: Assertion selection and consuming signature generation; Gizmo ID: rust-action-ownership-passkey-authenticator; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator.rs,nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator/assertion.rs,nook-app/nook-platform/nook-core/src/secrets/passkey_authenticator/encoding.rs,nook-app/nook-platform/nook-core/src/lib.rs,nook-app/nook-platform/nook-wasm/src/manager/passkeys.rs; Expertise allowed test paths: colocated tests in the focused authenticator production modules; Expertise forbidden paths: nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: Owned core assertion API and unchanged WASM ceremony methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted assertion selection/signature behavior, WASM adapter, compile controls, and Dylint checks pass
- Public or cross-module interfaces: Core callers migrate from free operations to owned APIs; public WASM signatures and stored credential schemas stay stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1400
- Current PR slice and acceptance evidence: Complete registration, assertion, encoding, key-material ownership, colocated tests, and direct consumer adaptation; Acceptance evidence: Remote Loom, hosted core/WASM/Dylint behavior, exact-head source SECURITY, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-passkey-authenticator; Gizmo name: Website passkey authenticator ceremony ownership; Predecessor Gizmo ID: None; Registration and assertion checked states, encoding/key owners, colocated tests, and consumers; Estimated authored changed lines: 1400; Acceptance evidence: Remote Loom, hosted core/WASM/Dylint behavior, exact-head source SECURITY, and readiness

## Initial plan

1. Implement focused authenticator modules, checked ceremony states, owned encoding/key operations, and nine-file consumer adaptation within the hard budget.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings within scope, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced registration admission and assertion selection before consuming cryptographic actions, preserved formats and security behavior, complete authenticator ownership enforcement, hosted core/WASM/Dylint gates, remote Loom, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
