---
title: Type remaining plaintext CSV import admissions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-plaintext-csv-admission
created_at: 2026-09-06T17:38:12Z
updated_at: 2026-09-06T18:06:40Z
source_issues: []
related_prs:
  - 1465
depends_on:
  - issues/rust-action-ownership/apple-passwords-admission.md
---

# Type remaining plaintext CSV import admissions

## Context

LastPass, KeePassXC, and Chrome password imports still expose free CSV planners, header lookup, record conversion, metadata construction, and format-specific classification across core secrets and the direct WASM callers. Existing byte limits, flexible parsing, header precedence, password handling, record counts, TOTP behavior, and commit sequencing are correct, but these remaining plaintext import action graphs are not represented by consuming owners.

## Outcome

The remaining plaintext CSV importers become typed format-specific action graphs. Each borrowed CSV input admits a private non-Clone checked state retaining its original reader and admitted columns; consuming collection produces the existing plan DTOs. Format-specific headers, records, metadata, LastPass secure notes, KeePassXC TOTP, and Chrome alias/optional precedence remain explicit owners without a generic framework.

## Scope

Exact five-file platform closure:

- `nook-app/nook-platform/nook-core/src/secrets/lastpass_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/keepassxc_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/chrome_passwords_import.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move 19 production free operations and direct consumers onto bounded owners while keeping additions between 850 and 1,250 and below a hard ceiling of 1,600. Keep each importer within its existing module budget and consumer changes narrow.

## Acceptance criteria

- [x] All formats preserve 64 MiB byte admission, flexible CSV parsing, exact errors and ordering, record order, password bytes, Zeroizing, and commit sequencing.
- [x] LastPass rejects duplicate recognized headers before missing-column reporting; preserves its distinct normalization, no record-count limit, source count, raw fields, secure-note URL/favorite/TOTP metadata semantics.
- [x] KeePassXC preserves first matching normalized header, required-column order, 100,000-row limit, login/note classification, login-or-note before authenticator ordering, malformed OTP skip counts, and original TOTP notes.
- [x] Chrome preserves canonical-before-alias preference, optional-column preference, first duplicate match, 100,000-row limit, empty-password skips, and whitespace-only password retention.
- [x] Private non-Clone checked states bind each admitted schema to the original reader and consuming collection exposes plans only after format-specific admission.
- [x] WASM signatures, error mapping, and `plan → drop Zeroizing input → commit` sequencing remain unchanged.
- [x] No cryptography, persistence, schema migration, shared importer, or browser behavior changes are added; `import_support.rs` remains untouched.
- [x] All 14 existing tests remain; focused precedence, duplicate/alias, exact-byte, counting, TOTP, and checked-state privacy/borrow/consume controls are added inline.
- [x] Ownership denial and invalid-suppression prohibition cover all three completed importer modules; fixtures remain unchanged.
- [x] Hosted PR checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass; remote Loom baseline status is recorded without unrelated repair.

## Constraints

No generic importer framework, fallback, recovery exception, cleanup, new limit, persistence, schema migration, cryptographic change, or public ABI change. Preserve each format's exact limits, error precedence, ordering, field semantics, and zeroization.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `50b2f544db11bb88e5477a2e5d3f23912665867a` identified the remaining plaintext CSV closure with zero changed-file overlap with live PRs #1463, #1462, and #1210. The boundary contains 19 production free operations and 14 existing tests, with an estimated 850–1,250 additions and a hard ceiling of 1,600. Main retains a known remote Loom module-expert baseline failure from PR #1447 outside this scope.


## Completion note

Remaining LastPass, KeePassXC, and Chrome plaintext CSV admissions merged in PR #1465 at final head `545bc57e49157ce7b980e75370db3c18bf3d87fb`, based on refreshed main `50b2f544db11bb88e5477a2e5d3f23912665867a`, with squash merge `003ab85c22df855320cd2fd0d909a6ef33b49f53`. Final scope is 889 additions and 362 deletions across exactly five files. Hosted PR run `34049815210`, repository policy `34049652180`, exact-head SECURITY, Linear UI demos `34050638299`, and deployment `https://pr-1465.nokey-sh.pages.dev/` passed; readiness was verified from the green hosted checks and deployment. Remote Loom `34049829193` reproduced the known 19 module-expert catalog failures from main PR #1447; the failure is outside this five-file change and was recorded without unrelated repair.
