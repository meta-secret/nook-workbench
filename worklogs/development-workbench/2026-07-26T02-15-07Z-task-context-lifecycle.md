---
title: Add structured task-start context to agent work history
feature: development-workbench
issue: direct-user-request
plan: plans/development-workbench/2026-07-26T02-15-07Z-task-context-lifecycle.md
nook_pr: null
status: in_progress
started_at: 2026-07-26T02:15:07Z
finished_at: 2026-07-26T02:15:07Z
agent: codex
---

# Work summary

## Outcome

In progress. The intended outcome is a two-phase Workbench record for every
task-owning agent: structured intent and plan at task start, then an outcome
summary when work finishes or becomes blocked.

## Progress

- Interpreted the request as preserving important user requirements without
  storing raw prompts or chat transcripts.
- Established the initial plan: define a public-safe task-start schema, require
  publication before implementation, connect completion worklogs to the start
  record, validate both phases, and update the automated agent workflow.

## Implementation problems

- The existing Workbench contract records only completion or blocked summaries,
  so the start phase needs an explicit schema and lifecycle rule.

## Decisions

- Store an agent-authored representation of user intent, constraints,
  acceptance evidence, and the initial execution plan.
- Never store verbatim prompts, full chat history, secrets, private data, or
  incidental internal details.
- Preserve start and finish as separate linked records so later summaries
  cannot overwrite the original plan.

## Validation

- Pending implementation and GitHub Actions validation.

## Remaining work

- Implement and validate the task-start record contract in Nook and Nook
  Workbench.
