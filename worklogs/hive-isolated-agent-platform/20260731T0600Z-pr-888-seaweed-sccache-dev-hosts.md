---
title: SeaweedFS sccache + *.dev.nokey.sh cutover
status: completed
pr: https://github.com/meta-secret/nook/pull/888
plan: plans/hive-isolated-agent-platform/20260731T0448Z-seaweed-sccache-dev-hosts.md
merged_at: 2026-07-31T06:00:27Z
---

# Worklog — PR 888

## Progress
- Retargeted public Zot to `registry.dev.nokey.sh` and added `sccache.dev.nokey.sh`.
- Removed Redis Compose/Traefik/:6380 edge and deployed SeaweedFS S3 on Borg.
- Rewired local/Hive sccache clients to S3 credentials; hosted delivery stays secret-free.
- Updated preflight contracts and cortex/infra docs.

## Validation
- DNS A records created for both hostnames (DNS-only) to Borg `40.160.60.148`; apex `registry.nokey.sh` deleted.
- Smoke: registry anon `401`, sccache anon `403`, authenticated S3 head-bucket OK, docker login OK.
- `task pr:validate` green; squash-merged.

## Decisions
- SeaweedFS volume port `18080` (host `:8080` owned by kube-router).
- Healthcheck accepts anonymous S3 `403`.
- Cold sccache expected after Redis retirement.

## Remaining
- None for this cutover.
