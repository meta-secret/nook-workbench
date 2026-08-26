---
title: Record per-head delivery statistics
status: completed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T04:22:43Z
updated_at: 2026-08-26T22:55:21Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1116
  - https://github.com/meta-secret/nook/pull/1121
depends_on: []
---

# Record per-head delivery statistics

## Context

The previous statistics path could substitute the squash merge commit for the
actual pull-request head and omit earlier delivery attempts. That made review
and validation imbalance impossible to measure reliably.

## Outcome

PR 1116 added paginated, attempt-level GitHub evidence across every delivery
head. PR 1121 added durable manual E2E provenance and absorbed the schema-v4
integration. Workbench statistics now publish delivery heads, exact-head review
requests and results, finding batches, validation cycles, cancellation timing,
retrigger counts, and non-overlapping obsolete validation duration.

## Acceptance criteria

- [x] A squash merge cannot replace the final pull-request head in statistics.
- [x] Earlier validation heads remain present after merge.
- [x] Review and validation events are bound to exact head SHAs.
- [x] Obsolete and cancelled compute is derivable from detailed events.
- [x] Missing or truncated run collection fails closed.
- [x] Exact-head validation, review, readiness, merge, and completion records succeed.

## Evidence

- Collector merge: `264231fd2aa3f18b71afa8fe35faea078d973c66`.
- Schema and manual E2E provenance merge: `c9677bf973532302a42c9800171899159fcad489`.
- The superseded intermediate PR 1120 was closed after PR 1121 absorbed its integration.
