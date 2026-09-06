---
title: Type Keeper CSV schema admission and custom-field conversion
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-keeper-csv-schema-admission
created_at: 2026-09-06T16:41:27Z
updated_at: 2026-09-06T17:12:17Z
source_issues: []
related_prs:
  - 1460
depends_on:
  - issues/rust-action-ownership/proton-pass-import-admission.md
---

# Type Keeper CSV schema admission and custom-field conversion

## Context

Keeper CSV import still exposes free header lookup, custom-field classification, metadata collection, record conversion, and planning across core secrets and the sole WASM caller. Existing limits, alias precedence, flexible-row behavior, field ordering, folder handling, password preservation, and commit sequencing are correct, but the valid import action graph is not represented by consuming owners.

## Outcome

Keeper import becomes a typed schema and conversion action graph. A checked input owner retains the admitted reader and columns; named header and custom-field owners classify schema; borrowed record and metadata owners enforce conversion before the consuming plan is exposed.

## Scope

Exact five-file platform closure:

- `nook-app/nook-platform/nook-core/src/secrets/keeper_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/keeper_import/columns.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/keeper_import/records.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move the eight production free operations and fixture helpers onto bounded owners while keeping additions between 850 and 1,200 and below a hard ceiling of 1,600. Keep each core file below 650 lines and the WASM adaptation narrow.

## Acceptance criteria

- [x] 64 MiB CSV and 100,000-record limits, flexible rows, header trimming, and error order remain unchanged.
- [x] Required-column alias priority and first matching header remain unchanged.
- [x] Custom pairs remain numerically ordered; repeated components use the last column; incomplete pairs disappear; named `$` fields follow pairs.
- [x] Explicit blob suppresses trailing-column interpretation; without a blob, trailing columns pair sequentially.
- [x] Blank/blob-line handling, first-colon splitting, and metadata ordering remain unchanged.
- [x] Login versus note classification still uses trimmed password emptiness while imported password bytes remain exact.
- [x] Folder-only rows remain skipped; fallback titles and URL/title behavior remain unchanged.
- [x] A private non-Clone checked state retains the original reader and admitted columns; consuming conversion exposes the plan only after schema and records are valid.
- [x] WASM ABI and `plan → drop Zeroizing CSV → commit` sequencing remain unchanged.
- [x] No cryptography, persistence, schema migration, shared importer, or browser behavior changes are added.
- [x] All three existing tests remain; focused alias/error-order, custom-field, blob/trailing, whitespace-password, record-limit, and checked-state controls are added.
- [x] Ownership denial and invalid-suppression prohibition cover the complete Keeper subtree; fixtures remain unchanged.
- [ ] Remote Loom is blocked by the refreshed main baseline; hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No generic importer framework, fallback, recovery exception, cleanup, new limit, persistence, schema migration, cryptographic change, or public ABI change. Preserve exact limits, error precedence, wire behavior, ordering, field semantics, and zeroization.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `a1e52d3efc90657ffabcda0421003d0ac0095fa4` identified this five-file closure with zero changed-file overlap with live PRs #1459, #1447, and #1210. After implementation, the branch was rebased onto refreshed main `104d876a4a9e7158377dcb5158a9ae17f2767709`; PR #1460 merged at `2a76cc7ecdc906663a454274e6833acf6867a556`. The boundary contains eight production free operations, three existing tests, and an estimated 850–1,200 additions with a hard ceiling of 1,600.

## Completion note

Keeper implementation merged in PR #1460 at final head `f18a786b8249ec2beb5d1688e43da9a1f2104972`, rebased onto refreshed main `104d876a4a9e7158377dcb5158a9ae17f2767709`, with squash merge `2a76cc7ecdc906663a454274e6833acf6867a556`. The final scope is 676 additions and 331 deletions across exactly five files. Hosted PR run `34047273453`, repository policy `34047232319`, exact-head SECURITY, readiness, and Linear UI demos `34047818099` passed. Remote Loom runs `34047287233` and `34047708576` reproduced 19 module-expert catalog failures from main PR #1447; no Keeper files or unrelated main health were changed to mask that baseline.
