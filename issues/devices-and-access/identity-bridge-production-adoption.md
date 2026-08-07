---
title: Adopt Identity Bridge as the production identity surface
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-08-04T10:36:29Z
updated_at: 2026-08-07T04:20:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/914
  - https://github.com/meta-secret/nook/pull/915
  - https://github.com/meta-secret/nook/pull/918
  - https://github.com/meta-secret/nook/pull/933
  - https://github.com/meta-secret/nook/pull/935
  - https://github.com/meta-secret/nook/pull/937
depends_on:
  - issues/hive-isolated-agent-platform/main-failure-2a092671287bca3c174b6f30d758c27d73047013.md
---

# Adopt Identity Bridge as the production identity surface

## Context

The Identity Bridge research sketch supplied useful navigation and interaction
hierarchy for the browser-device-centered production dashboard. Its original
relationship model overreached, however: local browser identity state does not
identify a passkey, device key, or identity-to-vault grant. The shipping
surface must keep those independent facts separate while preserving unlock,
recovery, enrollment, and management behavior.

## Outcome

The permanent Devices & access destination uses the Identity Bridge
interaction hierarchy with a truthful access-chain graph: protection unlocks
the device key, and the device key connects to vaults it opened. Local
identity state remains visible without membership edges. The page renders only
live Rust/WASM state, remains useful before any vault exists and while locked,
and preserves all existing authorized actions through contextually placed
controls.

## Scope

- Port the accepted Identity Bridge interaction hierarchy into the production
  shared Svelte application.
- Drive identity-state and vault-access perspectives from typed, truthful
  projections rather than research fixtures or inferred relationships.
- Preserve current setup, unlock, provider-label, device-management,
  backup-password, and vault navigation functionality.
- Extend typed Rust/WASM contracts only where the target identity model cannot
  be represented honestly by the current browser-device projection.
- Keep Simple, Sentinel, and extension security boundaries intact.
- Localize all production copy in English and Russian.
- Cover responsive, keyboard, empty, locked, and unlocked behavior with focused
  domain and browser tests.

## Acceptance criteria

- [x] Identity-state and vault-access browsing are available from the permanent access destination.
- [x] Local identity state and vault-access evidence remain visibly independent.
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
- 2026-08-04: A final hosted compact-width assertion completed after PR 914
  auto-merged and exposed border-box overflow at 240 pixels. PR 915 owns the
  required containment repair.
- 2026-08-04: PR 915 made every graph card border-box-contained, refit the
  SvelteFlow graph whenever its canvas width changes, kept companion-session
  identity labels honest, and added exact compact-layout polling. The focused
  production Devices & access suite passed all ten scenarios and the full
  hosted browser matrix passed before squash merge.
- 2026-08-05: PR 918 corrected the underlying product model: local identity
  state is no longer connected to a passkey or device key, device-key details
  are no longer user-facing, and vault access is shown only as independent,
  previously observed evidence.
- 2026-08-05: PR 918 reached exact-head review closure and passed source
  architecture, Rust, WASM, preview, extension, web check, and web unit
  validation. Merge was held until the existing Main browser regression owned
  by the linked Hive incident and PR 919 was repaired.
- 2026-08-05: After PR 919 merged and replacement Main passed, PR 918 rebased
  onto current Main. Exact full run
  [30975628549](https://github.com/meta-secret/nook/actions/runs/30975628549),
  Rust ecosystem checks, source architecture, all review threads, preflight,
  and readiness passed at `832e121f573a36c113778c184bac59cff7b6874c`.


- 2026-08-06: PR 933 restored the protection → device-key → verified-vault
  dependency graph after passkey vault create, kept local identity free of
  membership edges, and added Playwright coverage for that journey. Squash
  merged as `3de74dedf7339975316aef1ac0fcbaff15891eae`.


- 2026-08-06: PR 935 made Identity first-class with App keys, identity-owned
  vault DEKs, and a Nora-style Identity hub on Devices & access. Squash merged
  as `6048e66e121b57e92b137fa30c0b32a847cb2434`.

- 2026-08-07: PR 937 finished the Identity AppKey migration for Main Web e2e:
  Identity vault-access handles, dual-read wipe helpers, Devices & access
  EN/RU and Playwright alignment, and authorizeDeviceProtection handling for
  locked Access (leave via back, restore deep link) and multi-vault picker.
  Exact-head FULL_E2E validation succeeded on run
  [31146205086](https://github.com/meta-secret/nook/actions/runs/31146205086)
  and the PR squash-merged as `9c0c426c33986f23e4bffe3f9bcf36244885d3bc`.


## Delivered outcome

The permanent Devices & access destination centers a first-class Identity hub
from live Rust/WASM state: passkeys protect app keys that are members of the
Identity, and the Identity owns vault DEKs for vaults it can open. Authorized
lifecycle and management actions remain available.
PR 914 merged as `50e69d0f9ff4d97f14e6590a0f291318ba1adebf`.
PR 915 merged as `c3145c0465f985e2e574721a4eb7846743e95ac1`.
PR 918 squash-merged as `7fa1f2133cc3bc996c520ed09920ade6689f1aa5`.
PR 933 restored the access-chain graph as
`3de74dedf7339975316aef1ac0fcbaff15891eae`.
PR 935 extracted Identity ownership as
`6048e66e121b57e92b137fa30c0b32a847cb2434`.
PR 937 completed the migration leftovers and Main Web e2e repair as
`9c0c426c33986f23e4bffe3f9bcf36244885d3bc`.

## Findings and decisions

- Local identity state does not establish membership from a passkey, device
  key, or vault.
- Protection unlocking a device key, and that key opening vaults, are truthful
  access-chain edges and belong on the canvas.
- Identity and vault perspectives may share navigation and layout.
  Membership edges to local identity remain forbidden until typed identity
  records exist.
- Existing management controls stay in normal semantic product panels rather
  than becoming canvas-only actions.

## References

- `.cortex/product-specs/devices-and-access.md`
- `.cortex/design-docs/identity-vault-architecture.md`
- `nook-app/nook-web/nook-web-research/src/experiments/identity-management/identity-bridge`
- `nook-app/nook-web/nook-web-shared/src/vault-app/lib/components/DevicesAccessDashboard.svelte`
- [PR 918](https://github.com/meta-secret/nook/pull/918)
