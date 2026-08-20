---
title: Verify Access layout and protector-list contracts
feature: devices-access
issue: issues/devices-and-access/identity-access-methods-ui.md
plan: plans/devices-access/2026-08-20T043410Z-layout-regression-e2e.md
nook_pr: 1061
status: completed
started_at: 2026-08-20T04:34:10Z
finished_at: 2026-08-20T05:02:50Z
agent: codex
---

# Verify Access layout and protector-list contracts

## Outcome

Verified that the delivered Devices & access UI satisfies the requested layout
and key-projection behavior, and locked those contracts into regular browser
e2e and the authoritative UI demo.

## Progress

- Added a desktop regression test proving Access expands the application shell
  by more than 200 pixels relative to the ordinary vault workspace.
- Proved one accessible Identity/Vault browse control sits above the content
  and that Identity perspective does not repeat the active identity as a list.
- Proved List renders exactly one passkey protector card and no app-key card.
- Proved Graph and the inspection panel retain the app-key relationship.
- Proved Vault perspective still exposes selectable vault entries.
- Strengthened the UI demo with the same navigation and key-card invariants.

## Implementation problems

- The standard non-Main-fix validation intentionally skips full browser e2e.
  A focused hosted web:e2e run supplied the missing execution evidence and
  passed without a code-fix loop.

## Decisions

- Used semantic roles, stable test identifiers, and geometry instead of pixel
  screenshots so the tests enforce behavior without coupling to visual polish.
- Kept app-key facts in Graph and inspection while enforcing the passkey-only
  flat List, preserving progressive disclosure.
- Left the broader independent identity-management issue ready because this
  test-only slice does not complete its remaining acceptance criteria.

## Validation

- Loom pre-push passed formatting and the UI demo contract.
- Local advisory review and exact-head Codex Cloud review found no issues.
- Complete exact-head PR validation passed:
  https://github.com/meta-secret/nook/actions/runs/32333032272
- Focused hosted web:e2e passed in 13m04s:
  https://github.com/meta-secret/nook/actions/runs/32333212901
- Exact-head readiness passed with a current base, successful Pages preview,
  mergeable state, and zero unresolved threads.
- PR 1061 squash-merged:
  https://github.com/meta-secret/nook/pull/1061

## Remaining work

- The broader independent identity-management issue remains ready; no remaining
  work exists for this layout-regression test slice.
