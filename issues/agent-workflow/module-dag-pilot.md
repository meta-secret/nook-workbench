---
title: Contract-first bottom-up module delivery pilot
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-22T18:40:13Z
updated_at: 2026-08-22T18:40:13Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-workflow/isolated-write-module-dag.md
---

# Contract-first bottom-up module delivery pilot

## Context

The module workflow needs operational proof on a bounded cross-layer change
before it becomes Nook's default development style.

## Outcome

A reviewed feature plan exercises independent lower-level experts, accepted
dependency baselines, `internal_api_expert`, a web consumer, parent synthesis,
and delivery-owner integration without bypassing the event journal.

## Scope

- Select a bounded real feature or purpose-built repository fixture with a
  representative Rust, internal API, and web dependency chain.
- Design consumer contracts top-down and execute module changes bottom-up.
- Prove ready-wave parallelism for disjoint leaf modules.
- Measure context quality, handoff defects, integration conflicts, and
  validation cost.
- Update the canonical workflow only from evidence produced by the pilot.
- Exclude making Hive part of internal development orchestration.

## Acceptance criteria

- [ ] Every reached node has an immutable attempt stream and semantic view.
- [ ] No child exceeds hierarchy depth three or schedules an undeclared child.
- [ ] Provider tests pass before consumer implementation begins.
- [ ] The consumer builds against accepted provider and internal API contracts.
- [ ] Parent integration, exact-head hosted validation, readiness, and squash
      merge complete successfully.
- [ ] Pilot findings are reflected into existing authorities without creating
      duplicate workflow prose.

## Progress

- Waiting for isolated-write execution.

## Findings and decisions

- A module node is not automatically a pull request. PR boundaries remain
  independently mergeable feature slices.

## References

- `.cortex/workflows/subagent-delegation.md`
- `agentic-ai/loom/src/agent-workflow/`

