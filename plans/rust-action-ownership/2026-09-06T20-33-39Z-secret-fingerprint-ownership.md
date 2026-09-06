---
title: Type vault-keyed secret fingerprint and enrichment ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/secret-fingerprint-ownership.md
created_at: 2026-09-06T20:33:39Z
status: immutable
---

# Plan

1. Keep the exact ten-file core/WASM closure and inspect fingerprint canonicalization, metadata recognition, direct consumers, fixtures, and ownership-lint boundaries at fresh main `3cbc19bad6d235796d4c8049738f3c842719a4fb`.
2. Split canonical byte and metadata support into bounded children while preserving module visibility, field order, exact framing, provider markers, heading boundaries, dotted-field rules, and merge ordering.
3. Replace homeless identity/version and digest operations with named owners that bind variant semantics, canonical bytes, and a borrowed vault key until consuming completion.
4. Move note append, recognition, merge, and enrichment onto borrowed/data-carrying owners while retaining caller-controlled matching assumptions, clone behavior, unsupported pairs, and plaintext destruction.
5. Update only the listed direct consumers and fixture helpers; preserve epoch re-encryption, passkey updates, secret saves, import reconciliation, append sequencing, zeroization, storage, and WASM ABI.
6. Retain all 13 fingerprint tests plus existing epoch, event-log, passkey, secret-save, and import suites; add focused canonical-byte/digest, framing ambiguity, marker-boundary, merge, borrow, and consumption controls with unchanged fixtures.
7. Enable ownership denial and invalid-suppression prohibition across the parent and new production children. Run scoped formatting/static, symbol/line-budget/test-retention checks and `task loom:pre-push`; delegate implementation and exact-head security review.
8. Deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run hosted gates and remote Loom, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records.
