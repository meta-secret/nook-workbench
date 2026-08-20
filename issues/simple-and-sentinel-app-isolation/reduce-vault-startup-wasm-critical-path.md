---
title: Reduce the vault startup WASM critical path
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-20T05:16:25Z
updated_at: 2026-08-20T12:44:14Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1062
depends_on: []
---

# Reduce the vault startup WASM critical path

## Context

The isolated [Simple and Sentinel vault applications](README.md) currently keep
the document empty until the shared vault engine and companion engine finish
initializing. The production vault engine is a multi-megabyte compressed asset,
so cold visits expose network and WebAssembly compilation latency as a blank or
apparently hung page.

## Outcome

Simple and Sentinel display a stable, accessible startup shell immediately.
Only the vault engine remains on the required application-ready path. The build
reports and enforces the production vault WASM transfer budget so growth is
visible before release.

## Scope

- Mount a product-correct startup shell before asynchronous WASM initialization.
- Keep vault interactions unavailable until the Rust/WASM application identity
  is configured and verified.
- Remove the companion WASM from the universal vault mount gate and initialize
  it only at the feature boundary that consumes it.
- Add targeted browser/demo coverage for the startup state and existing ready
  state.
- Record compressed and uncompressed production WASM sizes and enforce a
  reviewed ceiling in the build or preflight contract.
- Update the owning product specification and architecture guidance.
- Exclude a redesign of vault screens, provider flows, cryptography, storage,
  and a broad multi-binary Rust refactor unless measurements prove it belongs
  in the same bounded delivery.

## Acceptance criteria

- [x] A cold vault document paints a localized, non-interactive startup shell
      before the vault WASM promise settles.
- [x] The full vault application replaces the shell only after Rust/WASM is
      initialized and its immutable application identity is verified.
- [x] Ordinary Simple and Sentinel startup does not await companion WASM.
- [x] Startup failure produces an honest localized error state rather than an
      empty document or an unhandled bootstrap rejection.
- [x] Focused browser/demo coverage proves pending, failure, and ready behavior.
- [x] Production build evidence reports raw and compressed vault WASM sizes and
      rejects growth beyond the documented ceiling.
- [x] Exact-head repository validation and readiness pass before squash merge.

## Progress

- 2026-08-20: Claimed for implementation after confirming no active Workbench
  issue or open Nook PR owns vault startup performance.
- 2026-08-20: Squash-merged
  [Nook PR 1062](https://github.com/meta-secret/nook/pull/1062) after complete
  exact-head validation, a clean current-head Codex review, successful preview
  deployment, and an authoritative readiness result with zero unresolved
  threads.

## Findings and decisions

- Browser caching is already immutable for fingerprinted assets, but first
  visits and each release still pay transfer, compilation, and initialization.
- Rust/WASM remains the authority for application identity, vault policy,
  cryptography, and session state. The shell represents browser lifecycle only.
- Simple and Sentinel retain one tree-shaken vault WASM artifact. The extension
  connection runtime is activated only by Simple and the unified test harness,
  so Sentinel does not acquire the extension feature while avoiding a second
  companion artifact on the startup path.
- Production verification now records raw and compressed artifact sizes,
  enforces release budgets, and proves the production HTML preloads the exact
  fingerprinted vault WASM asset.

## References

- [Vault application isolation specification](https://github.com/meta-secret/nook/blob/main/.cortex/product-specs/vault-app-isolation.md)
- [Shared vault mount](https://github.com/meta-secret/nook/blob/main/nook-app/nook-web/nook-web-shared/src/vault-app/main.ts)
- [Merged implementation](https://github.com/meta-secret/nook/pull/1062)
- [Completion worklog](../../worklogs/simple-and-sentinel-app-isolation/20260820T124414Z-pr-1062-vault-startup-wasm-critical-path.md)
- [PR statistics](../../stats/ai-agent/1062.yaml)
