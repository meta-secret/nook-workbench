---
title: "Deliver adaptive one-Gizmo-default PR policy"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/gizmo-prime-pr-slice-controllers.md
started_at: 2026-08-29T07:00:56Z
agent: codex
---

# Deliver adaptive one-Gizmo-default PR policy

This immutable plan supersedes
`20260829T064009Z-adaptive-gizmo-feature-delivery-superseding.md` after source
inspection proved that no ordinary-delegation runtime change is required.

## Interpreted request

Make Gizmo Prime the mission owner and create one named Gizmo and one PR per
feature by default. Create additional Gizmos only when measured semantic work
must be split above 2,000 authored changed lines or is genuinely independent.
Team Agent count must never determine PR count.

## Requirements

- Enforce one named Gizmo per PR slice and one Gizmo by default for one feature.
- Permit multiple Team Agent ownership units to map to the same Gizmo.
- Require unique Gizmo IDs and names, complete per-slice estimates, exact total
  coverage, and current-slice identity.
- Permit exactly 2,000 authored changed lines as one PR and require native
  stacked PRs only above that ceiling.
- Keep all GitHub, Workbench, readiness, and merge lifecycle with Gizmo Prime.
- Reject nested Gizmos and invalid stacked predecessor chains.

## Constraints and exclusions

- Do not restore or modify ordinary-delegation or module-delivery runtime APIs.
- Do not create one PR per Team Agent or engineering team.
- Do not introduce a scheduler, daemon, durable task store, Hive coupling, or
  third-party stacking tool.
- Preserve historical Workbench compatibility for the legacy `Gizmo` owner
  label while requiring the new mapping for newly published plans.

### Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-adaptive-pr-policy
- Estimated authored changed lines: 1,129
- Owning modules, packages, or layers: Cortex delivery authority, Workbench plan validation, agent planning prompt, preflight validation
- Ownership units:
1. Capability: Adaptive Gizmo plan and PR-size contract; Gizmo ID: gizmo-adaptive-pr-policy; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Workbench and preflight contract tests pass
2. Capability: Integrated pull request delivery; Gizmo ID: gizmo-adaptive-pr-policy; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review, hosted validation, readiness, and merge complete
- Public or cross-module interfaces: Workbench plan validation contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1,129
- Current PR slice and acceptance evidence: Enforce the 2,000-line ceiling and adaptive one-Gizmo-default delivery; Acceptance evidence: Workbench tests, preflight tests, source-size checks, Cortex audit, pre-push, exact-head review, and hosted readiness pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-adaptive-pr-policy; Gizmo name: Adaptive PR policy; Predecessor Gizmo ID: None; Enforce the 2,000-line ceiling and adaptive one-Gizmo-default delivery; Estimated authored changed lines: 1,129; Acceptance evidence: Workbench tests, preflight tests, source-size checks, Cortex audit, pre-push, exact-head review, and hosted readiness pass

## Initial plan

1. Integrate the AI-owned policy and validator handoff.
2. Run focused, complete, source-size, Cortex, pre-push, and exact-head review.
3. Open one PR because the complete feature remains below 2,000 authored lines.
4. Complete hosted validation, readiness, merge, and Workbench closeout.

## Completion evidence

- A 200-line feature with multiple Team Agent units validates as one Gizmo and one PR.
- Plans reject multiple Gizmos for one PR, missing or duplicate mappings,
  oversized slices, estimate gaps, invalid predecessors, and nested Gizmos.
- The complete 1,129-line exact head passes review and repository gates.
- The one required PR merges and the feature record closes.

## Safety review

This record contains only public development contracts. It contains no raw
prompt, chat transcript, secrets, private data, raw logs, local paths, internal
addresses, or unnecessary infrastructure details.
