---
title: "Extract mock auth HTTP service with plain login and login→2FA"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T01:01:26Z
updated_at: 2026-07-21T01:46:15Z
source_issues: ["https://github.com/meta-secret/nook/issues/535"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Extract mock auth HTTP service with plain login and login→2FA

## Imported context

This record was imported from [Nook GitHub issue #535](https://github.com/meta-secret/nook/issues/535)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Sub-issue of #534 (also advances #509).

## Goal

Add a reusable local mock auth HTTP server for extension e2e with at least:

- **Plain login** — username/password form, credential check, success page
- **Login → 2FA** — valid credentials navigate to an OTP step, then success
- Seed quirk pages already used by smoke (hidden header password, SPA step-up, standalone OTP) so detection tests share one server

## Acceptance criteria

- Server lives under `nook-web-extension/e2e/mock-auth/` (or equivalent) and can be started from Playwright helpers
- Fixed test accounts and a fixed TOTP seed are documented in-code for fixtures only
- Smoke `startLoginServer` either delegates to this service or is replaced without losing current detection coverage

## Historical comments

No comments.
