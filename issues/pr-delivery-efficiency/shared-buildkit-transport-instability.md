# Shared BuildKit transport instability

Status: open

## Problem

The node-local Kubernetes BuildKit service intermittently resets or closes active client sessions across independent ARC jobs. This is an infrastructure reliability problem, not a product/test failure and not authorization to run Docker, Podman, DinD, a nested daemon, or a host socket inside k0s pods.

## Evidence

- Main run `33023126357` produced simultaneous cache/source transfer EOFs in multiple Rust jobs.
- Main run `33024401056` attempt 1 failed Proptest/Loom job `98362230762`, Dylint job `98362230793`, and native cache publication job `98362275381` with `rpc error: code = Unavailable ... EOF`.
- Main run `33024401056` attempt 2 recovered Dylint and native publication, proving the source-context repair, but Proptest/Loom job `98362953602` again ended with `error reading from server: EOF`.
- WASM publication job `98364045846` then failed with `connection reset by peer`; its bounded retry ran once and ended with `context deadline exceeded`.

## Constraints

- Do not run Docker or Podman daemons inside k8s/k0s.
- Do not mount a host container socket into runner pods.
- Keep clients connected to the existing node-local Kubernetes BuildKit service.
- Preserve fail-closed behavior for application and test failures.
- Do not add unbounded retries or repeatedly rerun the complete workflow.

## Investigation scope

- Correlate failures by BuildKit pod, node, restart count, OOM/cgroup events, session count, and server logs.
- Check service routing and whether long-lived gRPC sessions are crossing unhealthy or restarting backends.
- Measure concurrent solves/exports and memory/CPU pressure on the affected shard.
- Add service-level health and restart evidence to Workbench stats.
- Repair the BuildKit deployment or capacity outside product PRs, then prove with repeated unchanged-head jobs.

## Acceptance

- No unexplained EOF, reset, or session deadline failures across a representative repeated-run window.
- No nested runtime or host-socket workaround.
- Product checks and cache publication remain bounded and fail closed.
