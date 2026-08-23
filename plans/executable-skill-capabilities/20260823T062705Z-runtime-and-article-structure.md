---
title: Establish executable skill capability packages
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/runtime-and-article-structure.md
started_at: 2026-08-23T06:27:05Z
agent: codex
---

# Establish executable skill capability packages

## Interpreted request

Evolve Nook's agent system toward many small composable skills selected by a
small stable set of agent profiles. Give mechanically executable skills a
first-class TypeScript capability package with strict contracts, direct Bun
execution, self-verification, and real behavior tests. Keep Loom focused on
generic scheduling, isolation, authorization, provenance, replay, and joins.

## Requirements

- Distinguish semantic skills, mechanically executable capabilities, agent
  profiles, workflows, and Loom control-plane responsibilities.
- Register executable skills through a reviewed typed catalog rather than
  manifest-controlled dynamic imports or arbitrary scripts.
- Keep repository-specific codecs, checks, verification, fixtures, and tests
  with the owning skill.
- Apply the repository TypeScript rules to skill code and tests.
- Prefer real values, temporary files or repositories, bounded local protocol
  implementations, and containers over mocks.
- Keep mandatory checks registered through Task, Loom, or CI even though their
  local implementation moves beside a skill.
- Prove the model by migrating the Cortex article-structure checker without
  changing its findings or Cortex audit behavior.
- Preserve the existing bounded agent hierarchy. Skills cannot delegate,
  schedule successors, mint journal authority, or mutate delivery state.

## Constraints and exclusions

- The first pull request does not migrate every existing Loom checker.
- Instruction-only skills remain valid and do not receive empty script
  scaffolding.
- Stateful delivery commands remain in Loom or Task during the read-only
  runtime foundation.
- The capability manifest cannot select an import path, shell command, network
  endpoint, credential, or environment variable.
- This task changes engineering infrastructure and does not alter product or
  vault behavior.

## Change budget and PR sequence

- Estimated authored changed lines: 10000
- Owning modules, packages, or layers: project skill registry, executable skill packages, generic skill runtime, Loom adapters, Cortex agent architecture, Task and preflight registration
- Public or cross-module interfaces: executable skill manifest, typed execution envelope, verified result contract, static skill registry, and generic Loom invocation adapter
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 3000
- Current PR slice and acceptance evidence: Runtime foundation and article-structure migration; Acceptance evidence: typed and adversarial runtime tests plus byte-compatible Cortex audit behavior
- PR slices and acceptance evidence:
1. Runtime foundation and article-structure migration; Acceptance evidence: typed and adversarial runtime tests plus byte-compatible Cortex audit behavior
2. Skill authoring, catalog audit, and scaffold support; Acceptance evidence: deterministic manifest, wrapper, symlink generation, and drift rejection
3. Cortex document-map capability; Acceptance evidence: exact document-structure behavior and migration-ledger parity
4. Cortex writer and consistency capabilities; Acceptance evidence: density, link, and registry checks colocated with their skills while mandatory gates stay registered
5. Remaining local-mechanics classification and Loom normalization; Acceptance evidence: every mechanic is retained as generic control plane or moved to one owning skill with tests

## Initial plan

1. Freeze the skill, agent, workflow, and Loom responsibility model in Cortex.
2. Add a generic typed executable-skill runtime with a static reviewed catalog,
   exact manifest validation, bounded envelopes, and verification evidence.
3. Move Cortex article-structure semantics and tests to its owning skill and
   adapt Cortex audit through the generic boundary.
4. Extend skill scaffolding and audits in later focused slices, then migrate
   the remaining classified local mechanics one capability at a time.
5. Validate focused behavior, complete Loom and Cortex gates, review the exact
   head, and deliver each ordered pull request independently.

## Completion evidence

- A reviewed static skill catalog exposes focused capability identities to a
  small stable agent set.
- Executable skill packages run TypeScript directly with format, lint,
  typecheck, unit, filesystem, protocol, and integration gates as applicable.
- Cortex article audit results and ordering remain unchanged through the new
  generic adapter.
- The complete sequence passes repository checks, exact-head review, and
  Workbench readiness.

## Safety review

This plan contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
