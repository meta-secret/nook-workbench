---
title: Add Hive alerts and attention triage
feature: hive-isolated-agent-platform
status: done
priority: high
automation: manual
owner: codex
created_at: 2026-07-28T16:36:17Z
updated_at: 2026-07-28T22:24:24Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/860
depends_on:
  - issues/hive-isolated-agent-platform/hive-control-center.md
---

# Add Hive alerts and attention triage

## Context

The Control Center exposes durable task state and timelines, but operators must
still interpret several rows to decide what requires intervention. The next
observability release should turn known failure and staleness conditions into a
typed, accessible attention queue without adding task-management authority.

## Outcome

Operators can immediately identify active Hive incidents, understand why each
one needs attention, follow it to the affected task, and see when the condition
clears.

## Scope

- Define typed alert kinds and severities in Rust for failed work, blocked
  dependencies, stale running activity, and stuck cancellation.
- Derive alerts deterministically from durable task and attempt state without
  storing raw logs, model reasoning, or secrets.
- Project active alerts and alert counts through the existing read-only
  observer boundary.
- Add a keyboard-accessible attention queue and truthful empty, loading,
  unavailable, active, and cleared states to the Svelte Control Center.
- Add behavior-focused Rust tests and focused browser coverage.
- Exclude outbound paging integrations, alert acknowledgement, and all cancel,
  retry, pause, priority, or enqueue controls.

## Acceptance criteria

- [x] Every alert has a stable kind, severity, affected task, first-observed
      time, reason, and direct task-detail destination.
- [x] Alert ordering is deterministic and prioritizes severity, then age.
- [x] Conditions disappear from the active queue once durable task state no
      longer satisfies the alert rule.
- [x] The observer exposes only typed bounded alert projections.
- [x] The attention queue is responsive, translated, keyboard accessible, and
      announces meaningful count changes without noisy repeated announcements.
- [x] Rust tests cover every alert rule, ordering, clearing, and bounding.
- [x] Focused Playwright coverage demonstrates active, empty, and unavailable
      attention states.

## Progress

- 2026-07-28: Scoped the third Control Center release after completing the
  durable event model and read-only dashboard.
- 2026-07-28: PR 860 merged with typed alerts, a bounded attention projection,
  exact active-queue totals, schema-7 activity backfill, and focused browser and
  Neo4j behavior coverage.

## Findings and decisions

- Alerts are derived observability state, not a second lifecycle system of
  record.
- The release remains read-only. Acknowledgement and management actions belong
  with the later audited command boundary.
- Outbound notification channels are deferred until the in-product alert
  semantics are trustworthy and stable.

## References

- `issues/hive-isolated-agent-platform/hive-control-center.md`
- `.cortex/design-docs/hive-isolated-agent-platform.md`
- `agentic-ai/minds/hive/`
