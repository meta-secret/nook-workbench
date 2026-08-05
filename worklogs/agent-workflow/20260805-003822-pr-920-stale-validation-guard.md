---
title: Reject stale expensive validation dispatches
feature: agent-workflow
issue: issues/unplanned/README.md
plan: plans/agent-workflow/20260804-235809-reject-stale-expensive-validation.md
nook_pr: https://github.com/meta-secret/nook/pull/920
status: completed
started_at: 2026-08-04T23:58:09Z
finished_at: 2026-08-05T00:38:22Z
agent: codex
---

# Reject stale expensive validation dispatches

## Outcome

Merged PR 920. Expensive focused remote tasks and complete PR validation now fetch the PR base and fail closed before dispatch when the candidate does not contain the current base tip.

## Progress

- Added one shared current-base guard with actionable stale and fetch-failure diagnostics.
- Applied it to `web:e2e`, `extension:e2e`, `check`, `ci:pr`, `ci:pr:e2e`, and `pr:validate`; cheap discovery and preflight tasks remain available.
- Added an executable Git fixture covering current, one-commit-stale, and fetch-failure behavior, plus a Rust preflight contract test.
- Documented the automatic refresh and retry behavior in the remote-execution workflow, dynamic skill, and README.

## Implementation problems

- The required `task format` performed a cold rebuild of the sealed formatter and related images, which dominated local execution time but completed successfully.
- The local CI-agent Task cache initially reported its image target current while the image was absent. Forcing `ci-agent:docker:build` restored `task pr:preflight`; this did not affect product code or hosted validation.
- GitHub REST rate limiting prevented optional cache-telemetry artifact enumeration after merge, so the statistics record marks collection incomplete and infers no counters.

## Decisions

- Keep a single shell guard as the source of truth so focused dispatch and label-triggered complete validation cannot drift.
- Fetch the named base immediately before comparison and fail closed if freshness cannot be established.
- Guard only expensive validation paths so agents can still run cheap diagnostics needed to repair a stale branch.

## Validation

- `task format` passed.
- Source architecture run 30963210847 passed.
- Focused hosted `task remote TASK_NAME=preflight` run 30963217066 passed, including the shell fixture.
- Exact-head PR run 30963487508 and Rust ecosystem run 30963487476 passed.
- `task pr:validate PR=920` proved the new freshness check against the current `main` tip.
- `task pr:ready PR=920` reported ready, mergeable, zero commits behind, and zero unresolved threads.
- PR 920 squash-merged as `001af89867715aa018d388d12a6a3b3475db10f2`.

## Remaining work

- None.
