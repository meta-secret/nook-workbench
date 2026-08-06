---
title: First-class Identity extract and Devices and access
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
started_at: 2026-08-06T06:58:00Z
agent: cursor
---

# Task plan

## Interpreted request

Introduce a first-class Identity that owns passkeys, app keys, and per-vault
DEKs. Rename DeviceIdentity and device_id to AppKey and app_id. A vault cannot
exist without an identity. Reshape the shared Devices and access surface into
an identity-centric Nora-style graph.

## Requirements

- Identity is a separate domain from vault and owns DEK envelopes to app public keys.
- Vault create requires an identity with at least one key and a generated DEK.
- Member changes re-wrap DEKs on the identity side without rewriting the vault log.
- Rename DeviceIdentity and DeviceId to AppKey and AppId with storage migration.
- Shared Access dashboard centers Identity with passkey and app-key evidence and vault edges.
- Login Devices and access uses the /devices-access route.
- English and Russian catalogs stay in parity.
- Deliver through formatted commits, exact-head validation, and squash merge.

## Constraints and exclusions

- Do not share one vault DEK across multiple identities in this delivery.
- Do not implement remote identity sync-provider mounts yet.
- Keep unlock working for legacy vaults via synthesized identity migration.
- Do not leave new APIs under DeviceIdentity or device_id names.

## Initial plan

1. Publish this plan and branch from current main.
2. Revise cortex vocabulary and DEK ownership docs.
3. Rename DeviceIdentity to AppKey and migrate persistence keys.
4. Implement Identity domain, DEK ownership, and vault-create prerequisites.
5. Expose WASM identity snapshots and drive Access from Identity.
6. Reshape the shared Access graph and copy.
7. Validate remotely, merge, and publish completion records.

## Completion evidence

- Focused Rust and web tests cover identity-before-vault and graph projection.
- Playwright proves passkey vault create shows identity hub with app key and vault edges.
- Exact-head repository-owned PR validation and readiness pass before merge.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
