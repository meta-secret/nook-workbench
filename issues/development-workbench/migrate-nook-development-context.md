---
title: "Migrate Nook development context into Workbench"
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-07-25T00:00:00Z
updated_at: 2026-07-26T02:09:20Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/783
  - https://github.com/meta-secret/nook/pull/785
  - https://github.com/meta-secret/nook/pull/787
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
- [x] Nook's implementation workflow claims explicit Workbench issue files.
- [x] Agent runs and task owners publish worklogs.
- [x] Nook Main metrics publish directly to Workbench.
- [x] Nook no longer stores `.stats` or creates stats-only PRs.
- [x] Nook `.cortex` consistently documents the new lifecycle.
- [x] The Nook migration PR is validated and merged.

## Progress

- 2026-07-25: Created the Workbench and imported 152 issues and 147 statistics
  records.
- 2026-07-26: Migrated the final concurrent PR 776 statistic, bringing the
  historical total to 148 records.
- 2026-07-26: Merged Nook PR 783 after exact-head validation and disabled
  GitHub Issues in the Nook repository.
- 2026-07-26: Fixed skipped-job timestamp skew in the new Main statistics
  collector through Nook PR 785.
- 2026-07-26: Enabled GitHub secret scanning and push protection, and added
  versioned Bun-powered pre-commit, pre-push, and CI sensitive-content scans.
- 2026-07-26: Fixed rerun collection to exclude successful jobs reused from
  earlier attempts through Nook PR 787; the production attempt-2 payload then
  published successfully.

## Findings and decisions

- Cross-repository issue-trigger events require a write credential in the
  Workbench. Polling and atomically claiming from Nook reuses the existing
  trusted PAT without adding a second repository secret.
- Historical imports remain `automation: manual` to prevent accidental backlog
  execution.
- Unique statistics and worklog paths can be committed directly without a
  product-repository PR.
- Mutable records use optimistic concurrency: publishers must provide the blob
  SHA on which their edit is based, while statistics remain immutable.
- Agent-authored worklogs are shape-, size-, and secret-checked before trusted
  direct publication.
- Workbench is public. Records keep durable outcomes and decisions while
  excluding raw logs, environment details, internal infrastructure, local
  paths, and incidental debugging history.

## References

- [Nook Workbench](https://github.com/meta-secret/nook-workbench)
- [Nook repository](https://github.com/meta-secret/nook)
