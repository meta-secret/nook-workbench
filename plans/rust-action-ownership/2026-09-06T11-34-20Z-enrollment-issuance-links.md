---
title: Type enrollment issuance provider validation and deep-link ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/enrollment-issuance-links.md
created_at: 2026-09-06T11:34:20Z
status: immutable
---

# Plan

1. Keep the exact ten-file platform closure and inspect current auth2 enrollment issuance, admission, provider validation, link parsing, core reexports, shared-grant email use, WASM exports, checked-envelope decryption, and ownership-lint boundaries.
2. Move issuance onto a borrowed request owner and private non-Clone `CheckedEnrollmentIssuance` that consumes into issuance while retaining original input, validated trimmed password, entry ID, and vault name; preserve validation order and random/encryption order.
3. Give provider values and enrollment email their validation owners; keep raw-versus-trimmed provider behavior, case sensitivity, permissive email behavior, and existing `ValidationError` mapping.
4. Move normalization, query extraction, percent decoding, and link construction onto `EnrollmentLinkInput`; preserve query-before-fragment precedence, first match, lossy decoding, and raw-code trimming. Keep trivial base64 calls explicit through `Engine` methods.
5. Preserve PBKDF2 210,000 iterations, salt/IV lengths, AES-GCM, wire fields, secret lifetimes, unauthenticated metadata, checked-envelope consumption, personal/shared provider typestates, and every public WASM signature.
6. Retain 13 auth2, four shared-grant, and two WASM tests; relocate issuance/link tests and add bounded validation-order/link-matrix/privacy/borrow/no-Clone/consumption controls.
7. Enable ownership denial and invalid-suppression prohibition across the completed enrollment subtree only; run scoped formatting and static checks, then delegate implementation for static review.
8. Deliver one PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
