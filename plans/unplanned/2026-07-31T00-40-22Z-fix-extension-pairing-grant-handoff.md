---
title: Fix Simple Vault extension pairing grant handoff
feature: unplanned
issue: none
started_at: 2026-07-31T00-40-22Z
agent: cursor-grok
---

# Fix Simple Vault extension pairing grant handoff

## Interpreted request

Approving the browser extension against an unlocked Simple Vault succeeds on
the website, but the extension rejects the pairing grant. The consent UI shows
that the browser handoff failed because the extension did not accept the grant.
Ship a durable fix and a Playwright regression that covers approve after the
website must restore its event-signing identity.

## Requirements

- Persist the event-signing seed installed by extension identity handoff so
  reload or later Approve uses the same authorized signer.
- Refuse to mint a fresh signer against an existing event log, and refuse to
  persist JoinApproved events the causal graph would quarantine.
- Roll back rejected extension event-log imports so a poisoned quarantine cannot
  permanently block later Approve retries.
- Add Chromium Playwright coverage that re-approves an existing Simple Vault
  after reload without grant rejection.
- Keep Simple-only extension pairing boundaries and do not weaken vault crypto
  or device-identity rules.

## Constraints and exclusions

- No change to Sentinel Vault extension pairing (still excluded).
- No required local full product gate; validate on GitHub Actions after push.
- Do not copy raw prompts, secrets, or private vault material into Workbench.

## Initial plan

1. Rebase the existing pairing-handoff fix onto current main.
2. Confirm the Playwright regression covers the grant-accept path after reload.
3. Host-apply formatting and open or update the PR.
4. Monitor repository-owned PR checks and fix until green, then squash-merge.
5. Publish the completion worklog and agent statistics.

## Completion evidence

- Merged Nook PR with the handoff fix and Playwright regression.
- Green applicable repository-owned PR checks on the merged head.
- Workbench worklog linked to this plan.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
