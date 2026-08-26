# Retry transient Main cache exports

Status: in progress

## Problem

A verified Main job can fail during remote BuildKit cache export with `rpc error: code = Unavailable ... EOF`. The product checks have already passed, but the only recovery was rerunning the complete failed job.

Post-merge verification of PR #1162 also exposed a separate fail-closed source-context defect: the native cache publisher rebuilt `preflight-test` without setting `PREFLIGHT_SOURCE_CONTEXT`, so repository fixtures under `infra/sim/bake-cache` were absent from the named source context.

## Scope

- Reuse the repository bounded BuildKit transport retry for cache-publication Bake calls.
- Retry once inside the same job on recognized transport failures.
- Keep application and test failures fail-closed.
- Pass the immutable repository root explicitly to the preflight cache-publication named context.
- Do not introduce Docker, Podman, DinD, nested daemons, or host socket mounts in k0s.

## Acceptance

- A late cache-export EOF is retried once.
- An application failure is not retried.
- Native preflight cache publication explicitly selects the full repository source context.
- Focused shell and preflight contracts pass.
- Exact-head PR validation and readiness pass.
- Post-merge Main completes, or any remaining external infrastructure failure is recorded separately without an unbounded retry loop.

## Evidence

- PR #1162 merged as `c8a2be3d55fe66c1a42fd65e698cc4b6827dee40` after exact-head validation passed.
- Main run `33023126357` attempt 1 showed shared BuildKit transport EOFs; the bounded retry recovered one native source transfer.
- Main run `33023126357` attempt 2 correctly refused to retry the non-transient missing-fixture failure in `preflight-test`, identifying the source-context defect.
