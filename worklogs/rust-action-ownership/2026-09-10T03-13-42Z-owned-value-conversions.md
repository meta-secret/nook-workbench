---
title: Owned value conversions
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
finished_at: 2026-09-10T03:13:42Z
agent: codex
related_prs: [1573]
---

# Outcome

Replaced avoidable borrowed aggregate conversions with consuming From/TryFrom and owned importer adapters. Commits f22197e9b and 494b20ab8d15e871258d4b17edb7cf7042b4ef32 change 20 files with 310 insertions and 187 deletions.

- Join requests move into vault members; member entries and completed rosters move into records. Direct builders, approval consumers and fixture sources follow ownership.
- Login and passkey public projections move public fields while clearing discarded secrets. Remaining decrypted rows retain their cleanup owner.
- Proton Pass and 1Password importers own items and move notes, passwords and selected credentials. Selection precedence, whitespace handling, categories, card validation and source order are retained. One 1Password field intentionally copies when it supplies both username and password.
- Live enrollment snapshots and derived metadata retain legitimate borrowing. No whole-item clone workaround, unsafe move-out technique or generic conversion framework was added.

## Evidence and limitations

Scoped source implementation handoffs, write-only rustfmt and clean committed state. Inline regression and caller fixture sources adapted but not executed. No tests, builds, compilation, typechecks, lint, code generation, reviews or validation workflows ran, as requested. No claim of runtime validation.

## Delivery

- PR: https://github.com/meta-secret/nook/pull/1573
- Plan: https://github.com/meta-secret/nook-workbench/blob/2b8200c3ee345959b3bc0175b5e93216e13cfc1f/plans/rust-action-ownership/2026-09-10T03-01-11Z-owned-value-conversions.md
- Scope remains in progress; PR stays open for user-directed validation.
