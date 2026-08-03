---
title: Adopt the chain-strength Devices and access experience
feature: devices-and-access
issue: issues/devices-and-access/devices-access-dashboard.md
started_at: 2026-08-03T09:06:19Z
agent: codex
---

# Task plan

## Interpreted request

Replace the shipping Devices & access dashboard's presentation and interaction
model with the stronger relationship-first concept proven in the chain-strength
research experiment. Preserve Nook's current restrained theme and production
data contracts while adapting experimental copy, controls, and example-only
states into truthful product behavior.

## Requirements

- Carry the experiment's vault-led access-chain hierarchy, strength cues,
  selection behavior, and responsive scanning model into the production Svelte
  surface.
- Preserve Nook's semantic color tokens, light and dark themes, shared UI
  primitives, accessibility, navigation, and existing no-vault, locked, and
  unlocked behavior.
- Keep product truth intact: distinguish browser device identity, access grants,
  passkey observations, and vaults; never infer a passkey provider or expose raw
  key material as the primary user model.
- Put all visible and accessible copy in the shared Rust-owned English and
  Russian catalogs, and keep presentation state explicit and typed.
- Update focused unit, browser-flow, and UI-demo coverage for the replacement
  experience.
- Format locally, validate through the repository's GitHub-hosted workflow,
  resolve actionable feedback, and squash-merge the resulting pull request.

## Constraints and exclusions

- The chain-strength experiment is design evidence, not production source to
  copy verbatim; its mock graph switcher, fixed data, hard-coded palette, and
  research navigation remain excluded.
- This task does not change vault authorization, encryption, WebAuthn policy,
  persistence schemas, or Rust/WASM domain contracts unless a concrete UI need
  proves a narrowly scoped contract correction necessary.
- Existing product colors and theme mechanics remain authoritative.

## Initial plan

1. Compare the current production dashboard, its typed state and tests with the
   complete chain-strength experiment and incumbent theme primitives.
2. Map the experiment's visual grammar onto real dashboard states and localized
   product facts, then implement the smallest cohesive component refactor.
3. Extend focused tests and UI-demo evidence across no-vault, locked, unlocked,
   mobile, desktop, light, dark, selection, and recovery-relevant states.
4. Apply formatting and the UI demo contract, publish the pull request, run
   focused and complete hosted validation, address feedback, and merge when the
   exact head is ready.
5. Publish the linked Workbench completion record and delivery statistics.

## Completion evidence

- Production Devices & access renders the relationship-first chain-strength UX
  from real data in both themes and representative responsive widths.
- Focused automated coverage demonstrates the changed interactions and core
  lifecycle states without weakening the existing domain/security boundary.
- The exact pull-request head passes repository readiness checks and is
  squash-merged, with its Workbench issue, worklog, and statistics updated.

## Safety review

- This record contains a public-safe interpretation only. It contains no raw
  prompt, transcript, secrets, private data, raw logs, local paths, or
  unnecessary infrastructure detail.
