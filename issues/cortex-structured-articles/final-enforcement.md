---
title: Migrate root Cortex documents and enable final enforcement
status: in-progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:54:00Z
updated_at: 2026-08-15T10:54:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/cortex-structured-articles/supporting-docs.md
---

# Migrate root Cortex documents and enable final enforcement

## Context

Every Cortex family below the root is structurally enforced. `AGENTS.md`,
`ARCHITECTURE.md`, and `rules.md` are the last exemptions. Completing them makes
the temporary migration ledger unnecessary.

## Outcome

Every Cortex Markdown document exposes its semantic hierarchy and the corpus is
enforced without migration exemptions.

## Scope

- Migrate root `AGENTS.md`, `ARCHITECTURE.md`, and `rules.md`.
- Synchronize every changed heading with its document map.
- Preserve repository policy, architecture, security rules, and exact commands.
- Delete the empty migration ledger.
- Run the final corpus-wide semantic audit.

## Acceptance criteria

- [ ] Root Cortex manuals have no ledger exemptions.
- [ ] Rules, authority, architecture, commands, and procedures use semantic peer
  and nested structures.
- [ ] Ordered workflows and recovery actions use numbered steps.
- [ ] Detailed rationale remains in clear explanation articles.
- [ ] The migration ledger no longer exists.
- [ ] Final Cortex audit, consistency review, pre-push, hosted Loom, and readiness
  pass.

## Constraints

- Do not change repository policy, architecture, or security meaning.
- Do not replace useful rationale with disconnected bullets.
- Keep the authored PR change below 5,000 lines.

## References

- [Feature summary](README.md)
- [Task plan](../../plans/cortex-structured-articles/20260815T105400Z-final-enforcement.md)

## Progress

- 2026-08-15: Started the final three-document root slice from the fully
  migrated supporting-doc baseline.

## Findings

- Pending migration audit.

## Decisions

- Delete the migration ledger rather than retaining an empty exemption file.
