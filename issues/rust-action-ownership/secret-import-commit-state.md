---
title: Type secret import preparation and commit
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-secret-import-commit
created_at: 2026-09-05T22:25:26Z
updated_at: 2026-09-05T22:25:26Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/security-epoch-commit-state.md
---

# Type secret import preparation and commit

## Outcome

Secret import has distinct coalesced and prepared states, so only a successfully prepared encrypted operation set can invoke the final append action.

## Scope

One Rust file with a ceiling of 300 authored additions. Introduce private data-carrying import states, move coalescing, existing-record grouping, item reconciliation, and final commit actions to their state owners, enable full-module ownership enforcement, and add focused preparation behavior tests.

## Acceptance criteria

- [ ] Construction coalesces equivalent plaintext items and retains the current duplicate count and metadata behavior.
- [ ] Preparation consumes the coalesced state and returns only a prepared encrypted operation set after all records reconcile successfully.
- [ ] Only the prepared state can invoke the final append action; empty operations still append nothing.
- [ ] Existing crypto restoration, Sentinel admission, authorization, event ordering, zeroization, status, and error behavior remain unchanged.
- [ ] The module denies homeless functions without blanket suppression.
- [ ] Hosted behavior and Dylint checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

The private states secure this local preparation boundary. Prepared data is not authorization; runtime admission and freshness checks remain authoritative. No public Rust export, WASM ABI, event schema, storage schema, dependency, logging, fallback, cleanup, retry, or recovery-policy change.

## Progress

2026-09-05T22:25:26Z: Focused issue created from current-main inventory; implementation has not started.
