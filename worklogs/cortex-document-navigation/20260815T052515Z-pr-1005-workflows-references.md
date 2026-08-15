---
title: Cortex workflow and reference navigation slice delivered
feature: cortex-document-navigation
issue: issues/cortex-document-navigation/migrate-workflows-and-references.md
plan: plans/cortex-document-navigation/20260815T044000Z-workflows-and-references.md
nook_pr: 1005
status: blocked
started_at: 2026-08-15T04:40:00Z
finished_at: 2026-08-15T05:25:15Z
agent: codex
---

# Cortex workflow and reference navigation slice delivered

## Outcome

Merged document navigation for all 15 available workflow and reference files.
Three workflow files remain deferred behind active Nook PR #1002.

## Progress

- Added relationships and complete hierarchical maps to 6 references and 9
  workflows.
- Put navigation immediately after every title.
- Converted substantial preambles into first-class `Overview` articles.
- Removed 15 migrated paths from the monotonic ledger.
- Preserved command contracts and detailed procedural bodies.

## Implementation problems

- Initial keyword summaries sometimes misclassified headings. Three advisory
  review passes identified and corrected every reported semantic mismatch.
- The first generator inserted navigation too late in a legacy numbered-list
  document. The final shape places navigation first and indexes the preamble.
- Repeated pre-push runs waited behind shared Docker formatting work.

## Decisions

- Remaining family migrations will start with article-specific summaries rather
  than keyword-generated prose.
- Navigation belongs immediately after the H1; detailed introductory material
  becomes an indexed `Overview` article.
- Files owned by #1002 remain read-only until that ownership boundary clears.

## Validation

- `task loom:cortex-audit`: passed after every fix round.
- `task loom:verify`: 114 tests passed.
- `task preflight:typescript-state`: 8 tests passed.
- `task preflight:loom-contracts`: 2 tests passed.
- `task loom:pre-push`: passed after every content-fix round.
- Three advisory reviews completed and all actionable findings were fixed.
- Source architecture and Loom selected checks passed on exact head
  `6504cee532d02b2969a6b5c6d7d1a1a6829e7616`.
- `task pr:ready PR=1005` reported ready with no feedback or unresolved
  threads.
- [Nook PR #1005](https://github.com/meta-secret/nook/pull/1005) squash-merged
  as `8690bacc3a205998169c6bc8692fc30c20220561`.

## Remaining work

- Migrate the three #1002-owned workflow files after ownership clears.
- Continue design, execution-plan, product, and root document slices.
