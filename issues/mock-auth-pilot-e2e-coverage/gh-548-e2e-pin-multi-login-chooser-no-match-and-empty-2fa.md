---
title: "e2e: PIN multi-login chooser, no-match, and empty 2FA"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T02:47:46Z
updated_at: 2026-07-21T03:32:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/548"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent","feature:mock-auth-pilot-e2e"]
legacy_state_reason: "COMPLETED"
---

# e2e: PIN multi-login chooser, no-match, and empty 2FA

## Imported context

This record was imported from [Nook GitHub issue #548](https://github.com/meta-secret/nook/issues/548)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

PIN Pilot e2e for multi-login chooser privacy, no matching login, and empty authenticator vault states against mock-auth.

## Parent

Part of #547.

## Acceptance Criteria

- [ ] With two saved logins for the mock origin, Continue shows `Saved login N` ordinals and never paints usernames; choosing one reaches `/plain/success`.
- [ ] With no saved login, Continue surfaces the no-match copy and does not submit credentials.
- [ ] On `/otp` with no authenticator saved, Fill 2FA shows the empty-state copy and `Add 2FA in vault`.
- [ ] Specs use `launchPairedPinExtension` (PIN path).

## Related

- #547


## Historical comments

No comments.
