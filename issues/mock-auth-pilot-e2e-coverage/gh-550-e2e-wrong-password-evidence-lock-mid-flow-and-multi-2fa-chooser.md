---
title: "e2e: wrong-password evidence, lock mid-flow, and multi-2FA chooser"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T02:47:50Z
updated_at: 2026-07-21T03:32:10Z
source_issues: ["https://github.com/meta-secret/nook/issues/550"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent","feature:mock-auth-pilot-e2e"]
legacy_state_reason: "COMPLETED"
---

# e2e: wrong-password evidence, lock mid-flow, and multi-2FA chooser

## Imported context

This record was imported from [Nook GitHub issue #550](https://github.com/meta-secret/nook/issues/550)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Evidence and control-plane e2e: wrong password must not look like success; locked session must prompt unlock then resume; multiple authenticators show an ordinal chooser.

## Parent

Part of #547.

## Acceptance Criteria

- [ ] Vault login with wrong password against `/plain/login` shows the mock error; Pilot does not reach `mock-auth-success`.
- [ ] Extension session can be locked via a first-class message; Continue while locked shows unlock copy; PIN unlock in the popup then Continue completes login.
- [ ] Two saved authenticators produce `Saved 2FA 1` / `Saved 2FA 2` chooser; selecting one fills a 6-digit code.

## Related

- #547, #509


## Historical comments

No comments.
