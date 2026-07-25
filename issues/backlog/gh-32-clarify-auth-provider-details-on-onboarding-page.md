---
title: "Clarify auth provider details on onboarding page"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T00:08:53Z
updated_at: 2026-06-25T02:07:14Z
source_issues: ["https://github.com/meta-secret/nook/issues/32"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Clarify auth provider details on onboarding page

## Imported context

This record was imported from [Nook GitHub issue #32](https://github.com/meta-secret/nook/issues/32)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Improve the onboarding page's auth provider selection so users can clearly tell which provider they are choosing, especially when multiple GitHub providers are configured.

## Problem

On the onboarding page, the auth provider picker currently shows only the provider name/label. If a user has more than one GitHub provider, it is unclear which one maps to which GitHub repository or token. This makes it easy to choose the wrong provider when generating an onboarding QR/link.

## Desired behavior

The onboarding provider picker should show enough non-sensitive context for each provider, such as:

- Provider type, for example GitHub or local device storage
- GitHub repository owner/name
- A short provider description or storage location summary
- Token identity hints where safe, for example token label, token suffix, or account/repo scope metadata if available
- Active/current provider indication when relevant

## Acceptance criteria

- Users can distinguish between two or more GitHub providers on the onboarding page.
- The selected provider display includes repository information, not only a generic name.
- Sensitive token values are never shown in full.
- The UI remains compact and readable on mobile.
- Existing provider selection behavior still works for local and GitHub providers.
- Tests cover multiple GitHub providers and verify that repository/context details are visible.

## Related areas

- `nook-web/src/lib/components/OnboardDevice.svelte`
- `nook-web/src/lib/auth-providers.ts`
- provider settings / storage UI
- onboarding QR/link generation flow


## Historical comments

No comments.
