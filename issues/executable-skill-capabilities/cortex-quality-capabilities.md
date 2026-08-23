---
title: Move Cortex writer and consistency mechanics to their skills
status: ready
priority: p2
automation: agent
owner: cypherkitty
created_at: 2026-08-23T06:27:05Z
updated_at: 2026-08-23T06:27:05Z
source_issues: []
related_prs: []
depends_on:
  - issues/executable-skill-capabilities/cortex-document-map-capability.md
---

# Move Cortex writer and consistency mechanics to their skills

## Context

The [feature summary](README.md) next aligns the remaining Cortex-local checks
with their semantic owners.

## Outcome

Writer density and consistency link/registry mechanics are separate focused
capabilities with their own contracts and tests.

## Scope

- Move prose-density checks to the Cortex writer skill.
- Move relative-link and skill-registry checks to the Cortex consistency skill.
- Preserve mandatory Cortex audit aggregation and result compatibility.
- Exclude generic repository scheduling and delivery mutations.

## Acceptance criteria

- [ ] Each capability has one bounded responsibility and exact typed results.
- [ ] Existing findings remain compatible and required gates remain
      unconditional.
- [ ] Tests prefer real documents, paths, and temporary files over mocks.

## Progress

- Depends on the document-map capability slice.

## Findings and decisions

- Separate semantic owners must not be combined into one generic Cortex script.

## References

- `.agents/skills/cortex-writer/SKILL.md`
- `.agents/skills/cortex-consistency/SKILL.md`
