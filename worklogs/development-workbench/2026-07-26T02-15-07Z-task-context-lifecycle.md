---
title: Add structured task-start context to agent work history
feature: development-workbench
issue: direct-user-request
plan: plans/development-workbench/2026-07-26T02-15-07Z-task-context-lifecycle.md
nook_pr: https://github.com/meta-secret/nook/pull/788
status: completed
started_at: 2026-07-26T02:15:07Z
finished_at: 2026-07-26T02:47:35Z
agent: codex
---

# Work summary

## Outcome

Delivered a two-phase Workbench record for task-owning agents: an immutable,
public-safe interpretation and execution plan before implementation, followed
by a linked completion or blocked worklog.

## Progress

- Added the Workbench plan schema, template, validation rules, documentation,
  and immutable-after-publication enforcement in Workbench PRs 1 and 2.
- Updated Nook's agent rules, prompts, publisher, preflight, and PR workflow in
  Nook PR 788.
- Split the scheduled implementation worker into planning and implementation
  phases. Implementation is blocked until its plan validates and publishes.
- Added source-task overlap, transcript-shape, credential, environment, raw-log,
  section-shape, and size checks for generated records.
- Ran the planning LLM in a disposable worktree so only the validated plan can
  cross into the implementation workspace.

## Implementation problems

- The first Nook Actions run exposed stale preflight assertions after validation
  moved into a shared helper. The assertions were updated to verify the new
  behavior and the next run passed.
- Automated review identified two security-boundary gaps: ordinary prose could
  be copied without transcript labels, and ignored planning-agent files could
  persist. Source overlap detection and disposable-worktree isolation closed
  both gaps before merge.

## Decisions

- Store an agent-authored representation of user intent, constraints,
  acceptance evidence, and the initial execution plan.
- Never store verbatim prompts, full chat history, secrets, private data, or
  incidental internal details.
- Preserve start and finish as separate linked records so later summaries
  cannot overwrite the original plan.
- Make published plans immutable. Corrections require a new superseding plan.
- Give the planning LLM no Workbench write credential; publication remains a
  separate trusted workflow step after validation.

## Validation

- Workbench validation runs 30184351049 and 30184763485 passed.
- Nook PR run 30185019169 passed Native, WASM, web/unit/lint/build, Workbench
  record tests, preview deployment, and coverage.
- Focused Node record-validator tests passed with six cases.
- Focused Workbench preflight tests passed with three cases.
- Required host formatting and exact-head PR readiness passed.

## Remaining work

- None.
