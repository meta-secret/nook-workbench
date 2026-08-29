---
title: "Finalize adaptive Gizmo delivery as a three-PR native stack"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/trusted-stacked-pr-workflow.md
started_at: 2026-08-29T12:50:15Z
agent: codex
gizmo_id: gizmo-stacked-pr-workflow
---

# Finalize adaptive Gizmo delivery as a three-PR native stack

This immutable plan supersedes
`20260829T081602Z-adaptive-policy-native-stack-superseding.md`. Exact-head
review separated trusted workflow integration from the CI-agent runtime before
that runtime could cross the 2,000-line ceiling. GitHub stack 1200 now contains
three semantic Gizmo slices.

## Interpreted request

Deliver the adaptive Gizmo Prime policy through a bounded native stack whose
three pull requests independently own policy, typed delivery runtime, and
trusted workflow integration. Preserve the exact reviewed boundaries and merge
them bottom-up without turning Team Agent count into pull-request count.

## Requirements

- Keep every PR at or below 2,000 authored additions plus deletions.
- Preserve one passive immutable Gizmo record for each semantic PR slice.
- Keep the policy and plan-validator foundation in PR 1198.
- Keep typed stacked state, strict edit/deliver behavior, artifact exclusion,
  base-relative budgeting, and runtime behavior tests in PR 1199.
- Keep workflow-SHA setup, isolated implementation checkout, no-runtime ARC
  formatting, secure task transport, no-op gating, and trusted publication in
  PR 1201.
- Retain exact predecessor order and revalidate successors after each bottom-up
  squash merge and retarget to main.

## Constraints and exclusions

- Gizmo Prime is the sole stack, readiness, merge, and completion owner.
- Feature-slice Gizmos remain passive Workbench records with no worker or
  lifecycle authority.
- The third Gizmo exists because review revealed a distinct semantic layer that
  would exceed the runtime PR budget, not because of Team Agent cardinality.
- Do not add Docker, Podman, nested runtimes, Task setup, registry access, or a
  third-party stack manager to the implementation workflow.
- Do not edit earlier immutable plans, add completion worklogs or statistics
  before merge, or mark any of the three focused issues done while PRs remain
  unmerged.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-stacked-pr-workflow
