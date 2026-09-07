---
title: Type extension identity handoff admission and signer selection
authority: rust-action-ownership
issue: issues/rust-action-ownership/extension-identity-handoff-ownership.md
created_at: 2026-09-07T01:28:29Z
status: immutable
---

# Plan

1. Keep the exact three-file core/WASM closure at fresh main `7b6dacc3cad39d479e5262a61aec41bc52d946ff`; inspect handoff sealing/opening, identity/key bindings, signer selection, and ownership-lint boundaries.
2. Bind source identity, signing seed, recipient key, and nonce in a borrowed sealing request. Validate nonce, reconstruct the signer, and consume private non-Clone checked seal state into the existing encrypted payload.
3. Bind expected nonce/device/key material in a recipient opening request. Consume private checked state only after decryption, decoding, identity reconstruction, seed reconstruction, and complete binding comparison; retain the existing `into_parts` verified-material boundary.
4. Move signer selection onto a named request that explicitly represents event-log presence while preserving existing-vault-import selection, seed clones, zeroization, session mutation, pending handoff, and WASM await ordering.
5. Preserve version, JSON, encryption, error ordering, early recipient-key `mem::take`, all four core tests, public WASM methods, and browser-test consumers; add focused mismatch, malformed-input, nonce, privacy, consuming, and abandoned-preparation controls.
6. Enable ownership enforcement only in the completed core handoff module; run scoped formatting/static, symbol, line-budget, and test-retention checks plus `task loom:pre-push`.
7. Delegate implementation and exact-head SECURITY review; deliver one cohesive PR below 2,000 authored additions. Refresh main before hosted validation, run hosted gates and remote Loom, obtain exact-head SECURITY, merge after readiness, and publish Workbench completion records.
