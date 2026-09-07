---
title: Companion protocol simulation
status: in_progress
created_at: 2026-09-07T05:32:41Z
updated_at: 2026-09-07T23:40:31Z
---

# Companion protocol simulation

## Goal

Make browser-independent website and extension behavior a Rust-owned, typed,
directly composable protocol so fast tests can exercise real instances without
browser transport or external infrastructure.

## Current state

The framework, generated-WASM composition suite, paired identity browser
adapters, and side-effect-free pairing admission are merged. PR #1546 adds a
Rust-owned one-shot request and approval protocol across core,
companion-WASM, and nook-WASM, with opaque admitted capabilities, exact sealed
provider-recipient verification, direct dual-WASM composition, and a broad
real-manager behavior matrix. Durable atomic activation remains the next
separate functional capability; browser adapter migration depends on it.

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
- [x] [Implement companion pairing approval protocol](companion-pairing-approval-protocol.md)
- [ ] [Activate companion pairing atomically](companion-pairing-activation-transaction.md)
- [ ] [Migrate companion pairing browser adapters](companion-pairing-browser-adapters.md)

## References

- `nook-app/nook-platform/nook-companion-core`
- `nook-app/nook-platform/nook-companion-wasm`
- `nook-app/nook-platform/nook-wasm`
- `nook-app/nook-web/nook-web-shared/src/extension`
- `nook-app/nook-web/nook-web-extension/src/background`
