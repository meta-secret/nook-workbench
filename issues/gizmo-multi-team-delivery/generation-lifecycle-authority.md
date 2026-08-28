---
title: "Implement authenticated generation lifecycle"
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-28T12:00:29Z
updated_at: 2026-08-28T12:32:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1183"]
depends_on: ["issues/gizmo-multi-team-delivery/admission-evidence-authority.md"]
---

# Implement authenticated generation lifecycle

## Context

This dependency successor restores generation restart after the bounded
single-generation admission/evidence authority merged in PR 1182. It begins
from exact Main commit `413cb40378732b1e731868e3f2f635e7b1c4f7c9`.

AI owns lifecycle semantics and acceptance. Web development implements the
listed TypeScript boundary. Security reviews repository authentication,
transactionality, stale-state rejection, and attempt-budget enforcement.
Gizmo owns integration, PR, validation, merge, and Workbench lifecycle.

## Scope

- `agentic-ai/loom/src/module-delivery/authority.ts`
- `agentic-ai/loom/src/module-delivery/admission.ts`
- `agentic-ai/loom/src/module-delivery/index.ts`
- `agentic-ai/loom/tests/module-delivery/admission.test.ts`
- Excluded: provider integration, Cortex, Hive, durable storage, generic
  scheduling, and worker lifecycle.

## Acceptance criteria

- [x] Restart authenticates every replacement source as a Git commit through a
  privately retained canonical repository root before any mutation.
- [x] Replacement plan, generation, expected lineage, and terminal predecessor
  state are validated transactionally; every rejected restart leaves the prior
  generation usable.
- [x] Successful restart clears prior leases, dispositions, evidence, and
  generation-local capability authority.
- [x] Attempts remain globally monotonic for surviving task IDs, new task IDs
  begin at one, and exhausted budgets become explicit blocked closure.
- [x] Prior accepted evidence or disposition cannot authorize readiness in a
  replacement generation.
- [x] Invalid commit, blob, repository root, lineage, and stale authority tests
  use real Git fixtures and prove fail-closed behavior.
- [x] Curated exports, focused/full Loom tests, architecture and TypeScript
  checks, exact-head AI/Web/Security reviews, readiness, and squash merge pass.
- [x] Authored PR delta remains below 3,000 lines and every source file remains
  at or below 1,000 lines.

## Completion evidence

- PR 1183 passed exact-head AI, Web-development, Security, local Codex,
  repository-policy, and `task pr:ready` review.
- Focused admission: 8 passing with 51 assertions; full Loom: 561 passing, 13
  intentional provider-integration skips, zero failures; source architecture
  7/7; TypeScript-state 8/8.
- It squash-merged as `172ddec77c0e34b477ac9c87b4a3aeeb681a08d4`.

## References

- [Superseding generation split](../../plans/agent-orchestration/20260828T110900Z-generation-lifecycle-resplit.md)
- [Admission/evidence predecessor](admission-evidence-authority.md)
- [Provider integration successor](provider-integration-materialization.md)
- [Preservation draft PR 1176](https://github.com/meta-secret/nook/pull/1176)
