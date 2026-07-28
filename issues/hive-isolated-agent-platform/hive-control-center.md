---
title: Build the Hive Control Center
feature: hive-isolated-agent-platform
status: in_progress
priority: high
automation: manual
owner: codex
created_at: 2026-07-28T06:36:05Z
updated_at: 2026-07-28T06:36:05Z
source_issues: []
related_prs: []
depends_on: []
---

# Build the Hive Control Center

## Context

Hive has durable queue and attempt state, but operators must currently combine
Workbench records, bounded queue JSON, Kubernetes logs, and GitHub state to
understand why work started and what an agent is doing. This deliverable extends
the [Hive isolated agent platform](README.md) with a human-oriented management
surface.

## Outcome

An operator can open one read-only dashboard and understand the live Hive
worker pool, triggered tasks, attempt history, dependencies, recent progress,
failures, and linked delivery evidence without querying Neo4j or reconstructing
the lifecycle from Pod logs.

## Scope

- Persist bounded, sanitized, append-only task activity suitable for operator
  timelines across disposable worker replacement.
- Expose typed read-only overview and task-detail data through an observer
  boundary that does not expose Neo4j credentials or arbitrary graph queries.
- Build a responsive, accessible dashboard for worker health, queue state,
  tasks needing attention, trigger context, attempts, dependencies, and recent
  activity.
- Deploy the observer and dashboard through the existing Hive infrastructure
  workflow and document operator access.
- Add behavior-focused Rust coverage and focused browser coverage of the real
  dashboard states.
- Exclude task cancellation, retry, priority changes, arbitrary enqueue, and
  worker-drain controls from this initial visibility release.
- Exclude raw chain-of-thought, secrets, unbounded command output, and raw
  Kubernetes logs from persisted or rendered activity.

## Acceptance criteria

- [ ] Task activity remains visible after the worker Pod that produced it is
      replaced.
- [ ] The overview distinguishes idle, active, blocked, failed, cancelling, and
      completed work and identifies stale activity.
- [ ] Task detail explains the trigger, source revision, current attempt,
      dependencies, bounded progress, errors, and delivery links when present.
- [ ] The browser receives only typed observer data and never a Neo4j
      credential or arbitrary-query capability.
- [ ] Empty, loading, unavailable, active, blocked, failed, and completed
      dashboard states are explicit, responsive, keyboard accessible, and
      covered by a focused browser demonstration.
- [ ] Rust behavior tests cover event persistence, ordering, bounding,
      sanitization, and observer projections.
- [ ] Architecture and operator documentation describe the observation model,
      access path, and deliberate read-only boundary.

## Progress

- 2026-07-28: Started implementation from the current Nook Main revision.

## Findings and decisions

- Neo4j remains Hive's durable task system of record; no additional message
  broker is introduced for dashboard activity.
- Operator-visible progress consists of typed lifecycle and action summaries,
  not private model reasoning.
- Observation is delivered before management controls so operators can first
  establish trust in the displayed state.

## References

- `.cortex/design-docs/hive-isolated-agent-platform.md`
- `agentic-ai/minds/hive/`
- `infra/k0s/manifests/hive/`
