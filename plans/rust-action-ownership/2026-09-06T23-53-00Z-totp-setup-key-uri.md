---
title: Type TOTP setup-key and otpauth URI admission
authority: rust-action-ownership
issue: issues/rust-action-ownership/totp-setup-key-uri-ownership.md
created_at: 2026-09-06T23:53:00Z
status: immutable
---

# Plan

1. Keep the exact five-file core/WASM closure and inspect authenticator parsing, setup-key normalization, URI consumers, RFC fixtures, and ownership-lint boundaries at fresh main `a876331a00129d97159af8d0975253f4ace7e9b3`.
2. Split URI decoding and setup-key normalization into bounded children; preserve path/query plus semantics, percent-decoding, duplicate handling, error ordering, and zeroizing intermediate buffers.
3. Introduce private non-Clone checked otpauth admission that validates protocol parameters and present setup-key material in the existing order, then consumes into the existing authenticator representation.
4. Keep manual constructors and public APIs unchanged through owned delegates; do not implement dependency-owned protocol parameter types.
5. Retain all 8 authenticator and 14 secret-api tests plus existing backup-code coverage; add focused URI, Base32, default/error-order, cleanup, privacy, and consuming controls.
6. Migrate RFC fixture helpers onto a focused owned fixture and enable ownership enforcement across the authenticator parent and new children. Run scoped formatting/static, symbol, line-budget, and test-retention checks plus `task loom:pre-push`.
7. Delegate implementation and exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions. Refresh main before hosted validation, run hosted gates and remote Loom, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records.
