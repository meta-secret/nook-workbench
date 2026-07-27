---
title: Restore WASM dependency cache consumption
feature: unplanned
issue: issues/unplanned/remove-redis-from-hosted-rust-builds.md
started_at: 2026-07-27T16:16:08Z
agent: codex
---

# Restore WASM dependency cache consumption

## Interpreted request

Stop unchanged hosted Rust and WASM dependency layers from rebuilding in pull
request validation. Audit adjacent BuildKit consumers so published Main cache
lineages are actually available to every solve that needs them, and prove reuse
on a fresh hosted run.

## Requirements

- Trace the observed WASM cargo-chef rebuild to the exact cache publisher and
  consumer boundaries.
- Make the immutable dependency-fingerprinted Main cache visible to the outer
  WASM source and export solves, not only their named dependency target.
- Audit native, web, and browser cache inputs for the same missing-lineage
  pattern.
- Add a regression invariant that fails when a source consumer omits the
  fingerprinted dependency scope.
- Complete formatting, pull-request validation, squash merge, and post-merge
  hosted cache verification.

## Constraints and exclusions

- Pull requests remain read-only cache consumers; only trusted Main builds may
  publish shared scopes.
- Cache credentials and compiler outputs must not be exposed to untrusted
  workflows.
- Source-sensitive caches remain separate from manifest-only dependency
  lineages.
- A changed dependency fingerprint may require one trusted seed build; repeated
  builds with identical inputs must not rerun cargo-chef dependency stages.

## Initial plan

1. Compare the failing pull-request solve with the preceding Main publisher and
   map every imported scope to its target.
2. Repair missing dependency lineage inputs and add focused topology coverage.
3. Format and publish the implementation through the normal Nook pull-request
   workflow with full Main-equivalent validation.
4. Verify both the merged Main publisher and a subsequent read-only hosted
   consumer show cached dependency cook and release-test stages.

## Completion evidence

- Focused topology tests reject omission of the immutable WASM dependency
  scope.
- The resolved Bake graph includes the fingerprinted dependency scope for
  source/export consumers.
- Repository-owned checks pass at the exact pull-request head and the change is
  squash-merged.
- Hosted logs after publication show the cargo-chef and WASM dependency test
  layers as cached instead of executing.

## Safety review

This record contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
