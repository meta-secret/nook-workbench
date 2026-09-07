---
title: Implement typed companion protocol simulation
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-protocol-simulation
created_at: 2026-09-07T05:32:41Z
updated_at: 2026-09-07T05:32:41Z
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

The website and extension communicate through Rust-owned typed operations that
can be composed directly in Rust and generated-WASM unit tests. Production
Chrome and window messaging are narrow transport implementations over the same
contracts.

## Scope

- Move the selected browser-independent protocol schema, admission, and state
  decisions into portable Rust.
- Provide direct real-instance composition with deterministic in-memory
  storage and transport implementations.
- Exercise generated WASM request/result compatibility from TypeScript.
- Retain focused browser adapter and sender-boundary coverage.
- Exclude replacement of browser transport in production and simulation of
  browser rendering, WebAuthn user gestures, or service-worker scheduling.

## Acceptance criteria

- [ ] Browser-independent request and response shapes are generated from Rust
  and malformed values fail closed through typed outcomes.
- [ ] Rust tests compose real endpoint and state objects without application
  mocks or external infrastructure.
- [ ] TypeScript tests directly compose the generated WASM boundaries through
  in-memory implementations.
- [ ] No production simulation export exposes plaintext credentials or private
  key material.
- [ ] Chrome and window messaging contain transport behavior only.
- [ ] Focused Rust, generated-WASM, web, security, and exact-head hosted checks
  pass.

## Progress

- 2026-09-07: Architecture selected and implementation authorized.

## Findings and decisions

- Structural generated DTOs are required between independent WASM memories;
  wasm-bindgen object handles cannot cross that boundary.
- The existing companion core is the preferred owner for size-sensitive shared
  protocol policy; vault and cryptographic operations remain in core.

## References

- `nook-app/nook-web/nook-web-shared/src/extension/runtime-messages.ts`
- `nook-app/nook-web/nook-web-shared/src/vault-app/lib/extension/connect.ts`
- `nook-app/nook-web/nook-web-extension/src/background/service-worker/external-companion-routing.ts`
- `.cortex/teams/web-dev/product-specs/browser-extension.md`

