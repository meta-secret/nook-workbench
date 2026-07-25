---
title: "Implement Rust-owned Nook Pilot workflow model and live HUD"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-20T01:31:52Z
updated_at: 2026-07-20T06:39:26Z
source_issues: ["https://github.com/meta-secret/nook/issues/506"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Implement Rust-owned Nook Pilot workflow model and live HUD

## Imported context

This record was imported from [Nook GitHub issue #506](https://github.com/meta-secret/nook/issues/506)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #461.

## Goal

Ship the first Nook Pilot production slice: a Rust-owned authentication workflow snapshot and a minimal live in-page HUD for detected authentication forms.

## Scope

- Model workflow kind, current step, progress, action policy, and safe presentation data in `nook-core`.
- Expose the real core model through a typed `nook-wasm` boundary.
- Classify bounded structural page observations through Rust/WASM rather than duplicating product policy in TypeScript.
- Replace the static gate copy with site context, progress, current step, next action, compact progress state, and manual takeover.
- Keep explicit user action before credential reveal/fill/submit.
- Add behavior-focused Rust tests, extension helper tests, and focused extension E2E coverage.
- Update the browser-extension product spec and public README.

## Acceptance Criteria

- A login form produces a Login workflow snapshot with stable step numbering and a Continue with Nook action.
- Signup and OTP structures are identified but yield to manual control until their focused flight plans land.
- Login lookup, locked, unavailable, no-match, account-choice, working, failure, and verification-wait states update the HUD without leaking secrets.
- Collapsed mode preserves meaningful progress text for assistive technology.
- Domain policy has Rust tests; TypeScript remains DOM/browser glue.
- `task extension:check:fast`, focused extension E2E, and `task check` pass.

## Security

The widget never receives provider credentials or vault search results beyond safe contextual account options. Plaintext credential payloads are minimum-use and cleared immediately after DOM fill.

## Historical comments

No comments.
