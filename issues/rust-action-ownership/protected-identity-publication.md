---
title: Type protected local-identity publication and signer ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-protected-identity-publication
created_at: 2026-09-06T10:57:01Z
updated_at: 2026-09-06T11:29:08Z
source_issues: []
related_prs:
  - 1444
depends_on:
  - issues/rust-action-ownership/simple-genesis-event-admission.md
---

# Type protected local-identity publication and signer ownership

## Context

Protected local-identity publication and signing helpers still expose free operations across keyring and manager boundaries. Existing marker precedence, keyring migration, signer authorization, encryption, write ordering, partial effects, and future-drop behavior are correct, but the lifecycle is not represented by consuming owners.

## Outcome

Protected identity publication becomes a typed action graph. Borrowed protection and signing owners retain the actual store, directory, app key, and selected-entry evidence; a private non-Clone prepared state consumes into the existing ordered persistence operation. Checked signing material carries the seed and matching public key together while named inputs replace positional booleans.

## Scope

Exact six-file WASM scope:

- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/keyring.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/keyring/protection.rs` (new)
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record/keyring/signing.rs` (new)
- `nook-app/nook-platform/nook-wasm/src/storage/identity_record.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/local_identity.rs`

Move 10 production free functions onto protection/signing owners and a prepared protected-identity state; keep protection and signing children within the planned size budgets and hard ceiling 1,750 additions.

## Acceptance criteria

- [x] Simple-genesis, Sentinel-genesis, recovery-marker reads, and rejection precedence remain unchanged.
- [x] Existing keyring loading/migration effects remain before subsequent checks; replacement signers are refused when established signing or vault evidence exists.
- [x] Prior-key authorization remains before protecting an unprotected selected legacy signer; public-key comparisons, error strings, seed handling, and encryption remain exact.
- [x] Keyring write, directory write, legacy active-key deletion, legacy seed deletion, and outer transaction completion order remain unchanged.
- [x] Existing partial effects and future-drop semantics remain; no cleanup, rollback, or recovery behavior is added.
- [x] Ten keyring browser tests and the signing browser test remain; protection tests move with their production child and bounded marker/seed/prepared-state cases are added.
- [x] Ownership denial and invalid-suppression prohibition cover `protection.rs` and `signing.rs`; unrelated keyring read and legacy helpers remain outside this boundary.
- [x] No public WASM ABI, schema, or cryptographic behavior changes.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No schema migration, fallback, rollback/recovery exception, cleanup addition, or provider behavior change. Do not call the inner persistence result committed; the outer caller still awaits `transaction.done()`.

## Progress

Read-only DEV-CORE inventory at origin/main `6100a2650636e566f188f0103e1b54f81ea28483` identified the six-file closure with no changed-file overlap with live PRs #1442, #1430, or #1210. Estimated 1,100–1,500 additions and 650–850 deletions with a hard ceiling of 1,750 additions.

Implementation landed in PR #1444 at final head `c713f2c1c654baa79b1735d3d3c6b4f6954c8880` after merging the current main commit `ab84eea871fa2e40b22c14adaeecfabae18fa24e`. Final scope is 1,375 additions and 863 deletions across exactly six files. Remote Loom, hosted validation, exact-head SECURITY, readiness, and squash merge `227d5d2693b8010a26a51dbcac53674e1f7da895` passed.
