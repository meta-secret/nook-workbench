---
title: SeaweedFS sccache and *.dev.nokey.sh edge hosts
feature: hive-isolated-agent-platform
status: active
created: 2026-07-31
---

# SeaweedFS sccache and `*.dev.nokey.sh` edge hosts

## Intent

Retarget Borg CI edge hosts under `*.dev.nokey.sh` (`registry.dev.nokey.sh`,
`sccache.dev.nokey.sh`), replace Redis sccache with SeaweedFS S3 (HTTPS +
access-key auth), and remove Redis/:6380 entirely. Hosted delivery stays
secret-free for BuildKit parity.

## Constraints

- No anonymous S3 or registry access.
- Public surface remains :443 only.
- Hosted delivery never receives S3 keys.
- Cold sccache after cutover is expected.

## Steps

1. Rename registry hostname to registry.dev.nokey.sh across Traefik/CI/Hive.
2. Deploy SeaweedFS; remove Redis and Traefik :6380.
3. Rewire sccache clients to S3 credentials.
4. Update contracts/docs; deploy DNS; sync secrets; ship PR.
