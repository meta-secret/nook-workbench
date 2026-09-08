---
title: Proactive PR Steward failure summaries
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward
created_at: 2026-09-08T03:23:45Z
updated_at: 2026-09-08T03:23:45Z
source_issues: []
related_prs: []
depends_on: []
---

# Proactive PR Steward failure summaries

## Context

The [agent orchestration feature](README.md) already provides a mission-scoped
reactive PR event transport. Its minimal envelope does not identify a failed
job or give Gizmo enough reconciled GitHub evidence to route a correction.

## Outcome

During an active PR mission, PR Steward receives job and broader PR lifecycle
events, reconciles relevant GitHub state itself, and sends Gizmo a concise,
actionable summary. Gizmo routes the owning team without independently
investigating GitHub jobs.

## Scope

- Include typed job/check/workflow failure notifications, PR association,
  exact-head validation, GitHub API reconciliation, summary content, focused
  tests, webhook subscription configuration, and Cortex ownership updates.
- Exclude product behavior, persistent schedulers, notification journals,
  automatic code repair, PR Steward technical adjudication, and secrets or raw
  logs in summaries.

## Acceptance criteria

- [ ] Individual failed Actions jobs and other unsuccessful PR lifecycle states
      produce an actionable PR Steward summary with exact identity and URLs.
- [ ] PR Steward uses current GitHub API evidence and reports the first useful
      failure context; Gizmo does not inspect GitHub jobs directly.
- [ ] The live webhook is configured for the exact required event set,
      including `workflow_job`, with focused infrastructure validation.
- [ ] Missed or ambiguous hints fail closed into bounded PR Steward
      reconciliation without adding persistence or fallback behavior.
- [ ] Focused Loom, infrastructure, security, hosted exact-head, readiness, and
      merge verification evidence passes.

## Progress

- 2026-09-08: Gizmo established the PR path and began the implementation
  mission from current `origin/main`.

## Findings and decisions

- PR Steward owns GitHub observation and the diagnostic summary. Gizmo retains
  functional routing, readiness, merge authorization, and the final verdict.
- `workflow_job` is the explicit per-job event; existing check and workflow
  events remain part of broader PR lifecycle reconciliation.

## References

- [Nook PR #1492](https://github.com/meta-secret/nook/pull/1492)
- [Nook PR #1495](https://github.com/meta-secret/nook/pull/1495)
