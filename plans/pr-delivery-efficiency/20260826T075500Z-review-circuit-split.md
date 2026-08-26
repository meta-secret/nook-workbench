---
title: Split delivery statistics after the review circuit opens
feature: pr-delivery-efficiency
issue: issues/pr-delivery-efficiency/per-head-delivery-statistics.md
started_at: 2026-08-26T07:55:00Z
agent: codex
---

# Split delivery statistics after the review circuit opens

## Interpreted request

Complete per-head delivery measurement without repeating the review and hosted
validation race. When repeated review batches reveal separate responsibilities,
preserve them as ordered, independently verifiable stack slices.

## Requirements

- Keep hosted validation idle after three review-finding batches.
- Finish core Actions and review lifecycle accounting in the collector slice.
- Give manual E2E provenance its own workflow-owned slice.
- Keep Codex as the sole reviewer and treat eyes as liveness only.

## Constraints and exclusions

- Do not activate Cursor review.
- Do not infer manual E2E ownership from branch or commit timestamps.
- Do not edit workflow documents owned by an active foreign PR.

## Initial plan

1. Record the review circuit and preservation boundary.
2. Repair the collector lifecycle findings without launching validation.
3. Open a stacked manual-E2E provenance PR before reducing or deferring scope.
4. Continue schema, stabilization, and line-budget slices in dependency order.

### Change budget and PR sequence

- Estimated authored changed lines: 4,500 across the remaining stack.
- Owning modules, packages, or layers: Loom GitHub evidence, manual E2E
  workflow provenance, schema assembly, CI-agent stabilization, delivery policy.
- Public or cross-module interfaces: per-head evidence schema and workflow
  source metadata.
- Delivery shape: ordered stacked pull requests with one responsibility each.
- Current PR estimated authored changed lines: about 1,800.
- Current PR slice and acceptance evidence: core GitHub evidence collection,
  focused tests, repository policy, exact-head review, and hosted check.
- PR slices and acceptance evidence: collector foundation; manual E2E
  provenance; schema publication; review-first stabilization; 3,000-line policy.

## Completion evidence

- Workbench records and PR links preserve every required slice.
- Each exact head passes its focused tests, repository policy, one bounded Codex
  review lane, hosted checks, and readiness audit.

## Safety review

This plan contains no prompt transcript, secrets, private data, raw logs, local
paths, or unnecessary infrastructure detail.
