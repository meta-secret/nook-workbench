---
title: "Redesign the vault list, item cards, and secret editing experience"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T04:25:30Z
updated_at: 2026-07-21T04:33:10Z
source_issues: ["https://github.com/meta-secret/nook/issues/298"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:security-console-ui"]
legacy_state_reason: "COMPLETED"
---

# Redesign the vault list, item cards, and secret editing experience

## Imported context

This record was imported from [Nook GitHub issue #298](https://github.com/meta-secret/nook/issues/298)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #295.

## Visual Reference

<img width="1200" height="900" alt="Dark layered security-console UI visual reference" src="https://github.com/user-attachments/assets/6bd5a67d-0a5b-4cfa-a6a3-c74270d0e66f" />

Use this image as the visual reference for atmosphere, layering, typography, spacing, translucency, restrained accent color, and overall polish. Adapt it to Nook rather than copying payment-card content, low contrast, or the decorative perspective angle. The canonical feature brief is #295.

## Dependency

Depends on #296; may proceed in parallel with the shell and onboarding slices once primitives are stable.

## Problem

The vault is Nook's primary working surface. Its search, grouped records, details, reveal/copy actions, type picker, and add/edit forms need the strongest expression of the new visual system without making secrets harder to scan or operate safely.

## Scope

- Redesign vault count/header controls, search, grouped secret cards, item headers, detail rows, reveal/copy/edit/delete actions, and expanded/collapsed states.
- Redesign the secret-type picker and add/edit forms for login, API key, seed phrase, and secure note records.
- Cover empty vault, no search results, loading/saving, copied, blocked edits, validation errors, and destructive confirmation states.
- Adapt the reference's layered-card composition to Nook records without introducing payment-card branding or a credit-card metaphor.
- Preserve typed WASM records and existing Rust-owned search, validation, password generation, and mutation behavior.
- Preserve localization and secure handling of revealed values.

## Out of Scope

- Adding new secret types or changing the vault record schema.
- Moving filtering, validation, password generation, or secret mutations into TypeScript.
- Changing sync/conflict semantics.

## Acceptance Criteria

- Common vault actions are immediately scannable and keyboard operable at desktop and mobile sizes.
- Sensitive values remain masked by default, and reveal/copy/edit/delete states are visually unambiguous.
- Long names, URLs, usernames, API keys, notes, and localized labels do not overflow or destabilize the layout.
- The type picker and each form remain compact but retain clear labels, validation, focus, and touch targets.
- Empty, loading, saving, blocked, copied, error, and destructive states use the shared design vocabulary.
- Existing `NookSecretRecord`/WASM boundaries remain intact.
- Relevant unit tests and the critical local-vault/secret Playwright paths pass with representative visual review.

## Code Anchors

- `nook-app/nook-web/nook-web-app/src/lib/components/SecretVault.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/SecretDetailRow.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/AddSecretForm.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/SeedPhraseGrid.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/MarkdownEditor.svelte`
- `nook-app/nook-web/nook-web-app/e2e/local-vault.spec.ts`
- `nook-app/nook-web/nook-web-app/e2e/bip39-seed-phrase.spec.ts`




## Historical comments

### cypherkitty — 2026-07-21T04:33:09Z

Closing as completed: security-console UI redesign work for this slice is considered done on current main. Tracking via milestone 2 close-out.
