---
title: Deterministic agent workflows
status: in_progress
created_at: 2026-08-14T07:26:00Z
updated_at: 2026-08-30T00:00:00Z
---

# Deterministic agent workflows

## Goal

Provide reviewed, typed, deterministic orchestration for bounded AI work while
preserving one delivery owner and one durable lifecycle authority.

## Current state

Nook has a local static TypeScript workflow engine in Loom. It validates
reviewed topology, executes read-only Codex workers, joins typed results, and
records append-only run and attempt journals. Event-sourced agent processing
merged in Nook PR #1068.

Nine stable, read-only module experts resolve their exact module, skill, and
authority context from immutable source snapshots. Typed module-DAG validation,
isolated write worktrees, verified commit handoffs, deterministic private-ref
integration, and the core-to-WASM-to-web pilot are complete. The active harness
owns subagent lifecycle. Nook owns module policy and Git safety. Hive is not
part of this internal development path.

Loom leaf tools now generate discovery YAML, decode blueprints, and defaultable
Task aliases from typed example documents. Sample YAML files under the Loom
package are gone. That slice merged in Nook PR #1045.

The remaining multi-team gap is tracked as three bounded Team Plan slices:
admission, journal, and runner. Together they form a durable adapter over the
existing module-delivery contract without adding another scheduler or model
runner.

## Decisions

- The module dependency graph is reviewed typed data, never Markdown or
  prompt-generated state.
- The active harness schedules native subagents and owns their parent-child
  tree, communication, retries, cancellation, and barriers.
- Nook does not implement another model runner, scheduler, transcript protocol,
  or harness adapter.
- One fresh isolated worktree executes each write attempt.
- The delivery parent owns commit acceptance, integration, and delivery state.
- JSONL journals and Markdown summaries are optional human evidence and never
  control execution.
- Lace is not part of the production path.
- Leaf-tool requests stay domain YAML. Canonical examples live as typed objects
  in Loom.
- Module experts are stable named roles. Current module knowledge remains in
  code and Cortex and is assembled at the exact source commit.
- Feature contracts are designed top-down. Ready module nodes execute bottom-up
  from accepted dependency baselines.
- `internal_api_expert` owns Rust-to-host, WASM, generated-binding, and
  TypeScript-facing API coherence.
- The initial hierarchy is flat and fail-closed at a maximum depth of three.
- The module dependency DAG and the single-parent attempt lineage tree are
  separate structures.

## Issues

- [x] [Address PR 1000 review findings](address-pr-1000-review-findings.md)
- [ ] [Reconcile Cortex semantic debt found by the first static workflow](cortex-semantic-debt.md)
- [x] [Add event-sourced subagent processing records](event-sourced-subagent-processing.md)
- [x] [Add the named module-subagent foundation](named-module-subagent-foundation.md)
- [x] [Add typed module context and read-only DAG planning](typed-module-context-and-read-only-dag.md)
- [x] [Add isolated-write module DAG execution](isolated-write-module-dag.md)
- [x] [Pilot contract-first bottom-up module delivery](module-dag-pilot.md)
- [ ] [Add Team Plan admission](team-plan-admission.md)
- [ ] [Add the Team Plan journal](team-plan-journal.md)
- [ ] [Add the Team Plan runner](team-plan-runner.md)

## References

- [Nook PR #1000](https://github.com/meta-secret/nook/pull/1000)
- [Nook PR #1045](https://github.com/meta-secret/nook/pull/1045)
- [Nook PR #1068](https://github.com/meta-secret/nook/pull/1068)
- [Nook PR #1082](https://github.com/meta-secret/nook/pull/1082)
- [Nook PR #1151](https://github.com/meta-secret/nook/pull/1151)
- [Nook PR #1152](https://github.com/meta-secret/nook/pull/1152)
- [Nook PR #1156](https://github.com/meta-secret/nook/pull/1156)
- [Nook PR #1159](https://github.com/meta-secret/nook/pull/1159)
- [Nook PR #1160](https://github.com/meta-secret/nook/pull/1160)
- [Implementation plan](../../plans/agent-workflow/20260814T052642Z-static-agent-workflows.md)
- [Typed request examples plan](../../plans/agent-workflow/20260817T054500Z-typed-request-examples.md)
- [Named module experts plan](../../plans/agent-workflow/20260822T184013Z-module-subagent-foundation.md)
