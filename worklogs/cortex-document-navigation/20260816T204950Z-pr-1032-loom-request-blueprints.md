---
title: Loom-owned request blueprint discovery
feature: cortex-document-navigation
issue: none
plan: plans/cortex-document-navigation/20260816T202858Z-loom-owned-request-blueprints.md
nook_pr: 1032
status: completed
started_at: 2026-08-16T20:28:58Z
finished_at: 2026-08-16T20:47:20Z
agent: codex
---

# Loom-owned request blueprint discovery

## Outcome

Loom discovery now returns the exact canonical YAML blueprint for every direct
request. Cortex retains all document maps, relationships, topic headings,
purpose, and invocation guidance without maintaining duplicate request bodies.

## Progress

- Added `exampleYaml` to each `toolsList` discovery entry.
- Reused Loom's existing canonical parameter files through the blueprint loader.
- Removed copied request YAML from the Cortex Loom-tools reference.
- Added exact file-content coverage for every discoverable request.
- Squash-merged Nook PR 1032.

## Implementation problems

- The GitHub REST quota briefly blocked the superseding task plan and later
  blocked the normal completion-record publisher.
- `origin/main` advanced before the first push, so the branch was rebased and
  pre-push hygiene was repeated on the final head.
- Agentic-only paths do not produce the globally required preview deployment.
  The ready PR therefore used the repository-role merge bypass after the
  exact-head readiness audit passed.
- Local branch deletion could not switch to `main` because another worktree
  owns that branch. The remote merge and remote branch deletion succeeded.

## Decisions

- Keep all 84 Cortex `Document map` and `Relationships` sections in Markdown.
- Move only mechanically identical request bodies into the Loom-owned surface.
- Keep semantic workflow topology, authored status catalogs, and explanatory
  examples in Cortex.
- Do not create a separate Cortex navigation index in this activity.

## Validation

- `bun test tests/codec.test.ts`
- `bun run check`
- `bun run lint`
- `task loom:tools-list`
- `task loom:cortex-audit`
- `task loom:pre-push`
- Hosted `Remote task` run 31971212900 passed for `preflight`.
- Repository policy passed on the exact PR head.
- Local and Cloud Codex reviews reported no findings.
- `task pr:ready PR=1032` returned `ready: true`.
- Nook PR: https://github.com/meta-secret/nook/pull/1032

## Remaining work

None.
