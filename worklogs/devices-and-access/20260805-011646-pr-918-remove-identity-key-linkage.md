---
title: PR 918 remove false local identity key linkage
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
plan: plans/devices-and-access/20260804-210328-remove-identity-key-linkage.md
nook_pr: 918
status: blocked
started_at: 2026-08-04T21:03:28Z
finished_at: 2026-08-05T01:16:46Z
agent: codex
---

# Remove false local identity key linkage

## Outcome

PR 918 implements the corrected Devices & access model but is not merged. The
surface no longer presents a local identity, passkey, device key, and vault as
one causal chain. Local identity state and previously observed vault-access
evidence are independent perspectives, and internal device-key identifiers are
absent from the user-facing destination.

## Progress

- Removed the device-key node, key identifier, counts, and every graph edge.
- Kept locked, missing, and unlocked local identity state as standalone
  browser/session evidence.
- Preserved sign-in protection, paired-device session explanation, vault
  access evidence, lifecycle actions, responsive behavior, and English/Russian
  catalog parity.
- Updated the public README, product specification, unit coverage, browser
  scenarios, and recorded UI demo contract.
- Addressed and resolved all nine review conversations on the PR.

## Implementation problems

- A review found that one persisted-access assertion targeted the vault list
  even though its explanatory copy belongs to the surrounding detail panel.
  The final head scopes that assertion to the owning panel.
- Current Main has a separate persistent-route browser regression. PR 918's
  exact-head full browser job reproduces the same two device-protection
  failures before the remaining Devices & access cases run. The dedicated
  Hive incident and PR 919 own that repair.
- The required host formatter repeatedly transferred an existing large Rust
  target directory into its Hive Docker context, adding several minutes to
  each otherwise unchanged formatting pass.

## Decisions

- Local identity state does not imply a relationship to a passkey, device key,
  or vault.
- Device keys remain an internal cryptographic mechanism and are not exposed as
  a user-facing identity object on this destination.
- The Main browser regression will not be folded into PR 918 or bypassed; this
  PR remains open until current-main validation can pass.

## Validation

- `task format`, the UI demo contract, and `git diff --check` passed on the
  final head.
- Exact-head source architecture, web check, web unit, Rust ecosystem, native
  Rust, WASM, preview deployment, coverage, and extension E2E passed.
- Full browser validation reproduced only the two device-protection failures
  tracked by the linked Main incident; the PR readiness audit therefore
  correctly refused merge.
- The exact-head preview is available at https://pr-918.nokey-sh.pages.dev.

## Remaining work

- Complete the linked Main browser repair, merge current Main into PR 918,
  rerun exact-head validation, pass `task pr:ready PR=918`, and squash merge.
