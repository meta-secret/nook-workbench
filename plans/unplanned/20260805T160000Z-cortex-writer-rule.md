---
title: Add critical cortex writer cognitive-complexity rule
feature: unplanned
issue: none
started_at: 2026-08-05T16:00:00Z
agent: cursor
---

# Task plan

## Interpreted request

Make simple sentence structure a critical rule for all `.cortex` Markdown.
Agents must split long, dense prose into short sentences, bullets, and lists.
The rule must be durable project guidance, not chat-only feedback.

## Requirements

- Add a canonical `.cortex/dynamic-skills` card for cortex writing.
- Register the card in the project skill index.
- Add an executable skill mirror under `.agents/skills` with Cursor/Claude symlinks.
- Elevate the rule in `AGENTS.md` as a non-negotiable P1 documentation rule.
- Point `core-beliefs` grow-cortex guidance at the new rule.
- Demonstrate the preferred pattern by rewriting the dense SeaweedFS compiler-cache table cell in `ARCHITECTURE.md`.
- Deliver through the normal PR-first workflow.

## Constraints and exclusions

- Do not rewrite all dense `.cortex` prose in this change.
- Do not mix unrelated working-tree edits into the PR.
- Keep guidance concise and actionable.
- No secrets, raw prompts, or private data in Workbench records.

## Initial plan

1. Publish this start plan to Workbench.
2. Branch from `origin/main`.
3. Author the skill card, executable skill, registry row, and AGENTS/core-beliefs links.
4. Rewrite the SeaweedFS example cell into short sentences and bullets.
5. Format, commit, push, open PR, and validate.

## Completion evidence

- Skill card and registry entry exist.
- `AGENTS.md` states the rule as critical.
- SeaweedFS example follows the preferred pattern.
- PR is open with the docs-only change set.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw logs, or local paths beyond standard Workbench publication.
