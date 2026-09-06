---
title: Local-folder event transport lifecycle ownership
feature: rust-action-ownership
issue: issues/rust-action-ownership/local-folder-transport.md
started_at: 2026-09-06T03:04:23Z
agent: codex
gizmo_id: rust-action-ownership-local-folder-transport
---

# Task plan

## Interpreted request

Continue the project-wide Rust migration with a substantial local-folder transport boundary that makes browser handle admission and writable-stream sequencing type-directed.

## Requirements

- Move the handle registry, durable-handle database access, picker flow, and permission observations onto meaningful owners.
- Move directory traversal, event filename conversion, deterministic listing, content reads, and conflict-aware writes onto data-carrying owners.
- Add a private non-Clone writable-stream state that consumes write into a written state and consumes that state for close.
- Preserve memory-before-database mutation, permission-query fallbacks, child-lookup absence behavior, exact errors, sorting, no-op and conflict behavior, and sequential partial effects.
- Preserve public ABI wrappers and `NookLocalFolderConfig`.
- Enable complete ownership enforcement and invalid-suppression rejection in the complete storage modules.
- Add bounded behavior fixtures for registry, permission, filenames, existing files, and stream ordering.

## Constraints and exclusions

- Exact scope: `storage/local_folder.rs`, new `storage/local_folder/handles.rs`, `public_api.rs`, `manager/mod.rs`, `manager/event_log.rs`, and `manager/event_log/provider_sync.rs` under `nook-app/nook-platform/nook-wasm/src`.
- Target 1,150–1,550 authored additions; hard ceiling 1,800 and every final file below 1,000 lines.
- Opened-folder state records successful acquisition only and must not claim permission authority.
- Preserve per-record sequencing and partial completion; do not prevalidate or transact the complete batch.
- No permission strengthening, transactional batching, rollback, cancellation, retry, hash verification, fallback, recovery, public ABI, TypeScript, schema, dependency, or logging change.
- No file overlap with live PRs #1423, #1421, or #1210.
- No local product compilation or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-local-folder-transport
- Estimated authored changed lines: 1450
- Owning modules, packages, or layers: nook-wasm local-folder provider transport
- Ownership units:
1. Capability: Local-folder handle registry and opened-directory lifecycle; Gizmo ID: rust-action-ownership-local-folder-transport; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/storage/local_folder.rs,nook-app/nook-platform/nook-wasm/src/storage/local_folder/handles.rs,nook-app/nook-platform/nook-wasm/src/public_api.rs,nook-app/nook-platform/nook-wasm/src/manager/mod.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/storage/local_folder.rs,nook-app/nook-platform/nook-wasm/src/storage/local_folder/handles.rs; Expertise forbidden paths: nook-app/nook-platform/nook-wasm/src/storage/indexed_db.rs; Expertise consumer interfaces: Existing public local-folder ABI methods remain source-compatible; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted WASM behavior and Dylint checks pass
2. Capability: Event-file transport and consuming writable-stream lifecycle; Gizmo ID: rust-action-ownership-local-folder-transport; Functional owner: Development core; Expertise provider: Security; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/storage/local_folder.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log.rs,nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/storage/local_folder.rs; Expertise forbidden paths: nook-app/nook-platform/nook-wasm/src/storage/indexed_db.rs; Expertise consumer interfaces: Existing provider-sync ordering and return types remain unchanged; Expertise acceptance evidence: Exact source SECURITY review; Capability acceptance evidence: Hosted WASM behavior, compile controls, and Dylint checks pass
- Public or cross-module interfaces: Existing local-folder public API and config types remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1450
- Current PR slice and acceptance evidence: Complete local-folder registry, directory, event-file, and stream ownership with direct consumer adaptation; Acceptance evidence: Remote Loom, hosted WASM behavior and Dylint, exact-head source SECURITY, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-local-folder-transport; Gizmo name: Local-folder event transport lifecycle ownership; Predecessor Gizmo ID: None; Registry, opened directory, event-file transport, writable-stream states, and direct consumers; Estimated authored changed lines: 1450; Acceptance evidence: Remote Loom, hosted WASM behavior and Dylint, exact-head source SECURITY, and readiness

## Initial plan

1. Implement registry, opened-folder, event-file, and writable-stream owners within the six-file hard budget.
2. Format, push, and obtain remote Loom, hosted PR validation, and exact-head source SECURITY.
3. Resolve findings within scope, pass readiness, squash merge, and publish Workbench completion.

## Completion evidence

Compiler-enforced write-before-close lifecycle, preserved browser and partial-effect behavior, complete storage-module ownership enforcement, hosted behavior and Dylint gates, remote Loom, exact-head source SECURITY, readiness, squash merge, and Workbench records.

## Safety review

This record contains no prompt, transcript, secret, private data, execution output, or machine-local context.
