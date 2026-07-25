---
title: "Research: 10 nook-auth design concepts for presence-first Open Nook"
status: done
priority: p2
automation: manual
owner: "cypherkitty"
created_at: 2026-07-12T01:13:38Z
updated_at: 2026-07-12T01:58:40Z
source_issues: ["https://github.com/meta-secret/nook/issues/326"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:presence-first-auth"]
legacy_state_reason: "COMPLETED"
---

# Research: 10 nook-auth design concepts for presence-first Open Nook

## Imported context

This record was imported from [Nook GitHub issue #326](https://github.com/meta-secret/nook/issues/326)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #325.

## Problem

We need a fresh visual/IA direction for Open Nook before rewriting production auth. Passkey-first is out; presence-first is in.

## Scope

- Add category `nook-auth` in `nook-web-research`.
- Ship **10** interactive design concepts covering:
  - existing vault → unlock
  - empty state → Simple vs Sentinel
  - deferred passkey at Sentinel device init
- Keep sketches disposable (no WASM / production imports).

## Acceptance

- [ ] Category `nook-auth` appears in the research catalog
- [ ] 10 experiments registered and runnable via `bun run dev`
- [ ] Each concept can demonstrate empty vs existing-vault presence
- [ ] Sentinel naming used (not Nexus) in new sketches

## Historical comments

### cypherkitty — 2026-07-12T01:15:37Z

Research sketches landed on branch `feature/nook-auth-research`.

Category **`nook-auth`** now has 10 concepts under `nook-app/nook-web/nook-web-research/src/experiments/nook-auth/`:

1. `whats-there`
2. `landing-handoff`
3. `two-foundations`
4. `sealed-presence`
5. `empty-studio`
6. `key-later`
7. `sentinel-console` (handoff toward vault-terminal)
8. `sentinel-deck` (handoff toward card-stack)
9. `one-question`
10. `local-board`

Each sketch has an Empty / Vault exists demo toggle. Sentinel naming used (not Nexus) in the new category; vault catalog title also updated to Sentinel Vault.

### cypherkitty — 2026-07-12T01:35:24Z

Updated research shortlist + workflow category:

**Nook Auth** now keeps only:
- What's there?
- Landing handoff
- Key later
- One question

**Vault Auth Workflow** (new) wires auth → full Sentinel UI:
- Landing → Sentinel card stack · **default**
- Landing → Vault terminal
- Key later → Sentinel card stack
- Key later → Vault terminal

Card stack / terminal are adopted from the vault sketches (Nexus copy → Sentinel). Clicking **Build Sentinel vault** enters the full UI; **Auth chooser** returns.

### cypherkitty — 2026-07-12T01:58:39Z

Research sketches merged via https://github.com/meta-secret/nook/pull/331.

Delivered:
- `nook-auth` shortlist (4 concepts)
- `vault-auth-workflow` with Key later + Landing name-first flows → Simple / Sentinel card stack / vault terminal

Ready for direction pick before production implementation (#328+).

### cypherkitty — 2026-07-12T01:58:40Z

Closing research slice; sketches shipped in #331.
