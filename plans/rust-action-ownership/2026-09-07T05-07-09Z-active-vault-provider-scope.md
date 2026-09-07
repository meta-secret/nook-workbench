---
title: Type active-vault provider scope and grant replacement ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/active-vault-provider-scope-ownership.md
created_at: 2026-09-07T05:07:09Z
status: immutable
---

# Plan

1. Keep the exact seven-file closure at fresh main `82a9e7dc5b1241852505666a4863cf05e17c1cab`; inspect the existing scope, save, publication, provider API, vault API, and tests for overlap and persistence boundaries.
2. Move provider-row label and locked projection to a borrowed row owner; move active-store observation and active/sync/local selection to a scoped view; move grant replacement to `AuthProvidersSnapshotData`; keep the focused fixture helper with its fixture owner.
3. Preserve trimmed input handling, exact persisted-store matching, missing/blank all-row behavior, Local versus LocalFolder classification, first-match label fallback, verbatim locked clones, ordered grant retention/rebound append, unchanged metadata/bytes/signatures, and input nonmutation.
4. Adapt core exports and WASM publication/API call sites without changing transaction/admission flow, load/seal/save order, partial effects, or public signatures.
5. Retain all 36 scoped tests and existing integration coverage; add the specified whitespace, exactness, classification, ordering, duplicate, absent-scope, and nonmutation matrices.
6. Enable ownership denial only across the completed scoped core subtree; run scoped formatting/static, symbol, line-budget, and test-retention checks plus `task loom:pre-push`, without local product builds/tests.
7. Rebase before exact-head SECURITY review; deliver one cohesive PR below the 2,000-line limit, refresh main before hosted validation, run hosted gates and remote Loom, obtain readiness, merge, and publish Workbench completion records.
