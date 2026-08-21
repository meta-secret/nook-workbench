---
title: Event-sourced subagent processing records
status: completed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-21T01:58:50Z
updated_at: 2026-08-21T06:40:41Z
source_issues: []
related_prs: [1068]
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

- [x] Every agent task attempt has its own append-only `events.jsonl` file.
- [x] Every completed agent attempt has an agent-authored Markdown materialized
      view.
- [x] Workflow synthesis consumes completed child views and publishes a final
      workflow view.
- [x] Processing artifacts live below a repository-local gitignored directory.
- [x] Tests prove event identity, sequence, append-only behavior, view
      materialization, path isolation, retries, failures, and parent aggregation.
- [x] Cortex and executable skills define the event-store and materialized-view
      contract consistently with current Loom code.
- [x] Exact-head hosted validation and readiness pass before squash merge.

## Progress

- Ownership verified against current branches, pull requests, and Workbench.
- Implementation plan published before repository edits.
- Merged Nook PR #1068 with immutable per-attempt streams, agent-authored and
  Loom-authored views, recursive parent aggregation, and root delivery views.
- Added `task loom:agent-delegation:record REQUEST=<request.json>` so ordinary
  collaboration-tool delegation follows the same processing contract as
  compiled Loom workflows.
- Closed every exact-head review finding and passed the complete hosted gate,
  readiness audit, and squash merge.

## Findings and decisions

- The parent runtime persists child events because read-only Codex workers must
  not gain repository write authority.
- The child agent authors its Markdown view content as part of its typed
  terminal result.
- The workflow journal remains the scheduling authority. Per-agent streams are
  scoped action logs and must not become competing schedulers.
- Replay verifies canonical projection paths, content hashes, typed results,
  action-stream identity, parent lineage, activity bounds, view authorship,
  root bytes, and the projected task-terminal set.
- A child produces the bounded action and typed semantic-result request. Loom
  owns canonical serialization and hashing. Each parent consumes verified child
  views and authors the next aggregate until the root delivery report.

## References

- Nook PR #1000
- Nook PR #1001
- Nook PR #1067
- Nook PR #1068
- `.cortex/workflows/subagent-delegation.md`
- `.cortex/design-docs/agent-workflow-orchestration.md`
- `agentic-ai/loom/src/agent-workflow/`
