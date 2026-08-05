---
title: "Restore strict Workbench record validation with legacy compatibility"
feature: unplanned
started_at: 2026-08-05T01:36:09Z
agent: codex
---

# Task plan

## Interpreted request

Make the repository-wide Workbench record validator pass on current `main`
while preserving strict schema enforcement for newly created or modified
issues, plans, and worklogs.

## Requirements

- Resolve every current `scripts/validate.mjs` finding.
- Preserve immutable historical records without rewriting their contents.
- Permit direct-request plans and worklogs to omit an issue reference, as the
  repository contract already allows.
- Ensure legacy exemptions are bound to exact content and exact known findings.
- Add regression coverage for strict new-record validation and historical
  compatibility.
- Keep changed-statistics validation and the sensitive-content scan intact.

## Constraints and exclusions

- This plan supersedes
  `plans/unplanned/20260805-013211-workbench-schema-baseline.md`; the earlier
  plan incorrectly implied that every historical statistics schema would be
  migrated even though statistics validation is intentionally changed-file
  scoped.
- Do not change Nook product code or runtime behavior.
- Do not create a general skip path that future invalid records can use.
- Do not store sensitive or conversation-derived material.

## Initial plan

1. Separate reusable record validation from the command-line entrypoint.
2. Capture existing findings in a content-hashed, exact-error compatibility
   baseline and make that baseline immutable after introduction.
3. Keep new and modified records on the current strict schema.
4. Add behavior-focused validator tests and wire them into GitHub validation.
5. Run full record validation, tests, changed-statistics validation, and the
   sensitive-content scan before squash merge.

## Completion evidence

- `node scripts/validate.mjs` passes across the complete repository.
- Tests prove invalid new automation values fail and modified legacy content
  loses its exemption.
- GitHub validation passes on the exact PR head.
- The repair PR is squash-merged and linked from a completion worklog.

## Safety review

This superseding plan contains public-safe engineering context only.
