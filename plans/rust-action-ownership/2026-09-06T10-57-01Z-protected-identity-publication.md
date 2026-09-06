---
title: Type protected local-identity publication and signer ownership
authority: rust-action-ownership
issue: issues/rust-action-ownership/protected-identity-publication.md
created_at: 2026-09-06T10:57:01Z
status: immutable
---

# Plan

1. Keep the exact six-file closure and inspect current keyring protection, signer derivation, manager callers, marker precedence, migration effects, browser ABI, and ownership-lint boundaries.
2. Move protection operations onto borrowed owners retaining store/directory/app-key/selected-entry evidence and a private non-Clone prepared protected-identity state; move signer checks and derivation onto a checked signing-material owner.
3. Replace positional booleans with named inputs while preserving the existing ordered write/delete and outer transaction completion operation; do not call inner persistence committed.
4. Retain all 11 existing browser tests, relocate protection-focused tests with their child, and add bounded marker/seed rejection, mismatch, privacy, and consumption cases using owned fixtures.
5. Preserve marker precedence, keyring loading/migration effects, replacement-signer refusal, prior-key authorization, exact public-key/error/seed/encryption behavior, partial effects, future-drop semantics, and no public ABI/schema/cryptographic changes.
6. Apply ownership denial and invalid-suppression prohibition in `protection.rs` and `signing.rs` only; run scoped rustfmt and diff checks, then delegate implementation for static review only.
7. Deliver one PR under 2,000 authored additions, refresh main before hosted validation, run remote Loom and hosted gates, obtain exact-head SECURITY review, merge only after readiness, and publish Workbench completion records.
