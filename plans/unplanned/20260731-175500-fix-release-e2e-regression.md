---
title: Unblock production release after sync e2e regression
feature: unplanned
issue: none
started_at: 2026-07-31T17:55:00Z
agent: cursor
---

# Task plan

## Interpreted request

Deploy current production apps including simple.nokey.sh. Registry auth for
release was fixed, but the production release gate still fails on Main-equivalent
stable browser tests after the Google Drive assess-timeout sync change.

## Requirements

- Restore correct remote event-log classification during provider sync and
  writable-provider guards so enrollment and vault-choice flows work again.
- Keep the Drive list filter that ignores name-only junk files without matching
  appProperties.event_id.
- Land the fix through the normal PR path with Main-equivalent validation, then
  cut production release v1.0.6 from main.

## Constraints and exclusions

- Do not weaken Drive assess protections against junk same-name files.
- Do not skip the production release e2e gate.
- Exclude unrelated import or extension failures unless they block the same release.

## Initial plan

1. Revert the missing-only remote fetch optimization in event-log sync/guard paths.
2. Keep Drive listing and UI timeout changes from the assess-timeout fix.
3. Validate with full Main-equivalent PR e2e, merge, and dispatch v1.0.6.

## Completion evidence

- Green Main-equivalent PR validation for the sync fix.
- Successful Release production run for v1.0.6.
- Live release.json on simple.nokey.sh matching the released commit.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
