---
title: Nook WASM coverage 80 percent next slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T14:19:49Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T111437Z-nook-wasm-coverage-75-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission after pull request 1450
merged with exact hosted evidence of 74.70 percent `nook-wasm` line coverage
and a matching 74.5 percent floor. This slice targets an evidence-backed
increment toward 80 percent without weakening independent package gates.

## Requirements

- Add deterministic, behavior-focused tests selected from the merged-Main
  per-file report.
- Raise only the `nook-wasm` floor after exact hosted proof confirms the safe
  floor for this slice.
- Preserve the 90 percent `nook-companion-wasm` floor and all other package
  accounting.

## Candidate scope

Fresh hosted per-file evidence shows the largest deterministic gaps in
`manager/password.rs` (262 missed lines), `manager/mod.rs` (161),
`manager/secrets/event_log.rs` (85), `manager/identity_handoff.rs` (48), and
`storage/extension_state.rs` (30). The slice will begin with typed password,
session, event-log, and identity-handoff state transitions; provider I/O and
browser-only infrastructure remain deferred unless a pure branch is exposed.

## Constraints

- Start from merged Main `43c64d38b7a2fe798dda180a3a9659d944f0b88b`.
- Use behavior-focused Rust/WASM tests only: no exclusions, aggregate masking,
  assertion-free filler, or product behavior changes.
- Keep authored additions below 2,000 lines and use static local gates only;
  hosted CI is authoritative for Rust/WASM coverage.
- Do not run local Rust, WASM, or product Docker builds.

## Delivery sequence

1. Branch from merged Main and inspect the selected source boundaries.
2. Add focused success/rejection/lifecycle tests and run formatter, diff, and
   pre-push static gates.
3. Push, run exact-head hosted validation, and inspect independent package line
   coverage before changing the floor.
4. Rebase if Main advances, rerun exact-head validation, then resolve readiness,
   squash-merge, and record the evidence.
