---
title: Own Sentinel signature operations
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-signature
created_at: 2026-09-05T19:00:54Z
updated_at: 2026-09-05T20:06:32Z
source_issues: []
related_prs:
  - 1393
depends_on:
  - issues/rust-action-ownership/legacy-member-merge.md
---

# Own Sentinel signature operations

## Outcome

Sentinel Ed25519 verification and public-key derivation belong to `DeviceSigningPublicKey`, and the shared signing module enforces function ownership.

## Scope

Four Rust files with a ceiling of 220 authored additions. Move the shared free functions onto the existing public-key domain type, adapt Sentinel callers, activate ownership enforcement, and add focused cryptographic behavior coverage.

## Acceptance criteria

- [x] Public-key derivation preserves the exact Ed25519 verifying bytes and lowercase hex encoding.
- [x] Verification preserves hex decoding, exact key/signature lengths, original signed bytes, and caller-selected protocol errors.
- [x] Valid, tampered, wrong-key, malformed encoding, malformed length, and caller error mapping behaviors are covered.
- [x] The shared signing module denies homeless functions without blanket suppression.
- [x] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

These reusable cryptographic primitives do not represent lifecycle progress, persistence, freshness, or authorization, so artificial typestate is excluded. No protocol, schema, key material, authorization, recovery, fallback, ABI, or logging change.

## Progress

PR #1393 merged as `2f132afd7b151a673fab6fe339114e75e9395f71` after exact-head hosted validation, source SECURITY, current-main integration, and readiness passed.
