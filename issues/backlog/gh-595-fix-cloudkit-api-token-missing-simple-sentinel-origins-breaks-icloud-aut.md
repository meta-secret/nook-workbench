---
title: "fix: CloudKit API token missing simple/sentinel origins breaks iCloud auth"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T19:12:46Z
updated_at: 2026-07-21T19:12:46Z
source_issues: ["https://github.com/meta-secret/nook/issues/595"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: ""
---

# fix: CloudKit API token missing simple/sentinel origins breaks iCloud auth

## Imported context

This record was imported from [Nook GitHub issue #595](https://github.com/meta-secret/nook/issues/595)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

iCloud sign-in is broken on the live vault apps because the CloudKit Web Services API token allowlist does not include the app origins.

## Evidence

Token embedded in production (`c31649c685…ca4dc7d0`, container `iCloud.metasecret.project.com`) against `records/lookup`:

| `Origin` request header | Result |
|-------------------------|--------|
| `https://nokey.sh` | Auth OK (`NOT_FOUND` for dummy record) |
| `https://localhost:5173` | Auth OK |
| `https://simple.nokey.sh` | `AUTHENTICATION_FAILED` |
| `https://sentinel.nokey.sh` | `AUTHENTICATION_FAILED` |
| `https://simple.dev.nokey.sh` | `AUTHENTICATION_FAILED` |
| `https://sentinel.dev.nokey.sh` | `AUTHENTICATION_FAILED` |
| `https://localhost:5175` | `AUTHENTICATION_FAILED` |
| `https://dev.nokey.sh` | `AUTHENTICATION_FAILED` |

Client allowlist in `oauth-origin.ts` enables iCloud on simple/sentinel hosts and treats `https://nokey.sh` as landing-only (unsupported). Users therefore attempt Apple sign-in from origins Apple rejects.

This likely regressed when vault apps moved off `nokey.sh` onto `simple.nokey.sh` / `sentinel.nokey.sh` (origin isolation) without updating the CloudKit token allowlist (token was originally configured for `nokey.sh`).

## Fix (CloudKit Console — required)

CloudKit Console → container `iCloud.metasecret.project.com` → **Production** → **Tokens & Keys** → the production Web Services token → **Allowed origins**. Add:

- `https://simple.nokey.sh`
- `https://sentinel.nokey.sh`
- `https://simple.dev.nokey.sh`
- `https://sentinel.dev.nokey.sh`
- `https://localhost:5175` (if local Vite still uses it)

Keep existing `https://nokey.sh` and `https://localhost:5173`.

No redeploy required after the allowlist update; verify by signing in from `https://simple.nokey.sh`.

## Optional code follow-ups

1. Update comments in `icloud-oauth-config.ts` so documented allowed origins match `oauth-origin.ts`.
2. Surface CloudKit `AUTHENTICATION_FAILED` with an origin-mismatch hint in the iCloud setup UI.
3. Close duplicate issue #594 (accidental stub from the same investigation).

## Validation

```bash
TOKEN=<production-ck-api-token>
curl -s "https://api.apple-cloudkit.com/database/1/iCloud.metasecret.project.com/production/public/records/lookup?ckAPIToken=$TOKEN" \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://simple.nokey.sh' \
  -d '{"records":[{"recordName":"__defaultOwner__"}]}'
# expect NOT_FOUND (auth ok), not AUTHENTICATION_FAILED
```

## Historical comments

No comments.
