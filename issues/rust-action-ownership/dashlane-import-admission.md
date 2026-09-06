---
title: Type Dashlane CSV and ZIP import admission
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-dashlane-import-admission
created_at: 2026-09-06T14:14:14Z
updated_at: 2026-09-06T14:37:37Z
source_issues: []
related_prs:
  - 1452
depends_on:
  - issues/rust-action-ownership/device-access-metadata.md
---

# Type Dashlane CSV and ZIP import admission

## Context

Dashlane CSV and ZIP import still expose free planning, archive traversal, column admission, and record conversion operations across core secrets and the WASM caller. Existing limits, filename/header classification, archive ordering, flexible CSV handling, exact bytes, OTP/payment/note behavior, and commit sequencing are correct, but the valid action graph is not represented by consuming owners.

## Outcome

Dashlane import becomes a typed action graph. A borrowed `DashlaneExport` consumes planning; archive and entry owners classify and bound ZIP reads; a private non-Clone `CheckedDashlaneCsv` retains the original CSV reader with admitted category/columns and consumes collection. Existing plan DTOs remain reports, and the public WASM import signature and commit sequence remain unchanged.

## Scope

Exact five-file platform closure:

- `nook-app/nook-platform/nook-core/src/secrets/dashlane_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/dashlane_import/archive.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/dashlane_import/rows.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move 20 production free operations and one ZIP fixture helper onto bounded owners while keeping additions between 1,000 and 1,450 and below a hard ceiling of 1,800. Keep the WASM caller narrow and projected core files below 700 lines.

## Acceptance criteria

- [x] The 128 MiB export limit, each CSV 64 MiB advertised/read limit, existing per-CSV record cap, and no aggregate-limit claim remain unchanged.
- [x] ZIP magic detection, basename/case behavior, archive iteration order, duplicate categories, and exact error precedence remain unchanged.
- [x] Flexible CSV rows, header normalization, password bytes, metadata ordering, username and OTP precedence/defaults, and unsupported-row counts remain unchanged.
- [x] Existing payment/note validation, skipped-error behavior, and in-memory parsing remain unchanged; no filesystem extraction is added.
- [x] Zeroizing export lifetime and WASM parse → drop input → existing secret-import commit sequence remain unchanged.
- [x] `DashlaneImportPlan` remains a report DTO without artificial single-use claims; no public ABI, schema, crypto, recovery, or shared-parser change is introduced.
- [x] All three existing Dashlane tests remain; colocated matrices cover category/header precedence, missing columns, exact bytes, malformed/oversized entries, duplicate archive order, unsupported categories, and OTP/payment counts.
- [x] Private-construction, borrowed-input, and consuming-reader compile controls are added; ownership denial and invalid-suppression prohibition cover the complete Dashlane subtree.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No generic parser or persistence framework, fallback, recovery exception, cleanup, aggregate size claim, filesystem extraction, schema migration, cryptographic change, or shared-importer modification. Preserve exact limits, errors, skipped-result semantics, and public WASM behavior.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `694ff764b7b7fd7c4998b3aab9abb7ad6383c342` identified the five-file closure with zero changed-file overlap with live PRs #1450, #1447, and #1210. The boundary contains 20 production free operations and one ZIP fixture helper; estimated 1,000–1,450 additions and 450–600 deletions with a hard ceiling of 1,800 additions.


Implementation landed in PR #1452 at final head `b49338142757ae679c3d5461eb23a89fd623771c` after merging refreshed main `43c64d38b7a2fe798dda180a3a9659d944f0b88b`. Final scope is 859 additions and 496 deletions across exactly five files; squash merge is `74506792dacfcd6047e6dc8925126ab8cb81bf76`. Remote Loom, hosted validation, exact-head SECURITY, readiness, deployment, and post-merge Linear UI demo passed.
