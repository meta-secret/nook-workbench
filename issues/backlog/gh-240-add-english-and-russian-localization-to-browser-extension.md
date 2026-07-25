---
title: "Add English and Russian localization to browser extension"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T02:28:03Z
updated_at: 2026-07-08T03:23:48Z
source_issues: ["https://github.com/meta-secret/nook/issues/240"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Add English and Russian localization to browser extension

## Imported context

This record was imported from [Nook GitHub issue #240](https://github.com/meta-secret/nook/issues/240)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #234.

## Problem

`nook-web-extension` currently shows English-only UI strings in the popup, including the first-run/setup copy shown in the attached screenshot. The web app already supports English and Russian localization; the extension should have the same baseline language support so the browser-extension product surface does not regress to English-only UX.

## Scope

- Add localization support to `nook-web-extension` for English (`en`) and Russian (`ru`).
- Replace hardcoded popup/onboarding strings with translation keys.
- Cover current extension strings such as:
  - `Nook Extension - this browser profile`
  - `Extension state`
  - `not set up`
  - `Connect Nook`
  - passkey-protected extension device explanation copy
  - `Set up extension`
  - scan/password-field status strings that still exist in the extension surface
- Reuse the same language model as `nook-web` where practical: `nook_locale`, browser locale fallback, and the canonical `nook-core/locales/en.json` / `ru.json` catalogs exposed through WASM.
- Decide whether extension-only strings live in the shared core catalogs or an extension-local catalog, but keep key naming and fallback behavior consistent with `nook-web`.
- Set `document.documentElement.lang` in extension pages.
- Ensure extension popup, future pairing screens, and future in-page prompts can all use the same translation helper.

## Acceptance Criteria

- The extension popup can render in English and Russian.
- The extension chooses locale consistently with `nook-web`: saved `nook_locale` when available, otherwise browser locale fallback.
- All user-visible extension popup strings are translated or intentionally documented as product names.
- Russian copy fits the popup layout without clipped text or overlapping controls.
- Tests cover translation lookup/fallback and at least one popup render in `en` and `ru`.
- `task extension:check` passes.
- If extension translations are stored outside `nook-core/locales`, the issue/PR documents why the extension needs a separate catalog and how drift from `nook-web` is prevented.

## Notes

- Current hardcoded UI is visible in `nook-app/nook-web/nook-web-extension/src/popup/PopupApp.svelte`.
- Web app locale flow is anchored by `nook-app/nook-web/nook-web-app/src/lib/vault/locale.ts`, `nook-app/nook-web/nook-web-app/src/lib/vault.svelte.ts`, and `nook-app/nook-core/locales/{en,ru}.json`.
- Related product issues: #235, #236, #237.


## Historical comments

No comments.
