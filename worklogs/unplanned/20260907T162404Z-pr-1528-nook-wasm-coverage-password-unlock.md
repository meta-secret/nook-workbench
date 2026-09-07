---
title: Pull request 1528 Nook WASM password-unlock coverage completion
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
plan: plans/unplanned/20260907T154456Z-nook-wasm-coverage-password-unlock.md
agent: codex
gizmo_id: rust-crate-coverage-90
pr: 1528
merged_commit: f2d96a19ce2a4a6dd52fe1651d64f0d6fcfb9d59
---

## Scope

PR #1528 added 255 authored lines of behavior-focused browser coverage for the
password-unlock manager boundary. The tests cover Sentinel rejection, missing
backup envelopes, unknown-entry fallback, join-row filtering, successful
durable membership persistence, and the event-log prerequisite. Production
behavior, public contracts, and coverage exclusions were unchanged. The tests
were colocated with `password_unlock.rs` so the touched implementation files
remain within the repository's 1,000-line source-size policy.

## Static gates

- `cargo fmt --all -- --check` passed from `nook-app/nook-platform`.
- `git diff --check` passed.
- `task loom:pre-push` passed with 255 authored additions, base
  `84c29bc076ca7583b374e4ab20babfc35bb8d17c`, and no UI or format violations.

## Hosted evidence

- Final exact-head PR graph: `34141878562` on head
  `d6790bc6bcfea1d3682539905bebdd69b6b0f9fb` against Main
  `84c29bc076ca7583b374e4ab20babfc35bb8d17c`.
- Native Rust, WASM build, WASM Node, web, ecosystem, coverage, and preview
  jobs all passed. WASM Node ran 321 tests with zero failures.
- Independent coverage measured `nook-wasm` at 80.00% lines and
  `nook-companion-wasm` at 91.20% lines. The executable `nook-wasm` floor
  remains 79.5%; no floor change was needed because the measured result
  provided evidence-backed margin above the existing floor.
- The covered module `manager/password_unlock.rs` measured 87.41% lines.

## Delivery

- `task pr:ready PR=1528` returned `ready: true`, `behindBy: 0`, zero
  unresolved threads/comments, successful exact-head Pages deployment at
  `https://pr-1528.nokey-sh.pages.dev`, and all required jobs successful.
- PR #1528 squash-merged at `f2d96a19ce2a4a6dd52fe1651d64f0d6fcfb9d59` on
  2026-09-07T16:23:33Z. `origin/main` and the deleted PR branch were verified
  afterward.
