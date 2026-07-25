---
title: "Define vault key lifecycle for Simple Vault, Quorum Vault, and social recovery"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T00:53:10Z
updated_at: 2026-07-21T04:29:20Z
source_issues: ["https://github.com/meta-secret/nook/issues/262"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Define vault key lifecycle for Simple Vault, Quorum Vault, and social recovery

## Imported context

This record was imported from [Nook GitHub issue #262](https://github.com/meta-secret/nook/issues/262)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #259. Depends on #273 and the SLIP-0039 primitives in #261.

## Problem

Nook must not treat SLIP-0039 as a generic "recovery" bolt-on. The lifecycle model depends on the vault access policy:

- **Simple Vault**: every enrolled device can unlock alone through per-device encrypted `secrets_key` / `members_key` envelopes.
- **Quorum Vault**: no single device can unlock. Threshold reconstruction is the only way to obtain live vault keys for the current key epoch.
- **Social Recovery Vault**: owner device(s) can unlock normally; trustees cannot unlock but can help recover owner access.

For the same key epoch, Quorum Vault must not also keep per-device vault-key envelopes that allow single-device unlock. Otherwise Shamir is not enforcing quorum security.


## Terminology

Use Shamir / threshold sharing when discussing the security property. Use SLIP-0039 only when discussing the concrete mnemonic/share format used to encode those shares.

## Scope

After #273 decides the identity/account boundary, define and implement the auth-domain lifecycle for policy-specific vault key access.

Required design points:

- Define the durable policy record for Simple Vault, Quorum Vault, and Social Recovery Vault.
- Define whether policy is creation-time only or migratable.
- Define what key material exists for each policy:
  - Simple Vault: per-device encrypted `secrets_key` / `members_key` envelopes.
  - Quorum Vault: SLIP-0039 share material sufficient only with threshold; no single-device vault-key envelope for the same epoch.
  - Social Recovery Vault: owner unlock material plus trustee recovery-only shares/identities.
- Define what happens when a vault starts with one device and later wants Quorum Vault. The expected answer may be "create a new vault and migrate secrets" rather than in-place conversion.
- Define key epoch and rotation rules for each policy.
- Define how device add/revoke works without accidentally leaving historical single-device unlock paths in a Quorum Vault.
- Define whether trustee devices are normal Nook devices, recovery-only identities, or account-level identities.
- Keep helper/share access separate from opening user secret plaintext unless the selected policy explicitly requires threshold unlock.

## Out Of Scope

- Low-level SLIP-0039 parsing/generation (#261).
- Browser QR request/response UX (#264).
- WASM session state and APIs (#263).
- Provider transport of recovery/share payloads.

## Acceptance Criteria

- `.cortex` documents the chosen lifecycle for Simple Vault, Quorum Vault, and Social Recovery Vault.
- The implementation has typed auth-domain records for selected policy metadata and key epoch state.
- Quorum Vault state cannot be mistaken for Simple Vault state and does not retain per-device vault-key envelopes as an unlock path for the same epoch.
- Social Recovery distinguishes normal vault members from recovery trustees.
- Tests cover genesis creation, policy selection, device add/revoke, epoch rotation, stale share rejection, and policy mismatch rejection.
- Tests explicitly prove that a Quorum Vault cannot be unlocked from one device's local material alone.
- If Simple-to-Quorum migration is rejected, the issue documents that users must create a new Quorum Vault and migrate secrets.

## Related

- Parent: #259
- Identity/policy blocker: #273
- SLIP-0039 primitives: #261
- WASM follow-up: #263
- UI follow-up: #264
- `nook-app/nook-auth2/src/auth/multi_device.rs`
- `nook-app/nook-auth2/src/auth/password_envelope.rs`
- `.cortex/product-specs/decentralized-auth.md`



## Historical comments

### cypherkitty — 2026-07-21T04:29:19Z

Closing as completed under current naming.

Simple and Sentinel key lifecycles are implemented and documented in `.cortex/design-docs/vault-architecture-modes.md` and `.cortex/design-docs/sentinel-genesis.md`:

- Simple: per-device vault-key envelopes; optional sync after create
- Sentinel: no per-device full-key envelope; SLIP-0039 T-of-N quorum required to open

Obsolete in this issue’s framing: a third “Social Recovery Vault” product mode and the “Quorum Vault” name (now Sentinel).
