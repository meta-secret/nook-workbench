---
title: Type Sentinel genesis participant admission
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-genesis-admission
created_at: 2026-09-06T05:54:30Z
updated_at: 2026-09-06T05:54:30Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/passkey-authenticator.md
---

# Type Sentinel genesis participant admission

## Context

The Rust action-ownership migration continues through Sentinel genesis, where request admission, response signing, delivery verification, participant construction, and public-link normalization are split across 23 production free helpers.

## Outcome

Sentinel genesis uses private checked response and delivery states that bind admitted evidence to consuming signing and record construction, while signed bytes, participant keys, and public links are owned by meaningful domain types.

## Scope

- One cohesive eleven-file auth/core/WASM boundary with a 1,800 authored-addition ceiling.
- Move all 23 production helpers in the complete genesis parent and link modules onto meaningful owners.
- Add the simplest non-Clone checked response and delivery states needed to bind validation, signatures, and recipients to consuming actions.
- Preserve the existing collecting-to-ready-to-issued session typestate.
- Adapt the complete Rust/WASM consumer closure without changing schemas or exported WASM signatures.
- Exclude cryptographic changes, stronger authorization, replay guarantees, persistence or recovery changes, TypeScript, and unrelated helpers.

## Acceptance criteria

- [ ] Exact signed tuple bytes, fingerprint separation, errors, validation order, labels, recipients, share constraints, duplicate handling, capacity, and issuance behavior remain unchanged.
- [ ] Checked response state retains the admitted request and signer and consumes itself during signing.
- [ ] Checked delivery retains original signed evidence and consumes itself during record conversion.
- [ ] Request, response, delivery, announcement, participant-key, and public-link types own their related actions.
- [ ] Link trimming, limits, fragment/query precedence, percent/base64 decoding, and standalone-announcement rejection remain unchanged.
- [ ] Response-link normalization remains explicitly weaker than signature/session admission and makes no verified claim.
- [ ] WASM journal, storage, cleanup, and caller sequencing remain unchanged.
- [ ] Complete parent and link modules deny homeless functions and invalid suppression.
- [ ] Colocated behavior tests and compile controls cover admission order, tampering, recipients, evidence binding, normalization limits, privacy, and consuming states.
- [ ] Remote Loom, hosted PR checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

The eleven-file boundary is inventoried from Nook main at `85a21b0c4eea13e1ec0a9450a6fe31e92e8cbb77` with zero overlap against live PRs #1425 and #1210. Pre-edit consumer verification added the direct `vault_sentinel_genesis.rs` wrappers required to remove the auth2 free exports.

## Findings and decisions

Public-link response normalization continues to parse without verifying a response signature. Session admission remains the stronger security boundary.

## References

- `nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis/links.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis/session.rs`
- `nook-app/nook-platform/nook-auth2/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_sentinel_onboarding.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_sentinel_genesis.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/sentinel.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/sentinel/genesis_finalization.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/sentinel/unlock_finalization.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/enrollment_entry.rs`
