---
title: Give executable skills a discoverable YAML command protocol
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/skill-authoring-and-catalog.md
started_at: 2026-08-26T15:51:44Z
agent: codex
---

# Give executable skills a discoverable YAML command protocol

## Interpreted request

Make every mechanically executable project skill self-describing at its command
boundary. Reuse Loom's domain-YAML request and discovery model so agents and
humans can list supported actions, inspect exact YAML request examples and
schemas, invoke one action through a YAML file, and receive machine-readable
diagnostics instead of learning positional command flags.

## Requirements

- Reuse Loom's established YAML request, action discovery, strict decoding, and
  YAML-only output conventions.
- Provide one shared executable-skill CLI contract instead of bespoke parsers in
  individual skill packages.
- Expose supported actions with descriptions, request schemas, and example YAML.
- Convert the current executable skill package to the shared interface.
- Make future executable-skill packages prove the discovery and invocation
  contract through authoring/catalog verification.
- Apply the repository's TypeScript named-argument, single-parameter,
  concrete-value, source-size, formatting, lint, duplication, and focused-test
  rules to all touched skill code.

## Constraints and exclusions

- Do not change or activate the separately owned executable-skill registry,
  sealed runtime, source analyzer, or containment work.
- Do not add runtime topology, delivery authority, network access, writes, or a
  generic command envelope that loses the skill's domain vocabulary.
- Keep the current article-structure capability behavior unchanged behind the
  new command protocol.
- Use Bun and TypeScript only.

## Change budget and PR sequence

- Estimated authored changed lines: 1800
- Owning modules, packages, or layers: executable-skill shared CLI tooling, Cortex article-structure skill package, skill authoring verification, and executable-skill documentation
- Public or cross-module interfaces: skill action discovery YAML, skill action request YAML, YAML response and decode-error contracts, and executable-skill manifest CLI metadata
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1800
- Current PR slice and acceptance evidence: Add the reusable YAML action protocol and migrate the current executable package; Acceptance evidence: focused CLI tests, skills verification, Loom verification for reused protocol compatibility, Cortex audit, and exact-head PR validation pass.
- PR slices and acceptance evidence:
1. Add the reusable YAML action protocol and migrate the current executable package; Acceptance evidence: focused CLI tests, skills verification, Loom verification for reused protocol compatibility, Cortex audit, and exact-head PR validation pass.

## Initial plan

1. Extract the smallest reusable Loom CLI and discovery contract without
   coupling skill packages to Loom application commands.
2. Define typed shared discovery, request, response, YAML codec, and diagnostic
   primitives under the executable-skills toolchain.
3. Add a self-describing article-structure CLI and focused behavior tests.
4. Enforce the interface in executable-skill definitions and authoring checks.
5. Update the owning reference documentation, validate, review, and deliver the
   exact head through the normal pull-request workflow.

## Completion evidence

- Running the executable skill with `help` or its discovery request lists every
  action with a description, schema, and copyable YAML example.
- Running it with a YAML request invokes the named domain action and returns
  YAML only.
- Malformed or unknown requests fail closed with field paths, issues, and a
  corrective blueprint.
- The current executable skill and future package contract are covered by
  focused tests and repository quality gates.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
