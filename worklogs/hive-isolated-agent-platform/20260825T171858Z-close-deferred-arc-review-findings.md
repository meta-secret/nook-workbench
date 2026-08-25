---
title: Deferred ARC review findings delivered
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/move-trusted-container-workflows-to-arc.md
plan: plans/hive-isolated-agent-platform/20260825T164835Z-close-deferred-arc-review-findings.md
nook_pr: 1104
status: completed
started_at: 2026-08-25T16:48:35Z
finished_at: 2026-08-25T17:18:58Z
agent: codex
---

# Deferred ARC review findings delivered

## Outcome

PR 1102 was merged at its verified head, then all four deferred review findings were corrected and merged through successor PR 1104.

## Progress

- Restored PAT-only pull-request audit repository discovery for GitHub SSH and HTTPS origins.
- Kept browser-image configuration identical to the verified Main and pull-request web builds.
- Ran current release preflight tooling against an immutable selected-source BuildKit context.
- Rejected conflicting singular and batch remote selectors before any diverted job can run.
- Added TypeScript and Rust regression contracts for every corrected boundary.
- Replied to and resolved the four deferred PR 1102 review threads after the successor merged.

## Implementation problems

- The first direct audit contract showed that Task child references did not inherit wrapper-only environment values. The wrapper now owns preparation and invokes the audit process with the resolved environment.
- Advisory review found the standard `ssh://git@github.com/...` remote form was not normalized. Explicit SSH and HTTPS normalization now covers it.
- The first exact-head policy run exposed two overly broad contract assertions. They were narrowed to the changed behavior without weakening the production rule.
- One browser job hit a transient ARC BuildKit health timeout before project commands. An unchanged-head failed-job retry passed.

## Decisions

- Merge verified capacity work before handling non-blocking follow-up findings in a focused successor.
- Keep current release tooling separate from immutable historical source content.
- Treat remote selector mutual exclusion as a routing prerequisite, not only a batch-job check.

## Validation

- PR 1104 exact head: `45b870c8090105ec7b25277a5a13b75a53058d1d`.
- Repository policy: GitHub Actions run 32875850913.
- Hive verification: GitHub Actions run 32875851007.
- Complete exact-head validation: GitHub Actions run 32875857242, attempt 2.
- `task pr:ready PR=1104` returned ready with no reasons or unresolved threads.
- PR 1102 merged as `1912239052b038c5469b5473e08a8979c010853e`.
- PR 1104 merged as `6e54dfbadd2b8a41090ac96bbe946d7c994781c9`.

## Remaining work

None.
