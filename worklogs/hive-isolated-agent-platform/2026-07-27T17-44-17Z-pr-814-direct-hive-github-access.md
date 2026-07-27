---
title: Replace Hive publication mediation with direct GitHub access
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
plan: plans/hive-isolated-agent-platform/2026-07-27T16-56-00Z-direct-hive-github-access.md
nook_pr: https://github.com/meta-secret/nook/pull/814
status: completed
started_at: 2026-07-27T16:56:00Z
finished_at: 2026-07-27T17:44:17Z
agent: codex
---

# Replace Hive publication mediation with direct GitHub access

## Outcome

Hive Codex workers are now trusted task owners with direct repository access
through the standard `GH_TOKEN` contract. PR 814 removed the custom publication
broker, filesystem mailbox, request signing, broker sidecar, publication CLI,
and broker-owned delivery state.

## Progress

- Deleted the publication implementation and mailbox smoke contract, removing
  about four thousand lines of mediation code.
- Mounted the existing repository-scoped GitHub credential directly into Hive
  workers and exposed it to embedded Codex shell commands.
- Gave writable task turns unrestricted inner Codex permissions while retaining
  the outer Kata, container, and Kubernetes boundaries.
- Made the trusted agent own ordinary `git`, `gh`, PR checks, review replies,
  squash merge, Main repair verification, and Workbench publication.
- Added a native sealed-guest wrapper for the existing TypeScript PR readiness
  audit and made Main-repair prompts require the `ci:full-e2e` label.

## Implementation problems

- Removing direct Cargo dependencies required regenerating the shared lockfile.
- One Hive behavior test still asserted the retired managed permission profile.
- The first native npm launcher copy lost its symlink-relative module path; the
  image now copies npm's module tree and creates explicit launch symlinks.
- Review found that the sealed readiness audit needed to derive
  `GITHUB_REPOSITORY` from the checkout.

## Decisions

- Repository token permissions are the GitHub authorization boundary; Hive does
  not independently restrict the token by task kind.
- Hive trusts a Codex terminal result and does not recreate a broker-owned
  completion verifier, publication transaction, merge-lock protocol, or
  duplicate delivery state machine.
- GitHub remains the durable source for branches, PRs, checks, reviews, merges,
  and replacement-worker recovery.
- The existing Kubernetes Secret name is retained so rollout can reuse the
  configured credential without a migration.

## Validation

- `task format`
- Focused Hive permission and replacement-delivery behavior tests
- Linux/amd64 Hive image npm smoke check
- Hive workflow run 30290012942
- PR workflow run 30290012124
- `task pr:ready PR=814`
- All review conversations resolved before squash merge

## Remaining work

- None.
