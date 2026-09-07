---
title: Own vault connect and hydration actions
authority: rust-action-ownership
issue: issues/rust-action-ownership/vault-connect-actions.md
created_at: 2026-09-07T14:05:00Z
status: immutable
---

# Plan

1. Refresh current `origin/main` and confirm the vault-connect closure has no open-PR overlap.
2. Introduce a borrowed `VaultContent` owner for content inspection, access assessment, metadata capture, normal unlock, and both sentinel unlock paths.
3. Move hydration onto consuming `UnlockedVault` and member-row replacement onto `VaultMetaState`.
4. Migrate core sync/tests and direct WASM conversion/manager callers; remove obsolete homeless exports and wrappers.
5. Preserve parsing order, sentinel fail-closed behavior, metadata defaults, record validation, and public browser behavior.
6. Run scoped formatting/static/size gates and `task loom:pre-push` without local product builds/tests.
7. Deliver one cohesive PR below 2,000 authored additions, rebase before exact-head SECURITY, run hosted validation and remote Loom, merge, and publish Workbench closeout.
