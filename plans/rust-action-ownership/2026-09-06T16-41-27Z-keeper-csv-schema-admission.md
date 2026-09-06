---
title: Type Keeper CSV schema admission and custom-field conversion
authority: rust-action-ownership
issue: issues/rust-action-ownership/keeper-csv-schema-admission.md
created_at: 2026-09-06T16:41:27Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect Keeper CSV parsing, schema lookup, custom-field handling, record conversion, inline fixtures/tests, the sole WASM caller, and ownership-lint boundaries.
2. Give checked Keeper input ownership; move reader limits, header trimming, required aliases, and admitted columns onto owners while preserving exact errors, flexible rows, and Zeroizing.
3. Add private non-Clone checked state retaining the original reader and columns; consume conversion only after schema classification and record bounds are admitted.
4. Give named header and custom-field owners responsibility for pair ordering, duplicate last-column selection, incomplete-pair suppression, named `$` fields, explicit blob precedence, and trailing columns.
5. Keep borrowed record and metadata owners responsible for blank/blob lines, first-colon splitting, ordering, login/note classification, exact password bytes, folder-only rows, fallback titles, and URL/title behavior.
6. Preserve the 64 MiB CSV and 100,000-record limits, alias priority, error order, WASM plan → drop URI/CSV → commit sequencing, and public ABI.
7. Retain all three tests and add focused schema matrices, precedence, whitespace-password, record-limit, privacy, borrow, and consuming controls inline. Leave fixtures unchanged.
8. Activate ownership denial and invalid-suppression prohibition across the complete Keeper subtree only; keep shared parser/import code unchanged. Run scoped formatting/static, symbol/limit/test-retention checks and delegate implementation for exact-head security review.
9. Deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
