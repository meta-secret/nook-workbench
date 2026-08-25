---
title: Reproducible Rise-S provisioning and ARC expansion
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/reproduce-bare-metal-worker-provisioning.md
started_at: 2026-08-25T02:50:20Z
agent: codex
---

# Reproducible Rise-S provisioning and ARC expansion

## Interpreted request

Turn the newly purchased blank compute server into production k0s and ARC burst
capacity, while replacing the one-off operator procedure with a complete,
reviewed, provider-aware recovery workflow. A future compatible server should
be reproducible from the provider install boundary through live cache and runner
proof without interactive configuration.

## Requirements

- Drive provider inspection, Debian installation, progress polling, SSH
  bootstrap, mesh enrollment, k0s joining, ARC qualification, and verification
  through Taskfiles and typed Bun automation.
- Use cloud-init as the first-boot transport and keep the post-boot convergence
  path idempotent.
- Read reusable provider credentials and public bootstrap material from the
  private Nook store with restrictive permissions.
- Fail closed unless the provider service, hardware class, address, OS, node
  identity, mesh address, and retained BuildKit topology match the declared
  inventory.
- Preserve ordinary unprivileged ARC runner Pods, node-local rootless BuildKit,
  the private WireGuard cluster transport, and the existing storage/control
  plane ownership.
- Add the server as preferred NVMe burst capacity and prove live scheduling,
  persistent cache reuse, and expanded scale-set capacity.
- Deliver the implementation through one reviewed, validated, merged Nook PR
  and publish completion evidence to Workbench.

## Constraints and exclusions

- Do not add Python, Docker-in-Docker, Podman, host Docker sockets, privileged
  ARC runners, public Kubernetes ports, or a DNS dependency.
- Do not expose credentials in repository content, command output, cloud-init,
  GitHub comments, or Workbench records.
- Do not introduce Ironic, PXE, or direct BMC management while OVH owns the
  physical installation lifecycle.
- Do not move Zot, Neo4j, or control-plane storage to the new worker.
- The provider reinstall is destructive only for the exact new blank server and
  must be guarded by an immediate pre-submit identity and state check.

## Change budget and PR sequence

- Estimated authored changed lines: 1,600
- Owning modules, packages, or layers: infrastructure provider automation, cloud-init host bootstrap, k0s worker lifecycle, ARC manifests and contracts, and Hive platform operations documentation
- Public or cross-module interfaces: infrastructure provisioning Taskfile entrypoints, private provider credential-file schema, declared worker inventory, and ARC runner-scale-set capacity
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,600
- Current PR slice and acceptance evidence: complete provider-to-ARC workflow; Acceptance evidence: typed tests, manifest contracts, remote PR validation, provider task success, Debian and cloud-init readiness, Kubernetes node readiness, BuildKit persistence, ARC dispatch, and cache benchmark
- PR slices and acceptance evidence: complete provider-to-ARC workflow; Acceptance evidence: typed tests, manifest contracts, remote PR validation, provider task success, Debian and cloud-init readiness, Kubernetes node readiness, BuildKit persistence, ARC dispatch, and cache benchmark

## Initial plan

1. Record the provider and worker inventory contract, cloud-init template, and
   typed OVH API operations with unit-tested request and redaction behavior.
2. Compose an idempotent Taskfile workflow that reinstalls only the exact blank
   server, waits for SSH and cloud-init, and invokes the existing private mesh
   and k0s worker reconciler.
3. Expand ARC BuildKit topology and scheduling capacity to include the second
   Rise-S without weakening the current priority and spread rules.
4. Validate the repository contracts remotely, merge the reviewed PR, execute
   the production workflow, and verify provider, host, k0s, ARC, and persistent
   cache state.

## Completion evidence

- The provider reports the pinned Debian release and no active install task.
- The host reports successful cloud-init, expected hostname, storage, KVM, and
  passwordless bounded administration.
- The k0s API reports four ready ARC build nodes with the declared labels and
  private addresses.
- One ready persistent BuildKit shard exists per declared node, warm reuse
  survives Pod replacement, and ARC can dispatch onto the new server.
- Exact-head repository checks, review resolution, readiness, squash merge, and
  Workbench completion records are visible.

## Safety review

This plan contains an abstract operational contract only. It contains no source
conversation, sensitive value, private data, unfiltered machine output, local
path, or unnecessary provider detail.
