---
title: Reuse private ARC BuildKit state
feature: hive-isolated-agent-platform
status: in_progress
priority: high
automation: manual
owner: codex
created_at: 2026-08-22T00:37:42Z
updated_at: 2026-08-22T00:37:42Z
source_issues: []
related_prs: []
depends_on:
  - issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md
---

# Reuse private ARC BuildKit state

## Context

ARC now runs trusted Rust jobs in fresh Kata microVMs next to Zot. Registry
transfers are fast, but every new guest reconstructs the same large compressed
BuildKit graph on shared rotational storage. Cache hydration can therefore cost
minutes even when compilation itself is cached.

## Outcome

Each ephemeral ARC job starts from a private copy-on-write BuildKit seed. The
seed is reused without copying its full logical size, while every running job
retains an isolated writable filesystem and private BuildKit daemon.

## Scope

- Keep zero warm runners and capacity for ten simultaneous jobs.
- Keep one private privileged BuildKit sidecar inside each Kata guest.
- Add host-managed copy-on-write backing for the private guest filesystems.
- Bound each job's BuildKit filesystem to 32 GiB and tune garbage collection.
- Refresh the reusable seed only from a completed trusted ARC smoke job.
- Remove misleading expected cache-miss errors from Bake input selection.
- Add storage, lifecycle, and isolation contract coverage and operational
  diagnostics.

## Excluded scope

- No Docker-in-Docker, Sysbox, shared BuildKit service, shared writable daemon,
  host runtime socket, or retained ARC runner Pod.
- No full-size image copy per job.
- No destructive repartitioning of the production host.
- No change to hosted browser, WASM, fork, release, or runtime-dependent jobs.

## Acceptance criteria

- [ ] Ten ephemeral runner Pods remain schedulable and use distinct writable
      BuildKit filesystem images.
- [ ] A new job clones the reusable seed through filesystem reflinks instead of
      copying 32 GiB.
- [ ] The runner and build process cannot mount another job's writable state.
- [ ] BuildKit capacity is 32 GiB with a bounded garbage-collection target.
- [ ] Seed promotion occurs only after a successful trusted ARC smoke run and
      after its guest has stopped writing.
- [ ] Stale job images are cleaned without removing active Pod state.
- [ ] Exact-head validation and live cold-versus-warm evidence demonstrate
      reduced cache hydration time.
- [ ] The pull request is reviewed, merged, deployed, and verified.

## Progress

- 2026-08-22: Current-state diagnosis found that k0s, Zot, and up to ten ARC
  guests share one ext4 filesystem backed by two rotational disks in RAID0.
  The node has no CSI snapshot driver, but its kernel and installed tooling
  support a non-destructive loop-backed Btrfs reflink pool.

## Decisions

- Use 32 GiB initially. Consider 24 GiB only after peak-usage telemetry shows
  adequate headroom across native, coverage, policy, and export workloads.
- Treat the BuildKit filesystem size as logical capacity. Reflink clones share
  unchanged extents and allocate storage only for changed blocks.
