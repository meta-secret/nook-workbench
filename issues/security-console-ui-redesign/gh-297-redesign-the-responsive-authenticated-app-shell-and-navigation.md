---
title: "Redesign the responsive authenticated app shell and navigation"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T04:25:27Z
updated_at: 2026-07-21T04:33:08Z
source_issues: ["https://github.com/meta-secret/nook/issues/297"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:security-console-ui"]
legacy_state_reason: "COMPLETED"
---

# Redesign the responsive authenticated app shell and navigation

## Imported context

This record was imported from [Nook GitHub issue #297](https://github.com/meta-secret/nook/issues/297)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #295.

## Visual Reference

<img width="1200" height="900" alt="Dark layered security-console UI visual reference" src="https://github.com/user-attachments/assets/6bd5a67d-0a5b-4cfa-a6a3-c74270d0e66f" />

Use this image as the visual reference for atmosphere, layering, typography, spacing, translucency, restrained accent color, and overall polish. Adapt it to Nook rather than copying payment-card content, low contrast, or the decorative perspective angle. The canonical feature brief is #295.

## Dependency

Depends on #296.

## Problem

The header, shell, vault switcher, content container, status bar, and bottom navigation establish the product's visual identity on every authenticated screen. They need to become one responsive security-console frame before inner screens can look coherent.

## Scope

- Redesign the global background/canvas, header, authenticated shell, content regions, vault switcher, status strip, bottom navigation, and footer.
- Use layered surfaces and restrained backdrop effects to create depth while keeping content readable.
- Define desktop and narrow-screen information hierarchy rather than shrinking the desktop composition mechanically.
- Preserve correct scroll ownership, sticky/fixed behavior, mobile safe-area padding, and keyboard focus order.
- Preserve theme, language, lock, GitHub, help, and navigation behavior.
- Cover authenticated loading, syncing, degraded/offline, blocked-edit, and normal states without layout jumps.

## Out of Scope

- Redesigning the contents of vault, onboarding, or settings panels.
- Changing navigation destinations or vault/session behavior.
- Rendering the production app at a decorative perspective angle.

## Acceptance Criteria

- The authenticated app reads as one coherent layered console at desktop widths and a native-feeling single-column app on mobile.
- Header, shell, status, and navigation remain usable at 320px width and with long localized labels.
- No content is obscured by sticky/fixed navigation or mobile safe-area insets.
- Scroll behavior remains stable for short, tall, and editor-style pages.
- Sync, warning, locked, and disabled states remain clearly distinguishable without relying on color alone.
- Existing critical selectors and behaviors are preserved or tests are updated intentionally.
- Representative desktop and mobile Playwright screenshots are reviewed visually.
- `shell-height.spec.ts` and relevant navigation/session smoke tests pass.

## Code Anchors

- `nook-app/nook-web/nook-web-app/src/App.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/VaultBottomNav.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/VaultStatusBar.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/VaultSwitcher.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/SiteFooter.svelte`
- `nook-app/nook-web/nook-web-app/e2e/shell-height.spec.ts`




## Historical comments

### cypherkitty — 2026-07-21T04:33:07Z

Closing as completed: security-console UI redesign work for this slice is considered done on current main. Tracking via milestone 2 close-out.
