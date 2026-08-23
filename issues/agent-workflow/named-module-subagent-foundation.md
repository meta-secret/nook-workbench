---
title: Named module-subagent foundation
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-22T18:40:13Z
updated_at: 2026-08-23T03:18:44Z
source_issues: []
related_prs: [1082]
depends_on: []
---

# Named module-subagent foundation

## Context

Nook has reusable skills and event-sourced delegation, but it did not expose
project-scoped named Codex experts for its package and boundary owners. This is
the first slice of [deterministic agent workflows](README.md).

## Outcome

Agents can call stable, read-only module experts by name. Every expert resolves
current knowledge from an immutable snapshot of the selected Nook commit instead
of carrying a copied architecture essay in its prompt.

## Scope

- Add project-scoped custom Codex agent definitions for stable module owners.
- Name the cross-boundary role `internal_api_expert`.
- Add one common module-expert development skill and a typed expert catalog.
- Complete Cortex package coverage for live Rust and production web packages.
- Define the maximum initial hierarchy depth as three.
- Add mechanical validation for agent names, module roots, authority anchors,
  skills, focused validation selectors, context scopes, and runtime policy.
- Keep all custom experts read-only in this slice.
- Exclude write-capable module execution and Hive integration.

## Acceptance criteria

- [x] Project-scoped Codex agents are discoverable by stable names.
- [x] The expert catalog covers every live production package or records an
      explicit exclusion.
- [x] `internal_api_expert` owns Rust-to-host, WASM, generated-binding, and
      TypeScript-facing API review.
- [x] Validation rejects missing agent definitions, modules, authorities,
      skills, task selectors, and hierarchy depth above three.
- [x] Focused Loom tests, Cortex audit, exact-head hosted validation, and
      readiness passed before squash merge.

## Progress

- Architecture and external prior-art review completed before implementation.
- Added nine named experts covering fourteen registered production modules.
- Added immutable, profile-scoped source snapshots and a bounded read-only
  context service. Model-controlled process, network, and delegation paths are
  disabled for module-expert invocations.
- Registered the seven portable Rust API roots, both WASM roots, generated
  binding contracts, and the exact 167 authored production consumers owned by
  `internal_api_expert`.
- Added typed plan authorization, module-expert evidence, adapter provenance,
  depth-two and depth-three lineage verification, and content-addressed attempt
  projections.
- Squash-merged [Nook PR #1082](https://github.com/meta-secret/nook/pull/1082)
  after exact-head repository policy, focused remote preflight, complete PR
  validation, deployment, readiness, and independent acceptance review passed.

## Findings and decisions

- Skills own reusable methods. Custom agents own callable identities. Cortex
  owns durable module knowledge. Loom owns execution and evidence.
- One module expert owns API design, behavior tests, implementation guidance,
  and local refactoring guidance. Generic phase personas are not introduced.
- Children do not schedule successors or create undeclared grandchildren.
- Module dependency DAGs and single-parent attempt lineage are separate typed
  structures. Evidence fields do not grant scheduling authority.
- Expert credential isolation protects against model-controlled process access.
  Hostile same-account processes and memory forensics remain outside this local
  runtime threat model.
- Write-capable module execution remains deferred to the isolated-write slice.

## References

- [Task-start plan](../../plans/agent-workflow/20260822T184013Z-module-subagent-foundation.md)
- [Nook PR #1082](https://github.com/meta-secret/nook/pull/1082)
- [Typed context and read-only DAG](typed-module-context-and-read-only-dag.md)
- [Isolated-write module DAG](isolated-write-module-dag.md)
- [Module DAG delivery pilot](module-dag-pilot.md)
- `.codex/config.toml`
- `.cortex/workflows/subagent-delegation.md`
- `agentic-ai/loom/src/agent-workflow/`

