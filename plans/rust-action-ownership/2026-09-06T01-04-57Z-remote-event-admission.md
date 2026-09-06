---
title: Remote event admission and epoch visibility
feature: rust-action-ownership
issue: issues/rust-action-ownership/remote-event-admission.md
started_at: 2026-09-06T01:04:57Z
agent: codex
gizmo_id: rust-action-ownership-remote-event-admission
---

# Task plan

## Interpreted request

Continue the project-wide migration with a substantial event-log boundary that makes remote validation, candidate union, epoch visibility, and final store replacement type-directed and consuming.

## Requirements

- Move remote union preparation and commit onto `LocalEventStore` and a private non-Clone prepared state that exclusively borrows the destination.
- Move parsed remote-event observations onto a checked event owner after requested-ID, schema, and actor-signature validation.
- Move remote classification and visibility ordering onto meaningful borrowed and mutable batch owners.
- Put epoch trigger/checkpoint observations on `VaultEvent` and candidate visibility calculations on `LocalEventStore`.
- Preserve validation/error order, duplicate handling, candidate-graph authorization, quarantine, outbox retention/filtering, store classification, and deterministic visibility ordering.
- Migrate every direct core/WASM consumer and enable complete ownership enforcement in the store and visibility modules.
- Preserve all existing behavior tests and add prepared-state, nonmutation, equivalence, batch, and compile-fail evidence.

## Constraints and exclusions

- Exact scope: `nook-event-log/src/store.rs`, new `nook-event-log/src/store/remote.rs`, `nook-event-log/src/remote_epoch_visibility.rs`, `nook-event-log/src/lib.rs`, `nook-core/src/lib.rs`, `nook-core/src/vault/vault_event_session.rs`, `nook-wasm/src/manager/event_log.rs`, `nook-wasm/src/manager/event_log/provider_sync.rs`, `nook-wasm/src/manager/event_log/extension_import.rs`, and `nook-wasm/src/storage/event_db/security_epoch.rs` under `nook-app/nook-platform`.
- Target 1,400–1,640 authored additions; hard ceiling 1,950 and every final file below 1,000 lines.
- Checked events do not claim graph membership authorization; prepared state does not add persistence or cross-transaction guarantees.
- Reuse current signed-event fixtures and existing compile-fail harness.
- No event serialization/signing algorithm, graph reduction, generic IndexedDB, provider adapter, public Rust/WASM API, TypeScript, schema, dependency, logging, fallback, retry, recovery, or concurrency-guarantee change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-remote-event-admission
- Estimated authored changed lines: 1640
- Owning modules, packages, or layers: nook-event-log remote admission and direct nook-core/nook-wasm consumers
- Ownership units:
1. Capability: Checked remote event and prepared candidate-store union; Gizmo ID: rust-action-ownership-remote-event-admission; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-event-log/src/store.rs,nook-app/nook-platform/nook-event-log/src/store/remote.rs,nook-app/nook-platform/nook-event-log/src/lib.rs; Expertise allowed test paths: nook-app/nook-platform/nook-event-log/src/store.rs,nook-app/nook-platform/nook-event-log/src/store/remote.rs; Expertise forbidden paths: nook-app/nook-platform/nook-event-log/src/graph,nook-app/nook-platform/nook-event-log/src/projection.rs; Expertise consumer interfaces: LocalEventStore remote union methods and private prepared state; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted Rust behavior, compile-fail, and Dylint checks pass
2. Capability: Security epoch visibility and direct consumer migration; Gizmo ID: rust-action-ownership-remote-event-admission; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-event-log/src/remote_epoch_visibility.rs,nook-app/nook-platform/nook-core/src/lib.rs,nook-app/nook-platform/nook-core/src/vault/vault_event_session.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log/extension_import.rs,nook-app/nook-platform/nook-wasm/src/storage/event_db/security_epoch.rs; Expertise allowed test paths: nook-app/nook-platform/nook-event-log/src/remote_epoch_visibility.rs,nook-app/nook-platform/nook-event-log/src/store/remote.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core/src/vault/vault_event_graph.rs,nook-app/nook-platform/nook-wasm/src/storage/indexed_db; Expertise consumer interfaces: owned remote classification and visibility-order methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted Rust/WASM behavior, compile-fail, Dylint, and remote Loom checks pass
- Public or cross-module interfaces: Existing remote event operations remain available through LocalEventStore and crate reexports; public WASM ABI remains stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1640
- Current PR slice and acceptance evidence: Remote event admission, prepared union, and security epoch visibility; Acceptance evidence: Remote Loom, hosted Rust/WASM behavior, compile-fail and Dylint, exact-head source SECURITY, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-remote-event-admission; Gizmo name: Remote event admission and epoch visibility; Predecessor Gizmo ID: None; Remote event admission, prepared union, and security epoch visibility; Estimated authored changed lines: 1640; Acceptance evidence: Remote Loom, hosted Rust/WASM behavior, compile-fail and Dylint, exact-head source SECURITY, and readiness

## Initial plan

1. Implement the checked-event and prepared-union ownership graph, visibility owners, and direct caller migration within the hard budget.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings within scope, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced prepared union commit, preserved validation/authorization/quarantine/outbox semantics, deterministic epoch visibility, complete touched-module ownership enforcement, hosted Rust/WASM/compile-fail/Dylint gates, remote Loom, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
