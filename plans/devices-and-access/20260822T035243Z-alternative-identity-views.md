---
title: Make identity representations alternative views
feature: devices-and-access
issue: issues/devices-and-access/identity-access-methods-ui.md
started_at: 2026-08-22T03:52:43Z
agent: codex
---

# Make identity representations alternative views

## Interpreted request

Devices & access currently places the selected identity key inventory above its
relationship map, making two representations of the same identity read as one
long page. Replace that sequence with one explicit representation switch. The
identity rail remains persistent, while the content area shows either the
scannable key inventory or the relationship map for the same selected identity.

## Requirements

- Present the inventory and relationship map as mutually exclusive views.
- Add a clear, keyboard-accessible view switch in the selected-identity area.
- Keep one selected identity and its relevant interaction state while switching.
- Preserve the existing unavailable-evidence state for identities owned by
  another installation.
- Use localized labels and Nook's existing restrained control language.
- Update the product contract and browser coverage for the alternative-view
  behavior.
- Deliver through a reviewed pull request with exact-head hosted validation.

## Constraints and exclusions

- Do not change identity membership, app-key provisioning, cryptography, or
  Rust/WASM projections.
- Do not enable Add identity or Add key.
- Keep the persistent identity rail and existing graph internals intact.
- No new dependency is needed.

## Change budget and PR sequence

- Estimated authored changed lines: 250
- Owning modules, packages, or layers: nook-web-shared Devices & access Svelte
  presentation, locale catalogs, Devices & access product specification, and
  nook-web-app Playwright coverage.
- Public or cross-module interfaces: No new cross-module interface; existing
  Rust/WASM DTOs remain unchanged.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 250
- Current PR slice and acceptance evidence: Alternative inventory and relationship-map views; Acceptance evidence: focused UI assertions, demo contract, complete exact-head validation, and readiness audit
- PR slices and acceptance evidence: Alternative inventory and relationship-map views; Acceptance evidence: focused UI assertions, demo contract, complete exact-head validation, and readiness audit

## Initial plan

1. Model the two representation modes as typed Svelte presentation state.
2. Place one localized segmented view control above the selected-identity body.
3. Render only the inventory or only the relationship map and preserve identity
   selection across mode changes.
4. Update the Devices & access specification and focused Playwright/demo
   expectations.
5. Format, review, push, run exact-head GitHub Actions validation, resolve
   findings, and squash merge.

## Completion evidence

- The selected identity initially shows one representation and exposes an
  accessible switch to the other.
- Browser assertions prove the inventory and relationship map never render at
  the same time, including after switching back.
- The UI demo and complete repository-owned PR checks pass on the exact head.
- The PR is squash-merged and linked completion records are published.

## Safety review

This record contains a synthesized product interpretation only. It contains no
raw prompt, transcript, secrets, private data, raw logs, local paths, or
unnecessary infrastructure details.
