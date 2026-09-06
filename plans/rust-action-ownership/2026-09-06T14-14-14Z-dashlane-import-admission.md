---
title: Type Dashlane CSV and ZIP import admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/dashlane-import-admission.md
created_at: 2026-09-06T14:14:14Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect Dashlane export dispatch, ZIP limits/iteration, filename and header classification, CSV reader lifetimes, row conversion, public plan DTOs, the sole WASM caller, and ownership-lint boundaries.
2. Give `DashlaneExport` borrowed planning ownership; let archive and entry owners classify and bound reads while preserving 128 MiB export, 64 MiB per-CSV, record caps, magic detection, basename/case rules, iteration order, duplicate categories, and error precedence.
3. Bind checked category and normalized columns to the original CSV reader in a private non-Clone `CheckedDashlaneCsv`; consume it during collection without cloning or re-reading input. Keep `DashlaneImportPlan` as a report DTO.
4. Preserve flexible rows, header normalization, exact password bytes, metadata ordering, username/OTP precedence and defaults, unsupported counts, payment/note validation, skipped errors, in-memory parsing, Zeroizing lifetime, and parse → drop input → commit ordering.
5. Retain all three existing Dashlane tests and add colocated category/header, missing-column, byte, malformed/oversized, duplicate-order, unsupported-category, OTP/payment, borrowed-input, and consuming-reader controls.
6. Activate ownership denial and invalid-suppression prohibition across the complete Dashlane subtree only; leave shared import helpers and unrelated importers unchanged.
7. Keep projected core files below 700 lines and the WASM caller narrow; run scoped formatting/static checks, symbol/test-retention/limit checks, and delegate implementation for exact-head security review.
8. Deliver one PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
