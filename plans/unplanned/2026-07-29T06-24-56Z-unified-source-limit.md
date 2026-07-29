---
title: Unify authored source files under a one-thousand-line limit
feature: unplanned
issue: ""
started_at: 2026-07-29T06:24:56Z
agent: codex
---

# Task plan

## Interpreted request

Remove Rust's larger source-file allowance so every authored source module has
the same one-thousand-line hard ceiling. Treat oversized Rust modules as
evidence of excessive domain responsibility and require cohesive production
decomposition instead of accommodating complexity through a higher limit.

## Requirements

- Set the repository-wide Rust source limit to 1,000 physical lines.
- Keep the existing 1,000-line limit for every other authored source language.
- Update the canonical `.cortex` rule, dynamic-skill card, registry summary,
  executable skill mirror, scanner, diagnostics, and contract tests together.
- State the architectural motivation explicitly: a Rust file over the limit
  indicates an overcomplicated domain model or too many responsibilities.
- Preserve inline unit-test colocation and prohibit test-only extraction,
  arbitrary numbered splits, allowlists, baselines, and grandfathering.
- Inventory all existing Rust violations and decompose each along meaningful
  domain, capability, ownership, lifecycle, or dependency boundaries.
- Deliver the change through the existing pull request and GitHub-hosted
  validation workflow.

## Constraints and exclusions

- Do not move Rust unit tests into separate source files merely to reduce line
  counts.
- Do not weaken counting scope, exclude existing modules, or count generated
  and vendored sources as authored code.
- Do not run product tests or builds on the agent machine; use repository
  formatting locally and GitHub-hosted validation.
- Preserve public behavior and existing Rust/WASM ownership boundaries while
  decomposing oversized modules.

## Initial plan

1. Update the source-size policy and enforcing scanner to one uniform limit.
2. Update contract tests so guidance and enforcement cannot drift.
3. Use the scanner inventory to classify every oversized Rust module by its
   production responsibilities.
4. Refactor violations through cohesive named modules with narrow interfaces
   and colocated focused tests.
5. Format, push focused checkpoints, and use hosted validation until the exact
   pull-request head is green.

## Completion evidence

- Canonical and executable guidance consistently state one 1,000-line limit.
- The scanner reports a 1,000-line limit for Rust and non-Rust authored files.
- No authored Rust source file exceeds 1,000 lines.
- Repository source-architecture and applicable pull-request checks pass on
  the exact head.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
