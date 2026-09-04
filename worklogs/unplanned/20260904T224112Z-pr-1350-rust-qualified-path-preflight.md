---
title: Migrate preflight to concise Rust paths
feature: unplanned
issue: null
plan: plans/unplanned/20260904T221400Z-rust-qualified-path-preflight.md
nook_pr: 1350
status: completed
started_at: 2026-09-04T22:14:00Z
finished_at: 2026-09-04T22:41:12Z
agent: codex
---

# Work summary

## Outcome

PR #1350 migrated the standalone preflight Rust workspace to concise contextual paths and squash-merged as `ffbb0aad3c1a062219b924a12466f44aadaa5ba9`.

## Progress

- Classified 141 initial raw matches as 137 real executable or type paths and four false positives.
- Replaced all 137 real paths with imports or meaningful module-qualified calls across 40 preflight-only files.
- Added manifest-level `clippy::absolute_paths` denial and an explicit two-segment maximum.
- Preserved standard-library ownership context such as `str::from_utf8`, `env::var_os`, and `process::id`.

## Implementation problems

- None. The initial exact head passed formatting, static audit, hosted validation, and review without correction or retrigger.

## Decisions

- Retain three multiline `use` continuations and two deliberate Rust-source fixture strings; they are not executable qualified paths and the fixture strings test policy behavior.
- Import owning modules for free functions rather than ambiguous bare function names.
- Keep this migration at the standalone preflight package boundary so its lint policy is explicit and locally discoverable.

## Validation

- Direct rustfmt passed in 0.3 seconds; static inventory, scope, and diff checks passed in 0.2 seconds.
- `task loom:pre-push` passed in 5 seconds with 208 authored additions.
- Hosted run `33925188923` passed all 13 required checks; four non-required checks were skipped. Native Rust passed in 8m13s and dependency policy in 18m8s.
- Exact-head Codex review completed with no findings and zero review threads.
- `task pr:ready PR=1350` passed on exact head `a937c73d0a751bfa3210fe8bde7265515ab37e5e` against exact base `a6b9aed0e99025a3a9c8f85406e569d68f0ab244`.
- Exact-head Pages deployment succeeded at `https://pr-1350.nokey-sh.pages.dev`.

## Remaining work

- Continue serially with the Minds Rust workspace.
- Publish the canonical Cortex Rust rule after all authored Rust package roots are clean.
