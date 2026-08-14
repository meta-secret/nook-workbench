---
title: Deterministic agent workflows
status: in_progress
created_at: 2026-08-14T07:26:00Z
updated_at: 2026-08-14T07:26:00Z
---

# Deterministic agent workflows

## Goal

Provide reviewed, typed, deterministic orchestration for bounded AI work while preserving one delivery owner and one durable lifecycle authority.

## Current state

Nook has a local static TypeScript workflow engine in Loom. It validates reviewed topology, executes read-only Codex workers, joins typed results, and records an append-only local journal. The first Cortex semantic-audit workflow is merged in Nook PR #1000. Hive materialization remains future work; Neo4j must remain authoritative in durable mode.

## Decisions

- Graph topology is compiled TypeScript, never YAML, Markdown, or prompt-generated state.
- Loom schedules local static runs and reuses existing deterministic leaf tools.
- One fresh worker executes each reached agent task attempt.
- The parent owns scheduling, integration, journal writes, and delivery lifecycle state.
- Local journal files are authoritative only for local runs. Hive and Neo4j remain authoritative for durable execution.
- Lace is not part of the production path.

## Issues

- [ ] [Reconcile Cortex semantic debt found by the first static workflow](cortex-semantic-debt.md)

## References

- [Nook PR #1000](https://github.com/meta-secret/nook/pull/1000)
- [Implementation plan](../../plans/agent-workflow/20260814T052642Z-static-agent-workflows.md)
