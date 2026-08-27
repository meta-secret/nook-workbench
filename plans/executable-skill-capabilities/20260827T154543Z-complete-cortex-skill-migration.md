---
title: Complete Cortex skill migration
feature: executable-skill-capabilities
issue: none
started_at: 2026-08-27T15:45:43Z
agent: codex
---

# Task plan

## Interpreted request

Finish the transition to Cortex as the universal semantic authority for project skills. Remove the tracked harness-specific skill directory and its Cursor and Claude mirrors. Preserve real deterministic implementations by relocating them to their owning production packages instead of deleting behavior.

## Requirements

- Keep every durable skill rule in its responsible Gizmo, AI, development-core, security, SRE, web-development, or shared Cortex authority.
- Remove tracked `.agents/skills`, `.cursor/skills`, and `.claude/skills` project mirrors.
- Relocate executable TypeScript capability code and focused tests to the owning Loom or engineering package.
- Update scaffolding, audits, tests, Task entrypoints, prompts, and documentation that assume executable project-skill mirrors.
- Preserve universal repository routing through `AGENTS.md` and the Cortex knowledge graphs.
- Reject reintroduction of harness-specific semantic skill authority.
- Deliver through a regular pull request with exact-head review, validation, feedback correction, readiness, and squash merge.

## Constraints and exclusions

- Do not remove a deterministic capability merely because its current path is under `.agents/skills`.
- Do not introduce replacement Codex, Cursor, Claude, or Antigravity profile files.
- Do not change product behavior, security policy, deployment behavior, or model selection.
- Do not make Cortex Markdown an executable scheduler.
- Keep the migration within one cohesive PR. Re-estimate and split before expansion if authored changes approach the repository ceiling.

## Change budget and PR sequence

- Estimated authored changed lines: 2,200
- Owning modules, packages, or layers: Cortex skill governance, Loom deterministic capabilities, repository agent entry points, skill scaffolding and audits, harness-neutral preflight contracts
- Ownership units:
1. Capability: Universal Cortex skill authority and removal of harness-specific mirrors; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: no tracked project skill mirrors, all canonical skill cards remain reachable through owning graphs, deterministic capability code remains tested in its production owner, Cortex and Loom audits pass
- Public or cross-module interfaces: repository skill discovery contract, Loom skill scaffolding and Cortex audit behavior
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,200
- Current PR slice and acceptance evidence: Complete harness-neutral skill migration; Acceptance evidence: exact tracked-file inventory, preserved deterministic capability tests, no stale mirror references, Cortex audit, focused Loom tests, pre-push hygiene, exact-head hosted validation, review resolution, and readiness
- PR slices and acceptance evidence: 1. Complete harness-neutral skill migration; Acceptance evidence: exact tracked-file inventory, preserved deterministic capability tests, no stale mirror references, Cortex audit, focused Loom tests, pre-push hygiene, exact-head hosted validation, review resolution, and readiness

## Initial plan

1. Freeze current Main and inventory every tracked skill mirror, executable implementation, symlink, caller, scaffold, and audit.
2. Relocate real deterministic capability code and tests into the responsible production package.
3. Remove project skill wrappers and harness mirror symlinks.
4. Update Cortex and deterministic enforcement to use team-owned skill cards as the sole semantic authority.
5. Run focused audits, pre-push hygiene, review, exact-head validation, feedback correction, readiness, and squash merge.

## Completion evidence

- Git tracks no `.agents/skills`, `.cursor/skills`, or `.claude/skills` project skill files.
- Every previously canonical rule remains reachable from exactly one owning Cortex graph.
- Executable behavior formerly embedded in the skill tree remains available and tested from its production owner.
- Active repository guidance contains no stale instruction to create or synchronize harness-specific skill mirrors.
- The implementation pull request is review-clean, exact-head green, ready, and squash-merged.

## Safety review

- This record contains only public repository architecture, scope, ownership, and validation intent.
- It contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
