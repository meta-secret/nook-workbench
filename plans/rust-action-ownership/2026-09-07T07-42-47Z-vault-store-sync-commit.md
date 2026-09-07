---
title: Type vault synchronization preparation and commit ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/vault-store-sync-commit.md
created_at: 2026-09-07T07:42:47Z
status: immutable
---

# Plan

1. Keep the exact three-file closure at fresh main `69e431f159c717e6d78e0151e75157932f3af88f`; inspect the store module, integration workflow, sole library export, and all fourteen retained tests.
2. Add named request types and a borrowed store-pair owner; make comparison produce a private non-Clone prepared synchronization state that consumes into commit.
3. Move fan-out onto a borrowed owner, explicit conflict replacement onto `MemoryVaultStore`, and revision advancement onto revision state; retain dependency-owned storage boundaries.
4. Preserve comparison/error precedence, conflict and unchanged no-op behavior, AdoptRemote/PushLocal mutation scope, lexical fan-out order and partial effects, guarded-write precedence, exact revision parsing and saturation, and all malformed/equal-content behavior.
5. Preserve storage formats, bytes, revisions, provider I/O boundaries, retries, recovery behavior, and public consumers; retain five unit and nine integration tests and add focused lifecycle, precedence, boundary, failure, and compile-time ownership controls.
6. Enable ownership denial and invalid-suppression prohibition only in the completed store subtree; run scoped formatting/static/retention/symbol/size checks and `task loom:pre-push` without local product builds/tests.
7. Rebase before exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run hosted gates and remote Loom, obtain readiness, merge, and publish Workbench completion records.
