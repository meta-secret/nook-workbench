---
title: Define bounded subagent orchestration policy
feature: agent-workflow
issue: none
started_at: 2026-08-14T04:09:31Z
agent: codex
supersedes: plans/agent-workflow/20260814T041800Z-bounded-subagent-orchestration.md
---

# Define bounded subagent orchestration policy

## Interpreted request

Establish a durable Nook policy for dividing independent semantic work across
bounded AI workers. Correct current agent-runtime documentation and define an
incremental path toward machine-managed graphs.

## Requirements

- Define a mandatory delegation threshold based on independence and ownership.
- Keep one delivery owner responsible for integration and external mutations.
- Preserve Loom as the mechanical tool runner.
- Assign agent graph scheduling to the existing Minds and Lace architecture.
- Describe Hive as durable isolated execution with one task per worker.
- Identify a read-only pilot and later adoption stages.

## Constraints and exclusions

- Do not enable concurrent writes in one shared worktree.
- Do not delegate Workbench, branch, pull-request, review, or merge mutations.
- Do not implement the Minds scheduler in this documentation slice.
- Do not reintroduce a nested hierarchy of worker instruction files.

## Change budget and PR sequence

- Estimated authored changed lines: 540
- Owning modules, packages, or layers: Cortex agent workflow policy and agent runtime documentation
- Public or cross-module interfaces: Markdown delegation contract and Minds, Lace, Loom, Hive, and delivery-owner responsibility boundary
- Delivery shape: One PR
- Current PR estimated authored changed lines: 540
- Current PR slice and acceptance evidence: Delegation policy and corrected runtime architecture; Acceptance evidence: Cortex audit and pre-push validation pass
- PR slices and acceptance evidence: Delegation policy and corrected runtime architecture; Acceptance evidence: Cortex audit and pre-push validation pass

## Initial plan

1. Reconcile the manual audit with current Loom, Minds, Lace, and Hive code.
2. Add one canonical delegation workflow with explicit decision and ownership rules.
3. Add one architecture decision for policy, scheduling, tools, and isolation.
4. Correct runtime documents that overstate the current Lace implementation.
5. Run repository-owned documentation and pre-push checks.

## Completion evidence

- Cortex names one unambiguous delegation threshold.
- Cortex identifies one delivery owner and bounded child-worker permissions.
- The architecture assigns policy, tools, scheduling, and isolation to distinct layers.
- Runtime documentation matches the current implementation.
- Documentation checks and host-applied pre-push validation succeed.

## Safety review

- This record contains only public-safe development context.
- The plan is a synthesized engineering record.
