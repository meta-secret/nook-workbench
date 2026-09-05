---
title: Secret import coalesced-to-prepared typestate
feature: rust-action-ownership
issue: issues/rust-action-ownership/secret-import-commit-state.md
started_at: 2026-09-05T22:25:26Z
agent: codex
gizmo_id: rust-action-ownership-secret-import-commit
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership by encoding secret import preparation and persistence as the simplest private consuming typestate transition.

## Requirements

- Construct a coalesced import state from incoming items and the existing secrets key.
- Consume that state to group existing encrypted records and reconcile every import item into encrypted operations.
- Return a prepared state only after all items prepare successfully.
- Allow only the prepared state to run the existing final append action.
- Preserve duplicate classification, metadata enrichment, crypto restoration, Sentinel admission, runtime authorization, event ordering, zeroization, status updates, and error propagation.
- Enable full-module ownership lints and add focused preparation behavior coverage.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`.
- Keep authored additions at or below 300 and the final file below 750 lines.
- Private states must not implement `Clone`, `Copy`, `Default`, or serialization.
- Prepared data does not replace runtime authorization or freshness checks.
- No public API, WASM ABI, event/storage schema, dependency, logging, fallback, cleanup, retry, or recovery-policy change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-secret-import-commit
- Estimated authored changed lines: 300
- Owning modules, packages, or layers: nook-wasm secret import preparation and commit
- Ownership units:
1. Capability: Secret import coalesced-to-prepared typestate; Gizmo ID: rust-action-ownership-secret-import-commit; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: private coalesced and prepared secret import states; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted behavior, Rust, WASM, and Dylint checks pass
- Public or cross-module interfaces: None; existing NookVaultManager WASM imports remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Secret import coalesced-to-prepared typestate; Acceptance evidence: Hosted behavior, Rust, WASM, Dylint, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-secret-import-commit; Gizmo name: Secret import coalesced-to-prepared typestate; Predecessor Gizmo ID: None; Secret import coalesced-to-prepared typestate; Estimated authored changed lines: 300; Acceptance evidence: Hosted behavior, Rust, WASM, Dylint, and source SECURITY

## Initial plan

1. Implement the one-file consuming preparation and commit states with focused behavior tests.
2. Format, push, and obtain hosted validation and exact-head source SECURITY.
3. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced prepared-state commit access, preserved import behavior and runtime authorization, full-module ownership enforcement, hosted Rust/WASM/Dylint gates, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
