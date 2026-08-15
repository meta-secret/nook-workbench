---
title: Complete identity security epochs and browser recovery
status: ready
priority: p1
automation: manual
owner: codex
created_at: 2026-08-15T06:39:38Z
updated_at: 2026-08-15T06:44:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1002
  - https://github.com/meta-secret/nook/pull/1008
depends_on:
  - identity-directory.md
---

# Complete identity security epochs and browser recovery

## Context

PR 1008 remotely preserves the full identity-security implementation before
PR 1002 is split. This focused issue owns the dependent security capability
after the identity lifecycle and handoff foundation merges.

This issue belongs to
[Identity management and access clarity](README.md).

## Outcome

Identity-held vault keys advance through verified, resumable security epochs.
Remote installations reconcile valid transitions without rollback. Browser
recovery invalidates stale runtimes without losing retired app-key evidence.

## Scope

- Persist identity DEK epoch state and resumable reconciliation plans.
- Project epoch checkpoint events and verified remote epoch visibility.
- Reconcile provider publication and import without exposing partial state.
- Preserve concurrent access grants across epoch rotation.
- Migrate legacy password envelopes before rotation.
- Commit destructive browser recovery safely across tabs and crashes.
- Keep all associated Rust, WASM, browser, migration, and documentation work.
- Exclude identity creation UI and mobile application code.

## Acceptance criteria

- [ ] PR 1002 merges first with the identity lifecycle interfaces.
- [ ] PR 1008 is updated from the resulting current main.
- [ ] Range and file evidence proves all full-work behavior remains.
- [ ] Identity DEK epochs reject rollback and resume interrupted transitions.
- [ ] Remote installations reconcile verified transitions safely.
- [ ] Provider publication and import cannot expose a partial transition.
- [ ] Concurrent access grants survive rotation correctly.
- [ ] Legacy password entries have a tested upgrade path.
- [ ] Recovery preserves retired app-key evidence and invalidates stale runtimes.
- [ ] Rust, actual-WASM, and browser behavior coverage passes.
- [ ] PR 1008 has no unresolved conversations and passes exact-head validation.
- [ ] PR 1008 squash-merges and completion records are published.

## Progress

- 2026-08-15: Full-work commit `553fdc6653c39f8c22c7f5622b2c2387e7817c16`
  was pushed to the preservation branch.
- 2026-08-15: Draft PR 1008 opened before PR 1002 scope extraction.

## References

- [Semantic split plan](../../plans/devices-and-access/2026-08-15T06-39-38Z-pr-1002-semantic-split.md)
- [Identity architecture](../../../.cortex/design-docs/identity-vault-architecture.md)
- [Devices and access product spec](../../../.cortex/product-specs/devices-and-access.md)
