---
title: Type Sentinel onboarding issuance admission and codec ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-onboarding
created_at: 2026-09-07T04:23:44Z
updated_at: 2026-09-07T05:01:36Z
source_issues: []
related_prs:
  - 1491
depends_on:
  - issues/rust-action-ownership/provider-enrollment-admission-ownership.md
---

# Type Sentinel onboarding issuance admission and codec ownership

## Context

Sentinel onboarding package issuance, recipient admission, and package codec operations still expose homeless functions spanning structural checks, provider projection, encryption/decryption, and wire encoding. The action graph does not carry a checked issuance or recipient continuation through the existing delivery lifecycle.

## Outcome

`SentinelOnboardingIssuance` owns request/delivery inputs and a borrowed provider snapshot; private consuming admission yields a non-Clone prepared issuance whose `seal` performs the existing provider projection and recipient encryption. A borrowed package-recipient request owns request/delivery/share checks and yields a private non-Clone checked continuation whose consuming completion decrypts and validates the provider snapshot. `SentinelOnboardingPackage` owns encoding/decoding while deserialized packages remain untrusted DTOs.

## Scope

Exact six-file closure:

- `nook-app/nook-platform/nook-core/src/vault/vault_sentinel_onboarding.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_sentinel_onboarding/issuance.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_sentinel_onboarding/admission.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_sentinel_onboarding/codec.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/sentinel/delivery.rs`

Move six production operations and the core `provider_snapshot` fixture onto bounded owners. Estimated 950–1,300 additions, hard ceiling 1,600; no padding required.

## Acceptance criteria

- [x] Session, policy, and initiator-key equality checks precede provider handling.
- [x] Exactly one provider is required; Local/LocalFolder are rejected; provider/store matching remains exact.
- [x] Issuance retains its existing weaker structural checks and does not claim delivery-signature verification.
- [x] Acceptance verifies the share before provider decryption, normalization, validation, and active-store assignment.
- [x] Schema-1 provider projection, recipient key, errors, wire version, compression, Base64, 16-KiB encoded and 64-KiB decompressed limits remain exact.
- [x] WASM parse/identity/error order and durable sequence remain save delivery → publish provider snapshot → install share → mark complete; partial effects and future-drop behavior remain unchanged.
- [x] Deserialized packages remain untrusted DTOs; no plaintext buffers are retained.
- [x] Retain all three core tests, all three delivery-module tests, and the unchanged parent Sentinel test; add structural mismatch precedence, provider count/type/store matrices, wrong-recipient rejection, malformed encrypted snapshot, codec limits/version, and private/consuming continuation controls.
- [x] Ownership denial covers the completed core onboarding subtree; unrelated public APIs remain outside blanket activation.
- [x] Hosted PR checks, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No new recovery, storage transactions, schemas, ABI, authentication claims, retained plaintext buffers, or changes to durable publication ordering. Preserve existing partial effects and future-drop behavior.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `f241def08d9610d8f6df554d5429a9c52623065f` found six homeless production operations in an exact six-file closure with no live PR overlap. Estimated scope is 950–1,300 additions with a hard ceiling of 1,600.

## Completion

PR #1491 merged as `82a9e7dc5b1241852505666a4863cf05e17c1cab` from delivery head `08ccc2d29ae7d8be22fc0321971bd4a825997d70`, based on main `ded96e7945dffcce0b54238631fd1c65a404dd55`. The exact six-file closure added 645 lines and removed 230. Hosted PR `34084565053`, repository policy `34084549139`, remote Loom `34085094586`, exact-head security review, and readiness passed; readiness deployment was `https://pr-1491.nokey-sh.pages.dev`.
