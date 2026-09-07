---
title: Type extension identity handoff admission and signer selection
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-extension-identity-handoff
created_at: 2026-09-07T01:28:29Z
updated_at: 2026-09-07T02:09:04Z
source_issues: []
related_prs:
  - 1482
depends_on:
  - issues/rust-action-ownership/totp-setup-key-uri-ownership.md
---

# Type extension identity handoff admission and signer selection

## Context

Extension identity handoff sealing, opening, nonce validation, and post-handoff signer selection still expose homeless production operations. Their security bindings are spread across raw arguments and call sites, so the compiler does not carry the source identity, recipient, nonce, verified material, or signer-selection state through the action graph.

## Outcome

Handoff sealing and opening become explicit data-carrying, consuming owners. Nonce and all identity/key bindings are validated in the existing order before private non-Clone checked state can be consumed into the existing handoff material. Signer selection becomes a named request that preserves event-log presence semantics and the existing existing-vault-import branch.

## Scope

Exact three-file core/WASM closure:

- `nook-app/nook-platform/nook-core/src/auth/extension_identity_handoff.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/device_protection.rs`

Move `validate_nonce`, `seal_extension_identity_handoff`, `open_extension_identity_handoff`, `choose_signing_seed_after_identity_handoff`, and the RFC handoff fixture helper onto bounded owners. Estimated 600–850 additions, hard ceiling 1,100; preserve all existing file ceilings and the browser-test consumer boundary.

## Acceptance criteria

- [x] Nonce remains nonempty, at most 128 bytes, and rejects Unicode whitespace without trimming or normalization.
- [x] Seal order remains nonce, signing-seed parsing, payload serialization, recipient encryption; open order remains expected nonce, recipient decryption, JSON decoding, private identity reconstruction, signing-seed reconstruction, then complete binding comparison.
- [x] Version 1, exact JSON fields, encryption, zeroizing plaintext/seed ownership, and all existing identity/key binding predicates remain unchanged.
- [x] Checked seal/open states are private, non-Clone, consuming, and do not claim replay protection, authorization, origin trust, persistence, rollback, or one-use semantics.
- [x] Existing-event signer selection preserves nonempty stored signer behavior, whitespace semantics, zeroization of discarded handoff seed, separate existing-vault-import branch, seed clones, session mutation, pending-handoff creation, and every WASM await/order.
- [x] Preserve all four core tests and browser-facing methods; add focused nonce/error-order, binding mismatch, malformed payload/version/key, wrong-recipient, signer-selection matrix, privacy, consuming, and abandoned-preparation controls.
- [x] Ownership enforcement covers the completed core handoff module while the unrelated WASM parent and PR #1473 browser-test file remain outside blanket activation.
- [x] Hosted PR checks, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No replay database, freshness proof, authorization change, rollback, persistence guarantee, schema, ABI, generic phase framework, fallback, or recovery exception. Preserve the early `mem::take` of the website recipient key, including failure consumption semantics. Preserve all crypto, serialization, storage, and UI ordering.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `7b6dacc3cad39d479e5262a61aec41bc52d946ff` found four homeless production operations and one fixture helper in an exact three-file closure with no live PR overlap. Estimated scope is 600–850 additions with a hard ceiling of 1,100.


## Completion

PR #1482 merged as `50e19bc1fa60f6a6515f0f4754d0036f68719d9b` from delivery head `60f879ba5d1c74b0b09c5145021d1b9f665e8cdf`, based on main `152ea6a463849241a7a4e2275fe73118ad20db09`. The exact three-file closure added 626 lines and removed 174. Hosted PR `34074556801`, repository policy `34074537836`, remote Loom `34075167573`, exact-head security review, and readiness passed; readiness deployment was `https://pr-1482.nokey-sh.pages.dev`. Linear UI demos `34075280357` passed on the delivery head.
