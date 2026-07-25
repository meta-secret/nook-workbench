---
title: "Validate architecture modes with Rust-first tests, e2e smoke, and localized UX copy"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T05:59:54Z
updated_at: 2026-07-10T00:50:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/282"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Validate architecture modes with Rust-first tests, e2e smoke, and localized UX copy

## Imported context

This record was imported from [Nook GitHub issue #282](https://github.com/meta-secret/nook/issues/282)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear.

## Problem

This architecture touches crypto boundaries, provider credentials, onboarding, and user-facing safety copy. It needs a validation plan before implementation spreads across Rust/WASM/Svelte.

## Scope

- Build a focused Rust test matrix for the valid and invalid mode combinations.
- Add WASM/API contract tests for mode serialization and provider capability errors.
- Add smoke e2e coverage for creation/onboarding UI once the flows exist.
- Update help/settings copy through the shared translation catalog.

## Out of Scope

- Implementing the architecture modes themselves.

## Acceptance Criteria

- Rust tests cover domain invariants for `device_mode`, `vault_type`, `replication_type`, provider capabilities, and onboarding routing.
- E2E tests remain smoke-level and do not replace Rust domain coverage.
- Persisted app logs are checked in debugging workflows and never include PRF outputs, keys, shares, provider tokens, or onboarding secrets.
- English/Russian localization coverage includes the new visible UI copy.
- The milestone can be considered complete only after this issue verifies the full mode matrix against docs and code.

## Notes

- Current anchors: `.cortex/rules.md` testing requirements, `.cortex/references/logging.md`, `nook-app/nook-core/tests/multi_device_workflow.rs`, `nook-app/nook-web/nook-web-app/tests/unit`, `nook-app/nook-web/nook-web-app/e2e`.

## Definition of Done

- This issue verifies that each architecture implementation issue has its required Rust and UI/e2e tests before milestone completion.
- It does not replace per-issue tests; it audits them.
- The final validation records the exact targeted tests, `task check` or equivalent repo gate, and any skipped provider-live tests with reasons.
- App-log inspection is part of debugging any failing e2e path.


## Historical comments

### cypherkitty — 2026-07-09T18:26:44Z

## Closeout
Done in PR #288.

- Rust matrix tests in `vault_architecture.rs` + `nexus_vault_workflow.rs`
- Locales en/ru for architecture modes / ceremony / shared grant
- E2e smoke: `vault-architecture-modes.spec.ts`, `nexus-unlock-ceremony.spec.ts`

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:45Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:43:13Z

Reopened for the final validation audit. The prior remote Verify/preview jobs were cancelled or skipped, and explicit PRF/vault-member key log-leak checks plus fresh full gates are still required.

### cypherkitty — 2026-07-10T00:50:11Z

Completed Rust-first validation, localized English/Russian UX copy, unit coverage, and production E2E validation in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. Final production Playwright result: 115/115 passed.
