---
title: Deterministic agent workflows
status: in_progress
created_at: 2026-08-14T07:26:00Z
updated_at: 2026-08-23T03:18:44Z
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

Nine stable, read-only module experts now resolve their exact module, skill, and
authority context from immutable source snapshots. Typed plan authorization,
expert evidence, adapter provenance, and depth-two or depth-three lineage merged
in Nook PR #1082. The next sequence adds typed module-context planning, then
isolated writes, then a contract-first bottom-up delivery pilot. This remains a
local Loom and Codex workflow. Hive is not part of this internal development
path.

Loom leaf tools now generate discovery YAML, decode blueprints, and defaultable
Task aliases from typed example documents. Sample YAML files under the Loom
package are gone. That slice merged in Nook PR #1045.

## Decisions

- Graph topology is compiled TypeScript, never YAML, Markdown, or
  prompt-generated state.
- Loom schedules local static runs and reuses existing deterministic leaf tools.
- One fresh worker executes each reached agent task attempt.
- The parent owns scheduling, integration, journal writes, and delivery
  lifecycle state.
- The local workflow journal is the sole scheduling authority for this
  development system. Distributed execution is outside its scope.
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
- [ ] [Add typed module context and read-only DAG planning](typed-module-context-and-read-only-dag.md)
- [ ] [Add isolated-write module DAG execution](isolated-write-module-dag.md)
- [ ] [Pilot contract-first bottom-up module delivery](module-dag-pilot.md)

## References

- [Nook PR #1000](https://github.com/meta-secret/nook/pull/1000)
- [Nook PR #1045](https://github.com/meta-secret/nook/pull/1045)
- [Nook PR #1068](https://github.com/meta-secret/nook/pull/1068)
- [Nook PR #1082](https://github.com/meta-secret/nook/pull/1082)
- [Implementation plan](../../plans/agent-workflow/20260814T052642Z-static-agent-workflows.md)
- [Typed request examples plan](../../plans/agent-workflow/20260817T054500Z-typed-request-examples.md)
- [Named module experts plan](../../plans/agent-workflow/20260822T184013Z-module-subagent-foundation.md)

