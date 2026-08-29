---
title: "Gizmo Prime and named PR-slice Gizmos"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-29T06:18:08Z
updated_at: 2026-08-29T06:40:09Z
source_issues: []
related_prs: []
depends_on: []
---

# Gizmo Prime and named PR-slice Gizmos

## Context

This explicitly authorized follow-up extends
[Gizmo multi-team delivery](README.md) with a bounded hierarchy for large
features. Existing Loom foundations validate task attempts and module-delivery
evidence, but Cortex still fails ordinary multi-team dispatch closed because the
generic delegation path lacks the complete canonical ownership, claims,
frontier, admission, and disposition contract.

## Outcome

One Gizmo Prime assigns each feature to one named Gizmo by default. Multiple
Team Agents may contribute to that Gizmo's single pull request. Only when the
feature is expected to exceed or actually grows beyond 2,000 authored changed
lines does Gizmo Prime split it at semantic boundaries and create additional
Gizmos, one per pull-request slice. Gizmo Prime accepts exact-head handoffs,
owns any native GitHub stack, and may issue corrected contracts only to Gizmos
that have not started; active work requires a new immutable generation.

## Scope

- Restore executable ordinary delegation with closed team identities, exact
  frontiers, bounded resource claims, deterministic admission, leases,
  disposition, provider evidence, and fail-closed validation.
- Add a typed Gizmo Prime mission plan with one Gizmo by default, unique Gizmo
  names, exactly one PR slice per Gizmo, dependency order, stable interfaces, a
  one-level controller hierarchy, and explicit Team Agent task ownership.
- Make cardinality adaptive: Team Agent count cannot create pull requests;
  additional Gizmos require a semantic split caused by the measured 2,000-line
  ceiling or a genuinely independent delivery boundary.
- Add typed exact-head Gizmo handoffs containing PR identity, base and head
  commits, authored changed-line count, validation and review verdicts,
  interface changes, discovered dependencies, and downstream corrections.
- Permit Gizmo Prime to refine only unstarted downstream Gizmo contracts.
  Reject mutation of active or accepted Gizmos and reject nested Gizmo creation.
- Keep branch, stack, integration, readiness, merge, and complete-feature state
  under Gizmo Prime.

## Acceptance criteria

- [ ] Ordinary multi-team delegation no longer relies on a knowingly incomplete validator.
- [ ] Every Team Agent attempt is admitted through the harness against one immutable Gizmo-owned slice contract.
- [ ] Every Gizmo has a unique stable name and exactly one pull-request slice.
- [ ] A small feature remains one Gizmo and one pull request even when multiple Team Agents contribute.
- [ ] A feature above 2,000 authored changed lines is split into semantic, individually estimated Gizmo slices at or below the ceiling.
- [ ] A Gizmo cannot create another Gizmo or mutate another slice.
- [ ] Exact-head handoffs reject stale bases, oversized slices, incomplete checks, unresolved blocking review, or undeclared interface changes.
- [ ] Accepted handoffs may refine unstarted downstream contracts through a new generation, never by mutating active work.
- [ ] Gizmo Prime alone controls the native GitHub stack and final completion verdict.
- [ ] Focused adversarial tests, complete Loom verification, Cortex audit, pre-push, hosted validation, review, and readiness pass for each stacked slice.

## Progress

- The 2,000-line budget and native stacked-PR policy is implemented locally as
  the intended bottom slice and has passed focused validation except for one
  AI ownership wording fix currently routed to the AI owner.
- A preserved ordinary-delegation implementation exists for analysis but must
  be rebased, reviewed, and split below the new ceiling before reuse.

## Findings and decisions

- Gizmo Prime is the single mission owner and stack integrator.
- A named Gizmo is an orchestration role, not a sixth engineering team.
- Feature-to-Gizmo cardinality defaults to one; Team Agent count is independent
  from PR count, and size-driven splitting creates the minimum useful Gizmos.
- Controller depth is exactly one beneath Gizmo Prime; Team Agent task depth is
  tracked separately and cannot grant controller-creation authority.
- Human-readable names use `Gizmo: <Slice Name>` and are paired with immutable
  identifiers such as `gizmo:<slice-slug>`.
- The active harness remains the only process-lifecycle authority.
- The earlier `Micro-Gizmo` label is superseded and must not appear in the
  product contract or implementation.

## References

- [Current delegation policy](https://github.com/meta-secret/nook/blob/main/.cortex/gizmo/workflows/subagent-delegation.md)
- [Prior multi-team delivery feature](README.md)
- [PR-size follow-up](../pr-delivery-efficiency/two-thousand-line-stacks.md)
- [Superseded naming record](micro-gizmo-pr-controllers.md)
