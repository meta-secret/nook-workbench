---
title: Hive dispatcher process exhaustion completion
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
plan: plans/hive-isolated-agent-platform/20260802T171847Z-repair-dispatcher-process-exhaustion.md
nook_pr: 911
status: completed
started_at: 2026-08-02T17:18:47Z
finished_at: 2026-08-03T10:32:28Z
agent: codex
---

# Hive dispatcher process exhaustion completion

## Outcome

Hive again owns Main-failure handoffs end to end. The dispatcher no longer
leaks detached Git children, public workflow reads avoid anonymous API quota,
routine public-Zot deployment preserves cluster-rotated Codex credentials, and
explicit rotation is portable across the supported operator shell.

## Delivery

- PR #905 made Git cleanup foreground-owned and added health and progress
  detection for stalled dispatcher work.
- PR #906 disabled implicit Git maintenance in the polling checkout.
- PR #907 reconciled public GitHub run pages without a dispatcher token or
  anonymous REST quota dependency.
- PR #908 separated explicit credential rotation from routine deployment,
  serialized infrastructure mutation, streamed credentials without plaintext
  staging, and persisted replica recovery state in the cluster.
- PR #911 fixed the macOS Bash transport construction exposed by live rotation
  and made its behavioral harness exercise the actual outer transport path.

## Validation

- Every delivered PR passed focused Hive and complete exact-head hosted gates.
- The original transient Main run succeeded on its unchanged retry.
- Final merge `44ae7e6ff28237a37ecc2d19aaf0dc69e7c4b436` passed Main run
  [30803662302](https://github.com/meta-secret/nook/actions/runs/30803662302):
  native Rust, WASM, web build, UI demos, extension e2e, web e2e, and
  development deployment all succeeded.
- Production is pinned to public Zot digest
  `sha256:95e575769d203a043b3f94734a88833a46984a89d3ba91b2c78275b45f7ce4dc`.
  Four Hive workers and all controllers are ready with zero restarts.
- Dispatcher health and progress passed for more than two polling intervals,
  proving current heartbeats and zero unreaped child processes.
- Explicit credential rotation completed, routine deploy reported that it
  preserved cluster-persisted authentication, and replica recovery state was
  cleared after restoring four workers.

## Remaining work

None.
