---
title: Replace scheduled agent polling with explicit dispatch
status: in_progress
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-08-16T19:50:45Z
updated_at: 2026-08-16T19:56:05Z
source_issues: []
related_prs: []
depends_on: []
---

# Replace scheduled agent polling with explicit dispatch

## Context

`agent-implement.yml` polls Workbench twice per hour. When no eligible issue
exists, every run checks out Nook, retrieves the recursive Workbench tree, and
reads hundreds of issue files individually before exiting successfully.

During one measured 24-hour interval, 38 scheduled runs consumed 2,529 seconds
of aggregate runner time. Recent sampled runs all ended without finding a ready
automated issue. Workbench currently contains more than 370 focused issue
files, so the empty scan is both noisy and increasingly expensive.

## Outcome

Agent implementation runs only after an explicit dispatch names a Workbench
issue or supplies a manual prompt. Empty periodic scans no longer create GitHub
Actions runs. Atomic Workbench claiming, plan publication, PR creation, owner
handoff, and worklog publication remain intact.

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

- [ ] `agent-implement.yml` has no `schedule` trigger.
- [ ] Empty or ambiguous manual dispatches fail before checkout-dependent agent setup.
- [ ] An explicit eligible `issue_path` is claimed atomically before Docker setup.
- [ ] An explicit prompt still requires a valid continuing owner.
- [ ] No recursive Workbench tree scan or all-issue read loop remains.
- [ ] Preflight tests enforce explicit dispatch and the absence of polling.
- [ ] Cortex workflow documentation describes only explicit dispatch.
- [ ] Exact-head validation passes, all review threads are resolved, and the PR squash-merges.
- [ ] Workbench issue, worklog, and agent statistics are completed after merge.

## Progress

- 2026-08-16: Measured 38 scheduled runs and 2,529 seconds of aggregate runner
  time in the preceding 24 hours.
- 2026-08-16: Confirmed sampled runs stopped with no eligible automated issue
  and skipped Docker setup and agent implementation.
- 2026-08-16: Prepared this focused manual handoff so the active poller cannot
  claim its own repair.

## Findings and decisions

- The workflow has a valid purpose: bounded implementation of explicitly
  authorized Workbench issues or prompts.
- Scheduled polling was originally chosen to avoid adding a trusted write
  credential to Workbench. Removing polling does not require introducing that
  credential.
- Explicit `workflow_dispatch.issue_path` is the smallest safe correction.
  A future event-driven Workbench dispatcher can call the same entry point if
  its credential and trust boundary are designed separately.
- Keep this record `automation: manual`; setting it to `automation: agent`
  would allow the wasteful scanner to claim the repair before handoff.

## References

- [Agent implement workflow](https://github.com/meta-secret/nook/blob/main/.github/workflows/agent-implement.yml)
- [Original Workbench migration PR](https://github.com/meta-secret/nook/pull/783)
- [Example empty scheduled run](https://github.com/meta-secret/nook/actions/runs/31967951613)
- [Development Workbench feature](README.md)
