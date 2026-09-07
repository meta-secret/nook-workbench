---
title: Implement typed companion protocol simulation
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-protocol-simulation
created_at: 2026-09-07T05:32:41Z
updated_at: 2026-09-07T07:09:18Z
source_issues: []
related_prs: []
depends_on: []
---

# Implement typed companion protocol simulation

## Context

The website and extension share security-sensitive lifecycle behavior, but the
browser channel currently carries TypeScript-owned protocol definitions and is
part of too many behavioral tests. The feature context is recorded in
[Companion protocol simulation](README.md).

## Outcome

The repository provides a Rust-owned typed companion protocol and direct
real-instance simulation framework. It is the stable foundation for later
browser-adapter and generated-WASM scenario pull requests.

## Scope

- Define typed discovery and identity-handoff contracts in portable Rust.
- Provide direct composition through the same Rust endpoints used by
  production WASM.
- Retain one-shot authorization, request correlation, app-key binding, and
  zeroization in Rust.
- Document faithful infrastructure simulations and prohibit application mocks.
- Exclude production browser-adapter migration, broad generated-WASM scenario
  coverage, and the remaining pairing, unlock, and event-log protocol families.

## Acceptance criteria

- [ ] Discovery and identity-handoff request and response shapes are generated
  from Rust and malformed values fail closed through typed outcomes.
- [ ] Rust tests compose real endpoint and manager objects without application
  mocks or external infrastructure.
- [ ] No production simulation export exposes plaintext credentials or private
  key material.
- [ ] The architecture records direct composition and the structural
  independent-WASM seam without claiming deferred adapters or scenarios.
- [ ] Focused Rust, WASM, Cortex, security, and exact-head hosted checks pass.

## Progress

- 2026-09-07: Architecture selected and implementation authorized.
- 2026-09-07: User required sequential architectural pull requests. The first
  slice was narrowed to the Rust protocol and simulation framework.

## Findings and decisions

- Structural generated DTOs are required between independent WASM memories;
  wasm-bindgen object handles cannot cross that boundary.
- The existing companion core is the preferred owner for size-sensitive shared
  protocol policy; vault and cryptographic operations remain in core.
- Application behavior uses real objects and direct calls. Replaceable external
  facilities are faithful simulations, not application mocks.
- Production adapters, independent dual-WASM scenarios, and remaining protocol
  families are successor feature slices after this pull request merges.

## References

- `nook-app/nook-web/nook-web-shared/src/extension/runtime-messages.ts`
- `nook-app/nook-web/nook-web-shared/src/vault-app/lib/extension/connect.ts`
- `nook-app/nook-web/nook-web-extension/src/background/service-worker/external-companion-routing.ts`
- `.cortex/teams/web-dev/product-specs/browser-extension.md`
