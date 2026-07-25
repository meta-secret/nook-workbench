---
title: "Rename Nexus vault → Sentinel vault in user-facing surfaces"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-12T01:13:40Z
updated_at: 2026-07-21T07:28:48Z
source_issues: ["https://github.com/meta-secret/nook/issues/327"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:presence-first-auth"]
legacy_state_reason: "COMPLETED"
---

# Rename Nexus vault → Sentinel vault in user-facing surfaces

## Imported context

This record was imported from [Nook GitHub issue #327](https://github.com/meta-secret/nook/issues/327)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #325.

## Problem

Product name for the threshold vault is **Sentinel**. Nexus is retired for user-facing copy.

## Scope

- Rename user-facing Nexus → Sentinel in locales, research catalog copy, and docs that describe the product mode.
- Keep code identifiers / historical issue titles intact unless a rename is low-risk and clearly beneficial.
- Research refs `vault-terminal` and `nexus-card-stack` remain as Sentinel UI alternatives (rename labels/copy; slug rename optional).

## Acceptance

- [ ] User-visible strings say Sentinel, not Nexus
- [ ] Research category/docs for auth use Sentinel
- [ ] No marketing copy still promotes Nexus as the product name

## Historical comments

### cypherkitty — 2026-07-21T07:28:47Z

Closing as delivered.

User-facing Nexus → Sentinel rename shipped in https://github.com/meta-secret/nook/pull/332. Production locales and vault UI use Sentinel; no remaining user-facing Nexus product name in `nook-core/locales` or production web surfaces.
