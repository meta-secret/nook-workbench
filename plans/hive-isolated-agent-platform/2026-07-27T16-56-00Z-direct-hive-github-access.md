---
title: Give Hive agents direct GitHub access
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T16:56:00Z
agent: codex
supersedes: plans/hive-isolated-agent-platform/2026-07-27T16-50-51Z-trust-hive-codex-agents.md
---

# Give Hive agents direct GitHub access

## Interpreted request

Complete the trusted-agent architecture change in code and documentation.
Main-repair Codex agents should receive the existing repository-scoped GitHub
credential directly and use normal Git and GitHub tooling. Remove the custom
publication security and transport stack rather than retaining it as dormant
complexity.

## Requirements

- Mount the existing Hive GitHub Secret into the worker and expose it to Codex
  through the standard `GH_TOKEN` contract.
- Allow the repair agent to use normal authenticated GitHub and Git network
  operations.
- Remove the publication broker sidecar, socket, filesystem mailbox, relay,
  custom `hive github` command surface, signing protocol, private broker
  checkout, and their dedicated smoke and contract coverage.
- Replace broker-specific worker instructions and completion checks with the
  repository's established `gh`, Taskfile, PR readiness, merge, Main
  verification, and Workbench workflows.
- Keep durable Hive task coordination, Codex authentication, Kata execution,
  task timeouts, and repository validation behavior intact.
- Carry the change through the normal pull-request lifecycle and squash merge.

## Constraints and exclusions

- Reuse the existing Kubernetes GitHub Secret; do not write credentials into
  source, Workbench, logs, or pull-request content.
- One shared repository-scoped token is acceptable.
- This delivery changes Nook source and manifests but does not deploy the
  resulting image or Kubernetes manifest to production.
- Product validation runs on GitHub Actions after required host formatting.

## Initial plan

1. Trace the publication subsystem through CLI, worker, Codex configuration,
   container image, manifests, Taskfile verification, and documentation.
2. Replace brokered publication with direct `GH_TOKEN`, normal GitHub network
   access, standard agent instructions, and durable completion evidence.
3. Delete the unused publication code and tests and update manifest contracts.
4. Format, push, open the PR, resolve CI and review findings, prove exact-head
   readiness, and squash-merge.
5. Publish the linked Workbench worklog and agent statistics.

## Completion evidence

- No Hive publication broker, mailbox, relay, or `hive github` implementation
  remains.
- The worker manifest directly provides the existing GitHub Secret to the Hive
  agent.
- Repository-owned GitHub Actions pass on the exact PR head.
- The PR is squash-merged and its Workbench records are published.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
