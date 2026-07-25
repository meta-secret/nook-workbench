---
title: "Epic: Define Simple Vault, Quorum Vault, and social recovery policies"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T00:45:19Z
updated_at: 2026-07-21T04:29:30Z
source_issues: ["https://github.com/meta-secret/nook/issues/259"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Epic: Define Simple Vault, Quorum Vault, and social recovery policies

## Imported context

This record was imported from [Nook GitHub issue #259](https://github.com/meta-secret/nook/issues/259)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Epic for defining and implementing Nook vault access policies, including a SLIP-0039 based **Quorum Vault** mode.

This epic is no longer just "recovery". Nook has three different product/security scenarios:

1. **Simple Vault**: every enrolled device can unlock the vault alone. This is the current implementation and fits password-manager UX.
2. **Quorum Vault**: no single device can unlock. The vault requires a threshold ceremony, e.g. 2-of-3 SLIP-0039 shares. This fits crypto vaults, shared custody, and high-value secrets.
3. **Social Recovery Vault**: an owner device can unlock normally, while other trusted devices/people cannot unlock alone but can help recover access if the owner device is lost.

Working product name for the crypto/high-security mode: **Quorum Vault**.


## Terminology

Shamir secret sharing is the threshold security mechanism. SLIP-0039 is only the standardized mnemonic/share encoding Nook plans to use for the Shamir shares. Product names and security claims should say Simple Vault, Quorum Vault, Social Recovery, threshold unlock, or Shamir quorum as appropriate; do not treat "SLIP-0039" as a user-facing product or policy.

## Core Security Clarification

For the same vault key epoch, these two models are mutually exclusive:

- `secrets_key` / `members_key` encrypted to each enrolled device key, so one device can unlock alone.
- `secrets_key` / `members_key` available only after SLIP-0039 threshold reconstruction.

If every enrolled device has a per-device vault-key envelope, then Shamir does not enforce quorum security for that vault. It may still be useful as a recovery/onboarding ceremony, but it must not be described as "one device cannot access the vault".

For today's Simple Vault, SLIP-0039 disaster recovery has limited value because any existing unlocked/enrolled device can already onboard another device through the current access model. Shamir becomes meaningful when the vault is created as Quorum Vault or when trustees are explicitly modeled as recovery-only actors in Social Recovery Vault.

## Product Decision Blocker

Before WASM/UI implementation proceeds, resolve #273:

- Are Simple Vault, Quorum Vault, and Social Recovery Vault modes in one Nook app, or separate apps/products?
- Is vault access policy selected only at vault creation, or can it be migrated later?
- Does Quorum Vault allow per-device vault-key envelopes at all?
- Does Nook need an identity/account service, a local account abstraction, or only vault-bound local identities?

A naive migration from Simple Vault to Quorum Vault is unsafe/ambiguous: the initial device may already have historical key material that unlocks alone. Converting later could require full vault migration/re-keying or creating a new vault.

## Updated Issue Stack

- [ ] #273: Decide account identity boundary for Simple Vault, Quorum Vault, and social recovery.
- [x] #260: Initial SLIP-0039 protocol/library decision. Superseded in part by this product-policy clarification.
- [ ] #261: Implement low-level SLIP-0039 split/combine primitives in `nook-auth2`.
- [ ] #262: Define Quorum Vault / Social Recovery key lifecycle after #273.
- [ ] #263: Expose policy-aware session APIs through `nook-wasm` after #273/#262.
- [ ] #264: Build creation-time vault type UX and policy-specific QR flows.
- [ ] #265: Add policy validation, e2e coverage, and leak-prevention tests.

## Implementation Notes

Rust implementation candidates:

- `Internet-of-People/slip39-rust`: https://github.com/Internet-of-People/slip39-rust
- `rust-bitcoin/rust-wallet/src/sss.rs`: https://github.com/rust-bitcoin/rust-wallet/blob/master/src/sss.rs

Decision from #260: adapt a Nook-owned implementation from the Apache-2.0 `sss.rs` reference rather than depend on the GPL `slip39-rust` crate.

Keep Nook's explicit key names. User discussion may call this a DEK, but current architecture uses `secrets_key` for user secret values and `members_key` for member catalog entries.

## Acceptance Criteria

- Nook has a documented product/security model for Simple Vault, Quorum Vault, and Social Recovery Vault.
- The identity/account boundary question in #273 is resolved before WASM/UI implementation.
- The core SLIP-0039 algorithm lives in `nook-auth2` with strong unit tests and no TypeScript crypto policy.
- Quorum Vault implementation does not also leave per-device vault-key envelopes that allow single-device unlock for the same key epoch.
- Social Recovery distinguishes owner devices with vault access from trustee devices/people with recovery-only power.
- QR request/response payloads, shares, vault keys, and threshold session state are not written to sync providers, event logs, provider projections, provider outboxes, app logs, or plaintext browser storage.
- UI copy is localized and does not imply Nook sync providers/server transport recovery shares.

## References

- Identity/policy blocker: #273
- SLIP-0039 spec: https://raw.githubusercontent.com/satoshilabs/slips/refs/heads/master/slip-0039.md
- `.cortex/ARCHITECTURE.md`
- `.cortex/product-specs/decentralized-auth.md`
- `.cortex/product-specs/password-envelope.md`
- `nook-app/nook-auth2/src/auth/multi_device.rs`
- `nook-app/nook-wasm/src/manager/device_protection.rs`



## Historical comments

### cypherkitty — 2026-07-21T04:29:29Z

Closing this epic as completed/superseded.

Original “Simple / Quorum / Social Recovery” framing was replaced by the shipped **Simple vs Sentinel** architecture:

- taxonomy + lifecycle: #275 and `.cortex/design-docs/vault-architecture-modes.md` (Status: Implemented)
- app isolation: #360 (`simple.nokey.sh` / `sentinel.nokey.sh`)
- SLIP-0039 primitives: #260, #261
- sub-issues closed with this cleanup: #262, #263, #264, #265, and decision #273

“Quorum Vault” → **Sentinel Vault**. A separate third “Social Recovery Vault” product mode was not adopted.

Note: `.cortex/product-specs/slip39-recovery.md` still describes a draft Simple-vault device recovery flow distinct from Sentinel genesis. That is not tracked by this obsolete epic; open a focused follow-up if that recovery product is still desired.
