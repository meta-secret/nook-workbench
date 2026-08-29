---
title: Clarify vault unlock identity context
feature: devices-and-access
issue: issues/devices-and-access/identity-access-methods-ui.md
plan: plans/devices-and-access/20260828T160500Z-vault-unlock-identity-context-v2.md
nook_pr: 1186
status: completed
started_at: 2026-08-28T15:50:56Z
finished_at: 2026-08-29T00:24:29Z
agent: codex
---

# Clarify vault unlock identity context

## Outcome

Vault opening now shows which locally known identities are linked to the
selected vault and identifies the current browser before authentication. The
eligibility decision is owned by Rust and exposed through a narrow typed WASM
projection. Access is no longer a vault navigation item; Devices & access
remains a standalone authenticated surface.

## Progress

- Added selected-vault identity ownership and actual current-app grant
  projection across nook-core and nook-wasm.
- Added localized unlock context, honest missing/loading/error/mismatch states,
  direct backup-password explanation, and a recovery route.
- Removed the vault Access tab and preserved standalone Access navigation with
  editor cleanup, origin restoration, invitation gating, focus restoration,
  mobile overflow controls, and lock availability.
- Added focused Rust, WASM, Vitest, Playwright, and UI-demo regression evidence.
- Squash-merged Nook PR 1186 as
  `6109a9fdbcfa0845cb22a742a9f2c65ae6d4ac6a`.

## Implementation problems

- Early web composition inferred too much eligibility from presentation data;
  the projection was moved into nook-core and the consumer now fails closed.
- Review exposed revoked-member, recovery reachability, route-origin, delayed
  focus, invitation-gate, and small-screen control gaps. Each was corrected at
  its owning boundary and covered by focused regression tests.
- The readiness audit initially counted a redundant automated clean-review
  summary as substantive feedback. The non-finding bot status artifact was
  removed; the unchanged exact head then passed the repository audit.

## Decisions

- An identity is linked to a vault by Rust-owned vault membership evidence;
  current-browser device-key eligibility additionally requires an actual grant.
- Revoked current membership remains visible as linked but cannot unlock with
  the current browser.
- Backup passwords open vaults directly and are not described as identity
  unlock.
- Devices & access is a standalone identity-management concern, not a vault tab.

## Validation

- Exact head `92ffdbb05adf14acf0b356afa6fd0fb0a7f71198`
  passed the repository-owned `task pr:ready PR=1186` audit with zero unresolved
  threads and no substantive feedback.
- GitHub Actions run 33222873416 passed Native Rust verification, WASM build and
  artifact, WASM Node tests, Web verification, Verify and preview, Rust
  ecosystem lanes, coverage, and the headless UI demo.
- Exact-head preview deployed at `https://pr-1186.nokey-sh.pages.dev`.
- Focused domain, unit, routing, recovery, responsive, and stable/demo browser
  suites passed before complete validation.

## Remaining work

- The broader issue remains in progress: independent identity creation and
  explicit app-key/device-linking actions are not completed by this PR.
