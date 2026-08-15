---
title: Migrate structured product specifications B
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:35:00Z
updated_at: 2026-08-15T10:42:54Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1019
depends_on:
  - issues/cortex-structured-articles/product-a.md
---

# Migrate structured product specifications B

## Context

Product slice A is enforced. The five remaining specifications contain the
largest authentication, password, recovery, and browser-extension flows and
complete the product family.

## Outcome

Every Cortex product specification exposes requirements, user flows, states,
security boundaries, and ownership through the shared semantic grammar.

## Scope

- Migrate decentralized auth, password manager, password envelope, SLIP-0039
  recovery, and browser extension specs.
- Synchronize every changed heading with its document map.
- Preserve product behavior, cryptographic boundaries, and exact commands.
- Remove all five remaining product paths from the ledger.

## Acceptance criteria

- [x] No product specification remains in the migration ledger.
- [x] Requirements, choices, states, and security boundaries use semantic peer
  and nested structures.
- [x] Ordered ceremonies, user flows, and recovery work use numbered steps.
- [x] Detailed rationale remains in clear explanation articles.
- [x] Cortex audit and semantic consistency review pass.
- [x] Pre-push, hosted Loom, and readiness pass.

## Constraints

- Do not change product behavior, architecture, or cryptographic policy.
- Do not replace useful rationale with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T103500Z-product-b.md)

## Progress

- 2026-08-15: Started the final five product specifications from the merged
  slice-A baseline.
- 2026-08-15: PR 1019 removed every remaining product exemption and passed
  hosted Loom run 31880161826 plus Source architecture before squash merge.

## Findings

- Four dense articles across three specs needed material restructuring.
  Password manager and password envelope already complied.
- The extension device-key and storage boundary became a complete hierarchy of
  ownership, persistence, migration, handoff, and nonce rules.

## Decisions

- Graduate already clear specs without presentation-only churn.
- Preserve exact cryptographic inputs, outputs, and persistence prohibitions.
