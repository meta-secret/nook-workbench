---
title: Ban empty Bake cache-from clears
feature: unplanned
issue: none
started_at: 20260807T151107Z
agent: cursor
---

# Task plan

## Interpreted request

Stop BuildKit cold rebuilds caused by Tasks wiping parent `cache-from` during
leaf bakes. Cached layers must remain usable. Empty `cache-from=` overrides are
forbidden. Cortex must state that clearing cache is an architectural failure.
Preflight must reject empty cache-from clears.

## Requirements

- Remove every empty `cache-from=` Bake override from Taskfiles and scripts.
- Keep leaf scopes own-scope-only with `mode=max` parent embed.
- Document that agents must redesign the Bake graph instead of clearing cache.
- Add a preflight contract that fails on empty `cache-from=` overrides.
- Update cortex cache policy that currently instructs parent cache-from clears.
- Update tests that currently require empty cache-from clears.

## Constraints and exclusions

- Read-only verify may still clear `cache-to` so leaves do not publish during
  check-only bakes.
- Local `GHA_CACHE_ENABLED == ""` empty HCL lists remain valid.
- No product behavior changes outside Bake/Task cache wiring.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Delete empty cache-from overrides and the comments that justify them.
3. Align docker-bake comments with own-scope leaf restore.
4. Replace cortex guidance that tells Tasks to clear parent cache-from.
5. Invert preflight tests and add a repository-wide empty cache-from ban.
6. Format, push, open PR, validate, and merge.

## Completion evidence

- No authored Task/script uses `--set '*.cache-from='`.
- Preflight fails if such an override is reintroduced.
- Cortex forbids cache clearing as architecture policy.
- PR checks green and squash-merged.

## Safety review

- No raw prompt, transcript, secrets, private data, or local paths.
