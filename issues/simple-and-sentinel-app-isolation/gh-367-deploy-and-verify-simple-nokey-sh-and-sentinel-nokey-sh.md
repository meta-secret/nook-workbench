---
title: "Deploy and verify simple.nokey.sh and sentinel.nokey.sh"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-14T03:35:31Z
updated_at: 2026-07-14T05:44:32Z
source_issues: ["https://github.com/meta-secret/nook/issues/367"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:simple-sentinel-apps"]
legacy_state_reason: "COMPLETED"
---

# Deploy and verify simple.nokey.sh and sentinel.nokey.sh

## Imported context

This record was imported from [Nook GitHub issue #367](https://github.com/meta-secret/nook/issues/367)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #360.

## Problem

Nook currently builds and deploys one web artifact. The two applications need
independent Cloudflare Pages projects/custom domains and CI verification while
preserving the repository's exact-head deployment gate.

## Scope

- Build/deploy separate immutable artifacts for `simple.nokey.sh` and
  `sentinel.nokey.sh`; keep `nokey.sh` as the public landing/router.
- Provision or reconcile Cloudflare Pages projects, custom domains, and DNS
  records idempotently from the authorized release workflow.
- Configure per-app public URLs, OAuth allowlists/callback guidance, WebAuthn
  origins/RP IDs, CSP/security headers, robots/sitemap behavior, and cache rules.
- Make PR previews expose and verify both app artifacts without weakening the
  repository-owned exact-head deployment record.
- Update main/release rollback and artifact extraction paths for both apps.
- Add live post-deploy checks that assert each hostname serves only its expected
  application and security policy.

## Acceptance Criteria

- CI builds both artifacts from the same commit and cannot deploy one stale app
  with the other fresh.
- Production/custom-domain setup is idempotent and emits actionable errors when
  Cloudflare/OAuth configuration is missing.
- Live verification checks canonical host, app kind, security headers, and
  absence/presence of the extension route as appropriate.
- The applicable repository-owned PR check and exact-head deployment status
  remain required and green.
- Deployment/rollback commands and required external OAuth console settings are
  documented.

## References

- `.github/workflows/pr.yml`
- `.github/workflows/main.yml`
- `.github/workflows/release.yml`
- `nook-app/.task/ci.yml`
- `.cortex/workflows/ci-pipeline.md`


## Historical comments

No comments.
