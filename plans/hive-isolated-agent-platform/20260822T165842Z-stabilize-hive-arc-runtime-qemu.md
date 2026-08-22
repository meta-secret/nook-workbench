---
title: Stabilize the Hive ARC runtime with Kata QEMU
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/stabilize-hive-arc-runtime-qemu.md
started_at: 2026-08-22T16:58:42Z
agent: codex
---

# Stabilize the Hive ARC runtime with Kata QEMU

## Interpreted request

Use QEMU only after Dragonball fails the normal Hive ARC workload. Preserve all
isolation and cache-performance work while restoring reliable job completion.

## Requirements

- Change only the dedicated Hive scale set runtime.
- Keep a fresh Pod and microVM for every job.
- Keep private privileged BuildKit and 32 GiB reflink-backed state per job.
- Keep scale-to-zero behavior and a maximum of ten runners.
- Prove a fresh production Hive job after deployment.

## Constraints and exclusions

- Do not introduce Docker-in-Docker, Sysbox, shared writable BuildKit, or warm
  retained runners.
- Do not change the general `nook-k0s` QEMU scale set.
- Do not diagnose the Dragonball guest through interactive exec.

## Initial plan

1. Update the Hive ARC manifest and static runtime contracts to select Kata
   QEMU.
2. Reconcile Cortex runtime guidance with the evidence-backed fallback.
3. Format, run focused contracts, and complete exact-head hosted validation.
4. Resolve review feedback, merge, deploy, and run a fresh Hive proof.

## Completion evidence

- Static contracts select QEMU only for `nook-k0s-hive`.
- Exact-head validation and review are green.
- Production reports both scale sets ready with capacity ten.
- A fresh Hive ARC runner completes verification without Pod replacement.

## Safety review

- This plan contains no secrets, private infrastructure details, raw logs,
  prompts, transcripts, or local paths.
