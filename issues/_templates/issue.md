---
title: Focused deliverable
status: proposed
priority: p2
automation: manual
owner: unassigned
gizmo_id: originating-feature-slice
# For a stacked slice, uncomment both fields and replace both values.
# stack_branch: feature-slice-branch
# stack_predecessor_branch: predecessor-slice-branch
created_at: 2026-01-01T00:00:00Z
updated_at: 2026-01-01T00:00:00Z
source_issues: []
related_prs: []
depends_on: []
---

# Focused deliverable

Replace `originating-feature-slice` with the immutable lowercase kebab-case ID
of the Gizmo PR slice that materialized this issue. Remove the field only when
the issue is historical or standalone and has no originating slice.

For a stacked slice, record both the trusted existing successor branch as
`stack_branch` and its temporary PR base as `stack_predecessor_branch`. Keep
both absent for a standalone main-based flow. Concrete values are immutable.

## Context

Explain why this work exists and link the feature `README.md`.

## Outcome

State the observable result this issue must deliver.

## Scope

- Included work.
- Explicitly excluded work.

## Acceptance criteria

- [ ] Testable behavior or artifact.
- [ ] Required Rust, web, browser, documentation, or migration coverage.

## Progress

- No implementation started.

## Findings and decisions

- Record facts another agent must retain.

## References

- Nook code, PRs, discussions, or historical GitHub issues.
