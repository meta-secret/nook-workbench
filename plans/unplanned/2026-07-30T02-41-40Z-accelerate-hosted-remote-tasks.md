---
title: Accelerate hosted remote tasks
feature: unplanned
issue: null
started_at: 2026-07-30T02:41:40Z
agent: codex
---

# Accelerate hosted remote tasks

## Interpreted request

Reduce the repeated wall-clock cost of focused GitHub-hosted Taskfile runs by
measuring the current execution path, fixing the dominant reusable-work
bottleneck, and proving that subsequent runs on the same development branch
reuse prior work without weakening Main cache integrity.

## Requirements

- Separate runner queue time, workflow setup time, and task execution time with
  evidence from recent remote workflow runs.
- Preserve the finite allowlisted command catalog and exact pushed-head guards.
- Keep focused execution on GitHub-hosted runners.
- Let repeated branch runs reuse branch-produced BuildKit work while continuing
  to fall back to the trusted Main cache lineage.
- Prevent feature-branch jobs from writing or replacing Main cache scopes.
- Add mechanical regression coverage for cache scope isolation and workflow
  configuration.
- Deliver through formatting, hosted validation, exact-head readiness,
  feedback handling, and squash merge.

## Constraints and exclusions

- The first run after a source change may still need to compile changed code.
- Main remains the only writer of unsuffixed shared cache scopes.
- No arbitrary commands, credentials, or cache scope values are accepted from
  workflow input.
- Complete pull-request validation remains separate from focused remote-task
  evidence.

## Initial plan

1. Measure recent workflow and job-step timing and inspect cache-hit evidence.
2. Add deterministic branch-isolated BuildKit cache configuration with trusted
   Main fallback.
3. Update workflow contracts, regression tests, and execution documentation.
4. Format, publish a focused pull request, and run hosted proof including a
   repeated remote task at the same exact head.
5. Complete pull-request validation, resolve existing feedback, pass readiness,
   squash merge, and publish linked completion records.

## Completion evidence

- Recent baseline timings and the cache-miss cause are documented.
- Preflight tests prove remote jobs enable isolated branch caches and cannot
  write unsuffixed Main scopes.
- A repeated focused task on the same pushed head demonstrates reuse.
- The implementation pull request passes current-head repository checks and is
  squash-merged.
- The linked Workbench worklog and agent statistics are visible on Main.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
