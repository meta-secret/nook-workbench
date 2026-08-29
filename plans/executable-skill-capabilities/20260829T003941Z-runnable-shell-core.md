---
title: Narrow runnable command hardening to the shell core
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/discoverable-yaml-protocol.md
started_at: 2026-08-29T00:39:41Z
agent: codex
---

# Task plan

## Interpreted request

Deliver the bounded shell-language analysis needed before repository commands
can safely reach executable-skill providers. Keep this pull request limited to
shell tokenization, state, dispatch, structure, reviewed source seams, and
focused adversarial tests. Move configuration and runtime-root inventory to a
dependent successor and inherit the separately merged hosted-launch hardening.

## Requirements

- Preserve command-prefix assignment locality while retaining assignment-only state.
- Analyze reachable function definitions in execution order and every case arm.
- Analyze static process substitutions and shell-fed heredoc bodies, rejecting unsupported dynamic input.
- Cover conditional state, positional shell arguments, npm shell calls, compound substitutions, traps, and PATH mutation conservatively.
- Keep authored files below 1,000 lines and the aggregate authored diff below 3,000 lines.
- Resolve only review threads owned by this slice; retain successor-owned configuration findings as open handoffs.

## Constraints and exclusions

- Exclude Task, package, workflow, action, Vite, and TypeScript runtime-root inventory.
- Exclude Docker and hosted-browser production changes.
- Do not dispatch CI until the exact pushed head has a stable clean review state.
- Do not broaden the analyzer into arbitrary shell execution.

## Change budget and PR sequence

- Estimated authored changed lines: 5000
- Owning modules, packages, or layers: Loom runnable shell command analysis and successor configuration/runtime inventory
- Ownership units:
1. Capability: Bounded runnable shell command analysis; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused adversarial tests, Loom pre-push, skill verification, source and TypeScript contracts, exact-head review, and authored-size checks
2. Capability: Configuration and runtime-root inventory; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Successor-focused Task, package, workflow, action, Vite, and TypeScript loader regressions plus full repository validation
- Public or cross-module interfaces: runnable shell command-source discovery consumed by Loom reachability audits
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 2200
- Current PR slice and acceptance evidence: Deliver bounded shell command analysis; Acceptance evidence: adversarial shell semantics tests and exact-head review pass.
- PR slices and acceptance evidence:
1. Deliver bounded shell command analysis; Acceptance evidence: adversarial shell semantics tests and exact-head review pass.
2. Add configuration and runtime-root inventory; Acceptance evidence: schema-owned root inventory and dynamic-loader regressions pass without broadening shell authority.

## Initial plan

1. Rebase on the exact main baseline and remove successor-owned changes.
2. Close the finite set of active shell-analysis findings with adversarial tests.
3. Run focused and repository gates, publish the exact bounded diff, and stabilize review.
4. Hand open configuration findings to the dependent successor.

## Completion evidence

- PR 1187 contains only the shell-core files and focused tests.
- The identified shell execution paths either resolve statically or reject fail closed.
- The exact pushed head remains within authored-size limits and receives stable review.
- Configuration findings remain explicit inputs to the successor rather than being silently closed.

## Safety review

This plan contains only public repository concepts and delivery requirements. It excludes raw prompts, transcripts, secrets, private data, raw logs, local paths, and unnecessary infrastructure detail.
