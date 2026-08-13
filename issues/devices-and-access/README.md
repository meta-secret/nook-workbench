---
title: "Feature: Identity management and access clarity"
status: in_progress
created_at: 2026-08-01T04:18:33Z
updated_at: 2026-08-13T03:58:00Z
---

# Feature: Identity management and access clarity

Give people an honest, always-available place to create and manage identities,
link installation app keys, inspect access methods, and understand which vaults
an identity can open. The surface must distinguish browser-reported facts,
Nook-verified relationships, user-supplied labels, last-known evidence, and
unknowns without exposing private key material.

## Issues

- [x] [Build the Devices & access dashboard](devices-access-dashboard.md)
- [ ] [Persist and select multiple identities](identity-directory.md)
- [ ] [Enroll installation app keys into identities](identity-app-key-enrollment.md)
- [ ] [Ship independent identity and access-method management](identity-access-methods-ui.md)

## Ordered delivery

1. Add a portable Rust identity directory and migrate the existing singleton
   identity record without losing vault DEK ownership.
2. Add a typed Rust enrollment protocol for linking another installation app
   key to an identity and updating identity-held vault envelopes.
3. Add the production Svelte management surface. Keep the relationship graph.
   Add identity creation and selection plus a flat access-method tab.

## Durable boundaries

- Identity management and vault content are separate concepts.
- A passkey or PIN/passphrase protects an installation-local app key.
- An app public key may belong to one or more identities.
- An identity owns the DEK envelopes for its vaults.
- Backup passwords open one vault directly and do not unlock the device key.
- Simple and Sentinel remain isolated applications with origin-scoped state.
- WebAuthn does not reveal the selected external passkey manager reliably.
  Provider names remain user-confirmed unless separately verified.
