---
title: PR SeaweedFS sccache and isolated BuildKit write scopes
feature: agent-workflow
issue: none
plan: plans/agent-workflow/20260805-154800-pr-sccache-and-isolated-buildkit.md
nook_pr: https://github.com/meta-secret/nook/pull/923
status: completed
started_at: 2026-08-05T15:48:00Z
finished_at: 2026-08-05T16:06:58Z
agent: cursor
---

# PR SeaweedFS sccache and isolated BuildKit write scopes

## Outcome

Merged PR 923. Same-repository PR and Rust ecosystem Docker jobs now use
SeaweedFS sccache and export PR-scoped BuildKit refs under remote-buildcache
while restoring Main's trusted buildcache lineage.

## Progress

- Extended isolated-cache-write for pull_request events (`-pr-<number>` scopes).
- Mounted Main SeaweedFS credentials on pr.yml and rust-ecosystem.yml Docker jobs.
- Added docker-bake-sccache.sh so ecosystem Bake receives secret mounts.
- Updated preflight contracts and CI policy docs.

## Implementation problems

- Initial preflight failed on rustfmt in sccache contract tests; fixed and revalidated.

## Decisions

- Follow Hive's trust model: same-repository PR jobs get Main sccache R/W; forks stay secret-free.
- Keep Main `nook/buildcache/**` write-exclusive to Main publish; PR writes only remote-buildcache.

## Validation

- Hosted preflight passed.
- Exact-head Native Rust verification finished in 7m10s with `NOOK_SCCACHE_BACKEND=remote`.
- Logs showed PR scope `-pr-923` and Main fallback restore.
- `task pr:ready PR=923` reported ready; squash-merged as ea90f81592d92c35a648c597c0660c1f232d8d48.

## Remaining work

- None.
