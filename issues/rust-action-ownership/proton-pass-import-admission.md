---
title: Type Proton Pass ZIP and JSON import admission
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-proton-pass-import-admission
created_at: 2026-09-06T15:48:47Z
updated_at: 2026-09-06T16:05:55Z
source_issues: []
related_prs:
  - 1457
depends_on:
  - issues/rust-action-ownership/onepassword-import-admission.md
---

# Type Proton Pass ZIP and JSON import admission

## Context

Proton Pass ZIP and JSON import still expose free archive reads, selected-entry admission, field interpretation, metadata, login/note/card conversion, expiry parsing, JSON planning, and dispatch across core secrets and the sole WASM caller. Existing limits, mixed encrypted/plain selection, ordering, skip reporting, exact credential bytes, and commit sequencing are correct, but the valid action graph is not represented by consuming owners.

## Outcome

Proton Pass import becomes a typed action graph. A borrowed input owner dispatches; an archive owner scans and admits the selected plain entry while a private non-Clone selected-entry owner retains the actual `ZipFile` after lookup and advertised-size checks, then consumes it for bounded UTF-8 reading. Decoded export and borrowed vault-item owners retain conversion policy without changing report DTOs or the public ABI.

## Scope

Exact five-file platform closure:

- `nook-app/nook-platform/nook-core/src/secrets/proton_pass_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/proton_pass_import/archive.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/proton_pass_import/items.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move 11 production free operations and two fixture helpers onto bounded owners while keeping additions between 900 and 1,250 and below a hard ceiling of 1,600. Keep projected core files below 700 lines and the WASM adaptation narrow.

## Acceptance criteria

- [x] 128 MiB input, 64 MiB ZIP data, larger plain-JSON allowance, advertised-size, and bounded-read checks remain unchanged.
- [x] Exact PGP prefix detection, ZIP magic handling, full archive scan, valid `Proton Pass/data.json` precedence over `data.pgp`, encrypted filename distinction, and ZIP/UTF-8/JSON error order remain unchanged.
- [x] `BTreeMap` vault and item ordering, unsupported counts, username precedence/trimming, exact password bytes, metadata ordering, card validation, expiry interpretation, attachment/passkey skip reporting, and unknown-item behavior remain unchanged.
- [x] The private non-Clone selected-entry state retains the actual borrowed `ZipFile` after lookup and advertised-size admission; consuming `read(self)` performs the existing bounded UTF-8 read without reopening.
- [x] WASM ABI and plan → drop Zeroizing input → commit ordering remain unchanged.
- [x] No extraction, attachment/passkey import, crypto, storage, schema, fallback, recovery, or new limit behavior is added.
- [x] All four existing tests remain; focused mixed encrypted/plain selection, malformed UTF-8, size-limit, ordering, unknown-item, field-type, credential-byte, metadata, borrow, privacy, and consuming controls are added inline.
- [x] Ownership denial and invalid-suppression prohibition cover the complete Proton subtree; fixtures remain unchanged.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No generic archive/parser framework, extraction, attachment/passkey processing, fallback, recovery exception, cleanup, new limit, persistence, schema migration, cryptographic change, or public ABI change. Preserve exact limits, selection/error ordering, skip reporting, dynamic fields, and zeroization semantics.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `7d071f2e64f03527c0550b5fd12d3ed81e9647cc` identified the five-file closure with zero changed-file overlap with live PRs #1455, #1447, and #1210. The boundary contains 11 production free operations, two fixture helpers, and four existing tests; estimated 900–1,250 additions and 400–500 deletions with a hard ceiling of 1,600 additions.

Implementation landed in PR #1457 at final head `8f64120fa148e0a051f4ce118c2f302b85072eb5`. Final scope is 720 additions and 376 deletions across exactly five files; squash merge is `60653ba0497eccddc65318a6b10c7c5fdec9917b`. Remote Loom, hosted validation, exact-head SECURITY, readiness, deployment, and post-merge Linear UI demo passed.
