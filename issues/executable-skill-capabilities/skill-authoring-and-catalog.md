---
title: Add executable skill authoring and catalog verification
status: ready
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-23T06:27:05Z
updated_at: 2026-08-23T06:27:05Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/runtime-and-article-structure.md
---

# Add executable skill authoring and catalog verification

## Context

The [feature summary](README.md) requires repeatable creation and drift checks
after the runtime contract is stable.

## Outcome

Skill scaffolding and audits understand instruction-only skills, executable
capability packages, and role-routing skills without conflating them.

## Scope

- Extend the skill scaffold request and templates for optional capability code.
- Verify manifest, registry, wrapper, symlink, source, test, and toolchain
  consistency.
- Normalize skill registry categories and terminology.
- Exclude migration of additional Cortex mechanics.

## Acceptance criteria

- [ ] Scaffolding creates deterministic reviewed layouts without semantic filler
      code.
- [ ] Audits reject missing, duplicate, unregistered, extra, or mismatched
      capability packages.
- [ ] Canonical Cortex, agent wrappers, and host symlinks stay synchronized.
- [ ] Focused and repository verification passes.

## Progress

- Depends on the runtime foundation.

## Findings and decisions

- A skill receives code only when it owns a stable deterministic mechanism.

## References

- `agentic-ai/loom/src/commands/skill-scaffold.ts`
- `.cortex/workflows/dynamic-skills.md`
