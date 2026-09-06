---
title: Type Apple Passwords and Safari archive admission
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-apple-passwords-admission
created_at: 2026-09-06T17:15:09Z
updated_at: 2026-09-06T17:35:31Z
source_issues: []
related_prs:
  - 1461
depends_on:
  - issues/rust-action-ownership/keeper-csv-schema-admission.md
---

# Type Apple Passwords and Safari archive admission

## Context

Apple Passwords and Safari import still exposes free CSV header lookup, archive filename classification, bounded reads, candidate selection, record conversion, and planning across core secrets and the sole WASM caller. Existing limits, candidate precedence, missing-column continuation, empty-first-candidate behavior, OTP ordering, and commit sequencing are correct, but the valid import action graph is not represented by consuming owners.

## Outcome

Apple import becomes a typed archive and CSV action graph. Export owners classify bounded archive candidates; a checked CSV owner binds admitted columns to the original reader; borrowed record owners perform login/TOTP conversion before the consuming plan is exposed.

## Scope

Exact five-file platform closure:

- `nook-app/nook-platform/nook-core/src/secrets/apple_passwords_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/apple_passwords_import/archive.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/apple_passwords_import/records.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move the 14 production free operations and fixture helpers onto bounded owners while keeping additions between 900 and 1,250 and below a hard ceiling of 1,600. Keep each core file below 650 lines and the WASM adaptation narrow.

## Acceptance criteria

- [x] 128 MiB export, 64 MiB CSV, 100,000-record limits, bounded reads, and error order remain unchanged.
- [x] Case-insensitive CSV extension/passwords basename recognition, slash/backslash basename handling, and directory exclusion remain unchanged.
- [x] Candidate sorting remains stable: passwords filenames first, then ASCII-lowercased full name.
- [x] First successful candidate wins, including an empty valid CSV; continue only after `MissingColumn`; all other failures terminate; if none succeeds, preserve the last missing-column error.
- [x] Required-column order, BOM/reordered headers, optional fields, and flexible rows remain unchanged.
- [x] Exact password bytes, login-before-authenticator ordering, OTP-only skip counts, invalid-OTP handling, and website inference remain unchanged.
- [x] Private non-Clone checked CSV state binds admitted columns to the original reader and consumes collection before exposing the plan.
- [x] WASM ABI and `plan → drop Zeroizing export → commit` sequencing remain unchanged.
- [x] No cryptography, persistence, schema migration, shared importer, or browser behavior changes are added.
- [x] All 11 existing tests remain; focused candidate-order/tie/error-precedence, empty-first-candidate, malformed UTF-8, bounded CSV/record, and checked-state controls are added.
- [x] Ownership denial and invalid-suppression prohibition cover the complete Apple subtree; fixtures remain unchanged.
- [x] Hosted PR checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass; remote Loom baseline status is recorded without unrelated repair.

## Constraints

No generic importer framework, fallback, recovery exception, cleanup, new limit, persistence, schema migration, cryptographic change, or public ABI change. Preserve exact limits, error precedence, wire behavior, ordering, field semantics, and zeroization.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `2a76cc7ecdc906663a454274e6833acf6867a556` identified this five-file closure with zero changed-file overlap with live PRs #1459 and #1210. The boundary contains 14 production free operations, one ZIP fixture helper, 11 tests, and an estimated 900–1,250 additions with a hard ceiling of 1,600. Main has a known remote Loom module-expert baseline failure from PR #1447 outside this scope.

## Completion note

Apple Passwords/Safari implementation merged in PR #1461 at final head `9431e2a436ff8d82c52226797a08c01e37c06d26`, rebased onto refreshed main `0d06c5821ff4219088b51f08cf1f263262ffa8e3`, with squash merge `50b2f544db11bb88e5477a2e5d3f23912665867a`. Final scope is 574 additions and 292 deletions across exactly five files. Hosted PR run `34048636345`, repository policy `34048618520`, exact-head SECURITY, readiness, and Linear UI demos `34049044557` passed. Remote Loom `34048647670` reproduced 19 module-expert catalog failures from main PR #1447; the failure is outside this Apple scope and was recorded without unrelated repair.
