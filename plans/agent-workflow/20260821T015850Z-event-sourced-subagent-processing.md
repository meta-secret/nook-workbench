---
title: Implement event-sourced subagent processing records
feature: agent-workflow
issue: issues/agent-workflow/event-sourced-subagent-processing.md
started_at: 2026-08-21T01:58:50Z
agent: codex
---

# Implement event-sourced subagent processing records

## Interpreted request

Make hierarchical subagent work auditable and reusable. Each agent attempt must
produce an append-only action stream and an agent-authored Markdown materialized
view. Parent agents must aggregate those views into later work and final reports.

## Requirements

- Store one JSONL event stream for every reached agent task attempt.
- Store one Markdown materialized view authored from that agent's full context.
- Preserve event-sourcing semantics: immutable facts, deterministic identity and
  ordering, explicit terminal events, and rebuildable projections.
- Let parent agents consume materialized views for synthesis, continuation,
  review, retry, and terminal decisions.
- Publish a workflow-level view that represents the parent-facing aggregate.
- Keep all runtime artifacts under a repository-local gitignored processing
  directory.
- Create an executable subagent skill and update all owning Cortex authorities.

## Constraints and exclusions

- The workflow journal remains the local scheduling authority.
- Per-agent event streams do not schedule successors.
- Read-only workers do not gain filesystem mutation authority. The trusted
  parent runtime persists their emitted activity and authored view.
- Loom workflow topology remains reviewed TypeScript.
- Hive and Neo4j remain authoritative when durable distributed execution is
  introduced.
- No write-capable agent workflow is introduced in this slice.

## Change budget and PR sequence

- Estimated authored changed lines: 1,400
- Owning modules, packages, or layers: Loom static agent-workflow runtime, structured result codec, journals and projections, Cortex agent protocol, executable skills, Task and repository ignore policy
- Public or cross-module interfaces: per-attempt action event schema, agent-authored Markdown view contract, workflow aggregate view, processing directory layout, and subagent skill trigger
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,400
- Current PR slice and acceptance evidence: Complete read-only event-sourced processing protocol; Acceptance evidence: focused Loom behavior tests, structural contracts, Cortex audit, pre-push hygiene, exact-head hosted checks, clean review, and PR readiness
- PR slices and acceptance evidence:
Complete read-only event-sourced processing protocol; Acceptance evidence: focused Loom behavior tests, structural contracts, Cortex audit, pre-push hygiene, exact-head hosted checks, clean review, and PR readiness

## Initial plan

1. Delegate disjoint read-only audits of the Loom event runtime, Cortex and skill
   integration, and test plus storage boundaries from one exact baseline.
2. Define the per-attempt event schema, Markdown projection contract, workflow
   aggregate, and trusted persistence boundary.
3. Implement isolated JSONL streams and materialized Markdown views with focused
   behavior coverage.
4. Add the executable subagent skill and update the canonical Cortex workflow,
   architecture, references, entry points, and knowledge graph.
5. Run host formatting, advisory review, focused hosted checks, complete
   exact-head validation, feedback resolution, readiness, and squash merge.
6. Publish the Workbench issue update, linked worklog, and agent statistics.

## Completion evidence

- Runtime artifacts demonstrate one isolated action stream and view per agent
  attempt plus one parent-facing workflow view.
- Tests prove append-only ordering, event identity, retry isolation, projection
  creation, failure handling, and aggregation inputs.
- Cortex and executable skills agree with the implemented trust and lifecycle
  boundaries.
- The exact pull-request head passes repository-owned validation and readiness.

## Safety review

- This record contains only public repository architecture and workflow intent.
- It contains no raw prompt, transcript, credentials, private data, raw logs,
  local machine paths, or infrastructure secrets.
