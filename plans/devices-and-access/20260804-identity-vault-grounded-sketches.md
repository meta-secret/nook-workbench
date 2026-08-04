# Devices & access grounded identity/vault sketches

## Context

This plan supersedes the first identity/vault sketch pass. That pass explored the architecture too abstractly and did not preserve the real Simple Vault Devices & access surface or its current evidence model.

## Goal

Replace the ten identity/vault experiments with ten precise variations rooted in the shipping Devices & access page, the current Rust/WASM snapshot, and the existing key-index, chain-strength, and identity-console research concepts.

## Product truth to preserve

- The current browser has an unlock protector, one device identity state, and a local vault registry.
- A vault route is verified only after this device successfully decrypts that vault.
- Passkey manager names are user-provided labels; browser observations do not prove an external provider identity.
- Locked and unprepared states reveal less than an unlocked vault.
- Personal and collective identities, identity-level vault grants, and provider-mounted identity logs are proposed architecture, not current persisted state.
- Password entries remain vault content.

## Work

1. Remove the ten abstract identity/vault experiment implementations from the first pass.
2. Build a shared, explicit fixture model derived from the real Devices & access snapshot and clearly separated proposed identity/grant/provider records.
3. Recreate ten variants inside the identity/vault category. Each must preserve the production near-black chain-strength grammar while testing a distinct information architecture.
4. Include direct evolutions of key-index, chain-strength, and identity-console, plus focused variants for onboarding, provider mounts, vault grants, and browser-extension relationships.
5. Keep every state and label honest about its evidence source and current-versus-proposed status.
6. Inspect every experiment locally at desktop and narrow widths. Do not run repository validation yet, per the requested exploration hold.

## Deliverable

A locally runnable research category containing ten replacement sketches and a concise handoff with the local experiments URL.
