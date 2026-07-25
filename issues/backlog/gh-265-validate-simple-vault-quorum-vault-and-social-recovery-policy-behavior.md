---
title: "Validate Simple Vault, Quorum Vault, and social recovery policy behavior"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T00:53:14Z
updated_at: 2026-07-21T04:29:28Z
source_issues: ["https://github.com/meta-secret/nook/issues/265"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Validate Simple Vault, Quorum Vault, and social recovery policy behavior

## Imported context

This record was imported from [Nook GitHub issue #265](https://github.com/meta-secret/nook/issues/265)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #259. This is the final hardening/validation layer for the selected vault access policies.

## Problem

A threshold unlock or social recovery flow that works functionally but leaks request/response payloads, shares, or recovered key material into provider history, logs, IndexedDB, DevTools-visible state, or long-lived UI state would defeat the point of the design.

The tests must also prove the policy distinction itself:

- Simple Vault allows single enrolled-device unlock.
- Quorum Vault does not allow single-device unlock for the same key epoch.
- Social Recovery trustees cannot unlock the vault as normal members.


## Terminology

Tests should assert Shamir/threshold security properties and no-leak behavior. SLIP-0039-specific assertions belong to low-level vector/format tests.

## Scope

- Add Rust integration tests for the complete selected auth-domain flow from #262.
- Add WASM tests for policy-aware session lifetimes and typed error states.
- Add browser/e2e smoke for selected MVP policies:
  - Simple Vault creation/unlock remains current behavior.
  - Quorum Vault creation requires threshold participation before vault keys are available.
  - Social Recovery, if in MVP, lets trustees help restore owner access without normal vault unlock.
- Add negative tests for wrong vault, wrong session, expired request, duplicate response, malformed payload, stale share after rotation, revoked helper/trustee, insufficient threshold, and cancelled device authorization.
- Add provider-history assertions proving no request/response payload or share mnemonic is written to local provider files, GitHub stubs, event outboxes, projection YAML, or sync logs.
- Add app-log assertions proving no plaintext share, SLIP-0039 mnemonic, `secrets_key`, or `members_key` is logged.
- Add IndexedDB/storage assertions proving collected shares are not persisted and local protected share material is not stored in plaintext.
- Make `task check` and targeted e2e commands part of the implementation PR checklist.

## Out Of Scope

- Building the feature from scratch.
- Replacing unit coverage owned by lower-level child issues.
- Long-running live-provider matrix coverage beyond one targeted smoke path, unless implementation risk requires it.

## Acceptance Criteria

- `cargo test -p nook-auth2` covers policy-specific auth-domain behavior and negative cases.
- Tests prove Quorum Vault cannot be unlocked from one device's local material alone.
- Tests prove Simple Vault still supports normal one-device unlock.
- Tests prove Social Recovery trustees, if implemented, are recovery-only and cannot read vault contents alone.
- WASM tests cover session-only share collection and clearing behavior.
- Playwright smoke covers selected policy happy paths and insufficient-threshold failure.
- Tests prove refresh/logout loses the threshold/recovery session and requires a new request QR.
- Provider stubs/files contain only expected durable vault records, never threshold request/response payloads.
- Persisted app logs and test attachments contain no share mnemonics, plaintext share material, `secrets_key`, or `members_key`.
- The parent issue #259 can be considered complete only when these validation gates pass.

## Related

- Parent: #259
- Policy blocker: #273
- Lifecycle/policy: #262
- WASM APIs: #263
- UI: #264
- `.cortex/references/logging.md`
- `nook-app/nook-web/nook-web-app/e2e/`
- `nook-app/nook-auth2/src/auth/`
- `nook-app/nook-wasm/src/manager/`



## Historical comments

### cypherkitty — 2026-07-21T04:29:27Z

Closing as completed for the shipped Simple/Sentinel policy matrix.

Coverage includes Rust Sentinel workflow tests (e.g. `nook-core/tests/sentinel_vault_workflow.rs` proving single-share cannot open and quorum can), architecture-mode unit/e2e coverage, and capability isolation from #361/#363.

Obsolete: validation of a third “Social Recovery Vault” product mode that was never adopted.
