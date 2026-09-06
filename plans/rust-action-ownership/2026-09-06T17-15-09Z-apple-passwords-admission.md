---
title: Type Apple Passwords and Safari archive admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/apple-passwords-admission.md
created_at: 2026-09-06T17:15:09Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect Apple Passwords/Safari CSV and ZIP parsing, archive classification, candidate selection, inline fixtures/tests, the sole WASM caller, and ownership-lint boundaries.
2. Give borrowed export owners responsibility for 128 MiB admission, ZIP/CSV detection, bounded archive reads, filename basename handling, candidate classification, stable sorting, and error precedence while preserving Zeroizing.
3. Replace the candidate boolean tuple with a named priority enum; preserve first-successful-candidate semantics, including empty valid CSV, MissingColumn continuation, terminal errors, and last missing-column reporting.
4. Add private non-Clone checked CSV state retaining the original reader and admitted columns; consume collection only after schema admission and record bounds are valid.
5. Give header and record owners responsibility for required-column order, BOM/reordered headers, optional fields, flexible rows, exact password bytes, login-before-authenticator ordering, OTP-only skip counts, invalid-OTP behavior, and website inference.
6. Preserve 128 MiB export, 64 MiB CSV, 100,000-record limits, bounded reads, WASM ABI, `plan → drop Zeroizing export → commit`, and unchanged reports/errors.
7. Retain all 11 tests and add candidate-order/tie/error-precedence, empty-first-candidate, malformed UTF-8, bounded CSV/record, privacy, borrow, and consuming controls inline. Leave fixtures unchanged.
8. Activate ownership denial and invalid-suppression prohibition across the complete Apple subtree only; keep shared parser/import code unchanged. Run scoped formatting/static, symbol/limit/test-retention checks and delegate implementation for exact-head security review.
9. Deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run hosted gates, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records. Record the known main Loom baseline failure without unrelated repair.
