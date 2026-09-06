---
title: Immutable provider event transport ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/provider-outbox-publication.md
started_at: 2026-09-06T00:20:50Z
agent: codex
gizmo_id: rust-action-ownership-provider-outbox
---

# Task plan

This plan supersedes `2026-09-06T00-09-19Z-provider-outbox-publication.md` after the delivery budget was clarified to require a substantial cohesive migration.

## Interpreted request

Migrate the complete immutable-event transport boundary for GitHub, Drive, and CloudKit together with the provider outbox lifecycle, using the available 2,000-line budget for one cohesive ownership change.

## Requirements

- Convert raw event ID and bytes into a private checked write state that proves parseability and matching content identity before provider publication.
- Put GitHub, Drive, and CloudKit event operations on credential and target borrowing store types.
- Preserve provider-specific path, query, candidate, conflict, missing-event, error, parsing-order, and redaction behavior.
- Own remaining provider I/O helpers through `SimpleGenesisOperationsInput`, `NookVaultManager`, and `NookError`.
- Carry outbox rows through pending, published, and acknowledged states, with a separate obsolete-row discard.
- Preserve provider writability, checkpoint visibility, active-index decisions, put-if-absent, durable deletion ordering, missing-event publication, error propagation, and future-drop behavior.
- Enable full ownership enforcement in every complete touched module and add focused behavior evidence.

## Constraints and exclusions

- Exact scope: `manager/event_log/provider_sync.rs`, `manager/event_log/provider_io.rs`, `manager/event_log.rs`, `storage/github_events.rs`, `storage/drive_events.rs`, `storage/icloud.rs`, `storage/mod.rs`, and new `storage/checked_event_write.rs` under `nook-app/nook-platform/nook-wasm/src`.
- Hard limit 2,000 authored additions; keep every final file below 1,000 lines.
- Checked writes prove parseability and content identity only; runtime signature, membership, freshness, and authorization remain separate.
- Provider context construction remains infallible and borrows existing credentials and targets.
- No remote-success seam will be introduced or claimed.
- No IndexedDB migration, local-folder transport, generic provider API, broader genesis architecture, public API, WASM ABI, storage/event schema, crypto, dependency, TypeScript, logging, fallback, retry, recovery, or credential-lifetime change.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-provider-outbox
- Estimated authored changed lines: 1950
- Owning modules, packages, or layers: nook-wasm immutable provider event transport and outbox synchronization
- Ownership units:
1. Capability: Checked immutable event publication across GitHub, Drive, and CloudKit; Gizmo ID: rust-action-ownership-provider-outbox; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/storage/checked_event_write.rs,nook-app/nook-platform/nook-wasm/src/storage/github_events.rs,nook-app/nook-platform/nook-wasm/src/storage/drive_events.rs,nook-app/nook-platform/nook-wasm/src/storage/icloud.rs,nook-app/nook-platform/nook-wasm/src/storage/mod.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/storage/checked_event_write.rs,nook-app/nook-platform/nook-wasm/src/storage/github_events.rs,nook-app/nook-platform/nook-wasm/src/storage/drive_events.rs,nook-app/nook-platform/nook-wasm/src/storage/icloud.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: crate-private CheckedEventWrite and provider store methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted Rust, WASM behavior, Dylint, and remote Loom checks pass
2. Capability: Provider outbox publication and acknowledgement lifecycle; Gizmo ID: rust-action-ownership-provider-outbox; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_io.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_io.rs; Expertise forbidden paths: nook-app/nook-platform/nook-core,nook-app/nook-platform/nook-auth2; Expertise consumer interfaces: private pending and published outbox states and existing manager methods; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted Rust, WASM behavior, Dylint, and remote Loom checks pass
- Public or cross-module interfaces: Crate-private CheckedEventWrite and provider store types; public WASM interfaces remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1950
- Current PR slice and acceptance evidence: Complete GitHub, Drive, CloudKit, and outbox transport boundary; Acceptance evidence: Remote Loom, hosted Rust/WASM behavior and Dylint, exact-head source SECURITY, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-provider-outbox; Gizmo name: Immutable provider event transport ownership; Predecessor Gizmo ID: None; Complete GitHub, Drive, CloudKit, and outbox transport boundary; Estimated authored changed lines: 1950; Acceptance evidence: Remote Loom, hosted Rust/WASM behavior and Dylint, exact-head source SECURITY, and readiness

## Initial plan

1. Implement checked writes, provider store ownership, and the outbox lifecycle across the complete transport boundary within the hard budget.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings within the same scope, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Content-identity checked publication, provider-owned transport operations, compiler-enforced outbox acknowledgement, preserved provider behavior, full touched-module ownership enforcement, hosted Rust/WASM/Dylint gates, remote Loom, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
