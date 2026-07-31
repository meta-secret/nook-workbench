---
title: Add KeePassXC CSV password import
feature: unplanned
issue: none
started_at: 2026-07-31T07:45:21Z
agent: cursor
---

# Task plan

## Interpreted request

Add a first-class KeePassXC import path so users can migrate unencrypted
KeePassXC CSV vault exports into Nook the same way they already import
Bitwarden, LastPass, 1Password, Proton Pass, Apple Passwords, and Chrome.

## Requirements

- Parse KeePassXC's documented CSV export in `nook-core` into typed
  `SecretValue` items (logins and secure notes).
- Preserve useful KeePassXC metadata (title, group, optional TOTP) in notes
  under a `## KeePassXC` section; create authenticator items when TOTP is a
  valid otpauth URI.
- Expose the import through the WASM vault manager and vault-app Settings →
  Import & Export accordion.
- Add English and Russian translation catalogs, toast copy, and concise source
  labels that do not repeat the import action.
- Cover the parser with colocated Rust behavior tests; extend import accordion /
  panel coverage where the existing import e2e and unit patterns already list
  sources.
- Document KeePassXC in the product import table.
- Deliver through the normal PR-first hosted validation loop.

## Constraints and exclusions

- Support unencrypted KeePassXC CSV only; native `.kdbx`, KeePass 2 XML, and
  attachments are out of scope.
- Do not invent KeePassXC-specific UI beyond the existing shared
  password-manager import panel pattern.
- Keep domain parsing and validation in Rust/WASM; TypeScript remains glue.
- No raw prompts, secrets, private data, or local absolute paths in Workbench
  records.

## Initial plan

1. Publish this plan, then branch from `origin/main`.
2. Implement `plan_keepassxc_import` with header validation, login/note
   conversion, TOTP handling, and unit tests.
3. Wire WASM `SecretImportSource::KeePassXc`, vault handlers, Svelte panel,
   admin accordion, locales, product spec, and import UI tests.
4. Host-apply `task format`, pass the UI demo contract, commit, push, and open
   the PR.
5. Run focused hosted tasks as useful, then exact-head `task pr:validate`, fix
   until green, squash-merge, and publish the Workbench worklog/statistics.

## Completion evidence

- Merged Nook PR that adds KeePassXC to Import & Export.
- Green exact-head repository-owned PR checks.
- Rust unit tests for KeePassXC CSV parsing and rejection paths.
- Visible KeePassXC source panel with export instructions in Settings.
- Linked Workbench plan, worklog, and AI-agent statistics.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
