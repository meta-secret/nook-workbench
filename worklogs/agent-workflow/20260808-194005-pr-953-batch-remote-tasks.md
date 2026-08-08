---
title: PR 953 batch focused remote tasks
feature: agent-workflow
issue: none
plan: plans/agent-workflow/20260808T164015Z-batch-remote-tasks.md
nook_pr: https://github.com/meta-secret/nook/pull/953
status: completed
started_at: 2026-08-08T16:34:00Z
finished_at: 2026-08-08T19:40:05Z
agent: codex
---

# Outcome

Merged Nook PR 953. One focused GitHub-hosted job can now run up to eight allowlisted tasks while sharing checkout, Docker, and cache setup.

# Progress

- Added a typed task catalog and a batch executor.
- Added `TASK_NAMES` support to the Task interface and remote workflow while preserving the legacy `TASK_NAME` input.
- Kept task execution sequential within the shared job.
- Continued after individual failures and reported an aggregate result.
- Preserved each task's existing timeout.
- Added timeout cleanup for spawned processes and Docker containers.
- Restored the exact tracked worktree and removed nonignored untracked files after a timeout.
- Reinitialized the hosted BuildKit builder after timeout cleanup.
- Isolated end-to-end artifacts by task.
- Added behavior-focused preflight coverage and updated the workflow documentation.

# Problems encountered

- The first workflow revision used `runner.temp` in a job-level expression, where that context is unavailable.
- The shared Docker setup action initially read only the legacy singular task input.
- The sealed formatter produced Rust formatting differences that were not present in the local toolchain.
- Review feedback identified process-tree termination, Docker daemon cleanup, builder recovery, worktree restoration, and test-hermeticity gaps.
- Two complete validation runs became obsolete after review-driven corrections and were canceled.

# Decisions

- Execute tasks sequentially inside one job for predictable isolation and runner resource use.
- Limit a batch to eight unique allowlisted tasks.
- Continue through the batch after a task fails, then fail the job with an aggregate summary.
- Preserve the former per-task timeout values.
- Restore repository and Docker state after a timeout before starting the next task.

# Validation

- Final focused hosted batch: https://github.com/meta-secret/nook/actions/runs/31274519175
- Final complete exact-head PR validation: https://github.com/meta-secret/nook/actions/runs/31274695807
- `task pr:ready PR=953` passed on head `1300028adf73cdd59e2f9352f6e21d93d3bf930f` with zero unresolved conversations.
- Squash merge commit: `a19190b14f7be931d66d8d1ec1fa879ebb4db84b`

# Remaining work

None.
