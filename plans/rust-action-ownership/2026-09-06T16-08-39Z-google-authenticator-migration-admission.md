---
title: Type Google Authenticator migration batch admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/google-authenticator-migration-admission.md
created_at: 2026-09-06T16:08:39Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect Google Authenticator URI parsing, migration batch protobuf admission, parameter/TOTP conversion, inline fixtures/tests, the sole WASM caller, and ownership-lint boundaries.
2. Give borrowed migration input dispatch ownership; move prefix/data selection, percent-decoding, Base64/protobuf parsing, and URI/payload bounds onto batch owners while preserving exact errors, limits, and Zeroizing.
3. Add private non-Clone parsed and complete batch states retaining decoded parts; consume completion to enforce identity/version/size, sorted indices, duplicate/incomplete rejection, and account count before conversion.
4. Keep parameter owners responsible for algorithm/digit defaults, unsupported HOTP/MD5, Base32 bytes, issuer/account labels, website inference, and parameter Drop behavior; leave protobuf DTOs as report types with Clone.
5. Preserve empty/count and raw-length precedence, zero batch-size normalization, mixed → duplicate → incomplete → account-count order, version consistency, sorted part/account order, `mem::take`, and WASM plan → drop URI collection → commit.
6. Retain all seven tests and add precedence/limit matrices, label/Base32, invalid-parameter, private-construction, non-Clone, and consuming controls inline. Leave fixtures unchanged.
7. Activate ownership denial and invalid-suppression prohibition across the complete Google Authenticator subtree only; keep shared parser/import code unchanged. Run scoped formatting/static, symbol/limit/test-retention checks and delegate implementation for exact-head security review.
8. Deliver one cohesive PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
