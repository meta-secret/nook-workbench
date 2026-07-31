---
title: Restore iCloud sign-in on vault origins
feature: backlog
issue: issues/backlog/gh-595-fix-cloudkit-api-token-missing-simple-sentinel-origins-breaks-icloud-aut.md
started_at: 2026-07-31T07:35:55Z
agent: cursor-grok
---

# Restore iCloud sign-in on vault origins

## Interpreted request

Users cannot complete Sign in with Apple for iCloud sync on the live Simple Vault
development host. The failure appears immediately as a generic iCloud sign-in
error during the connection step. Restore working CloudKit web auth on the
supported vault origins and make origin/token rejection failures clear in the UI.

## Requirements

- iCloud private-mode sign-in must succeed on the supported vault origins:
  Simple/Sentinel production and stable development hosts, plus the interactive
  localhost development origins.
- CloudKit web-auth must accept those origins for the production API token used
  by the vault apps.
- When Apple rejects the API token or origin, the UI must show the existing
  origin/token guidance copy instead of a generic failure string.
- Add regression coverage for the AUTHENTICATION_FAILED mapping path.
- Follow the normal Nook PR path for any product-code changes.

## Constraints and exclusions

- The CloudKit Console allowlist is outside the Nook repository. Completing the
  live auth fix requires updating Tokens & Keys for container
  `iCloud.metasecret.project.com`.
- Do not rotate or hardcode a replacement API token unless console access
  confirms a new token is required.
- Do not enable OAuth on per-PR preview aliases.
- Do not store secrets, private user data, or raw prompt text in Workbench.

## Initial plan

1. Confirm current CloudKit responses for each supported vault origin.
2. Update or claim the existing Workbench issue that already documents this
   allowlist gap.
3. Attempt the CloudKit Console allowlist update if access is available;
   otherwise record the exact console blocker.
4. Map AUTHENTICATION_FAILED to the clearer provider-setup guidance string and
   cover it with unit tests.
5. Publish, validate, and merge any product-code PR; publish the completion
   worklog.

## Completion evidence

- CloudKit `users/current` with a vault-origin `Origin` header returns
  `AUTHENTICATION_REQUIRED` rather than `AUTHENTICATION_FAILED`.
- Manual or logged Sign in with Apple on `simple.dev.nokey.sh` progresses past
  the connection error.
- Unit coverage asserts AUTHENTICATION_FAILED surfaces the origin/token guidance
  key.
- Workbench issue progress and a linked worklog record the outcome.

## Safety review

- This plan contains no raw prompt, transcript, secrets, private data, raw logs,
  local paths, or unnecessary infrastructure detail.
