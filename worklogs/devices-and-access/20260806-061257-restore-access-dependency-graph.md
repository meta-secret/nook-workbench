---
title: Restored Access dependency graph after passkey vault create
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
plan: plans/devices-and-access/20260806-052648-restore-access-dependency-graph.md
nook_pr: 933
status: completed
started_at: 2026-08-06T05:25:00Z
finished_at: 2026-08-06T06:12:57Z
agent: cursor
---

# Work summary

## Outcome

Restored the production Access Identity Bridge so a passkey-protected vault
setup again shows protection, device-key, and verified vault nodes with
dependency edges. Local identity state remains visible without membership edges.
Passkey details stay in the Protection panel. PR 933 squash-merged.

## Progress

- Restored the typed graph projection, node presentation, device-key panel, and
  dashboard wiring for the access chain.
- Reconciled product-spec and README copy so the three-link access chain is
  required again while local identity stays free of membership links.
- Restored English and Russian Devices & access chain copy.
- Added Playwright coverage for create-vault-with-passkey then open Access, and
  restored unit plus demo coverage for the access chain.

## Implementation problems

- PR 918 had removed the access-chain canvas while intending only to stop false
  identity membership claims. The fix restored verified protection and vault
  edges without reconnecting local identity as membership.
- Locale files had moved under `nook-app/nook-platform`, so the Devices & access
  catalog had to be restored into the current paths rather than checked out from
  the pre-918 tree wholesale.
- A blind README restore would have rewound unrelated infrastructure docs; only
  the Devices & access paragraph was updated.

## Decisions

- Keep local identity state on the canvas without membership edges.
- Keep protection to device-key and device-key to verified-vault edges as
  truthful access evidence.
- Preserve companion-session detail copy added after the earlier access-chain
  adoption.

## Validation

- Host-applied `task format` and UI demo contract against origin/main.
- Focused remote `web:check` and `web:test` succeeded.
- Exact-head PR validation succeeded for
  [run 31075721830](https://github.com/meta-secret/nook/actions/runs/31075721830).
- `task pr:ready` passed before squash merge of PR 933.

## Remaining work

- None.
