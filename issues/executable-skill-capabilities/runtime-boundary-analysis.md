---
title: Add executable runtime boundary analysis
status: done
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T08:24:08Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1122
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

- [x] Evaluator and module-loader escape routes fail closed.
- [x] Local lexical shadows and inert strings remain accepted.
- [x] Production Loom cannot runtime-import dormant providers.
- [x] Focused tests, full validation, and exact-head review pass.

## Progress

- Extracted as the first successor to oversized PR #1108.
- Merged PR #1122 at `ae11a4a67075d9095f3b4a89c0cfff01b72156e2`.
- Restacked the three remaining reachability PRs as GitHub stack #1127.

## Findings and decisions

- The semantic boundary is a stable dependency for later closure walkers.
- Agentic-only paths do not produce the Pages deployment required by the
  repository ruleset. Exact readiness passed, so the owner dissolved and
  recreated the stack around an authorized admin squash merge.

## References

- `agentic-ai/loom/tests/skill-provider-boundary.test.ts`
