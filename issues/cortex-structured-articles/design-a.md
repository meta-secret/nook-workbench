---
title: Migrate structured design documents A
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:01:35Z
updated_at: 2026-08-15T10:10:44Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1016
depends_on:
  - issues/cortex-structured-articles/workflows-b.md
---

# Migrate structured design documents A

## Context

The workflow and dynamic-skill families are fully enforced. The eight smallest
design documents form a bounded first architecture slice. Their invariants,
tradeoffs, modes, and implementation sequences need a consistent semantic
shape without changing architecture authority.

## Outcome

The selected design documents expose decisions, invariants, alternatives,
ownership, and ordered implementation work through a transparent hierarchy.

## Scope

- Migrate the design index, vault schema versioning, passkey manager, secret
  store identity, typed newtypes, core beliefs, vault architecture modes, and
  identity vault architecture documents.
- Synchronize every changed heading with its document map.
- Preserve security boundaries, architectural decisions, and exact commands.
- Remove the eight compliant paths from the ledger.

## Acceptance criteria

- [x] Selected design documents have no ledger exemptions.
- [x] Invariants, alternatives, and ownership use peer and nested lists.
- [x] Ordered implementation or migration sequences use numbered steps.
- [x] Detailed rationale remains within clear explanation articles.
- [x] Cortex audit and semantic consistency review pass.
- [x] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change architecture, security policy, or product behavior.
- Do not replace useful rationale with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T100135Z-design-a.md)

## Progress

- 2026-08-15: Selected the eight smallest design documents as the first bounded
  architecture slice.
- 2026-08-15: PR 1016 graduated all eight paths and passed hosted Loom run
  31878800988 plus Source architecture before squash merge.

## Findings

- Three manuals needed material structure changes. Five already expressed their
  semantics through tables, checklists, or peer lists and graduated unchanged.
- Identity-directory transactions, WebAuthn ceremonies, Sentinel lifecycle,
  and provider capabilities became explicit nested contracts.

## Decisions

- Treat structure as a representation of meaning, not a target percentage of
  bullets.
- Preserve already clear architecture prose instead of creating presentation-
  only churn.
