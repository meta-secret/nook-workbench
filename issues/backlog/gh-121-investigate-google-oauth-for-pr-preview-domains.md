---
title: "Investigate Google OAuth for PR preview domains"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-29T21:13:22Z
updated_at: 2026-07-06T10:49:18Z
source_issues: ["https://github.com/meta-secret/nook/issues/121"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Investigate Google OAuth for PR preview domains

## Imported context

This record was imported from [Nook GitHub issue #121](https://github.com/meta-secret/nook/issues/121)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Problem

![Google OAuth origin_mismatch on PR preview (pr-118.nook-1n8.pages.dev)](https://github.com/user-attachments/assets/a66d0811-09f9-484a-a37e-faca7f880f15)

PR previews are deployed to Cloudflare Pages with per-PR alias URLs (e.g. `https://pr-118.nook-1n8.pages.dev`). Google Drive sign-in fails on these domains with:

```
Error 400: origin_mismatch
You can't sign in to this app because it doesn't comply with Google's OAuth 2.0 policy.
```

Google requires each **Authorized JavaScript origin** to be registered exactly in the OAuth client. Dynamic PR subdomains cannot be pre-registered at scale, and Google does not support wildcard origins.

## Current setup

- **PR previews:** `.github/workflows/pr.yml` deploys `nook-web/dist` to Cloudflare Pages (`CF_PAGES_BRANCH=pr-<number>`), comments the deployment alias URL on the PR.
- **Production:** `https://nokey.sh` (GitHub Pages) — Google OAuth works here.
- **Google OAuth:** browser-only GIS token client (`nook-web/src/lib/google-oauth.ts`); authorized origins today are `http://localhost:5173` and `https://nokey.sh` (`nook-web/src/lib/google-oauth-config.ts`).
- **Same constraint likely applies to iCloud** (allowed origin is `https://nokey.sh` in `nook-web/src/lib/icloud-oauth-config.ts`).

## Goal

Investigate whether and how we can enable Google authentication (and optionally other OAuth providers) on PR preview deployments, so reviewers can test sync-provider flows end-to-end on preview URLs.

## Investigation areas

1. **Google policy limits** — Confirm whether wildcard or pattern-based JavaScript origins are possible (expected: no). Document max number of origins per OAuth client if we need a hybrid approach.
2. **Stable preview origin** — Could previews use a fixed origin instead of per-PR subdomains?
   - Single host + path routing (e.g. `preview.nokey.sh/pr-118/`)
   - Single staging subdomain with query/path or cookie-based PR selection
   - Cloudflare Workers/Pages rewrite so OAuth sees one registered origin
3. **OAuth flow changes** — GIS token client is origin-bound. Would a redirect-based flow with a fixed redirect URI on `nokey.sh` (or a small backend) unlock preview use without registering every PR domain?
4. **Separate preview OAuth client** — Feasibility of a dedicated Google OAuth client for previews with a small set of fixed staging origins (not per-PR domains).
5. **Product/UX fallback** — If no viable fix: detect preview hosts and disable or gracefully degrade Google (and iCloud) sign-in with a clear message; document that sync testing on previews requires production or local dev.
6. **CI implications** — Any change should not weaken production OAuth security or require committing secrets.

## Acceptance criteria

- [ ] Document Google (and iCloud, if applicable) constraints for dynamic preview domains
- [ ] Evaluate at least 2–3 architectural options with pros/cons (security, maintenance, reviewer UX)
- [ ] Recommend a preferred approach (or explicit “not feasible without X”)
- [ ] If feasible, outline implementation steps (config, code, infra); if not, outline fallback UX

## References

- Deploy: `.task/ci.yml` → `_deploy-preview`, `.github/workflows/pr.yml`
- OAuth config: `nook-web/src/lib/google-oauth-config.ts`

## Historical comments

No comments.
