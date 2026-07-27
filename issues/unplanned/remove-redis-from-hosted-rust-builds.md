---
title: Remove Redis from hosted Rust builds
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-07-27T05:45:15Z
updated_at: 2026-07-27T09:26:40Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/805
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

## Progress

- Completed and merged in Nook PR 805.
- Native and WASM dependency scopes were published by merged Main run
  30252352302.

## Findings and decisions

- Secret contents were not the sole cause; the mutable cross-run cache scope
  restored only part of the dependency graph.
- A changed fingerprint intentionally incurs one cold seed build.
- Redis is not part of hosted compilation; local/runtime diagnostics remain
  available explicitly.

## References

- [Task plan](../../plans/unplanned/20260727-054515-remove-redis-from-hosted-rust-builds.md)
- [Completion worklog](../../worklogs/unplanned/20260727-092640-805.md)
- [Nook PR 805](https://github.com/meta-secret/nook/pull/805)
