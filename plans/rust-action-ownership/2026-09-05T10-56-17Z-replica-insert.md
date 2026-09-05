---
title: Immutable replica insertion ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/replica-insert.md
started_at: 2026-09-05T10:56:17Z
agent: codex
gizmo_id: rust-action-ownership-replica-insert
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership by moving immutable replica insertion classification onto its meaningful domain result type.

## Requirements

- Move `classify_immutable_insert` onto `ReplicaInsertStatus` as a private method.
- Adapt `ReplicaStore::put_event`, `ReplicaStore::queue_outbox`, and the Kani proof without changing classification.
- Inline the Loom lock and join helpers at their existing call sites while preserving poisoning and panic propagation.
- Activate complete-module ownership deny and invalid-suppression forbid without blanket exemptions.
- Retain existing ordinary, property, Loom, and Kani evidence and add one empty-payload classification test.

## Constraints and exclusions

- Exact one-file scope: `nook-app/nook-platform/nook-replication/src/replica_store.rs`.
- Keep the file below 1,000 lines and authored additions at or below 180.
- Preserve the Kani proof as a framework entrypoint.
- No artificial typestate, export, signature, authorization, durability, schema, cryptography, recovery, WASM, TypeScript, dependency, fallback, or logging change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-replica-insert
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: nook-app/nook-platform/nook-replication/src/replica_store.rs
- Ownership units:
1. Capability: Immutable replica insertion ownership; Gizmo ID: rust-action-ownership-replica-insert; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact insertion and Loom behavior, Kani proof, hosted tests, Dylint and source SECURITY
- Public or cross-module interfaces: No export change; a private free classifier becomes a private ReplicaInsertStatus method
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Immutable replica insertion ownership; Acceptance evidence: Hosted behavior, Loom, Kani, Dylint and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-replica-insert; Gizmo name: Immutable replica insertion ownership; Predecessor Gizmo ID: None; Immutable replica insertion ownership; Estimated authored changed lines: 180; Acceptance evidence: Hosted behavior, Loom, Kani, Dylint and source SECURITY

## Initial plan

1. Start from current main after identity epoch ownership.
2. Implement the one-file classifier and helper ownership change with bounded evidence.
3. Format, push and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge and publish Workbench completion.

## Completion evidence

Exact insertion and concurrency behavior, framework entrypoints, module-wide ownership enforcement, hosted Rust/WASM/Dylint/Kani/Loom gates, source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
