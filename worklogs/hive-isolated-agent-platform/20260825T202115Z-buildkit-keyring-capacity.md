---
title: BuildKit kernel key capacity delivery
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/stabilize-buildkit-kernel-key-capacity.md
plan: plans/hive-isolated-agent-platform/20260825T192700Z-buildkit-kernel-key-capacity.md
nook_pr: 1107
status: completed
started_at: 2026-08-25T19:27:00Z
finished_at: 2026-08-25T20:21:15Z
agent: codex
---

# BuildKit kernel key capacity delivery

## Outcome

Provisioned and verified durable kernel key capacity for every qualified ARC
BuildKit node so concurrent rootless builds no longer fail with the misleading
`disk quota exceeded` container-start error.

## Progress

- Added convergent sysctl installation and runtime verification to ARC host preparation.
- Added static manifest-contract coverage for the quota floor and persistent file.
- Recorded the operational invariant in the owning ARC architecture document.
- Applied the configuration through the normal deployment path to all four build nodes.

## Implementation problems

- The original runtime symptom looked like filesystem exhaustion, but live host evidence identified per-user kernel key exhaustion.
- The first portable installer attempted to use `/dev/stdin` as an `install` source. Debian rejected that source, so preparation now uses a private temporary file followed by `sudo install` and cleanup.
- `main` advanced after the first green validation cycle. The branch was rebased and the replacement exact head was validated again.

## Decisions

- Keep rootless node-local BuildKit in regular Kubernetes Pods; do not add DinD, Podman, host Docker sockets, Kata, or another runtime.
- Treat kernel key capacity as a build-host admission invariant and fail closed before a node is activated.
- Use one documented floor on every build node rather than tuning hosts independently.

## Validation

- `bun .github/scripts/arc-manifest-contract.ts`
- `task loom:cortex-audit`
- `task loom:verify`
- `task preflight:loom-contracts`
- `task loom:pre-push`
- `task infra:arc:deploy`
- Exact-head PR validation, deployment preview, and Codex review for Nook PR #1107.
- Live verification reported `kernel.keys.maxkeys=20000` and `kernel.keys.maxbytes=2000000` on `bynull-servo`, `nook-rise-s-1`, `nook-rise-s-2`, and `ovh-us`.

## Remaining work

None.
