---
title: "Apply the visual system to login, vault creation, onboarding, and provider setup"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T04:25:32Z
updated_at: 2026-07-21T04:33:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/299"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:security-console-ui"]
legacy_state_reason: "COMPLETED"
---

# Apply the visual system to login, vault creation, onboarding, and provider setup

## Imported context

This record was imported from [Nook GitHub issue #299](https://github.com/meta-secret/nook/issues/299)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #295.

## Visual Reference

<img width="1200" height="900" alt="Dark layered security-console UI visual reference" src="https://github.com/user-attachments/assets/6bd5a67d-0a5b-4cfa-a6a3-c74270d0e66f" />

Use this image as the visual reference for atmosphere, layering, typography, spacing, translucency, restrained accent color, and overall polish. Adapt it to Nook rather than copying payment-card content, low contrast, or the decorative perspective angle. The canonical feature brief is #295.

## Dependency

Depends on #296. Preserve the completed mode-aware UX from #283.

## Problem

Login, device protection, vault creation, provider setup, enrollment, and recovery contain Nook's most consequential choices. They need the same polished visual identity as the authenticated vault while keeping security tradeoffs and grouped architecture modes explicit.

## Scope

- Restyle login, device-protection setup/unlock, vault picker/name/create flows, authorization, enrollment, recovery, and provider management.
- Restyle provider picker and GitHub, Google Drive/iCloud, local-folder, and generic OAuth setup surfaces that exist in the current app.
- Establish consistent wizard progress, selected/available/disabled options, loading, error, warning, recovery, and completion states.
- Preserve the five-group mode-aware UX delivered by #283 and keep impossible combinations visibly blocked.
- Ensure high-impact warnings and authorization prompts remain direct, high contrast, and understandable.
- Keep all visible copy in the shared localization catalog.

## Out of Scope

- Changing device protection, OAuth, provider, recovery, onboarding, or architecture-mode policy.
- Rewriting Rust/WASM-owned compatibility or security decisions in Svelte.
- Removing explanatory content solely to make screens look sparse.

## Acceptance Criteria

- First launch through authenticated vault presents one continuous visual journey rather than disconnected setup screens.
- Selected, disabled, unavailable, warning, error, and successful states are clear without color-only communication.
- Standard/anti-hacker, simple/nexus, personal/shared, onboarding, and provider capability concepts remain correctly grouped and understandable.
- Security warnings and recovery consequences meet readable contrast and are not hidden behind decorative effects.
- All flows work at narrow mobile widths, with long localized text and onscreen keyboards.
- Existing domain decisions remain Rust/WASM-owned and current functional test coverage remains meaningful.
- Representative simple/local and provider-backed Playwright flows pass in dark and light themes, with desktop/mobile visual review.

## Code Anchors

- `nook-app/nook-web/nook-web-app/src/lib/components/LoginGate.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/DeviceProtectionGate.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/login/`
- `nook-app/nook-web/nook-web-app/src/lib/components/ProviderPicker.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/SetupWizardStep.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/OnboardDevice.svelte`
- `nook-app/nook-web/nook-web-app/e2e/login-unlock-flow.spec.ts`
- `nook-app/nook-web/nook-web-app/e2e/onboard-providers.spec.ts`




## Historical comments

### cypherkitty — 2026-07-21T04:33:11Z

Closing as completed: security-console UI redesign work for this slice is considered done on current main. Tracking via milestone 2 close-out.
