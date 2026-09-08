---
title: Compact PR Steward event routing
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward
created_at: 2026-09-08T03:23:45Z
updated_at: 2026-09-08T05:58:27Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1560
depends_on: []
---

# Compact PR Steward event routing

## Context

The [agent orchestration feature](README.md) already provides a mission-scoped
reactive PR event transport. Its minimal envelope does not identify a failed
job or give Gizmo enough reconciled GitHub evidence to route a correction.

## Outcome

During an active PR mission, PR Steward emits a compact, versioned routing
notification for job, review, comment, check, workflow, and PR lifecycle
activity. Review and comment notifications contain only the identifiers and
location metadata Gizmo needs to select the responsible specialist.

## Scope

- Include a closed versioned event contract, assigned-PR/head filtering,
  compact review/comment routing metadata, focused tests, `workflow_job`
  subscription configuration, and Cortex ownership updates.
- Exclude product behavior, persistent schedulers, notification journals,
  exact failure diagnosis, automatic repair, technical adjudication, full
  review bodies, logs, secrets, and raw webhook payloads.

## Acceptance criteria

- [ ] Job, review, comment, check, workflow, and PR events produce compact
      versioned records with exact routing identity and no full body or log.
- [ ] Gizmo can route review/comment identifiers by repository path and line
      without reading GitHub content or receiving unnecessary payload data.
- [ ] The live webhook is configured for the exact required event set,
      including `workflow_job`, with focused infrastructure validation.
- [ ] Foreign-PR/head and malformed hints fail closed without adding
      persistence, replay, or fallback behavior.
- [ ] Focused Loom, infrastructure, security, hosted exact-head, readiness, and
      merge verification evidence passes.

## Progress

- 2026-09-08: Gizmo established the PR path and began the implementation
  mission from current `origin/main`.
- 2026-09-08: The user selected sequential PRs when the combined implementation
  approached the source-size budget. This issue now owns only the routing
  foundation; exact failure reconciliation moves to the dependent slice.

## Findings and decisions

- PR Steward owns compact GitHub event observation. Gizmo retains specialist
  routing, readiness, merge authorization, and the final verdict.
- `workflow_job` is the explicit per-job event; existing check and workflow
  events remain part of broader PR lifecycle reconciliation.

## References

- [Nook PR #1492](https://github.com/meta-secret/nook/pull/1492)
- [Nook PR #1495](https://github.com/meta-secret/nook/pull/1495)
- [Exact failure reconciliation](proactive-pr-steward-reconciliation.md)
