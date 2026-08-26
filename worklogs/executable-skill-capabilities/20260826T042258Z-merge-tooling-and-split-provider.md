---
title: Merge shared tooling and split the dormant provider
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/runtime-and-article-structure.md
plan: plans/executable-skill-capabilities/20260826T035206Z-fourteen-slice-github-stack.md
nook_pr: 1088
status: completed
started_at: 2026-08-26T03:35:00Z
finished_at: 2026-08-26T04:22:58Z
agent: codex
---

# Merge shared tooling and split the dormant provider

## Outcome

The first green layer of GitHub stack #1112 merged to `main`. The oversized
dormant provider PR was replaced by three focused successor PRs for semantic
policy, transport, and independent verification.

## Progress

- Merged PR #1088 through the GitHub stack at merge commit
  `74755e007074ff8e34f837e327bb46067dfc3183`.
- Kept PR #1088 to 2,733 immediate-base changed lines.
- Replaced PR #1089 with a 661-line semantic-core layer.
- Published PR #1114 as an 882-line transport layer.
- Published PR #1115 as a 576-line independent verifier and manifest layer.
- Published the immutable fourteen-slice GitHub-stack plan.
- Restacked every open successor after the bottom merge.

## Implementation problems

- Exact review found that changed-only Hive formatting installed dependencies
  in the task worktree and that full formatting omitted the canonical changed
  path contract.
- Independent review then found stale formatter files could survive remote k0s
  synchronization.
- The old provider combined semantic policy, parser fixtures, transport,
  verification, and manifest concerns in one 3,756-line PR.

## Decisions

- The Hive image owns one baked formatter bundle. Guest worktrees never install
  formatter dependencies.
- Remote formatter deployment uses bounded atomic directory replacement so
  deletions propagate.
- Provider policy consumes only six semantic states. Markdown and HTML parser
  representations remain owned by the active Loom predecessor.
- Transport capacity, independent result verification, and the executable
  manifest are separate review boundaries.

## Validation

- PR #1088 exact-head repository validation, Pages deployment, remote
  `hive:verify`, review-thread audit, and readiness audit passed.
- PR #1089 focused verification passed 17 tests with 28 assertions.
- PR #1114 focused verification passed 28 tests with 66 assertions.
- PR #1115 focused verification passed 33 tests with 79 assertions.
- Independent exact reviews reported no findings for all three provider layers.
- All published provider source files remain below 1,000 lines.

## Remaining work

- Finish exact-head review repairs and validation for semantic engine PR #1111.
- Merge corpus and active-audit predecessors in stack order.
- Validate and merge the three provider layers independently.
- Split reachability into finite-loader and closure/provenance successors before
  replaying source policy or runtime work.
