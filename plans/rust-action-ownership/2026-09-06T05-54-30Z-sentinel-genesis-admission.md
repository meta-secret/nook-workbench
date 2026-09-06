---
title: Sentinel genesis participant admission implementation plan
status: active
feature: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-genesis-admission.md
created_at: 2026-09-06T05:54:30Z
base_sha: 85a21b0c4eea13e1ec0a9450a6fe31e92e8cbb77
gizmo_id: rust-action-ownership-sentinel-genesis-admission
---

# Sentinel genesis participant admission implementation plan

## Delivery boundary

Refactor the exact ten-file Sentinel genesis auth/core/WASM closure as one substantial PR. Keep authored additions at or below 1,800 and every file below 1,000 lines.

## Implementation

1. Split focused production children only where needed to keep ownership and files simple.
2. Move request validation and participant construction into a private-field, non-Clone checked response state that retains the exact request and signer and consumes itself during signing.
3. Move delivery policy, session, recipient, share, and signature admission into a checked delivery borrowing the original delivery and consuming itself during record construction.
4. Move signing-byte, validation, fingerprint, extraction, decoding, normalization, and link construction actions onto their request, response, delivery, announcement, participant-key, and link-input owners.
5. Preserve the existing genesis session typestate and adapt the complete Rust/WASM caller closure.
6. Enable homeless-function and invalid-suppression enforcement only when both target modules are complete.

## Security invariants

- Preserve signed bytes, domain separation, validation order, exact errors, recipient binding, share checks, duplicate/capacity rules, and issuance behavior.
- Preserve link size, trimming, query/fragment precedence, percent/base64 decoding, and announcement rejection.
- Keep response-link normalization weaker than verified session admission and avoid any verified claim.
- Preserve WASM ABI, schemas, journal behavior, storage, cleanup, and sequencing.

## Evidence

- Retain all 16 existing module tests.
- Add colocated behavior tests for validation order, tampering, wrong recipients, borrowed evidence, normalization boundaries, and terminal actions.
- Add positive and compile-fail controls for private, borrowed, non-Clone, and consuming states.
- Run scoped formatting and static ownership inspection locally; use remote and hosted gates for builds and tests.
- Require exact-head SECURITY and readiness before squash merge.

## Exclusions

No crypto redesign, stronger authorization policy, replay guarantee, persistence or recovery change, schema change, TypeScript change, or unrelated ownership migration.
