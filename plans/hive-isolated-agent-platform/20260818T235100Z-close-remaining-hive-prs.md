---
title: Close leftover Hive PRs and restore a green Main
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-08-18T23:51:00Z
agent: cursor
---

# Close leftover Hive PRs and restore a green Main

## Interpreted request

The password-recovery repair is already on the default branch. Two Hive pull
requests and two related open pull requests still remain. This session should
retire that remainder against current main, keep unique CI fixes, rebase the
stale identity-management experiment, and confirm the default-branch Main
workflow succeeds.

## Requirements

- Close the ownership-guard Hive pull request when current main already has the
  required Native Rust phrasing.
- Rebase and squash-merge the unique BuildKit frontend retry and its regression
  script.
- Rebase and squash-merge sequential Rust crate BuildKit cache layers without
  reverting vault unlock or ownership-guard phrasing.
- Rebase the identity-management experiment onto current main and land only the
  surviving unique UI.
- Confirm the default-branch Main workflow is successful after those merges.
- Do not re-arm isolated Main-repair workers.

## Constraints and exclusions

- Do not force-push protected branches.
- Do not run heavy local product suites.
- Do not copy conversation text into Workbench records.
- Do not mix Workbench files into Nook implementation pull requests.
- Do not include cache-contract edits that would undo the merged vault repair.

## Change budget and PR sequence

- Estimated authored changed lines: 1970
- Owning modules, packages, or layers: GitHub Bake retry scripts, Rust Docker cache layers, and Devices Access plus research experiments
- Public or cross-module interfaces: Bake frontend retry remains fail-closed for application Dockerfile failures; sequential Rust crate cache layers stay an internal bake contract
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 70
- Current PR slice and acceptance evidence: Rebase and squash-merge the unique BuildKit frontend retry plus close the superseded ownership-guard pull request; Acceptance evidence: exact-head repository-owned checks including Main-equivalent browser suites, squash merge, and the ownership-guard pull request closed because current main already has the required phrasing
- PR slices and acceptance evidence:
  1. Rebase and squash-merge the unique BuildKit frontend retry plus close the superseded ownership-guard pull request; Acceptance evidence: exact-head repository-owned checks including Main-equivalent browser suites, squash merge, and the ownership-guard pull request closed because current main already has the required phrasing
  2. Rebase and squash-merge sequential Rust crate BuildKit cache layers onto current main without reverting vault unlock; Acceptance evidence: exact-head repository-owned checks and squash merge
  3. Rebase the identity-management experiment onto current main and squash-merge the surviving unique UI; Acceptance evidence: exact-head repository-owned checks including applicable web verification and squash merge

## Initial plan

1. Publish this start snapshot.
2. Close the superseded ownership-guard Hive pull request.
3. Rebase the BuildKit frontend retry onto current main, validate, and squash-merge.
4. Rebase the sequential Rust cache-layer pull request onto current main, keep current ownership-guard phrasing, validate, and squash-merge.
5. Rebase the identity-management experiment, resolve conflicts against current Devices Access, validate, and squash-merge.
6. Watch the default-branch Main workflow through a successful conclusion.

## Completion evidence

- No Hive-labeled pull request remains open.
- Unique frontend-retry and sequential cache-layer commits are on main.
- The identity-management experiment is either squash-merged or closed with a
  recorded reason if current main already contains it.
- The default-branch Main workflow for the resulting head is successful.

## Safety review

- The record contains only public-safe development context.
- No secrets, credentials, private user data, or conversation text are present.
