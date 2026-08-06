---
title: First-class Identity with app keys and identity-owned DEKs
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
plan: plans/devices-and-access/20260806-065844-identity-first-class.md
nook_pr: 935
status: completed
started_at: 2026-08-06T06:58:00Z
finished_at: 2026-08-06T09:11:06Z
agent: cursor
---

# Work summary

## Outcome

Shipped first-class Identity that owns passkeys, app keys, and per-vault DEKs.
Devices and access centers an Identity hub with Passkey and App key edges to
vaults. Login opens `/devices-access`. PR 935 squash-merged.

## Progress

- Revised cortex vocabulary for Passkey, App key, `app_id`, and identity-owned DEKs.
- Added Identity domain records with DEK generate/rewrap and legacy synthesize paths.
- Persisted Identity and dual-read `app_id` / `app_key_wrapped` storage.
- Reshaped the shared Access graph and EN/RU copy around Identity.
- Fixed Access lock reporting by zeroizing app-key material synchronously.
- Allowed BuildKit local write for preflight CLI export so Native Rust verification can finish.

## Implementation problems

- WASM snapshot APIs cannot export `Option`; used a named Missing/Present load state.
- Dylint rejected mutate-then-error in `remove_member`; validate before mutate.
- Locking while staying on `/devices-access` raced an async `lockDeviceIdentity` queue.
- Native Rust verification failed on `preflight:export` without `fs.write` allow.

## Decisions

- Identity owns per-vault DEK envelopes; vault create fails closed without Identity.
- Keep vault `auth:` unlock envelopes for compatibility while Identity is authoritative.
- Prefer AppKey / `app_id` names on new APIs; dual-read legacy device storage keys.

## Validation

- Host-applied `task format` and UI demo contract.
- Exact-head PR validation succeeded for
  [run 31086882015](https://github.com/meta-secret/nook/actions/runs/31086882015).
- `task pr:ready` passed before squash merge of PR 935.

## Remaining work

- Multi-identity picker and multi-identity vault DEK sharing remain out of scope.
