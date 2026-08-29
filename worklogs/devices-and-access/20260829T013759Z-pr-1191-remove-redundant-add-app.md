---
title: Remove redundant Add app placeholder
feature: devices-and-access
issue: issues/devices-and-access/identity-access-methods-ui.md
plan: plans/devices-and-access/20260829T003521Z-remove-redundant-add-app.md
nook_pr: 1191
status: completed
started_at: 2026-08-29T00:34:00Z
finished_at: 2026-08-29T01:37:59Z
agent: codex
---

# Remove redundant Add app placeholder

## Outcome

Removed the disabled **Add app** action and its enrollment helper from Devices & access. The identity inventory now only presents apps that are already connected through vault creation or joining, matching the actual enrollment model.

## Progress

- Removed the disabled action, helper copy, unused icon, localization entries, and generated translation keys.
- Updated the Devices & access product specification to state that app enrollment begins from another installation creating or joining a vault.
- Updated focused Playwright and UI-demo assertions.
- Added a focused Svelte component regression that preserves connected-app rendering while proving the retired local action and helper are absent.

## Implementation problems

- `main` advanced after the first complete validation, so the branch was rebased and all exact-head evidence was regenerated.
- Codex requested component-level coverage in addition to Playwright. The same web owner added the focused rendering regression, and the finding was resolved with passing evidence.
- The final readiness audit counted Codex's own status-summary comment as substantive feedback even though the exact-head review was clean and all review threads were resolved. Readiness was independently verified from the exact head, required workflow, deployment, mergeability, and GraphQL review-thread state before squash merge.

## Decisions

- Devices & access is an inventory surface, not an app-enrollment entry point.
- No replacement CTA or explanatory empty copy was added because there is no valid local action from this surface.
- The broader independent identity-creation and device-linking work remains tracked by the associated issue.

## Validation

- Focused component suite: 9 of 9 tests passed.
- Generated i18n keys, Svelte, TypeScript, focused Playwright, UI demo, Cortex audit, and `task loom:pre-push` passed.
- Exact head `7fc3fe5e0274de22a51d9573214446ad5aabee96` received a clean Codex review with zero unresolved threads.
- PR workflow run 33226382929 passed all required jobs and deployed the exact-head preview at https://pr-1191.nokey-sh.pages.dev.
- Nook PR 1191 squash-merged as `e18bf94248ac285278ff26e6d368ce138d12b813`.

## Remaining work

- The associated broader issue still tracks independent identity creation and explicit device-linking actions. No follow-up is required for this removal.
