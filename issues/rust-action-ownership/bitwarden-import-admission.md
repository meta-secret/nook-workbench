---
title: Type Bitwarden encrypted and plaintext import admission
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-bitwarden-import-admission
created_at: 2026-09-06T14:41:28Z
updated_at: 2026-09-06T15:21:19Z
source_issues: []
related_prs:
  - 1454
depends_on:
  - issues/rust-action-ownership/dashlane-import-admission.md
---

# Type Bitwarden encrypted and plaintext import admission

## Context

Bitwarden encrypted and plaintext import still expose free dispatch, validation, cryptographic continuation, item parsing, and record conversion operations across core secrets and the sole WASM caller. Existing error ordering, KDF bounds, authenticated decryption, zeroization, dynamic JSON interpretation, and commit sequencing are correct, but the valid action graph is not represented by consuming owners.

## Outcome

Bitwarden import becomes a typed action graph. A borrowed `BitwardenExport` owns dispatch; encrypted envelope and key owners retain KDF and authenticated decryption; a private non-Clone checked continuation carries the exact encrypted export and derived key only after validation-string decryption succeeds, then consumes itself to decrypt the payload. Existing dynamic JSON and report DTO behavior remain unchanged.

## Scope

Exact five-file platform closure:

- `nook-app/nook-platform/nook-core/src/secrets/bitwarden_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/bitwarden_import/encryption.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/bitwarden_import/items.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move 15 production free operations onto bounded owners while keeping additions between 1,100 and 1,500 and below a hard ceiling of 1,750. Keep core modules below 700 lines and the WASM adaptation narrow.

## Acceptance criteria

- [x] JSON dispatch and account-restricted → metadata → missing-password → KDF → validation-string → payload → plaintext-item error order remain unchanged.
- [x] PBKDF2/Argon2 bounds and parameters, salt treatment, HKDF labels, type-2 encoding, MAC-before-CBC, padding/UTF-8 errors, and zeroization remain unchanged.
- [x] Nullable/default fields, unknown-field acceptance, exact credentials, URL/title precedence, metadata order, unsupported counts, and card validation remain unchanged.
- [x] The checked continuation is private, non-Clone, carries exact encrypted export plus derived key, is constructed only after validation-string decryption, and consumes itself for payload decryption without authenticating the separate payload by marker success.
- [x] WASM signature and plan → drop password → drop JSON → commit ordering remain unchanged.
- [x] Existing dynamic JSON interpretation remains; no stricter schema, new limits, persistence, fallback, or recovery behavior is added.
- [x] All 11 existing tests remain, including encrypted PBKDF2 fixture and Argon2 key vector; focused malformed-encoding/error-order, KDF-boundary, tampered-payload, exact-byte/null-field, and construction/consume controls are added inline.
- [x] Ownership denial and invalid-suppression prohibition cover the completed Bitwarden subtree; fixture JSON remains unchanged.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No generic crypto/parser framework, fallback, recovery exception, cleanup, stricter JSON schema, new limit, filesystem or persistence behavior, cryptographic parameter change, or public ABI change. Preserve exact error and zeroization semantics.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `74506792dacfcd6047e6dc8925126ab8cb81bf76` identified the five-file closure with zero changed-file overlap with live PRs #1453, #1447, and #1210. The boundary contains 15 production free operations and 11 existing inline tests; estimated 1,100–1,500 additions and 500–650 deletions with a hard ceiling of 1,750 additions.

Implementation landed in PR #1454 at final head `ff9ff23f778f80758ceea0ad0db90b4dbbbd2d8f` after rebasing onto refreshed main `cabc0fb830f12e1c8f06a6c3865454d91cded01d`. Final scope is 816 additions and 479 deletions across exactly five files; squash merge is `643472c20230015be0110e0b65ce9c6b8c79cc07`. Remote Loom, hosted validation, exact-head SECURITY, readiness, deployment, and post-merge Linear UI demo passed.
