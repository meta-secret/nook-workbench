---
title: Migrate structured design documents B
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:13:00Z
updated_at: 2026-08-15T10:25:27Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1017
depends_on:
  - issues/cortex-structured-articles/design-a.md
---

# Migrate structured design documents B

## Context

Design slice A is fully enforced. The seven remaining and larger design
documents contain orchestration, authentication, isolation, vault, event-log,
and session architecture that completes the family migration.

## Outcome

Every Cortex design document exposes decisions, invariants, alternatives,
ownership, and ordered workflows through the shared semantic article grammar.

## Scope

- Migrate agent workflow orchestration, auth providers, Hive isolation,
  Sentinel genesis, unified vault, vault event log, and vault session manuals.
- Synchronize every changed heading with its document map.
- Preserve security boundaries, architecture authority, and exact commands.
- Remove all seven remaining design paths from the ledger.

## Acceptance criteria

- [x] No design document remains in the migration ledger.
- [x] Invariants, alternatives, state transitions, and ownership use semantic
  peer and nested structures.
- [x] Ordered ceremonies, migrations, and recovery paths use numbered steps.
- [x] Detailed rationale remains in clear explanation articles.
- [x] Cortex audit and semantic consistency review pass.
- [x] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change architecture, security policy, or product behavior.
- Do not replace useful rationale with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T101300Z-design-b.md)

## Progress

- 2026-08-15: Started the final seven-document design slice from the merged
  slice-A baseline.
- 2026-08-15: PR 1017 removed every remaining design exemption and passed
  hosted Loom run 31879428955 plus Source architecture before squash merge.

## Findings

- Twenty-five dense articles required semantic restructuring across six
  manuals. Vault event log already complied and graduated unchanged.
- The largest clusters were orchestration authority, OAuth origin policy, Hive
  recovery and credentials, and vault lock behavior.

## Decisions

- Graduate already clear articles without presentation-only churn.
- Keep exact commands and security boundaries inside the semantic groups that
  own them.
