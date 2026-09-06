---
title: Provider outbox publication and acknowledgement typestate
feature: rust-action-ownership
issue: issues/rust-action-ownership/provider-outbox-publication.md
started_at: 2026-09-06T00:09:19Z
agent: codex
gizmo_id: rust-action-ownership-provider-outbox
---

# Task plan

## Interpreted request

Continue project-wide Rust action ownership by encoding provider outbox publication and durable acknowledgement as the simplest private consuming state transition.

## Requirements

- Capture each outbox row, provider identity, event identity, bytes, and current-index observation in a pending state.
- Permit publication when the index is absent or contains the event; discard rows excluded by a present index without publication.
- Produce a published state only after the existing put-if-absent call succeeds.
- Allow only the published state to remove the durable row and return its event identifier.
- Update remote identifiers only after acknowledgement.
- Preserve provider writability and visibility ordering, remote-listed publication, missing-event publication, error propagation, and future-drop behavior.
- Enable full-module ownership enforcement and retain or extend focused behavior tests.

## Constraints and exclusions

- Exact scope: `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs`.
- Keep authored additions at or below 180 and final file below 750 lines.
- Confirm an existing effect-test seam before implementation; use existing provider and storage facilities only.
- Private states must not implement `Clone`, `Copy`, `Default`, or serialization.
- The captured index remains the existing freshness boundary.
- No public API, WASM ABI, storage/event schema, crypto, authorization, TypeScript, dependency, logging, fallback, retry, or recovery change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-provider-outbox
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: nook-wasm provider event-log synchronization
- Ownership units:
1. Capability: Provider outbox publication and acknowledgement typestate; Gizmo ID: rust-action-ownership-provider-outbox; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: private pending and published provider outbox states; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted Rust, WASM behavior, Dylint, and remote Loom checks pass
- Public or cross-module interfaces: None; existing manager, provider, and storage interfaces remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Provider outbox publication and acknowledgement typestate; Acceptance evidence: Hosted Rust/WASM behavior, Dylint, remote Loom, and source SECURITY
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-provider-outbox; Gizmo name: Provider outbox publication and acknowledgement typestate; Predecessor Gizmo ID: None; Provider outbox publication and acknowledgement typestate; Estimated authored changed lines: 180; Acceptance evidence: Hosted Rust/WASM behavior, Dylint, remote Loom, and source SECURITY

## Initial plan

1. Implement the one-file pending-to-published-to-acknowledged transition with focused lifecycle coverage.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced acknowledgement after provider publication, preserved outbox behavior, module ownership enforcement, hosted Rust/WASM/Dylint gates, remote Loom, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
