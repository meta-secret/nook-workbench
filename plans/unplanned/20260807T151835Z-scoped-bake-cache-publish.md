---
title: Scoped Bake publish targets without empty cache clears
feature: unplanned
issue: none
started_at: 20260807T151835Z
agent: cursor
---

# Task plan

## Interpreted request

Extend the cache-clear ban to empty `cache-to=` overrides. Replace wipe-style
clears with explicit PR/Main scoped publish targets so named-context parents
restore without writing, while owners write only their named Zot refs.

## Requirements

- Context parent Bake targets keep `cache-from` and never declare `cache-to`.
- Dedicated `*-publish` targets write `mode=max` refs under
  `nook/buildcache` (Main) or `nook/remote-buildcache` plus
  `GHA_CACHE_SCOPE_SUFFIX` (PR/Remote).
- Remove every empty `cache-to=` Bake override from Taskfiles and scripts.
- Preflight rejects empty `cache-from=` and empty `cache-to=`.
- Cortex states both clears are prohibited; agents must use scoped names.

## Constraints and exclusions

- Leaf verify stays write-disabled through unset `GHA_CACHE_WRITE_ENABLED`.
- No product runtime behavior changes.

## Initial plan

1. Add scoped `*-publish` targets for context parents.
2. Point publishers at those targets and delete empty cache-to clears.
3. Update cortex and preflight contracts.
4. Format, push, and re-validate PR 940.

## Completion evidence

- No authored caller uses empty `cache-to=` or `cache-from=`.
- Publish paths bake named `*-publish` targets.
- Preflight and PR checks green.

## Safety review

- No raw prompt, transcript, secrets, private data, or local paths.
