---
title: Own signed event-builder actions
authority: rust-action-ownership
issue: issues/rust-action-ownership/event-builder-actions.md
created_at: 2026-09-07T12:05:03Z
status: immutable
---

# Plan

1. Refresh origin/main and confirm the builder files and direct callers have no open-PR overlap.
2. Add private consuming ownership to signed event construction, encrypted secret payload construction, and observed-head parent normalization.
3. Preserve actor/signing-key validation, canonical serialization, parent ordering, encrypted payload fields, and errors exactly.
4. Adapt only the direct core/WASM callers, exports, and existing tests.
5. Activate both ownership lints in the builder module and remove the three authored free operations.
6. Run scoped formatting/static/size checks and `task loom:pre-push` without local product builds/tests.
7. Deliver one cohesive PR below 1,200 authored additions, rebase before exact-head SECURITY, run hosted validation and remote Loom, merge, and publish Workbench closeout.
