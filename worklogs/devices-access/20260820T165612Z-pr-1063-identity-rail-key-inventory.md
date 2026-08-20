---
title: Ship the identity rail and selected-identity key inventory
feature: devices-and-access
issue: issues/devices-and-access/identity-access-methods-ui.md
plan: plans/devices-and-access/2026-08-20T071408Z-identity-rail-key-inventory.md
nook_pr: https://github.com/meta-secret/nook/pull/1063
status: completed
started_at: 2026-08-20T07:14:08Z
finished_at: 2026-08-20T16:55:22Z
agent: codex
---

# Ship the identity rail and selected-identity key inventory

## Outcome

[Nook PR 1063](https://github.com/meta-secret/nook/pull/1063) is
squash-merged as `1e1818592a860032e3c58db49a08affa8e482b2a`.

Devices & access now keeps persisted identities visible in a persistent rail
and presents the selected identity's public app keys as a flat inventory. The
page preserves Nook's existing dark visual language while making identity,
protector, app-key, and vault relationships easier to scan.

## Delivered changes

- Added Rust/WASM identity-directory snapshots with public app-key membership,
  local-access classification, selected-identity vault ownership, and explicit
  companion provenance.
- Added the responsive identity rail, browse selection, selected-identity key
  inventory, vault scoping, loading/error/empty states, and progressive detail.
- Kept persisted authentication selection separate from temporary browsing.
- Bootstrapped the initial Personal identity after PIN or passkey protection.
- Committed protection material and the initial identity in one IndexedDB
  transaction and cleared failed companion handoff identity state.
- Added English and Russian translations, product-spec updates, component and
  browser-WASM tests, Playwright coverage, and a headless UI demo.
- Kept Add identity and Add key unavailable until each new identity can receive
  an independently protected local app key.

## Review findings

- Review tightened Rust ownership of membership, vault ownership, access
  classification, and protector evidence.
- Review added production identity-switch coverage, stable focus behavior,
  coherent atomic snapshots, vault-selection preservation, and accessible
  selection semantics.
- Review corrected companion identity and key provenance across locked,
  unlocked, and failed-handoff states.
- Review required atomic identity bootstrap and passkey-path browser-WASM
  coverage. Both were added before merge.
- Every actionable thread received a targeted exact-head reply and was resolved.

## Validation

- Exact head `700a17c4775d158c98c314a67c17a87eb6fa696e` passed the focused Rust, WASM,
  web-check, and web-test batch:
  https://github.com/meta-secret/nook/actions/runs/32392284030
- The same head passed complete PR validation, repository policy, Rust ecosystem
  checks, WASM Node tests, web verification, the headless UI demo, preview
  deployment, and readiness:
  https://github.com/meta-secret/nook/actions/runs/32393548719
- An earlier complete run passed product tests but hit a transient BuildKit
  failure while exporting the preflight CLI artifact. The unchanged exact head
  passed on the required complete retrigger.
- Codex reported no major issues on the final head. `task pr:ready PR=1063`
  returned `ready: true` with zero unresolved conversations.

## Remaining work

Enable Add identity only after
[the independent local keyring issue](../../issues/devices-and-access/independent-local-identity-keyring.md)
can provision and protect a distinct app key for every new local identity.
