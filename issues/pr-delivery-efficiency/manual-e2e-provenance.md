---
title: Expose manual E2E pull-request provenance
status: completed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T07:55:00Z
updated_at: 2026-08-26T22:55:21Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1121
depends_on:
  - issues/pr-delivery-efficiency/per-head-delivery-statistics.md
---

# Expose manual E2E pull-request provenance

## Outcome

Merged PR 1121 gives manual E2E runs durable, API-readable source PR and exact
head evidence. The statistics collector associates those runs without branch,
time, or commit-history heuristics and fails closed for incomplete or foreign
metadata.

## Acceptance criteria

- [x] A dispatched E2E run identifies its source PR and resolved full head SHA.
- [x] Statistics associate the run with that exact delivery head.
- [x] Stale or foreign dispatch evidence cannot be attributed to the PR.
- [x] Workflow and collector contract tests pass on the exact head.

## Evidence

- PR 1121 merged as `c9677bf973532302a42c9800171899159fcad489`.
- PR 1120 was closed as an empty intermediate after its schema work was absorbed.
