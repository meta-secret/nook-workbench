---
title: Migrate concise Rust paths in the smaller product crates
feature: unplanned
issue: null
plan: plans/unplanned/20260904T155000Z-rust-qualified-path-small-crates.md
nook_pr: 1334
status: completed
started_at: 2026-09-04T15:50:00Z
finished_at: 2026-09-04T16:50:53Z
agent: codex
---

# Work summary

## Outcome

PR #1334 squash-merged the first serial qualified-path migration. Six smaller
product crates now deny Clippy `absolute_paths` and satisfy the configured
two-segment maximum while retaining meaningful module context.

## Progress

- Added the shared two-segment Clippy threshold.
- Migrated `nook-companion-core`, `nook-app-common`, `nook-auth2`,
  `nook-authenticator-domain`, `nook-replication`, and `nook-event-log`.
- Kept contextual references such as `str::from_utf8` and
  `page_field_classification::AuthenticationInputRole`.
- Added crate-local denial so every migrated crate is immediately enforced.
- Squash-merged the exact validated head as Main commit `510059cb`.

## Implementation problems

- The first hosted cycle exposed an import used only by tests and eight
  classifier paths missed by the static inventory.
- Development core scoped the import to tests and replaced the remaining paths
  with the owning module name.
- A Main update occurred before the replacement validation dispatch.
  The branch rebased cleanly and received fresh exact-head validation.

## Decisions

- Deliver the repository migration through serial crate-focused pull requests.
- Group small crates only when the combined authored diff remains well below
  the pull-request limit.
- Import modules instead of bare functions when a bare name would erase useful
  context.
- Consolidate workspace-level denial only after every authored crate is clean.

## Validation

- `task loom:pre-push PR=1334` passed with 294 authored additions.
- Exact-head run `33896441578` passed Native Rust, WASM, Dylint, dependency
  policy, coverage, Web verification, and Verify/preview.
- Exact-head Codex review settled with no findings.
- `task pr:ready PR=1334` reported ready with zero base drift and zero
  unresolved threads.
- PR #1334 squash-merged as `510059cb`.

## Remaining work

- Continue the serial migration through the remaining product, fuzz,
  preflight, and Minds crates.
- Consolidate workspace Clippy denial and publish the canonical Cortex Rust
  rule after every authored workspace is clean.
