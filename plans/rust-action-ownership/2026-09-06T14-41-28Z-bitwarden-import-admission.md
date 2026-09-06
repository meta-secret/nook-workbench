---
title: Type Bitwarden encrypted and plaintext import admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/bitwarden-import-admission.md
created_at: 2026-09-06T14:41:28Z
status: immutable
---

# Plan

1. Keep the exact five-file closure and inspect Bitwarden dispatch, encrypted envelope/KDF/decryption, item parsing and conversion, checked-in vectors/fixtures, the sole WASM caller, and ownership-lint boundaries.
2. Give a borrowed `BitwardenExport` dispatch ownership; move nullable text, range validation, key derivation, encoding, and authenticated decryption onto envelope/key owners while preserving exact error order and zeroization.
3. Add a private non-Clone checked continuation carrying the exact encrypted export and derived key, construct it only after validation-string decryption succeeds, and consume it for payload decryption without claiming validation-marker authentication of the separate payload.
4. Keep item owners responsible for dynamic JSON interpretation, nullable/default fields, unknown fields, exact credentials, URL/title precedence, metadata ordering, unsupported counts, and card validation.
5. Preserve PBKDF2/Argon2 bounds and parameters, salt/HKDF/type-2 encoding, MAC-before-CBC, padding/UTF-8 errors, WASM signature, and plan → drop password → drop JSON → commit sequence.
6. Retain all 11 tests, including PBKDF2 fixture and Argon2 vector; add malformed/error-order, KDF-boundary, tampered-payload, exact-byte/null-field, private-construction, borrow, and consuming controls inline. Leave fixture JSON unchanged.
7. Activate ownership denial and invalid-suppression prohibition across the complete Bitwarden subtree only; keep shared parser/import code unchanged. Run scoped formatting/static, symbol/limit/test-retention checks and delegate implementation for exact-head security review.
8. Deliver one PR below 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
