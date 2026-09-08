---
title: Adopt committed companion pairing activation
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: companion-pairing-activation-adoption
created_at: 2026-09-08T00:04:14Z
updated_at: 2026-09-08T08:40:09Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/companion-pairing-activation-candidate-storage.md
---

# Adopt committed companion pairing activation

## Context

The predecessor will commit one complete activation candidate atomically inside
`nook_db`, while PR #1552 supplies its side-effect-free event-authority
preparation. The candidate remains inert. Current event,
provider, pairing, mutation, and reset paths span separate databases and must
adopt one gate-aware authority model before pairing can return acceptance.

## Outcome

Every authoritative Rust reader either observes the prior state or the exact
committed activation. Event, provider, pairing, mutation, and reset operations
adopt or supersede the candidate without partial authority or resurrection;
only complete adoption emits the Rust-owned accepted acknowledgement.

## Scope

- Make event, provider, and pairing readers project candidate data only through
  the verified immutable gate.
- Make event append, provider publication, pairing reconcile/removal, reset,
  delete, and cross-tab reload preserve or atomically supersede candidate
  authority without resurrection.
- Materialize or retain candidate components without plaintext credential
  cloning and with exact event-graph and device-identity authority.
- Consume the committed candidate and emit accepted acknowledgement only after
  every live reader observes the authoritative state.
- Add real-manager and faithful IndexedDB failure/concurrency/reload tests.
- Exclude TypeScript/browser transport migration, interactive unlock, and
  ongoing provider synchronization.

## Acceptance criteria

- [ ] Every authoritative event, provider, and pairing reader requires the
      exact verified candidate gate before projecting candidate data.
- [ ] Append, publication, reconcile, reset, and delete cannot partially adopt
      or resurrect an activation across failure, reload, or concurrency.
- [ ] Existing live state and an incoming candidate merge or reject through one
      deterministic Rust-owned policy.
- [ ] Accepted acknowledgement is impossible before authoritative adoption and
      remains stable after commit.
- [ ] Provider credentials remain sealed and transient plaintext is neither
      cloned nor persisted.
- [ ] Security review and hosted Rust/WASM checks pass on one exact head.

## Progress

- 2026-09-08: Split from the original atomic-activation issue after repository
  inventory showed that complete reader and mutation adoption would exceed the
  2,000-authored-addition PR limit when combined with candidate persistence.
- 2026-09-08: Dependency retargeted to the dedicated candidate-storage issue
  after PR #1552 was narrowed to side-effect-free preparation.

## Findings and decisions

- Browser IndexedDB cannot atomically transact across `nook_db`, `nook_auth`,
  and `nook_extension`.
- Rollback is not authority; all live readers must agree on the same committed
  gate before acceptance.
- Browser adapters remain blocked until this issue is merged and closed.

## References

- `nook-app/nook-platform/nook-wasm/src/storage/event_db.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/auth_providers.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/extension_state.rs`
- `nook-app/nook-platform/nook-wasm/src/vault_api.rs`
