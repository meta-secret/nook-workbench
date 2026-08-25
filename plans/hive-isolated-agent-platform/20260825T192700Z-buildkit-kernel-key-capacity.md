---
title: Make BuildKit kernel key capacity reproducible
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/stabilize-buildkit-kernel-key-capacity.md
started_at: 2026-08-25T19:27:00Z
agent: codex
---

# Make BuildKit kernel key capacity reproducible

## Interpreted request

Turn the verified live BuildKit host repair into reproducible cluster
provisioning, then deliver it through a focused pull request.

## Requirements

- Configure adequate per-user kernel key capacity on every ARC build host.
- Persist the setting across reboot and verify the effective values before activation.
- Add a repository contract that prevents the provisioning invariant from disappearing.
- Preserve the current node-local rootless BuildKit topology and runner isolation boundaries.

## Constraints and exclusions

- No Docker-in-Docker, Podman service, host Docker socket, or Kata reintroduction.
- No unrelated cache-layout or runner-capacity redesign.
- No credentials, host addresses, or raw operational logs in the change record.

## Change budget and PR sequence

- Estimated authored changed lines: 90
- Owning modules, packages, or layers: ARC host preparation and infrastructure contracts
- Public or cross-module interfaces: `task infra:arc:deploy`
- Delivery shape: One PR
- Current PR estimated authored changed lines: 90
- Current PR slice and acceptance evidence: Persist and verify kernel key capacity on all ARC build hosts; Acceptance evidence: focused contracts and live convergence pass
- PR slices and acceptance evidence: Persist and verify kernel key capacity on all ARC build hosts; Acceptance evidence: focused contracts and live convergence pass

## Initial plan

1. Add idempotent sysctl persistence and runtime verification to ARC BuildKit host preparation.
2. Extend the ARC manifest contract with the exact file, keys, floors, and verification behavior.
3. Run focused contracts, formatting, pre-push validation, and live convergence on all build nodes.
4. Open the focused pull request and address exact-head review feedback.

## Completion evidence

- Focused ARC contract and repository pre-push checks pass.
- Every current build host reports the configured effective limits.
- The pull request is reviewed on its exact head with no unresolved feedback.

## Safety review

This record contains no raw prompt, transcript, secret, private address, raw
log, local path, or unnecessary infrastructure detail.
