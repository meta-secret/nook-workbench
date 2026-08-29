---
title: "Gizmo Prime and named PR-slice Gizmos"
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-29T06:18:08Z
updated_at: 2026-08-29T07:15:30Z
source_issues: []
related_prs: []
depends_on: []
---

# Gizmo Prime and named PR-slice Gizmos

## Context

This explicitly authorized follow-up extends
[Gizmo multi-team delivery](README.md) with adaptive feature-to-PR ownership.
It is a delivery-plan control change, not a replacement worker-admission
runtime. Existing module-delivery enforcement remains authoritative for real
module DAGs, and unsupported ordinary multi-team delegation remains fail-closed.

## Outcome

One Gizmo Prime assigns each feature to one named passive Gizmo record by
default. Multiple Team Agents may contribute to that record's single pull
request. Only when the
feature is expected to exceed or actually grows beyond 2,000 authored changed
lines does Gizmo Prime split it at semantic boundaries and create additional
Gizmo records, one per pull-request slice. Gizmo Prime routes existing Team
Agent attempts by Gizmo ID, accepts their handoffs directly, aggregates the
slice evidence, and owns any native GitHub stack.

## Scope

- Add a validated Gizmo Prime mission plan with one passive Gizmo record by
  default, unique Gizmo names, exactly one PR slice per record, dependency
  order, stable interfaces, and explicit Team Agent task ownership.
- Make cardinality adaptive: Team Agent count cannot create pull requests;
  additional Gizmos require a semantic split caused by the measured 2,000-line
  ceiling or a genuinely independent delivery boundary.
- Require every ownership unit to map to one declared Gizmo while permitting
  multiple Team Agent units to contribute to the same Gizmo-owned PR.
- Validate unique Gizmo identities and names, consecutive stacked predecessors,
  complete estimate coverage, current-slice identity, and nesting rejection.
- Keep branch, stack, integration, readiness, merge, and complete-feature state
  under Gizmo Prime.

## Acceptance criteria

- [x] Every Gizmo has a unique stable name and exactly one pull-request slice.
- [x] A small feature remains one Gizmo and one pull request even when multiple Team Agents contribute.
- [x] A feature above 2,000 authored changed lines requires semantic, individually estimated Gizmo slices at or below the ceiling.
- [x] Every ownership unit maps to one declared Gizmo; Team Agent count cannot determine PR count.
- [x] A Gizmo record cannot create or nest another Gizmo and has no process lifecycle.
- [x] Exactly 2,000 authored changed lines remains valid as one PR; 1,500 remains the split-planning warning.
- [x] Gizmo Prime alone controls native GitHub stacks and final completion.
- [ ] Exact-head local review, hosted validation, readiness, and merge pass for the one required PR.

## Progress

- The complete adaptive policy and executable Workbench mapping are implemented
  locally in one 1,195-line PR candidate.
- Workbench tests pass 94/94, preflight Workbench tests pass 17/17, source-size
  checks pass, and Cortex audit plus pre-push pass.
- Architecture review rejected restoration of the unfinished ordinary-
  delegation runtime as unnecessary duplication for this feature.

## Findings and decisions

- Gizmo Prime is the single mission owner and stack integrator.
- A named Gizmo is a passive immutable PR-slice ownership record, not a running
  controller, worker attempt, or sixth engineering team.
- Feature-to-Gizmo cardinality defaults to one; Team Agent count is independent
  from PR count, and size-driven splitting creates the minimum useful Gizmos.
- Gizmo Prime alone coordinates Team Agents and receives their existing typed
  handoffs; the record introduces no intermediate transport or lifecycle.
- Human-readable names use `Gizmo: <Slice Name>` and are paired with immutable
  identifiers such as `gizmo:<slice-slug>`.
- The active harness remains the only process-lifecycle authority.
- Ordinary-delegation and module-delivery runtime APIs are intentionally
  unchanged; this feature is enforced through the mandatory Workbench plan.
- The earlier `Micro-Gizmo` label is superseded and must not appear in the
  product contract or implementation.

## References

- [Current delegation policy](https://github.com/meta-secret/nook/blob/main/.cortex/gizmo/workflows/subagent-delegation.md)
- [Prior multi-team delivery feature](README.md)
- [PR-size follow-up](../pr-delivery-efficiency/two-thousand-line-stacks.md)
- [Superseded naming record](micro-gizmo-pr-controllers.md)
