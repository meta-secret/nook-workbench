---
title: Prove and fix all-job Rust Docker cache reuse
feature: unplanned
issue: issues/unplanned/remove-redis-from-hosted-rust-builds.md
plan: plans/unplanned/20260808T051149Z-pr950-all-job-rust-cache-audit.md
nook_pr: https://github.com/meta-secret/nook/pull/950
status: completed
started_at: 2026-08-08T05:11:49Z
finished_at: 2026-08-08T12:30:53Z
agent: codex
---

# Prove and fix all-job Rust Docker cache reuse

## Outcome

PR 950 merged as `a70a51c0a231c118591cec89cd7a1eee88154a2c`.
Every Rust-producing pull-request job now owns or consumes a portable
full-graph BuildKit cache. An exact-head replay emitted zero Rust compilation
messages across the complete job matrix.

## Progress

- Consolidated product Rust stages into one Dockerfile lineage so nested target
  identities cannot orphan dependency and tool layers.
- Made trusted Main the cross-PR seed and restricted pull-request writes to
  isolated exact-head registry refs.
- Added hosted validation and promotion for quarantined local dependency-cache
  candidates, allowing useful local setup work to feed later pull requests
  without trusting branch-controlled publication.
- Added source-free cache stages for Kani and cfg-specific Loom release
  dependencies.
- Added a dedicated WASM Node full-graph scope so its parallel job cannot race
  the WASM package exporter.
- Expanded static cache theorems and the ephemeral Bake plus Zot simulation
  through Scenario W.

## Implementation problems

- Importing short parent scopes together with a full leaf caused BuildKit to
  select a lineage that reran expensive child stages. Exact-ref probes now
  choose exact-only restore after a successful publication.
- Several consumers appeared healthy because sccache returned compiler objects,
  while Docker still invoked Cargo. The acceptance proof now distinguishes
  compiler-object reuse from a fully cached BuildKit leaf.
- The initial WASM Node audit still showed project compilation on an unchanged
  head. A producer-owned Node scope reduced the next exact replay to zero
  compilation and 54 cached vertices.
- The required local sealed formatter encountered a stale local BuildKit solve.
  Host rustfmt completed, while all build and test validation remained hosted.

## Decisions

- A genuinely new cache scope may be cold for its first successful producer.
  Every fresh retry of the same head must restore the complete graph.
- Parallel jobs never write the same source-sensitive cache ref.
- Failed validation never publishes a verified consumer cache.
- Main-owned scopes are trusted shared seeds. Pull requests can publish only
  exact commit-scoped refs.
- Local cache reuse crosses the trust boundary only through hosted byte
  validation and promotion.

## Validation

- Hosted static preflight run 31256437779 passed all cache and delivery
  theorems.
- Hosted runtime simulation run 31256472332 passed Scenarios A through W on
  fresh BuildKit builders against ephemeral Zot.
- Exact-head producer validation run 31256607915 passed and published the new
  WASM Node scope.
- Exact-head replay run 31257098399 passed every job. Native, WASM, Kani, Loom,
  policy, Dylint, fuzz, WASM Node, and Web each emitted zero Rust `Compiling`
  lines; all sccache reports had zero misses.
- The readiness audit found a current base, exact-head deployment, successful
  required jobs, and zero unresolved review threads.

## Remaining work

None.
