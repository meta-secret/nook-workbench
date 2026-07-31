---
title: Add Dashlane CSV password import
feature: unplanned
issue: none
started_at: 2026-07-31T09:21:59Z
agent: cursor
---

# Task plan

## Interpreted request

Add a first-class Dashlane import path so users can migrate unencrypted
Dashlane CSV vault exports into Nook the same way they already import
Bitwarden, LastPass, 1Password, Proton Pass, Apple Passwords / Safari, and
Chrome.

## Requirements

- Parse Dashlane's unencrypted CSV export in `nook-core`, accepting either a
  browsing ZIP that contains category CSVs or a single credentials / secure
  notes / payments CSV.
- Map `credentials.csv` rows to logins (and authenticator items from
  `otpSecret` / `otpUrl`), secure-note CSVs to secure notes, and credit-card
  payment rows to credit cards.
- Preserve useful Dashlane metadata (title, category, alternate usernames) under
  a `## Dashlane` notes section.
- Expose the import through the WASM vault manager and vault-app Settings →
  Import & Export accordion.
- Add English and Russian translation catalogs, toast copy, and concise source
  labels that do not repeat the import action.
- Cover the parser with colocated Rust behavior tests; add a focused import e2e
  suite and panel coverage without pushing shared import specs over the
  source-size limit.
- Document Dashlane in the product import table.
- Deliver through the normal PR-first hosted validation loop.

## Constraints and exclusions

- Support unencrypted Dashlane CSV / CSV ZIP only; encrypted DASH files and
  Credential Exchange Protocol transfers are out of scope.
- IDs, personal information, Wi-Fi, bank accounts, passkeys, and secure-note
  attachments are not imported (count skipped where encountered).
- Do not invent Dashlane-specific UI beyond the existing shared
  password-manager import panel pattern.
- Keep domain parsing and validation in Rust/WASM; TypeScript remains glue.
- No raw prompts, secrets, private data, or local absolute paths in Workbench
  records.

## Initial plan

1. Publish this plan, then branch from `origin/main`.
2. Implement `plan_dashlane_import` for ZIP and CSV bytes with credential,
   secure-note, and credit-card conversion plus unit tests.
3. Wire WASM `SecretImportSource::Dashlane`, vault handlers, Svelte panel,
   admin accordion, locales, product spec, and focused import UI tests.
4. Host-apply formatting hygiene, pass the UI demo contract, commit, push, and
   open the PR.
5. Run exact-head `task pr:validate`, fix until green, squash-merge, and publish
   the Workbench worklog/statistics.

## Completion evidence

- Merged Nook PR that adds Dashlane to Import & Export.
- Green exact-head repository-owned PR checks.
- Rust unit tests for Dashlane CSV/ZIP parsing and rejection paths.
- Visible Dashlane source panel with export instructions in Settings.
- Linked Workbench plan, worklog, and AI-agent statistics.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
