---
title: "Define the security-console design system and reusable UI primitives"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T04:25:25Z
updated_at: 2026-07-21T04:33:06Z
source_issues: ["https://github.com/meta-secret/nook/issues/296"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:security-console-ui"]
legacy_state_reason: "COMPLETED"
---

# Define the security-console design system and reusable UI primitives

## Imported context

This record was imported from [Nook GitHub issue #296](https://github.com/meta-secret/nook/issues/296)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #295.

## Visual Reference

<img width="1200" height="900" alt="Dark layered security-console UI visual reference" src="https://github.com/user-attachments/assets/6bd5a67d-0a5b-4cfa-a6a3-c74270d0e66f" />

Use this image as the visual reference for atmosphere, layering, typography, spacing, translucency, restrained accent color, and overall polish. Adapt it to Nook rather than copying payment-card content, low contrast, or the decorative perspective angle. The canonical feature brief is #295.

## Problem

Nook has semantic theme variables and several reusable UI components, but the app-wide visual language is still assembled from one-off Tailwind combinations. An app-wide redesign needs a stable foundation before individual screens are restyled.

## Scope

- Document the security-console visual direction and implementation rules in the most appropriate `.cortex` design/product document.
- Extend `src/app.css` with semantic tokens for canvas, layered surfaces, glass/overlay treatment, elevation, borders, focus, status colors, and accent usage in both dark and light themes.
- Define typography, spacing, radius, shadow, blur, and motion conventions.
- Update or add reusable Svelte presentation primitives for buttons, cards/surfaces, fields, badges/status, skeleton/loading, overlays, and other repeated patterns discovered during the audit.
- Define responsive and reduced-motion behavior at the primitive level.
- Keep components presentation-only and compatible with the existing Svelte 5 conventions.

## Out of Scope

- Restyling every feature screen in this issue.
- Changing vault/domain behavior or adding a new JavaScript-owned domain model.
- Adding a large component framework or Storybook unless separately justified.

## Acceptance Criteria

- Dark and light palettes are expressed through semantic tokens rather than screen-specific literal colors.
- The dark palette captures layered charcoal surfaces, subtle translucency, restrained gradients, and a focused accent without sacrificing readable contrast.
- Repeated interactive states—default, hover, active, focus, disabled, loading, success, warning, and destructive—have consistent reusable treatments.
- Blur/transparency has an opaque fallback and never carries essential meaning by itself.
- Motion utilities respect `prefers-reduced-motion`.
- Primitive APIs remain typed, composable, keyboard accessible, and usable at mobile and desktop breakpoints.
- A small representative showcase or documented examples make the approved visual vocabulary verifiable before downstream screens migrate.
- Targeted component tests and `task web:check` pass.

## Code Anchors

- `nook-app/nook-web/nook-web-app/src/app.css`
- `nook-app/nook-web/nook-web-app/src/lib/components/ui/`
- `nook-app/nook-web/nook-web-app/package.json`
- `.cortex/rules.md`



## Historical comments

### cypherkitty — 2026-07-21T04:33:06Z

Closing as completed: security-console UI redesign work for this slice is considered done on current main. Tracking via milestone 2 close-out.
