---
title: Type local-folder event transport lifecycle
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-local-folder-transport
created_at: 2026-09-06T03:04:23Z
updated_at: 2026-09-06T03:04:23Z
source_issues: []
related_prs: []
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

- [ ] Handle acquisition preserves memory-before-database mutation and absent-handle behavior.
- [ ] Opened-folder naming does not imply permission authority; current query fallbacks remain unchanged.
- [ ] Child lookup, event-directory creation, filename parsing, filtering, and deterministic sorting preserve behavior.
- [ ] Identical existing files remain no-ops and conflicting contents remain rejected with the same errors.
- [ ] A failed stream write prevents close; successful write occurs before consuming close.
- [ ] Sequential per-record effects and partial completion remain explicit.
- [ ] Existing public ABI wrappers and `NookLocalFolderConfig` remain unchanged.
- [ ] Complete storage modules deny homeless functions and reject invalid suppression.
- [ ] Focused browser fixtures cover permission, registry, filename, read, conflict, and stream-order behavior.
- [ ] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

The six-file boundary is inventoried from Nook main at `99846aeb20df5f7c0c524a673f74542aee7d1273` with zero file overlap against live PRs #1423, #1421, and #1210.

## Findings and decisions

Current missing permission-query support and non-string query results admit access, so the state is named opened rather than permission-granted. Non-creating child lookup also preserves conversion of browser call failures into absence.

## References

- `nook-app/nook-platform/nook-wasm/src/storage/local_folder.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/local_folder/handles.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/mod.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs`
