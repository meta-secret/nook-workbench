---
title: Adopt Identity Bridge as the production identity surface
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-08-04T10:36:29Z
updated_at: 2026-08-04T17:51:51Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/914
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

- [x] Identity-first and vault-first browsing are available from the permanent access destination.
- [x] Devices, installation keys, identities, and vault grants remain visibly distinct.
- [x] The page renders real application state without mock identities, vaults, keys, or grants.
- [x] Existing access-related actions remain reachable in the state where they are authorized.
- [x] No-vault, unprepared, locked, unlocked, long-copy, mobile, and desktop states are coherent and accessible.
- [x] English and Russian catalogs remain in parity.
- [x] Focused tests and exact-head hosted validation pass before squash merge.

## Progress

- 2026-08-04: Production adoption started from the merged Identity Bridge research baseline.
- 2026-08-04: PR 914 replaced the production Devices & access dashboard with
  the live Identity Bridge, preserved authorized setup and management actions,
  and shipped responsive identity-first and vault-first navigation.
- 2026-08-04: Review-driven refinements clarified device-key evidence,
  companion-session identity attribution, duplicate vault identification, and
  empty and locked-state evidence before squash merge.

## Delivered outcome

The permanent Devices & access destination now derives its identity, device
key, and vault relationship graph from the existing typed application state.
It supports both browsing directions, retains every authorized lifecycle and
management action outside the graph, and remains honest when identity or vault
evidence is unavailable. PR 914 merged as `50e69d0f9ff4d97f14e6590a0f291318ba1adebf`.

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
