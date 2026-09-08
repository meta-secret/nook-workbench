---
title: Own provider architecture and shared grant actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/provider-architecture.md
started_at: 2026-09-08T00:50:00Z
agent: codex
gizmo_id: rust-action-ownership-provider-architecture
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with a cohesive provider-architecture boundary. Keep provider capability and shared-grant ceremony policy attached to the types that carry provider, architecture, request, and outcome invariants while preserving every wire and error contract.

## Requirements

- Move provider capability lookup, replication validation, architecture/provider validation, shared-grant preparation, and flush eligibility onto existing domain owners.
- Migrate core sync-store, WASM adapters, and focused tests in the same closure.
- Enforce homeless-function denial in the completed architecture modules while keeping public WASM methods as adapters.
- Keep the complete change below the 1,800-addition ceiling and deliver one cohesive PR.
- Run formatting, diff, Loom, hosted validation, exact-head readiness, merge, and Workbench closeout.

## Constraints and exclusions

Preserve provider matrices, OAuth preset behavior, validation order, target projection, serialized names, public adapter names, and errors. Exclude provider I/O, authentication, authorization, persistence, schema, cryptography, fallback, recovery, retry, and generic phase-framework changes. Do not run local product builds or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-provider-architecture
- Estimated authored changed lines: 1000
- Owning modules, packages, or layers: nook-app/nook-platform/nook-core vault architecture and provider/shared-grant modules; direct nook-core sync-store and nook-wasm adapters
- Ownership units:
  1. Capability: Provider and architecture compatibility policy; Gizmo ID: rust-action-ownership-provider-architecture; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Provider capability matrix, architecture validation, and replication errors remain unchanged.
  2. Capability: Shared storage grant ceremony policy; Gizmo ID: rust-action-ownership-provider-architecture; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Identity validation, unsupported/manual/granted outcomes, target projection, and credential flush policy remain unchanged.
- Public or cross-module interfaces: Existing nook-core architecture/request/outcome types and public nook-wasm provider/shared-grant adapter functions
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1000
- Current PR slice and acceptance evidence: Provider compatibility and shared-grant ceremony actions with all direct callers; Acceptance evidence: hosted required checks, remote Loom, readiness, and exact-head deployment pass with current matrices and serialized outcomes.
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: rust-action-ownership-provider-architecture; Gizmo name: Provider architecture ownership; Predecessor Gizmo ID: None; Provider compatibility and shared-grant ceremony actions with all direct callers; Estimated authored changed lines: 1000; Acceptance evidence: hosted required checks, remote Loom, readiness, and exact-head deployment pass with current matrices and serialized outcomes.

## Initial plan

1. Inventory provider architecture declarations and every direct caller from refreshed `main`.
2. Add associated domain actions and focused owner tests without changing values or errors.
3. Remove detached core exports and migrate sync-store, WASM, and focused callers.
4. Enable ownership denial and run format, diff, size, and Loom gates.
5. Push one cohesive PR, complete exact-head hosted validation, merge, and publish Workbench closeout.

## Completion evidence

- Final PR head, merge SHA, remote Loom, hosted checks, deployment, readiness, and published Workbench issue, worklog, and statistics.

## Safety review

- This record contains no prompt text, credentials, private information, raw diagnostics, local filesystem paths, or unnecessary infrastructure detail.
