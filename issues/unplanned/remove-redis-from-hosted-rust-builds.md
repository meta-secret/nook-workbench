---
title: Remove Redis from hosted Rust builds
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-07-27T05:45:15Z
updated_at: 2026-07-27T19:02:15Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/805
  - https://github.com/meta-secret/nook/pull/812
  - https://github.com/meta-secret/nook/pull/816
  - https://github.com/meta-secret/nook/pull/818
depends_on: []
---

# Remove Redis from hosted Rust builds

## Context

Hosted Rust and WASM builds repeatedly recompiled unchanged cargo-chef
dependencies. This direct repair belongs to
[Unplanned engineering repairs](README.md).

## Outcome

Hosted builds use one stable dependency-cache mechanism: an immutable,
dependency-fingerprinted GitHub Actions BuildKit scope without Redis credentials
or compiler secret mounts.

## Scope

- Remove hosted Redis credential transport and compiler secret mounts.
- Fingerprint all dependency graph and compiler-environment inputs.
- Add hard preflight protection against regression.
- Keep explicit local/runtime Redis tooling outside the hosted build path.

## Acceptance criteria

- [x] Hosted compiler stages do not mount a Redis secret.
- [x] The dependency scope changes only when a declared build input changes.
- [x] Preflight rejects secret-mount and fingerprint-contract regressions.
- [x] Exact-head PR checks pass and Main publishes the new native and WASM
  cache scope.
- [x] A fresh hosted builder importing only the fingerprinted WASM scope
  restores cargo-chef release, cargo-chef clippy, and release-test dependency
  layers without executing them.
- [x] A source-only native change restores all nextest, clippy, and coverage
  dependency producer layers from the published cache on its first hosted
  solve.

## Progress

- Completed and merged in Nook PR 805.
- Native and WASM dependency scopes were published by merged Main run
  30252352302.
- PR 812 exposed the fingerprinted scope to outer WASM consumers, but
  controlled proof PR 815 showed the first hosted solve still missed all three
  expensive dependency layers.
- PR 816 made the dependency producer self-contained, added a mandatory
  fresh-builder publication assertion, and merged as
  `634fa4a4f99b70973c07eb9aae960014af313162`.
- Main run 30292970348 published scope
  `nook-rust-wasm-deps-v4-6d5fad2500bed3cb4d79822e1d7724610f10bcde284225b2956a5a3743fae538`;
  its isolated verifier restored all three required stages as cached.
- Source-only proof PR 817 preserved that fingerprint and independently
  restored all three stages as cached in its first hosted WASM solve.
- Source-only proof PR 818 preserved native dependency inputs. Its first hosted
  Native solve restored all nine dependency producer layers as cached and
  completed successfully in 3 minutes 53 seconds.

## Findings and decisions

- Secret contents were not the sole cause; the mutable cross-run cache scope
  restored only part of the dependency graph.
- Cache imports attached to named target contexts do not make the parent
  identity portable across hosted builders. Manifest-only dependency stages
  now extend their digest-pinned Rust base in the same Dockerfile.
- A trusted publication is accepted only after a separate Docker-container
  builder imports the exact hosted scope and proves the required layers are
  cached.
- A changed fingerprint intentionally incurs one cold seed build.
- Redis is not part of hosted compilation; local/runtime diagnostics remain
  available explicitly.

## References

- [Task plan](../../plans/unplanned/20260727-054515-remove-redis-from-hosted-rust-builds.md)
- [Completion worklog](../../worklogs/unplanned/20260727-092640-805.md)
- [WASM cache completion worklog](../../worklogs/unplanned/20260727-184600-816.md)
- [Nook PR 805](https://github.com/meta-secret/nook/pull/805)
- [Nook PR 812](https://github.com/meta-secret/nook/pull/812)
- [Nook PR 816](https://github.com/meta-secret/nook/pull/816)
- [Native cache proof PR 818](https://github.com/meta-secret/nook/pull/818)
