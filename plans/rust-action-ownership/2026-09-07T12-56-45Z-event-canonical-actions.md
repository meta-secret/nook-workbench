---
title: Own canonical event actions
authority: rust-action-ownership
issue: issues/rust-action-ownership/event-canonical-actions.md
created_at: 2026-09-07T12:56:45Z
status: immutable
---

# Plan

1. Refresh origin/main and confirm canonical protocol files and direct callers have no open-PR overlap.
2. Move canonical JSON encoding, event-id hashing, signature operations, and SHA-256 digest creation onto their owning domain types.
3. Preserve canonical key and parent ordering, digest encodings, Ed25519 wire format, actor validation, and errors exactly.
4. Adapt only direct event-log, core, and WASM callers and existing protocol tests.
5. Activate both ownership lints in the canonical module and remove authored production free helpers.
6. Run scoped formatting/static/size checks and `task loom:pre-push` without local product builds/tests.
7. Deliver one cohesive PR below 2,000 authored additions, rebase before exact-head SECURITY, run hosted validation and remote Loom, merge, and publish Workbench closeout.
