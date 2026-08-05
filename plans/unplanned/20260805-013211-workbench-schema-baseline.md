---
title: "Restore a green Workbench schema-validation baseline"
feature: unplanned
started_at: 2026-08-05T01:32:11Z
agent: codex
---

# Task plan

## Interpreted request

Repair Nook Workbench so its repository-wide validation succeeds against the
records already stored on `main`, without weakening validation for newly added
or modified records.

## Requirements

- Eliminate the current validation failures across historical issues, plans,
  and worklogs.
- Preserve historical records as durable context instead of rewriting their
  contents merely to satisfy a newer schema.
- Continue enforcing the current schema for new and changed records.
- Add automated coverage for the historical-compatibility boundary and current
  record enforcement.
- Keep statistics validation green and retain the sensitive-content scan.
- Deliver through a reviewed, validated, squash-merged Workbench pull request.

## Constraints and exclusions

- Do not alter Nook product code or runtime behavior.
- Do not suppress validation errors for arbitrary future records.
- Do not store raw prompts, transcripts, secrets, private data, raw logs, local
  paths, or unnecessary infrastructure details.

## Initial plan

1. Inventory the failing records and identify when the stricter schemas became
   authoritative.
2. Introduce an explicit, version-controlled historical compatibility boundary
   while retaining strict validation for current changes.
3. Add regression tests covering accepted historical records and rejected new
   schema violations.
4. Run repository validation, statistics validation, and the sensitive-content
   scanner.
5. Push the repair, complete GitHub validation, address feedback, and
   squash-merge.

## Completion evidence

- `node scripts/validate.mjs` succeeds on the complete repository.
- Validator tests prove new invalid records still fail.
- All statistics records continue to pass `scripts/validate-stats.rb`.
- The Workbench pull request is squash-merged.

## Safety review

This plan contains only public-safe engineering context and no sensitive or
conversation-derived content.
