---
title: Closed PR Steward routing codec delivery
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward-reconciliation.md
plan: plans/agent-orchestration/20260908T120400Z-pr-steward-remaining-four-slices.md
nook_pr: https://github.com/meta-secret/nook/pull/1564
status: completed
started_at: 2026-09-08T05:58:27Z
finished_at: 2026-09-08T12:34:00Z
agent: codex
---

# Closed PR Steward routing codec delivery

## Outcome

Merged the contract-only serial slice. PR Steward now has a strict body-free routing and blocker codec with source-discriminated variants, validated opaque identifiers, exact URL constraints, and impossible-combination rejection. Live webhook writing remains outside this PR.

## Progress

- Replaced a 1,049-addition combined draft with a 648-addition contract-only head after review proved decoder ownership was a separate capability.
- Kept the codec and direct tests only; restored event production, stream handling, and lifecycle cutover documentation to the base tree.
- Implemented validated blocker PR identity and retained issue-comment head and workflow-job exclusion invariants.
- Replied individually to every current and stale review thread; unresolved count reached zero before merge.

## Implementation problems

- The first revision mixed codec, webhook writer, asynchronous observation, and future failure handling. Review repeatedly exposed cross-capability invariants.
- The first replan still left codec and writer together at the exact 900-line estimate. Three new current-head P1 findings triggered another split before edits.
- Hosted policy rejected raw TypeScript unions; the local policy test was added to the focused gate before the final contract rewrite.
- The final contract-only path was intentionally excluded from the preview workflow, so Gizmo used the repository-defined path-excluded admin handshake only after exact-head policy, readiness, Security, and thread evidence passed.

## Decisions

- Size estimates are stop boundaries. Valid review findings that exceed the slice cause a new serial capability, not compressed tests or ownership.
- PR Steward sends Gizmo compact comment identity and location only. AI fetches assigned comment bodies directly.
- Webhook decoder/writer behavior proceeds next from fresh merged main; observation and failure summaries remain later.

## Validation

- Final local evidence: 4 contract tests, 29 assertions, TypeScript, ESLint, formatting, closed-vocabulary policy, Cortex audit, diff check, and `task loom:pre-push`.
- Security accepted the exact 648-addition two-file tree with no P1/P2 findings.
- Exact-head Repository policy run `34225910660` succeeded; all review threads were resolved; `task pr:ready PR=1564` passed.
- The repository path-excluded admin merge produced `ea13503ec9a71382f364a5c0f9ad7018b448f23d`, and remote main was verified at that commit.

## Remaining work

- `proactive-pr-steward-webhook-decoder`: owned live webhook decoding, writing, malformed continuation, and atomic cutover.
- `proactive-pr-steward-observation`: asynchronous assigned-PR exact-head observation.
- `proactive-pr-steward-failure-summary`: exact failure reconciliation and bounded actionable summaries.
