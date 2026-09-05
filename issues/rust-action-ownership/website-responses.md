---
title: Own website login and passkey response decoding
status: ready
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-website-responses
created_at: 2026-09-05T00:06:51.777Z
updated_at: 2026-09-05T00:06:51.777Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/authenticator-responses.md
---

# Own website login and passkey response decoding

## Context

The [project migration](README.md) next adopts website login options, save responses, and passkey account list decoding after the authenticator response slice.

## Outcome

Nine production operations belong to their existing response types, and all three core modules enforce meaningful function ownership.

## Scope

- Adopt website_login_options_response, website_login_save_offer_response, and website_passkey_account_list, core reexports, and two direct WASM adapters.
- Preserve all six WASM export signatures and their distinct failure mappings.
- Retain seven core tests and existing WASM and host-adapter coverage; add focused cases for empty lists, permitted blank presentation fields, required identifiers, save decisions, and serialization.
- Estimate 450–650 authored additions, with a ceiling of 800 across six files.

## Acceptance criteria

- [ ] Three complete core modules deny unowned functions and forbid invalid suppression.
- [ ] Every direct decoder consumer uses the domain API.
- [ ] Strict unknown-field rejection, contradictory success handling, numeric and string discriminator forms, and distinct field-validation rules remain unchanged.
- [ ] Hosted domain, WASM, web adapter, Dylint, review, and readiness checks pass before squash merge.

## Progress

- 2026-09-05T00:06:51.777Z: DEV-CORE completed read-only inventory at main 5e2f75239728718825aad08ccd738dcf14ef9df7. Implementation awaits the authenticator response merge because core exports and one WASM adapter overlap.

## Findings and decisions

- These are reported responses, not authorization capabilities; do not introduce artificial typestates or claim decoded offers authorize saving.
- Login options require a nonblank authorization generation and account vault/secret IDs, but allow blank presentation fields and empty accounts.
- Save offers require nonblank offer ID, vault ID, and vault name. Decisions remain exactly numeric 0 or 1.
- Passkey lists require all account fields to deserialize but only credential ID to be nonblank. One invalid entry rejects the entire list as Invalid, preserving malformed JSON and sparse array behavior.
- Preserve numeric login/passkey discriminators and string save-response discriminators. Do not unify their shapes.
- Raw IDs, wire success booleans, and flat WASM exports remain explicit later migration work. Exclude passkey proposals, picker protocols, authentication-workflow decoding, generated passwords, and origin policy.
- No TypeScript change, dependency, recovery behavior, or local product builds/tests.

## References

- [Companion core](https://github.com/meta-secret/nook/tree/main/nook-app/nook-platform/nook-companion-core/src)
- [Domain inventory](domain-adoption.md)
