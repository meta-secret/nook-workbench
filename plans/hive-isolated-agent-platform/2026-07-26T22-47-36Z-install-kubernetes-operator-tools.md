---
title: Install pinned Kubernetes operator tools
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-26T22:47:36Z
agent: codex
---

# Install pinned Kubernetes operator tools

## Interpreted request

Make standard `kubectl` and Helm commands available to operators on the
production Hive node without bypassing the repository-owned infrastructure
workflow.

## Requirements

- Install standalone `kubectl` and Helm binaries through an idempotent root
  Taskfile command.
- Pin versions and verify downloaded artifacts before privileged installation.
- Keep the existing k0s, Kata, Hive, Neo4j, firewall, and credential boundaries
  unchanged.
- Deploy the tooling to the production node and verify both client versions.
- Deliver the change through a validated, squash-merged Nook pull request.

## Constraints and exclusions

- Do not expose the Kubernetes API or change cluster authorization.
- Do not use an unpinned package repository or ad hoc host installation.
- This task installs operator clients only; it does not distribute kubeconfigs.

## Initial plan

1. Inspect the current pinned tool downloads and remote installation behavior.
2. Add a checksummed standalone operator-tool installation and status task.
3. Format, publish the implementation PR, and use GitHub Actions for validation.
4. Merge the exact validated revision, deploy it through Taskfile, and verify
   the installed clients on the node.

## Completion evidence

- Green applicable repository-owned PR checks on the merged revision.
- A successful Taskfile deployment to the production node.
- Standalone `kubectl version --client` and `helm version` output matching the
  repository pins.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
