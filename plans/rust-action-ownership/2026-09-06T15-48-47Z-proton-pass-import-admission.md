---
title: Type Proton Pass ZIP and JSON import admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/proton-pass-import-admission.md
created_at: 2026-09-06T15:48:47Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect Proton Pass ZIP/JSON detection, archive selection, decoded export/item conversion, inline fixtures/tests, the sole WASM caller, and ownership-lint boundaries.
2. Give borrowed `ProtonPassImportInput` dispatch ownership; move PGP-prefix/ZIP detection, full archive scanning, selected-entry lookup, advertised-size validation, and bounded reads onto archive owners while preserving exact errors and zeroization.
3. Add private non-Clone selected-entry state retaining the actual borrowed `ZipFile` after admission; consume it for UTF-8 data reading without reopening, preserving plain-data precedence when both `data.json` and `data.pgp` exist.
4. Keep decoded export, field/content/expiry, and borrowed vault-item owners responsible for dynamic fields, ordering, precedence, defaults, skipped attachment/passkey reporting, card validation, and exact credential bytes without changing report DTOs.
5. Preserve 128 MiB input, 64 MiB ZIP data, larger plain-JSON allowance, exact PGP/ZIP detection, full scan and filename behavior, BTreeMap order, and WASM plan → drop Zeroizing input → commit sequence.
6. Retain all four tests and add mixed-selection, malformed/error-order, size-boundary, ordering, unknown-item, field-type, exact-byte, metadata, borrow, privacy, and consuming controls inline. Leave fixtures unchanged.
7. Activate ownership denial and invalid-suppression prohibition across the complete Proton subtree only; keep shared parser/import code unchanged. Run scoped formatting/static, symbol/limit/test-retention checks and delegate implementation for exact-head security review.
8. Deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
