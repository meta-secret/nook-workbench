---
title: "Apply the visual system to settings, device and sync states, and safety dialogs"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T04:25:34Z
updated_at: 2026-07-21T04:33:14Z
source_issues: ["https://github.com/meta-secret/nook/issues/300"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:security-console-ui"]
legacy_state_reason: "COMPLETED"
---

# Apply the visual system to settings, device and sync states, and safety dialogs

## Imported context

This record was imported from [Nook GitHub issue #300](https://github.com/meta-secret/nook/issues/300)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #295.

## Visual Reference

<img width="1200" height="900" alt="Dark layered security-console UI visual reference" src="https://github.com/user-attachments/assets/6bd5a67d-0a5b-4cfa-a6a3-c74270d0e66f" />

Use this image as the visual reference for atmosphere, layering, typography, spacing, translucency, restrained accent color, and overall polish. Adapt it to Nook rather than copying payment-card content, low contrast, or the decorative perspective angle. The canonical feature brief is #295.

## Dependency

Depends on #296; may proceed in parallel with the vault and onboarding slices.

## Problem

Settings and operational dialogs expose device identity, provider credentials, vault access, sync conflicts, destructive actions, and recovery-relevant state. Visual polish must strengthen—not soften—the hierarchy between routine configuration and security-critical decisions.

## Scope

- Restyle settings navigation/accordions, vault administration, device management, password/protection controls, storage/provider management, warnings, and pending joins.
- Restyle sync conflict, join enrollment, multiple-vault, extension-consent, and related modal/dialog surfaces.
- Define consistent read-only, editable, loading, connected, disconnected, warning, error, destructive, and confirmation treatments.
- Preserve clear provenance and consequences for provider, device, sync, and vault actions.
- Preserve current focus trapping/restoration, keyboard operation, localization, and typed state boundaries.

## Out of Scope

- Changing device, sync, provider, conflict, enrollment, or vault-administration behavior.
- Making destructive actions visually equivalent to routine actions.
- Hiding technical status required to diagnose or safely resolve a problem.

## Acceptance Criteria

- Routine settings, warnings, errors, and destructive actions have distinct, consistent hierarchy.
- Dialogs remain readable over layered/blurred backgrounds and restore focus correctly when closed.
- Device identifiers, provider status, conflict choices, and action consequences remain legible with long content.
- Mobile accordions and dialogs do not overflow, clip actions, or place content behind the bottom navigation.
- All new copy is localized; existing `data-testid` hooks are preserved or tests are intentionally updated.
- Relevant device, provider, conflict, and onboarding smoke tests pass with desktop/mobile visual review.

## Code Anchors

- `nook-app/nook-web/nook-web-app/src/lib/components/VaultAdmin.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/AuthStorage.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/settings/`
- `nook-app/nook-web/nook-web-app/src/lib/components/VaultSyncConflictDialog.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/JoinEnrollmentDialog.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/LocalFolderMultipleVaultsDialog.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/ExtensionConnectConsent.svelte`




## Historical comments

### cypherkitty — 2026-07-21T04:33:13Z

Closing as completed: security-console UI redesign work for this slice is considered done on current main. Tracking via milestone 2 close-out.
