---
title: "Replace full-width type picker buttons with compact widget cards"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T04:31:42Z
updated_at: 2026-06-25T05:54:51Z
source_issues: ["https://github.com/meta-secret/nook/issues/40"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Replace full-width type picker buttons with compact widget cards

## Imported context

This record was imported from [Nook GitHub issue #40](https://github.com/meta-secret/nook/issues/40)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

The "What are you saving?" step in the add-secret flow currently uses four full-width list-style buttons (icon + label + subtitle + chevron). They feel bulky and take up a lot of vertical space for a simple type-selection step.

Replace them with a **compact widget/card grid** so the picker is scannable at a glance and uses space more efficiently.

## Current behavior

In `nook-web/src/lib/components/AddSecretForm.svelte`, the item type picker (`data-testid="item-type-picker"`) renders four stacked full-width buttons:

- Login — Website account
- API key — Token or auth key
- Seed phrase — BIP39 recovery
- Secure note — Private text (Markdown)

Each button spans the full container width with a horizontal layout (icon, text, chevron).

## Proposed change

Use a **2×2 grid of widget cards** (or similar compact tile layout) instead of full-width rows:

- Icon prominent at the top or center of each card
- Type name as the primary label
- Short subtitle below (optional, can be smaller or omitted on narrow viewports)
- No chevron — the whole card is the tap/click target
- Responsive: 2 columns on wider viewports, 1–2 columns on mobile as appropriate

This should feel lighter and faster to scan, similar to app-launcher or category-picker patterns rather than a settings list.

## Scope

- **Component:** `nook-web/src/lib/components/AddSecretForm.svelte` (type picker block only)
- **Tests:** Update or verify `nook-web/e2e/local-vault.spec.ts` — existing `data-testid` selectors (`item-type-login`, etc.) should be preserved so e2e tests keep working
- **Accessibility:** Cards remain keyboard-focusable buttons with clear labels

## Acceptance criteria

- [ ] Type picker uses a compact widget/card grid instead of full-width list buttons
- [ ] All four secret types remain selectable with the same behavior
- [ ] Existing `data-testid` attributes are preserved
- [ ] Layout works on mobile and desktop
- [ ] Visual style stays consistent with Nook's dark theme and existing border/hover patterns

## Historical comments

No comments.
