---
title: "Implement explicit device_mode: standard vs anti-hacker protection"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T05:59:44Z
updated_at: 2026-07-09T18:26:27Z
source_issues: ["https://github.com/meta-secret/nook/issues/277"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Implement explicit device_mode: standard vs anti-hacker protection

## Imported context

This record was imported from [Nook GitHub issue #277](https://github.com/meta-secret/nook/issues/277)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear.

## Problem

Device-key protection has passkey/PIN flows today, but the product needs an explicit `device_mode` choice:

- `standard`: derive the age device secret from the passkey PRF so recovery is more convenient.
- `anti-hacker`: keep locality by storing the wrapped age key in IndexedDB and requiring PRF-derived material to unwrap it. If IndexedDB is cleaned, access to that encrypted vault from that device is lost.

## Scope

- Define the exact cryptographic envelope and persistence semantics for both modes.
- Make the tradeoff explicit in setup, unlock, recovery, and diagnostics.
- Ensure `anti-hacker` mode never silently falls back to a recoverable-by-passkey-only path.
- Preserve PIN fallback behavior only where the security model allows it.

## Out of Scope

- Nexus/quorum vault share reconstruction.
- Provider sharing flows.

## Acceptance Criteria

- Rust-owned tests cover the two device modes, including cleared IndexedDB behavior for `anti-hacker`.
- WASM exposes setup/unlock/recovery APIs that include the selected mode and cannot infer it from UI state alone.
- App logs and diagnostics identify mode and failure class without leaking PRF output, nonce, age keys, or vault keys.
- UI copy is localized and tells the user that clearing browser storage can destroy local access in `anti-hacker` mode.

## Notes

- Current anchors: `nook-app/nook-wasm/src/manager/device_protection.rs`, `nook-app/nook-core/src/lib.rs` device-key exports, `.cortex/design-docs/unified-vault.md` IndexedDB notes, `.cortex/product-specs/browser-extension.md` passkey/device authorization rules.

## Definition of Done

- Rust tests cover `standard` and `anti-hacker` setup/unlock/recovery semantics.
- Tests cover cleared IndexedDB behavior for `anti-hacker` mode and verify no silent fallback to passkey-only recovery.
- WASM contract tests cover mode serialization and error mapping.
- Any setup/unlock UI changes include component or Playwright smoke coverage and localized copy.


## Historical comments

### cypherkitty — 2026-07-09T18:26:24Z

## Closeout
Done in PR #288.

- Explicit `device_mode` standard vs anti-hacker in architecture + UI (`LoginCreateVaultChooser`, device protection flows)
- PIN `device_mode` semantics corrected (no longer misreported as anti-hacker)
- Locale keys for device mode titles/descriptions

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:26Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.
