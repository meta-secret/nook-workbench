---
title: Move Cortex document outlines into Loom
feature: cortex-document-navigation
issue: none
started_at: 2026-08-16T20:09:46Z
agent: codex
---

# Move Cortex document outlines into Loom

## Interpreted request

Reduce the new standardized Cortex format by moving mechanically derivable
navigation out of every Markdown document and into Loom. Preserve semantic
documentation that still requires author judgment.

## Requirements

- Make Loom the sole owner of Cortex document outlines derived from headings.
- Remove every duplicated `Document map` section from `.cortex` Markdown.
- Keep curated `Relationships` in Markdown because edge selection and routing
  guidance are semantic rather than mechanical.
- Expose typed document title, path, section hierarchy, and anchors through a
  Loom application request.
- Keep link validation, structured-article validation, and Cortex consistency
  enforcement intact.
- Deliver the implementation through the normal pull-request lifecycle.

## Constraints and exclusions

- Do not infer semantic relationships from incidental citations.
- Do not move product, architecture, security, or workflow policy out of
  Cortex.
- Do not add a prompt-defined graph or a second workflow engine.
- Keep the current PR below the 5,000 authored changed-line boundary.

## Change budget and PR sequence

- Estimated authored changed lines: 3,600
- Owning modules, packages, or layers: Loom Cortex parser and command surface, Cortex navigation contract, and Cortex Markdown documents
- Public or cross-module interfaces: typed Loom `cortexCatalog` request and generated outline result
- Delivery shape: One PR
- Current PR estimated authored changed lines: 3,600
- Current PR slice and acceptance evidence: Loom-owned outline migration; Acceptance evidence: typed Loom tests, full Cortex audit, pre-push hygiene, exact-head hosted checks, review, and readiness
- PR slices and acceptance evidence: 1. Loom-owned outline migration; Acceptance evidence: typed Loom tests, full Cortex audit, pre-push hygiene, exact-head hosted checks, review, and readiness

## Initial plan

1. Add a typed Loom document-outline projection and request surface.
2. Change Cortex structure enforcement to accept authored content without an
   inline document map and reject stale inline maps.
3. Remove all 84 deterministic document-map sections.
4. Update the canonical Cortex navigation guidance and Loom documentation.
5. Run pre-push hygiene, hosted validation, review, readiness, and merge.

## Completion evidence

- No `.cortex/**/*.md` file contains an authored `Document map` section.
- Loom returns the same title, ordered heading hierarchy, and GitHub-compatible
  anchors directly from source Markdown.
- Loom rejects reintroduced inline maps and malformed document titles.
- Repository-owned exact-head checks pass and the PR is squash-merged.

## Safety review

- This plan contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
