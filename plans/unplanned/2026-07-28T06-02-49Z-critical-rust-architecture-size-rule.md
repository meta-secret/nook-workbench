---
title: Make oversized Rust architecture violations a critical repository rule
feature: unplanned
issue: none
started_at: 2026-07-28T06:02:49Z
agent: codex
parent_plan: plans/unplanned/2026-07-28T01-09-00Z-source-file-size-end-to-end-delivery.md
---

# Make oversized Rust architecture violations a critical repository rule

## Interpreted request

Make the Rust source-size boundary a highest-priority repository rule: authored
Rust files above 1,500 lines are prohibited, and compliance must come from
cohesive domain or architectural decomposition rather than moving tests or
cutting a file into arbitrary chunks.

## Requirements

- Preserve the hard 1,500-line Rust and 1,000-line non-Rust limits.
- State prominently that extracting tests alone is not an acceptable refactor
  for an oversized Rust production module.
- Prohibit mechanical half-splits and meaningless numbered modules.
- Require production responsibilities to be separated along domain,
  capability, ownership, lifecycle, or dependency boundaries with narrow
  interfaces.
- Make scanner failure guidance direct agents toward architectural refactoring.
- Add contract coverage so the critical instruction and enforcement cannot
  silently drift apart.
- Provide an executable project skill mirrored across supported agent surfaces.

## Constraints

- Do not pretend a line-count scanner can mechanically prove architectural
  quality.
- Do not weaken limits, add authored-code allowlists, or exempt existing
  violations.
- Keep this policy change focused; remediate any previously test-only Rust split
  in a subsequent architectural pull request.

## Plan

1. Add the critical rule to the `.cortex` entry point and canonical dynamic
   skill registry.
2. Add the executable source-size skill and supported mirrors.
3. Implement the repository-wide scanner and critical policy contract tests.
4. Integrate the scanner into preflight and CI-facing task surfaces.
5. Format, publish, validate on GitHub Actions, resolve feedback, and
   squash-merge.

## Completion evidence

- The critical rule is prominent in `.cortex/AGENTS.md`.
- Canonical and executable skill guidance explicitly rejects test-only and
  arbitrary production splits.
- The source-size gate reports every authored hard-limit violation and its
  diagnostic requires architectural decomposition.
- Contract tests cover limits, exclusions, failure output, and critical policy
  language.
- The pull request is green on its exact head and squash-merged.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
