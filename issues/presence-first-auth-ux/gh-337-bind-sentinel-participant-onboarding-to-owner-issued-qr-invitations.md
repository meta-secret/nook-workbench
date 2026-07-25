---
title: "Bind Sentinel participant onboarding to owner-issued QR invitations"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-13T03:31:40Z
updated_at: 2026-07-21T08:14:47Z
source_issues: ["https://github.com/meta-secret/nook/issues/337"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:presence-first-auth"]
legacy_state_reason: "COMPLETED"
---

# Bind Sentinel participant onboarding to owner-issued QR invitations

## Imported context

This record was imported from [Nook GitHub issue #337](https://github.com/meta-secret/nook/issues/337)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Motivation

Sentinel genesis must be owner-initiated. The creation landing page now exposes only **Create simple vault** and **Create Sentinel vault**; participant devices must not have an unrestricted join path.

The current Rust/WASM ceremony still accepts standalone signed `publicKeyAnnouncement` payloads without requiring an initiator request. Harden the protocol so every remote participant response is scoped to an owner-issued invitation.

## Required flow

1. The initiating owner starts Sentinel onboarding and generates an invitation containing the owner/initiator public ceremony identity and a fresh session binding.
2. Nook renders that invitation as both a QR code and a shareable URL.
3. A participant opens/scans the invitation, creates or unlocks its protected device identity, and returns a signed response bound to that exact invitation.
4. Where confidentiality is useful, participant credential payloads are encrypted to the initiator device public key; private keys and passkey output never leave the participant device.
5. The owner imports/scans the response. Rust verifies invitation/session binding, signature, initiator identity, expiry/replay rules, and duplicate participant identity before adding it to the pending roster.
6. There is no generic Join Sentinel button or standalone participant-announcement path in production UI.
7. After all N public keys are verified, existing T-of-N SLIP-0039 generation and per-participant encrypted share delivery continue atomically.

## Architecture constraints

- Protocol validation and state transitions belong to `nook-auth2` / `nook-core`.
- WASM exposes typed request/response operations; Svelte only transports and renders payloads.
- Invitations and responses contain public ceremony data only; no vault exists before genesis finalization.
- Reject replay across genesis sessions and responses addressed to another initiator.
- Preserve the initiator as ceremony coordinator, not a permanent threshold bypass or privileged vault owner.

## Acceptance criteria

- Standalone `publicKeyAnnouncement` is rejected for remote participant enrollment in production genesis.
- Owner invitation QR and URL round-trip is covered by Rust tests and browser E2E.
- Participant response cannot be replayed into another genesis session.
- Landing creation offers exactly two choices and invitation URLs route directly into the scoped participant response flow.
- English and Russian copy describe the owner-issued invitation boundary.


## Historical comments

### cypherkitty — 2026-07-21T07:29:06Z

## Status refresh (2026-07-21)

Most of this issue landed in https://github.com/meta-secret/nook/pull/357:

- Owner invitation QR/URL (`#sentinel-request=`) with initiator signature verification in Rust/WASM
- Invitation-only participant page / deep-link join (no unrestricted Join button on creation landing)
- Session-bound participant response URLs and e2e owner→participant→owner coverage
- EN/RU copy describing owner-issued invitation boundary

### Still open

Protocol still dual-accepts payloads in `add_sentinel_genesis_participant_payload` (session-bound response **or** standalone `publicKeyAnnouncement`). Remaining acceptance criterion:

- Reject standalone `publicKeyAnnouncement` for remote participant enrollment in production genesis (keep invitation-bound responses only), plus sync stale design notes that still describe unrestricted Join / standalone landing collection (`vault-architecture-modes.md` vs current UI).

Keeping this issue open for that hardening slice only.

### cypherkitty — 2026-07-21T08:14:47Z

Delivered in https://github.com/meta-secret/nook/pull/577.

Standalone `publicKeyAnnouncement` payloads are now rejected for remote Sentinel genesis enrollment; participants must respond to an owner-issued invitation. Milestone 4 original pack is complete.
