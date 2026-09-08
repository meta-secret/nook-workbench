---
title: Exact PR Steward failure summaries
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-failure-summary
created_at: 2026-09-08T07:50:00Z
updated_at: 2026-09-08T07:50:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-orchestration/proactive-pr-steward-reconciliation.md
---

# Exact PR Steward failure summaries

## Context

Once closed routing and exact-head observation are merged, PR Steward can reconcile unsuccessful GitHub objects without making Gizmo investigate jobs.

## Outcome

PR Steward uses fixed read-only GitHub APIs to bind the triggering job, workflow, check, status, or PR object to the assigned exact head and sends Gizmo a bounded actionable summary or sanitized blocker.

## Scope

- Introduce `pr-steward-ndjson/v2` with exact failure summaries, triggering-object binding, bounded pagination, terminal-state handling, safe URLs, and sanitized blockers.
- Remove the v1 decoder atomically; do not add compatibility readers or fallbacks.
- Exclude product repairs, technical adjudication, review bodies, raw logs, persistence, schedulers, queues, retry, and replay.

## Acceptance criteria

- [ ] Every supported failure source is bound to the authorized repository, assigned PR, exact head, and triggering object.
- [ ] Pagination and response sizes are bounded, URLs are safe, and unavailable evidence yields only a sanitized blocker.
- [ ] Gizmo receives enough summary to route a specialist and never investigates GitHub jobs itself.
- [ ] Focused source, mismatch, terminal-state, pagination, Security, hosted exact-head, readiness, merge, remote verification, and Workbench evidence pass.

## Progress

- Waiting for the closed routing contract to merge and close.

## References

- [Routing hints](proactive-pr-steward.md)
- [Closed routing contract](proactive-pr-steward-reconciliation.md)
