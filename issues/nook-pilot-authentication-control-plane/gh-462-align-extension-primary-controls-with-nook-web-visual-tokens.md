---
title: "Align extension primary controls with nook-web visual tokens"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-17T06:28:12Z
updated_at: 2026-07-17T08:18:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/462"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Align extension primary controls with nook-web visual tokens

## Imported context

This record was imported from [Nook GitHub issue #462](https://github.com/meta-secret/nook/issues/462)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of the auth-agent feature pack (#461).

## Problem

The extension popup primary button uses a forest-green style (`#203c2a`) that does not match nook-web’s security-console primary tokens (neutral high-contrast `bg-primary`).

## Scope

- Restyle extension popup primary/secondary buttons and focus rings to match nook-web dark-mode primary tokens.
- Align in-page auth-gate / widget accent colors with the same token set.
- Do not pull the full Tailwind/shadcn stack into the extension; share values via CSS variables or mirrored tokens.

## Acceptance Criteria

- Primary CTA in the extension popup matches nook-web primary appearance in dark mode.
- Secondary actions remain visually subordinate.
- Focus-visible rings remain accessible.
- e2e smoke still finds primary device-setup / unlock controls.

## Historical comments

### cypherkitty — 2026-07-17T06:31:08Z

Implemented in https://github.com/meta-secret/nook/pull/466
