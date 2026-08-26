# Retry transient Main cache exports

Status: in progress

## Problem

A verified Main job can fail during remote BuildKit cache export with `rpc error: code = Unavailable ... EOF`. The product checks have already passed, but the only recovery is rerunning the complete failed job.

## Scope

- Reuse the repository bounded BuildKit transport retry for cache-publication Bake calls.
- Retry once inside the same job on recognized transport failures.
- Keep application and test failures fail-closed.
- Do not introduce Docker, Podman, DinD, nested daemons, or host socket mounts in k0s.

## Acceptance

- A late cache-export EOF is retried once.
- An application failure is not retried.
- Focused shell and preflight contracts pass.
- Exact-head PR validation and readiness pass.