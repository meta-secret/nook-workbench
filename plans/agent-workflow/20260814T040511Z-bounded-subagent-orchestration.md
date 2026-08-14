---
title: Define bounded subagent orchestration policy
feature: agent-workflow
issue: none
started_at: 2026-08-14T04:05:11Z
agent: codex
---

# Define bounded subagent orchestration policy

## Interpreted request

Establish a durable Nook policy for using multiple AI workers when a task has
independent reasoning units. Clarify the boundary between Cortex policy,
deterministic tools, agent graph scheduling, and isolated execution.

## Requirements

- Audit current Cortex manuals for safe delegation candidates.
- Define a mandatory delegation threshold based on independence and ownership.
- Keep one delivery owner responsible for integration and external mutations.
- Preserve Loom as the mechanical tool runner.
- Assign agent graph scheduling to the existing Minds architecture.
- Identify a low-risk pilot and an incremental adoption sequence.

## Constraints and exclusions

- Do not enable concurrent writes in one shared worktree.
- Do not delegate Workbench, branch, pull-request, review, or merge mutations.
- Do not implement the Minds scheduler in this documentation slice.
- Do not reintroduce a nested hierarchy of subagent instruction files.

## Change budget and PR sequence

- Estimated authored changed lines: 360
- Owning modules, packages, or layers: Cortex agent workflow policy and agent architecture references
- Public or cross-module interfaces: Markdown delegation decision contract and Minds, Loom, and Hive responsibility boundary
- Delivery shape: One PR
- Current PR estimated authored changed lines: 360
- Current PR slice and acceptance evidence: Delegation policy and architecture links; Acceptance evidence: Cortex audit and pre-push validation pass
- PR slices and acceptance evidence: Delegation policy and architecture links; Acceptance evidence: Cortex audit and pre-push validation pass

## Initial plan

1. Reconcile the manual audit with current Loom, Minds, Lace, and Hive code.
2. Add one canonical delegation workflow with explicit decision and ownership rules.
3. Link the policy from the Cortex entry point and relevant architecture docs.
4. Document the read-only pilot and later deterministic workflow sequence.
5. Run repository-owned documentation and pre-push checks.

## Completion evidence

- Cortex names one unambiguous delegation threshold.
- Cortex identifies one delivery owner and bounded child-worker permissions.
- The architecture assigns policy, tools, scheduling, and isolation to distinct layers.
- Documentation checks and host-applied pre-push validation succeed.

## Safety review

- This record contains only public-safe development context.
- The plan is a synthesized engineering record.
