---
title: Lower the active ceiling and require dependent stacks
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-29T05:59:30Z
updated_at: 2026-08-29T05:59:30Z
source_issues: []
related_prs: []
depends_on: []
---

# Lower the active ceiling and require dependent stacks

## Context

This follow-up tightens the pull-request boundary owned by
[Efficient review and validation delivery](README.md) while retaining the
semantic slicing and exact-head safety properties delivered previously.

## Outcome

Nook planning, automated implementation, and Workbench validation reject a
pull-request slice above 2,000 authored changed lines. Work expected to exceed
that ceiling is preserved as an ordered, linked stacked sequence of cohesive
dependent pull requests.

## Scope

- Lower the enforced and documented ceiling from 3,000 to 2,000 authored
  additions plus deletions.
- Move the mandatory split-planning warning early enough to retain review and
  repair headroom.
- Require oversized dependent work to use predecessor-based GitHub pull
  requests with cross-links, ordered merge, retargeting to `main`,
  re-measurement, and exact-head revalidation.
- Keep independent changes on `main`; stacking every unrelated small change is
  explicitly excluded.

## Acceptance criteria

- [ ] Agent implementation and Workbench plan validation enforce the 2,000-line ceiling.
- [ ] Cortex and agent planning instructions use the same ceiling and warning threshold.
- [ ] Oversized dependent features require a linked stacked pull-request sequence.
- [ ] Every slice remains semantic, independently reviewable, tested, and safe to merge.
- [ ] Successors are updated, retargeted, re-measured, and revalidated after predecessor merges.

## Progress

- Implementation is active on a dedicated Nook branch.

## Findings and decisions

- The existing metric counts authored additions and deletions. Keeping both
  prevents delete-heavy refactors from bypassing review-size controls.
- GitHub base branches and explicit links provide the required stack model;
  no additional stacking service is required.

## References

- [Prior 3,000-line policy](three-thousand-line-stacks.md)
- [Nook pull-request workflow](https://github.com/meta-secret/nook/blob/main/.cortex/gizmo/workflows/pull-requests.md)
