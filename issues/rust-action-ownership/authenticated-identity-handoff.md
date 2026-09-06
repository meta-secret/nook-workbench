---
title: Type authenticated identity handoff admission and publication
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-authenticated-identity-handoff
created_at: 2026-09-06T09:23:42Z
updated_at: 2026-09-06T09:40:10Z
source_issues: []
related_prs:
  - 1440
depends_on:
  - issues/rust-action-ownership/identity-epoch-reconciliation.md
---

# Type authenticated identity handoff admission and publication

## Context

The WASM identity handoff module still exposes admission, ancestry, store-name, signing-seed, and commit operations as free functions. The existing transaction order is security-sensitive, but the checked active-device observation and identity import are not represented as consuming states.

## Outcome

Authenticated identity handoff becomes a typed action graph. Transaction-scoped admission, checked existing-vault import, and publication retain the current storage boundaries and error ordering while making the valid sequence explicit.

## Scope

Exact five-file WASM scope:

- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/handoff.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/handoff/existing_vault.rs` (new)
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/identity_handoff.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/device_protection.rs`

Move five production free functions and three fixture helpers onto `IdentityHandoffCommit`, `ExistingVaultHandoff`, private `CheckedExistingVaultHandoff`, borrowed graph/checkpoint owners, and fixture owners. Keep additions below 1,700 and each child below 900 lines.

## Acceptance criteria

- [x] Existing and new-vault transaction selection remains `['vault', 'events']` versus `['vault']`.
- [x] Directory migration, enrollment dispatch, pending-graph rejection, checkpoint/ancestry checks, latest roster envelopes, active-auth selection, and exact error ordering remain unchanged.
- [x] Directory validation, write, legacy deletion, optional signing-seed write, and transaction completion remain ordered and preserve partial effects/future-drop behavior.
- [x] Manager key adoption and pending-handoff clearing remain after the current successful boundaries.
- [x] Existing schemas, browser ABI, secret handling, and session-only unlock rejection remain unchanged.
- [x] Six existing ancestry/browser tests remain; bounded unsupported-enrollment, missing-material, paired-signer, and privacy/consumption coverage is added.
- [x] Complete handoff subtree denies homeless functions and rejects invalid suppression without changing unrelated helpers.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No reusable authorization token, transaction framework, new journal, rollback/recovery path, freshness claim after the transaction, schema migration, fallback, or exactly-once claim. Admission is valid only for the current live transactional observation.

## Progress

DEV-CORE moved all five production handoff operations and three fixture helpers onto the exact five-file ownership boundary. `IdentityHandoffCommit` now owns transaction selection, signing-seed persistence, and consuming publication; `ExistingVaultHandoff` admits the live transaction and hands a private non-Clone `CheckedExistingVaultHandoff` into consuming import. The final PR delta is 1,080 authored additions and 711 deletions, within the user-requested 2,000-line limit.

Remote Loom run `34024882364` passed. Hosted PR run `34024890216` passed Native Rust, WASM build, WASM Node, web, Dylint, Rust ecosystem, dependency, coverage, and preview verification. Exact-head SECURITY review passed with no P1/P2 findings. `task pr:ready PR=1440` returned ready with zero unresolved threads and successful exact-head deployment. PR #1440 squash-merged as `80f5e4596d144a3915728a23b1e795520715365b`.


Read-only DEV-CORE inventory at origin/main `1be4c7446f79eedbcb5ebf28c20215cfcfb3a827` identified the five-file closure with no overlap with live PRs #1439, #1430, or #1210.
