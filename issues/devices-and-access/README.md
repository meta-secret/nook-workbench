---
title: "Feature: Devices and access clarity"
status: in_progress
created_at: 2026-08-01T04:18:33Z
updated_at: 2026-08-01T04:18:33Z
---

# Feature: Devices and access clarity

Give people an honest, always-available explanation of how a Nook passkey or
PIN/passphrase protects a browser device key and how that device key relates to
one or more vaults. The surface must distinguish browser-reported facts,
Nook-verified relationships, user-supplied labels, and last-known locked-state
metadata without exposing private key material.

## Issues

- [ ] [Build the Devices & access dashboard](devices-access-dashboard.md)

## Durable boundaries

- Device protection and vault access are separate concepts.
- A passkey or PIN/passphrase protects a browser-local age device identity.
- A device identity may be authorized for multiple independent vaults.
- Backup passwords open one vault directly and do not unlock the device key.
- Simple and Sentinel remain isolated applications with origin-scoped state.
