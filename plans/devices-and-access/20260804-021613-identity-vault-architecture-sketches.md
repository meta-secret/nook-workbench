---
title: Define identity and vault architecture with relationship sketches
feature: devices-and-access
issue: issues/devices-and-access/README.md
started_at: 2026-08-04T02:16:13Z
agent: codex
---

# Task plan

## Interpreted request

Establish identity management and vault management as separate Nook domains,
document their authorization and replication relationship, and create a
research-only UI gallery that explores how people can understand identities,
devices, providers, access grants, and independent encrypted vaults.

## Requirements

- Define personal and collective identities as relationships among devices,
  members, passkey-protected device keys, and onboarding events.
- Define each vault as an independently encrypted event log whose DEK is
  authorized to identities through encrypted grants rather than owned by a
  device or provider.
- Treat sync providers as neutral replication transports usable independently
  by identity control data and vault event logs.
- Place device onboarding and relationship management under the permanent
  Devices & access identity-management surface.
- Preserve password records as vault content and preserve the browser
  extension's separate identity/site-relationship and password-integration
  responsibilities.
- Add a new research category containing ten materially different UI sketches
  for the identity-to-vault relationship.

## Constraints and exclusions

- This task changes architecture records and isolated web research sketches
  only; it does not migrate Rust domains, persistence, WASM APIs, or shipping
  application behavior.
- No product checks, formatting, build, test, commit, push, PR, or merge work is
  performed in this initial exploration turn.
- The sketches use synthetic, non-secret demonstration data and must not claim
  that WebAuthn identifies external passkey providers.
- Existing Simple, Sentinel, origin-isolation, and typed Rust/WASM security
  boundaries remain authoritative.

## Initial plan

1. Update the architecture map and focused design/product records with the new
   domain boundaries and dependency direction.
2. Create one shared research scenario that truthfully models identities,
   devices, provider mounts, vault grants, and vault-owned password content.
3. Build ten responsive interactive sketches using different information
   structures and visual metaphors, then register them as a new category.
4. Review the changed source for scope and consistency without executing
   repository checks.

## Completion evidence

- The architecture records explicitly distinguish identity, authorization,
  replication transport, and vault/event-log responsibilities.
- The research catalog contains a dedicated category with ten navigable UI
  variants grounded in the same domain scenario.
- The final handoff lists all changed artifacts and explicitly records that
  validation was deferred by request.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
