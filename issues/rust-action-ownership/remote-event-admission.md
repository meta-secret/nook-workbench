---
title: Type remote event admission and epoch visibility
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-remote-event-admission
created_at: 2026-09-06T01:04:57Z
updated_at: 2026-09-06T01:04:57Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/provider-outbox-publication.md
---

# Type remote event admission and epoch visibility

## Context

The [Rust action ownership](README.md) migration now continues from provider transport into the event-log boundary that validates remote events, prepares a candidate union, proves epoch visibility, and commits the accepted set.

## Outcome

Remote bytes pass content identity, schema, signature, candidate-graph authorization, and epoch visibility before a prepared union can replace the local event store. Preparation failures and dropped prepared states cannot mutate the existing store or its provider outbox.

## Scope

- One cohesive Rust boundary across event-log store, remote epoch visibility, and direct core/WASM consumers, with a 1,950 authored-addition ceiling.
- Add checked remote-event and prepared remote-union owners with consuming commit.
- Own classification and visibility ordering with meaningful batch/aggregate types.
- Enable full ownership enforcement in complete event-log modules and migrate direct callers.
- Exclude serialization/signing algorithm changes, graph reduction changes, generic IndexedDB ownership, provider adapters, public ABI, TypeScript, schema, retry, fallback, and recovery changes.

## Acceptance criteria

- [ ] Requested ID, supported schema, and actor signature checks preserve current order and errors.
- [ ] Candidate-graph authorization occurs before local store replacement.
- [ ] Incomplete epoch trigger/checkpoint paths and descendants remain quarantined.
- [ ] Quarantined events are excluded from accepted store and retained outbox.
- [ ] Preparation failure or drop preserves the original local store and outbox.
- [ ] Only a prepared remote union can commit the validated candidate.
- [ ] Checkpoints publish before triggers with deterministic event-ID tie-breaking.
- [ ] Empty, same-store, different-store, and multiple-store classification stays unchanged.
- [ ] Touched complete modules deny homeless functions and compile-fail evidence rejects invalid state use.
- [ ] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

Implementation is assigned from main after provider transport PR #1418.

## Findings and decisions

Checked remote events prove requested content identity, supported schema, and actor signature. Candidate-graph authorization remains a separate preparation step. The prepared union borrows the destination mutably so intervening mutation is unavailable before consuming commit.

## References

- `nook-app/nook-platform/nook-event-log/src/store.rs`
- `nook-app/nook-platform/nook-event-log/src/remote_epoch_visibility.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs`
