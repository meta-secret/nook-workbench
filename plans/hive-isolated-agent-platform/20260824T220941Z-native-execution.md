---
title: Replace tool-only Docker execution with pinned native tooling
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/eliminate-tool-only-docker-execution.md
started_at: 2026-08-24T22:09:41Z
agent: codex
---

# Replace tool-only Docker execution with pinned native tooling

## Interpreted request

Make Nook's engineering harness use one direct command model across developer machines, GitHub-hosted runners, and ARC runner Pods. Provision pinned tools explicitly. Stop starting nested Docker containers merely to run formatters, compilers, test binaries, browser checks, credential generators, or infrastructure probes. Preserve BuildKit only for OCI image builds and cache graphs. Preserve real service containers when the service runtime is the behavior being operated or tested.

## Requirements

- Inventory every `docker run`, Docker-created execution container, and related Task wrapper.
- Replace tool-only execution with pinned native commands and reusable provisioning.
- Make GitHub Actions install or expose the same pinned toolchain used by Task targets.
- Keep ARC runner Pods ordinary Kubernetes Pods with the existing node-local rootless BuildKit service.
- Keep Docker Compose only for genuine long-lived infrastructure service lifecycle operations.
- Keep BuildKit for image production, local artifact export, and OCI cache graphs.
- Add repository contracts that reject new unapproved `docker run` execution paths.
- Update the engineering-harness authorities and public commands to match the implemented boundary.
- Validate remotely, merge automatically after exact-head readiness, and confirm the following Main run.

## Constraints and exclusions

- Do not introduce Docker-in-Docker, Podman, Kata, a host runtime socket, or a shared writable job filesystem.
- Do not replace deterministic version pinning with unbounded package-manager latest versions.
- Do not run heavy product builds or test suites on the developer machine.
- Do not remove real deployed services merely because Docker Compose manages them.
- Do not copy product build outputs through a runtime container when BuildKit can export them directly.

## Change budget and PR sequence

- Estimated authored changed lines: 2,500
- Owning modules, packages, or layers: engineering harness Taskfiles, GitHub Actions provisioning, web and Rust verification wrappers, infrastructure probe helpers, preflight contracts, and Cortex harness documentation.
- Public or cross-module interfaces: public Task command behavior and internal GitHub Actions setup contracts.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,500
- Current PR slice and acceptance evidence: complete tool-only execution migration; Acceptance evidence: static no-`docker run` contracts, direct task smoke coverage, exact-head PR validation, and post-merge Main evidence
- PR slices and acceptance evidence: complete tool-only execution migration; Acceptance evidence: static no-`docker run` contracts, direct task smoke coverage, exact-head PR validation, and post-merge Main evidence

## Initial plan

1. Classify every container invocation as OCI build, real service lifecycle, integration runtime, or tool-only command execution.
2. Add pinned native provisioning for local hosts, GitHub-hosted jobs, and ARC runner Pods.
3. Replace tool-only Docker wrappers with direct Task commands and BuildKit artifact exports.
4. Add preflight contracts that prevent regression while allowing the explicit service and OCI-build boundaries.
5. Update Cortex and README guidance, run host pre-push hygiene, and validate the exact pushed head remotely.
6. Address review findings, merge the ready PR, and verify Main execution and timing.

## Completion evidence

- Repository search and preflight contracts show no unapproved `docker run` execution path.
- Tool-only checks run through pinned direct commands on the configured Actions runners.
- OCI image production still uses daemonless BuildKit.
- Real service lifecycle operations remain operational and clearly scoped.
- Exact-head repository checks and review are green.
- The PR is squash-merged and its Main workflow is observed.

## Safety review

This record contains no source conversation, sensitive value, private data, unfiltered machine output, local path, or unnecessary infrastructure detail.
