---
title: "Exercise live Google Drive shared-folder grant outside e2e stubs"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T18:27:17Z
updated_at: 2026-07-21T04:40:30Z
source_issues: ["https://github.com/meta-secret/nook/issues/289"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Exercise live Google Drive shared-folder grant outside e2e stubs

## Imported context

This record was imported from [Nook GitHub issue #289](https://github.com/meta-secret/nook/issues/289)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent
Follow-up after #275 / PR #288 (not a milestone blocker).

## Problem
Shared Drive grant (`drive.file` folder create + `permissions.create`) is implemented and covered by Drive stubs / architecture e2e, but live Google OAuth against real Drive is not fully exercised in CI or local automation.

## Acceptance
- [ ] Manual or opt-in live OAuth path creates a shareable folder, grants joiner email, and joiner syncs under that folder id
- [ ] Document ManualGrantRequired fallback when token lacks `drive.file`
- [ ] Keep personal vaults on `drive.appdata` unchanged

## Notes
SLIP-0039 mnemonic replacement for interim GF(256) Shamir remains #261.

## Historical comments

No comments.
