---
title: Commit companion pairing activation candidate atomically
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-pairing-activation-transaction
created_at: 2026-09-07T22:02:13Z
updated_at: 2026-09-08T00:14:35Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/companion-pairing-approval-protocol.md
---

# Commit companion pairing activation candidate atomically

## Context

Pairing admission can validate and consume an exact request without side
effects, but current vault, event-log, provider, and extension pairing records
live in three physical databases that cannot share a browser transaction. The
preserved draft proved that sequential writes can expose active authority after
the protocol reports rejection. The first activation slice therefore commits
one complete, inert candidate atomically before any existing reader adopts it.

## Outcome

Rust consumes an admitted pairing capability, validates the exact event graph
and already-sealed providers, and durably commits one correlated activation
candidate in a single `nook_db` transaction. The candidate is readable only
through a gate-validating Rust API and remains invisible to normal product
readers until the dependent authoritative-adoption slice.

## Scope

- Consume the opaque prevalidated capability by value and revalidate the live
  manager application, vault, name, device identity, and signing identity.
- Parse and canonicalize transported event records in Rust; validate IDs,
  store binding, graph state, access, identities, and active DEK envelope before
  persistence.
- Move already-sealed provider values into the candidate without loading,
  decrypting, or cloning plaintext credentials.
- Persist activation-namespaced event rows, sealed providers, pairing state,
  and an immutable correlation/digest gate in one real `nook_db` transaction.
- Make replay and concurrent commit yield exactly one candidate, and make the
  gate-aware read API reject missing, torn, or corrupt payloads.
- Add a faithful in-memory implementation and browser IndexedDB tests for
  validation, every simulated write/commit failure, replay, concurrency,
  reload, corruption, and secret non-exposure.
- Exclude accepted acknowledgement, live manager mutation, normal event/
  provider/pairing reader adoption, cross-database cleanup, TypeScript
  orchestration, recovery machinery, and browser adapter migration.

## Acceptance criteria

- [ ] Failure at validation, encoding, any row write, or transaction completion
      leaves no gate-readable candidate or accepted result.
- [ ] The candidate reader requires the exact immutable gate and revalidates
      request, event, provider, and pairing-state digests before returning data.
- [ ] Provider handling moves only already-sealed values; tests prove persisted
      payloads contain ciphertext and no known plaintext credential marker.
- [ ] Concurrent and replayed commits produce exactly one durable candidate and
      cannot revive the consumed admission capability.
- [ ] Real-manager tests and faithful in-memory/IndexedDB implementations cover
      success plus every validation and durable failure boundary.
- [ ] Normal event, provider, and extension-pairing readers remain unchanged and
      cannot observe the inert candidate in this slice.
- [ ] Security review and hosted Rust/WASM checks pass on one exact head.

## Progress

- 2026-09-07: Created after Security review proved sequential cross-database
  effects could leave active authority behind a rejected pairing result.
- 2026-09-08: Repository inventory found that complete reader/mutation/reset
  adoption would make one PR approximately 2,500-3,500 authored additions.
  Delivery was split at the durable functional boundary: this issue commits a
  crash-atomic inert candidate; the dependent adoption issue makes it authority.
- 2026-09-08: Immutable plan published and implementation started from current
  `origin/main` on the dedicated candidate branch.

## Findings and decisions

- Rollback after failure is not authoritative across origins or databases.
- Prepared state is non-authoritative until one Rust-owned commit gate and all
  correlated payloads complete one physical database transaction.
- A single `nook_db` transaction avoids cross-database rollback. Existing
  readers deliberately ignore activation-namespaced rows until the next slice.
- Candidate durability and authoritative product adoption are separate
  functional capabilities; only adoption may emit an accepted acknowledgement.
- TypeScript may transport structural values or retain an opaque WASM handle;
  it does not classify, order, or recover activation effects.

## References

- `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/event_db.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/extension_state.rs`
- `nook-app/nook-platform/nook-wasm/src/vault_api.rs`
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
