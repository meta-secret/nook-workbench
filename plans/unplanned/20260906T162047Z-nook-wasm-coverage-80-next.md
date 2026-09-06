---
title: Nook WASM coverage next bounded slice after 74.8 percent
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T16:20:47Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T150419Z-nook-wasm-coverage-80-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission after pull request 1455
merged with exact hosted evidence of 75.05 percent `nook-wasm` line coverage
and a matching 74.8 percent floor. This slice targets the next bounded increase
toward 80 percent without weakening independent package gates.

## Requirements

- Add deterministic, behavior-focused tests selected from the fresh merged-Main
  per-file report.
- Raise only the `nook-wasm` floor after exact hosted proof confirms the safe
  floor for this slice.
- Preserve the 90 percent `nook-companion-wasm` floor and all other package
  accounting.

## Candidate scope

Start from merged Main `4bd982da68a98d7d69c46a0fdf613c416ab649c5` and measure
the current per-file report before editing. Prefer pure state transitions and
rejection branches in the largest remaining deterministic manager gaps,
especially `manager/multi_device.rs`,
`manager/event_log/security_epoch.rs`, and
`manager/event_log/provider_sync.rs`. Defer provider I/O and browser-only
infrastructure until behavior-focused paths are exhausted.

## Constraints

- Use behavior-focused Rust/WASM tests only: no exclusions, aggregate masking,
  assertion-free filler, or product behavior changes.
- Keep authored additions below 2,000 lines and use static local gates only;
  hosted CI is authoritative for Rust/WASM coverage.
- Do not run local Rust, WASM, or product Docker builds.

## Delivery sequence

1. Measure the fresh merged-Main per-file coverage and inspect the selected
   source boundaries.
2. Add focused success/rejection/lifecycle tests and run formatter, diff, and
   pre-push static gates.
3. Push, run exact-head hosted validation, and inspect independent package line
   coverage before changing the floor.
4. Rebase if Main advances, rerun exact-head validation, then resolve readiness,
   squash-merge, and record the evidence.
