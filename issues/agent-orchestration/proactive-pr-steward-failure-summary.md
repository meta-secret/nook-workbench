---
title: Bounded PR Steward GitHub failure-detail readers
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-failure-summary
created_at: 2026-09-08T07:50:00Z
updated_at: 2026-09-08T17:41:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1572
depends_on:
  - issues/agent-orchestration/proactive-pr-steward-observation.md
---

# Bounded PR Steward GitHub failure-detail readers

## Context

After the observation slice, PR Steward owns private, fixed read-only GitHub failure-detail readers for an already-routed webhook identity. This issue is limited to the reader contract and does not authorize observer or terminal-summary emission.

## Outcome

PR Steward can read bounded failure details for the routed repository, pull request, head, and object identity with typed Invalid versus Unavailable handling and sanitized output. The slice does not enumerate pull requests, prove unique association, paginate statuses, or emit terminal summaries.

## Scope

- Use the routed webhook identity as the sole admission input.
- Keep the concrete command runner private and expose only fixed owned read capabilities.
- Preserve repository/head/object attribution and safe URLs in bounded results.
- Fail closed for invalid structured results and distinguish unavailable GitHub reads.
- Exclude pull-request enumeration, association proof, status pagination, observer wiring, terminal-summary emission, remediation, product repairs, persistence, scheduling, retries, replay, compatibility readers, and fallbacks.

## Acceptance criteria

- [ ] Routed webhook identity is the sole admission input; no pull-request enumeration, association proof, or status pagination exists.
- [ ] Bounded GitHub responses and typed Invalid versus Unavailable failures are validated.
- [ ] The concrete command runner is private and consumers can invoke only fixed owned read capabilities.
- [ ] Focused reader tests, Security acceptance, hosted exact-head validation/readiness, merge, remote verification, and Workbench evidence pass.

## Progress

- 2026-09-08: Observation PR #1570 merged; this issue is narrowed to routed failure-detail readers.
- 2026-09-08: PR #1572 amended to exact head `11fa1b24480acd5d862842ecb5b3a789682cc8a1`; title/body use plain failure-detail terminology and explicitly exclude pull-request enumeration, association proof, status pagination, observer wiring, and terminal summaries.
- 2026-09-08: Superseding plan published at `plans/agent-orchestration/20260908T173149Z-pr-steward-failure-detail-readers.md`; hosted validation/readiness are pending.

## References

- [Superseding failure-detail reader plan](../plans/agent-orchestration/20260908T173149Z-pr-steward-failure-detail-readers.md)
- [Closed routing contract](proactive-pr-steward-reconciliation.md)
- [Asynchronous observation](proactive-pr-steward-observation.md)
- [Terminal failure summaries](proactive-pr-steward-terminal-summary.md)
