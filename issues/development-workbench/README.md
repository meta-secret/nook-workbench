---
title: "Versioned development workbench"
status: active
created_at: 2026-07-25T00:00:00Z
updated_at: 2026-08-16T19:50:45Z
---

# Versioned development workbench

## Goal

Keep Nook feature planning, execution context, agent experience, and delivery
measurements inside one versioned development cycle instead of splitting them
between chat history, GitHub Issues, and bookkeeping PRs in the product
repository.

## Current state

Workbench is the system of record for Nook planning, agent worklogs, AI-agent
statistics, and Main-build statistics. Nook's workflows publish here directly,
and the product repository no longer uses GitHub Issues or stores `.stats`.
The remaining active repair removes wasteful scheduled implementation scans
while preserving explicit agent execution.

## Decisions

- The repository is named `nook-workbench`.
- Feature directories replace milestones and aggregate issues.
- Focused Markdown files replace sub-issues.
- Every task-owning agent publishes a worklog.
- Only `status: ready` plus `automation: agent` authorizes automated execution.
- Statistics are committed directly to Workbench so Nook receives no
  bookkeeping PRs.

## Issues

- [x] [Migrate Nook development context into Workbench](migrate-nook-development-context.md)
- [ ] [Replace scheduled agent polling with explicit dispatch](replace-agent-implement-polling.md)

## References

- [Nook repository](https://github.com/meta-secret/nook)
