---
title: Reject quarantined events before publication
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-event-quarantine-publication
created_at: 2026-09-05T05:51:54Z
updated_at: 2026-09-05T06:37:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1372
depends_on:
  - issues/rust-action-ownership/oauth-origin.md
---

# Reject quarantined events before publication

## Outcome

The core event session cannot publish a locally quarantined event as its current head or queue it for provider output.

## Scope

Three Rust files, estimated 70–130 authored additions and ceiling 180. Add a typed local-quarantine error, match the existing append disposition before core publication, and add behavior tests for rejection and unchanged successful dispositions.

## Acceptance criteria

- [ ] A validly signed but causally unauthorized event returns the typed quarantine error before heads or outbox change and is not stored.
- [ ] Applied, Pending, and Duplicate preserve their current EventId, heads, and outbox behavior.
- [ ] A quarantined staged security rotation leaves the original session unchanged.
- [ ] Existing malformed-envelope, concurrent-branch, provider-advanced-before-flush, and indirect WASM session coverage remains green.
- [ ] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

This correction preserves the store's existing four dispositions and rejects only Quarantined at the core publication boundary. It does not add a prepared-store wrapper, global frontier check, replay rule, provider durability claim, wire change, recovery path, or new cryptography. The separate WASM transactional persistence path is unchanged.

## Progress

DEV-CORE implemented the three-file boundary in PR1372 at f85208a0848c5256c7e0cbdc4223a69183c720ae. Formatting, diff hygiene, authored-line budget, pre-push policy, and source SECURITY passed. Hosted validation remains pending.
