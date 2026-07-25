---
title: "Epic: Redesign Nook with a polished security-console visual system"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T04:23:53Z
updated_at: 2026-07-21T04:33:19Z
source_issues: ["https://github.com/meta-secret/nook/issues/295"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:security-console-ui"]
legacy_state_reason: "COMPLETED"
---

# Epic: Redesign Nook with a polished security-console visual system

## Imported context

This record was imported from [Nook GitHub issue #295](https://github.com/meta-secret/nook/issues/295)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Redesign the Nook web app around a polished dark **security-console** visual language inspired by the supplied reference: layered charcoal surfaces, subtle translucency and blur, restrained gradients, crisp typography, compact controls, and focused accent color.

This is an app-wide presentation feature, not a payment-card UI and not a domain-model rewrite. The visual language must be adapted to Nook's vault, secret, device, onboarding, and sync concepts while preserving the existing Rust/WASM-owned behavior.

## Visual Reference

<img width="1200" height="900" alt="Image" src="https://github.com/user-attachments/assets/6bd5a67d-0a5b-4cfa-a6a3-c74270d0e66f" />

Canonical visual reference for this feature. Reuse its dark layered surfaces, restrained gradients, typography, spacing, translucency, and overall polish. Adapt it to Nook; do not copy the payment-card content, low contrast, or decorative perspective angle.

## Product Direction

- Treat dark mode as the primary showcase theme while retaining a complete, usable light theme from the same semantic tokens.
- Use the reference's atmosphere, layering, hierarchy, and precision; do not reproduce its tilted portfolio framing in the production UI.
- Do not import payment-card branding or force vault records into a credit-card metaphor.
- Correct the reference's very low contrast: normal text, controls, focus states, errors, and disabled states must remain accessible.
- Prefer depth from tonal surfaces, restrained borders, gradients, blur, and shadow rather than decorative noise.
- Keep motion subtle, purposeful, and compatible with `prefers-reduced-motion`.
- Keep TypeScript/Svelte as the presentation layer. Vault rules, security policy, validation, crypto, filtering, and persistence remain in Rust/WASM.

## Current Status

- Nook already uses Svelte 5, Tailwind CSS 4, semantic color tokens, dark/light modes, Lucide icons, and reusable button/card/badge/skeleton primitives.
- The current UI is functional and responsive, but styling is applied screen-by-screen and does not yet form a distinctive, coherent product visual system.
- Closed issues #40 and #41 established compact widgets and mobile-shell polish; closed issue #283 delivered mode-aware setup UX. This feature builds on those outcomes rather than reopening their functional scope.

## Scope

- Semantic design tokens and reusable presentation primitives.
- Authenticated shell, navigation, vault status, and responsive layout.
- Vault list, search, item/detail cards, add/edit flows, and empty/loading/error states.
- Login, vault creation, device protection, onboarding, and provider setup surfaces.
- Settings, dialogs, help, logs, legal, and supporting surfaces.
- Accessibility, responsive, cross-theme, and visual-regression validation.

## Out of Scope

- Changing vault formats, cryptography, sync behavior, architecture-mode policy, or authentication policy.
- Reworking product flows solely to imitate the reference image.
- Browser-extension visual redesign; that can be planned separately after the web design system stabilizes.
- A permanently rotated or perspective-skewed application canvas.

## Sub-Issues

- [ ] #296 — Define the security-console design system and reusable UI primitives
- [ ] #297 — Redesign the responsive authenticated app shell and navigation
- [ ] #298 — Redesign the vault list, item cards, and secret editing experience
- [ ] #299 — Apply the visual system to login, vault creation, onboarding, and provider setup
- [ ] #300 — Apply the visual system to settings, device and sync states, and safety dialogs
- [ ] #301 — Restyle help, logs, legal, and supporting web-app surfaces
- [ ] #302 — Add accessibility, responsive, and visual regression coverage for the redesign

## Implementation Order

1. Establish tokens and reusable primitives.
2. Build the responsive shell on those primitives.
3. Redesign the vault, authentication/onboarding, and secondary surfaces in parallel once the foundation is stable.
4. Finish with accessibility, responsive, cross-browser, and visual-regression validation.

## Acceptance Criteria

- Every main web-app surface uses one coherent security-console design system rather than isolated one-off styling.
- Dark and light modes both remain complete and readable; the dark theme most closely reflects the supplied visual direction.
- Desktop and mobile layouts preserve all existing critical workflows without overlap, clipped controls, hidden content, or unsafe-area regressions.
- Keyboard navigation, visible focus, reduced motion, semantic states, and WCAG AA contrast are verified for critical screens.
- Existing localized copy remains in the shared translation system; new visible copy is not hard-coded into components.
- Domain and security decisions remain in Rust/WASM, with Svelte limited to layout, presentation state, bindings, and event calls.
- Critical Playwright flows continue to pass, and representative visual-regression coverage protects the new shell and key screens.
- `task check` and the relevant targeted web/e2e checks pass on the completed feature.

## Code Anchors

- `nook-app/nook-web/nook-web-app/src/app.css`
- `nook-app/nook-web/nook-web-app/src/App.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/ui/`
- `nook-app/nook-web/nook-web-app/src/lib/components/SecretVault.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/login/`
- `nook-app/nook-web/nook-web-app/src/lib/components/settings/`
- `nook-app/nook-web/nook-web-app/e2e/`



## Historical comments

### cypherkitty — 2026-07-21T04:33:19Z

Closing as completed: security-console UI redesign work for this slice is considered done on current main. Tracking via milestone 2 close-out.
