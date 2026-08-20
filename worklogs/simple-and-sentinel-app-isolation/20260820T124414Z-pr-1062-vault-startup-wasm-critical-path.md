---
title: Reduce the vault startup WASM critical path
feature: simple-and-sentinel-app-isolation
issue: issues/simple-and-sentinel-app-isolation/reduce-vault-startup-wasm-critical-path.md
plan: plans/simple-and-sentinel-app-isolation/20260820T051625Z-vault-startup-wasm-critical-path.md
nook_pr: https://github.com/meta-secret/nook/pull/1062
status: completed
started_at: 2026-08-20T05:16:25Z
finished_at: 2026-08-20T12:44:14Z
agent: codex
---

# Reduce the vault startup WASM critical path

## Outcome

[Nook PR 1062](https://github.com/meta-secret/nook/pull/1062) is
squash-merged as `e9c1fdee43b0356e98c2345944acac9263668be2`.

Simple and Sentinel now paint a localized, inert startup shell before the
vault WASM settles. The application mounts only after the Rust engine is ready.
Failures replace the shell with an honest localized unavailable state while
still surfacing the original browser error.

## Delivered changes

- Deferred the Svelte application import and mount until vault WASM
  initialization completes.
- Preserved Rust/WASM ownership of immutable application identity and extension
  scope values.
- Removed companion WASM from ordinary vault startup. Simple and the unified
  test harness activate the extension connection runtime explicitly; Sentinel
  does not import it.
- Kept one shared tree-shaken vault WASM artifact for Simple and Sentinel rather
  than adding another downloadable companion binary.
- Added production preload generation for the fingerprinted vault WASM asset,
  release optimization, compressed-size reporting, and artifact budgets.
- Added targeted Playwright demo coverage for pending, ready, failure, browser
  error propagation, reduced motion, and inherited-locale-key fallback.
- Updated the owning product specification, Rust/WASM reference, preflight
  invariants, and build handoff contracts.

## Implementation problems

- Successive hosted runs exposed authored explicit-state debt, Rust/WASM export
  and localization contracts, dependency-source policy, and an inaccessible
  upstream Git source. The dependency is now a checksum-verified vendored
  source with repository policy coverage.
- Hive initially omitted that vendored source from its Docker build context.
  The image stages now copy it explicitly.
- Review found three issues: Sentinel could retain extension runtime code,
  startup errors were swallowed, and inherited locale keys could be selected.
  Each finding received a targeted fix and regression proof before its thread
  was resolved.
- The penultimate exact-head run found a stale preflight positive assertion.
  Updating that assertion produced the final green head.

## Validation

- Exact head `1679ba16a814c61d01eb9542d08676d1d2041997` passed the complete PR workflow,
  Rust ecosystem checks, repository policy, and Hive verification.
- The successful PR workflow included optimized WASM build and artifact
  verification, native Rust format/clippy/tests/coverage, WASM Node tests, web
  verification, headless UI demo, preview deployment, and coverage reporting.
- The current-head Codex review reported no major issues. The complete
  paginated review audit found zero unresolved threads.
- `task pr:ready PR=1062` returned `ready: true` against the current `main`
  base with successful exact-head deployment.

## Delivery statistics

- Seven complete validation retriggers followed the first run as fixes changed
  the exact head.
- The final exact-head PR workflow completed successfully in about 21 minutes.
- The schema-validated record is published at
  [stats/ai-agent/1062.yaml](../../stats/ai-agent/1062.yaml).

## Remaining work

None for the startup-stall scope. Capability-specific WASM binary splitting
remains a separate architectural option if future measured growth exceeds the
new release budgets.
