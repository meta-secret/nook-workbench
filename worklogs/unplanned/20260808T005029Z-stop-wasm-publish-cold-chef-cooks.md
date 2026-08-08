---
title: Stop WASM publish cold chef cooks
feature: unplanned
issue: none
pr: 946
started_at: 20260808T003242Z
finished_at: 20260808T005029Z
agent: cursor
plan: plans/unplanned/20260808T003242Z-stop-wasm-publish-cold-chef-cooks.md
---

# Worklog

## Outcome

Merged https://github.com/meta-secret/nook/pull/946 as `e3f29d084ee562cf8d466e9745bb8e39babcced6`.

## What changed

- WASM deps restore may fall back to longer `nook-rust-wasm-source-v2`.
- WASM deps fingerprint is cook-affecting inputs only.
- WASM publish stages deps/source before rust-base.

## Validation

- Hosted preflight green.
- Exact-head PR validation green.
- WASM job `93033993393`: publish `chef-wasm-release` was CACHED via Main source-v2 with no crates.io cold cook.

## Follow-up

- First Main after merge seeds the new cook-only fingerprint once.
- Later PRs should hit that fingerprint directly; source-v2 remains bootstrap.
