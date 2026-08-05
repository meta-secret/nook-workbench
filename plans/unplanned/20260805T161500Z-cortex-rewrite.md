---
title: Rewrite .cortex under writer and consistency rules
feature: unplanned
issue: none
started_at: 2026-08-05T16:15:00Z
agent: cursor
---

# Task plan

## Interpreted request

Rewrite `.cortex` Markdown under the new P1 writer and consistency rules.
Then keep PR 924 green and squash-merge it when ready.

## Requirements

- Split dense multi-clause prose into short sentences, bullets, and lists.
- Garbage-collect obsolete or conflicting cortex claims against current code.
- Prefer updating the densest and most agent-facing docs first.
- Keep historical context labeled when it must remain.
- Deliver on PR 924, then merge when exact-head checks are green.

## Constraints and exclusions

- Do not change product code except docs needed for consistency.
- Do not invent new architecture policy while rewriting.
- Preserve meaning while simplifying structure.

## Initial plan

1. Publish this plan.
2. Inventory dense `.cortex` surfaces.
3. Rewrite in batches under writer + consistency rules.
4. Format, push, monitor PR 924, fix failures, squash-merge.
5. Publish Workbench worklog.

## Completion evidence

- Dense agent-facing `.cortex` docs follow short-sentence structure.
- Known SeaweedFS/doc conflicts remain resolved.
- PR 924 is merged.

## Safety review

- No raw prompt, transcript, secrets, private data, or raw logs.
