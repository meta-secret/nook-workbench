---
title: Type shared import parsing and metadata ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/shared-import-support-ownership.md
created_at: 2026-09-06T18:15:10Z
status: immutable
---

# Plan

1. Keep the exact 13-file core-only closure and inspect the shared parser, metadata helpers, all direct consumers, inline tests, and ownership-lint boundaries at fresh main `003ab85c22df855320cd2fd0d909a6ef33b49f53`.
2. Replace `csv_reader` and `collect_csv_records` with a private-field consuming `CsvImportReader` that retains the original configured reader, headers, conversion callback, and format-specific limit error without changing generic behavior.
3. Give borrowed header and record-field owners the existing normalization and field-observation rules; keep presentation trimming separate from exact password bytes and preserve BOM/ASCII normalization.
4. Move append and source-label metadata operations onto data-carrying owners while preserving filtering, retained values, heading/bullet spacing, ordering, exact label deduplication, and Dashlane filename classification.
5. Update the listed format consumers only where needed, retaining format-specific checked states, LastPass separate unlimited-row behavior, all existing limits, errors, record order, source/skipped counts, TOTP, zeroization, and storage boundaries.
6. Retain all 63 inline tests and add focused collection error-order, blank-versus-short-row, exact-byte, normalization, metadata-output, and ownership/consumption controls. Leave fixtures unchanged.
7. Enable ownership denial and invalid-suppression prohibition across the shared support module and listed consumers. Run scoped formatting/static, symbol/line-budget/test-retention checks and `task loom:pre-push`; delegate implementation and exact-head security review.
8. Deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run hosted gates, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records. Record the known main Loom baseline failure without unrelated repair.
