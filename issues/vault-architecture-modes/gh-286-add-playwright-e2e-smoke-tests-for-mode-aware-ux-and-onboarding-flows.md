---
title: "Add Playwright e2e smoke tests for mode-aware UX and onboarding flows"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T06:09:02Z
updated_at: 2026-07-10T00:50:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/286"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Add Playwright e2e smoke tests for mode-aware UX and onboarding flows

## Imported context

This record was imported from [Nook GitHub issue #286](https://github.com/meta-secret/nook/issues/286)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear. Complements Rust/domain coverage from #285.

## Problem

The new UX has multiple mode-specific paths. Rust tests prove policy; e2e smoke needs to prove the browser can guide real users through the separated flows without collapsing them into one confusing setup path.

## Scope

- Add Playwright smoke coverage for mode-aware setup and onboarding screens.
- Cover simple personal vault setup as the low-friction baseline.
- Cover nexus vault creation through the participant/onboarding gate before first secret creation.
- Cover shared replication provider identity collection, using mocks/fakes where live provider sharing is not available.
- Cover unsupported provider/mode combinations, for example shared replication with a personal-only provider.
- Attach and inspect persisted app logs for failures.

## Out of Scope

- Re-proving crypto/domain invariants already covered by Rust tests.
- Live Google Drive sharing unless a separate provider-live test issue explicitly enables it with secrets.

## Acceptance Criteria

- Playwright tests assert the right mode-specific UI appears, not only that buttons are clickable.
- E2E flows use realistic onboarding paths and avoid helper-only shortcuts for the behavior under test.
- Tests cover mobile and desktop where layout differences affect the mode-selection/onboarding UI.
- Failure artifacts include app logs, and tests assert that logs do not leak keys, shares, PRF output, provider tokens, or onboarding secrets.

## Definition of Done

- Implementing agents run the relevant Playwright spec(s) locally or document why a provider-live path is skipped.
- E2E remains smoke-level; any discovered domain gap becomes a Rust test or a new focused issue.

## Notes

- Current anchors: `.cortex/references/logging.md`, `nook-app/nook-web/nook-web-app/e2e`, `nook-app/nook-web/nook-web-app/src/lib/components/login`, `nook-app/nook-web/nook-web-app/src/lib/components/ProviderPicker.svelte`.


## Historical comments

### cypherkitty — 2026-07-09T18:26:58Z

## Closeout
Done in PR #288.

- Playwright: `e2e/vault-architecture-modes.spec.ts`, `e2e/nexus-unlock-ceremony.spec.ts`
- Registered in `playwright.config.ts`; covered under local `task ci:pr`

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:59Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:43:18Z

Reopened because the shared grant smoke stops on the issuer side. It must redeem the link in a second browser against the shared folder, and the mode/nexus flows still need explicit mobile/desktop no-overlap plus PRF/key/share/token/onboarding-secret leakage assertions.

### cypherkitty — 2026-07-10T00:50:11Z

Added and passed production Playwright coverage for mode-aware creation, Nexus readiness/unlock, provider gating, shared grants, manual grants, redemption, and mobile UX in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. Final result: 115/115 passed.
