---
title: Event-sourced subagent processing records
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-21T01:58:50Z
updated_at: 2026-08-21T01:58:50Z
source_issues: []
related_prs: []
depends_on: []
---

# Event-sourced subagent processing records

## Context

Loom already owns a workflow-level append-only journal and typed task results.
Hierarchical subagents do not yet expose one durable local action stream and one
agent-authored materialized view per task attempt.

This focused deliverable belongs to the
[deterministic agent workflows](README.md) feature.

## Outcome

Every reached agent attempt records an append-only JSONL action stream and an
agent-authored Markdown materialized view under a gitignored workflow-processing
directory. Parent agents consume those views for synthesis, continuation,
review, and terminal reporting.

## Scope

- Add typed per-agent and workflow-level processing artifacts to Loom.
- Preserve the workflow journal as the local scheduling authority.
- Persist agent-authored Markdown views without granting repository write
  access to read-only workers.
- Add replay, path-isolation, lifecycle, and projection coverage.
- Add an executable subagent skill and synchronize Cortex architecture,
  workflow, entry-point, reference, and knowledge-graph guidance.
- Keep Hive and Neo4j as the future durable distributed authority.
- Exclude write-capable workers and prompt-defined workflow topology.

## Acceptance criteria

- [ ] Every agent task attempt has its own append-only `events.jsonl` file.
- [ ] Every completed agent attempt has an agent-authored Markdown materialized
      view.
- [ ] Workflow synthesis consumes completed child views and publishes a final
      workflow view.
- [ ] Processing artifacts live below a repository-local gitignored directory.
- [ ] Tests prove event identity, sequence, append-only behavior, view
      materialization, path isolation, retries, failures, and parent aggregation.
- [ ] Cortex and executable skills define the event-store and materialized-view
      contract consistently with current Loom code.
- [ ] Exact-head hosted validation and readiness pass before squash merge.

## Progress

- Ownership verified against current branches, pull requests, and Workbench.
- Implementation plan published before repository edits.

## Findings and decisions

- The parent runtime persists child events because read-only Codex workers must
  not gain repository write authority.
- The child agent authors its Markdown view content as part of its typed
  terminal result.
- The workflow journal remains the scheduling authority. Per-agent streams are
  scoped action logs and must not become competing schedulers.

## References

- Nook PR #1000
- Nook PR #1001
- Nook PR #1067
- `.cortex/workflows/subagent-delegation.md`
- `.cortex/design-docs/agent-workflow-orchestration.md`
- `agentic-ai/loom/src/agent-workflow/`
