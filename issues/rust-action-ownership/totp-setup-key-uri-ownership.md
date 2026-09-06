---
title: Type TOTP setup-key and otpauth URI admission
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-totp-uri-admission
created_at: 2026-09-06T23:53:00Z
updated_at: 2026-09-06T23:53:00Z
source_issues: []
related_prs: []
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

- [ ] Case-sensitive `otpauth://totp/` acceptance, surrounding trim, mandatory `?`, first-`=` splitting, ignored empty segments, duplicate-key last-value behavior, and path/query plus semantics remain exact.
- [ ] Percent-decoding, invalid-UTF8 errors, query-issuer precedence, label inference, and manual/URI error ordering remain unchanged.
- [ ] Checked URI admission validates protocol parameters and present setup-key material in the existing order; missing URI secret preserves its current precedence.
- [ ] Setup-key owners preserve ASCII whitespace/hyphen removal, uppercase conversion, terminal padding removal, trailing-bit behavior, ten-byte minimum, and zeroizing intermediate buffers.
- [ ] Manual form defaults, trim distinctions, override order, inferred website, backup-code handling, previews, RFC6238 generation, and schemas remain unchanged.
- [ ] Checked state is private, non-Clone, consuming, and does not claim authorization, origin trust, replay protection, persistence, consent, or recovery.
- [ ] All 8 authenticator tests and 14 secret-api tests remain; focused URI decoding/duplicate/error-order, manual-default, Base32, cleanup, privacy, and consuming controls are added.
- [ ] Ownership enforcement covers the completed authenticator parent and new URI/setup-key children; backup-code enforcement remains intact.
- [ ] Hosted PR checks, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No additional origin authorization, replay protection, persistence, consent, cryptographic, schema, browser ABI, recovery, fallback, or generic phase-framework changes. Preserve all protocol, parsing, error, normalization, zeroization, preview, and fixture behavior. Do not add inherent implementations to dependency-owned protocol parameter types.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `a876331a00129d97159af8d0975253f4ace7e9b3` found thirteen homeless production operations across an exact five-file closure with no live PR overlap. Estimated scope is 850–1,200 additions with a hard ceiling of 1,500.
