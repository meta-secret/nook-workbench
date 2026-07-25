---
title: "Auth-agent automatic passkey create and sign-in"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-17T06:28:18Z
updated_at: 2026-07-21T11:55:13Z
source_issues: ["https://github.com/meta-secret/nook/issues/465"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Auth-agent automatic passkey create and sign-in

## Imported context

This record was imported from [Nook GitHub issue #465](https://github.com/meta-secret/nook/issues/465)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of the auth-agent feature pack (#461).

## Problem

Even with a universal gate, users still perform endless login rituals. A future auth-agent should detect when a site supports passkeys or when Nook already has a confident credential match, then create a passkey or complete sign-in/sign-up with explicit policy and consent.

## Scope

- Design and implement auth-agent decisioning after the universal gate exists.
- Support passkey create/use when WebAuthn is available and vault policy allows.
- Support automatic sign-in/sign-up only with explicit user/policy consent and high confidence; never silent scraping.
- Keep crypto, match, and policy in Rust/WASM.

## Acceptance Criteria

- Documented threat model and consent rules for automatic actions.
- Agent can propose passkey create or credential sign-in from the gate.
- Automatic submit/sign-up is gated and tested; default remains explicit user action.
- Out of scope for the first auth-agent UX PR unless this issue is explicitly scheduled.

## Notes

- Deferred future slice by design; depends on universal gate + credential match/fill (#237).

## Historical comments

No comments.
