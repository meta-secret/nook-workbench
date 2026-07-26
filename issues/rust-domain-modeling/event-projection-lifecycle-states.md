---
title: Model event projection lifecycle states explicitly
status: proposed
priority: p2
automation: manual
owner: unassigned
created_at: 2026-07-26T22:32:47Z
updated_at: 2026-07-26T22:32:47Z
source_issues: []
related_prs: []
depends_on: []
---

# Model event projection lifecycle states explicitly

## Context

The Rust audit found `deleted_by`, `replaced_from`, and `current_epoch` optional
fields in the event projection. Their absence may encode live/tombstoned,
original/replacement, and pre-genesis/current-epoch states. This is part of
[Explicit Rust domain states](README.md).

## Outcome

Projection lifecycle states use named enums with invariant-preserving reducer
transitions and unchanged deterministic replay behavior.

## Scope

- Include `ProjectedSecret` deletion/replacement provenance and projection
  epoch initialization/current state.
- Preserve map and graph lookups that truthfully return `Option<T>`.
- Exclude signed-event fingerprint and actor-key fields handled by the initial
  event-domain refactor.

## Acceptance criteria

- [ ] Live/tombstoned and original/replacement states cannot form contradictory
  combinations.
- [ ] Pre-genesis and active-epoch states are explicit.
- [ ] Reducer, conflict, replay, and permutation-invariance tests cover every
  enum transition.
- [ ] The relevant candidate entries in the Rust Option inventory are resolved
  or reclassified with rationale.

## Progress

- Candidate occurrences identified; no implementation started.

## Findings and decisions

- Graph/map searches remain idiomatic `Option<T>`; only persisted/materialized
  lifecycle state is targeted.

## References

- [Authored Rust Option inventory](https://github.com/meta-secret/nook/blob/main/.cortex/references/rust-option-inventory.md)
- [Vault event-log design](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/vault-event-log.md)
