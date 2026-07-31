---
title: Add Safari browsing-data password import
feature: unplanned
issue: none
started_at: 2026-07-31T07:50:57Z
agent: cursor
---

# Task plan

## Interpreted request

Make Safari password migration a first-class Import & Export path by accepting
Safari's browsing-data ZIP (`Passwords.csv`) in addition to the existing Apple
Passwords CSV, and surface Safari clearly in the source label and export
instructions. The CSV schema already matches Apple Passwords.

## Requirements

- Extend the Apple Passwords importer in `nook-core` so one entry point accepts
  either a plaintext Apple/Safari CSV or a Safari browsing-data ZIP that
  contains `Passwords.csv` (including localized ZIP entry names by matching
  Apple password CSV headers).
- Keep domain parsing in Rust; expose a WASM import that accepts export bytes.
- Update the vault-app Apple Passwords panel to accept `.csv` and `.zip`, use
  binary import glue, and label the source as Safari / Apple Passwords with
  export instructions for Safari browsing-data export and the Passwords app.
- Update English and Russian catalogs, i18n source-label regression, import
  demo/e2e/unit coverage, and the password-manager product spec.
- Deliver through the normal PR-first hosted validation loop.

## Constraints and exclusions

- Import passwords and valid OTPAuth authenticator rows only. Bookmarks,
  history, extensions, and Safari payment-card JSON are out of scope.
- Do not add a second accordion that duplicates the same CSV schema.
- Do not invent Safari-specific UI beyond the shared password-manager import
  panel pattern.
- TypeScript remains glue; validation stays in Rust/WASM.
- No raw prompts, secrets, private data, or local absolute paths in Workbench
  records.

## Initial plan

1. Publish this plan, then branch from `origin/main`.
2. Add ZIP/CSV bytes planning on top of the existing Apple Passwords CSV parser
   with colocated Rust tests for ZIP, raw CSV, missing passwords file, and size
   limits.
3. Wire WASM bytes import, Svelte panel accept/format, vault handlers, locales,
   product spec, and import UI tests including a Safari ZIP e2e path.
4. Host-apply `task format`, pass the UI demo contract, commit, push, and open
   the PR.
5. Run focused hosted tasks as useful, then exact-head `task pr:validate`, fix
   until green, squash-merge, and publish the Workbench worklog/statistics.

## Completion evidence

- Merged Nook PR that accepts Safari browsing-data ZIP and CSV under the Safari /
  Apple Passwords import source.
- Green exact-head repository-owned PR checks.
- Rust unit tests for ZIP and CSV acceptance/rejection paths.
- Visible Safari / Apple Passwords source panel with export instructions.
- Linked Workbench plan, worklog, and AI-agent statistics.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
