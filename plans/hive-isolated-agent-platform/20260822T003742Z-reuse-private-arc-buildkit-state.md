---
title: Reuse private ARC BuildKit state
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/reuse-private-arc-buildkit-state.md
started_at: 2026-08-22T00:37:42Z
agent: codex
---

# Reuse private ARC BuildKit state

## Interpreted request

Remove the remaining cold-cache bottleneck from ephemeral `nook-k0s` runners.
Preserve job-level Kata and BuildKit isolation while avoiding repeated registry
decompression and full filesystem copies.

## Requirements

- Keep at least ten ARC jobs available with scale-to-zero behavior.
- Keep a fresh runner Pod and Kata microVM for every job.
- Keep BuildKit private to each guest; do not introduce a shared daemon.
- Reuse a trusted prewarmed filesystem through copy-on-write clones.
- Reduce private BuildKit capacity from 100 GiB to 32 GiB.
- Diagnose and remove misleading cache-manifest miss output.
- Validate on the exact pushed head, deploy the merge, and compare live timing.

## Constraints and exclusions

- Docker-in-Docker and Sysbox remain prohibited.
- No job may mount another job's writable BuildKit state.
- No full 32 GiB image copy may occur during runner startup.
- The host's current ext4 RAID layout must not be repartitioned or reformatted.
- Sensitive credentials and operational data must not enter source, logs,
  artifacts, or Workbench records.

## Change budget and PR sequence

- Estimated authored changed lines: 900
- Owning modules, packages, or layers: ARC manifests, BuildKit wrapper image, k0s ARC deployment and smoke operations, cache-selection scripts, static infrastructure contracts, and engineering-harness architecture
- Public or cross-module interfaces: `nook-k0s`, `task infra:arc:deploy`, `task infra:arc:smoke`, and BuildKit cache source selection
- Delivery shape: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Isolated persistent ARC cache state; Acceptance evidence: static contracts, exact-head CI, live deployment, ten-runner isolation, successful seed promotion, and cold-versus-warm timing proof
- PR slices and acceptance evidence: Isolated persistent ARC cache state; Acceptance evidence: static contracts, exact-head CI, live deployment, ten-runner isolation, successful seed promotion, and cold-versus-warm timing proof

## Initial plan

1. Measure the cache critical path and verify the host and Kata storage
   capabilities.
2. Add an idempotent loop-backed Btrfs reflink pool without changing the host
   partition layout.
3. Prepare a private reflink clone for each Pod and mount its 32 GiB ext4 image
   inside the Kata guest.
4. Promote only a stopped, successful trusted smoke image to the reusable seed;
   clean stale inactive clones safely.
5. Correct cache-source selection so known-absent exact refs are not imported.
6. Extend contracts, diagnostics, and architecture guidance.
7. Format, review, validate, resolve feedback, merge, deploy, and capture live
   performance evidence.

## Completion evidence

- Manifest and behavior contracts enforce 32 GiB capacity, reflink cloning,
  private per-Pod state, ten-runner capacity, and prohibited shared-daemon
  patterns.
- Exact-head repository checks and review are green with no unresolved threads.
- Production shows the merged scale set, successful seed promotion, and fresh
  Pods using distinct clones of the same seed.
- A repeated smoke run spends materially less time hydrating BuildKit state.
- The merged Main result remains healthy.

## Safety review

- This plan contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
