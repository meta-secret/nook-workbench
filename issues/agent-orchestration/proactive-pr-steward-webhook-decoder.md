---
title: Owned PR Steward webhook decoding and writing
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-webhook-decoder
created_at: 2026-09-08T12:04:00Z
updated_at: 2026-09-08T13:25:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1568
depends_on:
  - issues/agent-orchestration/proactive-pr-steward-reconciliation.md
---

# Owned PR Steward webhook decoding and writing

## Context

The closed codec must merge first. Review of PR #1564 proved live webhook ownership, malformed-event attribution, and writer cutover form a distinct capability that cannot be compressed into the codec budget.

## Outcome

PR Steward owns webhook parsing, source-specific routing metadata, body-free record production, attribution-aware malformed blockers, and the atomic writer/reader cutover to the closed codec.

## Scope

- Include webhook event/object decoding, source-owned metadata extraction, body-free record construction, attribution-aware sanitized malformed blockers, stream continuation, and unexpected operational-error propagation.
- Replace the old routing writer and reader atomically with no compatibility or rollback fallback.
- Suppress workflow-job ingress until later observation can prove one assigned PR association.
- Exclude GitHub subprocess/API access, assigned-head observation, job/check/run investigation, failure summaries, persistence, retry, replay, and product repair.

## Acceptance criteria

- [x] The decoder, not generic producer logic, owns every source-specific metadata rule.
- [x] Malformed events emit a static sanitized blocker only when the assigned PR can be validated; foreign or unattributable input is suppressed.
- [x] Stream processing continues after expected malformed input while unexpected writer and operational errors propagate.
- [x] The old writer/reader boundary changes atomically with a hard stop and no compatibility reader or rollback.
- [x] Focused tests, live subscriber canary, Security review, hosted exact-head validation, readiness, merge, remote verification, and Workbench closeout pass.

## Progress

- 2026-09-08: Closed codec PR #1564 merged and its Workbench issue, worklog, and statistics were closed. Implementation starts from fresh merged main.
- 2026-09-08: PR #1568 opened at exact head `e2432e7aa45766fc2b6ab2d35476a78fc9bd3963`; hosted Repository policy passed and live subscriber validation is in progress.
- 2026-09-08: PR #1568 merged at `d96d57748878d42a61b5f898f8b2a77f49ca0953` after Security acceptance, exact-head policy success, body-free live canary, and zero unresolved threads.

## References

- [Closed routing codec](proactive-pr-steward-reconciliation.md)
- [Asynchronous exact-head observation](proactive-pr-steward-observation.md)
- [Exact failure summaries](proactive-pr-steward-failure-summary.md)
