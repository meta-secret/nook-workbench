---
title: Own website login and passkey response decoding
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-website-responses
created_at: 2026-09-05T00:06:51.777Z
updated_at: 2026-09-05T03:50:20.282Z
source_issues: []
related_prs: [1361]
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

- [x] Three complete core modules deny unowned functions and forbid invalid suppression.
- [x] Every direct decoder consumer uses the domain API.
- [x] Strict unknown-field rejection, contradictory success handling, numeric and string discriminator forms, and distinct field-validation rules remain unchanged.
- [x] Hosted domain, WASM, web adapter, Dylint, review, and readiness checks pass before squash merge.

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

## Implementation progress

- 2026-09-05T02:32:25.451Z: Authenticator response PR1352 merged. Development core started the published six-file website-response ownership scope from current main, with an 800-addition budget. No hosted result or completion is claimed.

- 2026-09-05T02:37:35.086Z: PR1361 published at `6970bf5b31eb1c3b12abdb49a89cac2424fc5e0b`, 319 authored additions across six files. Seven existing tests and three added boundary tests; source SECURITY and formatting passed. [Hosted validation](https://github.com/meta-secret/nook/actions/runs/33939534783) is pending.

## Completed delivery

PR1361 squash-merged at 65901c8c816cf30466793980ba5e96219083eaa1 after full hosted run33942183190, source SECURITY and exact-head readiness with no unresolved findings. Three core modules enforce ownership; all existing tests and public WASM behavior are preserved. [Worklog](../../worklogs/rust-action-ownership/2026-09-05T03-47-45Z-pr-1361.md).
