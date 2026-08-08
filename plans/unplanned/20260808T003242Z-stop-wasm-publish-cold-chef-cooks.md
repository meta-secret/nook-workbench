---
title: Stop WASM publish cold chef cooks
feature: unplanned
issue: none
started_at: 20260808T003242Z
agent: cursor
---

# Task plan

## Interpreted request

PR WASM jobs still fully re-cook cargo-chef during cache publish even when
verify already hit CACHED chef layers from Main source cache. Fix publish
restore so unchanged WASM dependency cooks stay CACHED.

## Requirements

- WASM deps cache-from may restore longer source-v2 indexes when the
  fingerprinted deps scope is missing.
- WASM deps fingerprint must rotate only on cook-affecting inputs, not Bake
  cache wiring alone.
- Publish must not rematerialize rust-base apt or chef cooks when source-v2
  already holds those layers.
- Preflight contracts and cortex must match the restore graph.
- Evidence is CACHED chef-wasm-release on publish when Cargo inputs are
  unchanged.

## Constraints and exclusions

- Do not import shorter rust-base or native rust-deps into WASM deps
  cache-from.
- Empty Bake cache-from or cache-to clears remain prohibited.
- Main trusted refs stay under nook/buildcache; PRs write git-scoped
  remote-buildcache.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Add source-v2 soft fallback to rust_wasm_deps_cache_from.
3. Narrow GHA_RUST_WASM_DEPS_SCOPE hashFiles to cook-affecting inputs.
4. Adjust publish staging if rust-base-publish still orphans local layers.
5. Update contracts and cortex; format; push; validate; merge.

## Completion evidence

- Hosted preflight green.
- Exact-head PR validation green.
- WASM job logs show chef cook CACHED during builder-wasm-deps-publish when
  Cargo inputs are unchanged.

## Safety review

- No secrets, raw prompts, or private data.
