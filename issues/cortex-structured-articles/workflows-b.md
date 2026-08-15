---
title: Migrate structured workflows B
status: in_progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T09:49:00Z
updated_at: 2026-08-15T09:49:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/cortex-structured-articles/workflows-a.md
---

# Migrate structured workflows B

## Context

Five large workflow manuals remain: issues, quality, coding-bro, pull requests,
and CI pipeline. They own the most consequential execution instructions and
complete the workflow family.

## Outcome

All workflow manuals expose their lifecycle, decisions, branches, failures, and
evidence through the universal semantic hierarchy.

## Scope

- Migrate the five remaining workflow manuals.
- Preserve exact lifecycle policy, commands, security boundaries, and rationale.
- Synchronize maps and relationships.
- Remove every workflow path from the migration ledger.

## Acceptance criteria

- [ ] No workflow manual remains in the ledger.
- [ ] Lifecycle and recovery order is explicit.
- [ ] Conditions, ownership, and peer rules use natural list hierarchy.
- [ ] Detailed causal and architectural explanations remain intact.
- [ ] Cortex audit, consistency review, pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change delivery, CI, Workbench, or security policy.
- Avoid cosmetic churn in already compliant articles.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T094900Z-workflows-b.md)