- Estimated authored changed lines: 4,703
- Owning modules, packages, or layers: Cortex delivery policy, Workbench plan validation, CI-agent implementation runtime, agent implementation workflow, direct-host formatter integration, preflight contract tests
- Ownership units:
1. Capability: Adaptive passive Gizmo policy, canonical identity, and PR-budget plan validation; Gizmo ID: gizmo-adaptive-pr-policy; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Workbench validator, policy, preflight, source-size, Cortex, exact-head, and hosted checks pass for PR 1198
2. Capability: Typed stacked PR targets, strict edit and trusted delivery runtime, artifact exclusion, base-relative budgeting, and adversarial state validation; Gizmo ID: gizmo-stacked-pr-runtime; Functional owner: SRE; Expertise provider: AI; Expertise allowed code paths: agentic-ai/ci-agent/src/main; Expertise allowed test paths: agentic-ai/ci-agent/src/test; Expertise forbidden paths: .github/workflows/agent-implement.yml,.github/scripts/ci-agent-plan.sh,.github/scripts/ci-agent-change-detect.sh; Expertise consumer interfaces: implement,edit,deliver,AGENT_PR_TARGET_KIND,AGENT_PR_BASE_BRANCH,AGENT_PR_BASE_SHA; Expertise acceptance evidence: CI-agent behavior tests pass; Capability acceptance evidence: Focused preflight, source-size, exact-head, and hosted checks pass for PR 1199
3. Capability: Workflow-SHA planning, isolated strict editing, trusted direct-host formatting and delivery, secure environment transport, and standalone no-op publication; Gizmo ID: gizmo-stacked-pr-workflow; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: CI-agent plan, edit, and deliver commands plus validated Workbench plan artifact; Expertise acceptance evidence: None; Capability acceptance evidence: Workflow contract, environment-injection, change-detection, CI-agent, preflight, source-size, formatting, Cortex, exact-head, and hosted checks pass for PR 1201
4. Capability: Native stack integration, successor retargeting, exact-head readiness, and bottom-up squash merge; Gizmo ID: gizmo-stacked-pr-workflow; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: PRs 1198, 1199, and 1201 pass exact-head readiness and merge in order without losing successor identity
- Public or cross-module interfaces: Workbench plan and focused-issue schema; CI-agent plan, edit, implement, and deliver commands; AGENT_PR target and exact-frontier environment contract
- Delivery shape: Multiple PRs
- PR sequence mode: Stacked PRs
- Current PR estimated authored changed lines: 1,112
- Current PR slice and acceptance evidence: Integrate the strict editor and typed stacked runtime into the trusted no-container workflow, harden task environment transport and standalone no-op gating, and apply formatting before credentialed delivery; Acceptance evidence: PR 1201 exact-head CI-agent, Workbench, source-size, formatting, Cortex, security review, hosted validation, and readiness pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-adaptive-pr-policy; Gizmo name: Adaptive PR policy; Predecessor Gizmo ID: None; Enforce passive Gizmo identity, adaptive one-PR defaults, 1,500-line split review, 2,000-line ceiling, and plan/issue validation; Estimated authored changed lines: 1,995; Acceptance evidence: PR 1198 Workbench validator, preflight, source-size, Cortex, exact-head, hosted validation, and readiness pass
2. Gizmo ID: gizmo-stacked-pr-runtime; Gizmo name: Trusted stacked PR runtime; Predecessor Gizmo ID: gizmo-adaptive-pr-policy; Provide typed standalone/stacked targets, compatible monolithic implement plus explicit edit/deliver phases, exact state validation, artifact exclusion, base-relative budgeting, and preservation-before-rejection; Estimated authored changed lines: 1,596; Acceptance evidence: PR 1199 CI-agent behavior tests, focused preflight, source-size, Cortex, exact-head, hosted validation, and readiness pass
3. Gizmo ID: gizmo-stacked-pr-workflow; Gizmo name: Trusted stacked PR workflow; Predecessor Gizmo ID: gizmo-stacked-pr-runtime; Pin workflow-SHA tooling, isolate source, run a credentialless network-denied editor, apply trusted no-runtime formatting, reject environment injection, preserve no-op/rerun state, and publish through trusted delivery; Estimated authored changed lines: 1,112; Acceptance evidence: PR 1201 workflow contract, injection/change-detection tests, CI-agent tests, preflight, source-size, formatting, Cortex, exact-head, hosted validation, and readiness pass

## Initial plan

1. Hold PR 1198 at exact head `9806aca` and validate the 1,995-line policy and
   Workbench foundation.
2. Hold PR 1199 at exact head `037a66c` on the policy branch and validate the
   1,596-line typed runtime and behavior-test boundary.
3. Hold PR 1201 at exact head `e6fbd837` on the runtime branch and validate the
   1,112-line trusted workflow integration boundary.
4. Squash-merge bottom-up, retarget each successor to current main after its
   predecessor merges, and repeat exact-head hosted readiness at every changed
   base frontier.
5. Publish completion worklogs and PR statistics only after each corresponding
   merge; close the feature only after the third merge is verified.

## Completion evidence

- GitHub stack 1200 retains PR order 1198, 1199, then 1201 with the recorded
  branch and predecessor identities.
- Exact authored sizes remain 1,995, 1,596, and 1,112, all below 2,000.
- Policy tests prove passive canonical Gizmo identity and adaptive budget rules.
- Runtime tests prove strict phase separation, exact stack state, containment,
  artifact exclusion, and oversized-branch preservation.
- Workflow tests and review prove workflow-SHA tooling, no-runtime ARC setup,
  environment-injection resistance, no-op gating, trusted formatting, and
  credentialed publication order.
- Each PR passes exact-head review, hosted validation, readiness, and bottom-up
  squash merge before its issue is completed.

## Safety review

This record contains only public development contracts, public pull requests,
branch names, abbreviated commit identities, and validation categories. It
contains no raw prompt, chat transcript, secrets, private data, raw logs, local
paths, internal addresses, or unnecessary infrastructure details.
