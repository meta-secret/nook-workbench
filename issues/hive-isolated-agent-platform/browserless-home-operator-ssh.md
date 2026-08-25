---
title: Make home-node operator SSH browserless on the local network
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-25T18:26:02Z
updated_at: 2026-08-25T18:26:02Z
source_issues: []
related_prs: []
depends_on:
  - issues/hive-isolated-agent-platform/move-trusted-container-workflows-to-arc.md
---

# Make home-node operator SSH browserless on the local network

## Context

The home ARC worker is reachable directly from the operator network, but its
existing SSH alias always invokes interactive Cloudflare Access. That makes
repository-owned infrastructure automation depend on a browser even when no
public network traversal is needed.

## Outcome

Infrastructure automation installs and uses a pinned, key-only LAN SSH alias
for the home worker. The existing Cloudflare Access hostname remains an
explicit off-network recovery path.

## Scope

- Add reproducible operator SSH configuration for the home worker.
- Pin and verify the expected SSH host identity before trusting the LAN route.
- Make home-node infrastructure operations fail non-interactively when the LAN
  route is unavailable.
- Document the LAN-primary and Access-fallback boundary.
- Do not expose SSH publicly or weaken Cloudflare Access policy.

## Acceptance criteria

- [ ] A repository Task installs the managed LAN SSH alias idempotently.
- [ ] The alias uses public-key authentication and the pinned host identity.
- [ ] Home-node infrastructure Tasks do not open a browser on the local path.
- [ ] Static contracts cover the alias, identity pin, and fallback separation.
- [ ] Exact-head validation, review, readiness, and merge pass.

## Progress

- 2026-08-25: Direct key-authenticated LAN SSH was proven from the operator
  machine using the existing trusted host identity.

## Findings and decisions

- Keep Cloudflare Access as an off-network recovery path rather than removing
  it.
- Never substitute permissive host-key acceptance for the interactive login.

## References

- `infra/Taskfile.yml`
- `infra/tasks/mesh.yml`
- `infra/README.md`
