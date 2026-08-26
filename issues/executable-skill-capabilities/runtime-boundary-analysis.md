---
title: Add executable runtime boundary analysis
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T08:05:41Z
source_issues: []
related_prs: []
depends_on: []
---

# Add executable runtime boundary analysis

## Context

The oversized reachability patch combined the semantic TypeScript boundary
with several graph walkers. The boundary predicate is independently useful and
must become the stable foundation for those consumers.

## Outcome

A focused test-owned TypeScript boundary rejects dynamic evaluators, unbounded
module loaders, ambient capability recovery, and dormant provider imports.

## Scope

- Add the typed source context and evaluator analysis.
- Add the runtime module and ambient-loader boundary predicate.
- Cover lexical shadowing, erased declarations, computed access, and recovery.
- Exclude package-loader specialization and repository graph traversal.

## Acceptance criteria

- [ ] Evaluator and module-loader escape routes fail closed.
- [ ] Local lexical shadows and inert strings remain accepted.
- [ ] Production Loom cannot runtime-import dormant providers.
- [ ] Focused tests, full validation, and exact-head review pass.

## Progress

- Extracted as the first successor to oversized PR #1108.

## Findings and decisions

- The semantic boundary is a stable dependency for later closure walkers.

## References

- `agentic-ai/loom/tests/skill-provider-boundary.test.ts`
