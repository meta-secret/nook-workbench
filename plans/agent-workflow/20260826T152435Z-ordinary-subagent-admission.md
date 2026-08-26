---
title: Admit ordinary subagent attempts before recording
feature: agent-workflow
issue: issues/agent-workflow/typed-module-context-and-read-only-dag.md
started_at: 2026-08-26T15:24:35Z
agent: codex
---

# Admit ordinary subagent attempts before recording

## Interpreted request

Deliver ordinary subagent functionality in small mergeable slices. The first
slice must replace post-hoc arbitrary attempt recording with an immutable,
source-bound delegation plan and deterministic admission checks.

## Requirements

- Declare the complete bounded attempt hierarchy before recording begins.
- Require exactly one depth-one root materializer and explicit parent lineage.
- Bound a run to sixteen attempts and hierarchy depth to three.
- Require each declared parent to name its exact all-terminal child barrier.
- Bind the immutable plan and every admitted attempt to one source commit.
- Verify persisted attempt events, result, and semantic-view projections.
- Keep spawning and delivery authority with the parent agent.

## Constraints and exclusions

- This slice does not dynamically schedule agents or enable nested SDK agents.
- Child output does not schedule successors.
- Run finalization and verified root aggregation are a separate stacked PR.
- Repository-writing agent DAGs, Docker, and product browser tests are excluded.
- Validation is limited to focused local Loom checks for this slice.

## Initial plan

1. Define and validate the bounded ordinary delegation plan.
2. Persist a content-hashed immutable plan and append-only admission events.
3. Extract one shared verifier for persisted attempt projections.
4. Require the CLI to start a run before recording exact declared attempts.
5. Validate locally, review the exact head, and merge the first small PR.
6. Build root aggregation as a second PR from the merged baseline.

The two-PR stack is capped at about 2,200 authored lines for admission and
about 1,800 authored lines for aggregation. Each PR carries its own focused
codec, lineage, projection, lint, and type-check evidence.

## Completion evidence

- Undeclared, duplicate, wrong-parent, excessive-depth, source-mismatched, and
  tampered attempts are rejected.
- Reusing a run identifier with a conflicting plan is rejected.
- Focused Loom tests, lint, formatting, and TypeScript checks pass locally.
- Each PR remains below the repository's five-thousand-line maximum.

## Safety review

- This public record contains only architectural scope, delivery boundaries,
  and expected validation evidence.
