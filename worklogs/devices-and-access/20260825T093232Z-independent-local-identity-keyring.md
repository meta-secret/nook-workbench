---
title: Provision independent local identity keys and simplify Devices access
feature: devices-and-access
issue: issues/devices-and-access/independent-local-identity-keyring.md
plan: plans/devices-and-access/20260823T071643Z-independent-local-identity-keyring.md
nook_pr: 1105
status: blocked
started_at: 2026-08-23T07:16:43Z
finished_at: 2026-08-25T17:38:00Z
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
- Revalidate keyring-to-directory ownership before deleting any legacy wrapped
  identity material.
- Block staged genesis while destructive recovery cleanup is pending.
- Reload app-scoped provider state when identity selection changes.
- Adopt exclusive storage generations after failed recovery refreshes.
- Split passkey-inventory browser coverage at a capability seam so all authored
  source files remain within the 1,000-line limit.
- Preserve an unlocked identity instead of silently switching it for another
  extension grant, and restore the atomically captured prior locked selection
  after any failed import or provider update.
- Recheck compatibility-profile ownership on the exact fallback bytes inside
  the IndexedDB write transaction before adopting or deleting them.
- Require extension event imports to match the manager's active protected
  identity, with both initial import and update paths activating the grant
  through the same rollback-safe boundary.

## Implementation problems

- The required exact-head hosted tasks cannot start compilation because the
  private ARC BuildKit worker cannot reach the required SeaweedFS compiler-cache
  bucket. Three unchanged-head retries failed at the cache health probe.
- The latest full browser suite stopped on an unrelated Sentinel participant
  enrollment assertion after completing the Devices & access scenarios.

## Decisions

- A local identity is independently provisioned only when it owns a distinct
  protected app key and event-signing seed; shared-key visual identities are
  not presented as independent identities.
- Extension imports reject a cross-identity switch while another identity is
  unlocked. A locked selection is restored after failure from an app ID
  captured atomically with the selection transaction.
- Compatibility access evidence is adopted only when the exact fallback bytes
  still belong to the intended local identity inside the write transaction.

## Validation

- Exact implementation head: `58881c35ac29ee111842c74a8282d692137fdb05`.
- Base: `6e54dfbadd2b8a41090ac96bbe946d7c994781c9`.
- Devices & access Playwright: 14 passed across the dashboard and passkey
  inventory specs.
- Actual-WASM regressions: legacy protection preservation 1/1; staged genesis
  recovery cleanup guard 1/1.
- Rendered Devices & access demo: 1/1.
- Host format, web checks, focused recovery unit test, and `task loom:pre-push`
  passed.
- The latest full browser run executed 17 Devices & access and identity-recovery
  scenarios successfully. It stopped later on an unrelated Sentinel
  participant-enrollment assertion after 94 total scenarios had passed.
- Exact-head focused Rust, extension, web, browser-WASM, and repository-policy
  retries did not reach compilation. The private ARC BuildKit worker failed its
  required SeaweedFS compiler-cache health probe on three unchanged-head
  attempts.

## Remaining work

- Restore the ARC BuildKit worker's access to the SeaweedFS compiler-cache
  bucket, then rerun exact-head focused and complete PR validation.
- Wait for the exact-head Cloud review, reply to the three repaired review
  threads, and resolve them only after the targeted replies are visible.
- Pass readiness, squash merge PR 1105, and record deployment evidence.
