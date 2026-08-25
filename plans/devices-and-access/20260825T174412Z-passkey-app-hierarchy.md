---
title: Present protected apps beneath passkeys
feature: devices-and-access
issue: issues/devices-and-access/independent-local-identity-keyring.md
started_at: 2026-08-25T17:44:12Z
agent: codex
---

# Task plan

## Interpreted request

Make the Devices & access hierarchy match the user's mental model. A passkey
or PIN is the protection method a person manages. Nook apps protected by that
method appear as subordinate context. The cryptographic app key remains an
implementation detail and must not appear as a peer key in the primary list or
relationship graph.

## Requirements

- Keep passkey naming and rename controls on the passkey presentation.
- Group this browser app and other known Nook installations beneath the
  applicable protection context.
- Use the user-facing term **App** throughout list and graph copy.
- Keep the public app identifier behind an explicit advanced disclosure.
- Preserve the typed Rust/WASM app-key model and all authorization boundaries.
- Preserve PIN and companion-session states without inventing a passkey.
- Update the Devices & access product specification and durable UI guidance.
- Update English and Russian Rust-owned catalogs.
- Add or revise unit, UI-demo, and browser assertions for the hierarchy.

## Constraints and exclusions

- Do not change app-key generation, wrapping, membership, persistence, or
  recovery semantics.
- Do not imply that one passkey can unlock a remote installation when Nook has
  no such verified local evidence.
- Do not expose private keys, raw WebAuthn credentials, PRF output, or vault
  secrets.
- Do not expand cross-installation enrollment behavior in this slice.
- Keep the work in the existing owned branch and PR.

## Change budget and PR sequence

- Estimated authored changed lines: 500
- Owning modules, packages, or layers: nook-web-shared Devices & access presentation, Rust-owned locale catalogs, Playwright and unit tests, and Devices & access product authority
- Public or cross-module interfaces: None; existing Rust/WASM DTOs remain unchanged
- Delivery shape: One PR
- Current PR estimated authored changed lines: 500
- Current PR slice and acceptance evidence: Passkey-to-app hierarchy and advanced app identifier disclosure; Acceptance evidence: no peer App key object, apps nested beneath protection, raw identifier hidden by default, existing authorization flows preserved, and exact-head validation
- PR slices and acceptance evidence: Passkey-to-app hierarchy and advanced app identifier disclosure; Acceptance evidence: no peer App key object, apps nested beneath protection, raw identifier hidden by default, existing authorization flows preserved, and exact-head validation

## Initial plan

1. Reframe the inventory model around one protection row with subordinate apps.
2. Rename graph stages, nodes, relationships, and metrics from app key to app.
3. Add an advanced disclosure for the public app identifier.
4. Update product authority, durable UI guidance, translations, and tests.
5. Format, push, run hosted validation, resolve active feedback, and continue
   PR readiness.

## Completion evidence

- The default list contains no peer **App key** row.
- Each known Nook app appears beneath its protection context.
- The public app identifier is absent until the advanced disclosure opens.
- The graph reads as passkey or PIN to app to identity to vault.
- PIN and companion states remain truthful.
- Focused hosted UI checks and complete exact-head validation pass.

## Safety review

This plan contains an authored public-safe interpretation only. It contains no
raw prompt, chat transcript, secrets, private data, raw logs, local paths, or
unnecessary infrastructure detail.
