---
title: Type shared import parsing and metadata ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-shared-import-support
created_at: 2026-09-06T18:15:10Z
updated_at: 2026-09-06T20:22:00Z
source_issues: []
related_prs:
  - 1467
depends_on:
  - issues/rust-action-ownership/plaintext-csv-admission.md
---

# Type shared import parsing and metadata ownership

## Context

Shared CSV parsing and import metadata helpers still expose eight homeless production functions used by format-specific typed importers. The format-specific action graphs now own their readers and checked schemas, but common header/field observation, consuming collection, and metadata construction remain free operations without explicit owners.

## Outcome

Shared import support becomes a small set of consuming and borrowed owners. A private-field `CsvImportReader` owns the configured original reader and consumes itself during collection; borrowed header and record-field owners retain normalization and observation rules; data-carrying metadata owners perform append and source-label operations. Existing format-specific checked states retain admitted readers and columns, so no generic framework or artificial admission state is introduced.

## Scope

Exact 13-file core-only closure:

- `nook-app/nook-platform/nook-core/src/secrets/import_support.rs`
- `nook-app/nook-platform/nook-core/src/secrets/apple_passwords_import/records.rs`
- `nook-app/nook-platform/nook-core/src/secrets/bitwarden_import/items.rs`
- `nook-app/nook-platform/nook-core/src/secrets/chrome_passwords_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/dashlane_import/archive.rs`
- `nook-app/nook-platform/nook-core/src/secrets/dashlane_import/rows.rs`
- `nook-app/nook-platform/nook-core/src/secrets/keepassxc_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/keeper_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/keeper_import/columns.rs`
- `nook-app/nook-platform/nook-core/src/secrets/keeper_import/records.rs`
- `nook-app/nook-platform/nook-core/src/secrets/lastpass_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/onepassword_import/items.rs`
- `nook-app/nook-platform/nook-core/src/secrets/proton_pass_import/items.rs`

Move eight shared production operations and all direct consumers onto bounded owners while retaining 63 inline tests. Keep additions between 850 and 1,200, below a hard ceiling of 1,600; keep support below 650 lines and every consumer below 750.

## Acceptance criteria

- [x] `CsvImportReader` owns the configured original reader, observes headers, and consumes itself during collection; existing format-specific checked states retain reader plus admitted columns.
- [x] Shared collection preserves flexible parsing, header-only trimming, the 100,000-record check before propagating the next record error, source/skipped counting, conversion order, and each existing limit error.
- [x] Borrowed header and record-field owners preserve BOM/ASCII normalization, removal of spaces/underscores/hyphens, missing fields as empty strings, trimmed presentation fields, and untouched password bytes.
- [x] LastPass keeps its separate reader and unlimited-row behavior while using only the shared metadata helpers.
- [x] Metadata owners preserve filtering, retained values, heading/bullet spacing, ordering, exact label deduplication, and Dashlane filename classification.
- [x] All 63 existing tests remain; focused collection error-order, blank-versus-short-row, exact-password-byte, normalization, metadata-output, and cursor ownership/consumption controls are added inline.
- [x] Ownership denial and invalid-suppression prohibition cover `import_support.rs` and all listed consumers; fixtures remain unchanged.
- [x] No schema, cryptography, zeroization, storage, browser ABI, fallback, recovery, or new limit changes are added.
- [x] Hosted PR checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass; remote Loom baseline status is recorded without unrelated repair.

## Constraints

No generic importer framework, fallback, recovery exception, cleanup, persistence, schema migration, cryptographic change, public ABI change, or artificial admission layer. Preserve exact parsing limits, error precedence, ordering, field semantics, metadata output, and zeroization.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `003ab85c22df855320cd2fd0d909a6ef33b49f53` identified eight shared homeless operations, 63 existing inline tests, and the exact 13-file closure with zero overlap with live PRs #1464, #1463, #1462, and #1210. Estimated scope is 850–1,200 additions with a hard ceiling of 1,600. Main retains the known remote Loom module-expert baseline failure from PR #1447 outside this scope.


## Completion

PR #1467 merged as `3cbc19bad6d235796d4c8049738f3c842719a4fb` after final head `3b8873bf1292a8d7dc6b40c746cd6e853a70905e` was rebased onto main `88194e6d3b482d6dacc3da68d78690684c6ed001`. The 13-file scope migrated eight shared homeless operations onto consuming, borrowed, and data-carrying owners with 686 additions and 239 deletions.

Hosted PR run `34056861018`, repository policy `34056837645`, remote Loom `34057597943`, exact-head SECURITY, readiness, and deployment `https://pr-1467.nokey-sh.pages.dev` all passed. Linear UI demos run `34057727598` passed on the delivery head.
