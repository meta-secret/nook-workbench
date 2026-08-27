# Task plan

## Interpreted request

Make Nook's five implementation teams visible as deterministic Codex agent types. Bind each type to one thin project profile and one team context. Update Gizmo's routing contract and dispatch prompts so team identity, context isolation, inherited model settings, write boundaries, and delivery ownership are explicit. Add executable audits that reject drift.

## Requirements

- Define one canonical custom-agent profile for AI, development core, security, SRE, and web development.
- Use human-readable agent types that match the full team names.
- Keep profiles thin. They provide identity and routing defaults, while Gizmo's task contract provides the exact baseline, allowed paths, forbidden paths, dependencies, expected result, and acceptance evidence.
- Require each team agent to load only its own team entry points and the smallest task-relevant authorities.
- Require every team agent to inherit Gizmo's exact model and reasoning effort. Profiles and dispatch surfaces must not select a different model.
- Preserve isolated write workspaces, verified commit handoffs, foreign-team escalation, and Gizmo-owned integration and delivery.
- Update the active implementation and CI-fix prompts to dispatch the canonical agent types.
- Audit the complete team-profile TOML contract and the recursive custom-agent allowlist.
- Add Rust preflight assertions for canonical profile and dispatch wiring.

## Constraints and exclusions

- Do not promise control over Codex-generated sidebar nicknames.
- Do not enable unfinished Codex identity feature flags.
- Do not put domain implementation knowledge, fixed path grants, scheduling authority, or delivery authority in a custom-agent profile.
- Do not weaken recursive detection of unregistered `.codex/agents` profiles.
- Do not add a model or reasoning-effort field to any team profile.
- Do not manually trigger hosted Actions.
- Keep this work in the existing draft pull request.

## Change budget and PR sequence

- Estimated authored changed lines: 900
- Owning modules, packages, or layers: `.codex/agents`, Cortex agent governance, GitHub dispatch prompts, Loom profile audit, Rust preflight
- Ownership units:
1. Capability: Canonical team identities, profiles, Cortex contracts, and dispatch prompts; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Five exact profile TOMLs, canonical routing documentation, prompt mappings, Cortex audit, and profile-discovery proof
2. Capability: Typed team-profile catalog and deterministic Loom audit; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/team-agents/catalog.ts, agentic-ai/loom/src/team-agents/audit.ts, agentic-ai/loom/src/module-experts/audit.ts; Expertise allowed test paths: agentic-ai/loom/tests/team-agents/audit.test.ts, agentic-ai/loom/tests/module-experts/audit.test.ts; Expertise forbidden paths: .cortex/AGENTS.md, .cortex/gizmo/workflows/team-oriented-development.md, .cortex/gizmo/workflows/subagent-delegation.md, .codex/agents/team-agents/ai_team_agent.toml, .codex/agents/team-agents/development_core_team_agent.toml, .codex/agents/team-agents/security_team_agent.toml, .codex/agents/team-agents/sre_team_agent.toml, .codex/agents/team-agents/web_development_team_agent.toml, preflight/tests/workbench.rs; Expertise consumer interfaces: Recursive custom-agent allowlist and exact team-profile renderer findings consumed by Loom validation; Expertise acceptance evidence: Focused Bun tests, Loom lint, module-expert validation, and Loom verification; Capability acceptance evidence: Every team profile is registered, parsed, rendered exactly, and rejected on unregistered or forbidden fields
3. Capability: Rust preflight wiring for team agent identities; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused Rust preflight tests reject missing profiles, naming drift, model overrides, and incomplete dispatch mappings without panic shortcuts
- Public or cross-module interfaces: `ai_team_agent`, `development_core_team_agent`, `security_team_agent`, `sre_team_agent`, and `web_development_team_agent`
- Delivery shape: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Add and enforce all five team agent identities in the existing Gizmo control-plane draft; Acceptance evidence: exact profile audits, dispatch mapping tests, Cortex audit, focused Rust preflight, Loom verification, pre-push hygiene, and clean pushed head
- PR slices and acceptance evidence: Add and enforce all five team agent identities in the existing Gizmo control-plane draft; Acceptance evidence: exact profile audits, dispatch mapping tests, Cortex audit, focused Rust preflight, Loom verification, pre-push hygiene, and clean pushed head

## Initial plan

1. Add five thin project custom-agent profiles and document their canonical `agent_type` mapping.
2. Update Gizmo workflows and active dispatch prompts to select those exact profiles while preserving context, model, workspace, and delivery boundaries.
3. Add a typed Loom catalog and exact profile audit. Integrate it into recursive custom-agent validation.
4. Add Rust preflight assertions for profile and dispatch wiring.
5. Integrate team-owned commits, run focused and aggregate validation, publish the completion record, update the draft pull request, and push the exact head.

## Completion evidence

- Five project profiles are discoverable under their canonical agent types.
- Each profile loads one team context, inherits the parent model settings, requires a bounded task contract, and refuses delivery-state mutation.
- Loom rejects profile schema drift, model overrides, unknown profiles, and recursive allowlist gaps.
- Rust preflight rejects missing canonical wiring.
- Cortex writing, structure, map, and consistency audits pass.
- The draft pull request points to the exact pushed head and no hosted Actions were manually triggered.

## Safety review

This plan contains no copied conversation, sensitive access material, private user data, machine configuration, execution trace, local path, internal address, or unnecessary infrastructure detail. It introduces no new security or product data boundary. Team profiles remain routing contracts and do not grant path-level or delivery authority.
