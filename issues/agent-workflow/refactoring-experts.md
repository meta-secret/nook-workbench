---
title: Add structural refactoring experts
status: completed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-23T04:12:41Z
updated_at: 2026-08-23T06:16:23Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1084
depends_on:
  - issues/agent-workflow/named-module-subagent-foundation.md
---

# Add structural refactoring experts

## Context

Named module experts now provide exact-commit knowledge for production module
boundaries. Nook still lacks callable experts whose explicit responsibility is
structural improvement across source code, Cortex, and their shared contracts.

## Outcome

Agents can request bounded, read-only structural analysis from dedicated code,
Cortex, and cross-system coherence experts. Each role returns typed evidence and
a refactoring sequence. The delivery owner decides and applies changes.

## Scope

- Add a code refactoring expert for architecture, design, code quality,
  behavior-focused tests, and stronger types.
- Add a Cortex refactoring expert for complexity, conflicts, stale knowledge,
  duplicated authority, and deterministic-instruction extraction.
- Add a system coherence expert for contradictions and abstraction leaks that
  cross source code, Cortex, Loom, skills, tests, and workflow boundaries.
- Keep all three roles read-only and non-delegating.
- Use exact catalog-owned context scopes and deterministic validation.
- Add one typed refactoring-evidence contract shared by the role family.

## Acceptance criteria

- [x] Three stable project-scoped roles are discoverable by name.
- [x] Each role has a distinct responsibility and exact context boundary.
- [x] Successful analysis returns complete typed refactoring evidence.
- [x] Cortex deterministic-extraction findings distinguish semantic policy from
      mechanical work suitable for Loom.
- [x] Runtime and audit tests reject capability, context, role, and result drift.
- [x] Cortex, Loom, exact-head hosted validation, review, and readiness pass.

## Decisions

- Refactoring experts diagnose and propose. They do not become repository-wide
  autonomous writers.
- The system coherence expert synthesizes cross-boundary findings. It does not
  replace module, code, or Cortex ownership.
- Findings do not schedule work or grant mutation authority.

## References

- [Deterministic agent workflows](README.md)
- [Named module-subagent foundation](named-module-subagent-foundation.md)
