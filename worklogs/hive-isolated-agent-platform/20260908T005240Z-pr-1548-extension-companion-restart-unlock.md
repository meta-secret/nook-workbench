---
title: Restore extension companion unlock after browser restart
feature: hive-isolated-agent-platform
issue: null
plan: plans/hive-isolated-agent-platform/20260907T225405Z-extension-companion-restart-unlock.md
nook_pr: 1548
status: completed
started_at: 2026-09-07T22:54:05Z
finished_at: 2026-09-08T00:52:40Z
agent: codex
---

# Restore extension companion unlock after browser restart

## Outcome

Restored the extension companion journey after a persistent browser restart. Passkey unlock now reopens the exact persisted paired vault before companion discovery can report an unlocked session. PR #1548 was squash-merged, and the replacement Main workflow completed successfully with Web E2E and Extension E2E green.

## Root cause

- Persistent browser restart discarded the active in-memory vault while retaining the paired-vault identity.
- Passkey unlock reactivated device identity but did not reopen the paired vault.
- Browser presence inferred an unlocked companion from grant and device state, while the Rust endpoint correctly rejected the active-vault mismatch.

## Implementation

- Reused the typed `open_extension_passkey_vault_js` operation to reopen the persisted paired vault before companion discovery.
- Preserved the Rust-owned active-vault identity check and propagated reopen failures without advertising a usable companion.
- Added focused extension session coverage for reopen-before-discovery ordering and fail-closed errors.
- Updated the extension popup UI demo for the restarted locked-but-paired PIN unlock journey.

## Validation

- Focused session tests passed: 8 tests, 48 expectations, 0 failures.
- Targeted ESLint, Prettier, and `git diff --check` passed.
- `task loom:pre-push PR=1548` passed at exact PR head `2621c2f3a8ffea58acad8afa5b48c3e0cb924cbc`.
- Full PR run 34169399514 passed Extension E2E, both Browser E2E shards, Web verification, WASM Node, Native Rust, repository policy, and deployment gates.
- `task pr:ready PR=1548` reported ready with no unresolved reviews, comments, or threads.
- PR #1548 was squash-merged as `78e3e47e6e879e558074570a9b7ea7137d3b1f22` at 2026-09-07T23:35:04Z.
- Replacement Main run 34172250596 passed at `58d36630ef404a881259e99c73bda28e35e844ff`; that head contains the merge commit, and both Web E2E and Extension E2E succeeded.

## Delivery

- Nook PR: https://github.com/meta-secret/nook/pull/1548
- Exact-head PR validation: https://github.com/meta-secret/nook/actions/runs/34169399514
- Replacement Main validation: https://github.com/meta-secret/nook/actions/runs/34172250596

## Remaining work

- None for this repair.
