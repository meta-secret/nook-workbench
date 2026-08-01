---
title: Preserve local vault and honest unlock after import-as-new-vault
feature: vault-event-log
issue: issues/backlog/gh-205-guard-provider-connect-against-silent-vault-replacement.md
started_at: 2026-08-01T02:40:00Z
agent: cursor-grok
---

# Task plan

## Interpreted request

When a newly created empty local vault conflicts with a different vault already on a sync provider, choosing **Import as new vault** must keep the original local vault on this device and leave the imported provider vault unlockable through an honest auth path. Today the original vault disappears from the login catalog view, and unlock fails with a missing auth-envelope error while still offering only device keys.

## Requirements

- Importing a provider vault for a different `store_id` must add a second local vault and never remove or hide the prior local vault from the on-device catalog.
- After import with more than one local vault, the login surface must show the vault picker (or an equivalent switcher) so both vaults remain discoverable.
- Locked import must persist a complete projection, including backup-password entries projected from the event log.
- Login unlock must reflect whether the current device identity can decrypt the selected vault: offer device keys only when enrolled/decryptable; otherwise surface backup-password unlock (when present) and clear guidance instead of a raw encryption failure.
- Add regression coverage: WASM/browser proof that the prior vault remains registered after import, and Playwright coverage for import-as-new-vault catalog + unlock method honesty.
- Ship through the normal PR, hosted validation, squash-merge, and Workbench worklog path.

## Constraints and exclusions

- Do not auto-merge distinct `store_id` databases.
- Do not weaken auth-envelope or device-identity checks to force-open a foreign vault.
- Domain unlock assessment stays in Rust/WASM; Svelte remains a thin presentation layer.
- Heavy builds/tests run on GitHub Actions only; local work is limited to format and UI demo contract.

## Initial plan

1. Branch from `origin/main`.
2. Fix locked import projection hydration so password entries and meta survive `importProviderEventLogAsLocalVault` / local-folder import.
3. Fix post-import login selection so multiple vaults reopen the picker and both registry entries remain listed.
4. Wire local unlock-method assessment into the login auth form.
5. Add WASM/browser and Playwright regression tests.
6. Format, push, open PR, validate remotely, squash-merge, publish worklog/stats.

## Completion evidence

- Green exact-head PR checks after `task pr:validate`.
- Playwright asserts both local vaults remain after import-as-new-vault.
- Unlock UI no longer presents device keys as the only path for a vault this device cannot decrypt when a backup password exists.
- Squash-merged PR plus Workbench plan/worklog links.

## Safety review

- No raw prompts, transcripts, secrets, private data, raw logs, or unnecessary infrastructure details.
