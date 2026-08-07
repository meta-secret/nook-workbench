---
title: Stop orphaned Rust BuildKit recompiles
feature: unplanned
issue: none
started_at: 20260807T224855Z
agent: cursor
---

# Task plan

## Interpreted request

Main and PR builds still spend minutes re-materializing Rust toolchains and
re-running cargo-chef cooks for unchanged crates. Fix BuildKit restore so
unchanged Rust layers stay CACHED across commits and PRs.

## Requirements

- Remove short-chain rust-base importers from native deps/source cache-from lists.
- Keep rust-base restoration via Bake contexts only for dependents that need it.
- Stop preflight from COPY-ing the entire repo into the test stage.
- Keep Main trusted buildcache lineage fat via scoped *-publish writers.
- Preflight contracts and cortex must match the new restore graph.

## Constraints and exclusions

- Do not reintroduce empty cache-from/cache-to clears.
- Do not write Main buildcache from PR/remote credentials.
- Git-commit remote scopes remain the isolated write lane.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Drop short-chain rust-base cache-from entries; fix preflight context COPY.
3. Update contracts/docs; format; push; validate.

## Completion evidence

- Hosted preflight green.
- Exact-head PR validation green.
- Native Main/PR logs show chef cooks CACHED when Cargo inputs unchanged.

## Safety review

- No secrets, prompts, or private data.
