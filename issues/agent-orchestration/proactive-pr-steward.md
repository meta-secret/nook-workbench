---
title: Compact PR Steward routing hints
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward
created_at: 2026-09-08T03:23:45Z
updated_at: 2026-09-08T07:50:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1560
depends_on: []
---

# Compact PR Steward routing hints

## Context

The active PR mission already receives GitHub lifecycle events, but the producer needs compact directly attributable routing hints. The previous combined shape was too large and mixed routing with later GitHub reconciliation.

## Outcome

PR Steward receives bounded body-free hints for assigned PR activity. Review and comment hints give Gizmo only identifiers and code location metadata needed to choose a specialist.

## Scope

- Extend the existing producer with flat `pr-steward-routing/v1` hints for directly attributable PR, review, review-comment, issue-comment, check, workflow, and workflow-job events.
- Include focused attribution, exact-head-when-present, bounds, malformed-continuation, and payload-minimization tests plus the existing `workflow_job` ingress configuration.
- Exclude a public decoder, observer lifecycle, GitHub reader, failure reconciliation, review bodies, logs, raw payloads, repair logic, persistence, replay, and fallback behavior.

## Acceptance criteria

- [ ] Directly attributable assigned-PR events produce compact bounded scalar routing hints.
- [ ] Review/comment commit identity matches the payload PR head, and foreign, stale, status-only, PR-less, and malformed events are suppressed.
- [ ] No body, text, log, secret, or raw payload crosses the PR Steward-to-Gizmo boundary.
- [ ] The live hook retains `workflow_job`, with focused repository validation.
- [ ] All superseded review threads are individually answered and resolved before fresh review.
- [ ] Focused tests, Security review, hosted exact-head validation, readiness, merge, remote verification, and Workbench closeout pass.

## Progress

- 2026-09-08: The oversized routing foundation was rejected and preserved only as a local backup.
- 2026-09-08: PR #1560 is being reconstructed from fresh `origin/main` as the first of three strictly serial PRs.

## Findings and decisions

- Gizmo receives compact review/comment routing metadata and routes specialists; it does not receive full comment content.
- Closed decoding and GitHub reads belong to the next merged-dependent slice.

## References

- [Closed routing contract](proactive-pr-steward-reconciliation.md)
- [Exact failure summaries](proactive-pr-steward-failure-summary.md)
