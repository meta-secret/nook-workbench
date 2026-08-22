---
title: Keep the vault security guide scrollable
feature: security-console-ui-redesign
issue: issues/backlog/gh-46-web-fix-inconsistent-shell-height-when-switching-vault-onboard-settings-.md
plan: plans/security-console-ui-redesign/20260822T083626Z-security-guide-scroll.md
nook_pr: https://github.com/meta-secret/nook/pull/1073
status: completed
started_at: 2026-08-22T08:36:26Z
finished_at: 2026-08-22T10:31:29Z
agent: codex
---

# Keep the vault security guide scrollable

## Outcome

[Nook PR 1073](https://github.com/meta-secret/nook/pull/1073) is
squash-merged as `83f845c0d0a3b535b4b0db46efe918ef34314bef`.

The expanded vault security guide now remains fully reachable in a short
desktop viewport. The fixed authenticated shell scrolls its content while the
bottom navigation stays visible.

## Progress

- Prevented the security guide panel from shrinking below its content height.
- Added a short-height Playwright regression that scrolls to the final guide
  action and verifies the bottom navigation remains visible.
- Added a headless UI demo for the same interaction.
- Documented desktop shell scrolling separately from mobile document scrolling.

## Implementation problems

- The guide was a shrinkable flex item inside the desktop scroll region.
  `overflow-hidden` clipped the panel after flex layout reduced its height, so
  the parent never acquired the missing scroll range.
- The first product-spec wording overstated the desktop scroll contract for
  mobile. Exact-head review caught the mismatch; the wording was corrected and
  the review thread was resolved before merge.
- One complete validation job reached its time limit during dependency-policy
  cache work. The unchanged failed job passed on retry, and the later final-head
  validation passed completely.

## Decisions

- Preserve the fixed desktop shell and its visible bottom navigation.
- Keep the panel's existing visual treatment and allow the established shell
  scroll owner to expose the full guide.
- Use document scrolling on the mobile min-height shell.

## Validation

- Focused hosted `web:e2e` passed:
  https://github.com/meta-secret/nook/actions/runs/32563360634
- Complete exact-head validation passed on `dacdc3607500e788e17faad7b86610f9ad65b5ad`:
  https://github.com/meta-secret/nook/actions/runs/32566544432
- `task pr:ready PR=1073` returned `ready: true` with successful deployment,
  a mergeable current base, and zero unresolved review threads.

## Remaining work

None.
