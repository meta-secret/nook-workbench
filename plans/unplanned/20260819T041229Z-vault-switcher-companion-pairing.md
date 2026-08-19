---
title: Show every local vault and companion pairing in the header menu
feature: unplanned
issue: none
started_at: 2026-08-19T04:12:29Z
agent: cursor
---

# Task plan

## Interpreted request

Restore a usable local-vault menu in the Simple Vault header. Every on-device vault must appear. The companion-linked vault must be labeled. Pairing a different unlocked vault must be available from that menu and from the companion home.

## Requirements

- Opening the header control must render every local vault, not only the active label.
- The menu must escape header and shell overflow clipping so rows stay inside the viewport.
- When the companion already holds a grant, that vault must show an explicit connected badge in the menu and in Admin.
- When the unlocked vault is not the connected one, or the companion is installed but unpaired, the menu must offer pairing for the unlocked vault.
- The companion home must offer pairing another vault after an existing connection.
- Pairing still uses the existing `/extension-connect` consent and grant import path.
- Visible strings stay in shared English and Russian catalogs.
- Playwright must prove the menu is in the viewport with multiple vaults, the connected badge, and the pairing action.

## Constraints and exclusions

- Do not change grant cryptography, device approval, or event-log import.
- Do not build a second vault browser inside the extension popup.
- Sentinel remains unpaired with the companion.
- Domain pairing policy stays in existing Rust and WASM helpers.
- No heavy local product test or image build.

## Change budget and PR sequence

- Estimated authored changed lines: 650
- Owning modules, packages, or layers: nook-web-shared vault header switcher, Simple Vault demo coverage, and the companion popup home
- Public or cross-module interfaces: presentation-only companion-link mapping for the switcher; existing open-companion pair intent reused
- Delivery shape: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Portaled multi-vault header menu with connected badge and pair action, plus companion pair-another control; Acceptance evidence: unit mapping tests, updated multi-vault e2e viewport assertions, and a focused UI demo
- PR slices and acceptance evidence: Portaled multi-vault header menu with connected badge and pair action, plus companion pair-another control; Acceptance evidence: unit mapping tests, updated multi-vault e2e viewport assertions, and a focused UI demo

## Initial plan

1. Publish this start snapshot and branch from origin/main.
2. Portal the header menu to the document body and position it from the trigger.
3. Map companion setup status onto per-vault connected and pairable presentation states.
4. Render the connected badge and pair action in the menu and Admin list.
5. Add a pair-another control on the connected companion home.
6. Add translations, unit tests, demo coverage, and a short Cortex note.
7. Host-format, review, push, and run exact-head validation through merge.

## Completion evidence

- The header menu shows every local vault without clipping.
- The companion-linked vault is labeled in the menu.
- An unlocked unpaired or other vault can start pairing.
- Hosted checks for the exact head are green and the PR is squash-merged.

## Safety review

- The record contains only public product intent.
- No secrets, credentials, private user data, transcripts, or raw logs are present.
