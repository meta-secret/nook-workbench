---
title: Enforce a repository-wide source file line limit
feature: unplanned
issue: none
started_at: 2026-07-28T00:57:34Z
agent: codex
supersedes: none
---

# Enforce a repository-wide source file line limit

## Interpreted request

Capture source-file size as durable Nook engineering guidance and add a static
repository gate that rejects authored source files longer than 1,000 lines.

## Requirements

- Add a canonical `.cortex` dynamic skill describing the 1,000-line maximum,
  the architectural warning behind it, and the required SOLID, TDD, and
  language-specific response.
- Add an executable project skill mirror for direct future-agent invocation.
- Add a deterministic repository check with behavior-focused tests.
- Scan authored source across the repository, including production, test,
  automation, and tooling code.
- Exclude only generated, vendored, dependency, build-output, and fixture-data
  artifacts that are not maintained as source code.
- Make every oversized authored source file fail the check with an actionable
  diagnostic; do not grandfather current violations.
- Wire the gate into the repository-owned preflight/CI path.
- Refactor current violations until the new hard gate passes.

## Constraints and exclusions

- Do not weaken the rule with a baseline, changed-files-only mode, or per-file
  allowlist.
- Do not satisfy the limit through minification, compressed formatting,
  generated include indirection, or arbitrary mechanical splitting that leaves
  the same responsibilities entangled.
- Preserve behavior and public interfaces while extracting cohesive modules.
- Use behavior-focused tests before or alongside risky refactors.
- Update PR 821 without merging it or waiting for asynchronous checks.

## Initial plan

1. Capture the rule in `.cortex`, its registry, and an executable skill mirror.
2. Implement and test a repository-root-aware line-limit scanner in preflight.
3. Integrate the scanner with the normal preflight task and CI invariants.
4. Inventory all existing authored violations and refactor them by language and
   responsibility until no source file exceeds 1,000 lines.
5. Apply repository formatting, run focused scanner/preflight validation, push
   the coherent result, and update PR 821.

## Completion evidence

- The dynamic skill and executable mirror state the same hard rule.
- Scanner tests cover included source, excluded generated/vendor artifacts,
  exact-boundary acceptance, oversized rejection, and deterministic output.
- Repository preflight fails for any authored source file over 1,000 lines.
- The complete repository inventory passes without baselines or allowlists.
- PR 821 contains the rule, gate, refactors, and validation evidence.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
