---
title: Cache Rust ecosystem nightly toolchain layers
feature: ci-cache
issue: none
started_at: 2026-08-06T04:21:15Z
agent: cursor
---

# Task plan

## Interpreted request

Rust ecosystem fuzz and dylint jobs rebuild the nightly toolchain plus cargo-fuzz
and cargo-dylint on every run. The product main cache only covers rust-base.
Add a dedicated BuildKit registry cache for the ecosystem nightly stage, seeded
by main and reusable from PRs through the existing trusted-fallback plus
isolated PR write path.

## Requirements

- Introduce a registry BuildKit cache scope for rust-ecosystem-nightly layers.
- Wire cache-from and cache-to for ecosystem nightly, fuzz-smoke, and dylint Bake
  targets so mode=max can export the shared nightly parent.
- On main ecosystem workflow runs, write the trusted buildcache lineage.
- On PR ecosystem workflow runs, keep isolated remote-buildcache writes with main
  fallback.
- Leave product rust-base and rust-deps cache scopes unchanged.

## Constraints and exclusions

- Do not grant PRs write access to trusted main buildcache refs.
- Do not fold nightly layers into rust-base; keep ecosystem tooling separate.
- No local heavy Docker builds; validate through hosted CI.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Add rust_ecosystem_nightly_cache_from/to variables in docker-bake.hcl.
3. Point nightly, fuzz-smoke, and dylint targets at that cache pair.
4. Update rust-ecosystem.yml docker setup so main writes and PRs use isolated
   write with main fallback.
5. Format, commit, open PR, and validate on GitHub Actions.

## Completion evidence

- Bake config exposes a dedicated ecosystem-nightly cache scope.
- Main ecosystem jobs can export that scope; PR jobs restore it with isolated
  write enabled.
- Hosted fuzz or dylint run shows the nightly stage as CACHED after a seeded
  cache, or CI proves the cache-to export path.

## Safety review

- No raw prompts, transcripts, secrets, private data, raw logs, or local paths.
