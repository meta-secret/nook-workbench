---
title: Adopt Identity Bridge in production
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
started_at: 2026-08-04T10:36:29Z
agent: codex
completed_at: 2026-08-04T17:51:51Z
---

# Task plan

## Interpreted request

Replace the production Devices & access experience with the accepted Identity
Bridge interaction and visual hierarchy. Integrate it with live Nook identity,
device, and vault state, preserve every existing authorized action, and deliver
the complete production adoption through a new pull request.

## Requirements

- Preserve the research sketch's identity menu, identity-first and vault-first
  perspectives, device-evidence hierarchy, explicit grant relationships, and
  deliberate responsive composition.
- Replace fixtures with one typed projection of live Rust/WASM state and make
  uncertainty, stale evidence, and unavailable relationships explicit.
- Keep existing preparation, unlock, provider-label, enrolled-device,
  backup-password, vault-selection, and management workflows functional.
- Use the shared Nook Svelte primitives and semantic tokens; localize all
  visible and accessible copy in both catalogs.
- Provide coherent loading, empty, locked, unlocked, error, mobile, compact
  desktop, light, dark, keyboard, and reduced-motion states.
- Add focused Rust/WASM tests for any changed domain projection and Playwright
  coverage for the production user flows.
- Publish a new PR, run exact-head hosted validation, resolve all actionable
  feedback, and squash-merge when ready.

## Constraints and exclusions

- Research fixtures, fixed identifiers, fake providers, illustrative grants,
  and research-only controls must not enter production.
- Svelte owns presentation and browser interaction only; portable identity,
  authorization, and validation policy remains in Rust/WASM.
- No new UI framework or React dependency is allowed. A graph dependency may be
  reused only if it integrates cleanly with Svelte, accessibility, bundle, and
  product-state constraints.
- Private keys, credential bytes, secrets, and unsupported provider claims must
  never enter UI state, DOM metadata, logs, or analytics.

## Initial plan

1. Inventory the production dashboard, its state controller, Rust/WASM
   projection, translations, navigation, tests, and every existing action.
2. Compare the accepted Identity Bridge components with shipping primitives and
   define the live identity/vault graph model, explicit empty states, and
   responsive interaction contract.
3. Implement the production components and any narrowly required typed domain
   projection, preserving all lifecycle and management behavior.
4. Add focused domain, unit, and Playwright UI-demo coverage; visually inspect
   representative states and iterate at phone, compact desktop, and desktop
   widths in both themes.
5. Apply formatting and the UI demo contract, open the PR, run hosted focused
   and complete validation, address feedback, and merge the exact ready head.
6. Publish the linked Workbench completion record and delivery statistics.

## Completion evidence

- The permanent access destination exposes a production Identity Bridge driven
  exclusively by live Nook state across no-vault, locked, and unlocked
  lifecycles.
- Existing access and recovery actions remain covered and reachable, while the
  identity/device/vault relationships are understandable in both browsing
  perspectives and responsive layouts.
- The new PR passes focused browser/domain evidence, the UI demo contract, all
  repository-owned exact-head checks, and is squash-merged.

## Outcome

Completed in [PR 914](https://github.com/meta-secret/nook/pull/914), squash
merged as `50e69d0f9ff4d97f14e6590a0f291318ba1adebf`. The permanent page now uses a
single live relationship projection for identity-first and vault-first
browsing, with explicit device-key evidence, paired-device attribution, stable
vault identifiers, and the existing setup, unlock, recovery, enrollment, and
management controls preserved. Formatting, generated localization parity,
focused model checks, Svelte checks, the sealed UI demo, exact-head hosted web
checks, browser coverage, architecture checks, Rust/WASM validation, and review
thread resolution supplied completion evidence.

## Safety review

- This record contains only public development scope and decisions. It contains
  no raw prompt or transcript, secret material, vault contents, credentials,
  local paths, raw logs, or private infrastructure details.
