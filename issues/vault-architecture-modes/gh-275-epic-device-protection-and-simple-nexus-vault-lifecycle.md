---
title: "Epic: Device protection and Simple/Nexus vault lifecycle"
status: done
priority: p2
automation: manual
owner: "cypherkitty"
created_at: 2026-07-09T05:59:40Z
updated_at: 2026-07-10T06:21:40Z
source_issues: ["https://github.com/meta-secret/nook/issues/275"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Epic: Device protection and Simple/Nexus vault lifecycle

## Imported context

This record was imported from [Nook GitHub issue #275](https://github.com/meta-secret/nook/issues/275)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Nook has two independent layers:

1. Device protection initializes and protects this browser device key.
2. Vault lifecycle creates or opens a Simple or Nexus vault.

Device protection is chosen once per browser. It is not a vault option and must not appear again in vault creation.

## Canonical vault lifecycle

### Simple

- Create an empty local vault immediately.
- One enrolled device can unlock it.
- Sync providers are optional post-creation storage/backup targets.

### Nexus

Nexus uses a provider-free, two-round ceremony before the vault exists:

1. The initiator chooses participant count N and threshold T, with 2 <= T <= N <= 16.
2. Every participant creates or uses a protected device identity and returns a signed, request-bound public-key response.
3. The initiator must collect all N unique responses.
4. Rust generates one 32-byte Nexus root, derives the vault keys with HKDF, creates current SLIP-0039 ext=1 single-group T-of-N shares, and encrypts one share to each participant.
5. Genesis is committed atomically with the complete public participant roster and share issuance.
6. Each participant accepts its signed, request-bound encrypted delivery. No raw mnemonic crosses the Rust/WASM boundary.
7. The created vault remains locked. Every unlock requires T signed, encrypted, session-bound contributions.

A sync provider is not part of Nexus genesis or quorum unlock. Providers can be attached after genesis only as encrypted vault storage.

## Security invariants

- No single-device full-key envelope or initiator bypass exists for Nexus.
- All N participants are known before genesis; T participants are required for every unlock.
- Requests and responses are bound to session, store, policy, and participant identity.
- Raw SLIP-0039 mnemonics never cross WASM into JavaScript.
- Legacy replication metadata and older share formats remain readable.

## Implementation

PR #294 implements the corrected lifecycle across nook-auth2, nook-core, WASM persistence, localized Svelte UX, and a real two-browser Playwright flow.

Canonical design:

- .cortex/design-docs/nexus-genesis.md
- .cortex/design-docs/vault-architecture-modes.md

## Acceptance

- [x] Device protection is separate from vault creation.
- [x] Vault creation asks only Simple or Nexus.
- [x] Simple creates an empty local vault without requiring replication.
- [x] Nexus collects all N public identities before atomic genesis.
- [x] Current SLIP-0039 T-of-N sharing is Rust-owned.
- [x] Nexus has no single-device unlock path.
- [x] Quorum unlock uses opaque, signed, encrypted session responses.
- [x] Provider-free participant discovery/delivery survives browser refresh.
- [x] UI is localized and covered by focused two-browser E2E.
- [ ] Merge PR #294 into nook-v2.

## Historical comments

### cypherkitty — 2026-07-09T18:27:05Z

## Epic closeout
Milestone DoD met on `nook-v2` via PR #288.

Previously recommended blockers are fixed (not scaffold-only):
1. WASM nexus unlock / opened-share ceremony
2. Fail-closed nexus session hydrate
3. Password×nexus forbidden
4. Nexus `initialize_empty` envelope ban
5. Roster/share meta materialization for locked joiners
6. Real shared Drive grant (`drive.file`) with ManualGrantRequired fallback

Sub-issues #276–#287 closed. Known residuals tracked outside this epic: #261 (SLIP-0039) and https://github.com/meta-secret/nook/issues/279.

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:27:07Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T18:27:18Z

Residual follow-up filed (live Drive OAuth, not a milestone blocker): https://github.com/meta-secret/nook/issues/289. SLIP-0039 remains #261.

### cypherkitty — 2026-07-09T19:43:08Z

Reopened after a code-level milestone audit found remaining acceptance gaps on nook-v2: shared Drive enrollment can emit before the new target contains the event log; the manual grant fallback can lose the created folder id; provider-management surfaces do not consistently expose/enforce capabilities; the grouped UX map and five-group first-run states are incomplete; and e2e does not redeem the shared link in a second browser or cover the required leakage/layout checks. Completion work is in progress on codex/nook-v2-milestone-1-completion.

### cypherkitty — 2026-07-10T00:50:25Z

Epic completed by PR #293 and merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. All milestone issues #276-#287 are closed. Final evidence: task check and formatting passed; 395 Rust tests passed; Rust coverage 92.28% against a 90% floor; optimized-WASM Playwright 115/115 passed; exact-head GitHub verification, Cloudflare preview, deployment record, and coverage reporting all passed.

### cypherkitty — 2026-07-10T06:21:40Z

Completed by PR #294, merged into nook-v2 as 7f7ee260. Device protection is separated from vault creation; Simple remains local-first; Nexus now uses provider-free all-N genesis and T-of-N quorum unlock; sync providers are post-genesis encrypted storage.
