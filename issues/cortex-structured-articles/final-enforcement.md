---
title: Migrate root Cortex documents and enable final enforcement
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-08-15T10:54:00Z
updated_at: 2026-08-15T11:07:19Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1021
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

- [x] Root Cortex manuals have no ledger exemptions.
- [x] Rules, authority, architecture, commands, and procedures use semantic peer
  and nested structures.
- [x] Ordered workflows and recovery actions use numbered steps.
- [x] Detailed rationale remains in clear explanation articles.
- [x] The migration ledger no longer exists.
- [x] Final Cortex audit, consistency review, pre-push, hosted Loom, and readiness
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
- 2026-08-15: PR 1021 migrated the root manuals, removed the final ledger, and
  enabled corpus-wide enforcement without exemptions.

## Findings

- Removing the final exemptions exposed 31 dense articles: 23 in `AGENTS.md`,
  seven in `ARCHITECTURE.md`, and one in `rules.md`.
- The final audit reports zero broken links, index errors, density findings,
  document-map findings, or article-structure findings across the corpus.

## Decisions

- Delete the migration ledger rather than retaining an empty exemption file.
