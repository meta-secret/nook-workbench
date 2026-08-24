---
title: Eliminate tool-only Docker execution
status: in_progress
priority: p1
automation: agent
owner: codex
created_at: 2026-08-24T22:09:41Z
updated_at: 2026-08-24T22:09:41Z
source_issues: []
related_prs: []
depends_on: []
---

# Eliminate tool-only Docker execution

## Context

The engineering harness currently uses runtime containers both for real services and for ordinary command execution. The latter adds image transfer, snapshot extraction, nested runtime coupling, and platform-specific wrappers without making the command itself more deterministic. This issue belongs to the [Hive isolated agent platform](README.md).

## Outcome

Pinned direct tooling executes ordinary format, compile, test, browser, credential, and probe commands across developer hosts and Actions runners. BuildKit remains the sole OCI image builder. Real service containers remain only where service runtime behavior is the owned boundary.

## Scope

- Inventory and classify container execution in Taskfiles, scripts, and workflows.
- Provision pinned native tools for supported developer and Actions environments.
- Remove tool-only `docker run` and container-copy execution paths.
- Preserve daemonless BuildKit for image and cache outputs.
- Preserve Docker Compose lifecycle for genuine infrastructure services.
- Add regression contracts and update harness documentation.
- Exclude product behavior changes and unrelated infrastructure cleanup.

## Acceptance criteria

- [ ] No unapproved tool-only `docker run` remains in repository automation.
- [ ] Direct Task commands use explicit pinned provisioning on supported hosts and Actions runners.
- [ ] ARC continues using ordinary runner Pods and node-local rootless BuildKit.
- [ ] OCI artifact builds and genuine service lifecycle operations retain their required container boundary.
- [ ] Preflight coverage rejects regression.
- [ ] Exact-head PR validation and review pass, and post-merge Main is observed.

## Progress

- Repository inventory started from the current default branch.

## Findings and decisions

- Docker Compose service management is a real runtime boundary and is not equivalent to a tool-only execution wrapper.
- BuildKit image production is not `docker run` and remains valid.

## References

- Nook engineering-harness architecture and remote-execution workflow.
