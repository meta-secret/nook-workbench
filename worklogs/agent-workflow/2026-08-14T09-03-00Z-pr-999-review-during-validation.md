---
title: Run Codex review during exact-head validation
feature: agent-workflow
issue: none
plan: plans/agent-workflow/2026-08-14T03-16-08Z-review-before-validation.md
nook_pr: 999
status: completed
started_at: 2026-08-14T03:16:08Z
finished_at: 2026-08-14T08:59:01Z
agent: codex
---

# Run Codex review during exact-head validation

## Outcome

PR 999 added an advisory local Codex review before the first owner-authored
push. Complete validation now starts first and then issues one idempotent
exact-head Cloud review request. GitHub Actions runtime is the entire review
window. Readiness handles feedback already present and never waits for a review
after checks finish.

## Progress

- Added local and Cloud review Task entrypoints.
- Kept Cloud request failure non-blocking after validation dispatch.
- Added PR-head checks before and after the review request.
- Classified non-actionable agent handoff comments as status.
- Added contract and audit regression coverage.
- Aligned active agent skills, Cortex workflow guidance, and implementation
  prompts.
- Integrated the concurrent Loom workflow-engine change from main.

## Implementation problems

- Initial guidance retained contradictory review and validation instructions.
  Codex review found the remaining paths while Actions were running.
- One complete run had a transient web verification failure and passed on an
  unchanged-head focused check and full retry.
- Main advanced during validation and required conflict resolution plus a new
  exact-head run.
- Docker-backed pre-push hygiene took several minutes on small documentation
  fixes and dominated the final correction cycles.

## Decisions

- Do not add a review grace period or post-check wait.
- Run local advisory review only before the first owner-authored push.
- Use focused hosted tasks only when they shorten diagnosis.
- Trigger complete validation once at the final boundary for each replacement
  head.
- Treat review feedback that already exists as mandatory, without making the
  reviewer itself a merge requirement.

## Validation

- Focused preflight run 31783849165 passed on the final contract-test batch.
- Exact-head PR run 31785627242 passed on the merged branch head.
- Readiness passed with current main, a successful preview deployment, and zero
  unresolved conversations.
- PR 999 squash-merged as commit 75a79facb002d31e4a7fc424be83bc3cbba37c44.

## Remaining work

None. Pre-push formatting latency is recorded as delivery evidence but requires
separate measurement before proposing a source change.
