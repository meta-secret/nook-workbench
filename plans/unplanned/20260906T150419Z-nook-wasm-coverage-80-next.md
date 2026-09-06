---
title: Nook WASM coverage 80 percent next slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T15:04:19Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T142000Z-nook-wasm-coverage-80-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission after pull request 1453
merged with exact hosted evidence of 74.94 percent `nook-wasm` line coverage
and a matching 74.7 percent floor. This slice targets the next bounded increase
toward 80 percent without weakening independent package gates.

## Requirements

- Add deterministic, behavior-focused tests selected from the fresh merged-Main
  per-file report.
- Raise only the `nook-wasm` floor after exact hosted proof confirms the safe
  floor for this slice.
- Preserve the 90 percent `nook-companion-wasm` floor and all other package
  accounting.

## Candidate scope

The latest exact browser report leaves the largest deterministic manager gaps in
`manager/sentinel.rs` (374 missed lines), `manager/device_protection.rs` (347),
`manager/multi_device.rs` (341), `manager/event_log/security_epoch.rs` (315),
and `manager/event_log/provider_sync.rs` (310). The next slice will begin with
pure state transitions and rejection branches in these modules, deferring
provider I/O and browser-only infrastructure.

## Constraints

- Start from merged Main `cabc0fb830f12e1c8f06a6c3865454d91cded01d`.
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
