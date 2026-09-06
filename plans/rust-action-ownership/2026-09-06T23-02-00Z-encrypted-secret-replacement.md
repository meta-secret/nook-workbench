---
title: Type encrypted secret replacement and reviewed backup-code admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/encrypted-secret-replacement-ownership.md
created_at: 2026-09-06T23:02:00Z
status: immutable
---

# Plan

1. Keep the exact eight-file core/WASM closure and inspect session replacement, backup-code normalization, direct consumers, fixtures, and ownership-lint boundaries at fresh main `0fd9d80a9928c880f9d5410970b6b4cb46e17219`.
2. Introduce an encrypted replacement admission owner that retains the selected mutable target, validated IDs, crypto context, and exact ciphertext until consuming commit; keep plaintext replacement separate.
3. Move backup-code soft normalization, bounded normalization, application, and persisted verification support onto borrowed data owners while preserving every limit, ordering, predicate, and error precedence.
4. Update only the listed direct consumers and core/WASM exports; preserve projection mutation, append ordering, storage, ABI, and partial-effect behavior.
5. Retain all 40 existing tests and add focused normalization limits/order, typed rejection precedence, commit/drop, projection preservation, zeroization, privacy, no-Clone, consuming-use, and exclusive-borrow controls.
6. Activate ownership enforcement only in completed `session.rs` and `backup_codes.rs`; run scoped formatting, static, symbol, line-budget, and test-retention checks plus `task loom:pre-push`.
7. Delegate implementation and exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions. Refresh main before hosted validation, run hosted gates and remote Loom, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records.
