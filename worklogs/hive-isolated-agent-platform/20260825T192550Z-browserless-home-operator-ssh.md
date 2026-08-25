---
title: Browserless home operator SSH delivery
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/browserless-home-operator-ssh.md
plan: plans/hive-isolated-agent-platform/20260825T182602Z-browserless-home-operator-ssh.md
nook_pr: 1106
status: completed
started_at: 2026-08-25T18:26:02Z
finished_at: 2026-08-25T19:25:50Z
agent: codex
---

# Browserless home operator SSH delivery

## Outcome

Added a reproducible, key-only `nook-home-lan` SSH route for local operator
automation while retaining Cloudflare Access as the explicit off-network
recovery path.

## Progress

- Added repository-owned installation and validation for the managed LAN alias.
- Pinned the trusted home-server host identity and required strict host-key checking.
- Routed local infrastructure automation through the non-interactive alias.
- Documented the LAN-primary and Access-fallback boundary.

## Implementation problems

- The existing alias always invoked interactive Cloudflare Access, even from the local network.
- Direct LAN access needed to reuse the trusted host identity without weakening host-key verification.

## Decisions

- Keep Cloudflare Access unchanged for off-network recovery.
- Fail closed when the LAN route or pinned identity is unavailable.
- Do not expose a public SSH listener or use permissive host-key acceptance.

## Validation

- `task loom:pre-push`
- Exact-head PR validation, deployment preview, Codex review, and readiness for Nook PR #1106.
- Live `ssh nook-home-lan` key authentication reached `bynull-servo` without opening a browser.

## Remaining work

None.
