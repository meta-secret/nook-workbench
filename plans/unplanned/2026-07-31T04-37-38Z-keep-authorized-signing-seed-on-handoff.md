---
title: Keep authorized signing seed across extension identity handoff
feature: unplanned
issue: none
started_at: 2026-07-31T04:37:38Z
agent: cursor-grok
---

# Keep authorized signing seed across extension identity handoff

## Interpreted request

Approving the browser extension against an existing Simple Vault now fails with
a database refusal: the event actor is not authorized in causal history. The
prior handoff fix persisted the extension signing seed too aggressively and can
overwrite the vault owner signer. Restore Approve for existing vaults and keep a
regression covered.

## Requirements

- When the local event log already has events and a durable signing seed, identity
  handoff must adopt the extension age identity for unlock without replacing that
  authorized signer.
- Persist the handoff signing seed only for empty-log create or when no local
  signer exists yet.
- Keep quarantine refusal for truly unauthorized JoinApproved appends.
- Add or extend coverage so reinstall-style handoff cannot clobber the owner
  signer before Approve.

## Constraints and exclusions

- Do not weaken causal authorization or Simple-only extension pairing.
- Validate on GitHub Actions; no required local full product gate.
- Workbench records stay free of prompts, secrets, and private vault material.

## Initial plan

1. Branch from origin/main and adjust handoff plus ensure_signing_identity seed
   selection.
2. Add a focused behavior test for keep-stored-seed-when-events-exist.
3. Format, push/open PR, run exact-head validation, merge when ready.
4. Publish completion worklog and agent statistics.

## Completion evidence

- Merged Nook PR with the seed-preservation fix and green repository checks.
- Approve against an existing Simple Vault no longer fails solely because a
  reinstalled extension handoff overwrote the owner signer.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
