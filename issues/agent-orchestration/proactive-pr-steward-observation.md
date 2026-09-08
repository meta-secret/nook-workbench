---
title: Asynchronous PR Steward exact-head observation
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-observation
created_at: 2026-09-08T10:59:04Z
updated_at: 2026-09-08T10:59:04Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-orchestration/proactive-pr-steward-reconciliation.md
---

# Asynchronous PR Steward exact-head observation

## Context

The closed routing contract must merge first. A separate slice can then add nonblocking GitHub observation and exact-head attribution without distorting codec ownership or tests for a line target.

## Outcome

PR Steward asynchronously reads the assigned pull request through one fixed bounded API capability, binds notifications to the current head, and attributes PR-less workflow-job events only when their head uniquely matches that assignment.

## Scope

- Include an asynchronous non-shell `gh api` runner, fixed `github.com` GET for the assigned repository and PR, ten-second timeout, two-MiB output cap, exact response URL/head validation, observer lifecycle, unavailable-observation blocker, and exact-head filtering.
- Preserve rejected event URLs instead of substituting the assigned PR URL.
- Introduce the next closed schema version atomically with no compatibility reader or fallback.
- Exclude job/check/run investigation, failure diagnosis or summaries, mutation, persistence, retry, replay, and product repair.

## Acceptance criteria

- [ ] GitHub access is asynchronous, read-only, fixed to the assigned PR, bounded, injection-safe, and returns only validated exact-head evidence.
- [ ] The subscriber remains responsive while observation is pending and propagates unexpected operational errors.
- [ ] Foreign/stale events are suppressed; a PR-less workflow job routes only through unique assigned-head equality.
- [ ] Rejected or missing event URLs remain rejected instead of inheriting the assigned PR URL.
- [ ] Focused tests, live subscriber canary, Security review, hosted exact-head validation, readiness, merge, remote verification, and Workbench closeout pass.

## Progress

- Waiting for the closed routing contract to merge and close.

## References

- [Closed routing contract](proactive-pr-steward-reconciliation.md)
- [Exact failure summaries](proactive-pr-steward-failure-summary.md)
