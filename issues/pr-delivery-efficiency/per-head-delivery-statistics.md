---
title: Record per-head delivery statistics
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T04:22:43Z
updated_at: 2026-08-26T06:39:10Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1116
  - https://github.com/meta-secret/nook/pull/1120
depends_on: []
---

# Record per-head delivery statistics

## Context

The statistics assembler uses the squash merge commit as the pull-request head.
It then filters a short repository-wide Actions listing to that commit. The
result can contain post-merge workflows while omitting validation for the actual
pull-request heads.

## Scope

- Preserve the final implementation head separately from the squash merge commit.
- Collect repository-owned Actions runs across every pull-request head.
- Record review requests, review results, findings, validation cycles, and cancellation timing.
- Derive obsolete validation duration without summing overlapping wall-clock time.
- Add focused schema, assembler, and regression coverage.
- Update the statistics authority and Workbench schema contract.

## Delivery split

- PR 1116 owns the 1,393-line GitHub evidence collector foundation.
- PR 1120 owns the 1,736-line schema and assembly integration.
- The split was required when the combined review-fix head reached 3,129
  authored lines, above the 3,015-line hard ceiling.
- Review stabilization depends on PR 1120 because it consumes the published
  per-head metrics contract.

## Acceptance criteria

- [ ] A squash merge cannot replace the final pull-request head in statistics.
- [ ] Earlier validation heads remain present after merge.
- [ ] Review and validation events are bound to exact head SHAs.
- [ ] Obsolete and cancelled compute is derivable from detailed events.
- [ ] Missing or truncated run collection fails closed.
- [ ] Exact-head validation, review, readiness, merge, and completion records succeed.

## References

- [Feature](README.md)
- [Implementation plan](../../plans/pr-delivery-efficiency/20260826T042243Z-three-slice-delivery-efficiency.md)
