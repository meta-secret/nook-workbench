---
title: Local Bake contributes remote-buildcache by default
feature: rust-workspace-in-nook-platform
issue: unplanned
started_at: 2026-08-07T07:32:00Z
agent: cursor
---

# Task plan

## Interpreted request

Local Docker Bake must restore and publish shared BuildKit registry caches by
default so laptop builds feed the same PR-scoped remote-buildcache lineage that
CI consumes. Opt-out remains available when credentials are absent or the
operator disables registry cache explicitly.

## Requirements

- Local Task Bake restores `nook/remote-buildcache/**` with Main fallback.
- Local Task Bake never writes trusted `nook/buildcache/**`.
- After successful local verify bakes, publish fat scopes (same split as CI).
- CI-owned `GHA_CACHE_*` values stay workflow-controlled.
- Cortex and preflight contracts document the new local default.

## Constraints and exclusions

- Keep verify and publish as separate Bake solves to avoid thin registry indexes.
- Soft-skip when remote registry credentials are missing unless forced on.
- Opt-out via `NOOK_REGISTRY_CACHE=0`.
- No Main fingerprint publisher from laptops.

## Initial plan

1. Add a local registry-cache activator (login, scope, fingerprint, env).
2. Wire Taskfile env and ensure/publish hooks on Rust/WASM/web Bake entrypoints.
3. Update cortex cache docs and preflight assertions.
4. Format, commit, and push on PR 938.

## Completion evidence

- Local `task docker:ci:wasm:export` sets restore env and publishes PR scope.
- Preflight covers the activator and Task wiring.
- Cortex no longer claims local Bake stays zero-network for registry cache.

## Safety review

- No raw prompts, transcripts, secrets, private data, or credential values.
