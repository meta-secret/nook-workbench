---
title: Named module-subagent foundation
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-22T18:40:13Z
updated_at: 2026-08-22T18:40:13Z
source_issues: []
related_prs: []
depends_on: []
---

# Named module-subagent foundation

## Context

Nook has reusable skills and event-sourced delegation, but it does not expose
project-scoped named Codex experts for its package and boundary owners. This is
the first slice of [deterministic agent workflows](README.md).

## Outcome

Agents can call stable, read-only module experts by name. Every expert resolves
current knowledge from the exact Nook baseline instead of carrying a copied
architecture essay in its prompt.

## Scope

- Add project-scoped custom Codex agent definitions for stable module owners.
- Name the cross-boundary role `internal_api_expert`.
- Add one common module-expert development skill and a typed expert catalog.
- Complete Cortex package coverage for live Rust and production web packages.
- Define the maximum initial hierarchy depth as three.
- Add mechanical validation for agent names, module roots, authority anchors,
  skills, and focused validation selectors.
- Keep all custom experts read-only in this slice.
- Exclude write-capable module execution and Hive integration.

## Acceptance criteria

- [ ] Project-scoped Codex agents are discoverable by stable names.
- [ ] The expert catalog covers every live production package or records an
      explicit exclusion.
- [ ] `internal_api_expert` owns Rust-to-host, WASM, generated-binding, and
      TypeScript-facing API review.
- [ ] Validation rejects missing agent definitions, modules, authorities,
      skills, task selectors, and hierarchy depth above three.
- [ ] Focused Loom tests, Cortex audit, exact-head hosted validation, and
      readiness pass before squash merge.

## Progress

- Architecture and external prior-art review completed before implementation.

## Findings and decisions

- Skills own reusable methods. Custom agents own callable identities. Cortex
  owns durable module knowledge. Loom owns execution and evidence.
- One module expert owns API design, behavior tests, implementation guidance,
  and local refactoring guidance. Generic phase personas are not introduced.
- Children do not schedule successors or create undeclared grandchildren.

## References

- `.codex/config.toml`
- `.cortex/workflows/subagent-delegation.md`
- `agentic-ai/loom/src/agent-workflow/`

