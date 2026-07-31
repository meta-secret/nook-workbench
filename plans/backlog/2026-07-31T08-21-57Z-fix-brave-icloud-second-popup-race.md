---
title: Fix Brave iCloud sign-in second-popup race
feature: backlog
issue: issues/backlog/gh-595-fix-cloudkit-api-token-missing-simple-sentinel-origins-breaks-icloud-aut.md
started_at: 2026-07-31T08:21:57Z
agent: cursor-grok
---

# Fix Brave iCloud sign-in second-popup race

## Interpreted request

After the CloudKit Production allowlist accepted `simple.dev.nokey.sh`, Sign in
with Apple opens an Apple Account window but the vault UI immediately shows
iCloud sign-in failed behind that window. Restore a single-window Brave/native
click flow that waits for the web auth token instead of failing early.

## Requirements

- When the user already clicked the CloudKit Apple control, Nook must not open a
  second Apple auth popup.
- Unexpected or expected `whenUserSignsIn` rejections during that native click
  must not abort the wait while the Apple window can still complete.
- Brave programmatic sign-in without a prior native click may still use the
  direct Web Services challenge as the sole window.
- Add unit coverage for the native-click path not calling `window.open`.
- Ship through the normal Nook PR path.

## Constraints and exclusions

- Do not change CloudKit container, schema, or API token values in this task.
- Do not enable iCloud OAuth on PR preview hosts.
- Keep Post Message as the sign-in callback model.

## Initial plan

1. Trace the Admin iCloud click path on Brave with `clickPreparedControl: false`.
2. Stop direct-auth `window.open` fallback after a native Apple window is already
   open; wait on the stored-token / postMessage path instead.
3. Keep Brave's direct-only path for programmatic clicks.
4. Add regression unit tests and update auth-provider diagnostics notes.
5. Format, push, validate, and merge.

## Completion evidence

- Unit tests prove native-click waits do not open a second popup.
- Manual or logged Brave sign-in on `simple.dev.nokey.sh` no longer fails
  immediately while the Apple window is open.
- PR checks green and squash-merged.

## Safety review

- This plan contains no raw prompt, transcript, secrets, private data, raw logs,
  local paths, or unnecessary infrastructure detail.
