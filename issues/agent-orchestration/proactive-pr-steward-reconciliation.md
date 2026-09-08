---
title: Closed PR Steward routing contract
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-reconciliation
created_at: 2026-09-08T05:58:27Z
updated_at: 2026-09-08T09:43:30Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-orchestration/proactive-pr-steward.md
---

# Closed PR Steward routing contract

## Context

Compact producer hints must merge first. This slice then replaces them atomically with a strict owned codec and exact assigned-head observation boundary.

## Outcome

PR Steward owns a closed `pr-steward-ndjson/v1` routing and sanitized-blocker contract, observer lifecycle, and narrow read-only GitHub PR reader.

## Scope

- Include strict closed encoding/decoding, owned webhook observation, a fixed `github.com` read-only assigned-PR request, exact-head binding, output limits, and malformed/API-unavailable blockers.
- Remove `pr-steward-routing/v1` atomically; do not add compatibility readers or fallbacks.
- Exclude failure reconciliation, failure summaries, review bodies, logs, product repairs, persistence, retry, and replay.

## Acceptance criteria

- [ ] The codec rejects unknown fields and variants and never exposes raw input.
- [ ] GitHub access is fixed to the assigned PR, `github.com`, GET, ten seconds, and two MiB.
- [ ] Observer output is bound to the authorized repository, PR, and exact head.
- [ ] Focused tests, Security review, hosted exact-head validation, readiness, merge, remote verification, and Workbench closeout pass.

## Progress

- 2026-09-08: Compact routing hints merged in PR #1560 and its issue, worklog, and statistics were closed on Workbench `main`.
- 2026-09-08: The closed routing slice started from fresh merged `origin/main`; exact failure reconciliation remains deferred.

## References

- [Routing hints](proactive-pr-steward.md)
- [Exact failure summaries](proactive-pr-steward-failure-summary.md)
