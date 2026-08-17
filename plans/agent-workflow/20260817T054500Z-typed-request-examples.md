# Task plan

## Interpreted request

Make Loom the owner of canonical leaf-tool example documents. Agents still send domain YAML on the command line. Checked-in sample files under the Loom package go away. Typed example objects in Loom generate discovery YAML, decode blueprint diffs, and zero-input Task aliases.

## Requirements

- Keep the leaf-tool wire format as a domain YAML document.
- Store one typed example object per request family and nested operation.
- Generate toolsList example YAML from those objects, including agent temp-path tokens.
- Generate decode-error blueprint YAML and unified diffs from the same objects.
- Dispatch pre-push, tools-list, cortex-audit, and dependency-popularity Task aliases from in-code defaults when no CONFIG file is supplied.
- Keep CONFIG YAML files for parameterized calls such as pr-land, agent-stats, and skill-scaffold.
- Point recover.toolsListRequest at the tools-list Task alias.
- Leave hand-written request decoders and JSON Schema builders unchanged.
- Update Cortex, Loom README, and tests so they no longer point at deleted sample files.

## Constraints and exclusions

- Do not execute agent-authored TypeScript as request input.
- Do not adopt a new schema library in this slice.
- Do not generate workflow topology from YAML.
- Do not run example skill-scaffold, agent-stats, or pr-land documents as defaults.
- Do not copy conversation text into Workbench records.

## Change budget and PR sequence

- Estimated authored changed lines: 900
- Owning modules, packages, or layers: agentic-ai/loom leaf-tool codec, CLI, Task aliases, and Cortex Loom guidance
- Public or cross-module interfaces: toolsList exampleRequest becomes an invoke command; recover.toolsListRequest becomes task loom:tools-list; defaultable aliases accept optional CONFIG
- Delivery shape: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Typed example catalog plus deleted sample files; Acceptance evidence: Loom unit tests decode every example, Task aliases run without sample files, and cortex-audit stays green
- PR slices and acceptance evidence: Typed example catalog plus deleted sample files; Acceptance evidence: Loom unit tests decode every example, Task aliases run without sample files, and cortex-audit stays green

## Initial plan

1. Add a typed example-document catalog next to the existing request types.
2. Switch blueprint diffs and toolsList discovery onto generated YAML.
3. Add a default-family CLI path for zero-input tools and point Task aliases at it.
4. Route pr-land pre-push through that default path.
5. Delete the sample-file directory and update tests plus Cortex.

## Completion evidence

- No sample YAML remains under the Loom package params directory.
- toolsList returns generated exampleYaml that round-trips through decodeLoomRequest.
- Decode errors still include a unified diff against the typed blueprint.
- task loom:pre-push and task loom:tools-list succeed without a CONFIG file.
- Parameterized tools still require an agent-owned YAML document.

## Safety review

- The record contains only public-safe development context.
- No secrets, credentials, private user data, or raw logs are present.
