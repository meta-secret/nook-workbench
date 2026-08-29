---
title: Restore the discoverable executable-skill YAML protocol
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-27T16:02:02Z
updated_at: 2026-08-29T00:39:41Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1187
depends_on: []
---

# Restore the discoverable executable-skill YAML protocol

## Context

The earlier discoverable CLI was reverted without a replacement. The feature
requires an active, reviewed command boundary before more mechanics can move
from Loom into their owning skills.

## Outcome

Agents can list executable-skill commands, inspect exact YAML schemas and
examples, invoke the article-structure capability, and receive YAML-only typed
results and corrective failures.

## Scope

- Restore the shared domain-YAML discovery and invocation protocol.
- Activate the existing article-structure provider through the static catalog.
- Remove the duplicate Loom article-structure implementation.
- Preserve exact Cortex audit findings and mandatory enforcement.
- Exclude other skill migrations and native subagent lifecycle changes.

## Acceptance criteria

- [ ] Discovery returns command descriptions, schemas, exact examples, and
      resolved examples.
- [ ] Requests use one domain root with strict unknown-field rejection and no
      generic name-and-arguments envelope.
- [ ] Article-structure execution has exact diagnostic parity with the current
      Cortex audit.
- [ ] Skill TypeScript passes formatting, lint, type checking, source-size,
      focused tests, and exact-head validation.

## Progress

- User explicitly restored implementation authority after the earlier revert.
- PR 1187 was narrowed to the bounded shell command-analysis prerequisite after
  review showed that configuration discovery and platform launch hardening need
  independent ownership and validation.
- Hosted-browser launch hardening merged separately in PR 1190. Configuration
  and runtime-root inventory remains assigned to a dependent successor.

## Findings and decisions

- Direct reviewed Bun execution replaces the abandoned Docker-backed runtime.
- This slice grants no scheduling, delivery, network, or arbitrary command
  authority.
- Shell analysis fails closed on dynamic execution and retains an exact finite
  catalog for reviewed source seams; it does not itself activate a skill.

## References

- Nook PRs 1147 and 1154.
- `.agents/skills/cortex-article-structure/`.
