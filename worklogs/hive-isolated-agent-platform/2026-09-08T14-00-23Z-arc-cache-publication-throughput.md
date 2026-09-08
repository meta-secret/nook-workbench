---
title: ARC cache publication throughput completion
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/eliminate-arc-cache-publication-tail.md
plan: plans/hive-isolated-agent-platform/2026-09-08T05-45-10Z-arc-cache-publication-throughput.md
nook_pr: 1562
status: completed
started_at: 2026-09-08T05:45:10Z
finished_at: 2026-09-08T14:00:23Z
agent: codex
---

# Work summary

## Outcome

Merged the ARC/Main cache-throughput changes in Nook PR 1562 and the focused
Main task-dispatch repair in PR 1566. The exact repair merge commit's complete
Main workflow passed. Native Rust verification improved from 14m20s to 9m05s,
a 5m15s or 36.6% reduction, while preserving portable cache publication.

## Progress

- Reduced sequential Docker cache-reference probes from fourteen to three for
  native and WASM, one for preflight and web, and zero for the portable WASM
  publication proof.
- Kept validation and publication on the same verified BuildKit shard, moved
  required dependencies to lightweight publication-result gates, and reduced
  native publication to one complete `builder-debug` graph.
- Added cache export preparation, registry-send, total-duration, garbage
  collection, and frontend-panic diagnostics.
- Pinned the repository's Dockerfiles to an immutable current Dockerfile
  frontend and restored all four declared node-local BuildKit shards without
  deleting cache data.
- Added an executable contract for the public Main Rust entrypoint after the
  first replacement Main run exposed an invalid internal helper dispatch.

## Implementation problems

- The original 14m20s job spent 9m40s publishing cache and only 3m21s in Rust
  validation. Registry transfer was short; repeated BuildKit `mode=max`
  preparation of overlapping graphs caused the long tail.
- The first post-merge Main run exposed that dynamically invoking the Rust host
  helper conflicted with its internal-only Task declaration. PR 1566 removed
  that invalid declaration and added a no-Git-metadata execution contract.
- An older Dockerfile frontend produced repeated conversion panics. Pinning the
  current immutable frontend eliminated those panics in final validation.
- One declared BuildKit shard was unavailable because its worker was stopped.
  The worker and operator path were repaired, the retained cache volume was
  preserved, and four of four shards returned ready.

## Decisions

- Preserve portable registry cache correctness; optimize the number and shape
  of published graphs instead of deleting cache or replacing the isolation
  model with shared writable state.
- Prefer reduced probe sets over parallelizing fourteen probes. Only references
  consumed by each job remain.
- Treat BuildKit preparation as the remaining optimization boundary. Final
  telemetry measured 190.3s preparing the native cache and 16.3s sending it,
  which rules out registry bandwidth as the primary residual bottleneck.
- Keep compiler reuse evidence separate from BuildKit step labels. Final native
  telemetry reported 2,760 sccache hits, zero misses, zero errors, and zero
  writes across 54 reports.

## Validation

- Nook PR 1562 was reviewed, all 38 review threads were resolved, repository
  readiness passed, and it squash-merged as
  `f197fb66335fce1639c2b349fc71a23eaa8e1fc2`.
- Nook PR 1566 passed exact-head PR run 34230257985, repository policy run
  34230165636, Pages deployment 6328497742, Codex review, all review-thread
  resolution, and repository readiness. It squash-merged as
  `df520b9b7e4f5b3c9d691ddf0f661ca62afbc9da`.
- Main run 34232082164 passed on the exact PR 1566 merge commit, including
  preflight, Native Rust, WASM, web, portable cache proof, browser and extension
  E2E, and development deployment.
- Native job 102081706114 completed in 9m05s: Docker setup 3s, validation 2m47s,
  publication 6m06s. Its cache export reported 190.3s preparation, 16.3s send,
  and 206.6s total export.
- The final run showed no Dockerfile frontend panic and no compiler cache miss.
  The verified shard fleet was four of four ready, including a real runner on
  the restored shard.

## Remaining work

None.
