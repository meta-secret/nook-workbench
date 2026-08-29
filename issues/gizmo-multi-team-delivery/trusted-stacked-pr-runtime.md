---
title: "Trusted stacked PR implementation runtime"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: gizmo-stacked-pr-runtime
stack_branch: codex/pr-size-stacked-runtime
stack_predecessor_branch: codex/pr-size-stacked-policy
created_at: 2026-08-29T08:16:02Z
updated_at: 2026-08-29T08:16:02Z
source_issues: []
related_prs: []
depends_on: [issues/gizmo-multi-team-delivery/gizmo-prime-pr-slice-controllers.md]
---

# Trusted stacked PR implementation runtime

## Context

The adaptive policy feature crossed its 1,500-line warning and exact-head review
showed that the remaining trusted-workflow repairs would take the complete
feature beyond 2,000 authored changed lines. This focused successor preserves
the complete pre-split head and follows the policy slice in a native GitHub
stack.

## Outcome

Bounded automation can safely continue a linked stacked successor without
executing PR-head tooling with privileged credentials, can validate the
successor before and after predecessor merge/retarget, and measures only the
current semantic slice against its validated PR base.

## Scope

- Keep trusted workflow and CI-agent tooling on the workflow revision while
  implementation changes occur in an isolated successor worktree.
- Validate same-repository successor branch and PR identity.
- Support predecessor-based and retargeted-main successor states explicitly.
- Budget authored lines against the successor's validated current PR base.
- Preserve legacy standalone main-based issue dispatch.
- Exclude Workbench plan-cardinality validation and passive-record semantics;
  those belong to the predecessor issue.

## Acceptance criteria

- [ ] Privileged workflow steps never execute tooling loaded from an unreviewed PR head.
- [ ] A linked successor based on its predecessor can be continued and measured against that predecessor.
- [ ] After predecessor merge and retarget, the same successor can be continued against main without inventing a new branch.
- [ ] Incomplete, malformed, cross-repository, ambiguous, or base-mismatched stack metadata fails closed.
- [ ] CI-agent tests, workflow contract tests, preflight, source-size checks, Cortex audit, pre-push, exact-head review, hosted readiness, and squash merge pass.

## Progress

- The full 1,904-line feature head is ready for preservation on this successor.
- Initial branch/base plumbing passed 101 CI-agent tests and focused preflight,
  but exact-head review correctly blocked trusted PR-head execution and the
  missing retargeted-main state.

## Findings and decisions

- This is the second passive Gizmo record because the complete dependent feature
  is now expected to exceed 2,000 lines, not because another Team Agent joined.
- The predecessor owns policy and plan validation; this successor owns only the
  trusted executable stack lifecycle.
- Gizmo Prime owns native stack registration, retargeting, validation, and
  bottom-up merge.

## References

- [Feature index](README.md)
- [Predecessor issue](gizmo-prime-pr-slice-controllers.md)
- [Superseding stack plan](../../plans/gizmo-multi-team-delivery/20260829T081602Z-adaptive-policy-native-stack-superseding.md)
