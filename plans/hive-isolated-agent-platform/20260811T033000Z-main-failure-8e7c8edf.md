---
title: Restore Main extension backup-code verification
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-8e7c8edf1e810d3aacd54c60b73a7a7d34aff27e.md
started_at: 2026-08-11T03:30:00Z
agent: codex
---

# Task plan

## Interpreted request

Restore reliable Main verification after the browser-extension backup-code flow
failed its end-to-end confirmation step. Deliver the smallest reviewed fix and
prove it through the Main-equivalent browser validation before squash merging.

## Requirements

- Diagnose the retained Extension e2e evidence.
- Add regression coverage for the missed backup-code completion path.
- Keep the repair on a normal pull request.
- Apply the Hive and full browser-validation labels.
- Record the repaired incident and delivery evidence in Workbench.

## Constraints and exclusions

- Preserve the original failing revision and workflow reference.
- Do not weaken browser checks, cache isolation, or security boundaries.
- Do not push directly to the default branch.
- Limit changes to the root cause and its focused regression coverage.

## Initial plan

1. Inspect the failed browser flow and current implementation.
2. Create a branch from current Main and implement the focused repair.
3. Format, publish a marked pull request, and request full exact-head checks.
4. Resolve any actionable feedback and squash merge when ready.
5. Verify the resulting Main run and publish the incident worklog and statistics.

## Completion evidence

- A squash-merged Hive pull request with full browser validation.
- A green Main workflow after the merge.
- Updated incident, linked worklog, and published agent statistics.

## Safety review

This plan contains no raw prompt, transcript, secret, private data, raw log,
local path, or unnecessary infrastructure detail.
