---
title: Model account-picker authorization cleanup phases
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-account-picker
created_at: 2026-09-04T20:51:00Z
updated_at: 2026-09-04T22:01:45.936Z
source_issues: []
related_prs: [1345]
depends_on:
  - issues/rust-action-ownership/foundation.md
---

# Model account-picker authorization cleanup phases

## Context

The [project migration](README.md) needs real phase-specific action ownership alongside pure operation ownership. Account-picker authorization currently stores cleanup fields in a runtime enum and handles every transition in its facade.

## Outcome

Active and cleaning authorization states carry only their phase-specific data and expose only their valid operations. The existing browser-facing lifecycle facade preserves runtime freshness and cleanup behavior.

## Scope

- Introduce small private ActiveAuthorization and CleaningAuthorization types with explicit cleanup requirement and completion outcomes.
- Consume phase and lifecycle mutations and return the successor plus a typed result; migrate Rust/WASM consumers.
- Preserve epoch rotation, overlapping attempts, stale-epoch rejection, release requirements, and advisory final-cleanup checks.
- Add behavioral and actual-source compile-fail evidence with a passing control; enable ownership enforcement.
- Keep exported TypeScript orchestration, storage markers, and persisted formats unchanged; the owned Rust/WASM API now uses consuming transitions and named evidence.

## Acceptance criteria

- [ ] Active states cannot carry cleanup counters or requirements; phase-specific methods belong to their state types.
- [ ] Overlap, stale epochs, release, zero-count cleaning, and intervening cleanup behavior remain covered.
- [ ] Invalid phase operations and fabricated cleaning state fail compilation; valid transitions compile.
- [ ] No authority cloning, default placeholder, generic state framework, or recovery path is added.
- [ ] Hosted Rust, doctest, Dylint, and applicable extension validation pass with security review.

## Progress

- 2026-09-04: Development core and Security completed read-only design. Implementation has not started.

- 2026-09-04: Immutable plan published; Development core implementing the isolated phase model before hosted test integration.

- 2026-09-04: [PR 1345](https://github.com/meta-secret/nook/pull/1345) opened after security review; hosted native validation now executes the four actual-source contract examples. Validation is running.

- 2026-09-04: Accepted four review findings: explicit doctest panic, anonymous boolean evidence, reusable cleaning capability, and stale-epoch/pending conflation. Superseding [consuming transition plan](../../plans/rust-action-ownership/2026-09-04T21-26-00Z-account-picker-consuming.md) expands the bounded ABI/adapter repair; prior design remains in its immutable start plan.

- 2026-09-04: Replacement-head review identified discarded typed completion outcomes and remaining boolean evidence at browser callers. WEB and SECURITY agreed to expose typed outcomes, use generated evidence, reject lock/startup cleanup through existing failure paths, and preserve a successful import while skipping refresh after rejected cleanup. Superseding plan: [caller outcomes](https://github.com/meta-secret/nook-workbench/blob/4982ee445932a91d3da77685b7e78c9a2f9144b5/plans/rust-action-ownership/2026-09-04T21-52-00Z-account-picker-outcomes.md). Eleven files remain within the 1100-addition plan; repair is underway.

## Findings and decisions

- Zero-count cleaning with a full-cleanup requirement remains inactive and is a supported runtime state.
- Full-cleanup evidence clears the requirement before checking the count; a zero-count completion still returns false.
- The final-cleanup query is advisory; completion reevaluates current epoch and overlap count.
- In-memory phase types do not replace persisted cleanup markers or freshness checks after asynchronous host operations.

## References

- [Account-picker authorization](https://github.com/meta-secret/nook/blob/main/nook-app/nook-platform/nook-companion-core/src/account_picker_authorization.rs)
- [Coverage inventory](domain-adoption.md)

## Revised transition acceptance

- [ ] Consuming mutation receivers cannot be reused; rejection returns the original state with a typed reason.
- [ ] Named cleanup evidence crosses the Rust/WASM boundary.
- [ ] Shared initialization publishes its handle once; synchronous replacements and post-await reacquisition prevent stale-wrapper reuse.
- [ ] Existing exported extension behavior is preserved, including marker failure propagation and overlap races.
