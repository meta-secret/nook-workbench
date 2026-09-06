---
title: Nook WASM coverage 76 percent next slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T17:26:19Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T162047Z-nook-wasm-coverage-80-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission after pull request 1459
merged with exact hosted evidence of 75.13 percent `nook-wasm` line coverage.
This slice targets a defensible 76 percent floor while continuing toward the
90 percent mission in bounded behavior-focused PRs.

## Requirements

- Add deterministic, behavior-focused Rust/WASM tests selected from the fresh
  merged-Main per-file report.
- Raise only the `nook-wasm` floor after exact hosted proof confirms the safe
  floor for this slice.
- Preserve the 90 percent `nook-companion-wasm` floor and all other package
  accounting.

## Candidate scope

The latest report leaves the largest deterministic manager gaps in
`manager/multi_device.rs`, `manager/event_log/security_epoch.rs`,
`manager/event_log/provider_sync.rs`, `manager/passkeys.rs`, and
`manager/sentinel.rs`. Prefer pure state transitions and rejection branches;
defer provider I/O and browser-only infrastructure until behavior-focused paths
are exhausted.

## Constraints

- Start from merged Main `0d06c5821ff4219088b51f08cf1f263262ffa8e3`.
- Use behavior-focused tests only: no exclusions, aggregate masking,
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
