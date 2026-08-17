---
title: Restore Main vault password unlock after Hive quota stall
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-cd9449823a44256a2c7497e4d10d114987f068fb.md
started_at: 2026-08-17T21:08:00Z
agent: cursor
---

# Restore Main vault password unlock after Hive quota stall

## Interpreted request

Main is red on browser and extension suites after the Hive Sol-fallback merge.
Isolated workers can no longer complete Codex turns until account quota resets.
This session should finish the live product repair instead of waiting on those
workers.

The current Main failures are backup-password unlock when device keys are
absent, vault unlock after reload when a backup password exists, and extension
lock then unlock that never shows the authenticated shell.

## Requirements

- Land one normal reviewed pull request from current main.
- Keep password recovery usable without creating or requiring a new app key.
- Skip remote-credential refresh on local storage during password unlock.
- Add behavior-focused WASM coverage for password unlock after app-key deletion.
- Add the `ci:full-e2e` label because the failure was observed on Main.
- Leave Hive CI cache and registry-importer commits out of this repair.

## Constraints and exclusions

- Do not wait for isolated workers or Codex quota.
- Do not force-push existing Hive branches.
- Do not include BuildKit cache-contract edits from older Hive repairs.
- Do not mutate unrelated open experiments.
- Do not copy the conflicting Hive lock handlers until the extension handoff
  path is confirmed against the authenticated-shell failure.
- Do not run heavy product suites locally.

## Change budget and PR sequence

- Estimated authored changed lines: 150
- Owning modules, packages, or layers: WASM password manager, vault lifecycle, local password unlock, and web e2e coverage.
- Public or cross-module interfaces: No new public vault API; local password unlock must not require remote credentials or a new app key.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 150
- Current PR slice and acceptance evidence: Password recovery without app-key enrollment; Acceptance evidence: WASM regression plus exact-head Main-equivalent browser suites
- PR slices and acceptance evidence: Password recovery without app-key enrollment; Acceptance evidence: WASM regression plus exact-head Main-equivalent browser suites

## Initial plan

1. Branch from current main.
2. Take the Hive password-recovery product files without cache-contract noise.
3. Keep lock-button routing unchanged until the extension handoff is proven.
4. Host-apply format and the UI demo contract, then push and validate exact-head.

## Completion evidence

- The Main-failure incident has a linked squash-merged repair PR.
- Exact-head repository-owned checks include the Main-equivalent browser suites.
- Isolated queue members remain cancelled or failed; no new obsolete blockers.

## Safety review

This plan contains no prompt transcript, credentials, private data, raw logs,
local paths, or unnecessary infrastructure detail.
