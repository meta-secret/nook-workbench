---
title: Model account-picker authorization cleanup phases
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-account-picker
created_at: 2026-09-04T20:51:00Z
updated_at: 2026-09-04T21:15:00Z
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
- Keep phase transitions mutable behind the current runtime facade; do not claim a fully consuming external API.
- Preserve epoch rotation, overlapping attempts, stale-epoch rejection, release requirements, and advisory final-cleanup checks.
- Add behavioral and actual-source compile-fail evidence with a passing control; enable ownership enforcement.
- Keep WASM/TypeScript APIs, storage markers, and persisted formats unchanged.

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

## Findings and decisions

- Zero-count cleaning with a full-cleanup requirement remains inactive and is a supported runtime state.
- Full-cleanup evidence clears the requirement before checking the count; a zero-count completion still returns false.
- The final-cleanup query is advisory; completion reevaluates current epoch and overlap count.
- In-memory phase types do not replace persisted cleanup markers or freshness checks after asynchronous host operations.

## References

- [Account-picker authorization](https://github.com/meta-secret/nook/blob/main/nook-app/nook-platform/nook-companion-core/src/account_picker_authorization.rs)
- [Coverage inventory](domain-adoption.md)
