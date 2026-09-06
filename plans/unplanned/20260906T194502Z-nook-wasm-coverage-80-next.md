---
title: Nook WASM coverage 80 percent next slice
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-06T19:45:02Z
agent: codex
gizmo_id: rust-crate-coverage-90
supersedes: plans/unplanned/20260906T172700Z-nook-wasm-coverage-76-next.md
---

# Task plan

## Interpreted request

Continue the user-authorized serial coverage mission after pull request 1462
merged with exact hosted evidence of 75.42 percent `nook-wasm` line coverage.
This slice targets an evidence-backed floor toward 80 percent using another
bounded behavior-focused pull request.

## Requirements

- Add deterministic, behavior-focused Rust/WASM tests selected from the latest
  hosted per-file coverage report.
- Raise only the `nook-wasm` floor after exact hosted proof confirms the safe
  floor for this slice.
- Preserve the 90 percent `nook-companion-wasm` floor and all other package
  accounting.

## Candidate scope

Prioritize the largest deterministic uncovered manager and storage branches
remaining after the Sentinel, passkey, and security-epoch tests in PR 1462.
Prefer pure policy, projection, persistence-preparation, and rejection paths;
defer provider I/O and browser-only infrastructure until deterministic paths
are exhausted.

## Constraints

- Start from merged Main `88194e6d3b482d6dacc3da68d78690684c6ed001`.
- Use behavior-focused tests only: no exclusions, aggregate masking,
  assertion-free filler, or product behavior changes.
- Keep authored additions below 2,000 lines and use static local gates only;
  hosted CI is authoritative for Rust/WASM coverage.
- Do not run local Rust, WASM, or product Docker builds.

## Delivery sequence

1. Branch from merged Main and inspect the latest hosted per-file report.
2. Add focused success/rejection/lifecycle tests and run formatter, diff, and
   pre-push static gates.
3. Push, run exact-head hosted validation, and inspect independent package line
   coverage before changing the floor.
4. Rebase if Main advances, rerun exact-head validation, then resolve readiness,
   squash-merge, and record the evidence.
