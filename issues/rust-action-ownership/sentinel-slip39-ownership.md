---
title: Type Sentinel SLIP-0039 issuance and quorum recovery ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-slip39
created_at: 2026-09-07T08:18:57Z
updated_at: 2026-09-07T09:18:37Z
source_issues: []
related_prs:
  - 1505
depends_on:
  - issues/rust-action-ownership/vault-store-sync-commit.md
---

# Type Sentinel SLIP-0039 issuance and quorum recovery ownership

## Context

Sentinel SLIP-0039 issuance and recovery still expose cryptographic orchestration, sharing arithmetic, cipher rounds, and mnemonic encoding as homeless functions. These operations form one cryptographic action graph and need bounded owners that retain the exact secret inputs and admitted quorum state through the transition.

## Outcome

A borrowed Sentinel split request validates policy before consuming issuance. Mnemonic recovery decodes and admits a private non-Clone quorum, then consumes those exact decoded shares. Existing share, polynomial, digest, cipher-round, and mnemonic-word owners carry their inputs and preserve current cryptographic behavior. Sentinel callers adapt only their two internal split/recover calls.

## Scope

Exact five-file closure on fresh main `485f5de38bf42a25a0f920cfc9df20b07b090753`:

- `nook-app/nook-platform/nook-auth2/src/auth/slip39.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/slip39/polynomial.rs` (new)
- `nook-app/nook-platform/nook-auth2/src/auth/slip39/cipher.rs` (new)
- `nook-app/nook-platform/nook-auth2/src/auth/slip39/mnemonic.rs` (new)
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device/sentinel.rs`

Move 29 production operations across orchestration, sharing/arithmetic, cipher, and mnemonic owners. Estimated 1,250–1,750 additions and 550–700 removals; strict ceiling 1,900 additions.

## Acceptance criteria

- [x] Exact RNG order, 15-bit identifier masking, thresholds, first-quorum selection, and validation/error precedence remain unchanged.
- [x] Current-format single-group encoding, 33-word output, `ext=1`, exponent zero for Sentinel, and empty Sentinel passphrase remain exact.
- [x] Internal official-vector recovery continues to support its existing passphrase and 1-of-1 path; Sentinel continues to reject threshold one.
- [x] GF arithmetic, digest framing, Feistel round order, PBKDF2 parameters, checksum customization, padding, and word order remain identical.
- [x] Owned secret intermediates stay private, zeroization and lifetimes remain unchanged, and no secret clones or logs are introduced.
- [x] Only `multi_device/sentinel.rs` adapts the two internal split/recover calls; surrounding encryption and key handling remain unchanged.
- [x] Five SLIP-0039 tests and three Sentinel tests remain, including official vectors; add bounded compatibility/error-order, interpolation, encoding/padding, and private-quorum lifecycle controls.
- [x] Ownership enforcement and invalid-suppression prohibition cover only the completed SLIP-0039 subtree; unrelated code remains unchanged.
- [x] Scoped gates, hosted validation, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No new cryptography, dependencies, formats, recovery policy, public WASM changes, or local product builds/tests. Structural lint success does not establish cryptographic equivalence; official vectors and exact-head security review are mandatory.

## Progress

Fresh-main DEV-CORE inventory at `485f5de38bf42a25a0f920cfc9df20b07b090753` found a closed cryptographic implementation boundary with two internal callers and no live PR overlap. The proposed child modules separate existing polynomial, cipher, and mnemonic responsibilities without changing formats or policy.

## Completion

Implemented and merged as PR #1505 at `e053af208be9074fa168a9c0047afe5e9d1de740`.

- Final PR head: `8ae20fd8ed9ea9fb048ba97ca8508b85d691bba6`
- Base: `214dbe3e59f066ce010488a8155ee08b8e6f40b0`
- Scope: +783 authored / -559, five files, three new child modules.
- Hosted PR validation: final run `34103777775` passed required native, WASM, web, Dylint, dependency, Kani, Proptest/Loom, fuzz, coverage, policy, and preview checks; deployment `https://pr-1505.nokey-sh.pages.dev`.
- Remote Loom verification: run `34104815485` passed.
- Exact-head SECURITY PASS on the final head with no P1/P2 findings; `task pr:ready PR=1505` returned `ready: true`.
- Scoped formatting/static/retention/symbol/size checks and `task loom:pre-push` passed; no local product builds/tests run.
