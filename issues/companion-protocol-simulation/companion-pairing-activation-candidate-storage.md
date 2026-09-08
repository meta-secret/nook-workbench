---
title: Persist companion pairing activation candidate
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: companion-pairing-activation-candidate-storage
created_at: 2026-09-08T08:40:09Z
updated_at: 2026-09-08T14:59:00Z
source_issues: []
related_prs:
  - 1563
depends_on:
  - issues/companion-protocol-simulation/companion-pairing-activation-transaction.md
---

# Persist companion pairing activation candidate

## Context

PR #1552 ends at an opaque, side-effect-free prepared capability. The complete
candidate-storage implementation was preserved locally when that PR was split,
but it must be rebased from merged `main`, reviewed as its own functional slice,
and never recovered by stacking the former oversized branch.

## Outcome

Rust consumes the prepared capability and durably commits one complete inert
activation candidate in a single existing `nook_db` transaction. The typed
publication gate and candidate remain outside authoritative product scans;
strict readback is owned by the next independently useful serial slice.

## Scope

- Revalidate manager and approval bindings at effect time with a Rust-owned
  clock, including expiry, application, vault, name, device, and signing
  identity.
- Validate DEK access for both active envelopes while zeroizing plaintext
  buffers; move only already-sealed provider values.
- Persist activation-namespaced event rows, sealed providers, pairing state,
  and the immutable integrity gate in one existing vault-store transaction.
- Reject replay and concurrent commits so exactly one inert candidate wins.
- Encode typed V1 candidate rows and the immutable integrity gate without
  making a reader or authoritative product path observe them.
- Add faithful in-memory and real IndexedDB behavior tests for success,
  expiry/abort, replay, concurrency, physical isolation, and secret
  non-exposure.
- Exclude authoritative reader adoption, accepted acknowledgement, reset,
  TypeScript orchestration, and browser transport migration.

## Acceptance criteria

- [x] Failure before transaction completion leaves no published candidate
      or accepted result.
- [x] Candidate payloads and gate commit atomically in one existing physical
      store and remain absent from authoritative event scans.
- [x] Replay and concurrency produce exactly one durable candidate.
- [x] Typed V1 rows and integrity digests are committed behind one immutable
      publication gate without exposing a read API.
- [x] Provider credentials remain sealed and transient DEK plaintext is
      zeroized.
- [x] Real in-memory and IndexedDB tests cover validation and durable failure
      boundaries without mocks.
- [x] Security review and hosted Rust/WASM checks pass on one exact head.

## Progress

- 2026-09-08: Split from PR #1552 after the original candidate implementation
  approached the authored-line ceiling and encouraged harmful line-oriented
  optimization. The complete draft is preserved locally at
  `codex/companion-pairing-activation-storage-followup-draft` / `003be715`.
- 2026-09-08: Claimed for implementation from merged `main` under the immutable
  [candidate-storage plan](../../plans/companion-protocol-simulation/20260908T090752Z-companion-pairing-activation-candidate-storage.md).
- 2026-09-08: The initial plan omitted the private parent module that owns the
  required public re-export. The narrowly corrected
  [superseding plan](../../plans/companion-protocol-simulation/20260908T093726Z-companion-pairing-activation-candidate-storage.md)
  adds only that path; the functional scope and estimate are unchanged.
- 2026-09-08: Hosted review required one exhaustive generated outcome and
  effect-boundary authority revalidation. The latest
  [superseding plan](../../plans/companion-protocol-simulation/20260908T105319Z-companion-pairing-activation-candidate-storage.md)
  raises the honest estimate and ceiling instead of compressing the design or tests.
- 2026-09-08: Exact-head execution and review added post-gate expiry, DEK-role
  separation, and test-owner requirements. The
  [final superseding plan](../../plans/companion-protocol-simulation/20260908T112516Z-companion-pairing-activation-candidate-storage.md)
  budgets the complete fixes below the repository hard limit.
- 2026-09-08: Complete strict readback plus required recipient-authority and
  fixture-ownership fixes measured above 2,000 authored additions. The
  [serial execution plan](../../plans/companion-protocol-simulation/20260908T131050Z-companion-pairing-activation-candidate-storage.md)
  preserved atomic persistence as this PR and assigned strict readback to its
  own main-based successor without compressing tests or implementation.
- 2026-09-08: [PR #1563](https://github.com/meta-secret/nook/pull/1563)
  squash-merged at `f126ee9d81e57964361489841c37c8e5f1ae9704`
  after exact-head hosted validation, clean Codex review, zero unresolved
  threads, Security PASS, Web PASS, successful deployment, and repository
  readiness.

## Findings and decisions

- Reconstruct the successor from merged `main`; do not publish or stack the
  preserved draft branch.
- The gate is an atomic publication and integrity marker, not a cryptographic
  same-origin authorization root. Later adoption must revalidate external
  trust authority.
- Candidate rows belong under the activation prefix in the existing vault
  store so they cannot expand authoritative event scans and require no schema
  migration.
- This issue ends with an inert candidate. Only the adoption successor may make
  it product authority or emit acceptance.
- Strict typed readback is the explicit
  [candidate-readback issue](companion-pairing-activation-candidate-readback.md)
  and immediate next serial slice.

## References

- [Preparation issue](companion-pairing-activation-transaction.md)
- [PR #1552](https://github.com/meta-secret/nook/pull/1552)
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
