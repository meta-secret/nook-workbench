---
title: "Feature: Browser regression repairs from Main c597249"
status: in_progress
created_at: 2026-08-16T06:00:00Z
updated_at: 2026-08-16T06:00:00Z
---

# Browser regression repairs from Main c597249

Split the independently failing browser behaviors from Main run 31928499672
into separately reviewable repairs. The security-epoch recovery lifecycle and
the secret-row disclosure boundary do not share an implementation owner.

## Ordered repairs

1. [Restore post-recovery app and extension unlock](security-epoch-recovery-reload-unlock.md)
2. [Render login passwords only after explicit reveal](secret-detail-row-password-reveal.md)

Each repair starts from the current `origin/main`, carries its own exact
browser regression, receives a Main-equivalent browser validation, and lands
as an independent squash-merged pull request.
