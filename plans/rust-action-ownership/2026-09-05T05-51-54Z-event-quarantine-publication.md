---
title: Event quarantine publication boundary
feature: rust-action-ownership
issue: issues/rust-action-ownership/event-quarantine-publication.md
started_at: 2026-09-05T05:51:54Z
agent: codex
gizmo_id: rust-action-ownership-event-quarantine-publication
---

# Task plan

## Interpreted request

Continue the secure Rust action-graph migration by making local quarantine a typed rejection before the core session publishes event state.

## Requirements

- Add EventError::LocalAppendQuarantined with the exact EventId and existing diagnostic reason.
- Match EventInsertStatus in VaultEventSession::append_operations before changing heads or queueing outbox bytes.
- Reject only Quarantined; preserve Applied, Pending, and Duplicate behavior exactly.
- Add focused behavior tests for quarantine rejection, unchanged session/store/outbox state, staged rotation rollback, and preserved successful dispositions.

## Constraints and exclusions

- Begin from current main after OAuth origin ownership integration.
- Keep the existing LocalEventStore append API and synchronous validation/commit flow.
- Do not parse reason text into another error, change serialization, add a prepared wrapper, claim global freshness or provider durability, or alter the separate WASM persistence route.
- Preserve signatures, wire data, graph authorization, causal concurrency, crypto, recovery, and existing error precedence.
- No local product compilation or tests. Keep source files within 1000 lines.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-event-quarantine-publication
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: nook-app/nook-platform/nook-event-log/src/errors.rs, nook-app/nook-platform/nook-core/src/vault/vault_event_session.rs, nook-app/nook-platform/nook-core/tests/event_log_workflow.rs
- Ownership units:
1. Capability: Event quarantine publication boundary; Gizmo ID: rust-action-ownership-event-quarantine-publication; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Typed quarantine rejection, behavior-focused hosted Rust tests, and source security review of disposition and rollback behavior
- Public or cross-module interfaces: EventError gains a typed non-serialized variant; VaultEventSession method signatures remain unchanged
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Quarantine publication rejection; Acceptance evidence: Hosted domain tests, Dylint, source SECURITY, and exact-head readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-event-quarantine-publication; Gizmo name: Event quarantine publication boundary; Predecessor Gizmo ID: None; Quarantine publication rejection; Estimated authored changed lines: 180; Acceptance evidence: Hosted domain tests, Dylint, source SECURITY, and exact-head readiness

## Initial plan

1. Start from current main after OAuth origin ownership merges.
2. Implement the three-file typed rejection and bounded behavior tests.
3. Format, push, and obtain hosted validation and source SECURITY.
4. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Quarantined events cannot update core heads or outbox; Applied, Pending, and Duplicate are unchanged; staged rotation remains atomic on rejection; hosted checks, source SECURITY, readiness, squash merge, and Workbench records are verified.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
