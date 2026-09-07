---
title: Companion protocol simulation
status: in_progress
created_at: 2026-09-07T05:32:41Z
updated_at: 2026-09-07T22:02:13Z
---

# Companion protocol simulation

## Goal

Make browser-independent website and extension behavior a Rust-owned, typed,
directly composable protocol so fast tests can exercise real instances without
browser transport or external infrastructure.

## Current state

The framework, generated-WASM composition suite, and paired identity browser
adapters are merged. PR #1534 adds an unpublished native Rust harness that
compiles both WASM crates with `nook-auth2`, `nook-core`, and
`nook-companion-core`, runs 22 real-instance dependency scenarios, and exposes
only three existing typed `nook-wasm` companion operations for direct Rust use.
The larger pairing migration is paused with its unfinished work preserved;
future slices start only from a separately selected functional outcome.

## Decisions

- Browser-independent protocol requests, responses, admission, and lifecycle
  decisions belong in Rust.
- Unit tests compose real Rust and WASM objects directly.
- Replaceable infrastructure uses faithful implementations such as in-memory
  stores and direct transports; application behavior is not tested with mocks.
- Browser messaging remains a thin production transport and receives only
  focused adapter coverage.
- Provider and consumer changes are independently useful sequential PRs; the
  consumer starts only after the provider is merged and closed.
- Every slice is completed, squash-merged, remotely verified, and closed out
  before the next branch starts from current `origin/main`.
- Mechanical composition and broad dependency tests precede another behavior
  migration; browser transport simulations and TypeScript coverage remain
  separate capabilities.

## Issues

- [x] [Implement typed companion protocol simulation](typed-companion-protocol-simulation.md)
- [x] [Add companion protocol composition tests](companion-protocol-composition-tests.md)
- [x] [Migrate companion identity browser adapters](companion-identity-browser-adapters.md)
- [ ] [Implement companion pairing approval protocol](companion-pairing-approval-protocol.md)
- [ ] [Activate companion pairing atomically](companion-pairing-activation-transaction.md)
- [ ] [Migrate companion pairing browser adapters](companion-pairing-browser-adapters.md)

## References

- `nook-app/nook-platform/nook-companion-core`
- `nook-app/nook-platform/nook-companion-wasm`
- `nook-app/nook-platform/nook-wasm`
- `nook-app/nook-web/nook-web-shared/src/extension`
- `nook-app/nook-web/nook-web-extension/src/background`
