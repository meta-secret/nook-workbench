---
title: Fix Google Drive Connect & sync event parse failure
status: in-progress
created: 2026-07-31
feature: google-drive-sync
---

# Fix Google Drive Connect & sync event parse failure

## Interpreted request

Google Drive provider setup fails at Admin **Connect & sync** with
`Serialization error: Drive event parse: failed to parse remote event` after
Google sign-in appears to succeed. Users experience this as Google authentication
not working.

## Observed failure

- UI reaches Step 2 (Connection collapsed; Connect & sync expanded).
- Status already shows a sync provider row.
- Exact error string is built in `drive_events.rs` from
  `parse_remote_event_storage_bytes`, whose `ParseRemoteEvent` Display drops the
  inner YAML reason.

## Root cause

1. `fetch_drive_event` hard-fails on the first unreadable same-name Drive file
   instead of skipping non-matching candidates (design: tolerate duplicates and
   accept only content-addressed matches).
2. Outbox flush treats any listed `{digest}.yaml` name as present, skips upload,
   and still drops the outbox entry — so junk/empty remote names block forever
   and discard good local event bytes.
3. Opaque `ParseRemoteEvent` Display hides the real parse detail.

## Plan

1. Extract pure Drive candidate selection; skip unparseable / wrong-id bytes;
   treat all-unreadable as missing for put/fetch.
2. Make outbox flush call idempotent put for pending events and remove outbox
   rows only after success.
3. Surface inner parse details on `ParseRemoteEvent` / `ParseStoredEvent`.
4. Add Rust regression tests for candidate selection, outbox presence semantics,
   and error Display.
5. Format, PR, hosted validation, merge, Workbench worklog/stats.

## Completion evidence

- Connect & sync no longer fails solely because an unreadable same-name Drive
  candidate exists alongside or instead of valid event bytes.
- Rust tests cover skip-unreadable, duplicate identical accept, divergent
  duplicate corruption, and error detail Display.
- PR checks green and squash-merged.
