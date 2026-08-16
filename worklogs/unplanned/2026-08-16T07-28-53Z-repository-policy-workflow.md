---
title: Consolidate automatic repository policy checks
feature: unplanned
issue: issues/unplanned/consolidate-repository-policy-checks.md
plan: plans/unplanned/2026-08-16T06-50-56Z-consolidate-repository-policy-checks.md
nook_pr: meta-secret/nook#1025
status: completed
started_at: 2026-08-16T06:50:56Z
finished_at: 2026-08-16T07:28:53Z
agent: codex
---

# Consolidate automatic repository policy checks

## Outcome

Replaced separate Loom and Source architecture workflow runs with one
Repository policy workflow. Every PR still enforces source architecture. Loom
setup and verification run only for relevant PR paths and path-scoped Main
pushes.

## Progress

- Combined checkout, Task, Rust, and preflight cache setup in one job.
- Kept source architecture enforcement unconditional for PR events.
- Added path classification for conditional Loom checks.
- Removed the two superseded workflow files.
- Updated structural tests and Cortex CI documentation.

## Implementation problems

- Exact-head review found that Git rename detection reports only the destination
  for a watched source moved out of its policy tree. Classification now uses
  `--no-renames`, which reports the deletion-side path and preserves checks.
- The first pre-push pass did not include the initially untracked workflow
  file. It was explicitly staged and the complete pre-push review reran.

## Decisions

- Combine only workflows with the same automatic PR lifecycle, read-only trust
  boundary, and preflight setup.
- Keep Main, Hive, research, release, and trusted collectors separate because
  their delivery role, services, credentials, or event source differs.
- Keep Main and Repository policy separate on merged heads: Main owns product
  delivery while policy-only changes intentionally require Repository policy.

## Validation

- Automatic policy run 31932757378 proved source architecture and all Loom
  steps execute in one job on a relevant PR.
- Fixed-head automatic run 31933420052 passed with rename-safe classification.
- Complete exact-head run 31933444566 passed Rust, ecosystem, WASM, web,
  coverage, preview, and UI-demo jobs.
- Exact-head Codex review was clean after the review fix.
- `task pr:ready PR=1025` reported a current base, successful deployment, and
  zero unresolved threads.
- PR 1025 squash-merged as `a589ec0ebb370e2d3f37d13da1279c508163cb2e`.

## Remaining work

- None.
