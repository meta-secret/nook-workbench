---
title: Reproducible Rise-S provisioning with standard OVH images
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/reproduce-bare-metal-worker-provisioning.md
started_at: 2026-08-25T03:03:39Z
agent: codex
supersedes: plans/hive-isolated-agent-platform/20260825T025020Z-reproducible-rise-s-provisioning.md
---

# Reproducible Rise-S provisioning with standard OVH images

## Interpreted request

Turn the purchased compute server into production k0s and ARC burst capacity.
Represent provider installation, generic host bootstrap, cluster enrollment,
cache topology, and verification as reviewed recovery automation.

## Requirements

- Verify provider identity and state before every reinstall mutation.
- Use OVH's standard Debian image and software RAID installation path.
- Apply an idempotent Taskfile-owned SSH, sudo, package, and host baseline after
  the provider reports installation success.
- Continue through private mesh enrollment, k0s joining, ARC qualification,
  retained BuildKit storage, and live verification without interactive host work.
- Read provider credentials from the private Nook store with restrictive
  permissions and never emit their values.
- Add the second Rise-S as preferred NVMe burst capacity and prove persistent
  cache reuse.
- Merge the reviewed implementation and publish completion evidence.

## Constraints and exclusions

- Do not use BYOI, BYOLinux, cloud-init user-data, or a custom image pipeline.
  The standard Debian template rejects config-drive user-data. BYOI also bypasses
  the provider's normal software RAID installation.
- Do not introduce Ironic, PXE, BMC management, Python, Docker-in-Docker,
  Podman, host runtime sockets, privileged ARC runners, public Kubernetes
  endpoints, or DNS changes.
- Preserve an installed non-declared OS unless disaster recovery is explicitly
  requested for the exact inventory entry.
- Do not move durable control-plane services to the new worker.

## Change budget and PR sequence

- Estimated authored changed lines: 1,500
- Owning modules, packages, or layers: infrastructure provider automation, generic host bootstrap, k0s worker lifecycle, ARC manifests and contracts, and platform operations documentation
- Public or cross-module interfaces: infrastructure provisioning Taskfile entrypoints, private provider credential-file schema, declared worker inventory, and ARC runner-scale-set capacity
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,500
- Current PR slice and acceptance evidence: complete provider-to-ARC workflow; Acceptance evidence: typed tests, manifest contracts, remote validation, provider task success, Debian and host-baseline readiness, Kubernetes node readiness, BuildKit persistence, ARC dispatch, and cache benchmark
- PR slices and acceptance evidence: complete provider-to-ARC workflow; Acceptance evidence: typed tests, manifest contracts, remote validation, provider task success, Debian and host-baseline readiness, Kubernetes node readiness, BuildKit persistence, ARC dispatch, and cache benchmark

## Initial plan

1. Keep the typed OVH API operations and reviewed server inventory.
2. Replace the unsupported config-drive assumption with a standard Debian
   reinstall followed by idempotent host reconciliation over SSH.
3. Expand ARC BuildKit topology and scheduling capacity for the new worker.
4. Validate, review, merge, deploy, and prove provider, host, k0s, ARC, and cache
   state.

## Completion evidence

- The provider reports the declared Debian release and no active install task.
- The host reports the expected identity, packages, SSH policy, sudo boundary,
  storage, and KVM availability.
- Four ARC build nodes and four persistent BuildKit shards are ready.
- The new node accepts an ARC workload and retains warm cache state across a
  BuildKit Pod replacement.
- Exact-head checks, review resolution, readiness, merge, and Workbench records
  are visible.

## Safety review

This superseding plan contains no source conversation, sensitive value, private
data, unfiltered machine output, local path, or unnecessary provider detail.

