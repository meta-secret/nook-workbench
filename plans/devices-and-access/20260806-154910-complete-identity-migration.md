---
title: Complete Identity AppKey migration after Main e2e break
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
started_at: 2026-08-06T15:49:10Z
agent: cursor
---

# Task plan

## Interpreted request

Main Web e2e failed after the Identity extract because migration was incomplete.
Finish the Devices and access Identity/App key migration so Main e2e and
related product copy stay consistent, then restore green Main.

## Requirements

- Fix Identity hub vault-access graph handles so identity-to-vault DEK edges render.
- Align e2e and demo expectations with Identity / App key / Passkey vocabulary.
- Finish leftover devices_access EN/RU copy that still says device key or browser identity.
- Wipe helpers must clear both legacy device_* and app_* IndexedDB keys.
- Deliver through formatted commits, exact-head validation including e2e proof, and squash merge.

## Constraints and exclusions

- Do not rename every WASM DeviceIdentity API in this PR; keep aliases where needed.
- Do not change crypto AAD or vault wire device_id fields required for unlock.
- Keep unlock working for legacy dual-read storage.

## Initial plan

1. Publish this plan and branch from current main.
2. Fix IdentityBridgeNode VaultAccess handle wiring and e2e expectations.
3. Finish devices_access locale leftovers and storage wipe helpers.
4. Format, push, validate with hosted e2e, squash merge, publish Workbench records.

## Completion evidence

- devices-access Playwright expectations match live UI.
- Identity-to-vault edges render on Access.
- Exact-head PR validation green; Main-relevant web e2e covered.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
