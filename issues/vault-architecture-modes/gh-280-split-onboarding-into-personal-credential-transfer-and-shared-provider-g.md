---
title: "Split onboarding into personal credential transfer and shared provider grant flows"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T05:59:50Z
updated_at: 2026-07-10T00:50:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/280"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Split onboarding into personal credential transfer and shared provider grant flows

## Imported context

This record was imported from [Nook GitHub issue #280](https://github.com/meta-secret/nook/issues/280)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear.

## Problem

`onboarding_type` is group 4 in the #275 architecture. It is not an independent free axis. It is selected by `replication_type`, then constrained by `sync_provider_type` capability and, for `vault_type=nexus`, by the nexus participant/share readiness gate.

- `replication_type=personal`: send sync credentials along with DEK/vault access. This is closest to the current implementation. In current Nook terms, `DEK` maps to vault keys such as `secrets_key` / `members_key` and the per-device envelopes or shares that allow the new device to unlock.
- `replication_type=shared`: the onboarded device first provides its provider id, such as email for Google Drive, so the main/enrolled device can share provider storage, such as a shared Google Drive directory/file.
- Unsupported provider/mode pairs must stop before producing an impossible onboarding code.

## Scope

- Split onboarding into personal credential-transfer and shared provider-identity/grant flows.
- Define the joiner identity payload for shared providers, starting with email for Google Drive.
- Ensure sync-provider credentials included in personal onboarding are sealed for the receiving device and not logged.
- Define user-visible and localized states for unsupported shared providers.
- Ensure the QR/code format distinguishes credential-transfer onboarding from provider-identity/grant onboarding.
- Ensure nexus onboarding blocks first secret creation until all required devices/shares are onboarded.

## Out of Scope

- Low-level SLIP-0039 share reconstruction, except where the onboarding order needs to coordinate with it.
- Provider-specific Google Drive API implementation details beyond the contract needed by the flow.

## Acceptance Criteria

- Personal onboarding can carry the currently allowed sync-provider credentials alongside vault access without plaintext persistence or app-log leakage.
- Shared onboarding records the joiner's provider identity and requires an enrolled device to grant provider storage access before sync succeeds.
- Shared onboarding does not transfer the main device's provider credentials when the model requires separate accounts.
- Unsupported shared provider combinations are rejected in Rust validation and presented in UI with localized copy.
- Nexus onboarding cannot complete secret creation until all required devices/shares are ready.
- E2E or integration tests cover one personal flow and one shared-flow contract using mocks/fakes.

## Notes

- Current anchors: #275, `nook-app/nook-auth2/src/auth/enrollment.rs`, `nook-app/nook-core/src/auth/enrollment.rs`, `nook-app/nook-core/src/sync/sync_provider_credentials.rs`, `nook-app/nook-web/nook-web-app/src/lib/enrollment-code.ts`, `nook-app/nook-web/nook-web-app/src/lib/components/login/LoginEnrollmentPanel.svelte`.

## Definition of Done

- Rust tests cover personal credential transfer and shared provider-identity grant request routing.
- Tests prove personal onboarding seals provider credentials for the receiving device and does not log or plaintext-persist them.
- E2E smoke covers at least one personal onboarding path and one shared onboarding contract path using fakes/mocks where needed.
- Unsupported provider/mode combinations fail before QR or enrollment-code generation.


## Historical comments

### cypherkitty — 2026-07-09T18:26:36Z

## Closeout
Done in PR #288.

- Personal credential-transfer vs shared provider-grant onboarding split
- `prepare_shared_storage_grant` + WASM async Drive folder create/`permissions.create`
- `SharedProviderGrant` carries `storage_target_id`; ManualGrantRequired fallback retained
- OnboardDevice / password-unlock wiring + locales

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:37Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:43:12Z

Reopened because shared Google Drive onboarding is not yet end-to-end safe: the new shared target is not guaranteed to contain the vault event log before QR issuance, and ManualGrantRequired can discard a successfully created folder target. Fix and second-browser redemption coverage are in progress.

### cypherkitty — 2026-07-10T00:50:11Z

Implemented separate personal credential-transfer and shared provider-grant onboarding flows in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. Shared grant, flush, manual-completion, and redemption flows are covered by Playwright.
