---
title: Batch focused remote tasks
feature: agent-workflow
issue: null
started_at: 2026-08-08T16:40:15Z
agent: codex
---

# Batch focused remote tasks

## Interpreted request

Let agents dispatch several focused checks to one GitHub-hosted job. Reuse the
same checkout, Docker setup, and cache connection instead of allocating one
fresh virtual machine per command.

## Requirements

- Keep every selected command inside the reviewed remote-task catalog.
- Preserve clean-worktree, pushed-head, and current-base dispatch guards.
- Run the selected commands in one GitHub-hosted job.
- Make individual task results visible in the job log and summary.
- Preserve the existing single-task interface for compatibility.
- Keep complete pull-request validation separate from focused evidence.
- Deliver through hosted validation, exact-head readiness, and squash merge.

## Constraints and exclusions

- The workflow must not accept arbitrary shell commands.
- Cache credentials and permissions must not become broader.
- Selected commands should run sequentially inside the shared job. This reuses
  setup and avoids resource contention on a small hosted runner.
- Independent jobs remain available when true parallel compute is preferable.

## Initial plan

1. Consolidate ordinary focused execution behind one allowlisted batch job.
2. Add a comma-separated Taskfile dispatch interface with duplicate rejection.
3. Add regression coverage for validation, ordering, and stale-base behavior.
4. Update the focused-execution documentation and examples.
5. Format, publish a pull request, validate the exact head, and squash merge.
6. Publish the linked completion worklog and agent statistics.

## Completion evidence

- One workflow run executes several requested catalog tasks after one setup.
- Invalid, empty, duplicate, and unsupported selections fail before dispatch.
- Existing single-task callers continue to work.
- Hosted checks and exact-head pull-request validation pass.
- The merged pull request and Workbench completion records are visible.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
