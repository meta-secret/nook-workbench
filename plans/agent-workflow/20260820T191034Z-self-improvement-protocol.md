---
title: Implement the agent self-improvement protocol
feature: agent-workflow
issue: none
started_at: 2026-08-20T19:10:34Z
agent: codex
---

# Implement the agent self-improvement protocol

## Interpreted request

Add a conservative learning loop for substantial agent tasks. Agents should
capture provisional discoveries outside version control, finish and validate
the requested work, then promote only evidence-backed and reusable knowledge
into the existing Cortex sources of truth.

## Requirements

- Define temporary session memory under `.cortex/.session/`.
- Keep every session file untracked and delete it before task completion.
- Distinguish project knowledge, agent protocols, project workflows, and
  ephemeral observations before promotion.
- Require an end-of-task self-improvement review for substantial work.
- Require evidence before durable promotion.
- Prefer updating an existing Cortex authority over creating a new document.
- Keep `.cortex/INDEX.md` synchronized when persistent knowledge changes.
- Integrate the lifecycle into the normal implementation and pull-request flow.
- Add executable agent guidance and focused repository enforcement.
- Preserve the rule that no Cortex change is required when nothing durable was
  learned.

## Constraints and exclusions

- Cortex remains curated operational memory, not a task log or transcript.
- Session memory may contain uncertainty and failed approaches but never
  becomes authoritative by proximity to Cortex.
- Protocol evolution must be small, evidence-based, and generalizable.
- Existing Cortex taxonomy, navigation, consistency, and skill registries stay
  canonical.
- Do not persist secrets, raw logs, private data, or speculative claims.
- Do not modify active branches, issues, or pull requests owned by other tasks.

## Change budget and PR sequence

- Estimated authored changed lines: 700
- Owning modules, packages, or layers: Cortex agent policy, dynamic skills, agent skill mirrors, Git ignore policy, and preflight contracts
- Public or cross-module interfaces: `.cortex/.session/` lifecycle and the directly invocable self-improvement skill
- Delivery shape: One PR
- Current PR estimated authored changed lines: 700
- Current PR slice and acceptance evidence: Complete self-improvement lifecycle; Acceptance evidence: focused preflight tests, Cortex audit, pre-push hygiene, exact-head repository checks, and PR readiness
- PR slices and acceptance evidence: Complete self-improvement lifecycle; Acceptance evidence: focused preflight tests, Cortex audit, pre-push hygiene, exact-head repository checks, and PR readiness

## Initial plan

1. Audit current Cortex growth rules, workflow mirrors, indexes, and preflight
   checks for the smallest coherent integration surface.
2. Add the canonical dynamic skill and executable mirror.
3. Integrate session capture, reflection, promotion, cleanup, and PR evidence
   into the existing agent lifecycle.
4. Add focused enforcement for ignore and cleanup invariants.
5. Run the self-improvement review, promote only durable findings, and remove
   the task session file.
6. Validate, review, publish, and squash-merge the exact-head PR.

## Completion evidence

- Future agents can discover and invoke one canonical self-improvement rule.
- The normal coding workflow requires the session and reflection lifecycle.
- `.cortex/.session/` cannot enter version control through normal agent work.
- Preflight detects weakened ignore or cleanup contracts.
- Cortex documents and indexes agree on the new protocol.
- The exact PR head passes repository-owned validation and readiness checks.

## Safety review

- This record contains only public-safe workflow and repository context.
- It contains no prompt transcript, credentials, private data, raw logs, or
  local paths.
