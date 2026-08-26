---
title: Executable skill capability packages
status: in_progress
created_at: 2026-08-23T06:27:05Z
updated_at: 2026-08-26T08:05:41Z
---

# Executable skill capability packages

## Goal

Give Nook a large composable skill catalog used by a small stable set of agent
profiles. Mechanically executable skills own focused TypeScript capability
packages with strong contracts and tests. Loom remains the generic trusted
control plane.

## Current state

Project skills are agent-invocable Markdown wrappers. Repository-specific
mechanics and their tests are centralized in Loom, so semantic ownership and
implementation locality do not align. The repository already has fewer agent
profiles than skills, which should be preserved.

## Decisions

- Keep instruction-only skills lightweight.
- Add code only when a skill owns a deterministic mechanical capability.
- Use a reviewed static registry. Manifests never choose arbitrary imports or
  commands.
- Keep scheduling, isolation, lineage, journals, replay, receipts, barriers,
  and authority in Loom.
- Keep mandatory enforcement registered independently of model-selected skill
  loading.
- Prefer real values, temporary repositories, bounded local services, and
  container integration tests over mocks.

## Issues

- [ ] [Runtime and article-structure capability](runtime-and-article-structure.md)
- [ ] [Runtime boundary analysis](runtime-boundary-analysis.md)
- [ ] [Finite loader specialization](finite-loader-specialization.md)
- [ ] [Runnable configuration closure](runnable-configuration-closure.md)
- [ ] [Production runtime reachability](production-runtime-reachability.md)
- [ ] [Executable source policy](executable-source-policy.md)
- [ ] [Sealed source analyzer](sealed-source-analyzer.md)
- [ ] [Immutable skill registry](immutable-skill-registry.md)
- [ ] [Sealed skill executor](sealed-skill-executor.md)
- [ ] [Cortex article activation](cortex-article-activation.md)
- [ ] [Skill authoring and catalog audit](skill-authoring-and-catalog.md)
- [ ] [Cortex document-map capability](cortex-document-map-capability.md)
- [ ] [Cortex writer and consistency capabilities](cortex-quality-capabilities.md)
- [ ] [Classify remaining mechanics and normalize Loom](normalize-local-mechanics.md)

## References

- Nook `.agents/skills/` project skills.
- Nook `agentic-ai/loom/` orchestration and verification runtime.
- Nook Cortex agent and structural-refactoring architecture.
