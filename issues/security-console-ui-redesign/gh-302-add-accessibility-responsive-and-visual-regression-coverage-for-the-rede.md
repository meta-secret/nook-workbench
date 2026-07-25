---
title: "Add accessibility, responsive, and visual regression coverage for the redesign"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T04:25:38Z
updated_at: 2026-07-21T04:33:17Z
source_issues: ["https://github.com/meta-secret/nook/issues/302"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:security-console-ui"]
legacy_state_reason: "COMPLETED"
---

# Add accessibility, responsive, and visual regression coverage for the redesign

## Imported context

This record was imported from [Nook GitHub issue #302](https://github.com/meta-secret/nook/issues/302)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #295.

## Visual Reference

<img width="1200" height="900" alt="Dark layered security-console UI visual reference" src="https://github.com/user-attachments/assets/6bd5a67d-0a5b-4cfa-a6a3-c74270d0e66f" />

Use this image as the visual reference for atmosphere, layering, typography, spacing, translucency, restrained accent color, and overall polish. Adapt it to Nook rather than copying payment-card content, low contrast, or the decorative perspective angle. The canonical feature brief is #295.

## Dependency

Final integration gate for #296, #297, #298, #299, #300, and #301. Targeted checks still belong in each implementation issue; this issue owns cross-surface validation and regression protection.

## Problem

A visually polished redesign can still regress contrast, focus, motion, scroll, safe areas, localization, or edge states. The milestone needs an explicit validation slice instead of treating visual review as an informal final pass.

## Scope

- Define a representative screen/state matrix across login, vault, add/edit, onboarding, settings, dialogs, help, logs, and legal pages.
- Add deterministic Playwright screenshot coverage for the stable representative matrix, using controlled data and fonts.
- Validate dark/light themes and desktop/mobile breakpoints, including 320px width and iOS-style safe areas.
- Audit keyboard navigation, visible focus, focus trapping/restoration, labels/names, touch targets, contrast, color independence, zoom, and reduced motion.
- Exercise long English/Russian strings, empty/loading/error/disabled/destructive states, and long secret metadata.
- Review major browser rendering differences for blur, OKLCH colors, sticky/fixed positioning, and scroll ownership.
- Run the repo's required final validation gates and document any intentionally platform-specific visual differences.

## Out of Scope

- Replacing domain/unit tests with screenshots.
- Brittle screenshots of dynamic timestamps, random values, or live provider content.
- Hiding real accessibility defects by loosening snapshot thresholds.

## Acceptance Criteria

- A documented matrix identifies which representative states are protected and which tests own them.
- Screenshot baselines are deterministic, focused, and small enough to review meaningfully.
- Critical screens pass WCAG AA contrast for normal text and controls, keyboard-only operation, visible focus, 200% zoom/reflow, and reduced-motion behavior.
- No critical content overlaps, clips, or becomes unreachable at supported mobile and desktop sizes.
- English and Russian layouts are checked for representative long-copy states.
- Existing functional Playwright coverage remains green; visual assertions supplement rather than replace behavioral assertions.
- `task check` and relevant targeted web/e2e suites pass on the completed milestone.

## Code Anchors

- `nook-app/nook-web/nook-web-app/e2e/`
- `nook-app/nook-web/nook-web-app/playwright.config.ts`
- `nook-app/nook-web/nook-web-app/src/app.css`
- `.cortex/workflows/quality.md`




## Historical comments

### cypherkitty — 2026-07-21T04:33:17Z

Closing as completed: security-console UI redesign work for this slice is considered done on current main. Tracking via milestone 2 close-out.
