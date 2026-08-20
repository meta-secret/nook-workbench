---
title: Verify Access layout and protector-list contracts
feature: devices-access
issue: issues/devices-and-access/identity-access-methods-ui.md
started_at: 2026-08-20T04:34:10Z
agent: codex
---

# Verify Access layout and protector-list contracts

## Interpreted request

Strengthen automated browser evidence for the recently delivered Devices & access layout. The regression suite must prove that Access receives the wider application canvas, exposes one compact Identity/Vault navigator above the main view without repeating the active identity, and keeps the flat List focused on the local unlock protector while retaining the app key in Graph and evidence inspection.

## Requirements

- Assert the authenticated Access route uses materially more horizontal canvas than the ordinary secrets workspace at a normal desktop width.
- Assert Identity and Vault are exposed by one perspective control and that Identity view does not render a duplicate current-identity browse entity.
- Assert Vault view still exposes selectable vault entries because multiple vaults are valid.
- Assert a passkey-backed identity renders one passkey card and no sibling app-key card in List.
- Assert switching back to Graph restores the app-key relationship node.
- Assert app-key evidence remains available through the existing inspect interaction.
- Keep the UI demo readable while adding authoritative assertions to the regular browser e2e suite.
- Deliver through hosted exact-head validation and merge readiness.

## Constraints and exclusions

- Test-only change unless verification reveals an actual product regression.
- No cryptographic, authentication, persistence, Rust, WASM, localization, or product-copy changes.
- Do not weaken the progressive-disclosure rule: app-key facts remain in Graph and inspect even though the flat List omits the 1:1 sibling card.
- Do not use screenshot pixel baselines for responsive structure that can be asserted semantically and geometrically.
- Existing unrelated vault-switcher work remains read-only.

## Change budget and PR sequence

- Estimated authored changed lines: 90
- Owning modules, packages, or layers: nook-web-app Playwright e2e and UI demo coverage
- Public or cross-module interfaces: none
- Delivery shape: One PR
- Current PR estimated authored changed lines: 90
- Current PR slice and acceptance evidence: Add semantic and geometric regression assertions for Access shell width, navigation deduplication, protector-only List, Graph restoration, and app-key inspection; Acceptance evidence: hosted web e2e, UI demo, complete exact-head PR validation
- PR slices and acceptance evidence:
  Add semantic and geometric regression assertions for Access shell width, navigation deduplication, protector-only List, Graph restoration, and app-key inspection; Acceptance evidence: hosted web e2e, UI demo, complete exact-head PR validation

## Initial plan

1. Rebase the task onto current origin/main and inventory existing Access tests and stable selectors.
2. Add focused desktop geometry and navigation-uniqueness assertions without coupling to incidental styling.
3. Strengthen List/Graph assertions to cover exact card kinds and retained app-key inspection.
4. Update the demo only where the human-readable sequence benefits from showing the verified behavior.
5. Run Loom pre-push, local advisory review, hosted exact-head validation, readiness, and squash merge.

## Completion evidence

- Browser e2e proves Access uses the wide shell rather than the secrets-width shell.
- Browser e2e proves there is one Identity/Vault perspective control and no duplicate identity entity row.
- Browser e2e proves List contains exactly the passkey protector and excludes app key.
- Browser e2e proves Graph and the app-key inspector still expose app-key facts.
- The exact PR head passes repository-owned validation and readiness.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
- The test plan observes only non-secret presentation state already exposed by the product.
