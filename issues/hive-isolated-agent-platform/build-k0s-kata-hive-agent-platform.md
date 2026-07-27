---
title: Build the isolated Hive agent platform
feature: hive-isolated-agent-platform
status: done
priority: high
automation: manual
owner: codex
created_at: 2026-07-26T15:19:26Z
updated_at: 2026-07-27T16:58:11Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/786
  - https://github.com/meta-secret/nook/pull/792
  - https://github.com/meta-secret/nook/pull/794
  - https://github.com/meta-secret/nook/pull/795
  - https://github.com/meta-secret/nook/pull/811
  - https://github.com/meta-secret/nook/pull/813
depends_on: []
agent: codex
pull_request: https://github.com/meta-secret/nook/pull/813
---

# Build the isolated Hive agent platform

Implement, validate, merge, and deploy the k0s/Kata/Neo4j Hive platform from
the approved feature specification. The current delivery also includes an
efficient coalesced Main train and durable, end-to-end automated repair work.

## Current delivery contract

- Pull requests remain the unit of review and validation.
- Main preserves cache writers and keeps only the newest pending revision.
- A failed Main run becomes a durable, deduplicated Hive queue item.
- One logical agent owns diagnosis through successful squash merge and green
  Main verification.
- Pod loss resumes durable branch, PR, and verification checkpoints.
- Blocking work is expressed through task dependencies and prioritized without
  losing the original task.

## Related work

- PR: https://github.com/meta-secret/nook/pull/786
- PR: https://github.com/meta-secret/nook/pull/792
- PR: https://github.com/meta-secret/nook/pull/794
- PR: https://github.com/meta-secret/nook/pull/795
- PR: https://github.com/meta-secret/nook/pull/811
- PR: https://github.com/meta-secret/nook/pull/813
- Plan: `plans/hive-isolated-agent-platform/2026-07-26T06-08-23Z-durable-main-repair-delivery.md`
- Plan: `plans/hive-isolated-agent-platform/2026-07-26T23-07-05Z-pin-hive-codex-light.md`
- Deferred: [Automate unchanged-web deployment attestations](automate-agentic-only-deployment-attestations.md)

## Delivered

- Merged the stateful k0s, Kata Dragonball, Neo4j, and four-worker Hive
  deployment with Taskfile-owned recovery and verification.
- Deployed the exact merge commit to the production Linux node.
- Verified four healthy isolated workers, the dispatcher and lifecycle
  controller, retained Neo4j storage, default-deny networking, stable API
  routing, and the remote Redis compiler cache.
- Reworked Hive verification around the nook-app cache blueprint: manifest
  dependency boundaries, parallel compiler stages, remote sccache, scratch-only
  test exports, and trusted Main cache publication.
- Reduced the Hive verification build path from roughly nineteen minutes to a
  four-minute compiler critical path; the complete hosted workflow, including
  service setup and test execution, now finishes in under seven minutes.
- Installed pinned kubectl, Helm, and k9s on the node for direct SSH operator
  use through a short-lived-token kubeconfig with no persisted admin key.
- Pinned every Hive worker to Codex GPT-5.6 with low reasoning effort and
  verified the exact values in the Kubernetes manifest contract.
- Replaced sandbox-side publication sockets with a task-scoped filesystem
  mailbox whose request authorization and responses are bound to the exact
  request digest before the trusted broker can execute a mutation.
- Added bounded, lossless review-detail continuation and kept publication
  available only as an explicit writable root for Main-repair tasks.
- Deployed the exact PR 811 and PR 813 merges, then verified the full
  Dragonball, Bubblewrap, seccomp, publication-mailbox, cluster-connectivity,
  and durable-queue path on the live stateful cluster.
