---
title: Add immutable source closure and skill registry
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T11:16:06Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1134
  - https://github.com/meta-secret/nook/pull/1136
depends_on:
  - issues/executable-skill-capabilities/sealed-source-analyzer.md
---

# Add immutable source closure and skill registry

## Context

Execution authority must derive from reviewed static registration and frozen
source closure, never a manifest-provided command or import path.

## Outcome

Discovery creates content-addressed immutable closure plans behind opaque
registry authority while the production catalog remains empty.

## Scope

- Freeze tracked source discovery and content-addressed closure plans.
- Add opaque static registry authority and provenance checks.
- Keep the production registry empty before activation.
- Exclude executor behavior and Cortex workflow wiring.

## Acceptance criteria

- [ ] Closure plans cannot drift after approval.
- [ ] Manifests cannot choose commands, imports, or authority.
- [ ] The production catalog remains empty.
- [ ] Focused tests, full validation, and exact-head review pass.

## Progress

- Official GitHub stack #1139 owns the 2,310-line closure layer in PR #1134
  and the 1,488-line registry layer in PR #1136.
- Closure plans bind source, manifest, package, lock, and declared policy bytes
  into one deterministic digest. Only the production sealed analyzer wrapper
  can mint a registry-acceptable plan.
- Package provenance rejects unexpected authority fields, external runtime
  dependencies, non-allowlisted development packages, and lifecycle hooks.
- Canonical path checks reject ancestor symlinks while descriptor reads bind
  worktree bytes to the frozen Git tree.
- The production registry remains empty. Injected candidate planning is
  confined to a findings-only diagnostic API and cannot mint opaque authority.
- Focused closure tests pass with 15 tests and 56 assertions. Focused registry
  tests pass with 14 tests and 38 assertions. Full Loom verification passes
  with 431 tests and 2,366 assertions on PR #1136.
- Independent semantic reviews report no remaining closure or registry
  findings. Hosted delivery follows PR #1132 in the stack.

## Findings and decisions

- Registry authority is a separate trust boundary from containment.

## References

- `agentic-ai/loom/src/skill-provider-registry.ts`
