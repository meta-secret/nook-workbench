---
title: Restore the discoverable executable-skill YAML protocol
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: executable-skill-yaml-protocol
created_at: 2026-08-27T16:02:02Z
updated_at: 2026-08-30T23:23:42Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1187
  - https://github.com/meta-secret/nook/pull/1189
  - https://github.com/meta-secret/nook/pull/1236
  - https://github.com/meta-secret/nook/pull/1237
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

- Add the provider-neutral domain-YAML discovery and invocation package under
  the AI-owned executable-skill host.
- Enforce the exact single-token inline-YAML transport, closed tools-list
  action, strict YAML grammar, bounded results, redacted failures, and pinned
  TypeScript project contract.
- Preserve automatic all-owner executable-package discovery, frozen installs,
  and fail-closed source and configuration audits.
- Keep article schema validation and action activation in the linked successor
  slice; exclude other skill migrations and native subagent lifecycle changes.

## Acceptance criteria

- [x] Discovery returns command descriptions, schemas, exact examples, and
      resolved examples.
- [x] Requests use one domain root with strict unknown-field rejection and no
      generic name-and-arguments envelope.
- [x] Article-structure execution has exact diagnostic parity with the current
      Cortex audit.
- [x] Skill TypeScript passes formatting, lint, type checking, source-size,
      focused tests, and exact-head validation.

## Progress

- User explicitly restored implementation authority after the earlier revert.
- PR 1187 was narrowed to the bounded shell command-analysis prerequisite after
  review showed that configuration discovery and platform launch hardening need
  independent ownership and validation.
- Hosted-browser launch hardening merged separately in PR 1190. Configuration
  and runtime-root inventory remains assigned to a dependent successor.
- PR 1189 completed the trusted Docker executable and configuration isolation
  prerequisite at exact head `a3bc2b00037b9fa13859abdccc39e4fb97ff9a4f`.
  It squash-merged as `80b8a5a20e8d4158f991df524d676f73dadfa0bf`
  after exact-head review, repository checks, deployment, and readiness passed.
  This prerequisite is not one of the two declared slices in the governing
  native-stack plan; both protocol and article-activation slices remain open.
- The completed combined implementation at `72d5eec184d5743f680b5303bd247ff75b860af3`
  measures 2,467 authored lines, so protocol and article activation are now an
  ordered native two-PR stack. This issue owns the 1,680-line predecessor.
- The protocol predecessor merged through PR 1236. Its exact source head
  `5511c12dafe2884396f3a5163e1edbc2c354a836` measured 1,910 raw and 1,703
  authored changed lines and squash-merged as
  `d94f1b56711f7b0b404590696664fe7efa6a1ff4` after package, Loom, expert,
  source, TypeScript, Cortex, review, PR, and Pages gates passed.
- The protocol slice is complete. The overall feature remains in progress
  while successor PR 1237 delivers article schema registration, invocation,
  and diagnostic parity.
- Successor PR 1237 exact source head
  `4c5c880ec6c490a1edc49d300ed8d7517dda17ce` completed article schema
  registration, static invocation, and diagnostic parity and squash-merged as
  `8b6ad02770796b9937d71377bd4a4b11fcf732fd`. Its 11-path, 972-authored-line
  slice passed both package suites, 82 focused tests, full Loom with 656 tests
  and 4,492 assertions, expert audits, architecture and TypeScript gates,
  exact-head review, PR workflow 33341338685, and readiness.

## Findings and decisions

- Direct reviewed Bun execution replaces the abandoned Docker-backed runtime.
- This slice grants no scheduling, delivery, network, or arbitrary command
  authority.
- Shell analysis fails closed on dynamic execution and retains an exact finite
  catalog for reviewed source seams; it does not itself activate a skill.
- Trusted Docker initializers now snapshot only required authentication state,
  strip ambient selectors and proxy-derived build arguments, use a fixed system
  utility path, and bind canonical Loom source-seam digests to the reviewed
  wrapper contents.
- This slice exposes only the static `skillToolsList` action. The active harness
  retains all agent and subagent lifecycle authority.
- The linked successor registers only the reviewed article action. It returns
  validated diagnostics and does not create, schedule, or communicate with
  agents or subagents.

## References

- Nook PRs 1147 and 1154.
- `.cortex/teams/ai/dynamic-skills/executable-skill-host/`.
- `.cortex/teams/ai/dynamic-skills/cortex-article-structure/`.
