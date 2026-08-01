---
title: Devices and access dashboard implementation
feature: devices-and-access
issue: issues/devices-and-access/devices-access-dashboard.md
started_at: 2026-08-01T04:18:33Z
agent: codex
---

# Task plan

## Interpreted request

Build a permanent security dashboard that makes Nook's access chain understandable: a passkey or PIN/passphrase protects this browser's age device key, that device key can be authorized for several independent vaults, and each vault owns its enrolled devices and backup passwords. The page must remain useful before vault creation, while locked, and while unlocked.

## Requirements

- Represent protection method, device identity, vault authorization, enrolled devices, and backup passwords as distinct concepts.
- Collect and present all useful non-secret passkey and client metadata that the browser or Nook can support, with explicit provenance and honest unknown states.
- Permit a user-supplied passkey-provider label without presenting it as browser verification.
- Include PIN/passphrase fallback wherever passkey protection is unavailable or not selected.
- Preserve private-key secrecy, zeroization, vault isolation, app-origin isolation, and typed Rust/WASM ownership of portable policy.
- Reuse current vault/device/password behavior and the established Svelte visual system.
- Cover migration, empty, locked, stale, error, passkey, PIN/passphrase, and unlocked behavior.
- Deliver through the repository's format, hosted validation, review-resolution, squash-merge, Workbench, and statistics workflow.

## Constraints and exclusions

- WebAuthn cannot enumerate all credentials in external password managers or reliably identify which provider the user selected; the UI must say unknown rather than guess.
- Third-party website passkeys stored inside a vault remain vault items and are not managed here.
- Simple and Sentinel retain separate origins and separate dashboards; no new cross-origin broker is introduced.
- The browser extension remains a Simple Vault companion and does not become a universal key manager.

## Initial plan

1. Inventory the existing domain, persistence, navigation, translation, and test seams from current `origin/main`.
2. Add migration-safe Rust-owned metadata and typed WASM access APIs.
3. Capture supported browser ceremony evidence and successful-use metadata at the narrow WebAuthn boundary.
4. Build the always-available dashboard and connect existing vault member/password summaries.
5. Add behavior-focused Rust, web, and Playwright demo/e2e coverage plus architecture documentation.
6. Format, publish the implementation PR, validate on GitHub-hosted workers, resolve feedback, and squash-merge.
7. Publish the linked completion worklog and agent statistics.

## Completion evidence

- Rust tests prove metadata validation, migration, provenance, and access relationship behavior.
- Browser coverage demonstrates the page in no-vault, locked passkey, locked PIN/passphrase, and unlocked multi-vault states.
- The UI demo contract, repository-owned exact-head PR checks, readiness audit, and squash merge succeed.
- Workbench issue, worklog, PR, and statistics records are visible on Workbench `main`.

## Safety review

This plan contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
