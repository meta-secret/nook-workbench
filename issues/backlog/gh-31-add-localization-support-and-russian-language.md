---
title: "Add localization support and Russian language"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T00:06:43Z
updated_at: 2026-06-25T07:09:53Z
source_issues: ["https://github.com/meta-secret/nook/issues/31"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Add localization support and Russian language

## Imported context

This record was imported from [Nook GitHub issue #31](https://github.com/meta-secret/nook/issues/31)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add localization/i18n support to Nook and ship Russian as the first additional language.

## Problem

The app currently appears to be English-only. To make Nook usable for Russian-speaking users, we need a localization foundation plus Russian translations for the visible product UI.

## Desired behavior

- Introduce an i18n/localization layer for frontend strings.
- Add Russian (`ru`) translations.
- Provide a way to choose language, or automatically select based on browser locale with a sensible fallback to English.
- Ensure all major user-facing flows are covered, including onboarding, vault login/unlock, settings, device enrollment, password/enrollment QR flows, errors, empty states, and help text.

## Acceptance criteria

- App supports at least English and Russian.
- Russian users can use core flows without English-only UI strings in primary screens.
- Missing translations fall back safely to English.
- Tests or checks cover translation key availability and basic locale switching.
- Documentation notes how to add or update translations.

## Implementation notes

- Prefer a lightweight i18n setup that fits the existing Svelte/Vite app.
- Keep translation keys stable and organized by feature/page.
- Avoid hardcoding new user-facing strings directly in components after the i18n layer is introduced.
- Include formatting support for dates/times and plural-sensitive copy where needed.

## Related areas

- `nook-web/src`
- onboarding/device enrollment UI
- vault settings UI
- help content
- auth/provider setup UI

## Historical comments

No comments.
