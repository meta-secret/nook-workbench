---
title: "Migrate Nook development context into Workbench"
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-07-25T00:00:00Z
updated_at: 2026-07-25T00:00:00Z
source_issues: []
related_prs: []
depends_on: []
---

# Migrate Nook development context into Workbench

## Context

Nook feature issues, agent implementation experience, and delivery statistics
were stored outside the normal source-development cycle or generated excessive
bookkeeping changes in the product repository.

## Outcome

Nook uses this repository for Markdown issues, required agent worklogs, AI-agent
statistics, and Main-build statistics. Existing GitHub issue and statistics
history is preserved here.

## Scope

- Create and document the Workbench repository contract.
- Import existing Nook GitHub issues, including bodies and comments.
- Move existing agent and Main-build statistics.
- Update Nook `.cortex`, agent skills, prompts, scripts, tests, and workflows.
- Preserve explicit opt-in semantics for automated issue execution.
- Stop new GitHub Issue and Nook bookkeeping-PR usage.

## Acceptance criteria

- [x] Workbench exists with GitHub Issues disabled and validation enabled.
- [x] Historical Nook issues and statistics are present.
- [ ] Nook's implementation workflow claims explicit Workbench issue files.
- [ ] Agent runs and task owners publish worklogs.
- [ ] Nook Main metrics publish directly to Workbench.
- [ ] Nook no longer stores `.stats` or creates stats-only PRs.
- [ ] Nook `.cortex` consistently documents the new lifecycle.
- [ ] The Nook migration PR is validated and merged.

## Progress

- 2026-07-25: Created the Workbench and imported 152 issues and 147 statistics
  records.

## Findings and decisions

- Cross-repository issue-trigger events require a write credential in the
  Workbench. Polling and atomically claiming from Nook reuses the existing
  trusted PAT without adding a second repository secret.
- Historical imports remain `automation: manual` to prevent accidental backlog
  execution.
- Unique statistics and worklog paths can be committed directly without a
  product-repository PR.

## References

- [Nook Workbench](https://github.com/meta-secret/nook-workbench)
- [Nook repository](https://github.com/meta-secret/nook)
