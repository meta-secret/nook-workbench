---
title: "Implement mode-aware UI for simple, nexus, personal, shared, and provider-limited flows"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T06:08:58Z
updated_at: 2026-07-10T00:50:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/284"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Implement mode-aware UI for simple, nexus, personal, shared, and provider-limited flows

## Imported context

This record was imported from [Nook GitHub issue #284](https://github.com/meta-secret/nook/issues/284)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear. Depends on the UX map from #283 and the Rust grouped taxonomy from #276.

## Problem

After the architecture groups exist, the web app needs real mode-aware UI implementation. The current generic provider/login/onboarding screens cannot safely represent the grouped model, especially nexus vault creation and shared replication.

## Scope

- Implement the grouped create-vault and onboarding screens after the UX structure is defined.
- Show separate flows for simple vs nexus vaults instead of one generic multi-device panel.
- Show separate flows for personal vs shared replication instead of always sending provider credentials in onboarding.
- Represent provider capability in the picker and management surfaces so unsupported combinations are disabled, hidden, or explained intentionally.
- Add localized copy and UI states for blocking secret creation until nexus onboarding is complete.

## Out of Scope

- Low-level Rust/WASM architecture-mode implementation.
- Provider API sharing implementation unless required by the UI contract.

## Acceptance Criteria

- UI consumes Rust/WASM mode/capability results instead of re-implementing policy in TypeScript.
- UI presents the five groups clearly instead of flattening them into one option list.
- Simple vault setup stays fast and obvious.
- Nexus vault setup has a dedicated participant/onboarding readiness surface and does not allow first secret creation before the domain says it is ready.
- Shared replication flow collects the joiner's provider identity and clearly separates it from personal credential transfer.
- Provider management shows which providers are personal-only vs shared-capable for the current vault mode.
- All visible strings are localized.

## Definition of Done

- Component/unit tests cover mode-specific rendering, disabled/blocked combinations, and localization keys.
- Playwright smoke tests cover simple personal setup, nexus onboarding gate, and an unsupported shared-provider combination.
- App logs are checked when debugging e2e failures and do not include keys, shares, PRF material, provider tokens, or onboarding secrets.

## Notes

- Current anchors: #275, `nook-app/nook-web/nook-web-app/src/lib/components/login`, `nook-app/nook-web/nook-web-app/src/lib/components/VaultAdmin.svelte`, `nook-app/nook-web/nook-web-app/src/lib/components/SecretVault.svelte`, `nook-app/nook-web/nook-web-app/src/lib/components/ProviderPicker.svelte`, `nook-app/nook-web/nook-web-app/e2e`.


## Historical comments

### cypherkitty — 2026-07-09T18:26:50Z

## Closeout
Done in PR #288.

- Implemented mode-aware UI: `LoginCreateVaultChooser`, `OnboardDevice`, `NexusCeremonyPanel`, LoginGate/UnlockStep wiring
- Simple vs nexus and personal vs shared flows separated in product UI

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:52Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:43:16Z

Reopened because provider management and onboarding do not yet consistently label/disable personal-only providers for shared vaults, and first-run does not yet surface all five groups as distinct states.

### cypherkitty — 2026-07-10T00:50:11Z

Implemented mode-aware UI for simple, Nexus, personal, shared, and provider-limited flows in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. The final exact-head CI and preview deployment passed.
