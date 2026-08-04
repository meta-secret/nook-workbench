---
title: Define identity and vault architecture with relationship sketches
feature: devices-and-access
issue: issues/devices-and-access/README.md
plan: plans/devices-and-access/20260804-021613-identity-vault-architecture-sketches.md
nook_pr: null
status: completed
started_at: 2026-08-04T02:16:13Z
finished_at: 2026-08-04T02:35:25Z
agent: codex
---

# Define identity and vault architecture with relationship sketches

## Outcome

The local Nook branch now records identity management and encrypted vaults as
independent domains joined by explicit DEK authorization grants. A new isolated
web-research category provides ten interactive relationship sketches grounded
in one shared synthetic scenario. The work is intentionally left uncommitted
and unvalidated for product review.

## Progress

- Added the canonical identity, authorization, vault, onboarding, extension,
  and neutral replication-provider architecture decision.
- Updated the architecture map, provider and vault design records, Devices &
  access and extension product specs, public overview, and design product truth.
- Added shared research fixtures for personal and collective identities,
  devices, vaults, grants, provider mounts, and separately modeled site trust
  and vault-content consent.
- Added ten registered variants: atlas, grant matrix, twin ledgers, provider
  switchboard, trust orbits, identity workbench, authorization desk, onboarding
  runway, vault x-ray, and extension site bridge.
- Applied a separate static design review that corrected site/vault coupling,
  identity-log replication in onboarding, fail-fast fixture lookup, and matrix
  accessibility semantics.

## Implementation problems

- The first combined documentation patch targeted one drifted extension line
  and was rejected atomically. The changes were reapplied in smaller focused
  patches with no partial write from the failed attempt.

## Decisions

- Replication providers are shared lower-layer transports, not part of either
  identity or vault ownership. Each domain mounts them independently.
- Provider credentials remain per-device and sealed locally; shared flows
  exchange only credential-free storage targets.
- Existing per-device vault rows remain a documented compatibility boundary;
  the architecture record does not claim that storage migration has happened.
- Devices & access is the identity-management surface. Passwords and other
  secret items remain vault content.

## Validation

- Source and architecture changes received a static design review only.
- No formatting, build, test, browser, UI-demo, GitHub Actions, or PR checks ran
  because validation was explicitly deferred for this exploration.
- No commit, push, or Nook pull request was created.

## Remaining work

- Product review and selection or synthesis of the preferred sketch direction.
- Formatting, responsive visual inspection, focused coverage, hosted checks,
  and PR delivery after the validation hold is lifted.
