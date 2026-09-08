---
title: Compact PR Steward routing hints delivery
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward.md
plan: plans/agent-orchestration/20260908T075000Z-proactive-pr-steward-three-slices.md
nook_pr: https://github.com/meta-secret/nook/pull/1560
status: completed
started_at: 2026-09-08T03:23:45Z
finished_at: 2026-09-08T09:39:34Z
agent: codex
---

# Compact PR Steward routing hints delivery

## Outcome

Merged the first serial slice. PR Steward now emits bounded, body-free routing hints only for directly attributable assigned-PR activity, while the ingress retains `workflow_job` for later exact reconciliation.

## Progress

- Replaced the rejected 1,904-line foundation with a 748-addition final head; larger versions remain only as local backup refs.
- Bound pull-request, review, comment, check, and workflow hints to payload repository, PR, and coherent head evidence.
- Removed fabricated workflow-job PR attribution because real job events are PR-less.
- Added selective malformed-input rejection with stream continuation and operational-error propagation.
- Replied individually to and resolved 30 accumulated review threads before readiness.

## Implementation problems

- The first split remained too close to the 2,000-line limit. Root cause was mixing producer routing, closed decoding, GitHub reads, and reconciliation in one slice; the mission was replanned into three merge-dependent PRs.
- Hosted review exposed payload-head coherence, explicit owner, malformed-input, real workflow-job schema, and missing pull-request-head gaps. Each was corrected on a new exact head and independently re-reviewed.
- `main` advanced during review; the branch was rebased and every affected gate was rerun.
- One readiness attempt hit a transient local bootstrap error; the bounded rerun passed without bypass.

## Decisions

- Review comments cross the Steward-to-Gizmo boundary only as compact identifiers and code locations; Gizmo routes them to specialists.
- Exact GitHub reads and failure summaries remain in the two later serial slices.
- No successor branch is created until its predecessor is merged, remotely verified, and closed out.

## Validation

- Final local evidence: 13 focused tests, 38 assertions, TypeScript, ESLint, formatting, Cortex audit, ingress validation, and `task loom:pre-push PR=1560`.
- Security accepted final head `bcc15fcf019e2049c5c11636fe60fe0669b1346c` with no P1/P2 findings.
- Hosted validation run `34210130362`, deployment `6324740654`, zero unresolved threads, and `task pr:ready PR=1560` passed.
- Squash merge and remote-main verification produced `67b3ebaa340d890375ae7325dbb396ebc905abd4`.

## Remaining work

- `proactive-pr-steward-reconciliation`: closed routing codec, observer lifecycle, and assigned-head reader.
- `proactive-pr-steward-failure-summary`: exact failure reconciliation and bounded actionable summaries.
