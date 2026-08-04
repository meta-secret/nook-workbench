---
title: Adopt Identity Bridge as the production identity surface
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-04T10:36:29Z
updated_at: 2026-08-04T10:36:29Z
source_issues: []
related_prs: []
depends_on: []
---

# Adopt Identity Bridge as the production identity surface

## Context

The Identity Bridge research sketch now expresses Nook's target relationship
model more clearly than the browser-device-centered production dashboard. The
shipping surface should let a person browse identities or vaults, understand
the device evidence behind an identity, and follow explicit identity-to-vault
grants without losing the existing unlock, recovery, enrollment, and
management behavior.

## Outcome

The permanent Devices & access destination becomes a fully integrated identity
management surface based on Identity Bridge. It renders only live Rust/WASM
state, remains useful before any vault exists and while locked, and preserves
all existing authorized actions through contextually placed controls.

## Scope

- Port the accepted Identity Bridge interaction hierarchy into the production
  shared Svelte application.
- Drive both identity-first and vault-first perspectives from one typed,
  truthful state projection rather than research fixtures.
- Preserve current setup, unlock, provider-label, device-management,
  backup-password, and vault navigation functionality.
- Extend typed Rust/WASM contracts only where the target identity model cannot
  be represented honestly by the current browser-device projection.
- Keep Simple, Sentinel, and extension security boundaries intact.
- Localize all production copy in English and Russian.
- Cover responsive, keyboard, empty, locked, and unlocked behavior with focused
  domain and browser tests.

## Acceptance criteria

- [ ] Identity-first and vault-first browsing are available from the permanent access destination.
- [ ] Devices, installation keys, identities, and vault grants remain visibly distinct.
- [ ] The page renders real application state without mock identities, vaults, keys, or grants.
- [ ] Existing access-related actions remain reachable in the state where they are authorized.
- [ ] No-vault, unprepared, locked, unlocked, long-copy, mobile, and desktop states are coherent and accessible.
- [ ] English and Russian catalogs remain in parity.
- [ ] Focused tests and exact-head hosted validation pass before squash merge.

## Progress

- 2026-08-04: Production adoption started from the merged Identity Bridge research baseline.

## Findings and decisions

- Identity and vault perspectives are views over one relationship model, not
  separate stores.
- Graph structure is explanatory navigation; existing management controls stay
  in normal semantic product panels rather than becoming canvas-only actions.

## References

- `.cortex/product-specs/devices-and-access.md`
- `.cortex/design-docs/identity-vault-architecture.md`
- `nook-app/nook-web/nook-web-research/src/experiments/identity-management/identity-bridge`
- `nook-app/nook-web/nook-web-shared/src/vault-app/lib/components/DevicesAccessDashboard.svelte`
