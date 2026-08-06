---
title: Fix thin BuildKit re-exports across PR Rust jobs
feature: ci-cache
issue: none
plan: plans/ci-cache/20260806-074240-buildkit-all-jobs-cache.md
nook_pr: https://github.com/meta-secret/nook/pull/934
status: completed
started_at: 2026-08-06T07:42:40Z
finished_at: 2026-08-06T09:50:40Z
agent: cursor
---

# Work summary

## Outcome

Same-SHA proof on PR #934 shows policy-tools and nightly toolchain stages as
BuildKit `CACHED`. Thin registry re-exports and short-chain rust-base importers
were the remaining miss sources.

## Progress

- Rotated nightly and policy-tools scopes to v3.
- Removed rust-base from ecosystem nightly/policy/tools cache-from lists.
- Ecosystem tasks now import with cache-to cleared, then publish with
  cache-from cleared.
- PR Native/WASM/Web verify with writes off, then call Main publish tasks.
- WASM publish branches for PR/Remote isolated scopes versus Main trusted
  fingerprint export.

## Implementation problems

- Registry cache export is not additive. A fully-CACHED bake that still
  cache-to the same ref can overwrite a warm index with a thin one.
- Importing trusted rust-base beside a deeper tools/nightly scope lets the
  shorter parent chain win and orphans the toolchain RUN.

## Decisions

- Match Main/WASM publish hygiene for ecosystem and PR product jobs.
- Keep mode=max dedicated scopes as the parent source for toolchain stages.
- Treat deny/audit after COPY . as expected re-run cost.

## Validation

- Seed: https://github.com/meta-secret/nook/actions/runs/31089532791
- Proof: https://github.com/meta-secret/nook/actions/runs/31090185124
- Proof policy job: tools RUN followed by `CACHED`.
- Proof dylint job: nightly RUN followed by `CACHED`, no rustup sync.
