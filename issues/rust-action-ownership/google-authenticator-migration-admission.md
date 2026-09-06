---
title: Type Google Authenticator migration batch admission
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-google-authenticator-migration-admission
created_at: 2026-09-06T16:08:39Z
updated_at: 2026-09-06T16:08:39Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/proton-pass-import-admission.md
---

# Type Google Authenticator migration batch admission

## Context

Google Authenticator migration import still exposes free URI parsing, batch validation, Base32 encoding, account/issuer interpretation, parameter conversion, and planning across core secrets and the sole WASM caller. Existing limits, protobuf behavior, error precedence, zeroization, TOTP defaults, ordering, and commit sequencing are correct, but the valid migration action graph is not represented by consuming owners.

## Outcome

Google Authenticator import becomes a typed migration action graph. A borrowed input owner dispatches into parsed migration batches; private non-Clone states retain decoded parts, consuming completion checks batch identity/version/size, sorts indices, rejects duplicates/incompleteness, and only then exposes consuming conversion. Protobuf DTOs remain reports with their existing Clone implementations.

## Scope

Exact five-file platform closure:

- `nook-app/nook-platform/nook-core/src/secrets/google_authenticator_import.rs`
- `nook-app/nook-platform/nook-core/src/secrets/google_authenticator_import/batch.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/google_authenticator_import/parameters.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move six production free operations and three fixture helpers onto bounded owners while keeping additions between 950 and 1,350 and below a hard ceiling of 1,700. Keep projected core files below 750 lines and the WASM adaptation narrow.

## Acceptance criteria

- [ ] Empty/count checks before URI parsing and raw URI length before trimming remain unchanged.
- [ ] Exact URI prefix, first `data=` selection, percent-decoding, Base64/protobuf behavior, and limits (100 QR codes, 16 KiB URI, 1 MiB decoded payload, 10,000 accounts) remain unchanged.
- [ ] Zero batch-size normalization, index validation, mixed → duplicate → incomplete → account-count error precedence, version consistency without a supported-version restriction, sorted-part order, and within-part account order remain unchanged.
- [ ] TOTP algorithm/digit defaults, unsupported HOTP/MD5 handling, Base32 bytes, issuer/account rules, and website inference remain unchanged.
- [ ] Private non-Clone states retain original decoded parts; consuming completion checks batch identity/version/size, indices, duplicates, completeness, and account count before exposing conversion.
- [ ] Existing `Zeroizing`, `mem::take`, parameter Drop behavior, protobuf DTO Clone implementations, and WASM plan → drop URI collection → commit sequence remain unchanged.
- [ ] No new cryptography, persistence, schema, browser ABI, incremental batch recovery, or global single-use claim is added.
- [ ] All seven existing tests remain; focused precedence/limit matrices, labels/Base32, invalid parameters, private construction, non-Clone, and consuming controls are added inline.
- [ ] Ownership denial and invalid-suppression prohibition cover the complete Google Authenticator subtree; fixtures remain unchanged.
- [ ] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No generic protobuf/URI framework, fallback, recovery exception, cleanup, new limit, persistence, schema migration, cryptographic change, or public ABI change. Preserve exact limits, error precedence, wire behavior, zeroization, ordering, and parameter-drop semantics.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `60653ba0497eccddc65318a6b10c7c5fdec9917b` identified the five-file closure with zero changed-file overlap with live PRs #1455, #1447, and #1210. The boundary contains six production free operations, three fixture helpers, and seven existing tests; estimated 950–1,350 additions and 400–550 deletions with a hard ceiling of 1,700 additions.
