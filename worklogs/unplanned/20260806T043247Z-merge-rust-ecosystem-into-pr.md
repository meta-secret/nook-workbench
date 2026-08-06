---
title: Work summary
feature: unplanned
issue: none
plan: plans/unplanned/20260806T040000Z-merge-rust-ecosystem-into-pr.yml
nook_pr: https://github.com/meta-secret/nook/pull/928
status: completed
started_at: 2026-08-06T03:58:00Z
finished_at: 2026-08-06T04:32:47Z
agent: cursor
---

# Work summary

## Outcome

Labeled product PRs now run shared Rust ecosystem gates inside the PR workflow
run. Schedule, main-path, manual, and minds-only entry points stay in a thin
workflow.

## Progress

- Extracted shared ecosystem jobs into `rust-ecosystem-checks.yml`.
- Wired labeled `pr.yml` to call those jobs in parallel with product checks.
- Slimmed `rust-ecosystem.yml` to non-product entry points.
- Updated readiness mapping, preflight contracts, cortex docs, and README.

## Implementation problems

- First validation failed on rustfmt for a multiline assert in
  `preflight/tests/sccache_s3.rs`.
- Fixed formatting and retriggered exact-head validation.

## Decisions

- Keep minds-only labeled PRs on thin `rust-ecosystem.yml` because `pr.yml`
  ignores `agentic-ai/**` and must not run the product preview pipeline there.
- Product PRs require only the PR workflow for readiness because ecosystem jobs
  now live inside it.

## Validation

- Remote `preflight` succeeded after the rustfmt fix.
- Exact-head PR run
  https://github.com/meta-secret/nook/actions/runs/31070797734 succeeded with
  ecosystem jobs under the PR run.
- `task pr:ready PR=928` reported ready before squash merge.

## Remaining work

- None.
