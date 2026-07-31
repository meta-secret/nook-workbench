---
title: Public authenticated Zot registry and BuildKit cutover
feature: hive-isolated-agent-platform
status: completed
created: 2026-07-31
completed: 2026-07-31
nook_pr: 885
---

# Public authenticated Zot registry and BuildKit cutover

## Intent

Expose the Borg Zot OCI registry on `registry.nokey.sh` with HTTPS (Traefik/ACME) and htpasswd authentication. Remove the host loopback registry path and every `kubectl port-forward`. Cut hosted BuildKit caches from GitHub Actions `type=gha` to `type=registry` on Zot so delivery and Hive stop burning the 10 GiB GHA cache quota.

## Constraints

- Hostname is the product domain `registry.nokey.sh`, not personal `bynull.link`.
- Auth is Zot htpasswd; token lives in host secrets and GitHub Actions secrets.
- No host `:5000` listener and no `kubectl port-forward` in deploy, migrate, check, or runtime.
- Traefik reaches Zot only through a ClusterIP Service (Traefik on host network).
- Main remains the sole BuildKit cache publisher; PR/remote/release restore only.
- Hive images and containerd pulls use the same public registry hostname.

## Steps

1. Add Zot htpasswd, ClusterIP Service, NetworkPolicy ingress, Traefik HTTPS router; delete loopback unit and localhost containerd registry config.
2. Retarget Hive publish/pull to `registry.nokey.sh` with host Docker and containerd auth.
3. Switch bake/CI/Hive cache wiring from `type=gha` to `type=registry`.
4. Update preflight contracts and infra/cortex docs.
5. Create DNS, deploy, sync GitHub secrets, seed Main cache.

## Completion evidence

- Anonymous `https://registry.nokey.sh/v2/` returns 401; authenticated access returns 200.
- No host `:5000` listener and no port-forward unit/process.
- Delivery bake uses registry refs on `registry.nokey.sh` and forbids `type=gha`.
- Hive image refs use `registry.nokey.sh`.
