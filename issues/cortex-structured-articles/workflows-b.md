---
title: Migrate structured workflows B
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T09:49:00Z
updated_at: 2026-08-15T10:01:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1015
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

- [x] No workflow manual remains in the ledger.
- [x] Lifecycle and recovery order is explicit.
- [x] Conditions, ownership, and peer rules use natural list hierarchy.
- [x] Detailed causal and architectural explanations remain intact.
- [x] Cortex audit, consistency review, pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change delivery, CI, Workbench, or security policy.
- Avoid cosmetic churn in already compliant articles.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T094900Z-workflows-b.md)

## Progress

- 2026-08-15: PR 1015 migrated the five largest manuals and removed every
  workflow exemption.
- 2026-08-15: Hosted Loom run 31878252118 and Source architecture passed on the
  exact head before squash merge.

## Findings

- The PR manual had the largest concentration of hidden structure across sizing,
  hosted validation, review, readiness, and reporting articles.
- The quality manual already complied and graduated without cosmetic changes.

## Decisions

- Keep exact commands and code blocks stable while structuring surrounding
  policy.
- Preserve causality as prose when it cannot be reduced to independent rules.
