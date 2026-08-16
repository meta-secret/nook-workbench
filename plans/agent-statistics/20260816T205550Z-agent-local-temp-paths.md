---
title: Isolate Loom agent statistics paths per worktree and commit
feature: agent-statistics
issue: none
started_at: 2026-08-16T20:55:50Z
agent: codex
---

# Isolate Loom agent statistics paths per worktree and commit

## Interpreted request

Prevent parallel agents from reusing writable paths copied from Loom YAML
blueprints. Make the safe path form directly executable and explain how path
fields are resolved.

## Requirements

- Audit all committed YAML examples for shared agent-writable filesystem paths.
- Replace shared agent-statistics `/tmp` examples with a Loom-resolved token.
- Include the exact 40-character Git commit in the resolved directory.
- Add a stable worktree identifier so equal commits in parallel worktrees do
  not collide.
- Resolve the same token consistently across assemble, validate, and publish.
- Keep ordinary absolute and relative path inputs compatible.
- Explain the token in canonical Loom and Cortex guidance.
- Cover stable resolution, commit isolation, and worktree isolation with tests.

## Constraints and exclusions

- Do not reinterpret infrastructure service paths as agent scratch paths.
- Do not use environment-variable interpolation inside YAML.
- Do not use random per-process directories because three separate commands
  must share one statistics file.
- Do not expose the source worktree path; derive an opaque identifier.
- Keep Cortex document maps and relationships intact.

## Change budget and PR sequence

- Estimated authored changed lines: 300
- Owning modules, packages, or layers: Loom agent-statistics path resolution, YAML blueprints, and agent-statistics guidance
- Public or cross-module interfaces: `{agentTempDir}` token in Loom agent-statistics path fields
- Delivery shape: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Agent-local path resolution; Acceptance evidence: focused resolver tests, Loom verification, Cortex audit, hosted preflight, exact-head review, and readiness
- PR slices and acceptance evidence: 1. Agent-local path resolution; Acceptance evidence: focused resolver tests, Loom verification, Cortex audit, hosted preflight, exact-head review, and readiness

## Initial plan

1. Add a typed Loom resolver for `{agentTempDir}`.
2. Build its directory from OS temp, Git HEAD, and a hash of the canonical
   worktree root.
3. Apply it to every agent-statistics input and output path.
4. Update the three canonical blueprints and agent guidance.
5. Add focused tests for stable and isolated resolution.
6. Run the normal hosted delivery lifecycle and squash-merge.

## Completion evidence

- No agent-statistics blueprint contains a shared writable `/tmp` filename.
- Resolved paths contain the exact Git HEAD and an opaque worktree identifier.
- Parallel worktrees at one commit resolve to different directories.
- Assemble, validate, and publish resolve the same authored token identically.
- Loom and Cortex checks pass on the exact merged head.

## Safety review

- This plan contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
