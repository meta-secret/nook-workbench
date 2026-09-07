---
title: Type active provider credential projection ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-active-provider-credential-projection
created_at: 2026-09-07T06:00:58Z
updated_at: 2026-09-07T06:22:07Z
source_issues: []
related_prs:
  - 1496
depends_on:
  - issues/rust-action-ownership/active-vault-provider-scope-ownership.md
---

# Type active provider credential projection ownership

## Context

Active provider credential projection still exposes free operations for request projection and ECMAScript whitespace/default normalization across core and WASM adapters. These operations belong to the request/report owner and a private borrowed provider-text owner, while public WASM DTO and serialization contracts remain unchanged.

## Outcome

`ActiveProviderCredentialsRequest::project` owns the credential projection action. A private borrowed provider-text owner owns ECMAScript whitespace normalization and non-empty default selection. The focused fixture helpers move onto meaningful fixture owners. Obsolete core reexports disappear and the sole production WASM caller uses the bounded owners.

## Scope

Exact four-file closure on fresh main `79ad3e2abb46a4082fcd35262f27a3c32a939e29`:

- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/active_credentials.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/mod.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/vault_api.rs`

Move four production free operations (`active_provider_credentials_projection`, `is_ecmascript_whitespace`, `trim_ecmascript_whitespace`, and `non_empty`) and three fixture helpers onto bounded owners. Estimated 400–600 additions and 200–300 removals; strict ceiling 800 additions; no new files.

## Acceptance criteria

- [x] Local-vault precedence remains ahead of login setup, which remains ahead of first-provider projection.
- [x] Projection selects only the first provider and preserves row order plus existing malformed/blank-field behavior.
- [x] ECMAScript trimming remains exact, including FEFF and excluding U+0085.
- [x] Repository/file-name defaults and provider-specific field clearing remain unchanged.
- [x] PAT projection remains unchanged for every provider variant; no validation or credential sanitization is added.
- [x] The original request remains unchanged; DTOs, public WASM signatures, and serialization remain unchanged.
- [x] Retain all 17 scoped tests: seven projection, two parent-module, and eight WASM tests; add bounded precedence, login-mode, first-row, whitespace/default, and input-nonmutation matrices. Leave three downstream provider-state tests untouched.
- [x] Ownership denial and invalid-suppression prohibition cover only the completed `active_credentials.rs` subtree.
- [x] Scoped gates, hosted validation, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No new files, storage or schema changes, authorization or crypto changes, browser lifecycle changes, public WASM signature changes, compatibility fallbacks, or local product builds/tests. Preserve DTOs, serialization, defaults, provider-specific clearing, and all malformed/blank handling.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `79ad3e2abb46a4082fcd35262f27a3c32a939e29` found four homeless production operations and three fixture helpers in an exact four-file closure with no live PR overlap. The scope stays below the repository’s authored-file guardrails.

## Completion

Implemented and merged in PR #1496.

- Final head: `27f8230ef6531443c45436a9258bfe2d8627a24`
- Base: `79ad3e2abb46a4082fcd35262f27a3c32a939e29`
- Merge commit: `52196e5278bce64b469adbed1d484f3f04c31058`
- Hosted PR run: `34089435428` passed; exact deployment: `https://pr-1496.nokey-sh.pages.dev`
- Remote Loom verification: `34090278114` passed.
- Exact-head SECURITY: PASS; no P1/P2 findings.
- `task pr:ready PR=1496`: `ready: true`.
- Scoped formatting/static/retention/size checks and `task loom:pre-push` passed; no local product builds/tests run.

