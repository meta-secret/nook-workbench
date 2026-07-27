---
title: Move Hive publication capability to a filesystem mailbox
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T14:41:05Z
agent: codex
---

# Move Hive publication capability to a filesystem mailbox

## Interpreted request

Complete the production Hive repair after a real embedded Codex retry proved
that its deny-network policy rejects Unix socket connections even when the
task-bound socket is visible inside the sandbox.

## Requirements

- Preserve typed, task-bound publication without an inherited descriptor or a
  sandbox socket connection.
- Use a unique atomic request/response exchange that cannot shift an abandoned
  response onto a later command.
- Keep publication unavailable to non-repair tasks.
- Retain the broker-owned private Git checkout and credential boundary.
- Exercise the real client through the production Bubblewrap filesystem shape.
- Deliver through an exact-head PR, merge, Taskfile deployment, and live agent
  retry.

## Constraints and exclusions

- Do not expose GitHub or Redis credentials to the agent, filesystem mailbox,
  logs, image layers, or untrusted pull requests.
- Do not weaken the embedded Codex deny-network policy, Kata, Bubblewrap,
  seccomp, or Kubernetes isolation.
- Do not use Docker-in-Docker or `host.docker.internal`.
- Browser and extension E2E repair remains deferred.

## Initial plan

1. Replace the sandbox-side Unix socket client with a private task-bound
   filesystem mailbox beneath the bound worker workspace.
2. Relay bounded typed requests to fresh preconnected broker streams and return
   responses through create-new atomic files.
3. Add behavior coverage for request uniqueness, abandoned clients, cleanup,
   permissions, and broker loss.
4. Update the live diagnostic and architecture contract.
5. Run Taskfile validation, publish and merge the PR, deploy the exact merge,
   and rearm the production failure chain for terminal proof.

## Completion evidence

A green exact-head PR, successful Taskfile deployment, a live
`hive github ping` through Bubblewrap without a socket, and a rearmed embedded
agent that progresses beyond both bad-file-descriptor and operation-not-permitted
publication failures.

## Safety review

This plan contains no credentials, raw logs, private data, local paths, or
prompt transcript.
