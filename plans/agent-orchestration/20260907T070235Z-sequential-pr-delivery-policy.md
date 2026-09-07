---
title: Replace oversized and stacked delivery with sequential PRs
feature: agent-orchestration
issue: null
started_at: 2026-09-07T07:02:35Z
agent: codex
gizmo_id: sequential-pr-delivery-policy
---

# Replace oversized and stacked delivery with sequential PRs

## Interpreted request

Make bounded feature delivery the default when a complete implementation cannot
fit safely within one pull request. Require the agent to simplify the design,
identify independently useful capability slices, and complete each pull request
through merge before implementation of its successor begins. Remove stacked
pull-request complexity from active planning and validation contracts.

## Requirements

- Preserve the hard 2,000-authored-addition limit for every pull request.
- Prefer one pull request when the complete feature fits the limit cleanly.
- Redesign an oversized feature into the smallest ordered set of independently
  useful and mergeable capability slices.
- Require each slice to have its own acceptance evidence and Workbench state.
- Start each successor from current `origin/main` only after its predecessor is
  squash-merged and remotely verified.
- Align Cortex policy, the implementation-agent prompt, plan admission, and
  focused tests with the sequential model.
- Deliver this policy change through exact-head validation, readiness, squash
  merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not permit stacked branches or successor pull requests based on an
  unmerged predecessor.
- Do not use splitting to preserve an overbuilt design or evade the size limit.
- Do not fragment a feature that already fits cleanly within one pull request.
- Do not begin later-slice implementation before the current slice is merged.
- Keep this governance and validator change inside one pull request.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: sequential-pr-delivery-policy
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Gizmo pull-request and Workbench planning policy, AI implementation-agent prompt, Workbench plan admission, focused preflight contracts
- Ownership units:
1. Capability: Sequential feature-delivery policy and plan admission; Gizmo ID: sequential-pr-delivery-policy; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex semantic review and focused Workbench record tests prove one-PR and independent sequential multi-PR plans while rejecting stacked or invalid sequences
- Public or cross-module interfaces: Workbench plan fields for delivery shape, PR sequence mode, current slice, predecessor, estimates, and acceptance evidence
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Align policy, prompt, plan admission, and tests with sequential pull-request delivery; Acceptance evidence: focused Workbench admission tests, preflight contract tests, Cortex audit, exact-head hosted validation, readiness, and remote merge verification
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: sequential-pr-delivery-policy; Gizmo name: Sequential PR delivery policy; Predecessor Gizmo ID: None; Align policy, prompt, plan admission, and tests with sequential pull-request delivery; Estimated authored changed lines: 650; Acceptance evidence: focused Workbench admission tests, preflight contract tests, Cortex audit, exact-head hosted validation, readiness, and remote merge verification

## Initial plan

1. Replace one-PR-only and stacked-delivery guidance with a bounded decision
   rule for one PR or independent sequential PRs.
2. Update plan admission and implementation prompts to accept only valid
   sequential slices and reject stacked or unmerged-predecessor delivery.
3. Add focused behavior coverage for valid and invalid plan shapes.
4. Validate and complete the exact-head pull-request lifecycle.

## Completion evidence

- Cortex policy consistently requires redesign before sequential decomposition.
- Workbench plan admission accepts a valid ordered independent-PR plan.
- Admission rejects stacked mode, oversized slices, and invalid predecessor
  ordering.
- Focused tests and exact-head hosted checks pass.
- The pull request is squash-merged and Workbench completion is visible.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
