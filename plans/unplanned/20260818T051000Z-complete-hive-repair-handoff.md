---
title: Finish password-unlock repair and retire Hive remainder
feature: unplanned
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-08-18T05:10:00Z
agent: cursor
---

# Task plan

## Interpreted request

Land the open Nook password-envelope recovery pull request. Fold in the unique verified-connect identity-handoff and paired-companion discovery retry from stalled automated repair branches. Close those superseded branches. Stop further automated Main-repair enqueueing by marking leftover Workbench incidents cancelled.

## Requirements

- Keep backup-password unlock usable when this browser has a local vault and no new app key.
- Finalize a paired-vault extension identity only after verified connect binds the same store.
- Preserve the staged handoff signer across a failed connect retry.
- Retry a transient unavailable paired-identity discovery before showing local unlock.
- Do not restart isolated Main-repair workers.
- Close duplicate automated repair pull requests after their unique product bits land.
- Validate the surviving pull request with Main-equivalent browser suites.
- Squash-merge when repository-owned checks and readiness succeed.

## Constraints and exclusions

- Do not merge BuildKit cache-contract or bake-context edits from the automated branches.
- Do not run heavy local product builds or tests.
- Do not copy conversation text into Workbench records.
- Do not force-push protected branches.

## Change budget and PR sequence

- Estimated authored changed lines: 400
- Owning modules, packages, or layers: nook-wasm identity handoff and nook-web paired extension connect
- Public or cross-module interfaces: WASM complete-connected-identity now finalizes paired-vault handoff; discoverPairedExtensionIdentity retries Unavailable
- Delivery shape: One PR
- Current PR estimated authored changed lines: 400
- Current PR slice and acceptance evidence: Verified paired-vault handoff plus discovery retry on the password-recovery branch; Acceptance evidence: hosted WASM tests, web unit coverage, and Main-equivalent web plus extension e2e
- PR slices and acceptance evidence: Verified paired-vault handoff plus discovery retry on the password-recovery branch; Acceptance evidence: hosted WASM tests, web unit coverage, and Main-equivalent web plus extension e2e

## Initial plan

1. Publish this start snapshot.
2. Port the unique WASM handoff finalizer and TypeScript discovery retry onto the surviving password-recovery branch.
3. Host-format, commit, and push.
4. Dispatch exact-head validation with the Main-equivalent browser suites.
5. Close superseded automated repair pull requests.
6. Cancel leftover ready Workbench Main-failure incidents on a Workbench branch.
7. Squash-merge when readiness succeeds, then publish the worklog and statistics.

## Completion evidence

- Pull request 1050 contains the paired-vault handoff finalizer and Unavailable discovery retry.
- Duplicate automated repair pull requests 1028, 1031, 1033, 1034, 1039, 1040, and 1051 are closed.
- Ready Hive Main-failure incidents are cancelled so dispatch will not enqueue new workers.
- Pull request 1050 is squash-merged after green repository-owned checks.

## Safety review

- The record contains only public-safe development context.
- No secrets, credentials, private user data, or raw logs are present.
