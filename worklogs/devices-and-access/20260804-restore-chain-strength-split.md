# Restore chain-strength and split identity domains

Plan: [Restore chain-strength and split identity domains](../../plans/devices-and-access/20260804-restore-chain-strength-split.md)

## Outcome

The active identity-management experiment has returned to the accepted dark chain-strength visual foundation. The replacement large selected-identity card was removed.

The route now composes two focused Svelte components:

- `Identities` owns the physical-device anchor, virtual-identity selector, identity-record provider, and selected identity's device-key/passkey relationships.
- `VaultIdentities` owns vault-to-identity authorization and contains no device-key or passkey paths.

The preserved Inspiration route and its accepted rope implementation remain unchanged.

## Interaction and visual evidence

- Selected Nora and Northstar studio and confirmed identity-owned devices, keys, passkeys, and provider data change inside the identity component.
- Confirmed the vault component exposes only identity label/id, capability, and grant status.
- Compared the active and preserved routes at desktop width.
- Inspected the active identity and vault sections at phone width with no document-level horizontal overflow or browser console errors.
- Preserved the previous canvas, typography, compact identifiers, physical-device card, identity capsules, vault card, and brace language.

## Validation boundary

Per the user's exploration hold, no repository formatter, build, test, linter, design detector, or validation task was run. No commit, push, or pull request was created.

## Remaining

- Product review of the restored split.
- Repository validation and delivery only after the direction is accepted.
