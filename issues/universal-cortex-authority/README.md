---
title: Universal Cortex authority
status: in_progress
created_at: 2026-08-27T09:00:00Z
updated_at: 2026-08-27T09:00:00Z
---

# Universal Cortex authority

## Goal

Make Cortex the single portable semantic authority for Gizmo, team workers,
expert roles, and reusable engineering guidance across coding harnesses.

## Current state

The repository currently duplicates parts of Cortex in Codex TOML profiles and
vendor-facing skill directories. PR #1167 introduced deterministic team
profiles, but the accepted direction now replaces those profiles with explicit,
harness-neutral task contracts.

## Decisions

- Gizmo selects one responsible team for each implementation task.
- The active harness creates workers and controls their model and lifecycle.
- Cortex defines team identity, context selection, boundaries, and evidence.
- Harness profile files and skill mirrors are not project authorities.
- Unique skill semantics move to the owning Cortex team before mirrors are
  deleted.
- The migration is split by semantic boundary, not by line-count convenience.

## Issues

- [ ] [Replace vendor agent profiles](replace-vendor-agent-profiles.md)
- [ ] [Consolidate skills in Cortex](consolidate-skills-in-cortex.md)
- [ ] [Retire dormant skill providers](retire-dormant-skill-providers.md)

## References

- Nook PR #1167
- `AGENTS.md`
- `.cortex/AGENTS.md`
- `.cortex/knowledge-graph.md`
