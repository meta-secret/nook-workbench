---
title: Owned PR Steward webhook decoder delivery
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward-webhook-decoder.md
plan: plans/agent-orchestration/20260908T120400Z-pr-steward-remaining-four-slices.md
nook_pr: https://github.com/meta-secret/nook/pull/1568
status: completed
started_at: 2026-09-08T12:39:00Z
finished_at: 2026-09-08T13:25:00Z
agent: codex
---

# Owned PR Steward webhook decoder delivery

## Outcome

Merged the second remaining serial slice. PR Steward now owns webhook parsing, source-specific metadata and attribution, closed v1 record writing, sanitized attributable malformed blockers, continuation, and operational-error propagation without any GitHub reader.

## Progress

- Implemented the two review findings deferred from PR #1564: decoder-owned metadata rules and attribution-aware malformed blockers.
- Suppressed normal and malformed workflow-job input until the next observation slice can prove one assigned PR.
- Converted stateless writer operations to static ownership and made version mismatch stop the subscriber with no predecessor rollback.
- Proved the live subscriber emits exact-head identifiers and code locations without review bodies or logs.

## Implementation problems

- Security found malformed workflow jobs could emit blockers before normal suppression. Identity-error attribution is now unavailable for workflow-job input and the stream-continuation regression covers the edge.
- Hosted review found an unnecessary writer instance and ambiguous rollback wording. Both were corrected in one review batch before replacement-head validation.
- The PR preview workflow intentionally excludes this path, so the repository-defined path-excluded admin handshake was used only after exact-head policy, readiness, Security, and review evidence passed.

## Decisions

- GitHub reads, exact-head observation, PR-less job attribution, failure investigation, and summaries remain absent.
- Review summaries cross PR Steward to Gizmo only as compact IDs and locations; AI reads assigned bodies directly.
- Version mismatch is a visible hard stop, never a compatibility or rollback trigger.

## Validation

- Final local evidence: 17 focused tests, 74 assertions, TypeScript, ESLint, formatting, Cortex audit, diff check, and `task loom:pre-push`.
- Security accepted the exact 524-addition three-file tree with no P1/P2 findings.
- Exact-head Repository policy run `34231173518` succeeded; live canary emitted body-free success records; `task pr:ready PR=1568` passed with zero unresolved or substantive comments.
- Squash merge and remote-main verification produced `d96d57748878d42a61b5f898f8b2a77f49ca0953`; subscriber drain completed in 0.36 seconds.

## Remaining work

- `proactive-pr-steward-observation`: asynchronous assigned-PR exact-head observation and unique workflow-job attribution.
- `proactive-pr-steward-failure-summary`: exact failure reconciliation and bounded actionable summaries.
