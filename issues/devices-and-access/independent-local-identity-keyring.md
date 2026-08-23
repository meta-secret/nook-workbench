---
title: Provision an independent local keyring for each identity
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-20T16:00:00Z
updated_at: 2026-08-23T07:19:01Z
source_issues: []
related_prs:
  - 1063
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

- [ ] Two locally created identities never share the same app key.
- [ ] Creating an identity requires and completes a protection ceremony.
- [ ] Lock and reload preserve the selected keyring without exposing secrets.
- [ ] Interrupted setup is resumable or rolls back without an orphan identity.
- [ ] Devices & access enables Add identity only when the secure flow is available.
- [ ] Rust and actual-WASM tests cover creation, switching, lock, and recovery.
- [ ] Exact-head validation passes before squash merge.

## Progress

- 2026-08-23: Claimed for direct implementation. The published start plan is
  `plans/devices-and-access/20260823T071643Z-independent-local-identity-keyring.md`.
  The delivery includes the secure provider contract and the focused Devices &
  access interaction refactor in one PR.
