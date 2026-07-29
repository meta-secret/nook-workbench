---
title: Hosted remote task execution
feature: unplanned
issue: null
started_at: 2026-07-29T04:30:56Z
agent: codex
---

# Hosted remote task execution

## Interpreted request

Add a small, explicit remote-task interface that lets development agents run
approved, focused Taskfile commands on GitHub-hosted runners instead of
competing for local build resources. Make this the documented default for
builds and tests while preserving automatic pull-request validation.

## Requirements

- Add a manually dispatched GitHub Actions workflow with a fixed catalog of
  focused jobs on `ubuntu-latest`.
- Add a root Taskfile entrypoint invoked as
  `task remote TASK_NAME=<catalog-name>`.
- Ensure only the selected catalog job runs and commands are not supplied as
  arbitrary shell input.
- Document the complete branch, push, dispatch, monitoring, and cleanup
  lifecycle.
- Keep automatic pull-request checks authoritative after a pull request exists.
- Require isolated short-lived remote branches for experimental commits that
  should not retrigger an active pull request.
- Update every governing instruction that still recommends heavy local builds
  or tests as the normal agent debugging path.
- Deliver through the normal formatted pull-request workflow, exact-head
  repository checks, feedback handling, and squash merge.

## Constraints and exclusions

- The remote workflow uses GitHub-hosted runners, not self-hosted labels.
- Formatting and other intentionally lightweight host-side invariants remain
  local.
- The initial catalog is finite and reviewable; it is not a general
  credential-bearing remote shell.
- Pull-request push-triggered validation is not duplicated by manual remote
  dispatch.
- Labels are not used to coordinate experimental execution because they do not
  prevent push-triggered checks and are not bound atomically to a commit.

## Initial plan

1. Inventory current Task targets, workflows, and all agent validation
   instructions.
2. Implement the manual remote workflow and root Taskfile dispatcher with
   structural validation.
3. Update the repository system of record and mirrored agent skills to make
   hosted remote execution the normal heavy-debugging path.
4. Format, publish a focused pull request, resolve findings, pass exact-head
   GitHub Actions, and squash merge.
5. Publish a linked completion worklog and agent statistics.

## Completion evidence

- The Taskfile dispatcher validates its task name and triggers the manual
  workflow for the pushed branch.
- The workflow exposes documented catalog choices and runs only the selected
  GitHub-hosted job.
- Repository preflight or focused tests mechanically protect the Taskfile,
  workflow, and documentation contract.
- The implementation pull request is green, ready at its exact head, and
  squash-merged.
- The linked Workbench worklog and statistics are visible on Workbench main.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
