---
title: Closed PR Steward routing contract
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-reconciliation
created_at: 2026-09-08T05:58:27Z
updated_at: 2026-09-08T12:04:00Z
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

PR Steward owns a closed source-discriminated routing and blocker codec with validated opaque identifiers. It does not yet produce the new records from live webhooks.

## Scope

- Include strict closed encoding/decoding, validated opaque identifiers across routing and blocker records, source-discriminated variants, bounded safe URLs, and exact codec tests.
- Exclude live webhook parsing, routing metadata extraction, writer cutover, stream continuation, GitHub subprocess/API access, observation, job attribution, failure summaries, persistence, retry, replay, compatibility readers, and fallbacks.

## Acceptance criteria

- [ ] The codec rejects unknown fields, versions, variants, identifier shapes, URLs, and impossible source/metadata combinations.
- [ ] Routing and blocker PR identifiers are accepted only through validated opaque construction.
- [ ] The codec contains no live writer, webhook decoder, GitHub reader, or observation behavior.
- [ ] Focused tests, Security review, hosted exact-head validation, readiness, merge, remote verification, and Workbench closeout pass.

## Progress

- 2026-09-08: PR #1560 merged and closed.
- 2026-09-08: PR #1564 exposed seven review findings that separate closed decoding from asynchronous observation. The combined reviewed draft is preserved locally; PR #1564 is being rewritten to this narrower contract.
- 2026-09-08: Three additional current-head findings proved webhook ownership and malformed continuation are a separate capability. PR #1564 was split again before edits at the 900-line boundary.

## References

- [Routing hints](proactive-pr-steward.md)
- [Owned webhook decoding and writing](proactive-pr-steward-webhook-decoder.md)
- [Asynchronous exact-head observation](proactive-pr-steward-observation.md)
- [Exact failure summaries](proactive-pr-steward-failure-summary.md)
