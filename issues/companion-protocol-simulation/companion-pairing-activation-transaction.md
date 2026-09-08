---
title: Prepare companion pairing event authority
status: done
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-pairing-activation-transaction
created_at: 2026-09-07T22:02:13Z
updated_at: 2026-09-08T08:40:09Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1552
depends_on:
  - issues/companion-protocol-simulation/companion-pairing-approval-protocol.md
---

# Prepare companion pairing event authority

## Context

Pairing admission validates and consumes an exact request without side effects,
but it does not yet prove that transported event history belongs to the admitted
vault, authorizes the exact device, or remains a Simple-vault history. The
original plan combined that proof with browser persistence. During delivery the
scope was split at the functional boundary instead of optimizing implementation
around the authored-line ceiling.

## Outcome

Rust consumes an admitted pairing capability together with typed external event
records and produces an opaque prepared capability only after validating the
complete event-authority relationship. The operation is synchronous and
side-effect free. Persistence, effect-time revalidation, replay, loading, and
authoritative adoption are owned by serial successor issues.

## Scope

- Consume the opaque prevalidated approval and typed event records by value.
- Validate canonical event IDs and bytes, uniqueness, exact vault ownership,
  graph completeness, quarantine, authorization, projection conflicts, the
  exact installation device/encryption/signing tuple, active envelopes, and
  current auth membership.
- Reject any Sentinel architecture evidence in explicit operations or epoch
  checkpoint history through one Rust-owned event-log predicate.
- Retain typed graph heads and private authority state in an opaque prepared
  Rust/WASM capability with no getters, serialization, or effect methods.
- Cover every private preparation failure with real signed Rust instances and
  cover the generated WASM success, ownership, and generic rejection boundary.
- Exclude persistence, browser storage, clocks, replay, loading,
  acknowledgement, adoption, reset, TypeScript policy, and browser transport.

## Acceptance criteria

- [x] Real event records are accepted only when IDs, storage bytes, vault,
      graph, authorization, installation identity, envelopes, and membership
      all match the consumed approval.
- [x] Explicit and checkpoint-carried Sentinel history is rejected, including
      after materialized Sentinel state is later revoked.
- [x] The prepared capability is opaque, consuming, typed, and incapable of
      durable or browser effects.
- [x] Every private preparation failure has exact real-instance Rust coverage;
      the generated WASM edge has success, lifecycle, and stable rejection
      coverage without mocks.
- [x] Security review and hosted Rust/WASM/web checks pass on one exact head.

## Progress

- 2026-09-07: Created after Security review proved sequential cross-database
  effects could leave active authority behind a rejected pairing result.
- 2026-09-08: Repository inventory initially split durable candidate commit
  from authoritative reader adoption.
- 2026-09-08: Delivery was corrected again after the PR approached the
  authored-line ceiling. The browser persistence work was preserved for a
  serial successor, and this issue was reconstructed around side-effect-free
  event-authority preparation.
- 2026-09-08: PR #1552 passed exact-head Security review, all applicable hosted
  Rust/WASM/web/policy checks, readiness, and preview deployment; it was
  squash-merged as `39c16086d0fbb553c096882bd52ce649177abc33`.

## Findings and decisions

- A line ceiling is a stop signal for scope design, not a target to optimize
  implementation around.
- The truthful first activation capability is an opaque proof that approval and
  untrusted event history agree; it conveys no live or durable vault authority.
- Architecture classification must scan immutable operation history, including
  reserved Sentinel records carried by epoch checkpoints. Current materialized
  maps are insufficient because revocation can erase them.
- Private Rust failures remain exhaustive and directly tested while the public
  WASM boundary intentionally emits one generic rejection to avoid an oracle.
- Candidate persistence and authoritative adoption remain separate sequential
  capabilities. TypeScript remains a generated-boundary consumer only.

## References

- [PR #1552](https://github.com/meta-secret/nook/pull/1552)
- `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation.rs`
- `nook-app/nook-platform/nook-event-log/src/graph.rs`
- `nook-app/nook-platform/nook-event-log/src/graph/authorization.rs`
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
