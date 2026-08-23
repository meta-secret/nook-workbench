---
title: Provision Rise-S ARC worker capacity
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/eliminate-arc-cache-publication-tail.md
started_at: 2026-08-23T01:13:56Z
agent: codex
---

# Provision Rise-S ARC worker capacity

## Interpreted request

Provision the newly purchased Rise-S server as a current Debian worker in the
existing k0s cluster. Qualify it for the repository's ephemeral Kata ARC scale
sets, local BuildKit state, and registry access. Remove the superseded
OVH-price research collector and its generated local database instead of
shipping that experimental tooling.

This plan supersedes the earlier OVH hosting-price collector plans because a
server has now been selected and purchased.

## Requirements

- Resolve the exact purchased OVH service and wait for hardware activation.
- Install the latest OVH-supported stable Debian release on only that new
  service.
- Harden access without exposing credentials or weakening the existing node.
- Join the server to k0s as a worker and preserve the current control plane.
- Install and validate the repository-pinned Kata/QEMU, ARC, BuildKit-state,
  and registry prerequisites.
- Label and constrain placement so build workloads can target the new node.
- Prove node health, Kata pod execution, ARC registration, and an exact runner
  smoke workload before considering compute migration successful.
- Remove the unshipped hosting collector, generated analysis, Task entries,
  and ignored SQLite database.
- Deliver any required manifest or automation changes through an exact-head
  pull request and merge it after repository validation.

## Constraints and exclusions

- Docker-in-Docker, Sysbox, host Docker sockets, shared writable BuildKit, and
  warm runners remain prohibited.
- The purchased server is worker capacity; the existing node remains the k0s
  controller and storage authority during qualification.
- No credential, service identifier, public address, raw operational log, or
  private local path enters source, Workbench, or PR text.
- The destructive OS installation is limited to the newly purchased service.
- A broader service migration occurs only after measured runner performance
  and stability evidence.

## Change budget and PR sequence

- Estimated authored changed lines: 500
- Owning modules, packages, or layers: `infra/k0s`, `infra/tasks`, ARC manifest contracts, infrastructure operations, and superseded `infra/hosting` tooling
- Public or cross-module interfaces: k0s worker bootstrap, ARC node placement, infrastructure Task commands, and runner smoke evidence
- Delivery shape: One PR
- Current PR estimated authored changed lines: 500
- Current PR slice and acceptance evidence: Rise-S worker support and hosting-tool removal; Acceptance evidence: static contracts, exact-head CI, live Debian installation, k0s/Kata node health, ARC smoke, and merged deployment
- PR slices and acceptance evidence: Rise-S worker support and hosting-tool removal; Acceptance evidence: static contracts, exact-head CI, live Debian installation, k0s/Kata node health, ARC smoke, and merged deployment

## Initial plan

1. Inspect the exact OVH order, current k0s manifests, node bootstrap, and live
   cluster state without mutating either server.
2. Remove the superseded hosting research and prepare any reusable multi-node
   bootstrap and placement changes.
3. Wait for activation, install stable Debian on the new service, and establish
   hardened operator access.
4. Join the server as a labeled k0s worker and install the pinned runtime and
   node-local ARC cache prerequisites.
5. Validate Kata and ARC execution, measure the new node, complete exact-head
   PR validation, merge, and verify the merged deployment.

## Completion evidence

- The new OVH service runs the selected stable Debian release.
- The existing controller reports a Ready labeled worker with the expected
  CPU, memory, storage, runtime, and network capacity.
- A disposable Kata workload and an ARC runner smoke job complete on the new
  worker without Docker-in-Docker.
- The superseded hosting collector and local price database are absent.
- Repository checks and review pass on the exact merged infrastructure head.

## Safety review

- This record contains no raw prompt, transcript, credentials, private data,
  raw logs, local paths, service identifiers, addresses, or unnecessary
  infrastructure details.
