---
title: Permit the rootless Hive sandbox inside Kata
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T02:38:06Z
agent: codex
---

# Permit the rootless Hive sandbox inside Kata

## Interpreted request

Complete the live Hive recovery by allowing Codex's rootless Bubblewrap sandbox
to perform the namespace mounts it requires inside the already isolated
Dragonball guest, then validate, merge, redeploy, and resume the failed Main
repair chain.

## Requirements

- Scope the relaxed syscall policy to the untrusted worker container only.
- Keep capabilities dropped, privilege escalation disabled, the root filesystem
  read-only, and Dragonball as the outer runtime boundary.
- Preserve the live deployment smoke so a rollout cannot succeed when
  Bubblewrap cannot create its sandbox.
- Validate the change on its pull request, merge it, deploy the merge commit,
  and prove the queue resumes.

## Constraints and exclusions

- All infrastructure and cluster operations remain Taskfile-owned.
- Sidecars and other Hive workloads retain the default seccomp profile.
- No privileged containers, host mounts, Docker-in-Docker, or host Docker
  aliases are introduced.
- End-to-end product suites remain outside this focused runtime repair.

## Initial plan

1. Add the narrow worker-container seccomp override and manifest contract.
2. Format, validate, publish, and monitor the focused pull request.
3. Merge and deploy the exact merge commit.
4. Require the live Dragonball/Bubblewrap smoke to pass.
5. Re-arm and monitor the failed Main repair dependency chain.

## Completion evidence

- Green exact-head pull-request checks and readiness audit.
- Merged pull request and digest-pinned Hive deployment.
- Four ready worker pods plus a successful live Bubblewrap sandbox smoke.
- Queue evidence showing the environment blocker and Main repair advancing.

## Safety review

This plan contains no raw prompt, transcript, credentials, private data, raw
logs, local paths, or unnecessary infrastructure details.
