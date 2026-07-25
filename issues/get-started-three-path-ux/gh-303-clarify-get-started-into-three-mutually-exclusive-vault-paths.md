---
title: "Clarify Get started into three mutually exclusive vault paths"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T08:03:34Z
updated_at: 2026-07-10T09:10:55Z
source_issues: ["https://github.com/meta-secret/nook/issues/303"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:vault-architecture-modes","feature:get-started-three-paths"]
legacy_state_reason: "COMPLETED"
---

# Clarify Get started into three mutually exclusive vault paths

## Imported context

This record was imported from [Nook GitHub issue #303](https://github.com/meta-secret/nook/issues/303)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Feature milestone: [Feature: Get started three-path UX](https://github.com/meta-secret/nook/milestone/3)

Follow-up to the vault architecture modes work (#275 / #283 / #291). The current Get started screen mixes create and join: vault type is a dropdown, while “Joining a Nexus setup?” and “Connect sync provider” sit as footer links. That makes the three real intents hard to discover.

## Problem

Users need three **mutually exclusive** first-run intents:

1. **Create Simple vault** — name it and create immediately with this device’s key envelope.
2. **Create Nexus vault** — start initialization: choose participants `N` and threshold `T`, wait for all participant public keys, then atomically create the empty vault and deliver encrypted shares.
3. **Join Nexus vault** (reverse onboarding) — a device that is not the initiator provides its public keys for an in-progress Nexus genesis.

Importing an existing vault via sync provider remains a secondary “already have a vault” action, not one of the three create/join intents.

## Desired UX

### Top-level chooser

Replace the vault-type dropdown + footer join toggle with three clear path cards/buttons. Selecting one path hides the others until Back.

### Create Simple

1. Choose path → vault name → Create.
2. Sync providers stay optional and post-creation (Settings).

### Create Nexus

1. Choose path → vault name + `N` / `T`.
2. Start setup → waiting state for all configured public keys (initiator request QR + paste participant responses).
3. When the roster is complete → finalize empty vault → deliver encrypted shares to participants.
4. No sync provider required for genesis.

### Join Nexus

1. Choose path → paste initiator request → generate this device’s signed response QR/payload.
2. Keep the join surface simple: the primary outcome is the participant response QR.
3. After genesis, receiving the encrypted share (Round 2) can be a secondary step on the same path.
4. Later, the owner onboards Device B into the existing vault with the **standard** Onboard QR + sync provider flow (not part of genesis join).

## Scope

- Redesign `LoginCreateVaultChooser.svelte` information architecture.
- Update localized copy (`en.json` / `ru.json`).
- Update `.cortex` design docs (`vault-architecture-modes.md`, `nexus-genesis.md`) and `.cursor` agent notes.
- Update Playwright coverage for the three paths (`vault-architecture-modes.spec.ts`, `nexus-unlock-ceremony.spec.ts`, helpers).

## Out of scope

- Changing Rust/WASM Nexus genesis cryptography or request/response payload formats.
- Joiner-first public-key QR that does not bind to an initiator request (protocol change).
- Security-console visual redesign (#295).

## Acceptance criteria

- [ ] Get started shows three mutually exclusive paths: Create Simple, Create Nexus, Join Nexus.
- [ ] Create Simple still creates and opens a local vault immediately.
- [ ] Create Nexus still collects `N`/`T`, waits for all public keys, then finalizes an empty vault.
- [ ] Join Nexus is a first-class path whose primary UI is generate/show the participant response QR.
- [ ] Connect sync provider remains available as import/open-existing, not mixed into vault-type selection.
- [ ] Docs and locales match the three-path model.
- [ ] E2E smoke covers choosing each path; existing Nexus ceremony coverage still passes.

## Anchors

- `nook-app/nook-web/nook-web-app/src/lib/components/login/LoginCreateVaultChooser.svelte`
- `.cortex/design-docs/vault-architecture-modes.md`
- `.cortex/design-docs/nexus-genesis.md`
- `nook-app/nook-core/locales/en.json`
- `nook-app/nook-web/nook-web-app/e2e/vault-architecture-modes.spec.ts`
- `nook-app/nook-web/nook-web-app/e2e/nexus-unlock-ceremony.spec.ts`

## Historical comments

### cypherkitty — 2026-07-10T08:05:51Z

Implementation started on branch `feat/get-started-three-paths`.

UX direction locked in:
- Get started shows three mutually exclusive path cards: Create Simple, Create Nexus, Join Nexus
- Connect sync provider remains a secondary “Already have a vault?” action
- Join path focuses on generating the participant response QR; share receive stays as a secondary post-genesis step

Docs updated in `.cortex/design-docs/vault-architecture-modes.md`, `.cortex/design-docs/nexus-genesis.md`, and `.cursor/rules.md`.

### cypherkitty — 2026-07-10T08:10:58Z

PR opened: https://github.com/meta-secret/nook/pull/304
