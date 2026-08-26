---
title: Open the statistics review circuit and split workflow provenance
feature: pr-delivery-efficiency
issue: issues/pr-delivery-efficiency/per-head-delivery-statistics.md
plan: plans/pr-delivery-efficiency/20260826T075500Z-review-circuit-split.md
nook_pr: https://github.com/meta-secret/nook/pull/1116
status: completed
started_at: 2026-08-26T07:42:33Z
finished_at: 2026-08-26T07:55:00Z
agent: codex
---

# Open the statistics review circuit and split workflow provenance

## Outcome

Stopped the review and validation loop after the third finding batch and
preserved manual E2E provenance as a required focused successor.

## Progress

- Held hosted validation while repository policy and Codex reviewed the head.
- Cancelled the one hosted run that overlapped a late finding batch.
- Recorded the remaining collector lifecycle fixes and the workflow-owned
  provenance boundary.

## Implementation problems

- Manual E2E resolves the PR head inside a dispatch job, so the Actions run API
  cannot associate it through the source branch or pull-request list.
- Continued collector-only patching would mix workflow instrumentation into a
  repeatedly reviewed foundation.

## Decisions

- Keep the review circuit open until the semantic split is durable.
- Make workflow provenance a required stack slice, not an optional follow-up.
- Continue using Codex only; eyes remain non-blocking.

## Validation

- The collector head passed repository policy before the final review batch.
- No full validation was launched for the finding head.

## Remaining work

Implement and link the manual E2E provenance PR, then complete the ordered
statistics, stabilization, and line-budget stack.
