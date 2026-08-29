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
updated_at: 2026-08-29T12:50:15Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1199"]
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

The CI-agent runtime exposes backward-compatible monolithic implementation plus
explicit strict edit and trusted-delivery phases, validates a linked successor
before and after predecessor merge/retarget, preserves runtime artifacts and
oversized branches safely, and measures only the current semantic slice against
its validated PR base.

## Scope

- Add typed standalone and stacked PR targets with exact branch, PR, head, base,
  and predecessor fields.
- Validate predecessor-based and authenticated retargeted-main states before
  delivery, then verify the published head and base again.
- Preserve the legacy monolithic `implement` command while exposing explicit
  strict `edit` and trusted `deliver` commands for the successor workflow.
- Keep the strict editor network-denied and credential-free; exclude validated
  plan and worklog artifacts from authored changes and delivery.
- Push and preserve an oversized implementation branch before rejecting its
  authored-line budget, measured against the validated current PR base.
- Cover accepted and adversarial standalone/stacked states with behavior tests.
- Exclude Workbench plan-cardinality policy and passive-record semantics, which
  belong to PR 1198, and workflow setup, formatting, publication, and rerun
  orchestration, which belong to PR 1201.

## Acceptance criteria

- [x] Legacy `implement` remains monolithic while explicit `edit` never performs
  credentialed delivery.
- [x] A linked successor based on its predecessor is validated and measured
  against the exact predecessor frontier.
- [x] Retargeted-main delivery requires authenticated squash-merge and current
  main-containment evidence.
- [x] Incomplete, malformed, ambiguous, stale-head, or base-mismatched runtime
  targets fail closed in behavior tests.
- [x] Oversized authored work is pushed and preserved before budget rejection;
  plan/worklog artifacts do not enter the authored change set.
- [ ] Hosted validation, exact-head readiness, and squash merge pass for PR 1199.

## Progress

- PR 1199 is bounded at 1,596 authored changed lines on exact head `037a66c` and
  remains based on the PR 1198 policy branch in GitHub stack 1200.
- Runtime behavior tests cover standalone compatibility, strict edit/deliver
  separation, native-stack adjacency, live and post-merge predecessor states,
  exact head/base drift, containment, and preservation before size rejection.
- Exact-head review separated direct-host workflow execution and formatting
  into PR 1201 rather than allowing this runtime slice to exceed 2,000 lines.

## Findings and decisions

- This is the second passive Gizmo record because the complete dependent feature
  is now expected to exceed 2,000 lines, not because another Team Agent joined.
- The predecessor owns policy and plan validation; this successor owns only the
  typed CI-agent delivery runtime and behavior evidence.
- PR 1201 owns workflow checkout, direct-host setup, formatter application,
  source-task transport, rerun orchestration, and Workbench result publication.
- Gizmo Prime owns native stack registration, retargeting, validation, and
  bottom-up merge.

## References

- [Feature index](README.md)
- [Predecessor issue](gizmo-prime-pr-slice-controllers.md)
- [Superseding stack plan](../../plans/gizmo-multi-team-delivery/20260829T081602Z-adaptive-policy-native-stack-superseding.md)
- [Final three-slice stack plan](../../plans/gizmo-multi-team-delivery/20260829T125015Z-final-three-pr-stack-superseding.md)
- [Nook PR 1199](https://github.com/meta-secret/nook/pull/1199)
