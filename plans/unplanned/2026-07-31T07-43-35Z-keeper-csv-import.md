---
title: Add Keeper Password Manager CSV import
feature: unplanned
issue: none
started_at: 2026-07-31T07:41:00Z
agent: cursor
---

# Task plan

## Interpreted request

Add a first-class Keeper Password Manager import path so users can migrate
unencrypted Keeper CSV vault exports into Nook the same way they already import
Bitwarden, LastPass, 1Password, Proton Pass, Apple Passwords, and Chrome.

## Requirements

- Parse Keeper's documented unencrypted CSV export in `nook-core` into typed
  `SecretValue` items (logins and secure notes).
- Preserve useful Keeper metadata (title, folder, shared folder, custom fields,
  TOTP/`$oneTimeCode`) in notes under a `## Keeper` section.
- Expose the import through the WASM vault manager and vault-app Settings →
  Import & Export accordion.
- Add English and Russian translation catalogs, toast copy, and concise source
  labels that do not repeat the import action.
- Cover the parser with colocated Rust behavior tests; extend import accordion /
  panel coverage where the existing import e2e and unit patterns already list
  sources.
- Document Keeper in the product import table.
- Deliver through the normal PR-first hosted validation loop.

## Constraints and exclusions

- Support unencrypted Keeper CSV only; encrypted KeePass/KDBX and Keeper JSON
  are out of scope.
- File attachments, password history, and shared-folder permissions are not
  imported.
- Do not invent Keeper-specific UI beyond the existing shared password-manager
  import panel pattern.
- Keep domain parsing and validation in Rust/WASM; TypeScript remains glue.
- No raw prompts, secrets, private data, or local absolute paths in Workbench
  records.

## Initial plan

1. Publish this plan, then branch from `origin/main`.
2. Implement `plan_keeper_import` with header validation, login/note conversion,
   custom-field metadata, and unit tests.
3. Wire WASM `SecretImportSource::Keeper`, vault handlers, Svelte panel, admin
   accordion, locales, README, and import UI tests.
4. Host-apply `task format`, pass the UI demo contract, commit, push, and open
   the PR.
5. Run focused hosted tasks as useful, then exact-head `task pr:validate`, fix
   until green, squash-merge, and publish the Workbench worklog/statistics.

## Completion evidence

- Merged Nook PR that adds Keeper to Import & Export.
- Green exact-head repository-owned PR checks.
- Rust unit tests for Keeper CSV parsing and rejection paths.
- Visible Keeper source panel with export instructions in Settings.
- Linked Workbench plan, worklog, and AI-agent statistics.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
