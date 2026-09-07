---
title: Type Sentinel SLIP-0039 issuance and quorum recovery ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-slip39-ownership.md
created_at: 2026-09-07T08:18:57Z
status: immutable
---

# Plan

1. Keep the exact five-file closure at fresh main `485f5de38bf42a25a0f920cfc9df20b07b090753`; inventory all SLIP-0039 operations, official vectors, three Sentinel tests, and two internal callers before editing.
2. Split existing code into polynomial, cipher, and mnemonic child modules with data-carrying owners; keep random filling as a thin `getrandom` boundary and preserve all arithmetic/framing/order details.
3. Add a borrowed Sentinel issuance request that validates policy before consuming secret material, and a recovery request whose private non-Clone admitted quorum owns decoded shares through consuming recovery.
4. Move mnemonic encode/decode onto `Share`, arithmetic onto finite-field/polynomial owners, digest/cipher operations onto their input owners, and preserve current identifiers, thresholds, passphrases, checksums, padding, and vectors.
5. Adapt only the two internal split/recover calls in `multi_device/sentinel.rs`; preserve surrounding encryption, key handling, zeroization, and error flow.
6. Retain five SLIP-0039 and three Sentinel tests, add focused compatibility/error-order, interpolation, encoding/padding, and private-state lifecycle controls, and enable ownership denial only across the completed subtree.
7. Run scoped formatting/static/retention/symbol/size checks and `task loom:pre-push` without local product builds/tests; rebase before exact-head SECURITY review with cryptographic and secret-lifetime evidence.
8. Deliver one cohesive PR below 1,900 authored additions, refresh main before hosted validation, run hosted gates and remote Loom, obtain readiness, merge, and publish Workbench completion records.
