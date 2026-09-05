---
title: Simple genesis completion ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/simple-genesis-completion.md
started_at: 2026-09-05T20:15:00Z
agent: codex
gizmo_id: rust-action-ownership-simple-genesis-completion
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership with the simplest typestate migration for completed Simple-vault genesis.

## Requirements

- Move pending cleanup and staged identity publication from free functions onto the existing consuming `SimpleGenesisCompletion` state.
- Adapt manager and storage callers while preserving the completion enum's ordinary and staged variants.
- Preserve one read-write transaction, exact marker matching, staged migration and validation, concurrent-update rebasing, signing-seed publication, marker deletion, and completion/error ordering.
- Activate module-wide ownership deny and invalid-suppression forbid in the cleanup child module.
- Add bounded mismatched-marker preservation coverage if existing tests do not prove it.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-wasm/src/storage/identity_record/genesis_cleanup.rs`, `nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs`, `nook-app/nook-platform/nook-wasm/src/storage/identity_record/simple_genesis.rs`, `nook-app/nook-platform/nook-wasm/src/storage/identity_record/staged_genesis.rs`, and `nook-app/nook-platform/nook-wasm/src/manager/connect.rs`.
- Keep authored additions at or below 300 and every file below 1,000 lines; do not grow the 996-line parent module.
- Use the existing consuming completion enum; no artificial state, new constructor, authorization claim, protocol, schema, recovery, fallback, ABI, dependency, or logging change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-simple-genesis-completion
- Estimated authored changed lines: 300
- Owning modules, packages, or layers: nook-app/nook-platform/nook-wasm identity-record completion boundary
- Ownership units:
1. Capability: Simple genesis completion ownership; Gizmo ID: rust-action-ownership-simple-genesis-completion; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/storage/identity_record/genesis_cleanup.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record/simple_genesis.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record/staged_genesis.rs,nook-app/nook-platform/nook-wasm/src/manager/connect.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/storage/identity_record/simple_genesis.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record/staged_genesis.rs,nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-wasm/src/storage/schema; Expertise consumer interfaces: SimpleGenesisCompletion consuming completion method; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted behavior, transaction safety, and Dylint checks pass
- Public or cross-module interfaces: No public API change; the crate-internal completion enum owns its completion action
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Simple genesis completion ownership; Acceptance evidence: Hosted behavior, Dylint, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-simple-genesis-completion; Gizmo name: Simple genesis completion ownership; Predecessor Gizmo ID: None; Simple genesis completion ownership; Estimated authored changed lines: 300; Acceptance evidence: Hosted behavior, Dylint, and source SECURITY

## Initial plan

1. Start from current main after PR 1393.
2. Implement the five-file completion ownership migration and bounded marker-safety test.
3. Format, push, and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Exact marker and staged-publication behavior, module-wide ownership enforcement, hosted Rust/WASM/Dylint gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
