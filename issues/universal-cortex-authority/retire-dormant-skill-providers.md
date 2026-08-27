---
title: Retire dormant skill providers
status: proposed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-27T09:00:00Z
updated_at: 2026-08-27T09:00:00Z
source_issues: []
related_prs: []
depends_on: ["issues/universal-cortex-authority/consolidate-skills-in-cortex.md"]
---

# Retire dormant skill providers

## Context

This is the final slice of [Universal Cortex authority](README.md).

## Outcome

Loom contains only active deterministic behavior. Obsolete executable-skill
provider code and containment tests are removed without weakening the active
Cortex article audit or shared TypeScript rules.

## Scope

- Delete unreachable executable-provider implementation and tests.
- Preserve the active article-structure migration-ledger invariant.
- Preserve explicit generic-value alias coverage in the shared Loom lint suite.
- Remove obsolete provider discovery and scaffold surfaces.

## Acceptance criteria

- [ ] No dormant executable-provider runtime remains.
- [ ] Active Cortex article auditing fails closed when its migration baseline
  is unavailable.
- [ ] Shared TypeScript lint tests retain explicit generic-value alias coverage.
- [ ] Loom verification and exact-head readiness pass.

## Progress

- Waiting for Cortex skill consolidation.

## Findings and decisions

- Active article-structure behavior already lives in Loom and must not be
  replaced by the dormant package.

## References

- `agentic-ai/loom/src/lib/cortex-article-structure.ts`
- `agentic-ai/loom/tests/cortex-article-structure.test.ts`
