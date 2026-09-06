---
title: Extract pull-request operations into PR Steward
feature: agent-orchestration
issue: null
started_at: 2026-09-06T07:04:28Z
agent: codex
gizmo_id: pr-steward-agent
---

# Extract pull-request operations into PR Steward

## Interpreted request

Separate routine pull-request delivery work from Gizmo Prime. Introduce one
specialized PR Steward Team Agent for GitHub pull-request operations. Give the
agent a cost-efficient fixed execution profile while Gizmo retains mission
authority and functional teams retain implementation decisions.

## Requirements

- Name the dedicated Team Agent PR Steward.
- Dispatch PR Steward with `gpt-5.6-luna` and `xhigh` reasoning effort.
- Move pull-request creation, metadata upkeep, review and check observation,
  reruns, readiness evidence, squash merge, and merge verification to PR
  Steward.
- Keep Gizmo Prime responsible for mission scope, shared-branch sequencing,
  repair routing, Workbench completion, and the final delivery verdict.
- Keep technical review disposition and repair implementation with the owning
  functional Team Agent.
- Make the authorization boundary fail closed and avoid a second scheduler or
  durable lifecycle engine.

## Constraints and exclusions

- Do not create a sixth engineering team merely to host delivery mechanics.
- Do not give PR Steward product implementation, review-adjudication,
  Workbench-planning, or mission-scope authority.
- Do not add fallback, recovery, compatibility, or scheduled-task behavior.
- Keep the change to the smallest coherent Cortex and directly required Loom
  contract surface.
- Use one pull request.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: pr-steward-agent
- Estimated authored changed lines: 450
- Owning modules, packages, or layers: Cortex root routing, Gizmo delivery contracts, PR workflow, Team Agent delegation, and directly required Loom identity validation
- Ownership units:
1. Capability: PR Steward Team Agent authority and execution profile; Gizmo ID: pr-steward-agent; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex policy consistently defines the narrow role and Luna xhigh profile, with focused audits passing
2. Capability: Delegated pull-request lifecycle execution; Gizmo ID: pr-steward-agent; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head PR operations are delegated to PR Steward while Gizmo retains final authorization and verdict authority
- Public or cross-module interfaces: Gizmo-to-PR-Steward authorization and evidence handoff; Team Agent identity and activity token when required
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 450
- Current PR slice and acceptance evidence: Extract the complete mechanical PR lifecycle into one bounded specialized Team Agent; Acceptance evidence: focused Loom tests or audits, pre-push hygiene, exact-head hosted validation, review resolution, and readiness audit
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: pr-steward-agent; Gizmo name: PR Steward extraction; Predecessor Gizmo ID: None; Extract the complete mechanical PR lifecycle into one bounded specialized Team Agent; Estimated authored changed lines: 450; Acceptance evidence: focused Loom tests or audits, pre-push hygiene, exact-head hosted validation, review resolution, and readiness audit

## Initial plan

1. Inventory every current Gizmo pull-request responsibility and its dependent
   ownership rule.
2. Define PR Steward as a special Gizmo-owned operational Team Agent with a
   fixed Luna xhigh profile.
3. Move mechanical PR actions behind an explicit Gizmo authorization and
   evidence-return boundary.
4. Update nearby Cortex and directly required Loom enforcement so the
   contracts remain consistent.
5. Run focused checks, publish one pull request, complete exact-head review and
   validation, squash-merge, and publish Workbench completion records.

## Completion evidence

- Cortex names one PR Steward role and no duplicate PR executor.
- The role's model and reasoning profile are explicit and mechanically
  representable where applicable.
- Focused owner checks and repository pre-push hygiene pass.
- The exact pull-request head passes required hosted validation and readiness.
- The pull request is squash-merged and its Workbench worklog is published.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
