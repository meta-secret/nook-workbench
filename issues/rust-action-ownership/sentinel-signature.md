---
title: Own Sentinel signature operations
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-signature
created_at: 2026-09-05T19:00:54Z
updated_at: 2026-09-05T19:00:54Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/legacy-member-merge.md
---

# Own Sentinel signature operations

## Outcome

Sentinel Ed25519 verification and public-key derivation belong to `DeviceSigningPublicKey`, and the shared signing module enforces function ownership.

## Scope

Four Rust files with a ceiling of 220 authored additions. Move the shared free functions onto the existing public-key domain type, adapt Sentinel callers, activate ownership enforcement, and add focused cryptographic behavior coverage.

## Acceptance criteria

- [ ] Public-key derivation preserves the exact Ed25519 verifying bytes and lowercase hex encoding.
- [ ] Verification preserves hex decoding, exact key/signature lengths, original signed bytes, and caller-selected protocol errors.
- [ ] Valid, tampered, wrong-key, malformed encoding, malformed length, and caller error mapping behaviors are covered.
- [ ] The shared signing module denies homeless functions without blanket suppression.
- [ ] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

These reusable cryptographic primitives do not represent lifecycle progress, persistence, freshness, or authorization, so artificial typestate is excluded. No protocol, schema, key material, authorization, recovery, fallback, ABI, or logging change.

## Progress

DEV-CORE selected this non-overlapping signing boundary from current main. Implementation awaits the immutable plan.
