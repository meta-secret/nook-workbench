---
title: Move repository policy mechanics into skill applications
status: ready
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-27T16:02:02Z
updated_at: 2026-08-27T16:02:02Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/discoverable-yaml-protocol.md
---

# Move repository policy mechanics into skill applications

## Context

Deterministic Cortex, source-policy, dependency, session, scaffolding, release,
and pre-push mechanics currently live in Loom, Task, or preflight regardless of
their semantic skill owner.

## Outcome

Each deterministic repository-policy mechanic has one skill-owned TypeScript
application and focused tests; shared gates invoke those applications.

## Scope

- Migrate Cortex writer, document-map, consistency, dynamic-skill, and
  self-improvement mechanics.
- Migrate dependency popularity, source size, repository-language, pre-push,
  and static extension-release checks.
- Preserve centralized ESLint implementations for shared TypeScript rules.
- Exclude external lifecycle mutations and native subagent execution.

## Acceptance criteria

- [ ] Each mechanic has one canonical implementation beside its owning skill.
- [ ] Existing diagnostics and mandatory gates remain compatible.
- [ ] Every application has typed commands, manifests, and focused tests.
- [ ] Loom contains no migrated skill-specific semantic implementation.

## Progress

- Depends on the shared command protocol.

## Findings and decisions

- Semantic judgment remains in Cortex and agent execution.

## References

- `.agents/skills/` and `agentic-ai/loom/src/commands/`.

