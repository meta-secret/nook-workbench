---
title: Type remaining plaintext CSV import admissions
authority: rust-action-ownership
issue: issues/rust-action-ownership/plaintext-csv-admission.md
created_at: 2026-09-06T17:38:12Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect LastPass, KeePassXC, and Chrome CSV parsing, header precedence, record/metadata conversion, inline tests, the three direct WASM callers, and ownership-lint boundaries.
2. Give each format a borrowed input owner and private non-Clone checked state retaining its original reader and admitted columns; consume collection into existing plan DTOs.
3. Preserve shared byte admission, flexible parsing, exact errors/order, record order, raw password bytes, Zeroizing, and commit sequencing without touching `import_support.rs`.
4. Keep LastPass duplicate recognized-header rejection, distinct normalization, no row limit, source/skipped counts, secure-note URL/favorite/TOTP metadata semantics, and raw fields explicit.
5. Keep KeePassXC first matching headers, required order, 100,000-row bound, login/note classification, login-or-note before authenticator ordering, malformed OTP skip counts, and original TOTP notes explicit.
6. Keep Chrome canonical-before-alias preference, optional-column preference, first duplicate match, 100,000-row bound, empty-password skips, and whitespace-only password retention explicit.
7. Retain all 14 tests and add focused precedence, duplicate/alias, exact-byte, counting, TOTP, privacy, borrow, and consuming controls inline. Leave fixtures unchanged.
8. Activate ownership denial and invalid-suppression prohibition across all three completed importer modules only; keep shared parser/import code unchanged. Run scoped formatting/static, symbol/limit/test-retention checks and delegate implementation for exact-head security review.
9. Deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run hosted gates, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records. Record the known main Loom baseline failure without unrelated repair.
