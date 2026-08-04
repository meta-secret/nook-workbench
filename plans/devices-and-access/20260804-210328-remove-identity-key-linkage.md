---
title: Remove false local identity key linkage
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
started_at: 2026-08-04T21:03:28Z
agent: codex
---

# Task plan

## Interpreted request

Correct the production Devices & access surface so it does not imply that the
browser's local identity is created, protected, or unlocked by a passkey or a
device key. Remove device-key implementation detail from the user-facing
identity graph where it does not explain an independently verified vault
authorization.

## Requirements

- Keep local identity state visually and semantically independent from passkey
  and device-key evidence.
- Remove user-facing device-key nodes, labels, counts, and causal connectors
  that do not represent a truthful product relationship.
- Preserve verified identity-to-vault access information and existing
  authorized management actions.
- Keep all visible copy in the shared English and Russian translation catalogs.
- Add browser regression coverage for the corrected no-vault identity state.
- Deliver through an exact-head validated, squash-merged pull request.

## Constraints and exclusions

- Do not change cryptographic storage, unlock ceremonies, vault authorization,
  or the underlying persisted device-key implementation.
- Do not invent a provider, passkey, or vault relationship when evidence is
  unavailable.
- Preserve the established Nook Operate-mode visual system and responsive graph
  containment.

## Initial plan

1. Inspect the current typed relationship projection, production graph, copy,
   and focused browser coverage on the latest main branch.
2. Narrow the projection and presentation to truthful identity and verified
   vault relationships, removing unrelated key and passkey presentation.
3. Update translations and regression scenarios for empty, locked, and
   unlocked states affected by the change.
4. Apply formatting and the UI demo contract, then validate the exact PR head
   on hosted workers and address all actionable feedback.
5. Squash merge and publish the linked completion records.

## Completion evidence

- Focused Playwright coverage proves that an identity with no known vault
  relationship does not show a device key, passkey protector, or connector.
- Existing relationship and management scenarios remain green.
- Complete repository-owned PR validation and the exact-head readiness audit
  pass before merge.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
