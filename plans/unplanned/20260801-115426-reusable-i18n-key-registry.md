---
title: Replace repeated translation-key literals with a reusable registry
feature: unplanned
issue: issues/unplanned/rust-owned-vault-sync-state.md
started_at: 2026-08-01T11:54:26Z
agent: codex
---

# Replace repeated translation-key literals with a reusable registry

## Interpreted request

Extend the active Rust-first web refactor so translation lookup keys are no
longer copied as string literals throughout TypeScript, Svelte, JavaScript, and
tests. Keep the Rust locale catalogs canonical, generate a reusable web key
registry from that source of truth, and classify any independent frontend-only
catalogs before migrating their consumers to constants.

## Requirements

- Inventory literal translation-key arguments across the product, extension,
  shared UI, landing page, tests, build helpers, and research surfaces.
- Generate reusable TypeScript constants from the canonical Rust-owned locale
  catalogs instead of maintaining a second handwritten list.
- Type the shared and extension translation APIs against the generated key
  values while preserving dynamic-key boundaries that are genuinely computed.
- Give independent frontend-only catalogs their own reusable constant registry
  rather than repeating their keys at call sites.
- Replace every in-scope literal lookup call and fixture assertion with the
  appropriate constant, including the engine-loading example.
- Add syntax-aware enforcement and generation/parity coverage so copied key
  literals and stale registries cannot return.
- Update PR #900 and keep it open and unmerged until explicit authorization.

## Constraints and exclusions

- Translation text, locale selection behavior, replacement semantics, and
  user-visible design must not change.
- External browser APIs with their own message identifiers remain boundary
  contracts, but their identifiers must still be centralized when authored by
  Nook.
- Generated sources must be deterministic and clearly marked; authored source
  files remain subject to the repository size and architecture rules.
- Existing branch work and unrelated user changes must remain intact.

## Initial plan

1. Build a complete call-site and catalog inventory and classify canonical
   Rust-catalog keys, frontend-only catalog keys, dynamic keys, and external
   message identifiers.
2. Add deterministic key-registry generation from the Rust English catalog and
   wire it into the existing WASM/web build boundary.
3. Add focused constant registries for intentional frontend-only catalogs and
   migrate all literal lookup consumers across authored product code and tests.
4. Strengthen translation API typing plus preflight/generation tests that reject
   new literal lookup keys and catalog drift.
5. Run host formatting and the UI demo contract, update PR #900, and execute
   focused plus complete exact-head GitHub Actions validation.
6. Inspect existing feedback and finish at a green, current, unmerged readiness
   boundary.

## Completion evidence

- Authored product and test code contains no repeated literal Nook translation
  key at a translation lookup call.
- The shared key registry is deterministically derived from the Rust-owned
  catalog and covers both supported locales.
- Intentional frontend-only catalogs use reusable constants with parity tests.
- Exact-head repository checks and `task pr:ready PR=900` pass while the PR
  remains open.

## Safety review

- This plan contains no raw prompt, chat transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
