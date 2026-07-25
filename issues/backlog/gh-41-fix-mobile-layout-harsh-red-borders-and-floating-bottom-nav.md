---
title: "Fix mobile layout: harsh red borders and floating bottom nav"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T04:36:56Z
updated_at: 2026-06-25T05:24:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/41"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Fix mobile layout: harsh red borders and floating bottom nav

## Imported context

This record was imported from [Nook GitHub issue #41](https://github.com/meta-secret/nook/issues/41)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

On mobile (tested on iOS Safari / Brave, e.g. nokey.sh), two layout issues make the app feel broken:

1. **Red/harsh borders everywhere** — cards, inputs, header buttons, and the bottom nav all show prominent red-looking outlines. The UI looks noisy and unfinished.
2. **Bottom nav floats with page content** — the Vault / Onboard / Settings tab bar is rendered inside the main card and scrolls with the page. On short pages it sits mid-screen with a large empty gap below; on tall pages it scrolls out of view. It should be pinned to the bottom of the viewport like a native mobile app tab bar.

## Screenshots (mobile — iOS Brave, nokey.sh)

### Vault list (2 items) — red borders + bottom nav not pinned
![vault-list](https://github.com/user-attachments/assets/0cfa1c73-5503-429a-b706-61a16d94d745)

### Vault with expanded item — nav floats mid-screen when content is short
![vault-expanded](https://github.com/user-attachments/assets/77d7d4b6-e2ed-47e7-8ca0-b4c46593dfba)

### Onboard tab — same border and nav issues
![onboard](https://github.com/user-attachments/assets/63362c15-fe56-41ed-adae-07a10d89a76a)

### Settings tab — same border and nav issues
![settings](https://github.com/user-attachments/assets/e593032a-933e-4f86-9a4f-504edf2b9f35)

## Current behavior

### 1. Borders

Many elements use explicit `border border-border` classes (card shell, inputs, buttons, status bar, bottom nav). Additionally, `nook-web/src/app.css` applies a global rule:

```css
* {
  @apply border-border outline-ring/50;
}
```

On mobile this produces very visible, harsh border lines around nearly every interactive element and container. Screenshots show bright red outlines on:
- Header icon buttons (theme, GitHub, Help)
- The main authenticated card container
- Add item / search inputs
- Vault item cards
- Settings accordion sections
- Bottom navigation bar

### 2. Bottom navigation positioning

`VaultBottomNav` (`nook-web/src/lib/components/VaultBottomNav.svelte`) is rendered **inside** the authenticated card in `App.svelte`, after `VaultStatusBar`:

```
main
└── div (mx-auto py-8)
    └── div.card (border rounded-xl)
        ├── content (Vault / Settings / Onboard)
        ├── VaultStatusBar
        └── VaultBottomNav   ← scrolls with content
```

Because the nav is part of the card body, its vertical position depends on content height. Users expect it fixed to the screen bottom at all times.

## Proposed changes

### Borders (mobile polish)

- Reduce visual noise on small screens: soften or remove non-essential borders on mobile (card outer border, per-item borders, header button borders).
- Audit whether the global `* { border-border }` rule contributes to the problem on mobile browsers (possible `oklch` / `outline-ring` rendering issue on iOS).
- Prefer subtle separators (background contrast, `border-border/40`, dividers) over full box borders on mobile.
- Verify on real iOS Safari and Android Chrome — borders should be subtle gray, not bright red.

### Fixed bottom nav (mobile)

On viewports below `sm` / `md` breakpoint:

- Pin `VaultBottomNav` to the bottom of the viewport (`fixed` or `sticky` with `bottom: 0`, full width, safe-area padding for notched devices).
- Move nav **outside** the scrollable card content (sibling to content area, not child of the card).
- Add `padding-bottom` to the scrollable main content so the last item is not hidden behind the nav.
- Keep desktop layout unchanged (nav can stay inline at the bottom of the card, or use the same fixed pattern if it looks better).
- Preserve existing `data-testid` attributes (`vault-bottom-nav`, `vault-secrets-tab`, etc.) for e2e tests.

## Affected files

- `nook-web/src/App.svelte` — shell layout, nav placement
- `nook-web/src/lib/components/VaultBottomNav.svelte` — fixed positioning styles
- `nook-web/src/app.css` — global border/outline base styles (if contributing)
- Possibly: `SecretVault.svelte`, `VaultStatusBar.svelte`, header buttons in `App.svelte`

## Acceptance criteria

- [ ] On mobile, borders are subtle and consistent with the dark theme — no bright red/harsh outlines
- [ ] Bottom nav (Vault / Onboard / Settings) is always visible and pinned to the bottom of the screen on mobile
- [ ] Scrollable content has enough bottom padding so nothing is obscured by the nav
- [ ] Safe-area insets respected on iOS (home indicator)
- [ ] Desktop layout remains usable (no regressions)
- [ ] Existing e2e test selectors still work

## Historical comments

### cypherkitty — 2026-06-25T04:38:32Z

## Screenshots (mobile — iOS Brave, nokey.sh)

### Vault list (2 items) — red borders + bottom nav not pinned
![telegram-cloud-photo-size-2-5325744535373551315-y-39f8d29b-537b-4a90-9cbf-a8ca3c157650.png](https://github.com/user-attachments/assets/0cfa1c73-5503-429a-b706-61a16d94d745)

### Vault with expanded item — nav floats mid-screen when content is short
![telegram-cloud-photo-size-2-5325744535373551316-y-abf661d0-7588-45fc-98a2-e06b3f3d68ae.png](https://github.com/user-attachments/assets/77d7d4b6-e2ed-47e7-8ca0-b4c46593dfba)

### Onboard tab — same border and nav issues
![telegram-cloud-photo-size-2-5325744535373551317-y-744c0363-a088-4e64-b064-409f518129bb.png](https://github.com/user-attachments/assets/63362c15-fe56-41ed-adae-07a10d89a76a)

### Settings tab — same border and nav issues
![telegram-cloud-photo-size-2-5325744535373551318-y-fecf1cc2-7edc-4d81-b98f-2a65d4a39f33.png](https://github.com/user-attachments/assets/e593032a-933e-4f86-9a4f-504edf2b9f35)
