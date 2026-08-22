---
title: "Web: fix inconsistent shell height when switching Vault / Onboard / Settings tabs"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T06:14:15Z
updated_at: 2026-08-22T10:31:29Z
source_issues: ["https://github.com/meta-secret/nook/issues/46"]
related_prs: ["https://github.com/meta-secret/nook/pull/1073"]
depends_on: []
legacy_labels: ["bug"]
legacy_state_reason: "COMPLETED"
---

# Web: fix inconsistent shell height when switching Vault / Onboard / Settings tabs

## Imported context

This record was imported from [Nook GitHub issue #46](https://github.com/meta-secret/nook/issues/46)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Problem

On the authenticated web shell (`nook-web`), the main card container changes height when switching between the bottom-nav tabs (**Vault**, **Onboard**, **Settings**). The layout visibly jumps on each tab change instead of staying a stable size.

## Expected

The authenticated shell (content area + status bar + bottom nav) should keep a **consistent height** across all three tabs. Tab switches should not resize the outer card; only the inner content should scroll if needed.

## Screenshots

**Vault tab** (shorter — lots of empty space below the card):

![image-cc969048-f61b-475b-bafc-16459f98795c.png](https://github.com/user-attachments/assets/8d7d4bad-38e7-4db1-b295-71b5e52b5557)

**Onboard tab** (taller):

![image-93d84e92-add7-41a4-857f-b8c6ba88d005.png](https://github.com/user-attachments/assets/059e3612-2c8d-493e-80e6-0cb69356f83d)

**Settings tab** (tallest — Storage providers expanded):

![image-b9ff8ff6-c56a-4730-b2ea-85a0d383fa44.png](https://github.com/user-attachments/assets/2a544f92-1d11-4e27-8506-885e05af1260)

## Likely area

The authenticated shell is rendered in `nook-web/src/App.svelte` inside the `rounded-xl bg-card` wrapper. Each tab mounts a different component (`SecretVault`, `OnboardDevice`, `VaultSettingsAccordion`) with no shared min-height on the content region, so the card grows/shrinks to fit each view.

## Suggested fix

- Give the main content area a fixed or min height (e.g. flex column with `flex-1` + `min-h-*` or `h-*` on the shell) so Vault / Onboard / Settings share the same outer dimensions.
- Let overflowing content scroll inside the content region rather than changing the card height.

## Scope

- `nook-web` only (authenticated shell with bottom nav)
- Desktop and mobile layouts

## Historical comments

No comments.

## Follow-up completion

[Nook PR 1073](https://github.com/meta-secret/nook/pull/1073) fixed the
remaining authenticated-shell overflow defect. Expanded vault security guidance
now keeps its natural height inside the desktop scroll owner instead of shrinking
and clipping its lower recommendations. A short-height Playwright regression and
headless UI demo prove that the final action can be reached while bottom
navigation remains visible.
