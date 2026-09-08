---
title: Companion protocol simulation
status: in_progress
created_at: 2026-09-07T05:32:41Z
updated_at: 2026-09-08T14:59:00Z
---

# Companion protocol simulation

## Goal

Make browser-independent website and extension behavior a Rust-owned, typed,
directly composable protocol so fast tests can exercise real instances without
browser transport or external infrastructure.

## Current state

The framework, generated-WASM composition suite, paired identity browser
adapters, side-effect-free pairing admission, event-authority preparation, and
atomic inert candidate persistence are merged. Strict typed readback is the
next main-based serial slice; authoritative adoption and the browser adapter
migration remain dependent successors.

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
- Preparation, inert candidate persistence, strict readback, and authoritative
  adoption are separate functional PRs. One physical `nook_db` transaction
  publishes the candidate; only the adoption slice may make it authority or
  emit acceptance.

## Issues

- [x] [Implement typed companion protocol simulation](typed-companion-protocol-simulation.md)
- [x] [Add companion protocol composition tests](companion-protocol-composition-tests.md)
- [x] [Migrate companion identity browser adapters](companion-identity-browser-adapters.md)
- [x] [Implement companion pairing approval protocol](companion-pairing-approval-protocol.md)
- [x] [Prepare companion pairing event authority](companion-pairing-activation-transaction.md)
- [x] [Persist companion pairing activation candidate](companion-pairing-activation-candidate-storage.md)
- [ ] [Strictly read inert companion pairing activation candidate](companion-pairing-activation-candidate-readback.md)
- [ ] [Adopt committed companion pairing activation](companion-pairing-activation-adoption.md)
- [ ] [Migrate companion pairing browser adapters](companion-pairing-browser-adapters.md)

## References

- `nook-app/nook-platform/nook-companion-core`
- `nook-app/nook-platform/nook-companion-wasm`
- `nook-app/nook-platform/nook-wasm`
- `nook-app/nook-web/nook-web-shared/src/extension`
- `nook-app/nook-web/nook-web-extension/src/background`
