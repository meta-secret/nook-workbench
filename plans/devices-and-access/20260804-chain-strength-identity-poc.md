# Chain-strength identity proof of concept

## Context

This plan supersedes the ten-variant identity/vault experiment work. Those sketches used the wrong identity model and will be removed.

## Corrected model

- An identity is a virtual account, analogous to an account or user profile.
- One person may own or participate in multiple identities.
- An identity may contain zero or more physical-device relationships and public keys.
- A physical device and a device key are distinct: the device is hardware; the device key is cryptographic material created for an identity on that device.
- A device may use multiple passkeys as protectors, usually one. A synced passkey may be available through a cloud-backed passkey provider and therefore must not be presented as physically located on one device.
- Identity records contain the public keys of identity devices and replicate through one or more sync-provider mounts.
- Vault authorization remains downstream from identity management.

## Work

1. Delete the ten replacement identity/vault sketches and their shared fixture model.
2. Reduce the research index to one new identity experiment.
3. Use the existing chain-strength experiment as the direct structural and visual blueprint.
4. Model multiple identities per person, physical devices separately from device keys, passkey availability separately from physical location, and identity sync-provider mounts.
5. Update Cortex architecture and product documents to make this vocabulary normative and correct the earlier identity description.
6. Run the research app locally and inspect the single route interactively. Keep the repository validation hold until the concept is accepted.

## Deliverable

One precise, locally runnable chain-strength identity proof of concept plus updated architecture documentation.
