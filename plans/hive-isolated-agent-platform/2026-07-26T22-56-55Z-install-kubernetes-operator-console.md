---
title: Install pinned Kubernetes operator console
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-26T22:56:55Z
agent: codex
supersedes: plans/hive-isolated-agent-platform/2026-07-26T22-47-36Z-install-kubernetes-operator-tools.md
---

# Install pinned Kubernetes operator console

## Interpreted request

Provide a complete Kubernetes operator console directly on the production Hive
node for use after SSH login, without requiring workstation-side cluster
configuration.

## Requirements

- Install standalone `kubectl`, Helm, and k9s through an idempotent root
  Taskfile command.
- Pin versions and verify downloaded artifacts before privileged installation.
- Make the clients usable directly on the production node with the existing
  k0s cluster.
- Keep the k0s, Kata, Hive, Neo4j, firewall, and credential boundaries
  unchanged.
- Deliver through a validated, squash-merged Nook pull request, deploy through
  Taskfile, and verify all three clients.

## Constraints and exclusions

- Do not expose the Kubernetes API or distribute a local workstation
  kubeconfig.
- Do not use unpinned package repositories or ad hoc host installation.
- Do not change cluster authorization as part of installing the clients.

## Initial plan

1. Extend the checksummed operator-tool task with the pinned k9s release.
2. Add contract coverage and document direct SSH operation.
3. Format, update the implementation PR, and use GitHub Actions for validation.
4. Merge the validated revision, deploy through Taskfile, and verify all
   operator clients on the production node.

## Completion evidence

- Green applicable repository-owned checks on the merged revision.
- Successful Taskfile installation and status commands against the production
  node.
- Exact standalone `kubectl`, Helm, and k9s versions reported from the node.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
