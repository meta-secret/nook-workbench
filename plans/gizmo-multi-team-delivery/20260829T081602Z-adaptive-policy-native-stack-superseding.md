---
title: "Split adaptive Gizmo delivery into a native stack"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/gizmo-prime-pr-slice-controllers.md
started_at: 2026-08-29T08:16:02Z
agent: codex
gizmo_id: gizmo-adaptive-pr-policy
---

# Split adaptive Gizmo delivery into a native stack

This immutable plan supersedes
`20260829T073932Z-canonical-gizmo-identity-final-superseding.md`. The feature
reached 1,904 authored changed lines and exact-head review identified remaining
trusted-workflow and retargeted-successor repairs that would take it beyond the
2,000-line ceiling.

## Interpreted request

Deliver the adaptive Gizmo Prime model without allowing one pull request to
grow beyond 2,000 authored additions plus deletions. Preserve the complete work
in a native GitHub stack: merge the policy and validator foundation first, then
the trusted stacked-implementation runtime.

## Requirements

- Keep one feature-slice Gizmo and one pull request by default.
- Enforce the 2,000-line ceiling and the 1,500-line split-planning warning.
- Bind focused issues and later plans to immutable canonical Gizmo IDs.
- Deliver dependent work above the ceiling as a same-repository native GitHub
  stack with one semantic Gizmo record per PR.
- Keep PR-head code separated from trusted workflow tooling and credentials.
- Support both predecessor-based successors and successors retargeted to main
  after their predecessor merges.
- Measure each successor slice against its validated current PR base.

## Constraints and exclusions

- Feature-slice Gizmos remain passive immutable Workbench records.
- Gizmo Prime remains the sole mission and PR lifecycle owner.
- Team Agent count must not determine Gizmo or PR count.
- Do not restore ordinary-delegation or modify module-delivery runtime APIs.
- Do not add a third-party stacking dependency or an informal branch chain.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: gizmo-adaptive-pr-policy
- Estimated authored changed lines: 2,183
- Owning modules, packages, or layers: Cortex delivery policy, Workbench plan validation, bounded implementation workflow, CI-agent PR targeting, preflight validation
- Ownership units:
1. Capability: Adaptive Gizmo record, canonical identity, and PR-size validation; Gizmo ID: gizmo-adaptive-pr-policy; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Workbench validator and focused preflight tests pass
2. Capability: Trusted native-stack implementation continuation and base-relative budgeting; Gizmo ID: gizmo-stacked-pr-runtime; Functional owner: SRE; Expertise provider: AI; Expertise allowed code paths: agentic-ai/ci-agent/src/main/implement.ts,agentic-ai/ci-agent/src/main/github.ts; Expertise allowed test paths: agentic-ai/ci-agent/src/test/implement.test.ts,agentic-ai/ci-agent/src/test/github.test.ts; Expertise forbidden paths: .github/scripts/workbench-records.cjs,.github/scripts/workbench-gizmo-mapping.test.cjs; Expertise consumer interfaces: AGENT_PR_TARGET_KIND,AGENT_PR_BASE_BRANCH; Expertise acceptance evidence: CI-agent target and GitHub tests pass; Capability acceptance evidence: Workflow, preflight, security-boundary, and retargeted-successor tests pass
3. Capability: Native stack integration, exact-head readiness, and bottom-up squash merge; Gizmo ID: gizmo-stacked-pr-runtime; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Both linked PRs pass hosted checks and exact-head readiness before bottom-up merge
- Public or cross-module interfaces: Workbench plan and focused-issue schema, bounded agent workflow branch and PR target environment
- Delivery shape: Multiple PRs
- PR sequence mode: Stacked PRs
- Current PR estimated authored changed lines: 1,533
- Current PR slice and acceptance evidence: Enforce the adaptive passive Gizmo model, canonical identity, and bounded plan shapes; Acceptance evidence: Workbench tests, preflight tests, source-size checks, Cortex audit, pre-push, exact-head review, and hosted readiness pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: gizmo-adaptive-pr-policy; Gizmo name: Adaptive PR policy; Predecessor Gizmo ID: None; Enforce the adaptive passive Gizmo model, canonical identity, and bounded plan shapes; Estimated authored changed lines: 1,533; Acceptance evidence: Workbench tests, preflight tests, source-size checks, Cortex audit, pre-push, exact-head review, and hosted readiness pass
2. Gizmo ID: gizmo-stacked-pr-runtime; Gizmo name: Trusted stacked PR runtime; Predecessor Gizmo ID: gizmo-adaptive-pr-policy; Continue linked successor branches with trusted tooling, validate retargeted state, and measure against the current PR base; Estimated authored changed lines: 650; Acceptance evidence: CI-agent tests, workflow contract tests, preflight tests, source-size checks, Cortex audit, pre-push, security review, and hosted readiness pass

## Initial plan

1. Preserve the complete 1,904-line head on the successor branch.
2. Register the bottom and successor branches as a native GitHub stack.
3. Reduce the bottom PR to the 1,533-line policy and validator slice.
4. Repair the trusted workflow and retargeted-successor lifecycle only in the
   successor PR.
5. Validate and squash-merge both PRs bottom-up, revalidating the successor
   against current main after retargeting.

## Completion evidence

- GitHub recognizes both PRs as one stack and the successor preserves the full
  pre-split head.
- Each PR remains below 2,000 authored changed lines.
- The first PR enforces policy, plan shape, passive Gizmo mapping, and canonical
  issue identity.
- The successor keeps privileged tooling on a trusted revision and supports
  both predecessor-based and retargeted-main continuation.
- Both exact heads pass focused tests, repository gates, review, readiness, and
  bottom-up squash merge.

## Safety review

This record contains only public development contracts and public branch
names. It contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, internal addresses, or unnecessary infrastructure details.
