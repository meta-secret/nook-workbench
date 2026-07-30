---
title: Accelerate persistent remote tasks
feature: unplanned
issue: null
started_at: 2026-07-30T02:50:37Z
agent: codex
supersedes: plans/unplanned/2026-07-30T02-41-40Z-accelerate-hosted-remote-tasks.md
---

# Accelerate persistent remote tasks

## Interpreted request

Reduce the repeated wall-clock cost of focused GitHub Actions Taskfile runs by
moving iterative work onto the existing persistent Nook runner pool while
keeping complete pull-request validation on isolated GitHub-hosted runners.

## Requirements

- Separate runner queue time, workflow setup time, and task execution time with
  evidence from recent remote workflow runs.
- Preserve the finite allowlisted command catalog and exact pushed-head guards.
- Keep all heavy agent execution in GitHub Actions rather than on agent
  worktrees.
- Reuse persistent local Docker and BuildKit state for repeated focused tasks.
- Keep complete PR, Main, and release validation on GitHub-hosted runners with
  Main-owned read-only cache restoration.
- Use run-scoped image tags so concurrent remote jobs cannot replace one
  another's runtime images.
- Add mechanical regression coverage for runner placement, persistent-builder
  setup, permissions, and image isolation.
- Deliver through formatting, hosted validation, exact-head readiness,
  feedback handling, and squash merge.

## Constraints and exclusions

- The focused runner pool is a manual surface available only to repository
  writers and receives no repository secrets.
- Pull-request events never execute branch code automatically on persistent
  runners.
- Do not write feature-branch generations into the full repository Actions
  cache, because doing so would evict Main's authoritative lineage.
- Complete pull-request validation remains separate from focused remote-task
  evidence.

## Initial plan

1. Preserve the measured timing and cache-capacity evidence.
2. Route the allowlisted remote catalog to the persistent runner pool without
   initializing ephemeral Buildx builders.
3. Add run-scoped image names and update mechanical workflow contracts.
4. Update the architecture and execution system of record.
5. Format, publish a focused pull request, and run repeated remote-task proof.
6. Complete pull-request validation, resolve feedback, pass readiness, squash
   merge, and publish linked completion records.

## Completion evidence

- Workflow contracts prove all catalog jobs use the persistent pool, install
  only orchestration tooling, expose no secrets, and isolate loaded images.
- Repeated focused tasks demonstrate local BuildKit reuse without new
  branch-scoped Actions-cache entries.
- The implementation pull request passes current-head repository checks and is
  squash-merged.
- The linked Workbench worklog and agent statistics are visible on Main.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
