---
title: Bounded PR Steward failure evidence
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-failure-summary
created_at: 2026-09-08T07:50:00Z
updated_at: 2026-09-08T15:42:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1572
depends_on:
  - issues/agent-orchestration/proactive-pr-steward-observation.md
---

# Bounded PR Steward failure evidence

## Context

Once observation is merged, PR Steward needs private fixed readers and fail-closed association/status evidence before terminal summaries can be trusted.

## Outcome

PR Steward owns private fixed read-only GitHub readers that validate bounded association and status evidence. This slice does not yet emit terminal failure summaries.

## Scope

- Include a private concrete command runner, owned fixed reader bundle, bounded commit-to-pull-request association, strict status pagination, exact identity/head validation, safe URLs, and typed unavailable or mismatch evidence.
- Route a PR-less workflow job only when a fixed read-only association query proves exactly one open pull request and it is the assigned PR at the exact job head; suppress zero, multiple, foreign, and stale matches.
- Exclude terminal summary records, observer emission changes, product repairs, technical adjudication, review bodies, job output, persistence, schedulers, queues, retry, replay, compatibility readers, and fallbacks.

## Acceptance criteria

- [ ] PR-less workflow-job attribution is proven by a bounded repository association query and fails closed unless the assigned PR is the unique match.
- [ ] Every association and status page item is structurally valid; one malformed item invalidates the evidence instead of being ignored.
- [ ] The concrete command runner is private and consumers can invoke only fixed owned read capabilities.
- [ ] Focused invocation, association, malformed-item, pagination, Security, hosted exact-head, readiness, merge, remote verification, and Workbench evidence pass.

## Progress

- Waiting for asynchronous exact-head observation to merge and close.
- 2026-09-08: Repository-wide commit-to-PR uniqueness moved here after observation review proved one assigned-PR read cannot establish it.
- 2026-09-08: Observation PR #1570 merged and closed in Workbench. Final failure reconciliation starts from fresh merged main.
- 2026-09-08: Security review of the combined draft proved fixed evidence readers and terminal summary semantics need separate serial PRs. The 1,141-addition draft is preserved locally only as a reference.
- 2026-09-08: PR #1572 opened at exact head `db952ff440e6be39ed69b947a9e1512a1b361db7`; exact-head Repository policy passed while review settles.

## References

- [Routing hints](proactive-pr-steward.md)
- [Closed routing contract](proactive-pr-steward-reconciliation.md)
- [Asynchronous exact-head observation](proactive-pr-steward-observation.md)
- [Terminal failure summaries](proactive-pr-steward-terminal-summary.md)
