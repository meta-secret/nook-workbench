---
title: "Implement policy-neutral SLIP-0039 2-of-3 primitives in nook-auth2"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T00:53:08Z
updated_at: 2026-07-10T06:21:38Z
source_issues: ["https://github.com/meta-secret/nook/issues/261"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Implement policy-neutral SLIP-0039 2-of-3 primitives in nook-auth2

## Imported context

This record was imported from [Nook GitHub issue #261](https://github.com/meta-secret/nook/issues/261)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #259. Blocked for product wiring by #273, but the low-level primitive implementation can proceed independently.

## Problem

Nook needs portable SLIP-0039 split/combine behavior inside `nook-auth2`, not in TypeScript and not as UI glue. This issue is only the algorithm/domain-wrapper layer.

Do **not** use this issue to decide whether SLIP-0039 protects:

- direct vault unlock material (`secrets_key` + `members_key`),
- a recovery-only secret,
- trustee/social-recovery material, or
- a future Quorum Vault key schedule.

That product/security decision belongs to #273 and #262.

## Scope

- Add a Nook-owned SLIP-0039 module in `nook-auth2`, adapting the selected Apache-2.0 reference source from `rust-bitcoin/rust-wallet/src/sss.rs` where useful.
- Keep the public Nook API fixed to the MVP shape: one group, three member shares, threshold two.
- Expose typed primitives for:
  - validated SLIP-0039 share mnemonic parsing/inspection
  - 2-of-3 policy validation
  - share generation from validated secret bytes
  - share combine/reconstruction into validated secret bytes
  - share metadata needed for UX without exposing plaintext secret material
- Add Nook-specific wrappers so callers do not pass raw strings/bytes around without validation.
- Keep implementation portable for native and `wasm32-unknown-unknown`.
- Use `zeroize` or existing local secret-erasure patterns for reconstructed secret bytes and share material where applicable.
- Reject invalid SLIP-0039 parameters early: threshold zero, threshold greater than share count, unsupported group shape, too-short master secret, non-multiple-of-16-bit secret, duplicate shares, mixed identifiers, mixed group metadata, wrong checksum, malformed mnemonic, and insufficient threshold.
- Keep sync providers, IndexedDB, QR rendering, vault lifecycle, identity policy, and Svelte out of this module.


## Terminology

This ticket implements the SLIP-0039 encoding/algorithm surface because it is the chosen standard representation for Shamir shares. The product/security mechanism is Shamir threshold sharing; SLIP-0039 is not itself a vault policy, recovery model, identity model, or UX concept.

## Current Product Constraint

Per #259/#273, strict Quorum Vault semantics conflict with per-device vault-key envelopes. The primitives must not imply a finished product policy. They are building blocks for either Quorum Vault or Social Recovery after the identity/access-policy decision is made.

## Out Of Scope

- Choosing Simple Vault vs Quorum Vault vs Social Recovery behavior.
- Storing shares in browser storage.
- Building recovery request/response QR payloads.
- Unlocking or enrolling the vault through WASM.
- UI work.
- Identity/account-service decisions.

## Acceptance Criteria

- `cargo test -p nook-auth2` covers successful 2-of-3 reconstruction for all share pairs from 3 generated shares.
- Tests prove one share cannot reconstruct the protected secret.
- Tests cover malformed mnemonic, checksum failure, duplicate share, mixed secret identifiers, wrong group/member metadata, insufficient threshold, and unsupported policy.
- Tests verify compatibility with selected official SLIP-0039 vectors or upstream examples.
- The public API returns typed errors that WASM can map to clear UI states.
- The module compiles for `wasm32-unknown-unknown` through the repo's normal checks.
- No crypto/recovery logic is implemented in TypeScript.
- The issue/PR explicitly states that product semantics are deferred to #273/#262.

## Related

- Parent: #259
- Policy blocker: #273
- Lifecycle/policy follow-up: #262
- `nook-app/nook-auth2/src/auth/multi_device.rs`
- `nook-app/nook-auth2/src/auth/device_key_protection.rs`
- Candidate source: https://github.com/rust-bitcoin/rust-wallet/blob/master/src/sss.rs
- Rejected direct dependency: https://github.com/Internet-of-People/slip39-rust



## Historical comments

### cypherkitty — 2026-07-09T18:27:20Z

Nexus vault modes shipped on `nook-v2` via PR #288 with interim GF(256) Shamir. This issue remains the owner for replacing that with policy-neutral SLIP-0039 primitives.

### cypherkitty — 2026-07-10T06:15:56Z

PR #294 now includes a Nook-owned current SLIP-0039 implementation in nook-auth2. The implementation is broader than the original fixed 2-of-3 MVP: it supports single-group T-of-N for 2 <= T <= N <= 16, ext=1, official vectors, strict validation, and keeps all mnemonic material behind the Rust/WASM boundary. The primitive is now used by provider-free Nexus genesis and quorum unlock. I am leaving this issue open until #294 is merged into nook-v2.

### cypherkitty — 2026-07-10T06:21:38Z

Completed by PR #294, merged into nook-v2 as 7f7ee260. nook-auth2 now owns current SLIP-0039 ext=1 single-group T-of-N primitives with official-vector coverage, strict validation, and no mnemonic exposure across WASM.
