---
title: "Make nokey.sh the stable v1 host and move development to dev.nokey.sh"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T16:59:12Z
updated_at: 2026-07-08T17:56:39Z
source_issues: ["https://github.com/meta-secret/nook/issues/253"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Make nokey.sh the stable v1 host and move development to dev.nokey.sh

## Imported context

This record was imported from [Nook GitHub issue #253](https://github.com/meta-secret/nook/issues/253)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Invert the current release/development hosting model: `https://nokey.sh` should be the stable v1 release host, while active `main` development deploys to `https://dev.nokey.sh`.

## Current Status

- `main` currently owns the GitHub Pages deployment that serves `https://nokey.sh`.
- `release/v1` currently verifies and deploys to Cloudflare Pages using the old `https://v1.nokey.sh` release assumption.
- Cloudflare branch deployment exists for `release/v1`, but the desired stable public host is now the root domain instead.

## Acceptance Criteria

- `release/v1` is the workflow source for the stable public app at `https://nokey.sh`.
- `main` no longer deploys over the stable root host.
- `main` deploys development builds with public app/site metadata set to `https://dev.nokey.sh`.
- OAuth origin allowlists and provider setup docs reflect `https://nokey.sh` as stable and `https://dev.nokey.sh` as development, with the old `https://v1.nokey.sh` origin removed.
- `.cortex` CI/release docs describe the stable/root and development/dev split.
- GitHub Actions, release branch, and tag state are updated so the deployed stable version matches the implemented model.

## Notes

Requested during v1 release setup after deciding the root domain should always be the stable channel.


## Historical comments

No comments.
