---
title: Provision browserless home-node operator SSH
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/browserless-home-operator-ssh.md
started_at: 2026-08-25T18:26:02Z
agent: codex
---

# Provision browserless home-node operator SSH

## Interpreted request

Remove interactive web authentication from routine SSH access to the local
home ARC worker while retaining a secure remote recovery path.

## Requirements

- Prefer direct LAN SSH for local operator automation.
- Keep public-key authentication and strict host identity verification.
- Preserve Cloudflare Access as an explicitly named off-network fallback.
- Make setup reproducible through repository-owned Task automation.
- Keep operator-specific state under the existing private local configuration
  boundary.

## Constraints and exclusions

- Do not expose port 22 through a public address or router forwarding rule.
- Do not weaken or bypass Cloudflare Access for its public hostname.
- Do not use password authentication, permissive host-key acceptance, Python,
  DinD, Podman, or host container sockets.
- This PR changes operator connectivity only; it does not change Kubernetes
  DNS, cluster networking, or workload placement.

## Change budget and PR sequence

- Estimated authored changed lines: 220
- Owning modules, packages, or layers: Infrastructure Task automation, operator SSH configuration, and infrastructure contracts
- Public or cross-module interfaces: The `infra:ssh:home:configure` Task and the default home-node SSH alias
- Delivery shape: One PR
- Current PR estimated authored changed lines: 220
- Current PR slice and acceptance evidence: Browserless LAN SSH provisioning; Acceptance evidence: idempotent local proof, executable contracts, exact-head validation, and readiness pass
- PR slices and acceptance evidence: Browserless LAN SSH provisioning; Acceptance evidence: idempotent local proof, executable contracts, exact-head validation, and readiness pass

## Initial plan

1. Add a pinned declarative home-host SSH contract and installer.
2. Route home mesh operations through the managed LAN alias by default.
3. Add static tests and operator documentation.
4. Install and prove the alias on the authorized operator machine.
5. Run exact-head validation, address review, and merge.

## Completion evidence

- Idempotent installation and a non-interactive SSH probe succeed locally.
- Contracts reject browser proxies or permissive host-key behavior on the LAN
  alias.
- Repository-owned exact-head checks and readiness pass.

## Safety review

This record contains only public-safe architecture context. It contains no
credentials, private addresses, host keys, raw logs, or local filesystem paths.
