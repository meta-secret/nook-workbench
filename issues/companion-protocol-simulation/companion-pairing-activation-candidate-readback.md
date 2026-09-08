---
title: Strictly read inert companion pairing activation candidate
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: companion-pairing-activation-candidate-readback
created_at: 2026-09-08T13:09:46Z
updated_at: 2026-09-08T13:09:46Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/companion-pairing-activation-candidate-storage.md
---

# Strictly read inert companion pairing activation candidate

## Context

Atomic candidate persistence and strict candidate readback could not remain one
clear PR below Nook's 2,000-authored-addition hard limit after exact-head review
required recipient-authority revalidation and focused scenario ownership.

## Outcome

Rust loads an atomically published pairing candidate as an opaque, inert value
only after strict schema, digest, event-graph, and approved-recipient validation.
Missing publication is a typed absence; corrupted or unauthorized publication is
a typed rejection. No authoritative product reader adopts the candidate.

## Scope

- Reconstruct the real event graph from activation-namespaced stored rows.
- Share one recipient-access validator between preparation and readback.
- Validate exact approved device, encryption key, signing key, active envelopes,
  auth membership, graph heads, provider manifest, and publication integrity.
- Expose exhaustive typed `Stored`, `Absent`, and `Rejected` WASM outcomes with
  opaque one-shot success and non-trapping accessors.
- Cover real memory and IndexedDB success, absence, corruption, recipient loss,
  replay visibility, and generated dual-WASM composition without mocks.
- Exclude authoritative adoption, acknowledgement, reset, migration, cleanup,
  TypeScript domain logic, and browser transport migration.

## Acceptance criteria

- [ ] Missing gate is `Absent`; a present invalid gate or payload is `Integrity`.
- [ ] Readback rejects an internally coherent graph that does not authorize the
      exact approved installation recipient.
- [ ] Preparation and readback compile against one Rust recipient validator.
- [ ] Real-instance Rust, memory, IndexedDB, and generated WASM tests cover all
      readback relationships with scenario logic owned by focused fixtures.
- [ ] Security review and hosted Rust/WASM/web checks pass on one exact head.

## Progress

- 2026-09-08: Split from candidate persistence after measured complete readback
  work exceeded the repository hard limit; no successor implementation starts
  until the persistence PR is merged and closed.

## Findings and decisions

- The gate publishes inert bytes; it does not prove recipient authority.
- The successor starts from merged `main`; it is not stacked on the persistence PR.
- Loaded data remains non-authoritative until the following adoption slice.

## References

- [Candidate persistence](companion-pairing-activation-candidate-storage.md)
- [Preparation](companion-pairing-activation-transaction.md)
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
