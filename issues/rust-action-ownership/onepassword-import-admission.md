---
title: Type 1Password 1PUX archive admission
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-onepassword-import-admission
created_at: 2026-09-06T15:24:53Z
updated_at: 2026-09-06T15:45:43Z
source_issues: []
related_prs:
  - 1456
depends_on:
  - issues/rust-action-ownership/bitwarden-import-admission.md
---

# Type 1Password 1PUX archive admission

## Context

1Password 1PUX import still exposes free archive reads, attribute/data admission, field interpretation, credential lookup, metadata, item conversion, and planning operations across core secrets and the sole WASM caller. Existing limits, ZIP behavior, format checks, dynamic fields, ordering, credential bytes, and commit sequencing are correct, but the valid action graph is not represented by consuming owners.

## Outcome

1Password import becomes a typed action graph. A borrowed export owns archive dispatch; a private non-Clone checked archive retains the same opened archive after exact description/version admission and consumes it for planning. Item, field, credential, metadata, and borrowed vault context owners retain conversion policy without changing report DTOs or public ABI.

## Scope

Exact five-file platform closure:

- `nook-app/nook-platform/nook-core/src/secrets/onepassword_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/onepassword_import/archive.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/onepassword_import/items.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move 17 production free operations and two fixture helpers onto bounded owners while keeping additions between 1,050 and 1,450 and below a hard ceiling of 1,750. Keep projected core files below 850 lines and the WASM adaptation narrow.

## Acceptance criteria

- [x] Archive 128 MiB, attributes 64 KiB, data 64 MiB, advertised-size, and bounded-read checks remain unchanged.
- [x] ZIP lookup behavior, missing-entry, malformed UTF-8, description-before-version, and attributes-before-data error order remain unchanged.
- [x] Version wrapper, exact format description, direct/wrapped item acceptance, defaults, and dynamic field interpretation remain unchanged.
- [x] Account/vault/item ordering, unsupported counts, credential precedence, exact password bytes, URL/title selection, metadata order, archived-state handling, credential omission, card validation, and expiry parsing remain unchanged.
- [x] The private non-Clone checked archive retains the same opened archive after exact description/version admission and is the only state that reads `export.data`.
- [x] WASM ABI and plan → drop Zeroizing archive → commit ordering remain unchanged.
- [x] No extraction, attachment processing, crypto, storage, schema, fallback, recovery, or new limit behavior is added.
- [x] All four existing tests remain; focused bounded-limit/error-order, admitted-archive, wrapper-precedence, credential/metadata, and exact-byte cases plus borrow/private-construction/consumption controls are added inline.
- [x] Ownership denial and invalid-suppression prohibition cover the complete 1Password subtree; fixtures remain unchanged.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No generic archive/parser framework, extraction, attachment processing, fallback, recovery exception, cleanup, new limit, persistence, schema migration, cryptographic change, or public ABI change. Preserve exact limits, error ordering, dynamic field behavior, and zeroization semantics.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `643472c20230015be0110e0b65ce9c6b8c79cc07` identified the five-file closure with zero changed-file overlap with live PRs #1455, #1447, and #1210. The boundary contains 17 production free operations, two fixture helpers, and four existing tests; estimated 1,050–1,450 additions and 550–700 deletions with a hard ceiling of 1,750 additions.

Implementation landed in PR #1456 at final head `a408f500a17ba6fa0b4718b369565bc561b3dc04`. Final scope is 914 additions and 547 deletions across exactly five files; squash merge is `7d071f2e64f03527c0550b5fd12d3ed81e9647cc`. Remote Loom, hosted validation, exact-head SECURITY, readiness, deployment, and post-merge Linear UI demo passed.
