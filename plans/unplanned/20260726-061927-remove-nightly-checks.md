---
title: Remove scheduled nightly live-sync checks
feature: unplanned
issue: none
started_at: 2026-07-26T06:19:27Z
agent: codex
---

# Remove scheduled nightly live-sync checks

## Interpreted request

Retire the GitHub Actions automation that runs live sync-provider checks every
night, while preserving explicit manual validation paths for engineers who
still need to exercise the real provider integration.

## Requirements

- Remove the nightly GitHub Actions workflow and its failure-triggered AI repair
  path.
- Keep real-provider sync validation available through the existing manual PR
  workflow and local task surface.
- Update CI tests, architecture guidance, and workflow documentation so they no
  longer claim that live-provider checks run on a schedule.
- Deliver the cleanup through a Nook pull request, repository-owned GitHub
  Actions, exact-head readiness, and squash merge.

## Constraints and exclusions

- Do not remove the live-provider Playwright project or its manual execution
  option.
- Do not change the independent scheduled dependency audit, workbench agent
  polling, or runner-maintenance workflows.
- Product validation remains on GitHub Actions; only repository formatting is
  required locally before push.

## Initial plan

1. Remove the nightly workflow and the prompt used only by its automatic repair
   job.
2. Remove schedule-specific assertions and update CI documentation to describe
   live sync as manual-only.
3. Format the repository, push the focused change, and validate it through the
   repository-owned PR workflow.
4. Address any current feedback, run the exact-head readiness audit, and
   squash-merge.

## Completion evidence

- No GitHub Actions workflow schedules the nightly live-sync check.
- The manual PR E2E workflow still offers the `sync-live` suite.
- Repository-owned PR checks and exact-head readiness pass on the delivered
  pull request.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
