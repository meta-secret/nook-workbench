---
title: Run the private OCI registry on k0s with Zot
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/run-private-zot-registry.md
started_at: 2026-07-30T03:02:25Z
agent: codex
---

# Run the private OCI registry on k0s with Zot

## Interpreted request

Replace the VM's Compose-managed OCI registry with a durable Zot deployment
owned by the existing k0s platform, and leave the production Linux node with a
working private registry that can support Hive images and a future authenticated
BuildKit cache path.

## Requirements

- Run a pinned Zot image as a non-root Kubernetes workload with health probes,
  resource bounds, and persistent retained storage.
- Keep the current Hive image publication and containerd pull path working
  through the host loopback boundary during and after migration.
- Preserve existing registry content or perform a verified compatible migration
  before removing the legacy Compose registry.
- Keep unauthenticated registry access private to the server; any remote CI
  endpoint must use trusted TLS and revocable authentication.
- Add idempotent deployment, status, diagnostic, and migration behavior with
  mechanical manifest and Taskfile coverage.
- Update infrastructure and CI architecture documentation so Zot registry
  storage is not confused with the Redis compiler cache or existing GitHub
  Actions BuildKit cache.
- Deliver through the normal formatted, hosted-validation, review-resolution,
  squash-merge, Workbench, and production deployment workflow.

## Constraints and exclusions

- Do not expose an unauthenticated registry port publicly.
- Do not place registry credentials in source, image layers, logs, URLs, or
  Workbench records.
- Do not silently switch untrusted pull-request jobs to a credential-bearing
  cache.
- This delivery establishes and operates Zot; hosted cache cutover is included
  only if the existing workflow can consume it without weakening trust
  boundaries or cache correctness.
- The implementation starts from the current remote Main revision and preserves
  unrelated work.

## Initial plan

1. Inspect the current Compose registry, k0s storage, containerd mirror,
   deployment, firewall, secret-recovery, and CI cache contracts.
2. Add the pinned Zot workload, retained local storage, narrow networking, and
   loopback service path.
3. Add safe credential generation/recovery and an idempotent legacy-data
   migration and cutover sequence.
4. Extend operational commands, documentation, and automated infrastructure
   contracts.
5. Format, push, run hosted focused and complete validation, resolve existing
   feedback, and squash-merge.
6. Deploy the merged revision to the production Linux node and verify Zot,
   containerd pulls, Hive publication, persistence, and exposure boundaries.
7. Publish the linked Workbench issue update, worklog, and agent statistics.

## Completion evidence

- A merged Nook pull request with green exact-head repository-owned checks.
- Contract coverage for Zot configuration, retained storage, private exposure,
  migration ordering, and containerd integration.
- Production Kubernetes status showing a healthy Zot workload and bound
  retained volume.
- Successful authenticated or loopback OCI API probe plus publish/pull proof
  through the deployed registry.
- Verified absence of the legacy Compose registry after safe cutover.
- Published Workbench issue, plan, worklog, and AI-agent statistics.

## Safety review

This is a synthesized public-safe plan. It contains no raw prompt, transcript,
secret, private data, raw log, local path, or unnecessary infrastructure detail.
