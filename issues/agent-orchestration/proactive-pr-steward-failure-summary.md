---
title: Exact PR Steward failure summaries
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-failure-summary
created_at: 2026-09-08T07:50:00Z
updated_at: 2026-09-08T13:45:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-orchestration/proactive-pr-steward-observation.md
---

# Exact PR Steward failure summaries

## Context

Once closed routing and asynchronous exact-head observation are merged, PR Steward can reconcile unsuccessful GitHub objects without making Gizmo investigate jobs.

## Outcome

PR Steward uses fixed read-only GitHub APIs to bind the triggering job, workflow, check, status, or PR object to the assigned exact head and sends Gizmo a bounded actionable summary or sanitized blocker.

## Scope

- Introduce the next closed schema version with bounded commit-to-pull-request association, exact failure summaries, triggering-object binding, bounded pagination, terminal-state handling, safe URLs, and sanitized blockers.
- Route a PR-less workflow job only when a fixed read-only association query proves exactly one open pull request and it is the assigned PR at the exact job head; suppress zero, multiple, foreign, and stale matches.
- Remove the prior decoder atomically; do not add compatibility readers or fallbacks.
- Exclude product repairs, technical adjudication, review bodies, job output, persistence, schedulers, queues, retry, and replay.

## Acceptance criteria

- [ ] Every supported failure source is bound to the authorized repository, assigned PR, exact head, and triggering object.
- [ ] PR-less workflow-job attribution is proven by a bounded repository association query and fails closed unless the assigned PR is the unique match.
- [ ] Pagination and response sizes are bounded, URLs are safe, and unavailable evidence yields only a sanitized blocker.
- [ ] Gizmo receives enough summary to route a specialist and never investigates GitHub jobs itself.
- [ ] Focused source, mismatch, terminal-state, pagination, Security, hosted exact-head, readiness, merge, remote verification, and Workbench evidence pass.

## Progress

- Waiting for asynchronous exact-head observation to merge and close.
- 2026-09-08: Repository-wide commit-to-PR uniqueness moved here after observation review proved one assigned-PR read cannot establish it.

## References

- [Routing hints](proactive-pr-steward.md)
- [Closed routing contract](proactive-pr-steward-reconciliation.md)
- [Asynchronous exact-head observation](proactive-pr-steward-observation.md)
