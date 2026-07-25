---
title: "Implement provider-free Nexus genesis and threshold unlock lifecycle"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T05:59:46Z
updated_at: 2026-07-10T06:21:36Z
source_issues: ["https://github.com/meta-secret/nook/issues/278"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Implement provider-free Nexus genesis and threshold unlock lifecycle

## Imported context

This record was imported from [Nook GitHub issue #278](https://github.com/meta-secret/nook/issues/278)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275. Implemented by PR #294.

## Lifecycle

Nexus is not Simple vault plus a replication selection. It is a distinct pre-vault ceremony:

1. Choose N participants and threshold T, 2 <= T <= N <= 16.
2. Collect signed public-key responses from all N protected devices.
3. Generate a single Nexus root only after all participants are present.
4. Derive secrets_key and members_key with HKDF.
5. Split the root with current SLIP-0039 ext=1, single-group T-of-N.
6. Encrypt and sign one request-bound delivery per participant.
7. Commit the complete public roster and share issuance atomically.
8. Keep the resulting vault locked.
9. Require T signed, encrypted, session-bound contributions for every unlock.

Sync providers are post-genesis encrypted storage only. Genesis, delivery, and unlock work without a provider.

## Security requirements

- No per-device full-key envelope for Nexus.
- No initiator bypass.
- No raw mnemonic/share material exposed to TypeScript or Svelte.
- Reject duplicate participants, mixed sessions/policies, invalid signatures, and insufficient threshold.
- Preserve readable legacy share and replication metadata.

## Acceptance

- [x] Rust-owned current SLIP-0039 implementation with official vectors.
- [x] All-N pre-genesis participant collection.
- [x] Atomic, resumable genesis persistence.
- [x] Provider-free encrypted delivery catalog.
- [x] Threshold unlock protocol owned by Rust/WASM.
- [x] Localized creation and unlock UI.
- [x] Two-browser Playwright flow proves 2-of-2 creation and unlock.
- [ ] Merge PR #294 into nook-v2.

## Historical comments

### cypherkitty — 2026-07-09T18:26:28Z

## Closeout
Done in PR #288. Previously listed blockers are fixed:

- `load_nexus_vault` / `load_nexus_vault_from_opened` wired through WASM (`manager/nexus.rs`: `nexusUnlockStatus`, `openLocalNexusShare`, `connectWithNexusShares`)
- Fail-closed session hydrate for nexus (no auth-envelope unlock)
- Password unlock forbidden for nexus (`NexusPasswordUnlockForbidden`)
- `initialize_empty` / genesis do not write auth envelopes for nexus
- Opened-share ceremony UX + e2e: `NexusCeremonyPanel`, `e2e/nexus-unlock-ceremony.spec.ts` (3 passed locally)
- Interim GF(256) Shamir documented; SLIP-0039 remains #261

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:30Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:52:49Z

Reopened after the second domain audit found nexus lifecycle violations: generic revocation/epoch rotation could write a full key envelope and strand the new epoch, malformed or partial share sets were accepted, and password-only onboarding paths were incompatible with nexus. Fail-closed fixes and adversarial tests are in progress.

### cypherkitty — 2026-07-10T00:50:11Z

Implemented simple and Nexus creation/unlock lifecycle in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. Nexus readiness, opened-share unlock, and password/device-key restrictions are covered by Rust tests and production Playwright.

### cypherkitty — 2026-07-10T06:21:36Z

Completed by PR #294, merged into nook-v2 as 7f7ee260. The provider-free all-N genesis, encrypted delivery, and T-of-N session-bound unlock lifecycle are implemented and locally validated.
