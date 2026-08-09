---
title: Scale Zot for concurrent BuildKit traffic
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/run-private-zot-registry.md
started_at: 2026-08-09T23:20:40Z
agent: codex
---

# Scale Zot for concurrent BuildKit traffic

## Interpreted request

Increase the production Zot registry capacity before Kubernetes-managed GitHub
Actions runners begin concurrent BuildKit cache transfers on the cluster node.

## Requirements

- Replace the small baseline resource limit with capacity suitable for parallel
  cache imports and exports.
- Preserve capacity for build runners and the existing Hive services.
- Keep the registry security, storage, retention, and authorization boundaries
  unchanged.
- Add repository-owned contract coverage for the selected resource floor.
- Deliver the change through a reviewed Nook PR and exact-head validation.
- Deploy the merged manifest and verify the production rollout.

## Constraints and exclusions

- The node has sixteen physical CPU cores and ample memory.
- The initial target is four CPU cores and eight GiB of memory.
- Eight CPU cores are not reserved until production measurements show that Zot
  is CPU-bound.
- This task does not install the GitHub Actions runner operator.
- This task does not change registry credentials or network exposure.

## Initial plan

1. Inspect the manifest, contract tests, deployment task, and owning docs.
2. Update Zot resources and add a regression assertion.
3. Publish a formatted PR and run hosted validation.
4. Merge the exact validated head.
5. Deploy the merged revision and verify Zot health and effective resources.
6. Publish the linked Workbench completion records and statistics.

## Completion evidence

- Repository contract tests validate the new Zot resource floor.
- The Nook PR passes exact-head repository validation and is squash-merged.
- The production Zot Pod becomes ready with the merged resource configuration.
- Authenticated registry health and retained storage checks pass after rollout.

## Safety review

- This plan contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
