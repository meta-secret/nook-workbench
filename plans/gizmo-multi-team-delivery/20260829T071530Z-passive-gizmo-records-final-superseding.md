---
title: "Deliver passive adaptive Gizmo PR records"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/gizmo-prime-pr-slice-controllers.md
started_at: 2026-08-29T07:15:30Z
agent: codex
---

# Deliver passive adaptive Gizmo PR records

This immutable plan supersedes
`20260829T070056Z-adaptive-one-gizmo-default-final-superseding.md` after
exact-head review required an explicit non-process lifecycle boundary.

## Interpreted request

Make Gizmo Prime the mission owner and create one named passive Gizmo PR-slice
record per feature by default. Add records only for semantic work above 2,000
authored changed lines or genuinely independent delivery. Team Agent count must
never determine PR count.

## Requirements

- Enforce one immutable named Gizmo record per PR slice and one by default.
- Permit multiple Team Agent ownership units to map to the same Gizmo record.
- Route Team Agent attempts by Gizmo ID through the existing harness; Team
  Agents return existing handoffs directly to Gizmo Prime for aggregation.
- Require unique Gizmo IDs and names, complete estimates, exact total coverage,
  current-slice identity, and valid predecessor order.
- Permit exactly 2,000 authored changed lines as one PR and require native
  stacked PRs only above that ceiling.
- Keep all process, GitHub, Workbench, readiness, and merge lifecycle with
  Gizmo Prime and the active harness.

## Constraints and exclusions

- A Gizmo record is not a process, agent attempt, running controller, team, or
  intermediate handoff transport.
- Do not restore or modify ordinary-delegation or module-delivery runtime APIs.
- Do not create one PR per Team Agent or engineering team.
- Do not introduce a scheduler, daemon, durable task store, Hive coupling, or
  third-party stacking tool.

### Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-adaptive-pr-policy
- Estimated authored changed lines: 1,195
- Owning modules, packages, or layers: Cortex delivery authority, Workbench plan validation, agent planning prompt, preflight validation
- Ownership units:
1. Capability: Adaptive Gizmo record and PR-size contract; Gizmo ID: gizmo-adaptive-pr-policy; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Workbench and preflight contract tests pass
2. Capability: Integrated pull request delivery; Gizmo ID: gizmo-adaptive-pr-policy; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review, hosted validation, readiness, and merge complete
- Public or cross-module interfaces: Workbench plan validation contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1,195
- Current PR slice and acceptance evidence: Enforce the 2,000-line ceiling and adaptive passive one-Gizmo-record default; Acceptance evidence: Workbench tests, preflight tests, source-size checks, Cortex audit, pre-push, exact-head review, and hosted readiness pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-adaptive-pr-policy; Gizmo name: Adaptive PR policy; Predecessor Gizmo ID: None; Enforce the 2,000-line ceiling and adaptive passive one-Gizmo-record default; Estimated authored changed lines: 1,195; Acceptance evidence: Workbench tests, preflight tests, source-size checks, Cortex audit, pre-push, exact-head review, and hosted readiness pass

## Initial plan

1. Integrate the AI-owned passive-record policy and validator handoff.
2. Run focused, complete, source-size, Cortex, pre-push, and exact-head review.
3. Open one PR because the complete feature remains below 2,000 authored lines.
4. Complete hosted validation, readiness, merge, and Workbench closeout.

## Completion evidence

- A 200-line feature with multiple Team Agent units validates as one record and one PR.
- Plans reject multiple records for one PR, missing or duplicate mappings,
  oversized slices, estimate gaps, invalid predecessors, nested Gizmos, and
  process/controller semantics for slice records.
- The complete 1,195-line exact head passes review and repository gates.
- The one required PR merges and the feature record closes.

## Safety review

This record contains only public development contracts. It contains no raw
prompt, chat transcript, secrets, private data, raw logs, local paths, internal
addresses, or unnecessary infrastructure details.
