---
title: Delivered the Hive Control Center
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-control-center.md
plan: plans/hive-isolated-agent-platform/2026-07-28T06-36-05Z-hive-control-center.md
nook_pr: 839
status: completed
started_at: 2026-07-28T06:36:05Z
finished_at: 2026-07-28T09:03:37Z
agent: codex
---

# Delivered the Hive Control Center

## Outcome

Hive now has a deployed, read-only management dashboard showing worker health,
queue state, task triggers, attempts, dependencies, bounded activity, failures,
and delivery evidence. Operators can open it through
`task infra:hive:dashboard`.

## Progress

- Added typed, bounded task activity and observer projections backed by Neo4j.
- Added an observer service with a private read-only coordinator channel so the
  network-facing dashboard process has no Neo4j credentials.
- Added an accessible, responsive, localized Svelte overview and task detail.
- Added Rust behavior tests, focused browser coverage, deployment manifests,
  operator documentation, and exact-ID durable search.
- Deployed the merged image and verified one available observer replica with a
  live overview containing four agents and 69 tasks.

## Implementation problems

- Production rollout exposed a trailing newline in the recreated Neo4j client
  secret. Kubernetes correctly kept the observer unavailable. The live secret
  was normalized without exposing it, the observer was restarted successfully,
  and follow-up PR 843 makes bootstrap normalization durable.
- Review found several ordering, provenance, persistence, staleness, and
  credential-boundary issues. Each was fixed before merge and all review
  conversations were resolved with visible evidence.

## Decisions

- The first release is deliberately read-only; management controls require a
  later audited command boundary.
- Neo4j remains the durable system of record. Operator activity is typed,
  bounded, and sanitized rather than raw logs or private model reasoning.
- The HTTP observer receives no database credentials and can request only
  overview and exact-task projections through a private Unix channel.

## Validation

- Nook PR 839 passed exact-head Hive and PR workflows and merged to Main.
- 49 Hive Rust tests and 9 focused dashboard browser tests passed.
- Repository formatting and the UI demo contract passed.
- Production observer is 1/1 available; health and overview API checks passed.
- Follow-up: https://github.com/meta-secret/nook/pull/843

## Remaining work

- Merge PR 843 after repository-owned checks complete.
- Add audited retry, cancel, pause, priority, and worker-maintenance controls in
  a separate management release.
