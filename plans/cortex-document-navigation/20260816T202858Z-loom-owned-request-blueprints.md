---
title: Move static Loom request examples out of Cortex
feature: cortex-document-navigation
issue: none
started_at: 2026-08-16T20:28:58Z
agent: codex
---

# Move static Loom request examples out of Cortex

## Interpreted request

Keep Cortex document maps and relationships as agent context. Inspect their
linked topics and move only mechanically owned static facts into Loom when the
application can expose the same information directly.

## Requirements

- Keep every Cortex `Document map` and `Relationships` section unchanged.
- Make Loom discovery return each request family's canonical example YAML.
- Remove duplicated request bodies from the Cortex Loom-tools reference.
- Keep request purpose, usage guidance, and Task invocation context in Cortex.
- Leave semantic workflow topology and authored status catalogs in Markdown.

## Constraints and exclusions

- Do not create a Cortex navigation index or graph projection in this activity.
- Do not infer or replace authored relationships.
- Do not move product, architecture, security, or workflow policy into Loom.
- Do not duplicate blueprint content in TypeScript; read the existing canonical
  Loom parameter files.

## Change budget and PR sequence

- Estimated authored changed lines: 100
- Owning modules, packages, or layers: Loom discovery and Cortex Loom reference
- Public or cross-module interfaces: `toolsList` discovery result
- Delivery shape: One PR
- Current PR estimated authored changed lines: 100
- Current PR slice and acceptance evidence: Loom-owned request blueprints; Acceptance evidence: Loom tests, Cortex audit, pre-push hygiene, and hosted exact-head validation
- PR slices and acceptance evidence: 1. Loom-owned request blueprints; Acceptance evidence: Loom tests, Cortex audit, pre-push hygiene, and hosted exact-head validation

## Initial plan

1. Extend Loom's discoverable-request result with canonical blueprint YAML read
   from each registered parameter file.
2. Test that discovery returns the exact canonical file content.
3. Replace duplicated YAML bodies in the mapped Cortex topics with instructions
   to consume Loom discovery.
4. Validate the focused Loom protocol and the unchanged Cortex navigation
   contract.

## Completion evidence

- `task loom:tools-list` returns `exampleYaml` for every discoverable request.
- Returned YAML exactly matches the registered `exampleRequest` file.
- Cortex no longer authors copies of those request bodies.
- All 84 Cortex documents retain both standard context sections.

## Safety review

- This plan contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
