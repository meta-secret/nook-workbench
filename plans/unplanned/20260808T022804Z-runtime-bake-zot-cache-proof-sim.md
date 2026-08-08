---
title: Runtime Bake Zot cache proof sim
feature: unplanned
issue: none
started_at: 20260808T022804Z
agent: cursor
---

# Task plan

## Interpreted request

Static Bake proofs did not stop PR ecosystem jobs from cold-installing
cargo-dylint. Add an infra runtime simulation under infra/sim/bake-cache that
spins up ephemeral Docker network plus Zot, mirrors the parent/leaf Bake cache
graph, and asserts CACHED on a fresh builder. Fix nightly and policy-tools Main
FALLBACK restore to match the passing scenario.

## Requirements

- Fixtures in infra/sim/bake-cache (Zot config, mock Dockerfiles, Bake).
- task infra:bake-cache:prove with cleanup of network, Zot, builders.
- Scenarios: Main publish, Main fresh restore CACHED, short-chain orphan,
  PR without Main fallback cold.
- Real nightly/policy-tools FALLBACK restores Main buildcache.
- Preflight domain wiring, remote allowlist, cortex updates.

## Constraints

- No standalone .sh under infra/.
- No Compose service named registry.
- infra/sim/ is the home for future sims.

## Completion evidence

- Local or remote bake-cache:prove green.
- Hosted preflight green.
- Exact-head PR validation green and merged.
