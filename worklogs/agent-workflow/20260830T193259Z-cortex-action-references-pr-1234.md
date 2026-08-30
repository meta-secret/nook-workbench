---
title: Compact Cortex action references
feature: agent-workflow
issue: null
plan: plans/agent-workflow/20260830T180732Z-cortex-action-references-superseding.md
nook_pr: 1234
status: completed
started_at: 2026-08-30T16:22:35Z
finished_at: 2026-08-30T19:32:59Z
agent: codex
---

# Compact Cortex action references

## Outcome

Delivered stable compact IDs for Cortex categories, documents, and anchored items, plus per-action IDs and typed Cortex references on persisted agent events and human-readable action output. Squash-merged Nook PR 1234 after exact-head review and hosted validation.

## Progress

- Added the authoritative `.cortex/identifiers.json` registry and a full Cortex audit for uniqueness, coverage, target stability, and historical-ID preservation.
- Added deterministic action IDs such as `a0002` to every persisted event and stderr rendering, with typed category, document, and item references.
- Bound journal replay and registry validation to the source revision so historical traces cannot silently resolve against a different Cortex registry.
- Removed free-form event details in favor of typed evidence digests and rejected duplicate reference authorities.
- Updated the repository-policy workflow to fetch and audit the exact pre-push registry baseline while preserving the required shallow checkout contract.

## Implementation problems

- Ten review batches found replay-integrity, source-binding, duplicate-authority, and workflow-baseline defects. Each was resolved on a new exact head and its review threads were closed.
- Repository policy first rejected a forbidden authored TypeScript test assertion, then rejected a full-history checkout change. The assertion was rewritten and the workflow was corrected to retain fetch depth 2 while explicitly fetching only the pre-push baseline SHA.
- Two earlier hosted PR validation runs were cancelled by newer exact heads; the terminal validation matrix ran once on the clean head and passed.

## Decisions

- IDs are short stable registry keys, not content hashes, so humans can read them while audits preserve identity across moves and edits.
- Every action event owns an action ID; references are typed and point only to registered Cortex authorities.
- Replay resolves against the registry at the event's source revision and fails closed when that source cannot be proven.
- Registry evolution preserves retired identifiers instead of reassigning them.

## Validation

- `task loom:pre-push`
- `bun run verify`: 637 tests passed, 0 failed, 4,363 assertions
- `task loom:cortex-audit`
- `task pr:validate PR=1234`: exact-head review clean and CI dispatched
- GitHub Actions run 33330847823: native Rust, RustSec, fuzz smoke, Dylint, Kani, Proptest/Insta/Loom, WASM build and Node tests, web verification, headless demo, and preview all passed
- `task pr:ready PR=1234`: ready at head `1faaee783dc40edaff8b4402dff01f5a35ea3b56`
- Squash merge: `ba26eef45a74fd07ff2756411b378bf26f9acced`
- Agent statistics: `stats/ai-agent/1234.yaml`

## Remaining work

- None.
