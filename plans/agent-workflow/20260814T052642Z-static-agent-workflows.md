---
title: Implement static deterministic agent workflows in Loom
feature: agent-workflow
issue: none
started_at: 2026-08-14T05:26:42Z
agent: codex
supersedes: plans/agent-workflow/20260814T041831Z-bounded-subagent-orchestration.md
---

# Implement static deterministic agent workflows in Loom

## Interpreted request

Implement a separate static agent-workflow module inside Loom. Translate stable Cortex workflow responsibilities into reviewed TypeScript graphs. Do not add a YAML workflow language or runtime graph generation.

## Requirements

- Audit every active Cortex workflow against existing Loom, Task, GitHub Actions, and Hive execution surfaces.
- Keep existing Loom YAML leaf-tool requests unchanged.
- Add a separate high-level static graph package under Loom.
- Represent tasks, agents, success edges, failure edges, explicit parallel fan-out, and branch endings with concrete TypeScript domain types.
- Keep scheduling, runtime integration, and persistence outside graph definitions.
- Start one fresh Codex worker for each reached task attempt.
- Persist parent-owned append-only lifecycle events and atomic structured results.
- Reuse existing Loom leaf tools from static graph nodes when a step is mechanical.
- Preserve Hive as the durable task and lease authority. Do not create a second durable scheduler inside a Hive worker.
- Add focused behavior tests for validation, ordering, failure routing, parallelism, cancellation, event attribution, and workflow completion.

## Constraints and exclusions

- Do not accept YAML or another external graph description.
- Do not generate graphs from prompts or Markdown at runtime.
- Do not infer parallelism from arrays or declaration order.
- Do not allow subagents to schedule successors or mutate authoritative lifecycle state.
- Do not enable concurrent writes in one worktree.
- Do not add implicit retries, loops, or hidden joins in the first implementation.
- Do not replace the current Loom leaf-tool dispatcher.
- Do not enable nested agents inside Hive Pods.

## Change budget and PR sequence

- Estimated authored changed lines: 4,200
- Owning modules, packages, or layers: Loom static agent-workflow module, focused Cortex workflow contracts, and Loom runtime documentation
- Public or cross-module interfaces: Static TypeScript workflow catalog, agent runtime interface, append-only run record interface, and a dedicated Loom agent-workflow command entrypoint
- Delivery shape: One PR
- Current PR estimated authored changed lines: 4,200
- Current PR slice and acceptance evidence: Complete static graph kernel plus reviewed Cortex workflow catalog and Codex runtime boundary; Acceptance evidence: Loom type, lint, and behavior tests, Cortex audit, exact-head hosted checks, and a read-only workflow dry run
- PR slices and acceptance evidence: Complete static graph kernel plus reviewed Cortex workflow catalog and Codex runtime boundary; Acceptance evidence: Loom type, lint, and behavior tests, Cortex audit, exact-head hosted checks, and a read-only workflow dry run

## Initial plan

1. Partition the Cortex and runtime audit into independent read-only evidence surfaces.
2. Classify Cortex steps as semantic agent tasks, deterministic Loom or Task leaves, parent-only lifecycle mutations, or unsafe graph work.
3. Adapt the Grafiko graph model into a focused Loom module with stronger typed results and explicit parent-owned event records.
4. Implement static workflow definitions only for stable, bounded, non-overlapping flows.
5. Add a replaceable runtime interface and Codex adapter without coupling the scheduler to one SDK.
6. Keep local event records as an execution projection that can later map to Hive task activities and artifacts.
7. Update Cortex to remove the YAML-manifest and dynamic-graph direction.
8. Validate, publish, review, and squash-merge the owned PR.

## Completion evidence

- No runtime workflow graph is decoded from YAML, Markdown, or a prompt.
- Graph definitions are reviewed TypeScript constants in a dedicated Loom module.
- Invalid static topology fails before any worker starts.
- Only reachable tasks run and explicit parallel successors become eligible together.
- Every reached task attempt has append-only events and one terminal structured result.
- Existing Loom request families and leaf tools remain compatible.
- Hive keeps authoritative durable readiness, leases, attempts, and results.
- Cortex and code describe the same static workflow architecture.
- The exact PR head passes repository-owned validation and readiness checks.

## Safety review

- This record contains only public-safe architecture and implementation context.
- It contains no prompt transcript, credentials, private runtime data, or raw agent output.
