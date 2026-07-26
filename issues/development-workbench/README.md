---
title: "Versioned development workbench"
status: in_progress
created_at: 2026-07-25T00:00:00Z
updated_at: 2026-07-25T00:00:00Z
---

# Versioned development workbench

## Goal

Keep Nook feature planning, execution context, agent experience, and delivery
measurements inside one versioned development cycle instead of splitting them
between chat history, GitHub Issues, and bookkeeping PRs in the product
repository.

## Current state

The Workbench repository and initial historical migration exist. Nook's
`.cortex`, agent implementation workflow, and statistics collector are being
migrated to use it as their system of record.

## Decisions

- The repository is named `nook-workbench`.
- Feature directories replace milestones and aggregate issues.
- Focused Markdown files replace sub-issues.
- Every task-owning agent publishes a worklog.
- Only `status: ready` plus `automation: agent` authorizes automated execution.
- Statistics are committed directly to Workbench so Nook receives no
  bookkeeping PRs.

## Issues

- [ ] [Migrate Nook development context into Workbench](migrate-nook-development-context.md)

## References

- [Nook repository](https://github.com/meta-secret/nook)
