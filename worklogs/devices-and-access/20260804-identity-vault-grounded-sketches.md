# Grounded Devices & access identity/vault sketches

## Outcome

Replaced the first abstract identity/vault sketch set with ten experiments derived from the shipping Simple Vault Devices & access surface and current Rust/WASM evidence model.

## Architecture represented

- Current facts remain limited to the browser unlock protector, device identity state, local vault registry, and routes verified by successful decryption.
- Personal and collective identities, identity control logs, and identity-level vault DEK grants are explicitly labelled proposed architecture.
- Provider mounts sit below identity and vault as neutral replication transport with device-local sealed credentials.
- Onboarding constructs an identity before a separate vault grant and vault replica mount.
- Extension identity/site relationships and vault/site password consent are independent records.
- Passwords remain vault-owned content.

## Experiments

1. Chain strength · identities
2. Identity index
3. Identity console · corrected
4. Relationship rows
5. Evidence layers
6. Identity grant workbench
7. Onboarding map
8. Provider mounts
9. Vault boundary
10. Extension bridge

## Local inspection

Every route was inspected through the local research server at desktop and 390px widths. All ten rendered without runtime or console errors and without horizontal overflow. Shared unlocked, locked, and new-browser controls were exercised, as were representative identity and act selections.

Per the exploration hold, repository formatting, builds, tests, and validation were not run. No commit, push, or PR was created.
