---
title: Move Cortex document-map mechanics into its executable skill
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/cortex-document-map-capability.md
started_at: 2026-08-31T00:55:35Z
agent: codex
gizmo_id: cortex-document-map-application
---

# Move Cortex document-map mechanics into its executable skill

## Interpreted request

Continue the owner-local executable-skill migration by moving deterministic
Cortex document-map behavior out of Loom and beside the AI-owned skill that
defines it. Preserve mandatory repository auditing while keeping Loom limited
to generic aggregation and the active harness responsible for agent lifecycle.

## Requirements

- Convert the Cortex document-map skill to a canonical skill directory with a
  regular Bun and TypeScript application, focused tests, and repository quality
  rules.
- Expose a statically registered, read-only domain-YAML action through the
  existing executable-skill host.
- Move the document and knowledge-graph parser, topology diagnostics, and index
  rendering behavior from Loom into the skill-owned application.
- Preserve current diagnostics and fail-closed mandatory Cortex auditing.
- Complete exact-head review, hosted validation, readiness, merge, and
  Workbench closeout.

## Constraints and exclusions

- Do not change Team Plan, module delivery, delegation, expert runtime,
  statistics, or native subagent lifecycle behavior.
- Do not add arbitrary manifest-selected imports or commands.
- The skill action is deterministic and read-only; it does not mutate Cortex.
- Heavy validation remains remote-first. No local Rust or product build is
  authorized.
- Preserve unrelated worktrees, branches, pull requests, and user changes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: cortex-document-map-application
- Estimated authored changed lines: 1850
- Owning modules, packages, or layers: AI-owned Cortex document-map skill application, executable-skill static action registry, and Loom Cortex-audit aggregation seam.
- Ownership units:
1. Capability: Cortex document-map executable application; Gizmo ID: cortex-document-map-application; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: discoverable read-only YAML action, focused parser and topology tests, unchanged mandatory audit diagnostics, executable-skill verification, Cortex audit, TypeScript checks, exact-head hosted validation, clean review, and readiness
- Public or cross-module interfaces: Static executable-skill action registration and the internal Loom aggregation result consumed by cortex-audit.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1850
- Current PR slice and acceptance evidence: Owner-local read-only document-map skill application with Loom aggregation only; Acceptance evidence: focused package and compatibility tests, skills verification, Loom Cortex audit, TypeScript policy, exact-head hosted validation, review, readiness, merge, and Workbench closeout
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: cortex-document-map-application; Gizmo name: Cortex document-map application; Predecessor Gizmo ID: None; Owner-local read-only document-map skill application with Loom aggregation only; Estimated authored changed lines: 1850; Acceptance evidence: focused package and compatibility tests, skills verification, Loom Cortex audit, TypeScript policy, exact-head hosted validation, review, readiness, merge, and Workbench closeout

## Initial plan

1. Freeze current Nook main and the document-map issue, then assign the bounded
   AI implementation in an isolated worktree.
2. Review the handoff for exact scope, static registration, diagnostics, and
   absence of foreign Team Plan or subagent changes.
3. Push the focused PR promptly, use hosted exact-head validation, resolve
   findings through the AI owner, and merge only after readiness.
4. Publish the issue completion, worklog, and immutable PR statistics.

## Completion evidence

- The canonical document-map skill owns its Bun and TypeScript application and
  focused tests.
- Loom retains only generic Cortex-audit aggregation for this capability.
- Exact-head repository checks, AI review, readiness, and the merged PR are
  recorded.
- Workbench issue, worklog, and statistics are published after merge.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
