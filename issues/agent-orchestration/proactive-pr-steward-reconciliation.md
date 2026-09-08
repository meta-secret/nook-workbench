---
title: Exact PR Steward failure reconciliation
status: proposed
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: proactive-pr-steward-reconciliation
created_at: 2026-09-08T05:58:27Z
updated_at: 2026-09-08T05:58:27Z
source_issues: []
related_prs: []
depends_on:
  - issues/agent-orchestration/proactive-pr-steward.md
---

# Exact PR Steward failure reconciliation

## Context

The [agent orchestration feature](README.md) first needs a stable compact event
and review-routing contract. This dependent slice adds exact GitHub failure
evidence only after that foundation is merged and verified.

## Outcome

PR Steward reconciles an actionable job, check, workflow, status, or pull
request notification against the assigned exact head and returns a bounded
failure summary. Gizmo receives the summary and routes the responsible Team
Agent without investigating GitHub jobs itself.

## Scope

- Include fixed read-only GitHub API capabilities, exact object attribution,
  bounded status pagination, safe URLs, failed-step summaries, sanitized
  unavailable-evidence blockers, and exhaustive source/mismatch tests.
- Exclude review/comment bodies, product repairs, technical adjudication,
  persistent services, schedulers, queues, journals, retry, replay, and
  compatibility or migration fallbacks.

## Acceptance criteria

- [ ] Every supported failure source is bound to the authorized repository,
      assigned PR, exact head, triggering object, terminal state, and fixed
      GitHub API host.
- [ ] PR Steward emits a bounded actionable summary or sanitized blocker while
      stale and foreign-head events remain suppressed.
- [ ] Gizmo routes the summary to a functional specialist without performing
      GitHub job investigation.
- [ ] Focused source/mismatch/security tests, hosted exact-head validation,
      readiness, merge verification, and Workbench closeout pass.

## Progress

- Waiting for the compact routing foundation to merge.

## Findings and decisions

- This is a sequential PR, created from fresh `origin/main` only after its
  predecessor is remotely merged and closed out.

## References

- [Routing foundation](proactive-pr-steward.md)
- [Nook PR #1560](https://github.com/meta-secret/nook/pull/1560)
