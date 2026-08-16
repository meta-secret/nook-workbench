---
title: Consolidate automatic repository policy checks
status: done
priority: p2
automation: manual
owner: codex
created_at: 2026-08-16T06:50:56Z
updated_at: 2026-08-16T07:28:53Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1025
depends_on: []
---

# Consolidate automatic repository policy checks

## Context

Pull requests that touch Cortex, Loom, or preflight paths currently create both
`Loom` and `Source architecture` workflow runs. They share a read-only trust
boundary, Rust preflight setup, and automatic pull-request lifecycle. This
focused repair belongs to [Unplanned engineering repairs](README.md).

## Outcome

One automatic repository-policy workflow owns source architecture enforcement
for every pull request and conditionally runs Loom-specific verification when
relevant paths change. Main-push Loom coverage remains path-scoped.

## Scope

- Combine Loom and source-architecture pull-request orchestration.
- Preserve source architecture enforcement on every opened, synchronized, or
  reopened pull request.
- Preserve Loom verification for Cortex, Loom, task, and preflight changes.
- Preserve path-scoped Loom verification on Main pushes.
- Update workflow contracts and Cortex CI documentation.
- Exclude Main product validation, Hive, research, release, deployment, and
  trusted workflow-run consumers.

## Acceptance criteria

- [x] A Loom-relevant PR head creates one automatic policy workflow run.
- [x] Every PR still runs source architecture enforcement.
- [x] Loom verification skips unrelated PR changes.
- [x] Relevant Main pushes still run Loom verification.
- [x] Exact-head PR validation passes with zero unresolved threads.
- [x] The PR squash-merges and Workbench completion records are published.

## Progress

- 2026-08-16: Audited all workflow triggers after PR 1024 and identified Loom
  plus Source architecture as the only additional compatible PR-run pair.
- 2026-08-16: Opened [PR 1025](https://github.com/meta-secret/nook/pull/1025)
  with one Repository policy workflow and conditional Loom steps.
- 2026-08-16: Review found that default rename detection could hide a watched
  source moved out of its policy path. Disabled rename detection and added a
  structural contract for deletion-side classification.
- 2026-08-16: Automatic run 31933420052 and complete exact-head run
  31933444566 passed. PR 1025 squash-merged as `a589ec0eb`.

## Findings and decisions

- Do not combine Main with Loom. Main owns merged product delivery while Loom
  covers policy paths intentionally excluded from product orchestration.
- Keep Hive separate because it provisions Neo4j and infrastructure-specific
  verification.
- Keep research, release, and trusted collectors separate because their
  credentials, event sources, or trust boundaries differ.

## References

- [Nook PR 1024](https://github.com/meta-secret/nook/pull/1024)
- [Loom run 31931839083](https://github.com/meta-secret/nook/actions/runs/31931839083)
- [Source architecture run 31931839185](https://github.com/meta-secret/nook/actions/runs/31931839185)
