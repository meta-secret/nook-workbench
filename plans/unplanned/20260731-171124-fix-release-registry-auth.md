---
title: Fix production release registry authentication
feature: unplanned
issue: none
started_at: 2026-07-31T17:11:24Z
agent: cursor
---

# Task plan

## Interpreted request

Ship the current main branch to production so Simple Vault at simple.nokey.sh,
landing at nokey.sh, and Sentinel Vault are all on the latest code. The first
production release attempt failed because the release workflow no longer logs in
to the private OCI registry.

## Requirements

- Restore authenticated Docker/BuildKit setup in the production release workflow
  using the same registry credentials already used by Main and PR workflows.
- Re-run the production release for the next patch version from main after the
  fix lands.
- Confirm simple.nokey.sh, nokey.sh, and sentinel.nokey.sh serve the new release
  commit via release.json and the existing domain verification checks.

## Constraints and exclusions

- Do not change product app code.
- Do not weaken registry authentication or invent temporary unauthenticated
  cache paths.
- Keep the immutable semver release tag contract.
- Exclude unrelated CI or cache redesign.

## Initial plan

1. Patch the production release workflow to pass registry host, username, and
   password into Docker setup.
2. Open and merge the focused CI fix PR.
3. Dispatch production release v1.0.6 from main.
4. Watch the release workflow and verify live release metadata on the production
   domains.

## Completion evidence

- Merged PR that wires registry credentials into release Docker setup.
- Successful Release production run for v1.0.6.
- Live release.json on simple.nokey.sh matching the released main commit.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
