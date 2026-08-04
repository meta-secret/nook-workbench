# Restore chain-strength and split identity domains

## Goal

Restore the accepted dark chain-strength experiment as the active visual foundation while separating the page into two focused Svelte components:

1. identity composition; and
2. vault-to-identity authorization.

## Constraints

- Preserve the accepted chain-strength canvas, typography, spacing, borders, compact identifiers, device anchor, identity shapes, and interaction grammar.
- Remove the replacement selected-identity card layout.
- Keep physical devices, device keys, passkeys, and identity-record providers inside the identity component.
- Keep vault authorization strictly at the identity level; the vault component must not render device-key or passkey paths.
- Keep the preserved Inspiration route unchanged.
- Do not run repository formatters, builds, tests, linters, detectors, or validation tasks during this exploration step.

## Implementation

- Refactor the active experiment shell to own only shared selection and page composition.
- Extract the accepted identity portion into an `Identities` component.
- Extract vault-to-identity relationships into a `VaultIdentities` component using the accepted vault card and brace language.
- Reuse the existing typed fixture model and avoid introducing a new visual system.
- Inspect the active and preserved routes at desktop and phone widths in the local browser.

## Completion evidence

- The active route visually reads as the previous accepted chain-strength experiment.
- Identity selection exposes identity-owned devices, device keys, passkeys, and provider information without a large replacement panel.
- The second section contains only vault and identity grant information.
- The Inspiration route remains unchanged.
