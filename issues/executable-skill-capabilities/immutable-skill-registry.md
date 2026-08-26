---
title: Add immutable source closure and skill registry
status: ready
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T08:05:41Z
source_issues: []
related_prs: []
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

- Depends on the sealed source analyzer.

## Findings and decisions

- Registry authority is a separate trust boundary from containment.

## References

- `agentic-ai/loom/src/skill-provider-registry.ts`
