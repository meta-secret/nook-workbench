---
title: Activate companion pairing atomically
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: companion-pairing-activation-transaction
created_at: 2026-09-07T22:02:13Z
updated_at: 2026-09-07T22:02:13Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/companion-pairing-approval-protocol.md
---

# Activate companion pairing atomically

## Context

Pairing admission can validate and consume an exact request without side
effects, but current vault, event-log, provider, and extension pairing records
live behind separate fallible storage operations. Sequential writes can expose
active authority after the protocol reports rejection.

## Outcome

Rust consumes an admitted pairing capability and activates the exact grant,
event set, provider manifest, and pairing state through a durable commit gate.
Readers observe either the previous state or one completely accepted pairing;
a rejected result never exposes partial authority.

## Scope

- Prepare immutable pairing effects under the exact correlation and manifest
  digest without making them authoritative.
- Make every reader require one final committed activation marker before grant,
  event, provider, or pairing state becomes usable.
- Consume the opaque admitted capability inside Rust and emit the accepted
  acknowledgement only after activation commits.
- Project and seal provider credentials without cloning plaintext, redact
  secret-bearing debug output, and zeroize all transient plaintext.
- Add faithful storage-failure simulations at every durable boundary.
- Exclude TypeScript orchestration, best-effort rollback, retry/recovery
  machinery, and production browser adapter migration.

## Acceptance criteria

- [ ] Failure at every prepare or commit boundary leaves no active grant,
      provider, imported event authority, pairing state, or accepted result.
- [ ] Readers ignore uncommitted prepared rows and require the exact committed
      correlation digest.
- [ ] Provider projection does not clone plaintext credentials and zeroizes all
      transient plaintext on success and failure.
- [ ] Concurrent and replayed activation cannot produce two commits or revive
      consumed authority.
- [ ] Real-manager tests exercise the production website and extension paths
      with deterministic infrastructure simulations for every effect failure.
- [ ] Security review and hosted Rust/WASM checks pass on one exact head.

## Progress

- 2026-09-07: Created after Security review proved sequential cross-database
  effects could leave active authority behind a rejected pairing result.

## Findings and decisions

- Rollback after failure is not authoritative across origins or databases.
- Prepared state is non-authoritative until one Rust-owned commit marker is
  durable and required by every reader.
- TypeScript may transport structural values or retain an opaque WASM handle;
  it does not classify, order, or recover activation effects.

## References

- `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/event_db.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/extension_state.rs`
- `nook-app/nook-platform/nook-wasm/src/vault_api.rs`
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
