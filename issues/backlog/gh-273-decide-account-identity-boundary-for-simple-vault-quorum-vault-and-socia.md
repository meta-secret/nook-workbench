---
title: "Decide account identity boundary for Simple Vault, Quorum Vault, and social recovery"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T03:59:21Z
updated_at: 2026-07-21T04:29:18Z
source_issues: ["https://github.com/meta-secret/nook/issues/273"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","question"]
legacy_state_reason: "COMPLETED"
---

# Decide account identity boundary for Simple Vault, Quorum Vault, and social recovery

## Imported context

This record was imported from [Nook GitHub issue #273](https://github.com/meta-secret/nook/issues/273)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Problem

Nook now has at least three distinct vault access policies, and they cannot be treated as one "recovery" feature:

1. **Simple Vault**: every enrolled device can unlock the vault by itself. This is the current password-manager-friendly model where `secrets_key` and `members_key` are encrypted to each device identity.
2. **Quorum Vault**: no single device can unlock. The vault keys are available only after a threshold ceremony, e.g. 2-of-3 SLIP-0039 shares. This is the crypto-vault / shared-custody model.
3. **Social Recovery Vault**: the owner's device can unlock normally, while trustee devices do not have normal vault access but can help recover access if the owner device is lost.

The current account/device identity model is tightly coupled to vault key access. That is fine for Simple Vault, but it creates a contradiction for Quorum Vault: if a device already has `secrets_key` / `members_key` encrypted to its device key, then Shamir no longer enforces quorum security for that vault.

## Decision Needed

Decide whether Nook should introduce an account/identity layer that is separate from vault key policy.

The hard question: should Nook build an identity service / account identity abstraction, or keep all identity local and vault-bound?

## Why This Blocks Quorum Vault

A naive migration path is dangerous:

1. A one-device vault is created.
2. That device generates vault keys and stores per-device encrypted key envelopes in history.
3. Later, two more devices are added and the team wants a Quorum Vault.
4. The initial device still has historical material that can unlock alone unless all vault data and auth history are carefully re-keyed or the vault is recreated.

Re-encrypting the entire vault and attempting to erase the old access story is complex and may still leave audit/history ambiguity. Quorum Vault may need to be a creation-time policy or a separate vault/app surface rather than an in-place toggle.

## Options To Analyze

### Option A: no identity service, vault-bound identity only

- Simple to keep local-first.
- Quorum Vault must be selected at vault creation.
- Converting Simple Vault to Quorum Vault likely requires creating a new vault and migrating secrets, not toggling policy in place.
- Social recovery can be modeled as recovery trustees for a specific vault.

### Option B: local account identity, no hosted service

- Separate "who is this user/device" from "which vault policy grants key access".
- Still local-first and no Nook server requirement.
- Could allow multiple vaults with different policies under one local identity/profile.
- Cross-device account continuity still needs an onboarding/recovery story.

### Option C: Nook identity service

- A real account layer can coordinate identity, devices, and policy metadata across vaults.
- Easier UX for multiple vault types and device inventory.
- Adds server trust, availability, privacy, abuse, and operational scope.
- Must not become a mailbox for SLIP-0039 shares or vault key material.

## Required Outcome

Produce a design decision that answers:

- Are Simple Vault, Quorum Vault, and Social Recovery Vault modes in one app, or separate apps/products?
- Is vault access policy chosen only at vault creation, or can it be migrated later?
- Does Quorum Vault allow any per-device vault-key envelope, or is threshold unlock the only way to obtain live vault keys?
- How does device identity exist without implying vault-key access?
- Do trustees in Social Recovery Vault have accounts/devices, or just recovery identities?
- Is a Nook-hosted identity service required, optional, or explicitly out of scope?
- What must be true before issues #261-#265 wire SLIP-0039 into WASM/UI?

## Acceptance Criteria

- `.cortex` has a product/security spec for vault access policies and identity boundaries.
- The spec names the working product modes: Simple Vault, Quorum Vault, and Social Recovery Vault, or chosen replacements.
- The spec explicitly states that per-device key envelopes and strict Shamir quorum unlock are mutually exclusive for the same vault key epoch.
- The spec defines whether Quorum Vault can be created only from scratch or migrated from Simple Vault.
- The spec decides whether an identity service is needed for the MVP.
- The SLIP-0039 implementation issues are updated to depend on this decision before WASM/UI work proceeds.

## Related

- Parent epic: #259
- Current primitives issue: #261
- Lifecycle/policy issue: #262
- WASM/UI follow-ups: #263, #264, #265
- Prior protocol issue: #260


## Terminology

Shamir secret sharing is the security mechanism. SLIP-0039 is only the implementation format for mnemonic shares. The identity/account decision should be phrased around vault access policy and threshold security, not around SLIP-0039 as a product mode.


## Historical comments

### cypherkitty — 2026-07-21T04:29:17Z

Closing as decided by the shipped architecture.

Resolved under [vault-architecture-modes](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/vault-architecture-modes.md) and #360 / #275:

- vault access policy is only `simple` | `sentinel` (immutable after `store_id`)
- Simple and Sentinel are isolated apps/products, not one app with three modes
- no separate Nook account/identity service is required for this model; vault-bound device identities + provider accounts remain distinct from unlock policy
- “Quorum Vault” / “Social Recovery Vault” as a third in-app mode is obsolete naming

Parent #259 is being closed with the rest of this pack.
