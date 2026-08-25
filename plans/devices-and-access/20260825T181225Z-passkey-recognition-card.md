---
title: Make passkey cards recognizable at a glance
feature: devices-and-access
issue: issues/devices-and-access/independent-local-identity-keyring.md
started_at: 2026-08-25T18:12:25Z
agent: codex
---

# Make passkey cards recognizable at a glance

## Interpreted request

Redesign the passkey summary in Devices & access so it identifies the actual
credential instead of showing a truncated protection-mode label. The same
recognition information must remain legible in list, graph, desktop, and narrow
mobile presentations.

## Requirements

- Lead with the user-defined passkey name or an explicit unnamed state.
- Show the safe short credential fingerprint.
- Show the known passkey keeper or user-provided provider label.
- Show creation and last-use evidence when available.
- Use explicit unknown or legacy states when evidence is unavailable.
- Keep apps subordinate to the passkey and app IDs behind Advanced.
- Preserve English and Russian localization parity.
- Cover the content hierarchy and narrow layout in focused browser assertions
  and the rendered UI demo.
- Update the owning product specification with the recognition-card contract.

## Constraints and exclusions

- Do not claim that WebAuthn can enumerate external password managers.
- Do not infer a keeper or physical storage location from weak evidence.
- Do not restore the removed browser-diagnostics panel.
- Do not expose private key material, user handles, or raw authenticator data.
- Keep cryptographic and evidence authority in Rust and the typed WASM model.
- Continue in PR 1105 because this is a focused refinement of its Devices &
  access hierarchy.

## Change budget and PR sequence

- Estimated authored changed lines: 350
- Owning modules, packages, or layers: Devices and access web presentation,
  shared localization, focused browser coverage, and its product specification.
- Public or cross-module interfaces: Existing NookDeviceAccessSnapshot getters
  only. No Rust or WASM contract expansion is planned.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 350
- Current PR slice and acceptance evidence: Recognizable passkey summaries in list and graph views; Acceptance evidence: phone and desktop browser assertions.
- PR slices and acceptance evidence:
  1. Recognizable passkey summaries in list and graph views; Acceptance evidence: phone and desktop browser assertions.

## Initial plan

1. Carry the existing safe passkey evidence through the dashboard projection.
2. Build one presentation summary shared by list and graph representations.
3. Redesign the passkey card for readable name and compact recognition facts.
4. Update localization, the product specification, tests, and UI demo evidence.
5. Format, push, validate the exact head, resolve feedback, and merge when ready.

## Completion evidence

- The passkey name is not ellipsized in the graph card.
- The card visibly exposes credential ID, keeper or provider, created time, and
  last-used time with truthful fallback states.
- List and graph use the same underlying summary.
- Focused Playwright and UI demo assertions pass on the pushed exact head.
- Repository format, Cortex, validation, review, and readiness gates pass before
  merge.

## Safety review

- This plan contains no copied conversation, sensitive value, personal record,
  command output, machine path, or unnecessary infrastructure detail.
