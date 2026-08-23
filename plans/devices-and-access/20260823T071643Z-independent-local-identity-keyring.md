---
title: Create independently protected local identities from Devices and access
feature: devices-and-access
issue: issues/devices-and-access/independent-local-identity-keyring.md
started_at: 2026-08-23T07:16:43Z
agent: codex
---

# Task plan

## Interpreted request

Turn Devices & access into a focused multi-identity manager. The persistent
identity rail owns the primary Add identity action. Invoking it starts explicit
local protection for a new identity, commits an independently generated app key
only after protection succeeds, and then selects the new identity. The main
surface should stop displaying diagnostic WebAuthn evidence that does not help
the person manage access. A passkey's user-supplied label belongs directly to
that passkey row as an inline rename operation.

## Requirements

- Make Add identity enabled whenever this installation supports an explicit
  passkey or PIN protection ceremony.
- Reuse the existing protection widget as the Add identity flow instead of
  keeping browser preparation at the bottom of the dashboard.
- Generate a distinct app key and event-signing key for every new identity.
- Persist only wrapped private material and non-secret public membership data.
- Commit identity creation atomically after successful protection, and leave no
  orphan directory row after cancellation or failure.
- Allow creation, selection, lock, reload, and unlock of multiple identities.
- Keep passkey creation explicit; cancellation must not be treated as absence.
- Move user passkey naming into an inline rename control on its passkey row.
- Remove the legacy Inspect access evidence and browser-report detail panels
  from the primary user experience.
- Update English and Russian Rust-owned catalogs and the owning product spec.
- Add behavior-focused Rust/WASM coverage plus focused Playwright UI-demo and
  browser E2E coverage.
- Deliver through one focused PR, exact-head review, hosted validation, and
  Workbench completion records.

## Constraints and exclusions

- Do not duplicate the current unlocked app key across identities.
- Do not expose private keys, WebAuthn PRF output, PIN material, vault DEKs, or
  raw credential identifiers through WASM, DOM, logs, or Workbench records.
- Selecting an identity for browsing must remain distinct from opening a vault.
- Cross-installation app-key enrollment remains owned by its existing focused
  issue and is not expanded here.
- Replicated identity control is not introduced in this slice.
- No new frontend state-management or component-system dependency is needed.
- The isolated module-expert runtime is unavailable in this desktop session;
  the delivery owner will apply the registered module contract directly and
  validate provider contracts before consumers.

## Change budget and PR sequence

- Estimated authored changed lines: 3,800
- Owning modules, packages, or layers: nook-core identity/key domain, nook-wasm protection persistence and bindings, nook-web-shared Devices and access UI and state controller, Rust-owned locale catalogs, product spec, and Playwright suites
- Public or cross-module interfaces: typed Rust/WASM operations for creating, selecting, protecting, and unlocking one local identity keyring, plus generated TypeScript bindings consumed by nook-web-shared
- Delivery shape: One PR
- Current PR estimated authored changed lines: 3,800
- Current PR slice and acceptance evidence: Independent local identity provisioning through the Add identity flow; Acceptance evidence: Rust/WASM behavior tests, UI-demo interaction proof, browser E2E, and exact-head PR validation pass
- PR slices and acceptance evidence: Independent local identity provisioning through the Add identity flow; Acceptance evidence: Rust/WASM behavior tests, UI-demo interaction proof, browser E2E, and exact-head PR validation pass

## Initial plan

1. Freeze the current core, protection-storage, WASM, and web contracts and
   identify the minimum independent-keyring change.
2. Implement Rust-owned creation, wrapped-key persistence, selection, reload,
   unlock, and rollback behavior with provider tests.
3. Expose the minimum typed WASM ceremony/storage operations and validate the
   generated consumer contract.
4. Refactor Devices & access around Add identity, inline passkey rename, and a
   simplified selected-identity view.
5. Update product authority, translations, demos, and browser scenarios.
6. Format, review, push, run focused hosted proofs and full exact-head
   validation, resolve feedback, merge, and publish completion evidence.

## Completion evidence

- Two identities created in the same browser have different public app keys.
- A cancelled or failed ceremony does not add an identity.
- After lock/reload, each identity can be selected and explicitly unlocked with
  its own persisted protection record.
- Rendered desktop and mobile tests show Add identity as the clear primary
  action and the setup widget only after invocation.
- Rendered tests show passkey rename in the passkey row and no legacy evidence
  or browser-report sections.
- Focused hosted Rust, WASM, web, UI-demo, and browser E2E checks pass.
- Complete validation and exact-head review pass before squash merge.

## Safety review

This plan contains an authored public-safe interpretation only. It contains no
raw prompt, chat transcript, secrets, private data, raw logs, local paths, or
unnecessary infrastructure details.
