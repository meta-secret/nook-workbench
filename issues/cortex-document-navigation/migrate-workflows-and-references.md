---
title: Migrate Cortex workflows and references to document maps
status: blocked
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-15T02:54:05Z
updated_at: 2026-08-15T05:25:15Z
source_issues: []
related_prs: [1005]
depends_on: [migrate-dynamic-skills.md]
---

# Migrate Cortex workflows and references to document maps

## Context

This is the third slice of [Cortex document navigation](README.md). Workflows
and references contain the largest procedural surfaces used during delivery.

## Outcome

Every Cortex workflow and reference exposes concise relationship links and a
hierarchical internal map.

## Scope

- Migrate `.cortex/workflows/*.md`.
- Migrate `.cortex/references/*.md`.
- Preserve workflow ordering, command contracts, and canonical ownership.
- Remove migrated files from the migration ledger.
- Exclude design, product, execution-plan, and root documents.

## Acceptance criteria

- [ ] Every workflow and reference passes the document-map audit.
- [x] Existing commands and cross-document links remain valid.
- [x] Cortex link and density checks pass.

## Progress

- Nook PR #1005 migrated all 6 references and 9 available workflows.
- Navigation now appears immediately after each title, with former preambles
  represented as indexed `Overview` articles.
- Three semantic review rounds replaced misleading mechanical summaries with
  article-specific routing text.
- Focused Cortex, Loom, preflight, hosted source, and readiness checks passed.

## Findings and decisions

- Active Nook PR #1002 owns `coding-bro.md`, `issues.md`, and
  `pull-requests.md`; those files remain the only workflow ledger entries.
- The issue remains blocked until those files can migrate from post-#1002
  content.

## References

- [Feature summary](README.md)
- [Nook PR #1005](https://github.com/meta-secret/nook/pull/1005)
- [Delivery worklog](../../worklogs/cortex-document-navigation/20260815T052515Z-pr-1005-workflows-references.md)
