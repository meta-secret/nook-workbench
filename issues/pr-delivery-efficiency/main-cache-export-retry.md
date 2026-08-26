# Retry transient Main cache exports

Status: completed

## Problem

A verified Main job could fail during remote BuildKit cache export with `rpc error: code = Unavailable ... EOF`. The product checks had already passed, but recovery required rerunning the complete failed job.

Post-merge verification of PR #1162 also exposed a separate fail-closed source-context defect: the native cache publisher rebuilt `preflight-test` without setting `PREFLIGHT_SOURCE_CONTEXT`, so repository fixtures under `infra/sim/bake-cache` were absent from the named source context.

## Delivered scope

- Reused the repository bounded BuildKit transport retry for cache-publication Bake calls.
- Retried once inside the same job on recognized transport failures.
- Kept application and test failures fail-closed.
- Passed the immutable repository root explicitly to the preflight cache-publication named context.
- Introduced no Docker, Podman, DinD, nested daemons, or host socket mounts in k0s.

## Acceptance evidence

- PR #1162 merged as `c8a2be3d55fe66c1a42fd65e698cc4b6827dee40` after exact-head validation run `33022575400` and readiness passed.
- PR #1163 merged as `303c983abd66fba8f5652d85ead08bcf1fc99ce1` after exact-head validation run `33023984099` and readiness passed.
- Main run `33024401056` attempt 2 completed Native Rust verification and `Publish verified native BuildKit cache` successfully in job `98362954750`; the previously missing bake-cache fixture failure did not recur.
- The bounded retry continued to fail closed for non-transient test failures and stopped after one retry for persistent transport failures.

## Remaining boundary

Shared BuildKit transport instability remains outside this completed code-delivery scope and is tracked in `issues/pr-delivery-efficiency/shared-buildkit-transport-instability.md`.
