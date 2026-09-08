---
title: Asynchronous PR Steward exact-head observation
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-observation
created_at: 2026-09-08T10:59:04Z
updated_at: 2026-09-08T13:28:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-orchestration/proactive-pr-steward-webhook-decoder.md
---

# Asynchronous PR Steward exact-head observation

## Context

The closed routing codec and its owned webhook writer must merge first. A separate slice can then add nonblocking GitHub observation and exact-head attribution without distorting those ownership boundaries.

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

- 2026-09-08: Closed codec PR #1564 and owned webhook decoder/writer PR #1568 are merged, remotely verified, and closed in Workbench. Observation implementation starts from fresh merged main.

## References

- [Closed routing contract](proactive-pr-steward-reconciliation.md)
- [Owned webhook decoding and writing](proactive-pr-steward-webhook-decoder.md)
- [Exact failure summaries](proactive-pr-steward-failure-summary.md)
