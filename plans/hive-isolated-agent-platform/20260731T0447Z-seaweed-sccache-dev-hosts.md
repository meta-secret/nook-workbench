---
title: SeaweedFS sccache and *.dev.nokey.sh edge hosts
feature: hive-isolated-agent-platform
status: active
created: 2026-07-31
---

# SeaweedFS sccache and `*.dev.nokey.sh` edge hosts

## Intent

Move Borg CI edge hosts under `dev.nokey.sh` (`registry.dev.nokey.sh`,
`sccache.dev.nokey.sh`), replace Redis sccache with SeaweedFS S3 (HTTPS +
access-key auth), keep hosted delivery secret-free, and remove Redis/:6380.

## Constraints

- Product hostnames under `*.dev.nokey.sh` only for these edge services.
- Anonymous S3 and registry access denied.
- Hosted delivery never receives sccache S3 credentials.
- No host `:8333` or `:6380` public listeners; Traefik `:443` only.
- Redis fully removed (not kept as rollback).

## Steps

1. Retarget registry to `registry.dev.nokey.sh`.
2. Deploy SeaweedFS; remove Redis; Traefik route for `sccache.dev.nokey.sh`.
3. Rewire local/Hive sccache clients to S3.
4. Update contracts/docs; DNS; deploy; PR.
