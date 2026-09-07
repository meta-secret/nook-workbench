---
title: Type vault epoch cryptography actions
authority: rust-action-ownership
issue: issues/rust-action-ownership/vault-epoch-crypto-ownership.md
created_at: 2026-09-07T11:46:14Z
status: immutable
---

# Plan

1. Refresh origin/main and inventory the epoch-crypto callers and open-PR overlap.
2. Add private consuming owners for secret re-encryption, key rotation, member checkpoint hashing, metadata rebuilding, and metadata application.
3. Preserve ciphertext formats, zeroization, roster validation, key generation, and error ordering exactly.
4. Adapt only the direct core/WASM callers and existing tests; re-export owner types without changing WASM method signatures.
5. Activate both ownership lints in the migrated module and remove all authored free operations/helpers in that scope.
6. Run scoped formatting/static/size checks and `task loom:pre-push` without local product builds/tests.
7. Deliver one cohesive PR below 1,400 authored additions, rebase before exact-head SECURITY, run hosted validation and remote Loom, merge, and publish Workbench closeout.
