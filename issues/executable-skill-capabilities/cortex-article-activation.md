---
title: Activate the Cortex article capability
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: cortex-article-yaml-activation
stack_branch: codex/cortex-article-yaml-activation
stack_predecessor_branch: codex/executable-skill-yaml-protocol-v2
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-30T23:23:42Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1237
depends_on:
  - issues/executable-skill-capabilities/discoverable-yaml-protocol.md
---

# Activate the Cortex article capability

## Context

The dormant Markdown-native provider may enter production only after policy,
containment, registry, and execution boundaries are independently merged.

## Outcome

Static registration and Loom workflow wiring invoke the Cortex article
capability with exact diagnostic parity and no HTML parser.

## Scope

- Register the exact article capability in the static production catalog.
- Add generic schema validation, the co-located article action adapter, and
  exact action discovery and invocation coverage.
- Wire the bounded task/configuration surface through the reviewed executable
  package and update durable documentation.
- Exclude HTML input, browser parsing, and unrelated skill migrations.

## Acceptance criteria

- [x] Activation uses only the static registry and sealed executor.
- [x] Article findings retain exact compatibility end to end.
- [x] Authored Cortex Markdown remains HTML-free with no HTML parser.
- [x] Focused tests, full validation, exact-head review, and readiness pass.

## Progress

- The issue originally depended on the sealed executable skill runtime.
- The verified full implementation was preserved on
  `codex/yaml-skill-host-successor`; this issue owned the planned 787-line
  activation slice after the provider-neutral YAML protocol predecessor.
- The provider-neutral YAML protocol predecessor merged through PR 1236.
- PR 1237 exact source head
  `4c5c880ec6c490a1edc49d300ed8d7517dda17ce` delivered the 11-path,
  972-authored-line activation slice and squash-merged as
  `8b6ad02770796b9937d71377bd4a4b11fcf732fd`.
- Package suites passed 29 of 29 and 30 of 30 tests, focused suites passed 82
  of 82 tests, and full Loom passed 656 of 656 tests with 4,492 assertions.
  Expert audits and source, configuration, TypeScript, Cortex, pre-push, diff,
  exact-head review, PR workflow, and readiness gates also passed.

## Findings and decisions

- Activation is the first layer allowed to make the provider reachable.
- The action registry is static and read-only. Skills return validated results;
  the active harness owns every agent and subagent lifecycle transition.
- String bounds use JavaScript UTF-16 code units in both discovery schemas and
  provider validation, so astral characters are accepted or rejected
  identically at each boundary.

## References

- `.cortex/teams/ai/dynamic-skills/cortex-article-structure/SKILL.md`
- `.cortex/teams/ai/dynamic-skills/cortex-article-structure/scripts/`
