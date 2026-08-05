---
title: Add cortex consistency garbage-collector skill
feature: unplanned
issue: none
started_at: 2026-08-05T16:07:00Z
agent: cursor
---

# Task plan

## Interpreted request

Add a dynamic skill that makes agents verify `.cortex` consistency.

Agents must treat stale, conflicting, or code-mismatched docs as defects.

The skill acts like a garbage collector for cortex knowledge.

## Requirements

- Add a canonical `.cortex/dynamic-skills` card for cortex consistency checks.
- Register the card and executable skill mirrors.
- Elevate the duty in `AGENTS.md` and grow-cortex guidance.
- Keep prose under the cortex-writer low-complexity rule.
- Ship on the open cortex-writer PR.

## Constraints and exclusions

- Do not rewrite the entire `.cortex` tree in this change.
- Do not invent automated linters in this change unless already present.
- Scope verification to durable facts touched by the task when full GC is not requested.

## Initial plan

1. Publish this start plan.
2. Author the skill card and mirrors.
3. Wire AGENTS, index, and core-beliefs links.
4. Format, commit, and push to PR 924.

## Completion evidence

- Skill card and registry entry exist.
- AGENTS states the consistency duty.
- PR 924 contains the commit.

## Safety review

- No raw prompt, transcript, secrets, private data, or raw logs.
