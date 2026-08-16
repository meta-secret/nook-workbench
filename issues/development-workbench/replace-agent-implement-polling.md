---
title: Replace scheduled agent polling with explicit dispatch
status: done
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-08-16T19:50:45Z
updated_at: 2026-08-16T20:38:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1030"]
depends_on: []
---

# Replace scheduled agent polling with explicit dispatch

## Context

`agent-implement.yml` polled Workbench twice per hour. When no eligible issue
existed, every run checked out Nook, retrieved the recursive Workbench tree,
and read hundreds of issue files individually before exiting successfully.

During one measured 24-hour interval, 38 scheduled runs consumed 2,529 seconds
of aggregate runner time. Recent sampled runs all ended without finding a ready
automated issue. Workbench contained more than 370 focused issue files, so the
empty scan was both noisy and increasingly expensive.

## Outcome

Agent implementation now runs only after an explicit dispatch names a
Workbench issue or supplies a manual prompt. Empty periodic scans no longer
create GitHub Actions runs. Atomic Workbench claiming, plan publication, PR
creation, owner handoff, and worklog publication remain intact.

## Scope

- Remove the scheduled trigger from `.github/workflows/agent-implement.yml`.
- Keep `workflow_dispatch` for explicit issue-backed and prompt-backed work.
- Require exactly one of `issue_path` or `prompt` for a manual dispatch.
- Resolve an issue-backed dispatch directly by its requested path.
- Remove recursive Workbench tree discovery and sequential issue-file polling.
- Preserve `status: ready`, `automation: agent`, assigned-owner, write-access,
  and atomic `status: in_progress` claim checks.
- Reconcile preflight contracts and Cortex documentation with explicit
  dispatch semantics.
- Exclude changes to the Cursor implementation harness, planning validation,
  PR creation, review ownership, or Workbench publication behavior.
- Exclude a new cross-repository credential or event dispatcher from this PR.

## Acceptance criteria

- [x] `agent-implement.yml` has no `schedule` trigger.
- [x] Empty or ambiguous manual dispatches fail before checkout-dependent agent setup.
- [x] An explicit eligible `issue_path` is claimed atomically before Docker setup.
- [x] An explicit prompt still requires a valid continuing owner.
- [x] No recursive Workbench tree scan or all-issue read loop remains.
- [x] Preflight tests enforce explicit dispatch and the absence of polling.
- [x] Cortex workflow documentation describes only explicit dispatch.
- [x] Exact-head validation passes, all review threads are resolved, and the PR squash-merges.
- [x] Workbench issue, worklog, and agent statistics are completed after merge.

## Progress

- 2026-08-16T20:38:00Z: Published the completion worklog and schema-v3
  [PR statistics](https://github.com/meta-secret/nook-workbench/blob/main/stats/ai-agent/1030.yaml).
- 2026-08-16T20:34:25Z: Squash-merged
  [Nook PR #1030](https://github.com/meta-secret/nook/pull/1030) as
  `132a25f3524f3480c7985dd75a90a86d2dfc417d` after exact-head validation and
  the final readiness audit passed.
- 2026-08-16T20:25:54Z: Triggered replacement exact-head validation for review
  fix `e4ceae071cefc4acb34e2ad226f944fe6ecea915`; run
  [31970519226](https://github.com/meta-secret/nook/actions/runs/31970519226)
  passed with zero unresolved review threads.
- 2026-08-16T20:14:55Z: Opened
  [Nook PR #1030](https://github.com/meta-secret/nook/pull/1030) from the focused
  explicit-dispatch branch.
- 2026-08-16: Measured 38 scheduled runs and 2,529 seconds of aggregate runner
  time in the preceding 24 hours.
- 2026-08-16: Confirmed sampled runs stopped with no eligible automated issue
  and skipped Docker setup and agent implementation.
- 2026-08-16: Prepared this focused manual handoff so the active poller could
  not claim its own repair.

## Findings and decisions

- The workflow retains its bounded purpose: implementation of explicitly
  authorized Workbench issues or prompts.
- Scheduled polling was originally chosen to avoid adding a trusted write
  credential to Workbench. Removing polling did not require introducing that
  credential.
- Explicit `workflow_dispatch.issue_path` is the smallest safe correction.
  A future event-driven Workbench dispatcher can call the same entry point if
  its credential and trust boundary are designed separately.
- The workflow-level concurrency group was removed because GitHub keeps only
  the newest pending run. That behavior could discard an older explicit
  dispatch. Atomic issue claims still reject duplicate work safely.
- Keep this record `automation: manual`; the completed repair was explicitly
  owned and dispatched.

## References

- [Agent implement workflow](https://github.com/meta-secret/nook/blob/main/.github/workflows/agent-implement.yml)
- [Implementation plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/development-workbench/2026-08-16T19-50-45Z-replace-agent-implement-polling.md)
- [Completion worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/development-workbench/2026-08-16T20-34-25Z-pr-1030.md)
- [Original Workbench migration PR](https://github.com/meta-secret/nook/pull/783)
- [Example empty scheduled run](https://github.com/meta-secret/nook/actions/runs/31967951613)
- [Development Workbench feature](README.md)
