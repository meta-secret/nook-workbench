---
title: Classify remaining mechanics and normalize Loom
status: ready
priority: p2
automation: agent
owner: cypherkitty
created_at: 2026-08-23T06:27:05Z
updated_at: 2026-08-23T06:27:05Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/cortex-quality-capabilities.md
---

# Classify remaining mechanics and normalize Loom

## Context

The [feature summary](README.md) is complete only when existing local mechanics
have an explicit owner and Loom contains only generic control-plane behavior.

## Outcome

Every current skill-adjacent mechanic is either retained as generic trusted
infrastructure or moved to one focused skill capability with verification.

## Scope

- Inventory remaining Loom and Task mechanics linked to project skills.
- Record the owner and rationale for retained generic behavior.
- Move eligible local mechanics through the established runtime.
- Remove duplicated implementation prose and obsolete terminology.

## Acceptance criteria

- [ ] No local mechanic remains in Loom without a documented generic-runtime
      justification.
- [ ] The skill catalog, agent profiles, workflows, Task gates, and Cortex
      authorities are consistent.
- [ ] Complete repository validation and exact-head review pass.

## Progress

- Depends on the focused Cortex capability migrations.

## Findings and decisions

- This slice is classification-driven. It must not move scheduler, isolation,
  provenance, replay, or delivery authority into skills.

## References

- `agentic-ai/loom/`
- `.agents/skills/`
