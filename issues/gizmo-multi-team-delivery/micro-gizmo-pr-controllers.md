---
title: "Named Micro-Gizmo PR controllers"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-29T06:12:27Z
updated_at: 2026-08-29T06:12:27Z
source_issues: []
related_prs: []
depends_on: []
---

# Named Micro-Gizmo PR controllers

## Context

This follow-up extends [Gizmo multi-team delivery](README.md) with a bounded
hierarchy for large features. It is explicitly authorized as a major
orchestration direction. Existing Loom foundations validate task attempts and
module-delivery evidence, but Cortex still fails ordinary multi-team dispatch
closed because the generic delegation path lacks the complete canonical
ownership, claims, frontier, admission, and disposition contract.

## Outcome

One main Gizmo decomposes a feature into semantic pull-request slices and
assigns each slice to a uniquely named Micro-Gizmo. Each Micro-Gizmo coordinates
only its declared team-worker DAG and returns an exact-head PR handoff. The main
Gizmo accepts those handoffs, owns the GitHub stack, and may issue corrected
contracts only to controllers that have not started; active work requires a
new immutable generation.

## Scope

- Restore executable ordinary delegation with closed team identities, exact
  frontiers, bounded resource claims, deterministic admission, leases,
  disposition, provider evidence, and fail-closed validation.
- Add a typed Micro-Gizmo mission plan with unique names, exactly one PR slice
  per controller, dependency order, stable interfaces, a one-level controller
  hierarchy, and explicit worker-task ownership.
- Add typed exact-head controller handoffs containing the PR identity, base and
  head commits, authored changed-line count, validation and review verdicts,
  interface changes, discovered dependencies, and downstream corrections.
- Permit the main Gizmo to refine only unstarted downstream controller
  contracts. Reject mutation of active or accepted controllers and reject
  nested Micro-Gizmo creation.
- Keep branch, stack, integration, readiness, merge, and complete-feature state
  under the main Gizmo.

## Acceptance criteria

- [ ] Ordinary multi-team delegation no longer relies on a knowingly incomplete validator.
- [ ] Every worker attempt is admitted through the harness against one immutable controller-owned slice contract.
- [ ] Every Micro-Gizmo has a unique stable name and exactly one pull-request slice.
- [ ] A Micro-Gizmo cannot create another Micro-Gizmo or mutate another slice.
- [ ] Exact-head handoffs reject stale bases, oversized slices, incomplete checks, unresolved blocking review, or undeclared interface changes.
- [ ] Accepted handoffs may refine unstarted downstream contracts through a new generation, never by mutating active work.
- [ ] The main Gizmo alone controls the native GitHub stack and final completion verdict.
- [ ] Focused adversarial tests, complete Loom verification, Cortex audit, pre-push, hosted validation, review, and readiness pass for each stacked slice.

## Progress

- The 2,000-line budget and native stacked-PR policy is implemented locally as
  the intended bottom slice and has passed focused validation.
- A preserved ordinary-delegation implementation exists for analysis but must
  be rebased, reviewed, and split below the new ceiling before reuse.

## Findings and decisions

- Micro-Gizmo is an orchestration role, not a sixth engineering team.
- Controller depth is exactly one beneath the main Gizmo; worker-task depth is
  tracked separately and cannot grant controller-creation authority.
- Human-readable names use `micro-gizmo:<slice-slug>` and are paired with an
  immutable mission-local identifier.
- The active harness remains the only process-lifecycle authority.

## References

- [Current delegation policy](https://github.com/meta-secret/nook/blob/main/.cortex/gizmo/workflows/subagent-delegation.md)
- [Prior multi-team delivery feature](README.md)
- [PR-size follow-up](../pr-delivery-efficiency/two-thousand-line-stacks.md)
