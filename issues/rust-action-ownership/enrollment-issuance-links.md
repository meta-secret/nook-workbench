---
title: Type enrollment issuance provider validation and deep-link ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-enrollment-issuance-links
created_at: 2026-09-06T11:34:20Z
updated_at: 2026-09-06T12:22:23Z
source_issues: []
related_prs:
  - 1446
depends_on:
  - issues/rust-action-ownership/protected-identity-publication.md
---

# Type enrollment issuance provider validation and deep-link ownership

## Context

Enrollment issuance, provider validation, and deep-link parsing still expose free operations across auth2, core, shared-grant, and WASM boundaries. Existing password and identifier validation order, encryption and key derivation, wire fields, email behavior, query parsing, and checked envelope controls are correct, but the valid action graph is not represented by consuming owners.

## Outcome

Enrollment becomes a typed action graph. A borrowed issuance request produces a private non-Clone checked issuance state that consumes into issuance; provider validation and email plausibility live on owned domain inputs; enrollment link normalization, query extraction, decoding, and construction live on an `EnrollmentLinkInput` owner. Existing checked-envelope decryption remains consuming and public WASM signatures remain unchanged.

## Scope

Exact ten-file platform scope:

- `nook-app/nook-platform/nook-auth2/src/auth/enrollment.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/enrollment/code.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/enrollment/code/issuance.rs` (new)
- `nook-app/nook-platform/nook-auth2/src/auth/enrollment/code/links.rs` (new)
- `nook-app/nook-platform/nook-auth2/src/auth/enrollment/code/admission.rs`
- `nook-app/nook-platform/nook-auth2/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/auth/enrollment.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_architecture/shared_storage_grant.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/enrollment_entry.rs`

Move 13 production free operations onto issuance, provider, email, link, and checked-envelope owners while keeping additions between 1,100 and 1,500 and below a hard ceiling of 1,750.

## Acceptance criteria

- [x] Issuance validation order remains password, entry ID, provider, vault name, then randomness/encryption.
- [x] PBKDF2 remains at 210,000 iterations with existing salt/IV lengths, AES-GCM behavior, wire fields, and secret lifetimes.
- [x] Raw-versus-trimmed provider validation, case sensitivity, and permissive email behavior remain unchanged.
- [x] URL query-before-fragment precedence, first matching query parameter, lossy percent decoding, and raw-code trimming remain unchanged.
- [x] Outer metadata remains unauthenticated; no expiry, replay, recipient, provider-authorization, or persistence guarantee is added.
- [x] Existing personal/shared provider typestates and checked-decryption controls remain intact; all public WASM signatures stay unchanged.
- [x] Thirteen auth2 tests, four shared-grant tests, and two WASM tests remain; issuance/link tests move with their production children and bounded validation/link/privacy/borrow/consume controls are added.
- [x] Ownership denial and invalid-suppression prohibition cover the completed enrollment subtree; unrelated core/WASM modules remain outside blanket activation.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No schema or public ABI migration, fallback, expiry/replay behavior, recipient or provider authorization, persistence guarantee, rollback/recovery exception, or cryptographic parameter change. Keep base64 calls explicit and do not add a namespace owner for trivial encoding helpers.

## Progress

Read-only DEV-CORE inventory at refreshed origin/main `227d5d2693b8010a26a51dbcac53674e1f7da895` identified the ten-file closure with zero changed-file overlap with live PRs #1445, #1430, and #1210. Estimated 1,100–1,500 additions and 450–650 deletions with a hard ceiling of 1,750 additions.

Implementation landed in PR #1446 at final head `cfd30aecbf79a8448e1940c079e626af3752b3d1` after merging refreshed main commits `49b2bf9a590b968f50f3f29bf00fa15080e8c967` and `c7cfd0a5ee787c211734b416879c7cc2f0cf0db9`. Final scope is 1,115 additions and 535 deletions across exactly ten files. Remote Loom, hosted validation, exact-head SECURITY, readiness, and squash merge `ea7820a4245733b26b9d49836eadc288f316e6d1` passed.
