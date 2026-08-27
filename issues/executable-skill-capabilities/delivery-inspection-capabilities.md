---
title: Move delivery inspection mechanics into skill applications
status: ready
priority: p2
automation: manual
owner: cypherkitty
created_at: 2026-08-27T16:02:02Z
updated_at: 2026-08-27T16:02:02Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/repository-policy-capabilities.md
---

# Move delivery inspection mechanics into skill applications

## Context

Review discovery, readiness calculation, and agent statistics are deterministic
delivery-support capabilities but are centralized as Loom application domains.

## Outcome

The owning delivery skills expose typed read-only inspection and statistics
commands while Gizmo retains every external lifecycle mutation.

## Scope

- Move review inventory and checklist materialization to code-review-comments.
- Move exact-head readiness calculations to efficient-pr-delivery.
- Add an agent-statistics executable skill application.
- Keep replies, resolution, validation dispatch, push, merge, and publication
  authority with Gizmo.

## Acceptance criteria

- [ ] Inspection is paginated, exact-head aware, and read-only.
- [ ] Statistics preserve current schemas and validation behavior.
- [ ] No skill command can reply, resolve, push, trigger checks, or merge.
- [ ] Focused and exact-head validation passes.

## Progress

- Depends on repository-policy capability migration.

## Findings and decisions

- External mutation is not implied by deterministic inspection.

## References

- Loom agent-statistics and PR-land sources.

