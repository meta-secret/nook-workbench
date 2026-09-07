---
title: Own vault projection actions
authority: rust-action-ownership
issue: issues/rust-action-ownership/vault-projection-actions.md
created_at: 2026-09-07T12:33:15Z
status: immutable
---

# Plan

1. Refresh origin/main and confirm the projection files and direct callers have no open-PR overlap.
2. Move projection rebuild, checkpoint selection, replay invariant validation, and conflict detection onto their owning graph/projection types.
3. Preserve graph traversal, schema/store validation, event ordering, epoch history, conflict reporting, unresolved-schema handling, and errors exactly.
4. Adapt only direct core/WASM callers, exports, and existing projection tests.
5. Activate both ownership lints in the projection module and remove the authored free operations.
6. Run scoped formatting/static/size checks and `task loom:pre-push` without local product builds/tests.
7. Deliver one cohesive PR below 2,000 authored additions, rebase before exact-head SECURITY, run hosted validation and remote Loom, merge, and publish Workbench closeout.
