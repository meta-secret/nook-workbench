---
title: Add structured task-start context to agent work history
feature: development-workbench
issue: direct-user-request
started_at: 2026-07-26T02:15:07Z
agent: codex
---

# Task plan

## Interpreted request

Preserve the important intent behind user requests as durable development
context. Each task-owning agent should publish its own complete interpretation
and a small execution plan when work starts, then publish a linked summary when
work finishes or stops.

## Requirements

- Record material user requirements, expected outcomes, and delivery
  expectations in the agent's own words.
- Publish the start record before implementation begins.
- Publish a linked completion or blocked worklog at the end.
- Apply the contract to interactive agents and the scheduled implementation
  worker.
- Validate the record shape and keep the existing sensitive-content protections.

## Constraints and exclusions

- Do not store raw prompts, chat transcripts, close sentence-by-sentence
  paraphrases, secrets, private user data, raw logs, or unnecessary internal
  infrastructure details.
- Keep task plans concise enough to be useful during development handoffs.
- Preserve the existing issue, worklog, and statistics ownership boundaries.

## Initial plan

1. Add a Workbench task-plan template, directory contract, and validation.
2. Update Nook's agent workflows to publish a structured plan before edits.
3. Link completion worklogs to the plan.
4. Validate through repository-owned GitHub Actions and merge the Nook change.
5. Publish the final Workbench worklog and delivery statistics.

## Completion evidence

- Workbench validation accepts the new plan schema and rejects forbidden
  raw-context headings.
- Nook's automated implementation workflow cannot reach implementation until a
  plan has been generated, screened, and published.
- Nook workflow documentation requires the same start and finish lifecycle for
  every task-owning agent.
- The Nook implementation PR is green and squash-merged.

## Safety review

- This record contains an agent-authored requirements model and execution plan,
  not the source prompt or chat transcript.
- It contains no credentials, private data, raw logs, local paths, or internal
  infrastructure inventory.
