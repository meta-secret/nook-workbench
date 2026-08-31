---
title: Move Cortex document-map mechanics to its skill
status: done
priority: p2
automation: agent
owner: cypherkitty
created_at: 2026-08-23T06:27:05Z
updated_at: 2026-08-31T16:48:08Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1246
depends_on:
  - issues/executable-skill-capabilities/skill-authoring-and-catalog.md
---

# Move Cortex document-map mechanics to its skill

## Context

The [feature summary](README.md) calls for local mechanics to follow semantic
skill ownership after the authoring contract is available.

## Outcome

The Cortex document-map skill has a regular TypeScript provider foundation
that owns its parser, checks, independent verification, fixtures, and tests.
The existing Loom implementation remains authoritative until the separately
reviewed activation issue integrates the provider.

## Scope

- Add the owner-local parser, migration renderer, action contracts, result
  codec, and genuinely independent semantic verification.
- Preserve exact Cortex diagnostics without activating the provider yet.
- Exclude prose-density, link, and skill-registry checks.

## Acceptance criteria

- [x] Exact current findings and migration behavior are proven by provider
      tests, including transient and invalid-syntax topology cases.
- [x] The regular Bun and TypeScript project has strict request/result codecs,
      independent semantic verification, and adversarial tamper coverage.
- [x] The provider remains inactive until its stacked activation issue.

## Progress

- Depends on the authoring and catalog slice.
- 2026-08-31: Claimed for the owner-local executable application slice after
  confirming the dependency is done and the scope is disjoint from the active
  Team Plan stack.
- 2026-08-31: Independent review proved complete verification would exceed the
  2,000-line PR limit if combined with activation. The work is now a native
  two-PR stack: provider foundation, then verified activation and Loom removal.
- 2026-08-31: PR [#1246](https://github.com/meta-secret/nook/pull/1246)
  merged the owner-local provider foundation after exact-head local, hosted, and
  independent review evidence passed.

## Findings and decisions

- Semantic policy stays in Cortex. The deterministic implementation belongs to
  the skill capability.

## References

- `.cortex/teams/ai/dynamic-skills/cortex-document-map/SKILL.md`
- [Verified activation](cortex-document-map-activation.md)
