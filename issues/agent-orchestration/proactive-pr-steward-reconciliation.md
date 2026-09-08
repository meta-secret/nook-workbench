---
title: Closed PR Steward routing contract
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-reconciliation
created_at: 2026-09-08T05:58:27Z
updated_at: 2026-09-08T10:59:04Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1564
depends_on:
  - issues/agent-orchestration/proactive-pr-steward.md
---

# Closed PR Steward routing contract

## Context

Compact producer hints merged in PR #1560. Review of the first dependent draft showed that closed source semantics and asynchronous GitHub observation are separate capabilities and should not be compressed into one line-budgeted PR.

## Outcome

PR Steward owns a closed source-discriminated `pr-steward-ndjson/v1` routing and malformed-blocker contract plus the webhook decoder that produces it.

## Scope

- Include strict closed encoding/decoding, validated opaque identifiers, source-discriminated routing variants, owned webhook parsing/object mapping, bounded safe URLs, malformed blockers, and operational-error propagation.
- Replace `pr-steward-routing/v1` atomically; document the writer/reader cutover and fail-closed rollback boundary.
- Exclude GitHub subprocess/API access, assigned-head reading, observer lifecycle, PR-less job attribution, API-unavailable blockers, failure summaries, persistence, retry, replay, compatibility readers, and fallbacks.

## Acceptance criteria

- [ ] The codec rejects unknown fields, versions, variants, identifier shapes, URLs, and impossible source/metadata combinations.
- [ ] The webhook decoder owns event and object mapping and emits only body-free bounded source-discriminated records.
- [ ] Malformed input emits a static sanitized blocker and stream processing continues; unexpected operational errors propagate.
- [ ] The v0 writer/reader boundary changes atomically with no compatibility or rollback fallback.
- [ ] Focused tests, Security review, hosted exact-head validation, readiness, merge, remote verification, and Workbench closeout pass.

## Progress

- 2026-09-08: PR #1560 merged and closed.
- 2026-09-08: PR #1564 exposed seven review findings that separate closed decoding from asynchronous observation. The combined reviewed draft is preserved locally; PR #1564 is being rewritten to this narrower contract.

## References

- [Routing hints](proactive-pr-steward.md)
- [Asynchronous exact-head observation](proactive-pr-steward-observation.md)
- [Exact failure summaries](proactive-pr-steward-failure-summary.md)
