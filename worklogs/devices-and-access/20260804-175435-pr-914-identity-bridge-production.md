---
title: PR 914 Identity Bridge production adoption
feature: devices-and-access
issue: issues/devices-and-access/identity-bridge-production-adoption.md
plan: plans/devices-and-access/20260804-103629-identity-bridge-production-adoption.md
pr: https://github.com/meta-secret/nook/pull/914
completed_at: 2026-08-04T17:51:51Z
agent: codex
---

# Delivery

PR 914 replaced the production Devices & access dashboard with the accepted
Identity Bridge interaction model. The shipping page now lets a person browse
the same live relationship evidence from either an identity or a vault, while
keeping device keys, identity context, and verified vault access distinct.

## Product outcome

- Identity-first and vault-first navigation share one typed view of live Nook
  state; no research fixtures or invented relationships were retained.
- Device-key evidence, local or paired-device identity context, and vault
  access are labeled according to what the application can actually prove.
- Existing preparation, passkey unlock, backup-password, enrollment, device
  management, and vault-selection actions remain available in their authorized
  lifecycle states.
- Empty, locked, companion-session, duplicate-label, mobile, desktop,
  keyboard, reduced-motion, and localization behavior received focused
  implementation and review attention.

## Verification

- Generated English, Russian, Rust, and TypeScript localization contracts were
  kept in parity.
- Focused relationship-model tests and Svelte checks passed.
- The sealed Devices & access Playwright UI demo passed on the final head.
- Exact-head hosted source architecture, web check, web unit, browser e2e,
  Rust ecosystem, WASM, native Rust, and preview evidence was required through
  the repository workflow.
- All actionable review threads were replied to and resolved before automatic
  squash merge.

## Merge

The reviewed head `ca5853e3f390739ef83105239dcebafc702865bc` was squash
merged to Nook `main` as `50e69d0f9ff4d97f14e6590a0f291318ba1adebf` on
2026-08-04 at 17:51:51 UTC.
