---
title: Commit-keyed immutable BuildKit caches
feature: unplanned
issue: none
started_at: 20260807T153834Z
agent: cursor
related_prs:
  - https://github.com/meta-secret/nook/pull/940
---

# Task plan

## Interpreted request

Replace mutable PR-number and remote-task BuildKit cache suffixes with
write-once git-commit scopes so local Bake layers can be restored by PR and
Remote CI for the same commit. Keep trusted Main `nook/buildcache` lineage
unsuffixed. Refuse local publish from a dirty worktree so a commit tag cannot
lie about uncommitted content.

## Requirements

- Isolated cache scopes use `-git-<40-char-sha>` only.
- Remove `-pr-N`, `-local-<hash>`, and `-remote-<branch>-task-<task>` suffixes.
- PR jobs key scopes by pull request head SHA so local HEAD publish matches.
- Remote/dispatch jobs key scopes by the checked-out commit SHA.
- Local Task Bake restore uses `-git-$(git rev-parse HEAD)` when Remote
  credentials exist.
- Local registry publish runs only on a clean worktree.
- Publish treats an existing `-git-*` tag as write-once (skip or fail on
  digest mismatch); never overwrite Main from Remote credentials.
- Preflight contracts and cortex docs describe commit-keyed isolation and the
  dirty-tree publish ban.
- Empty Bake `cache-from=` / `cache-to=` clears remain prohibited.

## Constraints and exclusions

- Main trusted refs stay on stable names under `nook/buildcache/**`.
- WASM Main fingerprint scopes remain content-hashed; isolated WASM writes use
  the git suffix path already selected by `GHA_CACHE_SCOPE_SUFFIX`.
- No GitHub Actions cache storage for BuildKit layers.
- Do not keep dual `-pr-N` fallbacks during migration.

## Initial plan

1. Publish this plan, then implement on PR 940.
2. Change `nook-docker-setup` and root Taskfile scope derivation to `-git-<sha>`.
3. Gate local publish on a clean tree; document/enforce write-once for git tags.
4. Update preflight assertions and cortex cache policy.
5. Format, push, hosted preflight, then exact-head PR validation.

## Completion evidence

- Preflight contracts reject `-pr-` / `-remote-` / `-local-` scope suffixes for
  BuildKit isolation and require `-git-` plus dirty publish refusal.
- Cortex quality/CI docs match the new model.
- PR 940 hosted checks green on the implementing head.

## Safety review

- No raw prompts, secrets, private data, or local credential paths.
