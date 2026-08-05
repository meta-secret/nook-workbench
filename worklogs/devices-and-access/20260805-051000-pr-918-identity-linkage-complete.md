---
title: PR 918 remove false local identity key linkage completion
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
plan: plans/devices-and-access/20260804-210328-remove-identity-key-linkage.md
nook_pr: 918
status: completed
started_at: 2026-08-04T21:03:28Z
finished_at: 2026-08-05T04:55:12Z
agent: codex
---

# Complete removal of false local identity key linkage

## Outcome

PR 918 is merged. Devices & access no longer shows a device key as part of
local identity, no longer exposes the internal key identifier, and no longer
draws an inferred identity-to-key-to-vault chain. Local identity and observed
vault access remain independent, truthful perspectives.

## Progress

- Preserved the completed product correction and all nine resolved review
  conversations while waiting for the separately owned Main regression.
- After PR 919 and its replacement Main run passed, rebased PR 918 onto current
  Main and retained both the no-device-key assertions and the repaired dashboard
  readiness behavior.
- Pushed exact head `832e121f573a36c113778c184bac59cff7b6874c`
  and completed the full current-main readiness cycle.
- Squash-merged PR 918 as
  `7fa1f2133cc3bc996c520ed09920ade6689f1aa5`.

## Implementation problems

- PR 918 was correctly blocked while current Main's independent browser
  regression remained unresolved. The dependency was not folded into the
  product-model change and validation was not bypassed.
- Rebasing after PR 919 produced one browser-test conflict. It was resolved by
  preserving PR 918's semantic absence checks together with PR 919's readiness
  wait.

## Decisions

- Local identity state remains independent of passkeys, device keys, and vaults.
- Internal device-key identifiers are not presented as user identity objects.
- The final merge required current-main exact-head proof after the blocking Main
  repair, rather than relying on earlier green checks.

## Validation

- `task format` and the UI demo contract passed on the final rebased head.
- Full exact-head run
  [30975628549](https://github.com/meta-secret/nook/actions/runs/30975628549)
  passed native Rust, WASM, preview, full browser E2E, and full extension E2E.
- Exact-head Rust ecosystem run 30975628413 and source architecture run
  30975622015 passed.
- All nine review threads were resolved; `task pr:preflight PR=918` and
  `task pr:ready PR=918` both reported ready.

## Remaining work

- None.
