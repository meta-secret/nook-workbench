---
title: Remove the impossible Add app action
feature: devices-and-access
issue: issues/devices-and-access/identity-access-methods-ui.md
started_at: 2026-08-29T00:35:21Z
agent: codex
---

# Remove the impossible Add app action

## Interpreted request

Devices & access currently ends the selected-identity app inventory with a
disabled Add app action and copy explaining that enrollment must begin in a
different Nook installation. Remove both because this screen cannot initiate
that workflow and the placeholder advertises an unavailable action.

## Requirements

- Remove the disabled Add app control and its helper text from the identity
  inventory.
- Preserve the read-only list of apps already connected to the identity.
- Keep enrollment initiated by another Nook installation or extension; do not
  add a replacement local enrollment action.
- Update the owning Devices & access product contract so it no longer requires
  the placeholder.
- Remove translations and generated translation keys that become unused while
  retaining English and Russian catalog parity.
- Add or update focused web evidence proving that the inventory does not expose
  an Add app action.
- Deliver through an exact-head reviewed pull request and squash merge.

## Constraints and exclusions

- Do not change identity membership, vault creation, enrollment, cryptography,
  storage, or Rust/WASM behavior.
- Do not change Add identity behavior or the display of already enrolled apps.
- Do not introduce visible inline English or authored nullable values.
- No new dependency or cross-module interface is required.

## Change budget and PR sequence

- Estimated authored changed lines: 35
- Owning modules, packages, or layers: nook-web-shared Devices & access presentation, nook-app-common locale catalogs, generated locale key surfaces, Devices & access product specification, and focused nook-web-app tests
- Ownership units:
1. Capability: Remove the impossible Add app presentation while preserving the existing enrollment model; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused web assertions, locale-generation verification, product-contract review, complete exact-head validation, and readiness audit
- Public or cross-module interfaces: None
- Delivery shape: One PR
- Current PR estimated authored changed lines: 35
- Current PR slice and acceptance evidence: Remove the disabled Add app placeholder and align its owned contract and catalogs; Acceptance evidence: focused web assertions, translation parity and generation checks, exact-head GitHub validation, and readiness audit
- PR slices and acceptance evidence: 1. Remove the disabled Add app placeholder and align its owned contract and catalogs; Acceptance evidence: focused web assertions, translation parity and generation checks, exact-head GitHub validation, and readiness audit

## Initial plan

1. Remove the disabled control and helper copy from the selected-identity key
   inventory without changing connected-app rendering.
2. Delete now-unused locale entries and regenerate typed translation keys using
   the repository-owned generator.
3. Update the Devices & access contract and focused web assertions.
4. Run focused checks, pre-push hygiene, exact-head review and validation, then
   squash-merge when readiness succeeds.

## Completion evidence

- Devices & access lists connected apps without rendering an Add app action or
  unavailable-action explanation.
- The product contract describes enrollment as external to this surface.
- Locale catalogs and generated bindings remain consistent and focused tests
  pass.
- Repository-owned PR checks, review stabilization, and exact-head readiness
  pass before squash merge.

## Safety review

This record contains a synthesized product interpretation only. It contains no
raw prompt, transcript, secrets, private data, raw logs, local paths, or
unnecessary infrastructure details.
