---
title: Persist companion pairing activation candidate
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: companion-pairing-activation-candidate-storage
created_at: 2026-09-08T08:40:09Z
updated_at: 2026-09-08T09:38:29Z
source_issues: []
related_prs: []
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
activation candidate in a single existing `nook_db` transaction. A strict,
gate-validating Rust reader can load the candidate, while all authoritative
product readers continue to ignore it until the dependent adoption slice.

## Scope

- Revalidate manager and approval bindings at effect time with a Rust-owned
  clock, including expiry, application, vault, name, device, and signing
  identity.
- Validate DEK access for both active envelopes while zeroizing plaintext
  buffers; move only already-sealed provider values.
- Persist activation-namespaced event rows, sealed providers, pairing state,
  and the immutable integrity gate in one existing vault-store transaction.
- Reject replay and concurrent commits so exactly one inert candidate wins.
- Strictly decode typed V1 rows and preserve a distinct unsupported-schema
  failure; validate all digests and correlations during load.
- Add faithful in-memory and real IndexedDB behavior tests for success,
  expiry/abort, replay, concurrency, reload, corruption, physical isolation,
  schema failures, and secret non-exposure.
- Exclude authoritative reader adoption, accepted acknowledgement, reset,
  TypeScript orchestration, and browser transport migration.

## Acceptance criteria

- [ ] Failure before transaction completion leaves no gate-readable candidate
      or accepted result.
- [ ] Candidate payloads and gate commit atomically in one existing physical
      store and remain absent from authoritative event scans.
- [ ] Replay and concurrency produce exactly one durable candidate.
- [ ] Strict typed schema decoding distinguishes unsupported versions from
      corruption and rejects unknown fields.
- [ ] Provider credentials remain sealed and transient DEK plaintext is
      zeroized.
- [ ] Real in-memory and IndexedDB tests cover every validation and durable
      failure boundary without mocks.
- [ ] Security review and hosted Rust/WASM checks pass on one exact head.

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

## References

- [Preparation issue](companion-pairing-activation-transaction.md)
- [PR #1552](https://github.com/meta-secret/nook/pull/1552)
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
