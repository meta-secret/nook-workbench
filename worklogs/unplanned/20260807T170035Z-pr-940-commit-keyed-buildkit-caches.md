---
title: Commit-keyed BuildKit caches delivered
feature: unplanned
plan: plans/unplanned/20260807T153834Z-commit-keyed-buildkit-caches.md
pr: https://github.com/meta-secret/nook/pull/940
completed_at: 20260807T170035Z
agent: cursor
---

# Worklog

## Outcome

Merged PR 940. Isolated BuildKit scopes are now `-git-<40-char-sha>`.
Local publish requires a clean worktree. PR jobs key by pull-request head SHA.

## Validation

- Hosted preflight green on merge head
- Exact-head PR validation green including Native Rust and Verify and preview
- Squash-merged via `gh pr merge --squash`

## Remaining

- Registry write-once ACLs for `-git-*` tags are still client/policy-level,
  not a Zot deny-overwrite rule.
