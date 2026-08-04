# Identity composition and vault grants sketch

## Outcome

The active Devices & access research route now presents two independent ledgers:

1. **My identities** lists virtual identities. Selecting one reveals the physical devices, local device keys, passkey access methods, and identity-record provider that belong to that identity.
2. **Vault ↔ identity grants** is visually separated and presents authorization only at the identity level. It contains no device-key or passkey paths.

The previously accepted dark chain-strength rope remains unchanged and is registered separately in the Inspiration category.

## Product decisions represented

- A person may have multiple virtual identities.
- An identity may contain zero or more physical devices and local device keys.
- Physical devices, installations/device keys, and passkey access methods are distinct concepts.
- Identity records can be replicated through mounted sync providers.
- Vaults remain independent encrypted stores and authorize identities, not individual keys.
- Synced-passkey availability does not imply physical device ownership.

## Interaction evidence

- Selected Nora, Northstar studio, and the zero-key Field notes identity; each selection updates only the identity-composition ledger.
- Confirmed the vault-grant ledger remains identity-only across selections.
- Inspected desktop, phone-width, and compact-width layouts in the local browser.
- Confirmed the preserved Inspiration route still renders the accepted chain-strength composition.
- Confirmed no horizontal document overflow and no browser console errors in the inspected active state.

## Validation boundary

Per the requested exploration workflow, no repository formatter, build, test, linter, detector, or validation task was run. No commit, push, or pull request was created.

## Remaining

- Product review of the active sketch and terminology.
- Repository validation and delivery only after the exploration direction is accepted.
