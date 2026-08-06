---
title: Restore Access dependency graph after passkey vault create
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
started_at: 2026-08-06T05:25:00Z
agent: cursor
---

# Task plan

## Interpreted request

After creating a vault with passkey protection, the Access destination must
again show a dependency graph for the access chain: protection, the protected
device key, and verified vault access. Passkey evidence stays available in the
detail list. Local browser identity state remains a separate subject and must
not be drawn as membership created by the passkey.

## Requirements

- Restore the production Identity Bridge canvas so a passkey-protected vault
  setup shows protection, device-key, and verified vault nodes with edges.
- Keep local identity state visually independent from those access-chain edges.
- Preserve Protection and Vault access detail panels, including passkey metadata.
- Cover the create-vault-with-passkey then open Access journey in Playwright.
- Keep English and Russian catalogs in parity.
- Update the Devices & access product contract so it no longer forbids the
  truthful protection-to-device-to-vault evidence chain.
- Deliver through formatted commits, an exact-head validated PR, and squash merge.

## Constraints and exclusions

- Do not change cryptographic storage, unlock ceremonies, or vault grants.
- Do not invent identity membership, provider inventory, or unverified edges.
- Do not restore research fixtures or mock identities.
- Leave Simple, Sentinel, and extension isolation boundaries unchanged.

## Initial plan

1. Publish this plan and open a feature branch from current main.
2. Restore the typed graph projection, node presentation, and dashboard wiring
   needed for the access-chain canvas.
3. Reconcile product-spec copy and translations with the restored model.
4. Update unit and Playwright coverage for the passkey vault Access journey.
5. Format, push, validate on hosted workers, resolve feedback, and squash merge.
6. Publish linked Workbench completion records.

## Completion evidence

- Playwright proves create vault with passkey, open Access, and observe
  protection, device-key, vault nodes, and dependency edges while passkey
  details remain in the panel.
- Focused web unit coverage for the graph projection passes remotely.
- Exact-head repository-owned PR validation and readiness pass before merge.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
