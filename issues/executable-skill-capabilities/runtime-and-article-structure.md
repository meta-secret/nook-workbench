---
title: Add the executable skill runtime and article-structure capability
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-23T06:27:05Z
updated_at: 2026-08-25T23:30:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1088
  - https://github.com/meta-secret/nook/pull/1089
  - https://github.com/meta-secret/nook/pull/1108
depends_on: []
---

# Add the executable skill runtime and article-structure capability

## Context

The [feature summary](README.md) separates stable agent profiles from many
focused skill capabilities. This first slice establishes the safe runtime
contract and proves it with an existing local Cortex checker.

## Outcome

A statically registered, typed, bounded executable-skill runtime invokes a
skill-owned Cortex article-structure capability without changing Cortex audit
results.

## Scope

- Add the generic read-only capability contracts, manifest decoder, static
  registry, verification result, and Loom adapter.
- Move article-structure semantics and focused tests beside the owning skill.
- Preserve mandatory Task/Loom audit registration and exact finding behavior.
- Document the skill, agent, workflow, and Loom ownership boundaries.
- Exclude other checker migrations and stateful delivery commands.

## Acceptance criteria

- [ ] Manifest and transport codecs reject malformed, extra, oversized, and
      unregistered inputs.
- [ ] The static registry has one exact article-structure implementation and
      cannot load a manifest-provided path or command.
- [ ] Skill execution and semantic verification produce bounded typed evidence.
- [ ] Existing article-structure and Cortex audit findings retain exact order,
      codes, lines, and messages.
- [ ] Tests use real values and temporary filesystem materials; trust predicates
      are not mocked.
- [ ] Skill, Loom, source architecture, TypeScript, and Cortex gates pass.

## Progress

- Architecture and repository inventory completed.
- PR #1088 isolates shared TypeScript tooling in 2,645 changed lines.
- PR #1089 isolates the dormant article provider in 4,773 changed lines.
- PR #1108 isolates runtime reachability enforcement in 2,484 changed lines.
- Pure source policy follows as the fourth slice of the revised eight-PR stack.

## Findings and decisions

- Current "executable skill" terminology means directly invocable Markdown,
  not executable code. The new contract must name mechanical capabilities
  explicitly.
- Instruction-only skills remain the default.
- Exact review proved runtime reachability is an independent security boundary.
  It must not share a PR with pure executable-source policy.

## References

- `agentic-ai/loom/src/lib/cortex-article-structure.ts`
- `.agents/skills/cortex-article-structure/SKILL.md`
