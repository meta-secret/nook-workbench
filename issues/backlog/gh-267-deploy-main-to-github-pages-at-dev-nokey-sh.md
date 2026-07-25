---
title: "Deploy main to GitHub Pages at dev.nokey.sh"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T01:04:57Z
updated_at: 2026-07-09T01:15:13Z
source_issues: ["https://github.com/meta-secret/nook/issues/267"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Deploy main to GitHub Pages at dev.nokey.sh

## Imported context

This record was imported from [Nook GitHub issue #267](https://github.com/meta-secret/nook/issues/267)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

`main` should deploy the active development build through GitHub Pages at `https://dev.nokey.sh`, rather than publishing the development channel through Cloudflare Pages at `https://nokey-sh.pages.dev`.

## Current Status

- `release/v1` deploys the stable v1 artifact to GitHub Pages for `https://nokey.sh`.
- `main` still runs a Cloudflare Pages deploy for the development channel and records a separate `development` deployment status.
- Prior hosting split work was tracked in #253, but this GitHub Pages-specific main-branch deployment requirement is still missing from the workflow and docs.

## Acceptance Criteria

- `.github/workflows/main.yml` uploads the built web artifact and deploys it with `actions/deploy-pages` on pushes to `main`.
- The `main` deploy build uses `VITE_SITE_URL=https://dev.nokey.sh` and `VITE_PUBLIC_APP_URL=https://dev.nokey.sh`.
- The deployed artifact includes the `dev.nokey.sh` Pages custom-domain marker.
- Main-branch CI/deployment docs describe GitHub Pages as the development host at `https://dev.nokey.sh`.
- OAuth/provider origin documentation and tests treat `https://dev.nokey.sh` as the development origin alongside stable `https://nokey.sh`.

## References

- Related: #253
- Workflow: `.github/workflows/main.yml`
- Stable workflow: `.github/workflows/release-v1.yml`


## Historical comments

No comments.
