---
title: Extract PR Steward into an independent Team Agent context
feature: agent-orchestration
issue: null
started_at: 2026-09-06T07:22:14Z
agent: codex
gizmo_id: pr-steward-agent
supersedes: plans/agent-orchestration/20260906T070428Z-pr-steward-agent.md
---

# Extract PR Steward into an independent Team Agent context

## Interpreted request

Create PR Steward as a genuine Team Agent with a separate context boundary.
Keep its growing pull-request knowledge out of Gizmo Prime and other functional
team contexts. Retain a cost-efficient fixed model profile and a narrow parent
handoff contract.

## Requirements

- Give PR Steward its own `AGENTS.md`, knowledge graph, and focused authority
  documents.
- Route PR Steward as a real Team Agent context rather than a Gizmo workflow or
  skill.
- Dispatch PR Steward with `gpt-5.6-luna` and `xhigh` reasoning effort.
- Move pull-request creation, metadata upkeep, review and check observation,
  reruns, readiness evidence, squash merge, and merge verification into that
  context.
- Keep Gizmo Prime responsible for mission scope, shared-branch sequencing,
  repair routing, Workbench completion, and the final delivery verdict.
- Keep technical review disposition and repair implementation with the owning
  functional Team Agent.
- Make the authorization boundary fail closed and avoid a second scheduler or
  durable lifecycle engine.

## Constraints and exclusions

- PR Steward is an operational Team Agent identity, not a product-engineering
  owner.
- Do not model PR Steward as a skill or keep its growing knowledge inside the
  Gizmo context.
- Do not give PR Steward product implementation, review-adjudication,
  Workbench-planning, or mission-scope authority.
- Do not add fallback, recovery, compatibility, or scheduled-task behavior.
- Use one pull request.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: pr-steward-agent
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Cortex root routing, independent PR Steward Team Agent context, Gizmo handoff contracts, PR workflow references, Team Agent catalog, and delegation visualization
- Ownership units:
1. Capability: Independent PR Steward Team Agent context and execution profile; Gizmo ID: pr-steward-agent; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Root routing selects a separate PR Steward context, its graph contains PR-only authorities, and focused audits pass
2. Capability: Delegated pull-request lifecycle execution; Gizmo ID: pr-steward-agent; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head PR operations use the PR Steward context while Gizmo retains final authorization and verdict authority
- Public or cross-module interfaces: Gizmo-to-PR-Steward authorization and evidence handoff; Team Agent context routing, identity, model profile, and activity token
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Extract PR Steward into its own Team Agent context with bounded PR lifecycle authority; Acceptance evidence: focused Loom tests and Cortex audits, pre-push hygiene, exact-head hosted validation, review resolution, and readiness audit
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: pr-steward-agent; Gizmo name: Independent PR Steward Team Agent; Predecessor Gizmo ID: None; Extract PR Steward into its own Team Agent context with bounded PR lifecycle authority; Estimated authored changed lines: 650; Acceptance evidence: focused Loom tests and Cortex audits, pre-push hygiene, exact-head hosted validation, review resolution, and readiness audit

## Initial plan

1. Replace the Gizmo-owned workflow-local role with an independent PR Steward
   Team Agent context.
2. Move detailed pull-request authority into that context and leave Gizmo with
   only the narrow dispatch and verdict seam.
3. Update typed team-context routing and delegation visualization for the new
   operational identity and fixed Luna xhigh profile.
4. Run focused checks and repository pre-push hygiene.
5. Publish one pull request, complete exact-head review and validation,
   squash-merge, and publish Workbench completion records.

## Completion evidence

- Root Cortex routing selects PR Steward independently of Gizmo and the five
  product-engineering teams.
- PR Steward has its own complete entry point and knowledge graph.
- The fixed `gpt-5.6-luna` and `xhigh` profile is represented and tested.
- Focused owner checks and repository pre-push hygiene pass.
- The exact pull-request head passes required hosted validation and readiness.
- The pull request is squash-merged and its Workbench worklog is published.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
