---
title: Rename INDEX.md to knowledge-graph.md and enforce knowledge-graph-first rule
feature: unplanned
started_at: 2026-08-18T06:31:00Z
agent: antigravity
---

# Task plan

## Interpreted request

Rename .cortex/INDEX.md to .cortex/knowledge-graph.md (supporting k-graph.md as an alias) and update Cortex guidance to establish a mandatory P1 rule: AI agents must always consult the Knowledge Graph (knowledge-graph.md) first whenever they need project knowledge or context. Update Loom tooling and tests to validate knowledge-graph.md.

## Requirements

- Rename `.cortex/INDEX.md` to `.cortex/knowledge-graph.md`.
- Update `.cortex/AGENTS.md` and root `AGENTS.md` to introduce the P1 rule requiring agents to check `knowledge-graph.md` first.
- Update Loom (`agentic-ai/loom/src/lib/cortex-index.ts`, `cortex-document-structure.ts`, tests) to recognize `knowledge-graph.md` as the central index and knowledge graph.
- Update all internal cross-references in `.cortex/`, `.agents/skills/`, and `.cursor/rules.md`.
- Verify with `task loom:verify` and `task loom:cortex-audit`.
- Host-format and pass pre-push hygiene via `task loom:pre-push`.
- Open a PR on `origin/main`, run exact-head validation, and squash-merge when ready.

## Constraints and exclusions

- Maintain strict compliance with .cortex/AGENTS.md, cortex-writer, and cortex-article-structure rules.
- Do not alter domain logic or cryptographic boundaries.
- Keep cognitive complexity low with clear sentences and short bullet points.
- Do not copy raw conversation transcripts into Workbench records.

## Change budget and PR sequence

- Estimated authored changed lines: 250
- Owning modules, packages, or layers: .cortex documentation, agentic-ai/loom index and structure auditing
- Public or cross-module interfaces: Loom cortex-audit and cortex-index CLI/lib contracts
- Delivery shape: One PR
- Current PR estimated authored changed lines: 250
- Current PR slice and acceptance evidence: Rename INDEX.md to knowledge-graph.md, enforce P1 rule, and update Loom tool validations; Acceptance evidence: task loom:verify and task loom:cortex-audit pass with 0 broken links/findings, PR checks green
- PR slices and acceptance evidence: Rename INDEX.md to knowledge-graph.md, enforce P1 rule, and update Loom tool validations; Acceptance evidence: task loom:verify and task loom:cortex-audit pass with 0 broken links/findings, PR checks green

## Initial plan

1. Publish this task plan to Workbench.
2. Update Loom index and document-structure libraries and unit tests.
3. Rename `.cortex/INDEX.md` to `.cortex/knowledge-graph.md` and update content headers and links.
4. Update `.cortex/AGENTS.md`, root `AGENTS.md`, dynamic skills, and workflows.
5. Run `task loom:verify`, `task loom:cortex-audit`, and `task loom:pre-push`.
6. Commit, run local review, push branch, open PR, and validate.
7. Squash-merge when green and publish Workbench worklog and statistics.

## Completion evidence

- `.cortex/knowledge-graph.md` exists as the canonical knowledge graph.
- `.cortex/INDEX.md` is removed.
- `.cortex/AGENTS.md` contains the P1 rule mandating knowledge-graph-first lookups.
- `task loom:verify` passes all TypeScript and test suites.
- `task loom:cortex-audit` passes cleanly with 0 broken links.
- Pull request is validated and squash-merged to main.

## Safety review

- The record contains only public-safe development context.
- No secrets, credentials, private user data, or raw logs are present.
