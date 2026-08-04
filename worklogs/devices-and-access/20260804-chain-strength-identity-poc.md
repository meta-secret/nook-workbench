# Chain-strength identity proof of concept

## Plan

[Chain-strength identity proof of concept](../../plans/devices-and-access/20260804-chain-strength-identity-poc.md)

## Outcome

Deleted the rejected identity/vault sketch set and replaced it with one chain-strength identity-management proof of concept grounded in the shipping Devices & access visual language. Updated the Cortex architecture record around virtual identities, physical-device inventory, installation-specific device keys, passkey availability, replication-provider mounts, and downstream vault grants.

## Progress

- Reduced the Identity Management research category to one route.
- Modelled one person switching among multiple personal and collective virtual identities, including a valid zero-key identity.
- Made identities reference public device keys rather than own physical-device records; the same physical device may therefore appear through different keys in several identities.
- Represented provider replication as an explicit local-only or mounted state.
- Distinguished synced passkey availability from device-bound credentials and from local Nook device keys.
- Kept typed vault authorization grants downstream from identity management.
- Added the normative Cortex architecture decision and aligned related architecture and product specifications.

## Implementation problems

- The first replacement model still attached physical-device and passkey identifiers directly to identities. Independent design review identified the ownership leak; the fixture now derives physical-device and passkey views from identity-owned public device-key relationships.
- A missing provider was initially represented as a fake provider row. It is now an explicit local-only identity-record state.

## Decisions

- Sync providers are neutral replication infrastructure. Identities and vaults independently own their provider mounts.
- Ordinary browser WebAuthn options cannot force a platform passkey to remain local. Nook preserves the physical-device boundary with a fresh local device key per installation; a passkey is only a protector for that local key.
- Current deterministic passkey-derived standard mode remains a documented compatibility boundary, not the target physical-device-key model.
- Vault passwords and other secret items remain vault-owned content.

## Validation

- Inspected all three identity states interactively in the local research app at desktop and 390px widths.
- Confirmed no horizontal overflow and no fresh browser console errors.
- Independent Impeccable finish review completed; all six findings were addressed and re-reviewed.
- Per the exploration hold, no repository formatter, build, test, or validation command was run. No commit, push, or pull request was created.

## Remaining work

- Product review and iteration on the single proof of concept.
- Repository validation and delivery remain intentionally deferred until the concept is accepted.
