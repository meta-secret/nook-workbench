---
title: Stop orphaned Rust BuildKit recompiles
feature: unplanned
issue: none
pr: 944
started_at: 20260807T224855Z
finished_at: 20260808T000107Z
agent: cursor
plan: plans/unplanned/20260807T224855Z-stop-orphaned-rust-buildkit-recompiles.md
---

# Worklog

## Outcome

Merged https://github.com/meta-secret/nook/pull/944 as `bdad5e1ebc83fea0c4a1fa1940c52d1991217e8c`.

## What changed

- Native deps/source no longer import short-parent `rust-base` cache indexes.
- Rotated scopes to `nook-rust-deps-v3` and `nook-rust-native-source-v3`.
- Contracts and cortex now require own-scope restore for product native deps.

## Validation

- Hosted `task remote TASK_NAME=preflight` green.
- Exact-head `task pr:validate` green after one flake retry on Native preflight frontend.

## Follow-up

- First Main after merge cold-seeds v3 once.
- Later Main/PR runs with unchanged Cargo inputs should show chef cooks CACHED.
