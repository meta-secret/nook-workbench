---
title: Deterministic agent workflows
status: in_progress
created_at: 2026-08-14T07:26:00Z
updated_at: 2026-08-17T06:29:15Z
---

# Deterministic agent workflows

## Goal

Provide reviewed, typed, deterministic orchestration for bounded AI work while preserving one delivery owner and one durable lifecycle authority.

## Current state

Nook has a local static TypeScript workflow engine in Loom. It validates reviewed topology, executes read-only Codex workers, joins typed results, and records an append-only local journal. The first Cortex semantic-audit workflow is merged in Nook PR #1000. Hive materialization remains future work; Neo4j must remain authoritative in durable mode.

Loom leaf tools now generate discovery YAML, decode blueprints, and defaultable Task aliases from typed example documents. Sample YAML files under the Loom package are gone. That slice merged in Nook PR #1045.

## Decisions

- Graph topology is compiled TypeScript, never YAML, Markdown, or prompt-generated state.
- Loom schedules local static runs and reuses existing deterministic leaf tools.
- One fresh worker executes each reached agent task attempt.
- The parent owns scheduling, integration, journal writes, and delivery lifecycle state.
- Local journal files are authoritative only for local runs. Hive and Neo4j remain authoritative for durable execution.
- Lace is not part of the production path.
- Leaf-tool requests stay domain YAML. Canonical examples live as typed objects in Loom.

## Issues

- [ ] [Address PR 1000 review findings](address-pr-1000-review-findings.md)
- [ ] [Reconcile Cortex semantic debt found by the first static workflow](cortex-semantic-debt.md)
- [ ] [Add event-sourced subagent processing records](event-sourced-subagent-processing.md)

## References

- [Nook PR #1000](https://github.com/meta-secret/nook/pull/1000)
- [Nook PR #1045](https://github.com/meta-secret/nook/pull/1045)
- [Implementation plan](../../plans/agent-workflow/20260814T052642Z-static-agent-workflows.md)
- [Typed request examples plan](../../plans/agent-workflow/20260817T054500Z-typed-request-examples.md)
