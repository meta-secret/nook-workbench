---
title: Type simple genesis event pinning and staged identity admission
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-simple-genesis-event-admission
created_at: 2026-09-06T10:21:00Z
updated_at: 2026-09-06T10:21:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/local-identity-recovery.md
---

# Type simple genesis event pinning and staged identity admission

## Context

Simple-genesis event encoding, pending-marker lookup, event persistence, and staged identity admission still expose free operations across the identity-record and manager boundary. The existing journal, marker, signer-envelope, and staged-admission behavior is correct, but the valid action graph is not represented by consuming owners.

## Outcome

Simple genesis becomes a typed action graph. Pending observations and staged inputs retain their DTO/report roles, a named request owns ordinary begin/resume, and a private prepared event pins the exact pending identity triple, proposed event, protected signer material, and app-key evidence until consuming persistence completes.

## Scope

Exact ten-file WASM scope:

- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/simple_genesis.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/simple_genesis/event.rs` (new)
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/staged_genesis.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/genesis_cleanup.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/handoff/existing_vault.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/recovery/planning.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/connect.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_io.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/local_identity.rs`

Move 13 production free functions onto pending/staged/request/prepared owners and keep the child files below 750 lines for event and 900 lines for staged genesis; hard ceiling 1,950 additions.

## Acceptance criteria

- [ ] Existing wire variants, legacy timestamp, conflicting-field rejection, ordinary/staged compatibility, and legacy plaintext-seed handling remain unchanged.
- [ ] Proposed seed and member envelopes are sealed before journal update; exact store/identity/timestamp comparison and first-complete-event reuse remain unchanged.
- [ ] Existing validation asymmetry is preserved; no new checks are added to branches that currently lack them.
- [ ] Member-specific signer-envelope precedence and legacy envelope behavior remain unchanged.
- [ ] Pending recovery rejection, staged owner selection, authorizer binding, directory snapshots, and no publication before completion remain unchanged.
- [ ] Existing transaction/update ordering, errors, partial effects, browser ABI, and marker schemas remain unchanged.
- [ ] Existing completion publication and cleanup behavior remains unchanged.
- [ ] Fourteen existing tests remain; bounded pinning mismatch/reuse, unpolled prepared-write drop, and privacy/consumption coverage are added.
- [ ] The completed simple/staged genesis subtree denies homeless functions and rejects invalid suppression; no unrelated keyring migration is included.
- [ ] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No schema migration, fallback, rollback/recovery exception, global single-use claim, or provider behavior change. Preserve persisted DTO cloning as data representation while runtime capability ownership is consuming.

## Progress

Read-only DEV-CORE inventory at origin/main `7390027921185515a971ee5fc4624e23e8cdcbc2` identified the ten-file closure with no changed-file overlap with live PRs #1442, #1430, or #1210. Estimated 1,500–1,850 additions and 1,000–1,300 deletions with a hard ceiling of 1,950 additions.
