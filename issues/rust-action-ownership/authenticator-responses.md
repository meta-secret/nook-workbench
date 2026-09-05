---
title: Own authenticator response decoding operations
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-authenticator-responses
created_at: 2026-09-04T22:29:00Z
updated_at: 2026-09-05T00:14:41.314Z
source_issues: []
related_prs: [1352]
depends_on:
  - issues/rust-action-ownership/foundation.md
---

# Own authenticator response decoding operations

## Context

The [project migration](README.md) next adopts the companion authenticator response family and its direct WASM delegates.

## Outcome

Preview, options, enrollment, backup attachment, code, and picker-open response decoding belong to their existing domain types. Complete core module scopes enforce function ownership.

## Scope

- Move nine production operations and core fixture helpers onto meaningful existing owners across six response modules.
- Remove obsolete decoder reexports and update seven direct WASM delegates and the bridge fixture helper.
- Preserve all wire shapes, error precedence, response-kind serialization, secret ownership, and existing validation rules.
- Retain 16 core tests, the code-expiry WASM bridge test, and existing runtime-message-adapter coverage.

## Acceptance criteria

- [ ] Six core modules have complete ownership enforcement and no unowned helpers.
- [ ] All direct consumers use the associated APIs; existing WASM signatures remain unchanged.
- [ ] Decoder branch behavior, errors, zeroization, and secret ownership are preserved.
- [ ] Hosted core, WASM, host adapter tests, Dylint, review, and readiness pass before squash merge.

## Progress

- 2026-09-05T00:14:41.314Z: PR1352 accepted review finding corrected in180736c50: replace unrelated fixture helper with immediate conversion closures. SECURITY and automated review passed; hosted replacement run33931778676 is in progress. New main b5ad17b99 requires integration before readiness.

- 2026-09-04: Read-only inventory completed on main a6b9aed0e. Nine files, estimated 500–750 additions with a 1200-addition ceiling. No implementation changes yet.

## Findings and decisions

- These decoders interpret reported outcomes; they do not establish enrollment capabilities. No artificial typestate is introduced.
- Code accepts six through eight ASCII digits, including seven. Code expiry has positive integral safe-integer validation; picker expiry only requires finiteness. Preserve this distinction.
- Preserve existing issuer and identifier validation differences, unknown-field rejection, contradictory success handling, and error text.
- Wire success booleans, raw picker expiry, and seven flat WASM exports remain explicit later migration scope, without permanent exemptions.

## References

- [Companion responses](https://github.com/meta-secret/nook/tree/main/nook-app/nook-platform/nook-companion-core/src)
- [Domain inventory](domain-adoption.md)

- 2026-09-04: Published PR 1352 at cdffdb3ccb00f945d5d2d50d7b4ce2e3a63a5a05, 382 authored additions across nine files. All 16 core tests and one WASM test retained; static decoder, serialization, and public WASM comparisons passed. Hosted validation and SECURITY review are in progress.
