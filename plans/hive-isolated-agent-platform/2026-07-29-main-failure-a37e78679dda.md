---
title: Restore Main browser verification
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-a37e78679dda994c3a211bf67a89c041a0705b78.md
started_at: 2026-07-29T06:20:00Z
agent: codex
---

# Task plan

## Interpreted request

Restore the default-branch integration after the recorded browser verification
failure by diagnosing the retained evidence, making the smallest safe repair,
and carrying a normal pull request through Main-equivalent validation and
squash merge.

## Requirements

- Preserve the failing revision and workflow reference in the incident record.
- Add a behavior-focused regression for the identified failure path.
- Use a labeled pull request with full browser coverage and repository-owned
  exact-head readiness checks.
- Publish completion context and delivery statistics after a green Main run.

## Constraints and exclusions

- Do not change Main directly, bypass checks, or weaken cache isolation.
- Keep workflow records public-safe: no raw logs, credentials, or private data.
- Scope the repair to the browser failures observed in the recorded Main run.

## Initial plan

1. Inspect the failing jobs and retained artifacts, including application logs.
2. Trace the broken wire contract and add a focused regression.
3. Format, commit, publish, and validate the repair with full browser coverage.
4. Resolve feedback, audit readiness, squash merge, and verify Main.
5. Update the incident, worklog, and delivery statistics on Workbench.

## Completion evidence

- A linked repair PR with green exact-head Main-equivalent browser jobs.
- A green resulting Main workflow and public-safe incident/worklog/statistics
  records.

## Safety review

This plan is an original summary and contains no raw prompt, transcript,
secrets, private data, raw logs, local paths, or unnecessary infrastructure
details.
