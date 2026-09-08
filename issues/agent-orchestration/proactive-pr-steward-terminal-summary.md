---
title: Exact PR Steward terminal failure summaries
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-terminal-summary
created_at: 2026-09-08T15:42:00Z
updated_at: 2026-09-08T15:42:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-orchestration/proactive-pr-steward-failure-summary.md
---

# Exact PR Steward terminal failure summaries

## Context

Private fixed failure readers and strict evidence validation must merge first. The final slice then binds legal terminal semantics to each GitHub source and exposes only bounded summaries to Gizmo.

## Outcome

PR Steward reconciles the exact triggering failure object and emits a source-valid bounded actionable summary or static sanitized blocker. Gizmo routes the result without reading GitHub job evidence.

## Scope

- Introduce the final closed record version with source-specific terminal status, category, state, identifier, safe URL, and bounded summary rules.
- Include check run, check suite, workflow run, uniquely associated workflow job, commit status, pull-request closed-unmerged, and pull-request merge-conflict sources.
- Use only the merged owned reader bundle; bind every record to the authorized repository, assigned PR, exact head, and triggering object.
- Replace the prior decoder atomically with a hard stop and no compatibility or rollback path.
- Exclude product repair, technical adjudication, bodies, logs, raw payloads, credentials, mutation, persistence, retry, replay, scheduler, and fallback behavior.

## Acceptance criteria

- [ ] Pull-request categories and state, commit-status outcomes, and completed check/workflow failure conclusions are source-valid and impossible combinations are rejected.
- [ ] Every supported failure is bound to the assigned exact head and triggering object; zero, multiple, foreign, stale, malformed, nonterminal, and mismatched evidence fails closed.
- [ ] Gizmo receives only the bounded summary needed to route a specialist and never reads GitHub job evidence.
- [ ] Focused source, terminal-state, mismatch, blocker, summary, live canary, Security, hosted exact-head, readiness, merge, remote verification, and Workbench evidence pass.

## Progress

- Waiting for bounded failure-evidence readers to merge and close.

## References

- [Bounded failure evidence](proactive-pr-steward-failure-summary.md)
- [Asynchronous exact-head observation](proactive-pr-steward-observation.md)
