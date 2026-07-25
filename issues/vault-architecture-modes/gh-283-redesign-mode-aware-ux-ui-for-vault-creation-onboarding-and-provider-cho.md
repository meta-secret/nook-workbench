---
title: "Redesign mode-aware UX/UI for vault creation, onboarding, and provider choices"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T06:08:55Z
updated_at: 2026-07-10T00:50:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/283"]
related_prs: []
depends_on: []
legacy_labels: ["documentation","enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Redesign mode-aware UX/UI for vault creation, onboarding, and provider choices

## Imported context

This record was imported from [Nook GitHub issue #283](https://github.com/meta-secret/nook/issues/283)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear.

## Problem

The architecture modes cannot be hidden behind today's generic setup screens, and they also cannot be presented as one flat list. The UX/UI has to be redesigned and reimagined around the five groups in #275:

1. device mode: `standard` vs `anti-hacker`;
2. vault type: `simple` vs `nexus`;
3. replication type: `personal` vs `shared`;
4. onboarding type: personal credential-transfer vs shared provider-identity/grant, plus nexus participant readiness;
5. sync provider type: provider capabilities, e.g. Google Drive supports personal/shared while GitHub supports personal only.

For `nexus` vaults especially, onboarding is not a secondary settings action. It is part of vault creation: devices/participants must be brought in first, DEK shares must be encrypted to device keys, and secret creation must stay blocked until threshold setup is ready.

## Scope

- Redesign the login/create-vault/setup information architecture around the five clearly separated groups.
- Define distinct UI states and flows for simple personal, simple shared, nexus personal, and nexus shared/provider-limited cases.
- Design the nexus onboarding process as a first-class wizard/ceremony, not as a generic QR pasted into the current flow.
- Specify how provider capability blocks or filters unavailable combinations before the user enters a dead-end.
- Define localized copy requirements for safety tradeoffs, especially `anti-hacker` local access loss and `nexus` multi-device requirements.

## Out of Scope

- Implementing Rust cryptography or provider APIs.
- Final visual polish after implementation uncovers new edge cases.

## Acceptance Criteria

- A `.cortex` design/product doc or implementation plan shows the grouped UX map and screen/state breakdown.
- The first-run/create-vault flow clearly separates device mode, vault type, replication type, onboarding type, and provider capability.
- Nexus creation has a dedicated onboarding/participant readiness flow before secret creation is enabled.
- Shared replication asks for the joiner's provider identity where needed and does not show impossible provider combinations as valid options.
- Existing simple/local/GitHub flows remain understandable and do not become buried in high-security UX.
- All visible copy is routed through the shared localization catalog.

## Definition of Done

- UX states are covered by unit tests where they are pure state/decision logic.
- At least one Playwright smoke path covers a simple vault setup and one covers the nexus pre-secret onboarding gate once implemented.
- Screens are checked at mobile and desktop breakpoints for text overlap and clear separation of mode choices.

## Notes

- Current anchors: #275, `nook-app/nook-web/nook-web-app/src/lib/components/login`, `nook-app/nook-web/nook-web-app/src/lib/components/ProviderPicker.svelte`, `nook-app/nook-web/nook-web-app/src/lib/components/DeviceProtectionGate.svelte`, `.cortex/design-docs/vault-session-and-lock.md`, `.cortex/design-docs/auth-providers.md`.


## Historical comments

### cypherkitty — 2026-07-09T18:26:47Z

## Closeout
Done in PR #288.

- Mode-aware create/onboarding UX redesigned around the five groups (device / vault / replication / onboarding / provider)
- Separate nexus ceremony panel; shared grant instructions; provider capability gating

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:48Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:43:15Z

Reopened because the required grouped UX screen/state map is absent and first-run currently surfaces only groups 1-3. The five-group map, localized states, and mobile/desktop layout proof are in progress.

### cypherkitty — 2026-07-10T00:50:11Z

Completed the mode-aware vault creation, onboarding, provider, readiness, and recovery UX redesign in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. Desktop and narrow-screen scenarios passed production Playwright.
