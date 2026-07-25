---
title: "Add Rust unit and integration tests for the architecture mode matrix"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T06:09:00Z
updated_at: 2026-07-10T00:50:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/285"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes"]
legacy_state_reason: "COMPLETED"
---

# Add Rust unit and integration tests for the architecture mode matrix

## Imported context

This record was imported from [Nook GitHub issue #285](https://github.com/meta-secret/nook/issues/285)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #275.

## Dependency Graph

Implementation ordering and subagent workstreams for this feature live in #287. Check it before starting this issue so prerequisites and parallel work are clear.

## Problem

The architecture modes are security/product invariants, so the test burden belongs mostly in Rust domain tests. E2E is smoke; it must not be the proof that the mode matrix is safe.

## Scope

- Add Rust unit/integration coverage for the mode compatibility matrix.
- Cover `device_mode` behavior, including standard recovery and anti-hacker IndexedDB-loss semantics.
- Cover simple vs nexus vault unlock rules, including the invariant that nexus cannot be opened by one device for the protected key epoch.
- Cover provider capability validation for personal/shared replication.
- Cover onboarding routing: personal credential transfer vs shared provider identity/grant request.
- Cover migration/defaulting for existing vaults and provider rows.

## Out of Scope

- Browser rendering tests.
- Full provider API live tests.

## Acceptance Criteria

- `nook-core` and/or `nook-auth2` tests prove every valid and invalid mode combination the architecture doc names.
- Tests reject unsupported provider/mode combinations before UI can produce an onboarding code.
- Tests prove secrets, PRF outputs, shares, provider credentials, and local anti-hacker material are not serialized to sync providers, event logs, app logs, or plaintext browser storage.
- The coverage floor remains satisfied; if this work drops Rust coverage below the committed threshold, the implementing PR adds enough Rust tests before handoff.

## Definition of Done

- Implementing agents run the relevant Rust test subset while iterating and the repo gate before PR handoff.
- New Rust tests live near the owning domain module or in focused integration tests, not only in web/e2e.

## Notes

- Current anchors: `.cortex/rules.md`, `nook-app/nook-auth2/src/auth/multi_device.rs`, `nook-app/nook-core/src/sync/validation.rs`, `nook-app/nook-core/src/vault/vault_format.rs`, `nook-app/nook-core/tests/multi_device_workflow.rs`.


## Historical comments

### cypherkitty — 2026-07-09T18:26:54Z

## Closeout
Done in PR #288.

- Rust unit/integration coverage for matrix, nexus reconstruct/open-share, shared-grant outcomes, hydrate fail-closed
- `nook-core/tests/nexus_vault_workflow.rs`

Evidence: PR https://github.com/meta-secret/nook/pull/288 (HEAD `55da584a`, base `nook-v2`). Local validation: `task check` and `task ci:pr` green (113 e2e passed; nexus ceremony + architecture modes + sync-vault covered).

### cypherkitty — 2026-07-09T18:26:56Z

Closing as completed via PR #288 (`55da584a` → `nook-v2`). Local `task check` + `task ci:pr` green.

### cypherkitty — 2026-07-09T19:52:55Z

Reopened because the Rust matrix lacked adversarial coverage for full-key envelopes in nexus, nexus shares in simple vaults, malformed/duplicate/partial share sets, revoked actors, and multiple independent genesis roots. Those tests are being added now.

### cypherkitty — 2026-07-10T00:50:11Z

Added and passed the Rust unit/integration coverage for the architecture matrix, Nexus invariants, event authorization, provider capabilities, and onboarding policy in PR #293, merged into nook-v2 as 7f5da1a23ae5a24f1fa2bf95bf479aeb533fe22c. Coverage: 92.28% against a 90% floor.
