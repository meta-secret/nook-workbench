---
title: Provision an independent local keyring for each identity
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-20T16:00:00Z
updated_at: 2026-08-25T18:12:25Z
source_issues: []
related_prs:
  - 1063
  - 1105
depends_on:
  - issues/devices-and-access/identity-directory.md
---

# Provision an independent local keyring for each identity

## Context

The identity directory can persist and select multiple identities, but the
current creation command reuses the already-unlocked local app key. Enabling
Add identity with that behavior would make identities appear independent while
sharing the same local trust root.

## Outcome

Creating another local identity provisions a distinct app key, protects it
with an explicit passkey or PIN ceremony, and stores enough non-secret metadata
to select and unlock the correct local keyring later.

## Scope

- Define the Rust-owned local identity-keyring and selection model.
- Generate a distinct app key for every newly created local identity.
- Protect each key with an explicit passkey or PIN ceremony.
- Persist only wrapped private material and public identity membership data.
- Let Devices & access enable Add identity and report partial setup safely.
- Preserve existing initial-identity, lock, recovery, and companion behavior.
- Keep cross-installation membership enrollment in its existing focused issue.

## Acceptance criteria

- [x] Two locally created identities never share the same app key.
- [x] Creating an identity requires and completes a protection ceremony.
- [x] Lock and reload preserve the selected keyring without exposing secrets.
- [x] Interrupted setup is resumable or rolls back without an orphan identity.
- [x] Devices & access enables Add identity only when the secure flow is available.
- [x] Rust and actual-WASM tests cover creation, switching, lock, and recovery.
- [ ] Exact-head validation passes before squash merge.

## Progress

- 2026-08-23: Claimed for direct implementation. The published start plan is
  `plans/devices-and-access/20260823T071643Z-independent-local-identity-keyring.md`.
  The delivery includes the secure provider contract and the focused Devices &
  access interaction refactor in one PR.
- 2026-08-25: Implementation is complete on exact head
  `739d501bc8616804b9f44d743d5972cd5d739549`, based on `origin/main`
  `d41d457222844812fe9fca0fd6081a694fbd1767`. Focused browser evidence is
  green: 14 Devices & access scenarios, two recovery/migration WASM
  regressions, and the rendered UI demo. Final advisory review and hosted PR
  validation remain before merge.
- 2026-08-25: PR 1105 is updated to exact head
  `58881c35ac29ee111842c74a8282d692137fdb05`, including repairs for all three
  P1 review findings: failed imports restore the atomically captured prior
  identity selection, legacy profile ownership is rechecked inside the write
  transaction, and Rust rejects extension grants for a non-active identity.
  The latest full browser run reached product tests and passed every Devices &
  access and recovery scenario before an unrelated Sentinel scenario failed.
  Required exact-head Rust, extension, web, browser-WASM, and repository-policy
  gates are blocked before compilation because the private ARC BuildKit worker
  cannot reach the required SeaweedFS compiler-cache bucket. Three unchanged
  exact-head retries reproduced the infrastructure failure.
- 2026-08-25: Product direction now treats a passkey or PIN as the managed
  protection object and each protected Nook app as subordinate context. The
  raw app-key identifier remains an internal security fact and may appear only
  in an advanced disclosure. Work resumed under the superseding plan
  `plans/devices-and-access/20260825T174412Z-passkey-app-hierarchy.md`.
- 2026-08-25: PR 1105 now presents apps beneath their passkey or PIN, keeps the
  raw app ID behind Advanced, and describes remote apps only as linked to the
  identity. Exact head `be2e22fe532d0fb98b9f2d91d4c0e4dbc8e87f40` also
  retains an atomic rollback-readable provider projection. All four P1 review
  conversations have targeted replies and are resolved. Local format, Cortex,
  UI demo, and pre-push gates pass, but hosted validation run 32881570128 and
  repository-policy run 32881551792 stopped before product compilation because
  the private build worker could not reach the required compiler-cache service.
- 2026-08-25: Work resumed to make passkey cards recognizable at a glance.
  The superseding plan is
  `plans/devices-and-access/20260825T181225Z-passkey-recognition-card.md`.
  It adds safe credential, keeper, creation, and last-use evidence to the list
  and graph cards without restoring browser diagnostics.
