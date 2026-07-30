---
title: Accelerate isolated remote tasks
feature: unplanned
issue: null
started_at: 2026-07-30T03:19:40Z
agent: codex
supersedes: plans/unplanned/2026-07-30T02-50-37Z-accelerate-persistent-remote-tasks.md
---

# Accelerate isolated remote tasks

## Interpreted request

Reduce the wall-clock cost of focused GitHub Actions Taskfile runs without
executing branch-controlled commands on persistent infrastructure.

## Requirements

- Preserve ephemeral GitHub-hosted runner isolation for every branch task.
- Separate workflow setup from the actual over-broad build graph using recent
  run evidence.
- Keep the finite allowlisted command catalog and exact pushed-head guards.
- Give the commonly used Rust test, web check/test, and extension check paths
  narrow source-sealed images that build only their required dependencies and
  generated WASM boundary.
- Continue restoring Main-owned BuildKit caches read-only; do not publish
  feature-branch cache generations or expose repository secrets.
- Add mechanical regression coverage for runner placement, cache policy,
  workflow permissions, and focused task routing.
- Deliver through formatting, hosted focused proof, complete exact-head
  validation, feedback handling, readiness, and squash merge.

## Constraints and exclusions

- Self-hosted persistent runners remain maintenance-only because branch
  Taskfiles and Docker commands are not a safe host-isolation boundary.
- The focused optimization must not weaken the source-sealed image contract.
- Complete pull-request validation remains separate from focused remote-task
  evidence.

## Initial plan

1. Revert the unsafe persistent-runner routing while preserving the measured
   timing evidence.
2. Add narrow source-sealed Rust-test and web-check images that reuse Main's
   dependency caches without building unrelated WASM tests, coverage, browser,
   or production-dist stages.
3. Route the highest-frequency remote commands through those focused targets
   while leaving full commands and delivery gates unchanged.
4. Update workflow contracts and the architecture system of record.
5. Format, push, and compare repeated hosted runs against the observed
   nine-to-nineteen-minute baseline.
6. Re-run complete validation, resolve feedback, pass readiness, squash merge,
   and publish linked completion records.

## Completion evidence

- Workflow contracts prove all branch jobs stay on `ubuntu-latest`, restore
  Main caches read-only, expose no secrets, and use narrow focused routing.
- Hosted runs demonstrate lower task time for representative Rust and web
  checks.
- The implementation pull request passes current-head repository checks and is
  squash-merged.
- The linked Workbench worklog and agent statistics are visible on Main.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
