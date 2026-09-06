---
title: Type local-folder event transport lifecycle
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-local-folder-transport
created_at: 2026-09-06T03:04:23Z
updated_at: 2026-09-06T04:07:23Z
source_issues: []
related_prs:
  - 1424
depends_on:
  - issues/rust-action-ownership/authentication-advance-control.md
---

# Type local-folder event transport lifecycle

## Context

The Rust action-ownership migration continues through the browser local-folder provider, where free functions currently separate handle admission, directory traversal, event-file policy, and writable-stream effects from the state they operate on.

## Outcome

Local-folder event transport uses meaningful owners for registry, opened directory, event files, and browser operations. A private consuming stream lifecycle makes write-before-close sequencing explicit while preserving the current partial-effect and permission behavior.

## Scope

- One cohesive six-file `nook-wasm` boundary with a 1,800 authored-addition ceiling.
- Split registry and acquisition ownership into `storage/local_folder/handles.rs`.
- Move directory traversal, filename policy, event listing, reads, and writes onto data-carrying owners.
- Add the simplest private writable-stream states needed to enforce write before close.
- Adapt the existing public API, manager cleanup, and provider-sync consumers without changing ABI signatures.
- Exclude permission-policy strengthening, transactional batching, rollback, cancellation, retry, hash verification, fallback, and recovery.

## Acceptance criteria

- [x] Handle acquisition preserves memory-before-database mutation and absent-handle behavior.
- [x] Opened-folder naming does not imply permission authority; current query fallbacks remain unchanged.
- [x] Child lookup, event-directory creation, filename parsing, filtering, and deterministic sorting preserve behavior.
- [x] Identical existing files remain no-ops and conflicting contents remain rejected with the same errors.
- [x] A failed stream write prevents close; successful write occurs before consuming close.
- [x] Sequential per-record effects and partial completion remain explicit.
- [x] Existing public ABI wrappers and `NookLocalFolderConfig` remain unchanged.
- [x] Complete storage modules deny homeless functions and reject invalid suppression.
- [x] Focused browser fixtures cover permission, registry, filename, read, conflict, and stream-order behavior.
- [x] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

The six-file boundary merged in Nook PR #1424 as `bc818ce5ca527f5d74a0fea83b36e599f5ebcee4`. The final exact head passed Remote Loom, hosted Rust/WASM/web/Dylint validation, exact-head source SECURITY, and readiness.

## Findings and decisions

Current missing permission-query support and non-string query results admit access, so the state is named opened rather than permission-granted. Non-creating child lookup also preserves conversion of browser call failures into absence.

## References

- `nook-app/nook-platform/nook-wasm/src/storage/local_folder.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/local_folder/handles.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/mod.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs`
