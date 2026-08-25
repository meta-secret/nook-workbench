---
title: Provision independent local identity keys and simplify Devices access
feature: devices-and-access
issue: issues/devices-and-access/independent-local-identity-keyring.md
plan: plans/devices-and-access/20260823T071643Z-independent-local-identity-keyring.md
status: in_progress
started_at: 2026-08-23T07:16:43Z
updated_at: 2026-08-25T09:32:32Z
agent: codex
---

# Provision independent local identity keys and simplify Devices access

## Outcome

Devices & access now makes Add identity the entry point for browser protection,
supports multiple independently protected local identities, and keeps passkey
naming inside the inventory row. Legacy access-evidence and browser-report
panels are removed from the user-facing flow.

## Progress

- Added a Rust-owned local identity keyring with a distinct app key and signing
  seed for each locally created identity.
- Scoped provider credentials, device access profiles, vault access evidence,
  extension handoff, lock, recovery, and selection to the active app key.
- Reused the existing protection widget from Add identity and added safe cancel,
  remount, switching, and failed-reload behavior.
- Added inline passkey rename and removed the standalone keeper question,
  Inspect access evidence, and browser-reported details.
- Updated product specifications, localization, unit tests, actual-WASM tests,
  Playwright coverage, and the rendered UI demo.

## Review repairs

- Revalidate keyring-to-directory ownership before deleting any legacy wrapped
  identity material.
- Block staged genesis while destructive recovery cleanup is pending.
- Reload app-scoped provider state when identity selection changes.
- Adopt exclusive storage generations after failed recovery refreshes.
- Split passkey-inventory browser coverage at a capability seam so all authored
  source files remain within the 1,000-line limit.

## Local validation

- Exact implementation head: `739d501bc8616804b9f44d743d5972cd5d739549`.
- Base: `d41d457222844812fe9fca0fd6081a694fbd1767`.
- Devices & access Playwright: 14 passed across the dashboard and passkey
  inventory specs.
- Actual-WASM regressions: legacy protection preservation 1/1; staged genesis
  recovery cleanup guard 1/1.
- Rendered Devices & access demo: 1/1.
- Host format, web checks, focused recovery unit test, and `task loom:pre-push`
  passed.

## Remaining work

- Publish the branch and PR.
- Run complete hosted exact-head validation and Cloud review.
- Resolve any actionable review feedback, pass readiness, squash merge, and
  record deployment evidence.
