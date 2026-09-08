---
title: Asynchronous PR Steward observation delivery
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward-observation.md
plan: plans/agent-orchestration/20260908T134500Z-pr-steward-observation-and-failure.md
nook_pr: https://github.com/meta-secret/nook/pull/1570
status: completed
started_at: 2026-09-08T13:28:00Z
finished_at: 2026-09-08T14:56:00Z
agent: codex
---

# Asynchronous PR Steward observation delivery

## Outcome

Merged asynchronous assigned-PR observation. PR Steward now reads one fixed assigned pull request without blocking the event loop, validates exact URL and head identity, emits closed v2 routing or sanitized unavailable blockers, and suppresses every PR-less workflow job.

## Progress

- Added a fixed non-shell `gh api` reader with ten-second timeout and two-MiB output cap.
- Preserved opaque PR and head identities across module boundaries and rejected stale, foreign, invalid-URL, and mismatched responses.
- Added a four-event concurrency bound while preserving input order and draining partial work before stream failure propagation.
- Proved body-free v2 output and exact-head URL preservation with a live subscriber.

## Implementation problems

- Deferred review proved one assigned-PR read cannot establish repository-wide uniqueness for PR-less job heads. Observation remains fail-closed; bounded commit association moved to final reconciliation.
- Security found opaque identities widened at the reader boundary, concurrent reads could reorder output, and iterator failure could leave late writes. Each was fixed and independently reproduced before push.
- SRE narrowed lifecycle wording to repository-configured ingress because end-to-end runtime receipt was not independently verified on the contacted node.

## Decisions

- Observation uses one fixed assigned-PR endpoint only. It never lists jobs, checks, runs, logs, or repository-wide PR associations.
- Every PR-less workflow job is suppressed until final reconciliation proves a unique assigned PR.
- Reader causes remain typed internally; outward blockers are static and sanitized.

## Validation

- Final local evidence: 30 focused tests, TypeScript, ESLint, formatting, Cortex audit, diff check, and `task loom:pre-push`.
- Security accepted the exact 831-addition seven-file tree; SRE accepted the ingress wording.
- Exact-head Repository policy run `34240643189` succeeded; live subscriber emitted body-free v2 records; readiness passed with zero substantive or unresolved feedback.
- Squash merge produced `eb8e3b9330c75c99279200a72c542bf8dbbd9d54`; the subscriber drained in 0.23 seconds after a final closed-PR record.

## Remaining work

- `proactive-pr-steward-failure-summary`: prove unique PR-less job association, reconcile exact failures, and give Gizmo bounded actionable summaries.
