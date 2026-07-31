---
title: Fix Google Drive Connect & sync assess timeout
status: in-progress
created: 2026-07-31
feature: google-drive-sync
---

# Fix Google Drive Connect & sync assess timeout

## Interpreted request

After the Drive event-parse fix, Google Drive Connect & sync still fails. The UI
stays on Syncing, then shows a connection timeout that incorrectly mentions a
GitHub PAT.

## Observed failure

- Admin Google Drive Step 2 shows Syncing…
- Error: "Connection timed out. Check your PAT, network, and try again."
- Status reports multiple sync providers

## Root cause

1. `assess_vault_connect` full-syncs remote events under a 30s race. Sync fetches
   every listed remote event id even when those events are already local.
2. Drive list accepts any `{digest}.yaml` name, so leftover junk names force
   extra downloads during assess.
3. Timeout copy is hardcoded English that assumes GitHub PAT credentials.

## Plan

1. Fetch only remote event ids missing locally during provider sync/guard paths.
2. Prefer Drive files with matching `appProperties.event_id` when listing.
3. Replace PAT-specific timeout strings with provider-agnostic i18n.
4. Add Rust regression coverage for missing-only fetch selection and Drive list
   property filtering; wire timeout through translations.
5. Format, PR, hosted validation, merge, Workbench worklog/stats.

## Completion evidence

- Connect & sync no longer times out solely because already-local remote events
  are re-downloaded.
- Timeout messaging no longer mentions PAT for Google Drive.
- Exact-head PR checks green and squash-merged.
