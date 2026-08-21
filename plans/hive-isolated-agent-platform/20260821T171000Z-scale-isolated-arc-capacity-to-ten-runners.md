---
title: Scale isolated ARC capacity to ten runners
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md
started_at: 2026-08-21T17:10:00Z
agent: codex
---

# Scale isolated ARC capacity to ten runners

## Interpreted request

Complete the ARC review and Rust cache-placement delivery while ensuring that
the k0s scale set can place at least ten simultaneous, job-scoped Kata runners.

This plan supersedes
`plans/hive-isolated-agent-platform/20260821T161630Z-address-arc-review-and-rust-cache-placement.md`
because the required concurrency and scheduler capacity changed materially.

## Requirements

- Preserve every review, runner-placement, and cache-path requirement from the
  superseded plan.
- Raise the bounded ARC scale set ceiling from four to ten jobs.
- Keep scale-to-zero behavior so every job receives a fresh Pod and microVM.
- Size scheduling requests so ten runner Pods can coexist with the measured
  cluster baseline on the current node.
- Retain the 16 GiB aggregate guest limit and 100 GiB private BuildKit state.
- Enforce the concurrency and resource split through the manifest contract.
- Validate the exact pushed head and deploy the merged scale-set configuration.

## Constraints and exclusions

- Docker-in-Docker, Sysbox, nested engines, host runtime sockets, host paths,
  and shared BuildKit remain prohibited.
- The Kata QEMU runtime-rs isolation boundary and per-job private BuildKit
  sidecar remain unchanged.
- Scheduling requests may be overcommitted for burstable build workloads, but
  container limits and the 16 GiB microVM envelope are not reduced.
- No warm runner pool is introduced.
- No credential material enters source, artifacts, logs, or Workbench records.

## Change budget and PR sequence

- Estimated authored changed lines: 650
- Owning modules, packages, or layers: ARC scale-set values, ARC contracts, GitHub Rust workflow placement, Rust ecosystem BuildKit targets, infrastructure operations, executable agent guidance, Hive platform design authority, and public command documentation
- Public or cross-module interfaces: `nook-k0s` scheduling capacity, trusted Rust `runs-on` selection, `task docker:ecosystem:dependency-policy`, `task infra:arc:smoke`, and `task infra:arc:deploy`
- Delivery shape: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: ARC review, cache placement, and ten-runner capacity; Acceptance evidence: static contracts, measured node capacity, exact-head ARC runs, complete validation, review closure, merged deployment, and live scale-set status
- PR slices and acceptance evidence: ARC review, cache placement, and ten-runner capacity; Acceptance evidence: static contracts, measured node capacity, exact-head ARC runs, complete validation, review closure, merged deployment, and live scale-set status

## Initial plan

1. Preserve the completed review corrections and daemon-free Rust cache path.
2. Measure allocatable capacity and the live cluster baseline.
3. Raise ARC to ten runners and tune Pod requests independently from unchanged
   per-guest limits.
4. Extend contracts and the platform authority with the capacity invariant.
5. Run focused checks, exact-head ARC smoke, and complete PR validation.
6. Resolve new feedback, merge, deploy, verify live capacity, and publish
   Workbench completion evidence.

## Completion evidence

- The scale set reports a maximum of ten and a minimum of zero.
- The aggregate requests for ten Pods fit node allocatable resources after the
  measured non-ARC baseline is included.
- Each Pod retains aggregate limits of 8 CPUs and 16 GiB and its private 100 GiB
  BuildKit state.
- Exact-head jobs identify the `nook-k0s` label and ephemeral runner names.
- Required checks pass with no unresolved review threads.
- The PR merges and the merged ARC release is operationally verified.

## Safety review

- Sensitive operational material, credentials, private prompt text, raw logs,
  local paths, and unnecessary infrastructure details are absent.
