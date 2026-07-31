---
title: Public authenticated Zot registry and BuildKit cutover
feature: hive-isolated-agent-platform
plan: plans/hive-isolated-agent-platform/20260731T0156Z-public-zot-registry.md
nook_pr: 885
status: completed
started_at: 2026-07-31T01:56:00Z
finished_at: 2026-07-31T04:40:00Z
agent: cursor
---

# Public authenticated Zot registry and BuildKit cutover

## Outcome

Zot is publicly reachable at `https://registry.nokey.sh` with Traefik HTTPS and
htpasswd auth. Host loopback/`kubectl port-forward` paths are gone. Hosted
BuildKit and Hive caches use `type=registry` on that host. PR #885 merged to
Main; Main is seeding registry cache refs.

## Progress

- Added Zot htpasswd Secret, ClusterIP `10.96.90.10:5000`, NetworkPolicy, and
  Traefik `Host(\`registry.nokey.sh\`)` route with host-network Traefik/Redis.
- Removed loopback systemd unit and every port-forward path; registry checks
  require anonymous 401 and authenticated 200.
- Retargeted Hive image refs and containerd/Docker auth to `registry.nokey.sh`.
- Switched bake/CI from `type=gha` to registry refs; wired `docker/login-action`
  through `nook-docker-setup` and GitHub secrets.
- Created DNS A `registry.nokey.sh` → `40.160.60.148` (DNS-only); restored
  nftables INPUT for TCP 443/6380 and ensured deploy re-applies those rules.
- Merged https://github.com/meta-secret/nook/pull/885 after exact-head validation.

## Implementation problems

- Traefik host networking hit default-drop nftables INPUT after leaving Docker
  bridge publish; edge accepts for 443/6380 had to be restored and persisted.
- Wrangler OAuth lacked DNS write; Cloudflare MCP `execute` created the A record.
- Preflight contracts still assumed bridge port maps, private Zot, and a remote
  workflow with zero secrets; updated for host network + registry login allowlist.
- Concurrent agents dirtied the shared checkout; finished on an isolated worktree.

## Decisions

- Product hostname `registry.nokey.sh` (not `*.bynull.link`) for the OCI registry.
- No anonymous pull/push; Main alone writes shared BuildKit cache refs.
- Traefik reaches Zot only via ClusterIP; no host `:5000`.

## Validation

- Anonymous `https://registry.nokey.sh/v2/` → 401; authenticated → 200 (LE cert).
- No host `:5000`; loopback unit absent; Borg `docker login` succeeds.
- PR #885 critical checks green; squash-merged as `92d187aed36cd52790c042d52ec84a227f6ffa21`.
