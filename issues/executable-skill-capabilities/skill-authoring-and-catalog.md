---
title: Add executable skill authoring and catalog verification
status: done
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-23T06:27:05Z
updated_at: 2026-08-26T17:47:03Z
source_issues: []
related_prs:
  - 1147
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

- [x] Scaffolding creates deterministic reviewed layouts without semantic filler
      code.
- [x] Audits reject missing, duplicate, unregistered, extra, or mismatched
      capability packages.
- [x] Canonical Cortex, agent wrappers, and host symlinks stay synchronized.
- [x] Focused and repository verification passes.

## Progress

- PR [#1147](https://github.com/meta-secret/nook/pull/1147) added the shared
  discoverable YAML command protocol and executable-skill verification.
- The delivery remained independent from the separately owned registry,
  closure, analyzer, and runtime activation work.

## Findings and decisions

- A skill receives code only when it owns a stable deterministic mechanism.
- Executable skills expose finite domain actions, exact YAML examples and
  schemas, bounded request transport, and YAML-only results through one shared
  invocation contract.

## References

- `agentic-ai/loom/src/commands/skill-scaffold.ts`
- `.cortex/workflows/dynamic-skills.md`
