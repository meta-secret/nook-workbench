---
title: Own ciphertext-backed secret session actions
authority: rust-action-ownership
issue: issues/rust-action-ownership/secret-session-actions.md
created_at: 2026-09-07T14:38:00Z
status: immutable
---

# Plan

1. Refresh current `origin/main` and confirm the encrypted-session closure has no open-PR overlap.
2. Introduce a borrowed `VaultSecretSession` owner for decryption and paged encrypted search.
3. Move projected user-record replacement and armored hydration onto `VaultMetaState` consuming actions.
4. Migrate core search/replacement/session callers, direct WASM managers, and existing tests.
5. Preserve zeroization, sorting, filtering, pagination limits, missing-secret errors, metadata preservation, and replacement ordering.
6. Run scoped formatting/static/size gates and `task loom:pre-push` without local product builds/tests.
7. Deliver one cohesive PR below 2,000 authored additions, rebase before exact-head SECURITY, run hosted validation and remote Loom, merge, and publish Workbench closeout.
