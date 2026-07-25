---
title: "e2e: Pilot fill-to-success on SPA, hidden-header, and combined forms"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T02:47:48Z
updated_at: 2026-07-21T03:32:10Z
source_issues: ["https://github.com/meta-secret/nook/issues/549"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent","feature:mock-auth-pilot-e2e"]
legacy_state_reason: "COMPLETED"
---

# e2e: Pilot fill-to-success on SPA, hidden-header, and combined forms

## Imported context

This record was imported from [Nook GitHub issue #549](https://github.com/meta-secret/nook/issues/549)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Drive Pilot fill-to-success on mock-auth quirk pages that today only assert detection HUD.

## Parent

Part of #547.

## Acceptance Criteria

- [ ] `/spa` (after password step is revealed), `/login-with-hidden-header`, and `/combined` are credential-aware and can reach `/plain/success`.
- [ ] PIN Pilot fills the login form (not signup on `/combined`) and asserts `mock-auth-success`.
- [ ] Existing smoke detection asserts on these routes remain green.

## Related

- #547


## Historical comments

No comments.
