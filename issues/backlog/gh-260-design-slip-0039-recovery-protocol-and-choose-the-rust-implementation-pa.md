---
title: "Design SLIP-0039 recovery protocol and choose the Rust implementation path"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T00:53:07Z
updated_at: 2026-07-09T04:01:23Z
source_issues: ["https://github.com/meta-secret/nook/issues/260"]
related_prs: []
depends_on: []
legacy_labels: ["documentation","enhancement"]
legacy_state_reason: "COMPLETED"
---

# Design SLIP-0039 recovery protocol and choose the Rust implementation path

## Imported context

This record was imported from [Nook GitHub issue #260](https://github.com/meta-secret/nook/issues/260)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #259.

## Problem

The decentralized recovery work needs a deliberate protocol and library decision before implementation spreads across `nook-auth2`, WASM, and Svelte. The current parent goal is clear, but the first deliverable is not code: decide how Nook will represent a 2-of-3 SLIP-0039 recovery policy, which Rust implementation to trust/adapt, how the session-only QR exchange works, and how this stays separate from sync-provider history.

The implementation candidates to evaluate are:

- `Internet-of-People/slip39-rust`: https://github.com/Internet-of-People/slip39-rust
- `rust-bitcoin/rust-wallet/src/sss.rs`: https://github.com/rust-bitcoin/rust-wallet/blob/master/src/sss.rs

Initial read:

- `Internet-of-People/slip39-rust` is a published `slip39` crate and already wraps SLIP-0039 mnemonics, but it is GPL-3.0-or-later, old, command-oriented, and depends on `sssmc39`.
- `rust-wallet/src/sss.rs` is Apache-2.0 source and appears closer to what Nook needs for an auditable auth-owned module, but it lives inside an archived wallet repo and must be adapted away from that repo's old dependencies.

Do not treat either as accepted until this issue documents the audit result.

## Scope

- Write or update a `.cortex` design spec for decentralized SLIP-0039 recovery.
- Define the MVP policy: one SLIP-0039 group, 3 member shares, member threshold 2.
- Define the exact recovered material: a Nook recovery root that wraps or derives access to `secrets_key` and `members_key`, not generic ad-hoc DEK wording.
- Define the Device A / Device B workflow:
  - Device A is locked or new and calls the other person outside Nook.
  - Device A starts a recovery session and shows a request QR with an ephemeral public key.
  - Device B does not need to unlock/open the vault session.
  - Device B only performs local device/passkey authorization to access its protected recovery share.
  - Device B generates an encrypted response QR for Device A's session.
  - Device A scans enough response QRs, keeps shares in memory only, reconstructs the recovery root, unlocks/enrolls, and clears session state on logout/refresh.
- Compare `slip39-rust`, `sss.rs`, and their transitive dependencies for license, maintenance, auditability, `wasm32-unknown-unknown` compatibility, deterministic test vectors, dependency weight, and API fit.
- Choose one implementation path and document why.
- Define QR payload versioning, session ids, expiry, replay protection, and wrong-vault/wrong-session rejection.
- Define what must never be persisted: recovery request payloads, response share payloads, plaintext shares, recovery root, `secrets_key`, `members_key`, and enough metadata to replay the session.
- Define the sequencing of child implementation issues.

## Out Of Scope

- Implementing the SLIP-0039 algorithm.
- Implementing the WASM bridge or Svelte UI.
- Sending request/response payloads through GitHub, Drive, iCloud, local-folder, or Nook sync providers.
- Building Iroh/P2P transport. This workflow is out-of-band human coordination plus QR/paste for the MVP.

## Acceptance Criteria

- `.cortex` has a durable protocol spec linked from the parent auth/product docs.
- The spec names the chosen Rust implementation path and the rejected alternative(s), including license and maintenance rationale.
- The spec explicitly states that Device B can generate a recovery response after passkey/device authorization without opening the vault session.
- The spec explicitly states that Device A's collected shares are in-memory session material and are lost on logout, refresh, tab close, or recovery cancellation.
- The spec defines test vectors or a source of vectors that the `nook-auth2` implementation must satisfy.
- The spec includes a security checklist for provider-history leakage, app-log leakage, replay, duplicate shares, wrong vault, malformed QR, and insufficient threshold.
- The parent issue #259 is updated to reflect the child issue stack.

## Related

- Parent: #259
- Current auth boundary: `.cortex/ARCHITECTURE.md`
- Current multi-device auth spec: `.cortex/product-specs/decentralized-auth.md`
- Current QR onboarding spec: `.cortex/product-specs/password-envelope.md`
- Current QR payload code: `nook-app/nook-auth2/src/auth/enrollment.rs`


## Historical comments

### cypherkitty — 2026-07-09T04:01:23Z

Product-model update after the initial design/merge:

We should treat the original SLIP-0039 design as an initial library/protocol exploration, not the final product model. Follow-up discussion split the feature into three vault access policies:

1. Simple Vault: every enrolled device can unlock alone; current Nook model.
2. Quorum Vault: multiple devices/shares are required to unlock; working name for the crypto/high-security vault.
3. Social Recovery Vault: owner unlocks normally, trustees can help recover but cannot normally unlock.

Important correction: per-device `secrets_key` / `members_key` envelopes and strict Shamir quorum unlock are mutually exclusive for the same vault key epoch. If one enrolled device can decrypt the vault keys alone, Shamir is not enforcing quorum security for that vault.

The new blocker is #273, which decides the account/identity boundary and whether Quorum Vault is creation-time only, migratable, or a separate app/product surface. The open implementation issues #259 and #261-#265 have been updated to reflect that.

