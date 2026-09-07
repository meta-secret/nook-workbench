---
title: Add companion protocol composition tests
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-protocol-composition-tests
created_at: 2026-09-07T09:03:43Z
updated_at: 2026-09-07T09:03:43Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/typed-companion-protocol-simulation.md
---

# Add companion protocol composition tests

## Context

PR #1500 established typed Rust companion protocol endpoints and direct
real-manager composition. The next slice must prove that foundation across
both native Rust and the independently generated WASM packages before browser
adapters migrate.

## Outcome

Fast tests exercise the real website and extension protocol objects without
Chrome, window messaging, storage services, or application mocks. Generated
TypeScript tests move only structural DTOs between the two WASM memories.

## Scope

- Add reusable real-instance scenario construction for the typed protocol.
- Cover success, malformed input, expiry, correlation, app-key mismatch,
  replay, revoked access, sealing failure, and pending-state clearing.
- Compose the generated companion-WASM and vault-WASM packages in TypeScript.
- Use direct delivery or in-memory infrastructure implementations where an
  external edge must be substituted.
- Exclude production Chrome/window adapter migration and remaining protocol
  family migration.

## Acceptance criteria

- [ ] Native Rust scenarios use concrete protocol endpoints and managers.
- [ ] No application-layer mock framework or callback mock is introduced.
- [ ] Generated-JavaScript tests instantiate both WASM packages independently.
- [ ] Cross-WASM communication uses generated structural DTOs or canonical
  bytes, never WASM object handles.
- [ ] Failure scenarios prove one-shot state, fail-closed admission, and secret
  cleanup.
- [ ] Focused hosted Rust, WASM Node, web, security, and readiness checks pass.

## Progress

- 2026-09-07: Predecessor framework PR #1500 merged and this test slice began.

## Findings and decisions

- Test composition precedes production adapter migration.
- The framework's production endpoints remain the only application behavior
  under test; simulations replace external delivery or storage only.

## References

- `nook-app/nook-platform/nook-companion-core/src/companion_protocol.rs`
- `nook-app/nook-platform/nook-companion-wasm/src/companion_protocol.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/companion_protocol.rs`
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
