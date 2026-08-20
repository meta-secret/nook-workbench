---
title: Identity rail and selected-identity key inventory
feature: devices-and-access
issue: issues/devices-and-access/identity-access-methods-ui.md
started_at: 2026-08-20T07:14:08Z
agent: codex
---

# Identity rail and selected-identity key inventory

## Interpreted request

Make Devices & access immediately understandable as a multi-identity management
surface. Keep all local identities visible in a persistent navigator. Show the
selected identity's authenticators and app keys as a flat, precise inventory in
the main workspace.

## Requirements

- Load every persisted identity and its explicit local selection from the typed
  Rust/WASM directory.
- Let a person select an identity from the identity rail.
- Bootstrap the first labeled identity after local app-key protection.
- Show every public app-key member for the selected identity.
- Show the current browser's protector evidence next to its app key.
- Keep vault access visually separate from the key inventory.
- Preserve evidence provenance and unknown states.
- Keep technical identifiers behind progressive disclosure.
- Preserve useful empty, unprepared, locked, loading, and failure states.
- Preserve English and Russian translation parity.
- Collapse the two-column layout deliberately on narrow screens.
- Add focused browser and UI-demo evidence for the new hierarchy and actions.
- Deliver through one exact-head validated, reviewed, squash-merged PR.

## Constraints and exclusions

- Do not infer an external passkey manager from unsupported WebAuthn evidence.
- Do not expose private app keys, vault DEKs, credentials, or plaintext vault
  content to TypeScript or the DOM.
- Do not add a second component system or a new visual theme.
- Do not implement the separate cross-installation app-key enrollment protocol.
- Do not enable additional identity creation until it can provision a distinct
  protected local app key instead of reusing another identity's key.
- Do not present a fake Add key success path before that protocol exists.
- Preserve the existing graph and technical evidence as progressive disclosure
  where it remains useful.

## Change budget and PR sequence

- Estimated authored changed lines: 1,400
- Owning modules, packages, or layers: nook-auth2 identity records, nook-wasm identity-directory snapshots, shared Svelte Devices & access UI, Rust-owned translations, product specification, and focused Playwright tests
- Public or cross-module interfaces: Extend the typed NookIdentityDirectorySnapshot member projection without exposing secrets
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,400
- Current PR slice and acceptance evidence: Identity rail, selection, initial identity bootstrap, key inventory, responsive states, translations, and product contract; Acceptance evidence: Rust/WASM tests, focused web tests, UI demo, and complete exact-head validation pass
- PR slices and acceptance evidence: Identity rail, selection, initial identity bootstrap, key inventory, responsive states, translations, and product contract; Acceptance evidence: Rust/WASM tests, focused web tests, UI demo, and complete exact-head validation pass

## Initial plan

1. Extend the Rust-owned directory snapshot with safe per-member data and tests.
2. Build the identity rail and selected-identity key inventory from existing
   Nook primitives and evidence. Keep additional creation unavailable until it
   can provision an independent protected key.
3. Preserve vault access and technical inspection through progressive
   disclosure.
4. Update the product specification and EN/RU catalogs.
5. Update focused desktop and phone Playwright coverage plus the UI demo.
6. Format, review, validate the exact head remotely, resolve feedback, and
   squash-merge.

## Completion evidence

- Web tests show multiple identities, production selection, and key scoping.
- The UI demo shows the approved desktop hierarchy and responsive collapse.
- Rust and actual-WASM tests prove safe member enumeration and directory
  selection.
- The product spec, translations, generated keys, and implementation agree.
- Exact-head repository checks and readiness pass with no actionable threads.
- The PR is squash-merged and linked Workbench completion records are visible.

## Delivered boundary

- The first protection ceremony creates the initial Personal identity.
- Existing persisted identities are listed and selectable without opening a vault.
- Add identity and Add key remain visibly unavailable because the required
  independent local keyring and enrollment protocol are separate security work.

## Safety review

- This plan contains no raw prompt, chat transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
