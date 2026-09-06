---
title: Type 1Password 1PUX archive admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/onepassword-import-admission.md
created_at: 2026-09-06T15:24:53Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect 1Password archive admission, item/field/credential conversion, inline fixtures/tests, the sole WASM caller, and ownership-lint boundaries.
2. Give a borrowed `OnePasswordExport` archive dispatch ownership; move bounded reads, format description/version checks, UTF-8 admission, and archive lookup onto archive owners while preserving exact errors and zeroization.
3. Add a private non-Clone `CheckedOnePasswordArchive` retaining the same opened archive after exact description/version admission; consume it for attributes/data planning so only admitted state reads `export.data`.
4. Keep item, field, credential, metadata, and borrowed vault-context owners responsible for dynamic interpretation, ordering, precedence, defaults, archived state, card validation, and expiry parsing without changing report DTOs.
5. Preserve 128 MiB archive, 64 KiB attributes, 64 MiB data, advertised-size and bounded-read checks; ZIP behavior; description-before-version and attributes-before-data error order; exact credential bytes; and the public WASM plan → drop archive → commit sequence.
6. Retain all four tests and add bounded-limit/error-order, admitted-archive, wrapper-precedence, credential/metadata, exact-byte, borrow, private-construction, and consuming controls inline. Leave fixtures unchanged.
7. Activate ownership denial and invalid-suppression prohibition across the complete 1Password subtree only; keep shared parser/import code unchanged. Run scoped formatting/static, symbol/limit/test-retention checks and delegate implementation for exact-head security review.
8. Deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
