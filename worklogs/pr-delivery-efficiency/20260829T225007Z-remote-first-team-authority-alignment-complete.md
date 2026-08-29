---
title: Restore remote-first team authority alignment
feature: pr-delivery-efficiency
issue: null
plan: plans/pr-delivery-efficiency/20260829T222025Z-restore-remote-first-team-authority-alignment.md
nook_pr: https://github.com/meta-secret/nook/pull/1222
status: completed
started_at: 2026-08-29T22:20:25Z
finished_at: 2026-08-29T22:50:07Z
agent: cursor
---

# Restore remote-first team authority alignment

## Outcome

Pull request 1222 squash-merged as `b5af5eaa547238b4f72d7b1a6be807efd98978aa`. Indexed team worker authorities now return committed handoffs. Gizmo owns publication, hosted evidence, readiness, and merge. The earlier publisher slice remains on `main` as `e903dd22ade01f7533acf91c134eab5e58aff7ea`.

## Progress

- Restored the deferred AI, development-core, security, web, shared, and remaining SRE caller wording from the last coherent pre-ceiling head.
- Named Gizmo as the actor for focused remote dispatch and complete validation.
- Reran Gizmo-owned pre-push after correction and promotion handoffs.
- Moved hosted extension proof and source-size scanning onto the post-push path.
- Cleaned session memory before the promotion commit.
- Qualified trusted-publisher PAT and `docker run` isolation claims without reopening the merged wrapper.

## Implementation problems

- Exact-head Codex review found unqualified dispatch verbs, missing correction hygiene, and a Security verdict that closed before deployed evidence existed.
- The next current-head review found a local extension gate, a required focused preflight on ready heads, session memory committed before cleanup, and two overstated publisher guarantees.
- GitHub's main ruleset still required a `github-pages` deployment. Cortex-only PRs skip the product pipeline, so readiness used the documented admin bypass after `task pr:ready` returned `ready: true`.

## Decisions

- Kept this slice Cortex-only and independent from current `main`.
- Did not reopen the merged weekly publisher harness or the separate delegation-runtime task.
- Qualified wrapper and rerun-token claims in documentation instead of expanding isolation code in this slice.

## Validation

- Exact published head before merge: `a1ff0537786a9b5bf70a962e78fa6d89c007ea78`.
- Authored line count against the merge-base: 460.
- `task loom:cortex-audit` returned `auditOk: true`.
- `task loom:pre-push` returned `formatOk: true` and `uiDemoOk: true`.
- Hosted repository policy run 33279299337 passed.
- Current-head Codex review settled with no major issues.
- Zero unresolved threads.
- `task pr:ready PR=1222` returned `ready: true`.

## Remaining work

None. Ordinary delegation runtime remains owned by its separate active task.
