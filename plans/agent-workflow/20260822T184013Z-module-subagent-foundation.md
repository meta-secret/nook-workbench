---
title: Establish the named module-subagent foundation
feature: agent-workflow
issue: issues/agent-workflow/named-module-subagent-foundation.md
started_at: 2026-08-22T18:40:13Z
agent: codex
---

# Establish the named module-subagent foundation

## Interpreted request

Create a durable local development model in which named experts understand one
Nook module or boundary, propose narrow external APIs, and later participate in
feature-specific bottom-up dependency graphs. Establish the expert identity and
knowledge-loading layer before enabling parallel writers.

## Requirements

- Add project-scoped named Codex experts aligned with real package ownership.
- Use `internal_api_expert` for Rust-to-host, WASM, generated-binding, and
  TypeScript-facing API coherence.
- Limit the first-generation topology to three hierarchy levels.
- Keep agent attempts event-sourced and parent-owned.
- Separate callable agent identity, reusable skills, Cortex knowledge, and Loom
  scheduling authority.
- Deliver the complete architecture through four ordered, independently
  mergeable PR slices.

## Constraints and exclusions

- Custom experts remain read-only in the current PR.
- Children do not create undeclared successors or grandchildren.
- Markdown does not define or drive executable topology.
- Hive is excluded from the internal development architecture.
- Shared lifecycle state remains owned by one delivery agent.

## Change budget and PR sequence

- Estimated authored changed lines: 9000
- Owning modules, packages, or layers: project Codex configuration, Cortex
  module and workflow authorities, executable skills, and Loom agent workflow.
- Public or cross-module interfaces: custom agent names, module expert profile,
  hierarchy-depth limit, module API contract, expert context bundle, accepted
  change-set contract, and module DAG execution interface.
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 2000
- Current PR slice and acceptance evidence: Named expert foundation; Acceptance evidence: agent discovery, catalog coverage, authority resolution, depth validation, focused tests, Cortex audit, exact-head hosted checks, review, and readiness
- PR slices and acceptance evidence:
1. Named expert foundation; Acceptance evidence: agent discovery, catalog coverage, authority resolution, depth validation, focused tests, Cortex audit, exact-head hosted checks, review, and readiness
2. Typed context and read-only DAG; Acceptance evidence: deterministic context hashes, contract validation, cycle and resource rejection, and stable dry-run waves
3. Isolated-write DAG; Acceptance evidence: disposable worktrees, path enforcement, accepted change sets, deterministic integration, and cleanup coverage
4. Delivery pilot; Acceptance evidence: a complete bottom-up dependency chain, bounded hierarchy, parent synthesis, exact-head validation, and readiness

## Initial plan

1. Correct package authority coverage and define the module-expert contract.
2. Add thin project-scoped custom agents and a shared executable skill.
3. Add a typed expert catalog and fail-closed validation in Loom.
4. Extend attempt evidence and depth validation without enabling writes.
5. Validate, review, merge, and update Workbench before starting slice two from
   current `origin/main`.

## Completion evidence

- Named agents and expert catalog are present on the merged Nook main branch.
- Focused Loom tests and Cortex consistency checks pass.
- Complete exact-head repository checks, review, readiness, and squash merge
  succeed.
- The feature, focused issue, linked worklog, and PR statistics are visible in
  Workbench.

## Safety review

- This record contains no prompt transcript, secrets, private data, raw logs,
  local paths, or unnecessary infrastructure details.
