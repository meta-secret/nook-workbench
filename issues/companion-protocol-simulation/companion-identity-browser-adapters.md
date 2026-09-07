---
title: Migrate companion identity browser adapters
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-identity-browser-adapters
created_at: 2026-09-07T11:23:32Z
updated_at: 2026-09-07T11:23:32Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/companion-protocol-composition-tests.md
---

# Migrate companion identity browser adapters

## Context

PRs #1500 and #1508 established the typed Rust companion protocol and proved
direct composition through real native and independent WASM instances. The
production website/service-worker/offscreen path still carries handwritten
TypeScript companion identity messages and repeats discovery, correlation,
handoff, nonce, and response admission decisions around Chrome messaging.

## Outcome

Chrome runtime and page delivery become thin untrusted transports for generated
Rust DTOs. Website and extension adapters invoke the same Rust endpoints proven
by the composition suite, while browser-specific sender, lifecycle, timeout,
and origin checks remain in TypeScript.

## Scope

- Migrate paired-vault identity discovery and encrypted identity handoff across
  website, extension service worker, and offscreen session boundaries.
- Replace handwritten TypeScript protocol payloads and response validators for
  that selected flow with generated DTOs and Rust admission.
- Preserve Chrome sender/runtime checks, bounded delivery, service-worker
  startup, and offscreen lifecycle as infrastructure adapter behavior.
- Reuse the real extension manager authorization-and-sealing operation and the
  website manager begin/finish operations.
- Remove superseded TypeScript correlation, nonce, and handoff decision logic.

## Acceptance criteria

- [ ] Browser messages transport generated companion request/status/response DTOs.
- [ ] Untrusted browser responses are admitted by Rust before application use.
- [ ] TypeScript does not classify identity presence, correlate protocol IDs,
  authorize handoff, validate the encrypted response, or rotate handoff nonce.
- [ ] Chrome/window/offscreen code contains only lifecycle, sender/origin,
  timeout, and structural delivery responsibilities.
- [ ] Existing production behavior and fail-closed security boundaries remain.
- [ ] Focused web adapter tests, Security review, hosted Rust/WASM/web checks,
  readiness, and merge pass on one exact head.

## Exclusions

- Pairing approval schema migration.
- User-driven unlock workflow migration.
- Event-log message migration.
- Broad browser E2E expansion or reduction.

## Progress

- 2026-09-07: Predecessor composition-test PR #1508 merged and adapter migration began.

## References

- `nook-app/nook-web/nook-web-shared/src/vault-app/lib/extension/connect.ts`
- `nook-app/nook-web/nook-web-shared/src/extension/runtime-messages.ts`
- `nook-app/nook-web/nook-web-extension/src/background/service-worker/pairing-identity.ts`
- `nook-app/nook-web/nook-web-extension/src/offscreen/session-operations.ts`
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
