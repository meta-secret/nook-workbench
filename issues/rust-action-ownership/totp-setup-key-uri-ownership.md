---
title: Type TOTP setup-key and otpauth URI admission
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-totp-uri-admission
created_at: 2026-09-06T23:53:00Z
updated_at: 2026-09-07T01:24:00Z
source_issues: []
related_prs:
  - 1477
depends_on:
  - issues/rust-action-ownership/encrypted-secret-replacement-ownership.md
---

# Type TOTP setup-key and otpauth URI admission

## Context

Authenticator setup-key, otpauth URI, protocol-parameter, and numeric parsing still expose thirteen homeless production operations. These operations can be called without a type carrying decoded URI data, normalized Base32 key material, or checked protocol parameters.

## Outcome

TOTP setup-key normalization and otpauth URI parsing become explicit data-carrying and consuming owners. URI admission validates protocol parameters and setup-key material in the existing order, then exposes a private non-Clone checked state whose consuming completion builds the authenticator. Manual constructors continue through owned delegates with their distinct validation order.

## Scope

Exact five-file core/WASM closure:

- `nook-app/nook-platform/nook-core/src/secrets/authenticator.rs`
- `nook-app/nook-platform/nook-core/src/secrets/authenticator/uri.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/authenticator/setup_key.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/secret_api.rs`

Move thirteen production operations and two RFC fixture helpers onto bounded owners while retaining all 8 authenticator tests, 14 secret-api tests, and the existing backup-code child. Keep additions between 850 and 1,200, below a hard ceiling of 1,500; preserve every existing file ceiling.

## Acceptance criteria

- [x] Case-sensitive `otpauth://totp/` acceptance, surrounding trim, mandatory `?`, first-`=` splitting, ignored empty segments, duplicate-key last-value behavior, and path/query plus semantics remain exact.
- [x] Percent-decoding, invalid-UTF8 errors, query-issuer precedence, label inference, and manual/URI error ordering remain unchanged.
- [x] Checked URI admission validates protocol parameters and present setup-key material in the existing order; missing URI secret preserves its current precedence.
- [x] Setup-key owners preserve ASCII whitespace/hyphen removal, uppercase conversion, terminal padding removal, trailing-bit behavior, ten-byte minimum, and zeroizing intermediate buffers.
- [x] Manual form defaults, trim distinctions, override order, inferred website, backup-code handling, previews, RFC6238 generation, and schemas remain unchanged.
- [x] Checked state is private, non-Clone, consuming, and does not claim authorization, origin trust, replay protection, persistence, consent, or recovery.
- [x] All 8 authenticator tests and 14 secret-api tests remain; focused URI decoding/duplicate/error-order, manual-default, Base32, cleanup, privacy, and consuming controls are added.
- [x] Ownership enforcement covers the completed authenticator parent and new URI/setup-key children; backup-code enforcement remains intact.
- [x] Hosted PR checks, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No additional origin authorization, replay protection, persistence, consent, cryptographic, schema, browser ABI, recovery, fallback, or generic phase-framework changes. Preserve all protocol, parsing, error, normalization, zeroization, preview, and fixture behavior. Do not add inherent implementations to dependency-owned protocol parameter types.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `a876331a00129d97159af8d0975253f4ace7e9b3` found thirteen homeless production operations across an exact five-file closure with no live PR overlap. Estimated scope is 850–1,200 additions with a hard ceiling of 1,500.


## Completion

PR #1477 merged as `7b6dacc3cad39d479e5262a61aec41bc52d946ff` from delivery head `fefa7cb54b94ee5951fa61cf1ca49084d7a29912`, based on main `2140b076fc74241723a0473a1137208b40ff3e7e`. The exact five-file closure added 759 lines and removed 243. Hosted PR `34071940586`, repository policy `34071915812`, remote Loom `34072751018`, exact-head security review, and readiness passed; readiness deployment was `https://pr-1477.nokey-sh.pages.dev`. Linear UI demos `34072854870` passed on the delivery head.
