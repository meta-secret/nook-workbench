---
title: Reject stale expensive validation dispatches
feature: agent-workflow
issue: issues/unplanned/README.md
started_at: 2026-08-04T23:58:09Z
agent: codex
---

# Task plan

## Interpreted request

Prevent Nook agents from spending long hosted validation cycles on pull-request
branches that no longer contain the current `main` branch.

## Requirements

- Detect base-branch movement immediately before expensive hosted dispatches.
- Fail before allocating a GitHub-hosted worker when the branch is stale.
- Apply the same protection to complete pull-request validation.
- Keep the existing `task remote` and `task pr:validate` command surface.
- Provide focused regression coverage for current, stale, and fetch-failure
  behavior.
- Deliver through a current, exact-head validated, squash-merged pull request.

## Constraints and exclusions

- Cheap iterative hosted tasks may remain available while a branch is stale.
- The guard must not mutate or automatically merge the feature branch.
- A base branch advancing after dispatch remains an unavoidable race and is
  still covered by the final readiness audit.
- No product runtime or user-facing behavior changes are included.

## Initial plan

1. Extract a small fail-closed base-freshness guard with shell regression tests.
2. Invoke it for expensive remote tasks and every complete PR validation.
3. Update workflow documentation and validate the Taskfile contract.
4. Publish, run hosted checks, address existing feedback, and squash merge.

## Completion evidence

- Tests prove stale branches and failed base refreshes stop dispatch while a
  current branch proceeds.
- Expensive `task remote` selections and `task pr:validate` share the guard.
- Repository-owned exact-head checks and readiness pass on the merged base.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data,
raw logs, local paths, or unnecessary infrastructure details.
