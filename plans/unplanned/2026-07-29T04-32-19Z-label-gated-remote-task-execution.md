---
title: Label-gated hosted remote task execution
feature: unplanned
issue: null
started_at: 2026-07-29T04:32:19Z
agent: codex
supersedes: plans/unplanned/2026-07-29T04-30-56Z-hosted-remote-task-execution.md
---

# Label-gated hosted remote task execution

## Interpreted request

Move agent builds and tests to explicit GitHub-hosted execution without running
the complete pull-request pipeline after every experimental push. Agents should
be able to dispatch focused allowlisted tasks repeatedly, then explicitly
request the required complete pull-request validation for the current head by
applying a dedicated label.

## Requirements

- Add a manually dispatched GitHub Actions workflow with a fixed catalog of
  focused jobs on `ubuntu-latest`.
- Add a root Taskfile entrypoint invoked as
  `task remote TASK_NAME=<catalog-name>`.
- Ensure only the selected catalog job runs and commands are not supplied as
  arbitrary shell input.
- Stop automatic full pull-request validation on ordinary branch pushes.
- Make a dedicated pull-request label the explicit trigger for the complete
  required validation workflow.
- Add a Taskfile command that safely re-triggers that label for the current
  pull-request head.
- Preserve branch protection: a push after successful validation must make the
  previous result stale and block merge until validation is explicitly
  triggered again.
- Document the complete push, focused dispatch, full-validation, monitoring,
  and retry lifecycle throughout the repository system of record.
- Update every governing instruction that still recommends local builds or
  tests as the normal agent debugging path.
- Deliver through the normal formatted pull-request workflow, exact-head
  repository checks, feedback handling, and squash merge.

## Constraints and exclusions

- Remote jobs use GitHub-hosted runners, not self-hosted labels.
- Formatting and other intentionally lightweight host-side invariants remain
  local.
- The remote catalog is finite and reviewable; it is not an arbitrary
  credential-bearing shell.
- Labels are used only to request complete validation. Focused experiments use
  manual workflow dispatches against the pushed pull-request branch.
- Full validation triggered for an earlier commit never authorizes merging a
  later commit.

## Initial plan

1. Inventory current Task targets, workflow dependencies, branch-protection
   assumptions, and all agent validation instructions.
2. Implement the focused manual workflow, root remote dispatcher, and explicit
   label-triggered full-validation command.
3. Change the pull-request workflow to run only for the dedicated validation
   label while preserving optional full-e2e selection.
4. Add mechanical preflight coverage and update the repository system of
   record plus mirrored agent skills.
5. Format, publish a focused pull request, trigger full validation explicitly,
   resolve findings, pass exact-head readiness, and squash merge.
6. Publish a linked completion worklog and agent statistics.

## Completion evidence

- Ordinary pull-request pushes do not trigger the complete validation workflow.
- `task remote TASK_NAME=<catalog-name>` validates and dispatches a focused
  manual run for the exact pushed branch head.
- The dedicated validation Task command causes complete required checks to run
  on the current pull-request head.
- A subsequent push requires a fresh explicit validation before readiness can
  succeed.
- Repository preflight mechanically protects the Taskfile, workflow, label,
  and documentation contract.
- The implementation pull request is green, ready at its exact head, and
  squash-merged.
- The linked Workbench worklog and statistics are visible on Workbench main.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
