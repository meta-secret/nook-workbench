---
title: "PIN-initialized Pilot e2e against mock auth (plain + 2FA)"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T01:01:28Z
updated_at: 2026-07-21T01:46:16Z
source_issues: ["https://github.com/meta-secret/nook/issues/536"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# PIN-initialized Pilot e2e against mock auth (plain + 2FA)

## Imported context

This record was imported from [Nook GitHub issue #536](https://github.com/meta-secret/nook/issues/536)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Sub-issue of #534. Depends on #535.

## Goal

Add Playwright coverage that:

1. Forces passkey unavailability and sets up the extension device with a PIN
2. Creates/approves a Simple vault grant (existing pairing flow)
3. Saves a login (and authenticator for 2FA) for the mock origin
4. Completes Pilot **Continue with Nook** on mock plain login
5. Completes Pilot login → Fill 2FA on the chained mock 2FA scenario

## Acceptance criteria

- No `installMockPasskeyRuntime` on this path; PIN testids only
- Assertions use mock success evidence / submitted credentials / filled OTP — not real sites
- Spec is runnable via `task extension:test:e2e` (or a focused file flag if introduced)

## Historical comments

No comments.
